export default defineNuxtPlugin(() => {
    if (!import.meta.client) return;

    const synth = window.speechSynthesis;

    let isEnabled = false;
    let currentLang = "id-ID";

    let voices: SpeechSynthesisVoice[] = [];

    // =========================================================
    // LOAD VOICES
    // =========================================================

    const loadVoices = (): SpeechSynthesisVoice[] => {
        voices = synth.getVoices();

        return voices;
    };

    // =========================================================
    // INITIAL LOAD
    // =========================================================

    loadVoices();

    synth.addEventListener("voiceschanged", () => {
        loadVoices();
    });

    // =========================================================
    // NORMALIZE LANGUAGE
    // =========================================================

    const normalizeLanguage = (language: string): string => {
        return language.trim().toLowerCase();
    };

    // =========================================================
    // FIND VOICE
    // =========================================================

    const findVoice = (
        requestedLanguage: string,
    ): SpeechSynthesisVoice | null => {
        const requested = normalizeLanguage(requestedLanguage);
        const baseLanguage = requested.split("-")[0];

        // =========================================================
        // 1. EXACT LANGUAGE
        // =========================================================

        const exact = voices.find(
            (voice: SpeechSynthesisVoice) =>
                normalizeLanguage(voice.lang) === requested,
        );

        if (exact !== undefined) {
            return exact;
        }

        // =========================================================
        // 2. SPECIAL VOICE - INDONESIAN
        // =========================================================

        if (baseLanguage === "id") {
            const indonesian = voices.find(
                (voice: SpeechSynthesisVoice) =>
                    voice.name === "Damayanti",
            );

            if (indonesian !== undefined) {
                return indonesian;
            }
        }

        // =========================================================
        // 3. SPECIAL VOICE - ENGLISH
        // =========================================================

        if (baseLanguage === "en") {
            const english = voices.find(
                (voice: SpeechSynthesisVoice) =>
                    voice.name === "Samantha",
            );

            if (english !== undefined) {
                return english;
            }
        }

        // =========================================================
        // 4. SPECIAL VOICE - ARABIC
        // =========================================================

        if (baseLanguage === "ar") {
            const arabic = voices.find(
                (voice: SpeechSynthesisVoice) =>
                    voice.name === "Majed" ||
                    normalizeLanguage(voice.lang) === "ar-001",
            );

            if (arabic !== undefined) {
                return arabic;
            }
        }

        // =========================================================
        // 5. SPECIAL VOICE - CHINESE
        // =========================================================

        if (baseLanguage === "zh") {
            const chinese = voices.find(
                (voice: SpeechSynthesisVoice) =>
                    voice.name === "Tingting" ||
                    normalizeLanguage(voice.lang) === "zh-cn",
            );

            if (chinese !== undefined) {
                return chinese;
            }
        }

        // =========================================================
        // 6. BASE LANGUAGE FALLBACK
        // =========================================================

        const baseMatches = voices.filter(
            (voice: SpeechSynthesisVoice) =>
                normalizeLanguage(voice.lang).split("-")[0] ===
                baseLanguage,
        );

        const selected = baseMatches.at(0);

        if (selected !== undefined) {
            return selected;
        }

        // =========================================================
        // 7. NO VOICE
        // =========================================================

        return null;
    };

    // =========================================================
    // WAIT FOR VOICES
    // =========================================================

    const waitForVoices = (
        timeout = 3000,
    ): Promise<SpeechSynthesisVoice[]> => {
        return new Promise((resolve) => {
            const currentVoices = synth.getVoices();

            if (currentVoices.length > 0) {
                voices = currentVoices;
                resolve(currentVoices);
                return;
            }

            let finished = false;

            const finish = () => {
                if (finished) return;

                finished = true;

                synth.removeEventListener(
                    "voiceschanged",
                    handleVoicesChanged,
                );

                voices = synth.getVoices();

                resolve(voices);
            };

            const handleVoicesChanged = () => {
                finish();
            };

            synth.addEventListener(
                "voiceschanged",
                handleVoicesChanged,
            );

            window.setTimeout(finish, timeout);
        });
    };

    // =========================================================
    // SPEAK
    // =========================================================

    const speak = async (
        text: string,
    ): Promise<void> => {
        if (!isEnabled) {
            return;
        }

        if (!text?.trim()) {
            return;
        }

        // Pastikan voices sudah tersedia
        await waitForVoices();

        const voice = findVoice(currentLang);

        if (!voice) {
            return;
        }

        // Stop suara sebelumnya
        synth.cancel();

        // Sedikit delay supaya cancel selesai
        await new Promise<void>((resolve) => {
            window.setTimeout(resolve, 50);
        });

        const utterance =
            new SpeechSynthesisUtterance(text);

        // =======================================================
        // VOICE CONFIGURATION
        // =======================================================

        utterance.lang = voice.lang;
        utterance.voice = voice;
        utterance.rate = 1;
        utterance.pitch = 1;
        utterance.volume = 1;

        // =======================================================
        // EVENTS
        // =======================================================

        utterance.onstart = () => {
            // Speech started
        };

        utterance.onend = () => {
            // Speech ended
        };

        utterance.onerror = (
            _event: SpeechSynthesisErrorEvent,
        ) => {
            // Speech error
        };

        // =======================================================
        // SPEAK
        // =======================================================

        synth.speak(utterance);
    };

    // =========================================================
    // STOP
    // =========================================================

    const stop = () => {
        synth.cancel();
    };

    // =========================================================
    // SET LANGUAGE
    // =========================================================

    const setLang = (
        language: string,
    ) => {
        currentLang = language;

        stop();

        notifyChange();
    };

    // =========================================================
    // TOGGLE
    // =========================================================

    const toggle = () => {
        isEnabled = !isEnabled;

        if (!isEnabled) {
            stop();
        }

        notifyChange();
    };

    // =========================================================
    // GET STATE
    // =========================================================

    const getState = () => {
        const voice = findVoice(currentLang);

        return {
            isEnabled,
            lang: currentLang,
            voiceAvailable: Boolean(voice),
            voice: voice
                ? {
                    name: voice.name,
                    lang: voice.lang,
                }
                : null,
        };
    };

    // =========================================================
    // EVENT NOTIFICATION
    // =========================================================

    const notifyChange = () => {
        window.dispatchEvent(
            new CustomEvent(
                "voice-control-change",
            ),
        );
    };

    // =========================================================
    // EXPOSE GLOBAL CONTROL
    // =========================================================

    (window as any).voiceControl = {
        speak,
        stop,
        toggle,
        setLang,
        getState,
    };
});