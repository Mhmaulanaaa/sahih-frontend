export { };

declare global {
    interface Window {
        dataLayer: any[];
        gtag: (...args: any[]) => void;
    }
}
window.gtag = (...args: any[]) => {
    window.dataLayer.push(args);
};

window.gtag("js", new Date());
window.gtag("config", "G-BZ6BC1GWFF");
