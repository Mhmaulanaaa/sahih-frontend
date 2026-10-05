export default defineNuxtPlugin(() => {
    if (import.meta.server) return;

    // Set global config GTranslate
    (window as any).gtranslateSettings = {
        default_language: "id",
        detect_browser_language: false,

        languages: [
            "af", "sq", "am", "ar", "hy", "az", "eu", "be", "bn", "bs", "bg", "ca",
            "ceb", "zh-CN", "zh-TW", "co", "hr", "cs", "da", "nl", "en", "eo", "et",
            "fi", "fr", "fy", "gl", "ka", "de", "el", "gu", "ht", "ha", "haw", "hi",
            "hmn", "hu", "is", "ig", "id", "ga", "it", "ja", "kn", "kk", "km", "ko",
            "ku", "ky", "lo", "la", "lv", "lt", "lb", "mk", "mg", "ms", "ml", "mt",
            "mi", "mr", "mn", "my", "ne", "no", "ny", "ps", "fa", "pl", "pt", "pa",
            "ro", "ru", "sm", "gd", "sr", "st", "sn", "sd", "si", "sk", "sl", "so",
            "es", "su", "sw", "sv", "tl", "tg", "ta", "te", "th", "tr", "uk", "ur",
            "uz", "vi", "cy", "xh", "yi", "yo", "zu"
        ],

        wrapper_selector: ".gtranslate_wrapper",

        switcher_horizontal_position: "right",

        flag_style: "3d",
    };

    // Cegah double load
    if (document.querySelector('script[src*="gtranslate.net"]')) return;

    const script = document.createElement("script");
    script.src = "https://cdn.gtranslate.net/widgets/latest/float.js";
    script.defer = true;

    document.head.appendChild(script);
});

