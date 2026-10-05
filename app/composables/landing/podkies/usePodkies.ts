import { usePublicApi } from "~/composables/api/usePublicApi";
import { ref } from "vue";

export interface Podkies {
    podkies_id: number;
    kode_podkies: string;
    judul_podkies: string;
    episode: number | string;
    link_youtube: string;
    is_active: boolean;
}

export interface PodkiesVideo {
    id: string;
    podkies_id: number;
    kode_podkies: string;
    title: string;
    episode: string;
    description: string;
    link_youtube: string;
}

interface PodkiesResponse {
    metadata?: {
        code?: number;
        message?: string;
    };
    response?: Podkies[] | {
        data?: Podkies[];
    };
}

export const usePodkies = () => {
    const api = usePublicApi();

    const data = ref<PodkiesVideo[]>([]);
    const loading = ref(false);
    const error = ref<string | null>(null);

    /**
     * Ambil YouTube Video ID dari berbagai format URL
     */
    const getYoutubeId = (url: string): string => {
        if (!url) return "";

        try {
            const parsed = new URL(url);

            // https://www.youtube.com/watch?v=xxxx
            if (parsed.searchParams.get("v")) {
                return parsed.searchParams.get("v") || "";
            }

            // https://youtu.be/xxxx
            if (parsed.hostname.includes("youtu.be")) {
                return parsed.pathname.replace("/", "").split("?")[0] || "";
            }

            // https://www.youtube.com/embed/xxxx
            if (parsed.pathname.includes("/embed/")) {
                return parsed.pathname.split("/embed/")[1]?.split("/")[0] || "";
            }

            // https://www.youtube.com/shorts/xxxx
            if (parsed.pathname.includes("/shorts/")) {
                return parsed.pathname.split("/shorts/")[1]?.split("/")[0] || "";
            }

            return "";
        } catch {
            return "";
        }
    };

    /**
     * Mapping response backend → data yang digunakan component
     */
    const mapPodkies = (item: Podkies): PodkiesVideo => {
        return {
            id: getYoutubeId(item.link_youtube),

            podkies_id: item.podkies_id,

            kode_podkies: item.kode_podkies,

            title: item.judul_podkies,

            episode: `Episode ${item.episode}`,

            description: "Podcast RSUD Dr. Soetomo",

            link_youtube: item.link_youtube,
        };
    };

    /**
     * GET /public/podkies/landing
     */
    const fetchLanding = async () => {
        loading.value = true;
        error.value = null;

        try {
            const response = await api<PodkiesResponse>(
                "/public/podkies/landing",
                {
                    method: "GET",
                },
            );

            const result = response?.response;

            let items: Podkies[] = [];

            if (Array.isArray(result)) {
                items = result;
            } else if (result?.data && Array.isArray(result.data)) {
                items = result.data;
            }

            data.value = items
                .filter((item) => item.is_active)
                .map(mapPodkies)
                .filter((item) => item.id);
        } catch (err: any) {
            console.error("Gagal mengambil data podkies:", err);

            error.value =
                err?.data?.metadata?.message ||
                err?.message ||
                "Gagal mengambil data podkies";

            data.value = [];
        } finally {
            loading.value = false;
        }
    };

    return {
        data,
        loading,
        error,
        fetchLanding,
    };
};