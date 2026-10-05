import { usePublicApi } from "~/composables/api/usePublicApi";

import { ref } from "vue";

export interface Inovasi {
    inovasi_id: string;
    nama_inovasi: string;

    // Deskripsi dari PellEditor
    deskripsi?: string | null;

    thumb_inovasi?: string | null;
    thumb_inovasi_url?: string | null;

    foto_inovasi?: string[] | string | null;
    foto_inovasi_urls?: string[];

    is_active: boolean;

    [key: string]: any;
}

export interface InovasiItem {
    id: string;
    inovasi_id: string;
    title: string;
    description: string;
    thumbnail: string;
    contact_person: string;
    link_pedoman: string;
    link_video: string;
    link_informasi: string;
    photos: string[];
}

export interface InovasiPagination {
    current_page: number;

    last_page: number;

    per_page: number;

    total: number;
}

interface InovasiResponse {
    metadata?: {
        code?: number;

        message?: string;
    };

    response?:
    | Inovasi[]
    | Inovasi
    | {
        data?: Inovasi[];
    };

    pagination?: InovasiPagination;
}

export const useInovasi = () => {
    const api = usePublicApi();

    const data = ref<InovasiItem[]>([]);

    const detail = ref<InovasiItem | null>(null);

    const pagination = ref<InovasiPagination>({
        current_page: 1,

        last_page: 1,

        per_page: 10,

        total: 0,
    });

    const loading = ref(false);

    const error = ref<string | null>(null);

    /**
     * Mapping response backend
     * menjadi data yang digunakan component
     */
    const mapInovasi = (item: Inovasi): InovasiItem => {
        return {
            id: item.inovasi_id,
            inovasi_id: item.inovasi_id,
            title: item.nama_inovasi,

            // HTML hasil PellEditor
            description: item.deskripsi ?? "",

            thumbnail: item.thumb_inovasi_url ?? "",

            contact_person: item.contact_person,

            link_pedoman: item.link_pedoman,

            link_informasi: item.link_informasi,

            link_video: item.link_video,

            photos: Array.isArray(item.foto_inovasi_urls)
                ? item.foto_inovasi_urls
                : [],
        };
    };

    /**
     * GET /public/inovasi/landing
     */
    const fetchLanding = async () => {
        loading.value = true;

        error.value = null;

        try {
            const response = await api<InovasiResponse>(
                "/public/inovasi/landing",
                {
                    method: "GET",
                },
            );

            const result = response?.response;

            let items: Inovasi[] = [];

            if (Array.isArray(result)) {
                items = result;
            } else if (
                result &&
                typeof result === "object" &&
                "data" in result &&
                Array.isArray(result.data)
            ) {
                items = result.data;
            }

            data.value = items
                .filter((item) => item.is_active)
                .map(mapInovasi)
                .filter((item) => item.id);
        } catch (err: any) {
            console.error(
                "Gagal mengambil data inovasi:",
                err,
            );

            error.value =
                err?.data?.metadata?.message ||
                err?.message ||
                "Gagal mengambil data inovasi";

            data.value = [];
        } finally {
            loading.value = false;
        }
    };

    /**
     * GET /public/inovasi/all
     */
    const fetchAll = async (
        page = 1,
        limit = 10,
        search = "",
    ) => {
        loading.value = true;

        error.value = null;

        try {
            const response = await api<InovasiResponse>(
                "/public/inovasi/all",
                {
                    method: "GET",

                    query: {
                        page,

                        limit,

                        ...(search
                            ? {
                                search,
                            }
                            : {}),
                    },
                },
            );

            const result = response?.response;

            let items: Inovasi[] = [];

            if (Array.isArray(result)) {
                items = result;
            } else if (
                result &&
                typeof result === "object" &&
                "data" in result &&
                Array.isArray(result.data)
            ) {
                items = result.data;
            }

            data.value = items
                .filter((item) => item.is_active)
                .map(mapInovasi)
                .filter((item) => item.id);

            if (response?.pagination) {
                pagination.value = response.pagination;
            }

            return response;
        } catch (err: any) {
            console.error(
                "Gagal mengambil semua data inovasi:",
                err,
            );

            error.value =
                err?.data?.metadata?.message ||
                err?.message ||
                "Gagal mengambil data inovasi";

            data.value = [];
        } finally {
            loading.value = false;
        }
    };

    /**
     * GET /public/inovasi/{inovasi_id}
     */
    const fetchDetail = async (id: string) => {
        loading.value = true;

        error.value = null;

        detail.value = null;

        try {
            const response = await api<InovasiResponse>(
                `/public/inovasi/${id}`,
                {
                    method: "GET",
                },
            );

            const result = response?.response;

            if (
                result &&
                !Array.isArray(result) &&
                typeof result === "object" &&
                !("data" in result)
            ) {
                detail.value = mapInovasi(
                    result as Inovasi,
                );
            } else {
                detail.value = null;
            }

            return response;
        } catch (err: any) {
            console.error(
                "Gagal mengambil detail inovasi:",
                err,
            );

            error.value =
                err?.data?.metadata?.message ||
                err?.message ||
                "Gagal mengambil detail inovasi";

            detail.value = null;
        } finally {
            loading.value = false;
        }
    };

    return {
        data,

        detail,

        pagination,

        loading,

        error,

        fetchLanding,

        fetchAll,

        fetchDetail,
    };
};