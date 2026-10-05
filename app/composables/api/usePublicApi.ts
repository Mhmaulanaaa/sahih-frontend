// composables/usePublicApi.ts

// @ts-expect-error crypto-js does not ship TypeScript declarations
import CryptoJS from "crypto-js";

let publicApi: ReturnType<typeof $fetch.create>;

export const usePublicApi = () => {
    if (publicApi) {
        return publicApi;
    }

    const config = useRuntimeConfig();

    publicApi = $fetch.create({
        baseURL: config.public.apiBase,

        onRequest({ request, options }) {
            const secretKey =
                config.public.publicApiSecret ||
                "rus4Publ1cApi0421";

            const timestamp = Math.floor(Date.now() / 1000).toString();

            const method = String(options.method || "GET").toUpperCase();

            /**
             * request bisa berupa:
             *
             * /public/berita/landing
             *
             * atau URL lengkap.
             */
            let path = String(request);

            // Hilangkan query string
            path = path.split("?")[0] ?? "";

            // Kalau request berupa full URL,
            // ambil pathname saja.
            try {
                if (path.startsWith("http://") || path.startsWith("https://")) {
                    path = new URL(path).pathname;
                }
            } catch {
                // gunakan path apa adanya
            }

            // Hilangkan slash depan
            path = path.replace(/^\/+/, "");

            // Hilangkan slash belakang
            path = path.replace(/\/+$/, "");

            /**
             * Signature backend:
             *
             * GET/api/public/berita/landing{timestamp}
             */
            const payload =
                method +
                "/api/" +
                path +
                timestamp;

            const signature = CryptoJS.HmacSHA256(
                payload,
                secretKey,
            ).toString(CryptoJS.enc.Hex);


            const headers = new Headers(options.headers);

            headers.set("X-Timestamp", timestamp);
            headers.set("X-Signature", signature);

            options.headers = headers;
        },
    });

    return publicApi;
};