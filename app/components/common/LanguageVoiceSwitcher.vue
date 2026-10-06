<template>
  <div ref="containerRef" class="relative flex items-center">
    <!-- =====================================================
         MAIN BUTTON
    ====================================================== -->
    <button
      type="button"
      aria-label="Pilih bahasa"
      class="flex h-9 w-9 items-center justify-center rounded-lg text-emerald-600 shadow-sm transition-all duration-200 hover:bg-emerald-100 hover:shadow-md"
      :aria-expanded="isOpen"
      @click.stop="isOpen = !isOpen"
    >
      <i
        class="fas fa-language text-[17px] transition-transform duration-200"
        :class="{
          'scale-110': isOpen,
        }"
      ></i>
    </button>

    <!-- =====================================================
         DROPDOWN
    ====================================================== -->
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
        class="absolute right-0 top-full z-[9999] mt-2 w-56 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl"
      >
        <!-- HEADER -->
        <div class="border-b border-gray-100 px-4 py-3">
          <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">
            Pilih Bahasa
          </p>
        </div>

        <!-- LANGUAGE OPTIONS -->
        <div class="p-1.5">
          <button
            v-for="language in languages"
            :key="language.code"
            type="button"
            class="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-all duration-150"
            :class="
              currentLanguage.code === language.code
                ? 'bg-emerald-50 font-semibold text-emerald-700'
                : 'text-gray-700 hover:bg-gray-50'
            "
            @click.stop="selectLanguage(language)"
          >
            <!-- FLAG -->
            <span
              class="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-gray-50 text-lg"
            >
              {{ language.flag }}
            </span>

            <!-- LANGUAGE -->
            <div class="min-w-0 flex-1">
              <p class="text-sm">
                {{ language.label }}
              </p>

              <p class="truncate text-[10px] text-gray-400">
                Voice: {{ language.voiceLabel }}
              </p>
            </div>

            <!-- CHECK -->
            <i
              v-if="currentLanguage.code === language.code"
              class="fas fa-check shrink-0 text-xs text-emerald-600"
            ></i>
          </button>
        </div>

        <!-- DIVIDER -->
        <div class="mx-3 border-t border-gray-100"></div>

        <!-- VOICE SECTION -->
        <div class="p-1.5">
          <button
            type="button"
            class="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-all duration-150"
            :class="
              voiceEnabled
                ? 'bg-emerald-50 font-semibold text-emerald-700'
                : 'text-gray-700 hover:bg-gray-50'
            "
            @click.stop="toggleVoiceAndClose"
          >
            <!-- ICON -->
            <span
              class="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-gray-50"
            >
              <i
                class="fas"
                :class="
                  voiceEnabled
                    ? 'fa-volume-high text-emerald-600'
                    : 'fa-volume-xmark text-gray-400'
                "
              ></i>
            </span>

            <!-- LABEL -->
            <div class="min-w-0 flex-1">
              <p class="text-sm">Voice Over</p>

              <p class="truncate text-[10px] text-gray-400">
                {{ currentLanguage.voiceLabel }}
              </p>
            </div>

            <!-- STATUS -->
            <span
              class="shrink-0 text-[10px] font-semibold"
              :class="voiceEnabled ? 'text-emerald-600' : 'text-gray-400'"
            >
              {{ voiceEnabled ? "ON" : "OFF" }}
            </span>
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import {
  onMounted,
  onUnmounted,
  ref,
} from "vue";

import {
  useLanguageVoice,
  type LanguageVoice,
} from "~/composables/useLanguageVoice";

/**
 * =====================================================
 * PROPS
 * =====================================================
 */
defineProps<{
  scrolled?: boolean;
}>();

/**
 * =====================================================
 * LANGUAGE + VOICE
 * =====================================================
 */
const {
  languages,
  currentLanguage,
  voiceEnabled,
  changeLanguage,
  toggleVoice,
  init,
} = useLanguageVoice();

/**
 * =====================================================
 * STATE
 * =====================================================
 */
const isOpen = ref(false);
const containerRef = ref<HTMLElement | null>(null);

/**
 * =====================================================
 * CHANGE LANGUAGE
 * =====================================================
 */
const selectLanguage = (language: LanguageVoice) => {
  changeLanguage(language);
  isOpen.value = false;
};

/**
 * =====================================================
 * TOGGLE VOICE
 * =====================================================
 */
const toggleVoiceAndClose = () => {
  toggleVoice();
  isOpen.value = false;
};

/**
 * =====================================================
 * CLICK OUTSIDE
 * =====================================================
 */
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as Node;

  if (
    containerRef.value &&
    !containerRef.value.contains(target)
  ) {
    isOpen.value = false;
  }
};

/**
 * =====================================================
 * LIFECYCLE
 * =====================================================
 */
onMounted(() => {
  init();

  document.addEventListener(
    "click",
    handleClickOutside,
  );
});

onUnmounted(() => {
  document.removeEventListener(
    "click",
    handleClickOutside,
  );
});
</script>
