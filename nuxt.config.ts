// nuxt.config.ts
import tailwindcss from "@tailwindcss/vite";
const baseURL = import.meta.env.NUXT_APP_BASE_URL || '/'
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  ssr: false,
  modules: ["@nuxt/image"],

  css: [
    "~/assets/css/main.css",

    "@fortawesome/fontawesome-free/css/all.min.css",

    "bootstrap-icons/font/bootstrap-icons.css",
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase:
        "https://rsudrsoetomo.jatimprov.go.id/api-rusa/api/",

      apiSecret:
        import.meta.env.NUXT_PUBLIC_API_SECRET ||
        "rus4Publ1cApi0421",
    },
  },
  app: {
    baseURL: import.meta.env.NUXT_APP_BASE_URL || '/',
    head: {
      title: 'Webiste',
      titleTemplate: '%s  | RSUD Dr. Soetomo',

      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: `${baseURL}rsds-icon.ico`,
        }
      ],

      meta: [
        {
          name: 'description',
          content: 'Website Resmi RSUD Dr. Soetomo'
        }
      ]
    }
  }
});
