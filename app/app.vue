<template>
  <NuxtLayout>
    <NuxtPage />
    <!-- FLOATING UI -->
    <div class="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">
      <!-- SCROLL TO TOP (muncul hanya saat scroll) -->
      <Transition name="fade-up">
        <button
          v-if="showButton"
          @click="scrollToTop"
          class="group relative w-12 h-12 flex items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-lg hover:bg-emerald-600 transition-all duration-300 hover:scale-110"
        >
          <!-- ICON BOOTSTRAP -->
          <i
            class="bi bi-arrow-up text-lg transform group-hover:-translate-y-0.5 transition"
          ></i>

          <!-- GLOW EFFECT -->
          <span
            class="absolute inset-0 rounded-2xl bg-emerald-300 opacity-0 group-hover:opacity-30 blur-md transition"
          ></span>
        </button>
      </Transition>
      <!-- VOICE -->
      <!-- <div class="bg-white rounded-lg shadow-md px-3 py-2">
        <select
          class="text-sm rounded-md px-2 py-1 focus:outline-none"
          v-model="voice"
          @change="changeVoice(voice)"
        >
          <option value="off">🔇 Voice OFF</option>
          <option value="id-ID">🇮🇩 Indonesia</option>
          <option value="en-US">🇺🇸 English</option>
        </select>
      </div> -->

      <!-- TRANSLATE -->
      <!-- <div class="gtranslate_wrapper px-3 py-6"></div> -->
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

type VoiceOption = "off" | "id-ID" | "en-US";

const voice = ref<VoiceOption>("off");

onMounted(() => {
  const state = (window as any).voiceControl?.getState();
  if (!state) return;

  if (!state.isEnabled) {
    voice.value = "off";
  } else {
    voice.value = state.currentLang;
  }
});

const changeVoice = (value: VoiceOption) => {
  const vc = (window as any).voiceControl;

  if (value === "off") {
    vc.toggle(); // matikan
  } else {
    if (!vc.getState().isEnabled) vc.toggle(); // nyalakan
    vc.setLang(value);
  }

  voice.value = value;
};

const showButton = ref(false);

const handleScroll = () => {
  showButton.value = window.scrollY > 200;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.fade-up-enter-active {
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

.fade-up-leave-active {
  transition: all 0.25s ease-in;
}

.fade-up-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.9);
}

.fade-up-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.fade-up-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.fade-up-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.95);
}
</style>
