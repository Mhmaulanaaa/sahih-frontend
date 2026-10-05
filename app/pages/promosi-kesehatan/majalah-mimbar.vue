<template>
  <section class="bg-gradient-to- from-emerald-50 via-white to-emerald-50 pt-20">
    <!-- BREADCRUMB -->
    <div class="max-w-9xl mx-auto px-6 mt-15">
      <Breadcrumb />
    </div>
    <!-- HERO -->
    <div class="max-w-9xl mx-auto px-6 py-5">
      <BaseHeroPage title="Majalah Mimbar" logo="/images/logo/logo_white.png" />
    </div>

    <!-- CONTENT -->
    <!-- CONTENT -->
    <div class="max-w-9xl mx-auto px-6">
      <div class="bg-white rounded-2xl shadow-lg p-5">
        <!-- Mimbar 2026 -->
        <BaseAccordion title="2026" :defaultOpen="true">
          <!-- GRID 4 COLUMN -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- ITEM -->
            <a
              v-for="item in achievements2026"
              :key="item.judul"
              :href="asset(item.pdf)"
              target="_blank"
              rel="noopener noreferrer"
              class="group block rounded-lg p-4 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <!-- IMAGE -->
              <div class="w-full h-80 overflow-hidden">
                <img
                  :src="asset(item.image)"
                  alt="Majalah Mimbar"
                  class="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              <!-- TITLE -->
              <div class="pt-4">
                <h3
                  class="text-xs sm:text-sm font-medium text-emerald-700 text-center leading-relaxed line-clamp-2 group-hover:text-emerald-800 transition-colors"
                >
                  {{ item.judul }}
                </h3>
              </div>
            </a>
          </div>
        </BaseAccordion>
        <!-- Majalah Mimbar 2025 -->
        <BaseAccordion title="2025" :defaultOpen="true" class="mt-4">
          <!-- GRID 4 COLUMN -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- ITEM -->
            <a
              v-for="item in achievements2025"
              :key="item.judul"
              :href="asset(item.pdf)"
              target="_blank"
              rel="noopener noreferrer"
              class="group block rounded-lg p-4 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <!-- IMAGE -->
              <div class="w-full h-80 overflow-hidden">
                <img
                  :src="asset(item.image)"
                  alt="Majalah Mimbar"
                  class="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              <!-- TITLE -->
              <div class="pt-4">
                <h3
                  class="text-xs sm:text-sm font-medium text-emerald-700 text-center leading-relaxed line-clamp-2 group-hover:text-emerald-800 transition-colors"
                >
                  {{ item.judul }}
                </h3>
              </div>
            </a>
          </div>
        </BaseAccordion>
        <!-- Majalah Mimbar 2024 -->
        <BaseAccordion title="2024" :defaultOpen="true" class="mt-4">
          <!-- GRID 4 COLUMN -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- ITEM -->
            <a
              v-for="item in achievements2024"
              :key="item.judul"
              :href="asset(item.pdf)"
              target="_blank"
              rel="noopener noreferrer"
              class="group block rounded-lg p-4 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <!-- IMAGE -->
              <div class="w-full h-80 overflow-hidden">
                <img
                  :src="asset(item.image)"
                  alt="Majalah Mimbar"
                  class="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              <!-- TITLE -->
              <div class="pt-4">
                <h3
                  class="text-xs sm:text-sm font-medium text-emerald-700 text-center leading-relaxed line-clamp-2 group-hover:text-emerald-800 transition-colors"
                >
                  {{ item.judul }}
                </h3>
              </div>
            </a>
          </div>
        </BaseAccordion>
        <!-- Majalah Mimbar 2023 -->
        <BaseAccordion title="2023" :defaultOpen="true" class="mt-4">
          <!-- GRID 4 COLUMN -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- ITEM -->
            <a
              v-for="item in achievements2023"
              :key="item.judul"
              :href="asset(item.pdf)"
              target="_blank"
              rel="noopener noreferrer"
              class="group block rounded-lg p-4 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <!-- IMAGE -->
              <div class="w-full h-80 overflow-hidden">
                <img
                  :src="asset(item.image)"
                  alt="Majalah Mimbar"
                  class="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              <!-- TITLE -->
              <div class="pt-4">
                <h3
                  class="text-xs sm:text-sm font-medium text-emerald-700 text-center leading-relaxed line-clamp-2 group-hover:text-emerald-800 transition-colors"
                >
                  {{ item.judul }}
                </h3>
              </div>
            </a>
          </div>
        </BaseAccordion>
        <!-- Majalah Mimbar 2022 -->
        <BaseAccordion title="2022" :defaultOpen="true" class="mt-4">
          <!-- GRID 4 COLUMN -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- ITEM -->
            <a
              v-for="item in achievements2022"
              :key="item.judul"
              :href="asset(item.pdf)"
              target="_blank"
              rel="noopener noreferrer"
              class="group block rounded-lg p-4 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <!-- IMAGE -->
              <div class="w-full h-80 overflow-hidden">
                <img
                  :src="asset(item.image)"
                  alt="Majalah Mimbar"
                  class="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              <!-- TITLE -->
              <div class="pt-4">
                <h3
                  class="text-xs sm:text-sm font-medium text-emerald-700 text-center leading-relaxed line-clamp-2 group-hover:text-emerald-800 transition-colors"
                >
                  {{ item.judul }}
                </h3>
              </div>
            </a>
          </div>
        </BaseAccordion>
        <!-- Majalah Mimbar 2021 -->
        <BaseAccordion title="2021" :defaultOpen="true" class="mt-4">
          <!-- GRID 4 COLUMN -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- ITEM -->
            <a
              v-for="item in achievements2021"
              :key="item.judul"
              :href="asset(item.pdf)"
              target="_blank"
              rel="noopener noreferrer"
              class="group block rounded-lg p-4 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <!-- IMAGE -->
              <div class="w-full h-80 overflow-hidden">
                <img
                  :src="asset(item.image)"
                  alt="Majalah Mimbar"
                  class="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              <!-- TITLE -->
              <div class="pt-4">
                <h3
                  class="text-xs sm:text-sm font-medium text-emerald-700 text-center leading-relaxed line-clamp-2 group-hover:text-emerald-800 transition-colors"
                >
                  {{ item.judul }}
                </h3>
              </div>
            </a>
          </div>
        </BaseAccordion>
        <!-- Majalah Mimbar 2020 -->
        <BaseAccordion title="2020" :defaultOpen="true" class="mt-4">
          <!-- GRID 4 COLUMN -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- ITEM -->
            <a
              v-for="item in achievements2020"
              :key="item.judul"
              :href="asset(item.pdf)"
              target="_blank"
              rel="noopener noreferrer"
              class="group block rounded-lg p-4 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <!-- IMAGE -->
              <div class="w-full h-80 overflow-hidden">
                <img
                  :src="asset(item.image)"
                  alt="Majalah Mimbar"
                  class="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              <!-- TITLE -->
              <div class="pt-4">
                <h3
                  class="text-xs sm:text-sm font-medium text-emerald-700 text-center leading-relaxed line-clamp-2 group-hover:text-emerald-800 transition-colors"
                >
                  {{ item.judul }}
                </h3>
              </div>
            </a>
          </div>
        </BaseAccordion>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from "vue";
import Breadcrumb from "~/components/layout/Breadcrumb.vue";
import BaseHeroPage from "~/components/form/BaseHeroPage.vue";
import BaseAccordion from "~/components/form/BaseAccordion.vue";

useHead({
  title: "Majalah Mimbar",
});

definePageMeta({
  breadcrumb: [{ label: "Beranda", to: "/" }, { label: "Majalah Mimbar" }],
});

const { asset } = useAsset();

const achievements2026 = [
  {
    judul: "Volume 20 No.2 Agustus 2026",
    image: "/images/mimbar/mimbar-2026-1.jpg",
    pdf: "/pdf/penghargaan-1.pdf",
  },
  {
    judul: "Volume 20 No.1 April 2026",
    image: "/images/mimbar/mimbar-2026-2.png",
    pdf: "/pdf/penghargaan-2.pdf",
  },
];

const achievements2025 = [
  {
    judul: "Volume 29 No.4 Desember 2026",
    image: "/images/mimbar/mimbar-2025-1.png",
    pdf: "/pdf/penghargaan-1.pdf",
  },
  {
    judul: "Volume 29 No.3 Agustus 2026",
    image: "/images/mimbar/mimbar-2025-2.png",
    pdf: "/pdf/penghargaan-2.pdf",
  },
  {
    judul: "Volume 29 No.2 Juni 2026",
    image: "/images/mimbar/mimbar-2025-3.jpg",
    pdf: "/pdf/penghargaan-2.pdf",
  },
  {
    judul: "Volume 29 No.1 Maret 2026",
    image: "/images/mimbar/mimbar-2025-4.jpg",
    pdf: "/pdf/penghargaan-2.pdf",
  },
];
const achievements2024 = [
  {
    judul: "Volume 28 No.4 November 2024",
    image: "/images/mimbar/mimbar-2024-1.jpg",
    pdf: "/pdf/penghargaan-1.pdf",
  },
  {
    judul: "Volume 28 No.3 September 2024",
    image: "/images/mimbar/mimbar-2024-2.jpeg",
    pdf: "/pdf/penghargaan-2.pdf",
  },
  {
    judul: "Volume 28 No.2 Juni 2024",
    image: "/images/mimbar/mimbar-2024-3.jpg",
    pdf: "/pdf/penghargaan-2.pdf",
  },
  {
    judul: "Volume 28 No.1 Februari 2024",
    image: "/images/mimbar/mimbar-2024-4.png",
    pdf: "/pdf/penghargaan-2.pdf",
  },
];
const achievements2023 = [
  {
    judul: "Volume 27 No.4 November 2023",
    image: "/images/mimbar/mimbar-2023-1.jpg",
    pdf: "/pdf/penghargaan-1.pdf",
  },
  {
    judul: "Volume 27 No.3 Agustus 2023",
    image: "/images/mimbar/mimbar-2023-2.jpg",
    pdf: "/pdf/penghargaan-2.pdf",
  },
  {
    judul: "Volume 27 No.2 Mei 2023",
    image: "/images/mimbar/mimbar-2023-3.png",
    pdf: "/pdf/penghargaan-2.pdf",
  },
  {
    judul: "Volume 27 No.1 Februari 2023",
    image: "/images/mimbar/mimbar-2023-4.png",
    pdf: "/pdf/penghargaan-2.pdf",
  },
];
const achievements2022 = [
  {
    judul: "Volume 26 No.4 November 2022",
    image: "/images/mimbar/mimbar-2022-1.png",
    pdf: "/pdf/penghargaan-1.pdf",
  },
  {
    judul: "Volume 26 No.3 Agustus 2022",
    image: "/images/mimbar/mimbar-2022-2.png",
    pdf: "/pdf/penghargaan-2.pdf",
  },
  {
    judul: "Volume 26 No.2 Mei 2022",
    image: "/images/mimbar/mimbar-2022-3.png",
    pdf: "/pdf/penghargaan-2.pdf",
  },
  {
    judul: "Volume 26 No.1 Februari 2022",
    image: "/images/mimbar/mimbar-2022-4.png",
    pdf: "/pdf/penghargaan-2.pdf",
  },
];
const achievements2021 = [
  {
    judul: "Volume 25 No.4 November 2021",
    image: "/images/mimbar/mimbar-2021-1.png",
    pdf: "/pdf/penghargaan-1.pdf",
  },
  {
    judul: "Volume 25 No.3 Agustus 2021",
    image: "/images/mimbar/mimbar-2021-2.png",
    pdf: "/pdf/penghargaan-2.pdf",
  },
  {
    judul: "Volume 25 No.2 Mei 2021",
    image: "/images/mimbar/mimbar-2021-3.png",
    pdf: "/pdf/penghargaan-2.pdf",
  },
  {
    judul: "Volume 25 No.1 Februari 2021",
    image: "/images/mimbar/mimbar-2021-4.png",
    pdf: "/pdf/penghargaan-2.pdf",
  },
];
const achievements2020 = [
  {
    judul: "Volume 24 No.4 Oktober 2020",
    image: "/images/mimbar/mimbar-2020-1.png",
    pdf: "/pdf/penghargaan-1.pdf",
  },
  {
    judul: "Volume 24 No.3 Juli 2020",
    image: "/images/mimbar/mimbar-2020-2.png",
    pdf: "/pdf/penghargaan-2.pdf",
  },
  {
    judul: "Volume 24 No.2 April 2020",
    image: "/images/mimbar/mimbar-2020-3.png",
    pdf: "/pdf/penghargaan-2.pdf",
  },
  {
    judul: "Volume 24 No.1 Januari 2020",
    image: "/images/mimbar/mimbar-2020-4.png",
    pdf: "/pdf/penghargaan-2.pdf",
  },
];
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
