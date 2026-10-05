export default defineNuxtPlugin(() => {
    if (!("speechSynthesis" in window)) return;

    const synth = window.speechSynthesis;

    type Lang = "id-ID" | "en-US";

    // ======================
    // STATE
    // ======================
    let isEnabled =
        sessionStorage.getItem("voiceEnabled") !== "false"; // default ON

    let currentLang: Lang =
        (sessionStorage.getItem("voiceLang") as Lang) || "id-ID";

    let voices: SpeechSynthesisVoice[] = [];
    let lastText = "";
    let timer: number | null = null;

    // ======================
    // LOAD & LOCK VOICES
    // ======================
    function loadVoices() {
        const all = synth.getVoices();

        voices = all.filter(v =>
            v.lang === "id-ID" || v.lang === "en-US"
        );
    }

    function getVoice(): SpeechSynthesisVoice | null {
        if (currentLang === "id-ID") {
            return (
                voices.find(v =>
                    v.lang === "id-ID" &&
                    v.name.toLowerCase().includes("indonesia")
                ) ||
                voices.find(v => v.lang === "id-ID") ||
                null
            );
        }

        if (currentLang === "en-US") {
            return (
                voices.find(v =>
                    v.lang === "en-US" &&
                    (
                        v.name.toLowerCase().includes("google") ||
                        v.name.toLowerCase().includes("samantha") ||
                        v.name.toLowerCase().includes("alex")
                    )
                ) ||
                voices.find(v => v.lang === "en-US") ||
                null
            );
        }

        return null;
    }

    // ======================
    // LANGUAGE FILTER
    // ======================
    function isEnglish(text: string) {
        return /^[A-Za-z0-9\s.,!?'"()-]+$/.test(text);
    }

    // ======================
    // SPEAK
    // ======================
    function speak(text: string) {
        if (!isEnabled || !text || text === lastText) return;

        synth.cancel();

        const utter = new SpeechSynthesisUtterance(text);
        const voice = getVoice();

        if (voice) utter.voice = voice;

        utter.rate = currentLang === "en-US" ? 0.9 : 1;
        utter.pitch = 1;
        utter.volume = 1;

        synth.speak(utter);
        lastText = text;
    }

    function stop() {
        synth.cancel();
        lastText = "";
    }

    // ======================
    // ELEMENT FILTER
    // ======================
    function isReadable(el: HTMLElement) {
        const tag = el.tagName.toLowerCase();

        if (
            ["span", "svg", "path", "i", "img"].includes(tag) ||
            el.closest('[id*="userway"]')
        ) {
            return false;
        }

        return ["a", "button", "p", "h1", "h2", "h3", "h4", "li"].includes(tag);
    }

    // ======================
    // EVENTS (HOVER ONLY)
    // ======================
    function onEnter(e: Event) {
        if (!isEnabled) return;

        const el = e.target as HTMLElement;
        if (!el || !isReadable(el)) return;

        clearTimeout(timer!);

        timer = window.setTimeout(() => {
            const text =
                el.getAttribute("aria-label") ||
                el.innerText?.trim();

            if (!text || text.length < 3) return;

            // 🔒 language lock
            if (currentLang === "en-US" && !isEnglish(text)) return;

            speak(text);
        }, 300);
    }

    function onLeave() {
        clearTimeout(timer!);
        stop();
    }

    document.addEventListener("mouseenter", onEnter, true);
    document.addEventListener("mouseleave", onLeave, true);

    // ======================
    // GLOBAL CONTROL
    // ======================
    (window as any).voiceControl = {
        toggle() {
            isEnabled = !isEnabled;
            sessionStorage.setItem("voiceEnabled", String(isEnabled));
            stop();
        },
        setLang(lang: Lang) {
            currentLang = lang;
            sessionStorage.setItem("voiceLang", lang);
            stop();
        },
        getState() {
            return { isEnabled, currentLang };
        },
    };

    // ======================
    // INIT (VOICE READY)
    // ======================
    function initVoices() {
        const v = synth.getVoices();
        if (v.length) loadVoices();
    }

    synth.onvoiceschanged = initVoices;
    initVoices();
});
