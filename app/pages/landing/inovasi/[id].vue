<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import Breadcrumb from "~/components/layout/Breadcrumb.vue";
import { useInovasi } from "~/composables/landing/inovasi/useInovasi";

const route = useRoute();

const { detail: inovasi, loading, error, fetchDetail } = useInovasi();

const inovasiId = String(route.params.id);

const currentSlide = ref(0);

/**
 * Breadcrumb
 */
definePageMeta({
  breadcrumb: [
    {
      label: "Beranda",
      to: "/",
    },
    {
      label: "Inovasi",
      to: "/landing/inovasi",
    },
    {
      label: "Detail Inovasi",
    },
  ],
});

/**
 * SEO
 */
useHead(() => ({
  title: inovasi.value?.title ? inovasi.value.title : "Detail Inovasi - RSUD Dr. Soetomo",
}));

/**
 * Slider images
 *
 * Kalau foto inovasi tersedia:
 * gunakan seluruh foto.
 *
 * Kalau tidak tersedia:
 * gunakan thumbnail sebagai fallback.
 */
const sliderImages = computed(() => {
  if (!inovasi.value) {
    return [];
  }

  if (Array.isArray(inovasi.value.photos) && inovasi.value.photos.length > 0) {
    return inovasi.value.photos;
  }

  if (inovasi.value.thumbnail) {
    return [inovasi.value.thumbnail];
  }

  return [];
});

const totalSlides = computed(() => sliderImages.value.length);

/**
 * Next slide
 */
const nextSlide = () => {
  if (totalSlides.value <= 1) {
    return;
  }

  currentSlide.value =
    currentSlide.value >= totalSlides.value - 1 ? 0 : currentSlide.value + 1;
};

/**
 * Previous slide
 */
const prevSlide = () => {
  if (totalSlides.value <= 1) {
    return;
  }

  currentSlide.value =
    currentSlide.value <= 0 ? totalSlides.value - 1 : currentSlide.value - 1;
};

/**
 * Go to slide
 */
const goToSlide = (index: number) => {
  currentSlide.value = index;
};

/**
 * Reset slider ketika data berubah
 */
const resetSlider = () => {
  currentSlide.value = 0;
};

onMounted(async () => {
  await fetchDetail(inovasiId);

  resetSlider();
});
</script>

<template>
  <main class="bg-slate-50 pt-20">
    <!-- =========================================================
         BREADCRUMB
    ========================================================== -->
    <section class="px-4 pt-24 sm:px-6 sm:pt-28 lg:px-8">
      <div class="mx-auto max-w-6xl">
        <Breadcrumb />
      </div>
    </section>

    <!-- =========================================================
         LOADING
    ========================================================== -->
    <section v-if="loading" class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="overflow-hidden rounded-3xl bg-white shadow-sm">
        <!-- IMAGE SKELETON -->
        <div class="h-[300px] animate-pulse bg-slate-200 sm:h-[450px] lg:h-[560px]" />

        <!-- CONTENT SKELETON -->
        <div class="space-y-5 p-6 sm:p-10 lg:p-14">
          <div class="h-5 w-32 animate-pulse rounded-full bg-slate-200" />

          <div class="h-10 w-full animate-pulse rounded-lg bg-slate-200" />

          <div class="h-10 w-4/5 animate-pulse rounded-lg bg-slate-200" />

          <div class="h-4 w-40 animate-pulse rounded bg-slate-200" />

          <div class="space-y-3 pt-6">
            <div class="h-4 w-full animate-pulse rounded bg-slate-200" />

            <div class="h-4 w-full animate-pulse rounded bg-slate-200" />

            <div class="h-4 w-5/6 animate-pulse rounded bg-slate-200" />
          </div>
        </div>
      </div>
    </section>

    <!-- =========================================================
         ERROR
    ========================================================== -->
    <section
      v-else-if="error || !inovasi"
      class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <div class="rounded-3xl bg-white px-6 py-16 text-center shadow-sm sm:px-10">
        <div
          class="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-red-50 text-red-500"
        >
          <i class="fa-solid fa-circle-exclamation text-3xl" />
        </div>

        <h1 class="mt-6 text-2xl font-bold text-slate-900">Inovasi tidak ditemukan</h1>

        <p class="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-500">
          {{ error || "Inovasi yang Anda cari tidak tersedia atau sudah tidak aktif." }}
        </p>

        <NuxtLink
          to="/landing/inovasi"
          class="mt-7 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          <i class="fa-solid fa-arrow-left text-xs" />

          Kembali ke Inovasi
        </NuxtLink>
      </div>
    </section>

    <!-- =========================================================
         DETAIL
    ========================================================== -->
    <article
      v-else-if="inovasi"
      class="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 sm:pt-10 lg:px-8"
    >
      <!-- =======================================================
           ARTICLE HEADER
      ======================================================== -->
      <div class="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-100">
        <div class="px-5 pb-8 pt-7 sm:px-8 sm:pb-10 lg:px-14 lg:pb-12 lg:pt-10">
          <!-- BACK -->
          <NuxtLink
            to="/landing/inovasi"
            class="group inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-emerald-600"
          >
            <span
              class="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 transition group-hover:bg-emerald-50"
            >
              <i class="fa-solid fa-arrow-left text-xs" />
            </span>

            Kembali ke Inovasi
          </NuxtLink>

          <!-- CATEGORY -->
          <div class="mt-8">
            <span
              class="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700"
            >
              <i class="fa-solid fa-lightbulb" />

              Inovasi RSUD Dr. Soetomo
            </span>
          </div>

          <!-- TITLE -->
          <h1
            class="mt-5 max-w-5xl text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.15]"
          >
            {{ inovasi.title }}
          </h1>

          <!-- META -->
          <div
            class="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-500"
          >
            <div class="flex items-center gap-2">
              <span
                class="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600"
              >
                <i class="fa-solid fa-lightbulb" />
              </span>

              <span> Inovasi Pelayanan </span>
            </div>

            <span class="hidden h-5 w-px bg-slate-200 sm:block" />

            <div class="flex items-center gap-2">
              <span
                class="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600"
              >
                <i class="fa-solid fa-building-columns" />
              </span>

              <span> RSUD Dr. Soetomo </span>
            </div>
          </div>
        </div>

        <!-- =====================================================
             IMAGE SLIDER
        ====================================================== -->
        <div v-if="sliderImages.length" class="relative overflow-hidden bg-slate-950">
          <!-- IMAGE -->
          <div class="relative h-screen w-full overflow-hidden">
            <Transition name="fade" mode="out-in">
              <img
                :key="sliderImages[currentSlide]"
                :src="sliderImages[currentSlide]"
                :alt="`${inovasi.title} - Foto ${currentSlide + 1}`"
                class="h-full w-full object-cover"
              />
            </Transition>

            <!-- GRADIENT -->
            <div
              class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10"
            />

            <!-- IMAGE COUNTER -->
            <div
              v-if="totalSlides > 1"
              class="absolute bottom-5 right-5 rounded-full bg-black/60 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md"
            >
              {{ currentSlide + 1 }} /
              {{ totalSlides }}
            </div>

            <!-- PREVIOUS -->
            <button
              v-if="totalSlides > 1"
              type="button"
              aria-label="Foto sebelumnya"
              class="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-lg backdrop-blur-sm transition hover:scale-105 hover:bg-white sm:left-6"
              @click="prevSlide"
            >
              <i class="fa-solid fa-chevron-left text-sm" />
            </button>

            <!-- NEXT -->
            <button
              v-if="totalSlides > 1"
              type="button"
              aria-label="Foto berikutnya"
              class="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-lg backdrop-blur-sm transition hover:scale-105 hover:bg-white sm:right-6"
              @click="nextSlide"
            >
              <i class="fa-solid fa-chevron-right text-sm" />
            </button>
          </div>

          <!-- DOTS -->
          <div
            v-if="totalSlides > 1"
            class="flex items-center justify-center gap-2 bg-slate-950 px-4 py-4"
          >
            <button
              v-for="(_, index) in sliderImages"
              :key="index"
              type="button"
              :aria-label="`Lihat foto ${index + 1}`"
              class="h-2 rounded-full transition-all duration-300"
              :class="
                currentSlide === index
                  ? 'w-8 bg-emerald-400'
                  : 'w-2 bg-white/30 hover:bg-white/60'
              "
              @click="goToSlide(index)"
            />
          </div>
        </div>

        <!-- =====================================================
             ARTICLE CONTENT
        ====================================================== -->
        <div class="px-5 py-8 sm:px-8 sm:py-10 lg:px-14 lg:py-14">
          <div class="mx-auto max-w-4xl">
            <div
              v-if="inovasi.description"
              class="prose prose-slate max-w-none text-justify prose-headings:font-bold prose-headings:tracking-tight prose-h2:mt-10 prose-h2:text-2xl prose-h3:text-xl prose-p:text-base prose-p:leading-8 prose-p:text-slate-600 prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-2xl prose-img:shadow-md prose-blockquote:border-emerald-500 prose-blockquote:rounded-r-xl prose-blockquote:bg-emerald-50 prose-blockquote:px-5 prose-li:text-slate-600"
              v-html="inovasi.description"
            />

            <div v-else class="rounded-2xl bg-slate-50 px-6 py-8 text-center">
              <i class="fa-solid fa-lightbulb text-2xl text-slate-300" />

              <p class="mt-3 text-sm text-slate-400">
                Belum ada deskripsi untuk inovasi ini.
              </p>
            </div>
          </div>
        </div>
        <!-- =====================================================
             INFORMASI TAMBAHAN
        ====================================================== -->
        <div
          class="border-t border-slate-100 bg-white px-5 py-8 sm:px-8 sm:py-10 lg:px-14 lg:py-12"
        >
          <div class="mx-auto max-w-4xl">
            <div class="mb-6">
              <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">
                Informasi Tambahan
              </p>

              <h2 class="mt-1 text-2xl font-bold tracking-tight text-slate-900">
                Informasi Inovasi
              </h2>

              <p class="mt-2 text-sm leading-6 text-slate-500">
                Informasi kontak dan referensi pendukung terkait inovasi ini.
              </p>
            </div>

            <div class="grid gap-4 md:grid-cols-3">
              <!-- BUKU PANDUAN -->
              <div
                v-if="inovasi.link_pedoman"
                class="rounded-2xl border border-slate-100 bg-slate-50/70 p-5"
              >
                <div
                  class="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-500"
                >
                  <i class="fa-solid fa-file-pdf text-lg" />
                </div>

                <h3 class="mt-4 text-sm font-bold text-slate-900">Buku Panduan Teknis</h3>

                <p class="mt-2 text-sm leading-6 text-slate-500">
                  Pelajari panduan teknis lengkap mengenai inovasi ini.
                </p>

                <a
                  :href="inovasi.link_pedoman"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="mt-4 inline-flex items-center gap-2 rounded-xl bg-red-500 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-red-600"
                >
                  <i class="fa-solid fa-download" />
                  Buka Panduan
                </a>
              </div>

              <!-- CONTACT PERSON -->
              <div
                v-if="inovasi.contact_person"
                class="rounded-2xl border border-slate-100 bg-slate-50/70 p-5"
              >
                <div
                  class="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600"
                >
                  <i class="fa-solid fa-phone-square text-lg" />
                </div>

                <h3 class="mt-4 text-sm font-bold text-slate-900">Contact Person</h3>

                <p class="mt-2 text-sm leading-6 text-slate-500">
                  Hubungi untuk mendapatkan informasi lebih lanjut.
                </p>

                <div class="mt-4 flex flex-wrap gap-2">
                  <!-- WHATSAPP -->
                  <a
                    :href="`https://wa.me/${String(inovasi.contact_person)
                      .replace(/\D/g, '')
                      .replace(/^0/, '62')}`"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-emerald-600"
                  >
                    <i class="fa-brands fa-whatsapp text-sm" />
                    WhatsApp
                  </a>

                  <!-- TELEPON -->
                  <a
                    :href="`tel:${inovasi.contact_person}`"
                    class="inline-flex items-center gap-2 rounded-xl border border-emerald-200 bg-white px-4 py-2.5 text-xs font-bold text-emerald-700 transition hover:bg-emerald-50"
                  >
                    <i class="fa-solid fa-phone text-sm" />
                    Telepon
                  </a>
                </div>
              </div>

              <!-- VIDEO -->
              <div
                v-if="inovasi.link_video"
                class="rounded-2xl border border-slate-100 bg-slate-50/70 p-5"
              >
                <div
                  class="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-50 text-rose-500"
                >
                  <i class="fa-brands fa-youtube text-lg" />
                </div>

                <h3 class="mt-4 text-sm font-bold text-slate-900">Video Inovasi</h3>

                <p class="mt-2 text-sm leading-6 text-slate-500">
                  Lihat video mengenai penerapan dan penggunaan inovasi.
                </p>

                <a
                  :href="inovasi.link_video"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="mt-4 inline-flex items-center gap-2 rounded-xl bg-rose-500 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-rose-600"
                >
                  <i class="fa-solid fa-play" />
                  Tonton Video
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- =====================================================
             FOOTER ARTICLE
        ====================================================== -->
        <div class="border-t border-slate-100 bg-slate-50/70 px-5 py-6 sm:px-8 lg:px-14">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p class="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Informasi inovasi
              </p>

              <p class="mt-1 text-sm font-semibold text-slate-700">RSUD Dr. Soetomo</p>
            </div>

            <NuxtLink
              to="/landing/inovasi"
              class="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-white px-4 py-2.5 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
            >
              <i class="fa-solid fa-lightbulb text-xs" />

              Lihat inovasi lainnya
            </NuxtLink>
          </div>
        </div>
      </div>
    </article>
  </main>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
