<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useSoetomoNews } from "~/composables/landing/soetomonews/useSoetomoNews";

const { news: backendNews, loading, error, getSoetomoNews } = useSoetomoNews();

/**
 * HTML → Plain Text
 *
 * Digunakan hanya untuk preview di landing page.
 */
const htmlToPlainText = (html: string | null | undefined) => {
  if (!html) return "";

  const parser = new DOMParser();
  const document = parser.parseFromString(html, "text/html");

  return document.body.textContent?.replace(/\s+/g, " ").trim() ?? "";
};

/**
 * Format tanggal
 */
const formatDate = (date: string) => {
  if (!date) return "-";

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return date;
  }

  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(parsedDate);
};

/**
 * Mapping backend → UI
 */
const soetomoNews = computed(() => {
  return backendNews.value.map((item) => ({
    berita_id: item.berita_id,
    title: item.judulberita,
    excerpt: htmlToPlainText(item.deskripsiberita),
    date: formatDate(item.waktuberita),
    image: item.thumbberita,

    // berita_id masuk sebagai parameter URL
    link: `/landing/soetomonews/${item.berita_id}`,
  }));
});

/**
 * Landing hanya menampilkan 5 berita
 */
const visibleNews = computed(() => {
  return soetomoNews.value.slice(0, 5);
});

const featuredNews = computed(() => {
  return visibleNews.value[0];
});

const otherNews = computed(() => {
  return visibleNews.value.slice(1);
});

onMounted(() => {
  getSoetomoNews();
});
</script>

<template>
  <section class="relative overflow-hidden py-12 sm:py-16 xl:py-4">
    <div class="relative max-w-7xl mx-auto px-5 sm:px-6">
      <!-- HEADER -->
      <div
        class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-7 sm:mb-8"
      >
        <div>
          <div class="flex items-start gap-4">
            <div class="flex flex-col items-center pt-1">
              <span class="w-1 h-10 rounded-full bg-emerald-600"></span>
              <span class="w-1 h-2 mt-1 rounded-full bg-emerald-300"></span>
            </div>

            <div>
              <div class="flex items-center gap-2">
                <span
                  class="inline-flex items-center px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700"
                >
                  Berita Terkini
                </span>
              </div>

              <h2
                class="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900"
              >
                Soetomo
                <span class="text-emerald-600">News</span>
              </h2>
            </div>
          </div>
        </div>

        <!-- LIHAT SEMUA -->
        <NuxtLink
          to="/landing/soetomonews"
          class="inline-flex items-center justify-center gap-2 self-start sm:self-center px-4 py-2.5 rounded-xl border border-emerald-200 text-sm font-semibold text-emerald-700 hover:bg-emerald-600 hover:text-white transition-all duration-300"
        >
          Lihat semua berita
          <i class="fa-solid fa-arrow-right text-xs"></i>
        </NuxtLink>
      </div>

      <!-- NEWS -->
      <!-- NEWS -->
      <TransitionGroup
        name="fade-down"
        tag="div"
        class="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-6 lg:gap-2 items-start"
      >
        <!-- FEATURED -->
        <NuxtLink
          v-if="featuredNews"
          :to="featuredNews.link"
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

            <span
              class="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-emerald-700 group-hover:text-emerald-800"
            >
              Baca selengkapnya
              <i
                class="fa-solid fa-arrow-right text-xs transition-transform duration-300 group-hover:translate-x-1"
              ></i>
            </span>
          </div>
        </NuxtLink>

        <!-- SIDE NEWS -->
        <div v-if="otherNews.length" class="flex flex-col gap-3 lg:gap-3">
          <NuxtLink
            v-for="item in otherNews"
            :key="item.berita_id"
            :to="item.link"
            class="group flex gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl bg-white border border-gray-200 hover:border-emerald-200 hover:bg-emerald-50/30 hover:shadow-md hover:shadow-emerald-900/5 transition-all duration-300"
          >
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

              <span
                class="inline-flex items-center gap-1.5 mt-3 text-xs sm:text-sm font-medium text-emerald-700"
              >
                Baca selengkapnya

                <i
                  class="fa-solid fa-arrow-right text-[10px] transition-transform duration-300 group-hover:translate-x-1"
                ></i>
              </span>
            </div>

            <div
              class="relative shrink-0 w-28 h-24 sm:w-36 sm:h-28 lg:w-40 lg:h-28 rounded-xl overflow-hidden order-2"
            >
              <img
                :src="item.image"
                :alt="item.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </NuxtLink>
        </div>
      </TransitionGroup>
    </div>
  </section>
</template>

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
