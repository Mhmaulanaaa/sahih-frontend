<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useSeputarJatim } from "~/composables/landing/seputarjatim/useSeputarJatim";

const { news: backendNews, loading, error, getSeputarJatim } = useSeputarJatim();

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
 * Mapping data backend
 *
 * Section hanya menampilkan maksimal 4 berita.
 */
const seputarJatim = computed(() => {
  return backendNews.value.slice(0, 4).map((item) => ({
    berita_id: item.berita_id,
    title: item.judulberita,
    excerpt: htmlToPlainText(item.deskripsiberita),
    date: formatDate(item.waktuberita),

    // Prioritaskan URL secure dari backend
    image: item.thumbberita,

    is_eksternal: item.is_eksternal,

    link: `/landing/seputarjatim/${item.berita_id}`,
  }));
});

/**
 * Ambil data saat component mounted
 */
onMounted(() => {
  getSeputarJatim();
});
</script>

<template>
  <section class="relative overflow-hidden py-12 sm:py-16 xl:py-10">
    <div class="relative mx-auto max-w-7xl px-5 sm:px-6">
      <!-- HEADER -->
      <div
        class="mb-7 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <div class="flex items-start gap-4">
            <!-- Accent -->
            <div class="flex flex-col items-center pt-1">
              <span class="h-10 w-1 rounded-full bg-emerald-600"></span>

              <span class="mt-1 h-2 w-1 rounded-full bg-emerald-300"></span>
            </div>

            <!-- Content -->
            <div>
              <div class="flex items-center gap-2">
                <span
                  class="inline-flex items-center rounded-full border border-emerald-100 bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700 sm:text-xs"
                >
                  Informasi Jawa Timur
                </span>
              </div>

              <h2
                class="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl"
              >
                Seputar
                <span class="text-emerald-600">Jawa Timur</span>
              </h2>
            </div>
          </div>
        </div>

        <!-- LIHAT SEMUA -->
        <NuxtLink
          to="/landing/seputarjatim"
          class="inline-flex items-center justify-center gap-2 self-start rounded-xl border border-emerald-200 px-4 py-2.5 text-sm font-semibold text-emerald-700 transition-all duration-300 hover:bg-emerald-600 hover:text-white sm:self-center"
        >
          Lihat semua berita

          <i class="fa-solid fa-arrow-right text-xs"></i>
        </NuxtLink>
      </div>

      <!-- LOADING -->
      <div v-if="loading" class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
        <div
          v-for="i in 4"
          :key="i"
          class="flex animate-pulse items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 sm:p-5"
        >
          <!-- Skeleton content -->
          <div class="order-1 min-w-0 flex-1">
            <div class="h-3 w-24 rounded bg-gray-200"></div>

            <div class="mt-3 h-4 w-full rounded bg-gray-200"></div>
            <div class="mt-2 h-4 w-3/4 rounded bg-gray-200"></div>

            <div class="mt-4 h-3 w-20 rounded bg-gray-200"></div>
          </div>

          <!-- Skeleton image -->
          <div
            class="order-2 h-24 w-28 shrink-0 rounded-xl bg-gray-200 sm:h-28 sm:w-36"
          ></div>
        </div>
      </div>

      <!-- ERROR -->
      <div
        v-else-if="error"
        class="rounded-2xl border border-red-100 bg-red-50 px-5 py-6 text-center"
      >
        <div class="flex flex-col items-center">
          <i class="fa-solid fa-circle-exclamation mb-3 text-xl text-red-500"></i>

          <p class="text-sm font-medium text-red-700">
            Gagal memuat berita Seputar Jawa Timur.
          </p>

          <p class="mt-1 text-xs text-red-500">
            {{ error }}
          </p>
        </div>
      </div>

      <!-- EMPTY -->
      <div
        v-else-if="seputarJatim.length === 0"
        class="rounded-2xl border border-gray-200 bg-white px-5 py-10 text-center"
      >
        <div class="flex flex-col items-center">
          <i class="fa-regular fa-newspaper mb-3 text-2xl text-gray-400"></i>

          <p class="text-sm font-medium text-gray-600">
            Belum ada berita Seputar Jawa Timur.
          </p>
        </div>
      </div>

      <!-- NEWS -->
      <TransitionGroup
        v-else
        name="fade-down"
        tag="div"
        class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5"
      >
        <article
          v-for="item in seputarJatim"
          :key="item.berita_id"
          class="group flex min-w-0 items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:border-emerald-200 hover:bg-emerald-50/30 hover:shadow-lg hover:shadow-emerald-900/5 sm:p-5"
        >
          <!-- CONTENT -->
          <div class="order-1 min-w-0 flex-1">
            <!-- CATEGORY -->
            <span
              class="text-[10px] font-semibold uppercase tracking-wider text-emerald-600 sm:text-xs"
            >
              Seputar Jatim
            </span>

            <!-- TITLE -->
            <h3
              class="mt-1.5 line-clamp-2 text-sm font-bold leading-snug text-gray-900 transition-colors group-hover:text-emerald-700 sm:text-base lg:text-[15px]"
            >
              {{ item.title }}
            </h3>

            <!-- DATE -->
            <div
              class="mt-2 flex items-center gap-2 text-[11px] text-gray-400 sm:text-xs"
            >
              <i class="fa-regular fa-calendar"></i>

              <span>
                {{ item.date }}
              </span>
            </div>

            <!-- LINK -->
            <NuxtLink
              :to="item.link"
              class="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 hover:text-emerald-800 sm:text-sm"
            >
              Baca selengkapnya

              <i
                class="fa-solid fa-arrow-right text-[10px] transition-transform group-hover:translate-x-1"
              ></i>
            </NuxtLink>
          </div>

          <!-- IMAGE -->
          <div
            class="relative order-2 h-24 w-28 shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-36 lg:h-28 lg:w-36"
          >
            <img
              :src="item.image"
              :alt="item.title"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />

            <!-- External Badge -->
            <span
              v-if="item.is_eksternal"
              class="absolute right-2 top-2 rounded-full bg-emerald-600/90 px-2 py-0.5 text-[9px] font-semibold text-white backdrop-blur-sm"
            >
              Eksternal
            </span>
          </div>
        </article>
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
