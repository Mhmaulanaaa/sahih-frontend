<template>
  <section
    class="relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/40 to-white px-4 pb-10 pt-24 sm:px-6 sm:pb-14 sm:pt-28 lg:px-8"
  >
    <div class="mx-auto max-w-9xl">
      <!-- HERO CARD -->
      <div
        class="group relative h-[600px] overflow-hidden rounded-2xl border border-white/70 bg-slate-100 shadow-xl shadow-slate-200/50 sm:h-[520px] lg:h-[750px]"
      >
        <!-- IMAGE -->
        <Transition name="hero-fade" mode="out-in">
          <img
            :key="active"
            :src="asset(activeSlide)"
            :alt="`Banner RSUD Dr. Soetomo ${active + 1}`"
            class="absolute inset-0 h-full w-full object-cover"
            draggable="false"
          />
        </Transition>

        <!-- SUBTLE OVERLAY -->
        <div
          class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/5"
        ></div>

        <!-- PREVIOUS -->
        <button
          type="button"
          aria-label="Banner sebelumnya"
          class="group/prev absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-2xl border border-white/30 bg-black/20 text-white opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-black/40 group-hover:opacity-100 sm:left-6 sm:h-12 sm:w-12"
          @click="prev"
        >
          <i
            class="fas fa-chevron-left text-sm transition-transform duration-300 group-hover/prev:-translate-x-0.5"
          ></i>
        </button>

        <!-- NEXT -->
        <button
          type="button"
          aria-label="Banner berikutnya"
          class="group/next absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-2xl border border-white/30 bg-black/20 text-white opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-black/40 group-hover:opacity-100 sm:right-6 sm:h-12 sm:w-12"
          @click="next"
        >
          <i
            class="fas fa-chevron-right text-sm transition-transform duration-300 group-hover/next:translate-x-0.5"
          ></i>
        </button>

        <!-- INDICATOR -->
        <div
          class="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/20 bg-black/20 px-3 py-2 backdrop-blur-md"
        >
          <button
            v-for="(_, index) in slides"
            :key="index"
            type="button"
            :aria-label="`Tampilkan banner ${index + 1}`"
            class="h-1.5 rounded-full transition-all duration-500"
            :class="
              active === index ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
            "
            @click="goTo(index)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";

const { asset } = useAsset();

const slides: string[] = [
  "/images/herosection/iklan.png",
  "/images/herosection/iklan.png",
  "/images/herosection/iklan.png",
];

const active = ref<number>(0);

const activeSlide = computed<string>(() => slides[active.value] ?? slides[0] ?? "");

let interval: ReturnType<typeof setInterval> | null = null;

const next = () => {
  active.value = (active.value + 1) % slides.length;
};

const prev = () => {
  active.value = active.value === 0 ? slides.length - 1 : active.value - 1;
};

const goTo = (index: number) => {
  active.value = index;
};

const startAutoplay = () => {
  stopAutoplay();

  interval = setInterval(() => {
    next();
  }, 6000);
};

const stopAutoplay = () => {
  if (interval) {
    clearInterval(interval);
    interval = null;
  }
};

onMounted(() => {
  startAutoplay();
});

onUnmounted(() => {
  stopAutoplay();
});
</script>

<style scoped>
.hero-fade-enter-active,
.hero-fade-leave-active {
  transition: opacity 0.8s ease;
}

.hero-fade-enter-from,
.hero-fade-leave-to {
  opacity: 0;
}
</style>
