<template>
  <div ref="containerRef" class="relative">
    <!-- BUTTON -->
    <button
      type="button"
      aria-label="Voice Over"
      class="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/10 text-white transition-all duration-200 hover:bg-white/20"
      :class="{ 'bg-white/20': isOpen }"
      @click.stop="isOpen = !isOpen"
    >
      <!-- Voice Icon -->
      <i
        class="fas text-[15px] transition-transform duration-200"
        :class="[currentVoiceIcon, { 'scale-110': isOpen }]"
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
        class="absolute right-0 top-full z-[9999] mt-2 w-52 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl"
      >
        <!-- HEADER -->
        <div class="border-b border-gray-100 px-4 py-3">
          <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">
            Voice Over
          </p>
        </div>

        <!-- OPTIONS -->
        <div class="p-1.5">
          <button
            v-for="option in voiceOptions"
            :key="option.code"
            type="button"
            class="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-all duration-150"
            :class="
              voice === option.code
                ? 'bg-emerald-50 text-emerald-700 font-semibold'
                : 'text-gray-700 hover:bg-gray-50'
            "
            @click.stop="changeVoice(option.code)"
          >
            <!-- ICON / FLAG -->
            <span
              class="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-gray-50 text-base"
            >
              <i v-if="option.icon" :class="option.icon"></i>

              <span v-else>
                {{ option.flag }}
              </span>
            </span>

            <!-- LABEL -->
            <span class="flex-1">
              {{ option.label }}
            </span>

            <!-- CHECK -->
            <i
              v-if="voice === option.code"
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

type VoiceOption = "off" | "id-ID" | "en-US";

interface VoiceItem {
  code: VoiceOption;
  label: string;
  flag?: string;
  icon?: string;
}

/**
 * =====================================================
 * VOICE OPTIONS
 * =====================================================
 */
const voiceOptions: VoiceItem[] = [
  {
    code: "off",
    label: "Voice OFF",
    icon: "fas fa-volume-xmark",
  },
  {
    code: "id-ID",
    label: "Indonesia",
    flag: "🇮🇩",
  },
  {
    code: "en-US",
    label: "English",
    flag: "🇬🇧",
  },
];

/**
 * =====================================================
 * STATE
 * =====================================================
 */
const containerRef = ref<HTMLElement | null>(null);

const isOpen = ref(false);

const voice = ref<VoiceOption>("off");

/**
 * =====================================================
 * CURRENT ICON
 * =====================================================
 */
const currentVoiceIcon = computed(() => {
  if (voice.value === "off") {
    return "fa-volume-xmark";
  }

  return "fa-volume-high";
});

/**
 * =====================================================
 * LOAD CURRENT VOICE STATE
 * =====================================================
 */
const loadVoiceState = () => {
  if (!import.meta.client) return;

  const vc = (window as any).voiceControl;

  if (!vc?.getState) return;

  const state = vc.getState();

  if (!state) return;

  if (!state.isEnabled) {
    voice.value = "off";
  } else if (state.currentLang === "id-ID" || state.currentLang === "en-US") {
    voice.value = state.currentLang;
  }
};

/**
 * =====================================================
 * CHANGE VOICE
 * =====================================================
 */
const changeVoice = (value: VoiceOption) => {
  if (!import.meta.client) return;

  const vc = (window as any).voiceControl;

  if (!vc) {
    console.warn("[Voice Control] voiceControl belum tersedia");

    return;
  }

  if (value === "off") {
    const state = vc.getState?.();

    if (state?.isEnabled) {
      vc.toggle();
    }
  } else {
    const state = vc.getState?.();

    // Nyalakan voice jika masih OFF
    if (!state?.isEnabled) {
      vc.toggle();
    }

    // Set bahasa
    vc.setLang(value);
  }

  voice.value = value;

  // Tutup dropdown
  isOpen.value = false;
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
  loadVoiceState();

  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>
