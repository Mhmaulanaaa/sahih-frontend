export default defineNuxtPlugin((nuxtApp) => {
    // load gtag script
    const gtagScript = document.createElement("script");
    gtagScript.async = true;
    gtagScript.src =
        "https://www.googletagmanager.com/gtag/js?id=G-BZ6BC1GWFF";
    document.head.appendChild(gtagScript);

    window.dataLayer = window.dataLayer || [];

    window.gtag = (...args: any[]) => {
        window.dataLayer.push(args);
    };

    window.gtag("js", new Date());
    window.gtag("config", "G-BZ6BC1GWFF");

    // track page view on route change
    nuxtApp.hook("page:finish", () => {
        window.gtag("event", "page_view", {
            page_path: window.location.pathname,
        });
    });
});
