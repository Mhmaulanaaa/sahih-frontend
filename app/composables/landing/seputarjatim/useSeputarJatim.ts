import { usePublicApi } from "~/composables/api/usePublicApi";
import { ref } from "vue";

export interface SeputarJatimItem {
    berita_id: string;
    judulberita: string;
    waktuberita: string;
    thumbberita: string;
    deskripsiberita: string;
    is_eksternal: boolean;
}

interface SeputarJatimLandingResponse {
    metadata?: {
        code: number;
        message: string;
    };

    response?: {
        soetomo: SeputarJatimItem[];
        jatim: SeputarJatimItem[];
    };
}

export const useSeputarJatim = () => {
    const api = usePublicApi();

    const news = ref<SeputarJatimItem[]>([]);
    const loading = ref(false);
    const error = ref<string | null>(null);

    const getSeputarJatim = async () => {
        loading.value = true;
        error.value = null;

        try {
            const response = await api<SeputarJatimLandingResponse>(
                "/public/berita/landing",
                {
                    method: "GET",
                },
            );

            news.value = response?.response?.jatim ?? [];
        } catch (err: any) {
            console.error("Gagal load Seputar Jawa Timur:", err);

            error.value =
                err?.data?.metadata?.message ||
                err?.message ||
                "Gagal mengambil berita Seputar Jawa Timur.";
        } finally {
            loading.value = false;
        }
    };

    return {
        news,
        loading,
        error,
        getSeputarJatim,
    };
};