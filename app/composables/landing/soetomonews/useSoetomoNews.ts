import { usePublicApi } from "~/composables/api/usePublicApi";
import { ref } from "vue";

export interface SoetomoNewsItem {
    berita_id: string;
    judulberita: string;
    waktuberita: string;
    thumbberita: string;
    deskripsiberita: string;
    is_internal: boolean;
}

interface SoetomoNewsLandingResponse {
    metadata?: {
        code: number;
        message: string;
    };
    response?: {
        soetomo: SoetomoNewsItem[];
        jatim: SoetomoNewsItem[];
    };
}

export const useSoetomoNews = () => {
    const api = usePublicApi();

    const news = ref<SoetomoNewsItem[]>([]);
    const loading = ref(false);
    const error = ref<string | null>(null);

    const getSoetomoNews = async () => {
        loading.value = true;
        error.value = null;

        try {
            const response = await api<SoetomoNewsLandingResponse>("/public/berita/landing", {
                method: "GET",
            });

            news.value = response?.response?.soetomo ?? [];
        } catch (err: any) {
            console.error("Gagal load Soetomo News:", err);

            error.value =
                err?.data?.metadata?.message || err?.message || "Gagal mengambil berita.";
        } finally {
            loading.value = false;
        }
    };

    return {
        news,
        loading,
        error,
        getSoetomoNews,
    };
};
