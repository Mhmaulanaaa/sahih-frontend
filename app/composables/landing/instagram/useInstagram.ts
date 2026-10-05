// composables/landing/instagram/useInstagram.ts
import { usePublicApi } from "~/composables/api/usePublicApi";
export interface InstagramPost {
    berita_ig_id: string;
    kode_embed: string;
    link_embed: string;
    tgl_upload?: string | null;
    created_at?: string | null;
    updated_at?: string | null;
    deleted_at?: string | null;
    is_active?: boolean;
    is_delete?: boolean;
}

interface InstagramPagination {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}

interface InstagramResponse {
    metadata?: {
        code: number;
        message: string;
    };
    response: InstagramPost[];
    pagination?: InstagramPagination;
}

export const useInstagram = () => {
    const api = usePublicApi();

    const getLanding = async (limit = 3) => {
        return await api<InstagramResponse>(
            "/public/berita-ig/landing",
            {
                params: {
                    limit,
                },
            },
        );
    };

    return {
        getLanding,
    };
};