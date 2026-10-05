<template>
  <section class="relative h-screen overflow-hidden">
    <!-- Background Slides -->
    <transition-group name="fade" tag="div" mode="out-in" class="absolute inset-0">
      <div
        v-for="(slide, index) in slides"
        v-show="active === index"
        :key="slide.image"
        class="absolute inset-0"
      >
        <img :src="asset(slide.image)" class="w-full h-full object-cover" alt="" />
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"
        ></div>
      </div>
    </transition-group>

    <!-- Content -->
    <div class="relative z-10 h-full flex items-center">
      <div class="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <transition name="slide-up" mode="out-in">
          <div :key="active">
            <h1 class="text-white text-7xl md:text-7xl font-bold leading-tight max-w-3xl">
              {{ slides[active]?.title }}
            </h1>

            <p class="mt-6 max-w-xl text-white/90 text-lg md:text-xl leading-relaxed">
              {{ slides[active]?.description }}
            </p>

            <!-- CTA -->
            <div class="mt-8 flex flex-wrap gap-4">
              <div
                v-if="slides[active]?.buttons?.length"
                class="mt-8 flex flex-wrap gap-4"
              >
                <NuxtLink
                  v-for="button in slides[active]?.buttons"
                  :key="button.label"
                  :to="button.link"
                  :target="button.external ? '_blank' : '_self'"
                  :rel="button.external ? 'noopener noreferrer' : undefined"
                  class="group inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm md:text-base font-semibold transition-all duration-300 ease-out shadow-lg hover:-translate-y-1 hover:shadow-2xl"
                  :class="{
                    // Primary
                    'bg-green-600 text-white hover:bg-green-700':
                      button.variant === 'primary',

                    // Secondary
                    'bg-white text-green-700 border border-white hover:bg-green-50':
                      button.variant === 'secondary',

                    // Outline
                    'border-2 border-white/80 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-green-700':
                      button.variant === 'outline',
                  }"
                >
                  <span>{{ button.label }}</span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>

    <!-- Arrow Navigation -->
    <button
      @click="prev"
      class="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition"
    >
      ❮
    </button>

    <button
      @click="next"
      class="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition"
    >
      ❯
    </button>

    <!-- Dots -->
    <div class="absolute bottom-10 right-10 flex gap-3 z-20">
      <button
        v-for="(_, i) in slides"
        :key="i"
        @click="active = i"
        class="w-3 h-3 rounded-full transition"
        :class="active === i ? 'bg-white scale-110' : 'bg-white/40'"
      ></button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

interface SlideButton {
  label: string;
  link: string;
  external?: boolean;
  variant: "primary" | "secondary" | "outline";
}

interface Slide {
  image: string;
  subtitle: string;
  title: string;
  description: string;
  buttons: SlideButton[];
}

const { asset } = useAsset();
// Slide data
const slides: Slide[] = [
  {
    image: "/images/herosection/3.png",
    title: "BUILD TRUST",
    description:
      "Rumah Sakit tersier yang terpercaya, aman, bermutu tinggi dan mandiri. Komitmen peningkatkan kualitas pelayanan, sesuai dengan visi dan misi.  ",
    subtitle: "",
    buttons: [],
  },
  {
    image: "/images/herosection/4.png",
    title: "Layanan Unggulan dan Rujukan Nasional",
    description:
      "Menghadirkan pelayanan kesehatan berkualitas, inovatif, dan terpercaya bagi masyarakat Indonesia.",
    subtitle: "",
    buttons: [
      {
        label: "Lihat Layanan Unggulan",
        link: "/pelayanan/layanan-unggulan",
        variant: "primary",
      },
    ],
  },
  {
    image: "/images/herosection/5.png",
    title: "Modern, Profesional dan Terpercaya",
    description:
      "Menghadirkan layanan dengan didukung fasilitas modern dan tenaga medis profesional.",
    subtitle: "",
    buttons: [
      {
        label: "Lihat Graha Amerta",
        link: "/pelayanan/graha-amerta",
        variant: "primary",
      },
    ],
  },
  {
    image: "/images/herosection/6.png",
    title: "Sekarang lebih DEKAT dan CEPAT",
    description:
      "Pendaftaran Online, SIPS dan Ambulans 118 dapat diakses dengan mudah melalui perangkat mobile, memberikan kemudahan layanan kesehatan kapan saja dan di mana saja.",
    subtitle: "",
    buttons: [
      {
        label: "Pendaftaran Online",
        link: "https://daftar.rsudrsoetomo.jatimprov.go.id",
        external: true,
        variant: "primary",
      },
      {
        label: "SIPS",
        link: "https://sips.rsudrsoetomo.jatimprov.go.id/",
        external: true,
        variant: "secondary",
      },
      {
        label: "Ambulans 118",
        link: "https://itki.rsudrsoetomo.jatimprov.go.id/ambulans-rsds/public/index",
        external: true,
        variant: "outline",
      },
    ],
  },
];

const active = ref(0);
const mounted = ref(false);
let interval: number;

const next = () => {
  active.value = (active.value + 1) % slides.length;
};

const prev = () => {
  active.value = active.value === 0 ? slides.length - 1 : active.value - 1;
};

onMounted(() => {
  mounted.value = true; // slider baru muncul di client
  interval = window.setInterval(next, 6000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.7s ease;
}
.slide-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
