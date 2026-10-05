import { computed, ref } from "vue";

export interface LanguageVoice {
    code: string;
    label: string;
    flag: string;
    voice: string;
    voiceLabel: string;
}

export const languageVoiceOptions: LanguageVoice[] = [
    {
        code: "id",
        label: "Indonesia",
        flag: "🇮🇩",
        voice: "id-ID",
        voiceLabel: "Indonesia",
    },
    {
        code: "en",
        label: "English",
        flag: "🇬🇧",
        voice: "en-US",
        voiceLabel: "English",
    },
    {
        code: "ar",
        label: "Arabic",
        flag: "🇸🇦",
        voice: "ar-001",
        voiceLabel: "Arabic",
    },
    {
        code: "zh-CN",
        label: "Chinese",
        flag: "🇨🇳",
        voice: "zh-CN",
        voiceLabel: "Chinese",
    },
];

const currentCode = ref("id");
const voiceEnabled = ref(false);

export const useLanguageVoice = () => {
    const currentLanguage = computed<LanguageVoice>(() => {
        return (
            languageVoiceOptions.find(
                (item) => item.code === currentCode.value,
            ) ?? languageVoiceOptions[0]!
        );
    });

    const getVoiceControl = () => {
        if (!import.meta.client) return null;

        return (window as any).voiceControl ?? null;
    };

    const syncVoiceState = () => {
        const vc = getVoiceControl();

        if (!vc?.getState) {
            voiceEnabled.value = false;
            return;
        }

        const state = vc.getState();

        voiceEnabled.value = Boolean(state?.isEnabled);
    };

    const detectLanguage = () => {
        if (!import.meta.client) return;

        const cookie = document.cookie
            .split("; ")
            .find((row) => row.startsWith("googtrans="));

        if (!cookie) {
            currentCode.value = "id";
            return;
        }

        try {
            const value = decodeURIComponent(
                cookie.substring("googtrans=".length),
            );

            const match = value.match(/\/id\/(.+)$/);

            if (!match?.[1]) {
                currentCode.value = "id";
                return;
            }

            const language = match[1];

            const exists = languageVoiceOptions.some(
                (item) => item.code === language,
            );

            currentCode.value = exists ? language : "id";
        } catch {
            currentCode.value = "id";
        }
    };

    const changeLanguage = (language: LanguageVoice) => {
        if (!import.meta.client) return;

        console.log("[Language] Switching:", {
            code: language.code,
            voice: language.voice,
            label: language.label,
        });

        currentCode.value = language.code;

        // ==========================================
        // GOOGLE TRANSLATE
        // ==========================================

        const doGTranslate = (window as any).doGTranslate;

        if (typeof doGTranslate === "function") {
            doGTranslate(`id|${language.code}`);
        } else {
            document.cookie = `googtrans=/id/${language.code}; path=/`;

            console.warn(
                "[Language] doGTranslate belum tersedia",
            );
        }

        // ==========================================
        // VOICE
        // ==========================================

        const vc = getVoiceControl();

        if (vc?.setLang) {
            vc.setLang(language.voice);
        }

        syncVoiceState();

        console.log("[Language] Voice set:", language.voice);
    };

    const toggleVoice = () => {
        if (!import.meta.client) return;

        const vc = getVoiceControl();

        if (!vc) {
            console.warn(
                "[Voice Control] voiceControl belum tersedia",
            );

            return;
        }

        vc.toggle?.();

        syncVoiceState();

        console.log(
            "[Voice Control] Status:",
            voiceEnabled.value,
        );
    };

    const setVoice = (enabled: boolean) => {
        if (!import.meta.client) return;

        const vc = getVoiceControl();

        if (!vc?.getState) return;

        const state = vc.getState();

        if (enabled && !state.isEnabled) {
            vc.toggle?.();
        }

        if (!enabled && state.isEnabled) {
            vc.toggle?.();
        }

        syncVoiceState();
    };

    const voiceIcon = computed(() =>
        voiceEnabled.value
            ? "fas fa-volume-high"
            : "fas fa-volume-xmark",
    );

    const init = () => {
        if (!import.meta.client) return;

        currentCode.value = "id";

        syncVoiceState();

        window.addEventListener(
            "voice-control-change",
            syncVoiceState,
        );
    };

    return {
        languages: languageVoiceOptions,
        currentCode,
        currentLanguage,
        voiceEnabled,
        voiceIcon,
        detectLanguage,
        changeLanguage,
        toggleVoice,
        setVoice,
        init,
    };
};