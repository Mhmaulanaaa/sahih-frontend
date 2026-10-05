<template>
  <!-- ========================================================= -->
  <!-- NEWS SECTION -->
  <!-- ========================================================= -->
  <section class="relative overflow-hidden py-12 sm:py-16">
    <!-- BACKGROUND -->
    <!-- Base -->
    <div
      class="absolute left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-[#a0e7c8]/20 rounded-full blur-3xl"
    ></div>

    <!-- Top glow -->
    <!-- <div
      class="absolute -top-52 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-emerald-100/20 blur-[100px]"
    ></div> -->

    <!-- Right glow -->
    <div
      class="absolute top-1/3 -right-52 w-[600px] h-[600px] rounded-full bg-emerald-100/15 blur-[100px]"
    ></div>

    <!-- Bottom left glow -->
    <div
      class="absolute -bottom-52 -left-52 w-[600px] h-[600px] rounded-full bg-green-100/15 blur-[100px]"
    ></div>

    <!-- Very subtle center -->
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.035),transparent_60%)]"
    ></div>

    <div class="relative max-w-7xl mx-auto px-5 sm:px-6">
      <!-- ===================================================== -->
      <!-- SOETOMO NEWS -->
      <!-- ===================================================== -->
      <div class="mb-16 sm:mb-20">
        <!-- HEADER -->
        <div
          class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-7 sm:mb-8"
        >
          <!-- TITLE -->
          <div>
            <div class="flex items-start gap-4">
              <!-- Accent -->
              <div class="flex flex-col items-center pt-1">
                <span class="w-1 h-10 rounded-full bg-emerald-600"></span>
                <span class="w-1 h-2 mt-1 rounded-full bg-emerald-300"></span>
              </div>

              <!-- Content -->
              <div>
                <!-- Label -->
                <div class="flex items-center gap-2">
                  <span
                    class="inline-flex items-center px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700"
                  >
                    Berita Terkini
                  </span>
                </div>

                <!-- Title -->
                <h2
                  class="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900"
                >
                  Soetomo
                  <span class="text-emerald-600">News</span>
                </h2>
              </div>
            </div>
          </div>
        </div>

        <!-- NEWS LAYOUT -->
        <TransitionGroup
          name="fade-down"
          tag="div"
          class="grid grid-cols-1 lg:grid-cols-[1.1fr_1.0fr] gap-6 lg:gap-2 items-start"
        >
          <!-- ================================================= -->
          <!-- FEATURED NEWS -->
          <!-- ================================================= -->
          <!-- FEATURED SOETOMO NEWS -->
          <article
            v-if="featuredNews"
            class="group relative overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:shadow-emerald-900/10 transition-all duration-500"
          >
            <div class="relative overflow-hidden">
              <img
                :src="featuredNews.image"
                :alt="featuredNews.title"
                class="w-full h-[200px] sm:h-[350px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div
                class="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent"
              ></div>

              <span
                class="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-emerald-700"
              >
                SOETOMO NEWS
              </span>
            </div>

            <div class="p-5 sm:p-7 lg:p-8">
              <div class="flex items-center gap-2 text-xs text-gray-400">
                <i class="fa-regular fa-calendar"></i>
                <span>{{ featuredNews.date }}</span>
              </div>

              <h3
                class="mt-3 text-xl sm:text-2xl lg:text-3xl font-bold leading-tight text-gray-900 line-clamp-3 group-hover:text-emerald-700 transition-colors"
              >
                {{ featuredNews.title }}
              </h3>

              <p
                class="mt-3 text-sm sm:text-base leading-relaxed text-gray-500 line-clamp-3"
              >
                {{ featuredNews.excerpt }}
              </p>

              <NuxtLink
                :to="featuredNews.link"
                class="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
              >
                Baca selengkapnya
                <i class="fa-solid fa-arrow-right text-xs"></i>
              </NuxtLink>
            </div>
          </article>

          <!-- ================================================= -->
          <!-- SIDE NEWS -->
          <!-- ================================================= -->
          <div v-if="otherNews.length" class="flex flex-col gap-3 lg:gap-3">
            <article
              v-for="item in otherNews"
              :key="item.title"
              class="group flex gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl bg-white border border-gray-200 hover:border-emerald-200 hover:bg-emerald-50/30 hover:shadow-md hover:shadow-emerald-900/5 transition-all duration-300"
            >
              <!-- CONTENT -->
              <div class="flex-1 min-w-0 order-1">
                <span
                  class="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-emerald-600"
                >
                  Soetomo News
                </span>

                <h3
                  class="mt-1.5 text-sm sm:text-base lg:text-lg font-bold leading-snug text-gray-900 line-clamp-3 group-hover:text-emerald-700 transition-colors"
                >
                  {{ item.title }}
                </h3>

                <div class="flex items-center gap-2 mt-2 text-xs text-gray-400">
                  <i class="fa-regular fa-calendar"></i>
                  <span>{{ item.date }}</span>
                </div>

                <NuxtLink
                  :to="item.link"
                  class="inline-flex items-center gap-1.5 mt-3 text-xs sm:text-sm font-medium text-emerald-700 hover:text-emerald-800"
                >
                  Baca selengkapnya
                  <i
                    class="fa-solid fa-arrow-right text-[10px] transition-transform duration-300 group-hover:translate-x-1"
                  ></i>
                </NuxtLink>
              </div>

              <!-- IMAGE -->
              <div
                class="relative shrink-0 w-28 h-24 sm:w-36 sm:h-28 lg:w-40 lg:h-28 rounded-xl overflow-hidden order-2"
              >
                <img
                  :src="item.image"
                  :alt="item.title"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </article>
          </div>
        </TransitionGroup>
      </div>

      <!-- ===================================================== -->
      <!-- SEPUTAR JAWA TIMUR -->
      <!-- ===================================================== -->
      <div class="mb-16 sm:mb-20">
        <!-- HEADER -->
        <div
          class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-7 sm:mb-8"
        >
          <!-- TITLE -->
          <div>
            <div class="flex items-start gap-4">
              <!-- Accent -->
              <div class="flex flex-col items-center pt-1">
                <span class="w-1 h-10 rounded-full bg-emerald-600"></span>
                <span class="w-1 h-2 mt-1 rounded-full bg-emerald-300"></span>
              </div>

              <!-- Content -->
              <div>
                <!-- Label -->
                <div class="flex items-center gap-2">
                  <span
                    class="inline-flex items-center px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700"
                  >
                    Informasi Jawa Timur
                  </span>
                </div>

                <!-- Title -->
                <h2
                  class="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900"
                >
                  Seputar
                  <span class="text-emerald-600">Jawa Timur</span>
                </h2>
              </div>
            </div>
          </div>
        </div>

        <!-- NEWS LAYOUT -->
        <TransitionGroup
          name="fade-down"
          tag="div"
          class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5"
        >
          <article
            v-for="(item, index) in otherSeputarJatim.slice(0, 8)"
            :key="item.title"
            class="group flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-gray-200 hover:border-emerald-200 hover:bg-emerald-50/30 hover:shadow-lg hover:shadow-emerald-900/5 transition-all duration-300 min-w-0"
          >
            <!-- CONTENT -->
            <div class="flex-1 min-w-0 order-1">
              <!-- CATEGORY -->
              <span
                class="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-emerald-600"
              >
                Seputar Jatim
              </span>
              <!-- TITLE -->
              <h3
                class="mt-1.5 text-sm sm:text-base lg:text-[15px] font-bold leading-snug text-gray-900 line-clamp-2 group-hover:text-emerald-700 transition-colors"
              >
                {{ item.title }}
              </h3>

              <!-- DATE -->
              <div
                class="flex items-center gap-2 mt-2 text-[11px] sm:text-xs text-gray-400"
              >
                <i class="fa-regular fa-calendar"></i>
                <span>{{ item.date }}</span>
              </div>

              <!-- LINK -->
              <NuxtLink
                :to="item.link"
                class="inline-flex items-center gap-1.5 mt-3 text-xs sm:text-sm font-medium text-emerald-700 hover:text-emerald-800"
              >
                Baca selengkapnya

                <i
                  class="fa-solid fa-arrow-right text-[10px] transition-transform group-hover:translate-x-1"
                ></i>
              </NuxtLink>
            </div>

            <!-- IMAGE -->
            <div
              class="relative shrink-0 w-28 h-24 sm:w-36 sm:h-28 lg:w-36 lg:h-28 rounded-xl overflow-hidden order-2"
            >
              <img
                :src="item.image"
                :alt="item.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </article>
        </TransitionGroup>
      </div>

      <!-- ===================================================== -->
      <!-- INSTAGRAM -->
      <!-- ===================================================== -->
      <div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          <div v-for="(post, index) in instagramPosts" :key="index" class="group">
            <div
              class="overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/10"
            >
              <div class="p-3">
                <blockquote
                  class="instagram-media !mx-auto !mb-0 !w-full"
                  :data-instgrm-permalink="post"
                  data-instgrm-version="14"
                ></blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ========================================================= -->
  <!-- END NEWS SECTION -->
  <!-- ========================================================= -->
</template>
<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

interface NewsItem {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  link: string;
}

/* =========================================================
   SOETOMO NEWS
========================================================= */

const soetomoNews: NewsItem[] = [
  {
    title: "RSUD Dr. Soetomo Resmikan Layanan Digital Terpadu",
    excerpt:
      "Transformasi digital untuk meningkatkan kecepatan dan kualitas layanan pasien.",
    date: "12 Jan 2026",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
    link: "#",
  },
  {
    title: "Klinik Jantung Terpadu Jadi Rujukan Nasional",
    excerpt: "Pelayanan kardiovaskular komprehensif dengan teknologi mutakhir.",
    date: "10 Jan 2026",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
    link: "#",
  },
  {
    title: "RSUD Soetomo Raih Penghargaan Pelayanan Publik",
    excerpt: "Penghargaan atas inovasi dan peningkatan mutu pelayanan.",
    date: "08 Jan 2026",
    image: "https://images.unsplash.com/photo-1600959907703-125ba1374a12",
    link: "#",
  },
  {
    title: "RSUD Dr. Soetomo Resmikan Layanan Digital Terpadu",
    excerpt:
      "Transformasi digital untuk meningkatkan kecepatan dan kualitas layanan pasien.",
    date: "12 Jan 2026",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
    link: "#",
  },
  {
    title: "Klinik Jantung Terpadu Jadi Rujukan Nasional",
    excerpt: "Pelayanan kardiovaskular komprehensif dengan teknologi mutakhir.",
    date: "10 Jan 2026",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
    link: "#",
  },
];

const showAll = ref(false);

const visibleNews = computed<NewsItem[]>(() => {
  return showAll.value ? soetomoNews : soetomoNews.slice(0, 6);
});

/*
 * Berita pertama sebagai featured news.
 * undefined ditangani dengan aman oleh TypeScript.
 */
const featuredNews = computed<NewsItem | undefined>(() => {
  return visibleNews.value[0];
});

const otherNews = computed<NewsItem[]>(() => {
  return visibleNews.value.slice(1);
});

/* =========================================================
   SEPUTAR JAWA TIMUR
========================================================= */

const jatimNews: NewsItem[] = [
  {
    title: "Pemprov Jatim Perkuat Sistem Kesehatan Daerah",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
    excerpt: "Kolaborasi rumah sakit dan puskesmas se-Jawa Timur.",
    date: "11 Jan 2026",
    link: "#",
  },
  {
    title: "Program Pemeriksaan Kesehatan Gratis Diluncurkan",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
    excerpt: "Upaya meningkatkan derajat kesehatan masyarakat Jatim.",
    date: "09 Jan 2026",
    link: "#",
  },
  {
    title: "Digitalisasi Data Kesehatan di Jawa Timur",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
    excerpt: "Langkah strategis menuju layanan kesehatan terintegrasi.",
    date: "06 Jan 2026",
    link: "#",
  },
  {
    title: "Pemprov Jatim Perkuat Sistem Kesehatan Daerah",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
    excerpt: "Kolaborasi rumah sakit dan puskesmas se-Jawa Timur.",
    date: "11 Jan 2026",
    link: "#",
  },
  {
    title: "Program Pemeriksaan Kesehatan Gratis Diluncurkan",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
    excerpt: "Upaya meningkatkan derajat kesehatan masyarakat Jatim.",
    date: "09 Jan 2026",
    link: "#",
  },
];

const showAllSeputarJatim = ref(false);

const visibleSeputarJatim = computed<NewsItem[]>(() => {
  return showAllSeputarJatim.value ? jatimNews : jatimNews.slice(0, 6);
});

const featuredSeputarJatim = computed<NewsItem | undefined>(() => {
  return visibleSeputarJatim.value[0];
});

const otherSeputarJatim = computed<NewsItem[]>(() => {
  return visibleSeputarJatim.value.slice(1);
});

// Instagram

const instagramPosts = [
  "https://www.instagram.com/p/DTg-fjdj4jW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==/",
  "https://www.instagram.com/p/DTesmaFj_de/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==/",
  "https://www.instagram.com/p/DTeZxK7j3rH/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==/",
];

onMounted(() => {
  const win = window as any;

  if (win.instgrm) {
    win.instgrm.Embeds.process();
  } else {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }
});
</script>

<style scoped>
.fade-down-enter-active,
.fade-down-leave-active {
  transition: all 0.45s ease;
}

.fade-down-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-down-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
