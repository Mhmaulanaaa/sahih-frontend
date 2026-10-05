<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { usePublicApi } from "~/composables/api/usePublicApi";
import BaseHeroPage from "~/components/form/BaseHeroPage.vue";
import Breadcrumb from "~/components/layout/Breadcrumb.vue";

interface BeritaItem {
  berita_id: string;
  judulberita: string;
  waktuberita: string;
  thumbberita: string;
  deskripsiberita: string;
}

interface BeritaResponse {
  metadata?: {
    code: number;
    message: string;
  };

  response?: BeritaItem[];

  pagination?: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
}

useHead({
  title: "Soetomo News",
});

definePageMeta({
  breadcrumb: [
    {
      label: "Beranda",
      to: "/",
    },
    {
      label: "Soetomo News",
    },
  ],
});

const api = usePublicApi();

const berita = ref<BeritaItem[]>([]);
const loading = ref(false);
const error = ref<string | null>(null);

const currentPage = ref(1);
const lastPage = ref(1);
const total = ref(0);

/**
 * HTML → Plain Text
 *
 * Hanya digunakan untuk preview berita.
 * HTML asli tetap digunakan pada halaman detail.
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
    month: "long",
    year: "numeric",
  }).format(parsedDate);
};

/**
 * Ambil semua berita Soetomo
 */
const getBerita = async (page = 1) => {
  loading.value = true;
  error.value = null;

  try {
    const response = await api<BeritaResponse>(
      `/public/berita/all?kategori=soetomo&page=${page}`,
      {
        method: "GET",
      }
    );

    berita.value = response?.response ?? [];

    currentPage.value = response?.pagination?.current_page ?? page;

    lastPage.value = response?.pagination?.last_page ?? 1;

    total.value = response?.pagination?.total ?? 0;
  } catch (err: any) {
    console.error("Gagal load Soetomo News:", err);

    error.value =
      err?.data?.metadata?.message || err?.message || "Gagal mengambil data berita.";
  } finally {
    loading.value = false;
  }
};

/**
 * Mapping berita → UI
 */
const beritaList = computed(() => {
  return berita.value.map((item) => ({
    ...item,

    excerpt: htmlToPlainText(item.deskripsiberita),

    date: formatDate(item.waktuberita),

    // Route FRONTEND
    link: `/landing/soetomonews/${item.berita_id}`,
  }));
});

/**
 * Pagination
 */
const goToPage = async (page: number) => {
  if (page < 1 || page > lastPage.value || loading.value || page === currentPage.value) {
    return;
  }

  await getBerita(page);

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  getBerita();
});
</script>

<template>
  <main class="pt-10 bg-slate-50">
    <!-- ================================================
         BREADCRUMB
    ================================================= -->
    <section class="sm:pt-28">
      <div class="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb />
      </div>
    </section>

    <!-- ================================================
         HERO
    ================================================= -->
    <section class="pt-4 sm:pt-6">
      <div class="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8">
        <BaseHeroPage title="Soetomo News" logo="/images/logo/logo_white.png" />
      </div>
    </section>

    <!-- ================================================
         CONTENT
    ================================================= -->
    <section class="mx-auto max-w-9xl px-4 pb-20 pt-8 sm:px-6 sm:pt-10 lg:px-8 lg:pt-12">
      <div class="overflow-hidden rounded-3xl bg-white shadow-lg">
        <!-- HEADER CONTENT -->
        <div
          class="flex flex-col gap-4 border-b border-slate-100 px-5 py-6 sm:px-8 sm:py-7 lg:flex-row lg:items-center lg:justify-between"
        >
          <div>
            <div
              class="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600"
            >
              <i class="fa-solid fa-newspaper"></i>

              Informasi Terkini
            </div>

            <h2 class="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Berita RSUD Dr. Soetomo
            </h2>

            <p class="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
              Informasi dan berita terbaru seputar kegiatan, pelayanan, dan perkembangan
              RSUD Dr. Soetomo.
            </p>
          </div>

          <!-- TOTAL -->
          <div
            v-if="!loading && !error"
            class="inline-flex w-fit items-center gap-3 rounded-2xl bg-emerald-50 px-4 py-3"
          >
            <div
              class="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white"
            >
              <i class="fa-solid fa-newspaper"></i>
            </div>

            <div>
              <p class="text-xl font-bold leading-none text-emerald-700">
                {{ total }}
              </p>

              <p class="mt-1 text-xs font-medium text-emerald-600">Total berita</p>
            </div>
          </div>
        </div>

        <!-- =====================================================
             LOADING
        ====================================================== -->
        <div
          v-if="loading && beritaList.length === 0"
          class="grid gap-6 p-5 sm:grid-cols-2 sm:p-8 lg:grid-cols-3"
        >
          <div
            v-for="i in 6"
            :key="i"
            class="overflow-hidden rounded-2xl border border-slate-100"
          >
            <!-- IMAGE SKELETON -->
            <div class="h-56 animate-pulse bg-slate-200"></div>

            <!-- CONTENT SKELETON -->
            <div class="space-y-3 p-5">
              <div class="h-3 w-24 animate-pulse rounded bg-slate-200"></div>

              <div class="h-5 w-full animate-pulse rounded bg-slate-200"></div>

              <div class="h-5 w-4/5 animate-pulse rounded bg-slate-200"></div>

              <div class="h-4 w-full animate-pulse rounded bg-slate-200"></div>

              <div class="h-4 w-3/4 animate-pulse rounded bg-slate-200"></div>
            </div>
          </div>
        </div>

        <!-- =====================================================
             ERROR
        ====================================================== -->
        <div v-else-if="error" class="px-5 py-20 text-center sm:px-8">
          <div
            class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-500"
          >
            <i class="fa-solid fa-circle-exclamation text-2xl"></i>
          </div>

          <h3 class="mt-5 text-xl font-bold text-slate-900">Gagal memuat berita</h3>

          <p class="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
            {{ error }}
          </p>

          <button
            type="button"
            class="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-50"
            :disabled="loading"
            @click="getBerita(currentPage)"
          >
            <i class="fa-solid fa-rotate-right" :class="{ 'fa-spin': loading }"></i>

            Coba lagi
          </button>
        </div>

        <!-- =====================================================
             EMPTY
        ====================================================== -->
        <div v-else-if="beritaList.length === 0" class="px-5 py-20 text-center sm:px-8">
          <div
            class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-400"
          >
            <i class="fa-regular fa-newspaper text-2xl"></i>
          </div>

          <h3 class="mt-5 text-xl font-bold text-slate-900">Belum ada berita</h3>

          <p class="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
            Belum terdapat berita Soetomo yang dapat ditampilkan.
          </p>
        </div>

        <!-- =====================================================
             NEWS GRID
        ====================================================== -->
        <template v-else>
          <div class="grid gap-6 p-5 sm:grid-cols-2 sm:p-8 lg:grid-cols-3">
            <NuxtLink
              v-for="item in beritaList"
              :key="item.berita_id"
              :to="item.link"
              class="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/10"
            >
              <!-- IMAGE -->
              <div class="relative h-52 shrink-0 overflow-hidden bg-slate-100 sm:h-56">
                <img
                  v-if="item.thumbberita"
                  :src="item.thumbberita"
                  :alt="item.judulberita"
                  class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                <div
                  v-else
                  class="flex h-full w-full items-center justify-center text-slate-300"
                >
                  <i class="fa-regular fa-image text-4xl"></i>
                </div>

                <!-- CATEGORY -->
                <div
                  class="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700 shadow-sm backdrop-blur-sm"
                >
                  Soetomo News
                </div>

                <!-- IMAGE OVERLAY -->
                <div
                  class="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent"
                ></div>
              </div>

              <!-- CONTENT -->
              <div class="flex flex-1 flex-col p-5">
                <!-- DATE -->
                <div class="flex items-center gap-2 text-xs font-medium text-slate-400">
                  <i class="fa-regular fa-calendar text-emerald-600"></i>

                  <span>
                    {{ item.date }}
                  </span>
                </div>

                <!-- TITLE -->
                <h3
                  class="mt-3 line-clamp-2 text-lg font-bold leading-7 text-slate-900 transition-colors group-hover:text-emerald-700"
                >
                  {{ item.judulberita }}
                </h3>

                <!-- EXCERPT -->
                <p class="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
                  {{ item.excerpt }}
                </p>

                <!-- READ MORE -->
                <div class="mt-auto pt-5">
                  <span
                    class="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600"
                  >
                    Baca selengkapnya

                    <i
                      class="fa-solid fa-arrow-right text-xs transition-transform duration-300 group-hover:translate-x-1"
                    ></i>
                  </span>
                </div>
              </div>
            </NuxtLink>
          </div>

          <!-- ===================================================
               PAGINATION
          ==================================================== -->
          <div
            v-if="lastPage > 1"
            class="flex flex-col items-center justify-between gap-4 border-t border-slate-100 px-5 py-6 sm:flex-row sm:px-8"
          >
            <!-- INFO -->
            <p class="text-sm text-slate-500">
              Halaman
              <span class="font-semibold text-slate-700">
                {{ currentPage }}
              </span>
              dari
              <span class="font-semibold text-slate-700">
                {{ lastPage }}
              </span>
            </p>

            <!-- PAGINATION -->
            <div class="flex items-center gap-2">
              <!-- PREVIOUS -->
              <button
                type="button"
                :disabled="currentPage <= 1 || loading"
                class="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-600 disabled:cursor-not-allowed disabled:opacity-40"
                @click="goToPage(currentPage - 1)"
              >
                <i class="fa-solid fa-chevron-left text-xs"></i>
              </button>

              <!-- PAGE NUMBERS -->
              <template v-for="page in lastPage" :key="page">
                <button
                  v-if="
                    page === 1 || page === lastPage || Math.abs(page - currentPage) <= 1
                  "
                  type="button"
                  :disabled="loading"
                  class="flex h-10 min-w-10 items-center justify-center rounded-xl px-3 text-sm font-semibold transition"
                  :class="
                    page === currentPage
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'border border-slate-200 text-slate-600 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-600'
                  "
                  @click="goToPage(page)"
                >
                  {{ page }}
                </button>

                <span
                  v-else-if="page === 2 && currentPage > 3"
                  class="px-1 text-slate-400"
                >
                  ...
                </span>

                <span
                  v-else-if="page === lastPage - 1 && currentPage < lastPage - 2"
                  class="px-1 text-slate-400"
                >
                  ...
                </span>
              </template>

              <!-- NEXT -->
              <button
                type="button"
                :disabled="currentPage >= lastPage || loading"
                class="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-600 disabled:cursor-not-allowed disabled:opacity-40"
                @click="goToPage(currentPage + 1)"
              >
                <i class="fa-solid fa-chevron-right text-xs"></i>
              </button>
            </div>
          </div>
        </template>
      </div>
    </section>
  </main>
</template>
