import { usePublicApi } from "~/composables/api/usePublicApi";
import { ref } from "vue";

export interface SoetomoNewsDetail {
  berita_id: string;
  judulberita: string;
  waktuberita: string;
  thumbberita: string;
  deskripsiberita: string;
  is_eksternal: boolean;
  fotoberita?: string[];
}

interface SoetomoNewsDetailResponse {
  metadata?: {
    code: number;
    message: string;
  };

  response?: SoetomoNewsDetail;
}

export const useSoetomoNewsDetail = () => {
  const api = usePublicApi();

  const berita = ref<SoetomoNewsDetail | null>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const getSoetomoNewsDetail = async (beritaId: string) => {
    loading.value = true;
    error.value = null;

    try {
      const response = await api<SoetomoNewsDetailResponse>(
        `/public/berita/${beritaId}`,
        {
          method: "GET",
        },
      );

      berita.value = response?.response ?? null;
    } catch (err: any) {
      console.error("Gagal load detail berita soetomo news:", err);

      error.value =
        err?.data?.metadata?.message ||
        err?.message ||
        "Gagal mengambil detail berita soetomo news.";
    } finally {
      loading.value = false;
    }
  };

  return {
    berita,
    loading,
    error,
    getSoetomoNewsDetail,
  };
};