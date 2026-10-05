<template>
  <div ref="containerRef" class="relative">
    <!-- LANGUAGE BUTTON -->
    <button
      type="button"
      aria-label="Pilih bahasa"
      class="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/10 text-white transition-all duration-200 hover:bg-white/20"
      :class="{ 'bg-white/20': isOpen }"
      @click.stop="isOpen = !isOpen"
    >
      <!-- Translate Icon -->
      <i
        class="fas fa-language text-[15px] transition-transform duration-200"
        :class="{ 'scale-110': isOpen }"
      ></i>
    </button>

    <!-- DROPDOWN -->
    <transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0 translate-y-1 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-1 scale-95"
    >
      <div
        v-if="isOpen"
        class="absolute left-0 top-full z-[9999] mt-2 w-52 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl"
      >
        <!-- HEADER -->
        <div class="border-b border-gray-100 px-4 py-3">
          <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">
            Pilih Bahasa
          </p>
        </div>

        <!-- LANGUAGE LIST -->
        <div class="p-1.5">
          <button
            v-for="language in languages"
            :key="language.code"
            type="button"
            class="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-all duration-150"
            :class="
              currentLanguage.code === language.code
                ? 'bg-emerald-50 text-emerald-700 font-semibold'
                : 'text-gray-700 hover:bg-gray-50'
            "
            @click.stop="changeLanguage(language)"
          >
            <!-- FLAG -->
            <span
              class="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-gray-50 text-lg"
            >
              {{ language.flag }}
            </span>

            <!-- LANGUAGE -->
            <span class="flex-1">
              {{ language.label }}
            </span>

            <!-- CHECK -->
            <i
              v-if="currentLanguage.code === language.code"
              class="fas fa-check text-xs text-emerald-600"
            ></i>
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";

interface Language {
  code: string;
  label: string;
  flag: string;
}

/**
 * =====================================================
 * BAHASA YANG DITAMPILKAN
 * =====================================================
 */
const languages: Language[] = [
  {
    code: "id",
    label: "Indonesia",
    flag: "🇮🇩",
  },
  {
    code: "en",
    label: "English",
    flag: "🇬🇧",
  },
  {
    code: "ar",
    label: "Arabic",
    flag: "🇸🇦",
  },
  {
    code: "zh-CN",
    label: "Chinese",
    flag: "🇨🇳",
  },
];

/**
 * =====================================================
 * STATE
 * =====================================================
 */
const containerRef = ref<HTMLElement | null>(null);

const isOpen = ref(false);

const currentCode = ref("id");

/**
 * =====================================================
 * CURRENT LANGUAGE
 * =====================================================
 */
const currentLanguage = computed(() => {
  return (
    languages.find((language) => language.code === currentCode.value) ??
    languages.find((language) => language.code === "id")!
  );
});

/**
 * =====================================================
 * DETECT LANGUAGE FROM GTRANSLATE COOKIE
 * =====================================================
 */
const detectLanguage = () => {
  if (!import.meta.client) return;

  const cookie = document.cookie.split("; ").find((row) => row.startsWith("googtrans="));

  if (!cookie) {
    currentCode.value = "id";
    return;
  }

  const value = decodeURIComponent(cookie.substring("googtrans=".length));

  const match = value.match(/\/id\/(.+)$/);

  if (!match?.[1]) {
    currentCode.value = "id";
    return;
  }

  const language = match[1];

  if (languages.some((item) => item.code === language)) {
    currentCode.value = language;
  } else {
    currentCode.value = "id";
  }
};

/**
 * =====================================================
 * CHANGE LANGUAGE
 * =====================================================
 */
const changeLanguage = (language: Language) => {
  if (!import.meta.client) return;

  isOpen.value = false;

  currentCode.value = language.code;

  // GTranslate function
  const doGTranslate = (window as any).doGTranslate;

  if (typeof doGTranslate === "function") {
    doGTranslate(`id|${language.code}`);
    return;
  }

  console.warn("[GTranslate] doGTranslate belum tersedia");

  // Fallback cookie
  document.cookie = `googtrans=/id/${language.code}; path=/`;

  window.location.reload();
};

/**
 * =====================================================
 * CLICK OUTSIDE
 * =====================================================
 */
const handleClickOutside = (event: MouseEvent) => {
  if (!containerRef.value) return;

  if (!containerRef.value.contains(event.target as Node)) {
    isOpen.value = false;
  }
};

/**
 * =====================================================
 * LIFECYCLE
 * =====================================================
 */
onMounted(() => {
  detectLanguage();

  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>
