<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

import BaseHeroPage from "~/components/form/BaseHeroPage.vue";
import Breadcrumb from "~/components/layout/Breadcrumb.vue";
import { useInovasi } from "~/composables/landing/inovasi/useInovasi";

useHead({
  title: "Inovasi - RSUD Dr. Soetomo",
});

definePageMeta({
  breadcrumb: [
    {
      label: "Beranda",
      to: "/",
    },
    {
      label: "Inovasi",
    },
  ],
});

const { data: inovasi, pagination, loading, error, fetchAll } = useInovasi();

const search = ref("");
const currentSearch = ref("");

/**
 * HTML → Plain Text
 *
 * Digunakan hanya untuk preview card.
 * HTML asli tetap disimpan di composable
 * untuk digunakan pada halaman detail.
 */
const htmlToPlainText = (html: string | null | undefined) => {
  if (!html) return "";

  if (import.meta.server) {
    return html
      .replace(/<br\s*\/?>/gi, " ")
      .replace(/<\/p>/gi, " ")
      .replace(/<\/h[1-6]>/gi, " ")
      .replace(/<[^>]*>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  const parser = new DOMParser();
  const document = parser.parseFromString(html, "text/html");

  return document.body.textContent?.replace(/\s+/g, " ").trim() ?? "";
};

/**
 * Mapping data untuk UI
 */
const inovasiList = computed(() => {
  return inovasi.value.map((item) => ({
    ...item,
    excerpt: htmlToPlainText(item.description),
    link: `/landing/inovasi/${item.id}`,
  }));
});

/**
 * Load data
 */
const loadData = async (page = 1) => {
  await fetchAll(page, 10, currentSearch.value);
};

/**
 * Search
 */
const handleSearch = async () => {
  currentSearch.value = search.value.trim();

  await loadData(1);
};

/**
 * Pagination
 */
const goToPage = async (page: number) => {
  if (
    page < 1 ||
    page > pagination.value.last_page ||
    loading.value ||
    page === pagination.value.current_page
  ) {
    return;
  }

  await loadData(page);

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  loadData();
});
</script>

<template>
  <main class="bg-slate-50 pt-10">
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
        <BaseHeroPage title="Inovasi" logo="/images/logo/logo_white.png" />
      </div>
    </section>

    <!-- ================================================
         CONTENT
    ================================================= -->
    <section class="mx-auto max-w-9xl px-4 pb-20 pt-8 sm:px-6 sm:pt-10 lg:px-8 lg:pt-12">
      <div class="overflow-hidden rounded-3xl bg-white shadow-lg">
        <!-- ==========================================
             HEADER CONTENT
        =========================================== -->
        <div
          class="flex flex-col gap-4 border-b border-slate-100 px-5 py-6 sm:px-8 sm:py-7 lg:flex-row lg:items-center lg:justify-between"
        >
          <div>
            <div
              class="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600"
            >
              <i class="fa-solid fa-lightbulb"></i>

              Inovasi Pelayanan
            </div>

            <h2 class="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Inovasi RSUD Dr. Soetomo
            </h2>

            <p class="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
              Informasi berbagai inovasi pelayanan, peningkatan mutu, dan pengembangan
              layanan RSUD Dr. Soetomo Surabaya.
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
              <i class="fa-solid fa-lightbulb"></i>
            </div>

            <div>
              <p class="text-xl font-bold leading-none text-emerald-700">
                {{ pagination.total }}
              </p>

              <p class="mt-1 text-xs font-medium text-emerald-600">Total inovasi</p>
            </div>
          </div>
        </div>

        <!-- ==========================================
             LOADING
        =========================================== -->
        <div
          v-if="loading && inovasiList.length === 0"
          class="grid gap-6 p-5 sm:grid-cols-2 sm:p-8 lg:grid-cols-3"
        >
          <div
            v-for="i in 6"
            :key="i"
            class="overflow-hidden rounded-2xl border border-slate-100"
          >
            <!-- IMAGE -->
            <div class="h-52 animate-pulse bg-slate-200 sm:h-56"></div>

            <!-- CONTENT -->
            <div class="space-y-3 p-5">
              <div class="h-3 w-24 animate-pulse rounded bg-slate-200"></div>

              <div class="h-5 w-full animate-pulse rounded bg-slate-200"></div>

              <div class="h-5 w-4/5 animate-pulse rounded bg-slate-200"></div>

              <div class="h-4 w-full animate-pulse rounded bg-slate-200"></div>

              <div class="h-4 w-3/4 animate-pulse rounded bg-slate-200"></div>
            </div>
          </div>
        </div>

        <!-- ==========================================
             ERROR
        =========================================== -->
        <div v-else-if="error" class="px-5 py-20 text-center sm:px-8">
          <div
            class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-500"
          >
            <i class="fa-solid fa-circle-exclamation text-2xl"></i>
          </div>

          <h3 class="mt-5 text-xl font-bold text-slate-900">Gagal memuat inovasi</h3>

          <p class="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
            {{ error }}
          </p>

          <button
            type="button"
            :disabled="loading"
            class="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-50"
            @click="loadData(pagination.current_page)"
          >
            <i
              class="fa-solid fa-rotate-right"
              :class="{
                'fa-spin': loading,
              }"
            ></i>

            Coba lagi
          </button>
        </div>

        <!-- ==========================================
             EMPTY
        =========================================== -->
        <div v-else-if="inovasiList.length === 0" class="px-5 py-20 text-center sm:px-8">
          <div
            class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-400"
          >
            <i class="fa-solid fa-lightbulb text-2xl"></i>
          </div>

          <h3 class="mt-5 text-xl font-bold text-slate-900">Inovasi tidak ditemukan</h3>

          <p class="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
            Tidak terdapat inovasi yang sesuai dengan kata kunci pencarian.
          </p>
        </div>

        <!-- ==========================================
             INOVASI GRID
        =========================================== -->
        <template v-else>
          <div class="grid gap-6 p-5 sm:grid-cols-2 sm:p-8 lg:grid-cols-3">
            <NuxtLink
              v-for="item in inovasiList"
              :key="item.inovasi_id"
              :to="item.link"
              class="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/10"
            >
              <!-- IMAGE -->
              <div class="relative h-52 shrink-0 overflow-hidden bg-slate-100 sm:h-56">
                <img
                  v-if="item.thumbnail"
                  :src="item.thumbnail"
                  :alt="item.title"
                  class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                <div
                  v-else
                  class="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-50 to-emerald-100 text-emerald-300"
                >
                  <i class="fa-solid fa-lightbulb text-4xl"></i>
                </div>

                <!-- CATEGORY -->
                <div
                  class="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700 shadow-sm backdrop-blur-sm"
                >
                  Inovasi
                </div>

                <!-- IMAGE OVERLAY -->
                <div
                  class="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent"
                ></div>
              </div>

              <!-- CONTENT -->
              <div class="flex flex-1 flex-col p-5">
                <!-- LABEL -->
                <div class="flex items-center gap-2 text-xs font-medium text-slate-400">
                  <i class="fa-solid fa-lightbulb text-emerald-600"></i>

                  <span> Inovasi Pelayanan </span>
                </div>

                <!-- TITLE -->
                <h3
                  class="mt-3 line-clamp-2 text-lg font-bold leading-7 text-slate-900 transition-colors group-hover:text-emerald-700"
                >
                  {{ item.title }}
                </h3>

                <!-- DESCRIPTION -->
                <p
                  v-if="item.excerpt"
                  class="mt-3 line-clamp-3 text-sm leading-6 text-slate-500"
                >
                  {{ item.excerpt }}
                </p>

                <p v-else class="mt-3 text-sm italic leading-6 text-slate-400">
                  Belum ada deskripsi inovasi.
                </p>

                <!-- READ MORE -->
                <div class="mt-auto pt-5">
                  <span
                    class="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600"
                  >
                    Selengkapnya

                    <i
                      class="fa-solid fa-arrow-right text-xs transition-transform duration-300 group-hover:translate-x-1"
                    ></i>
                  </span>
                </div>
              </div>
            </NuxtLink>
          </div>

          <!-- ========================================
               PAGINATION
          ========================================= -->
          <div
            v-if="pagination.last_page > 1"
            class="flex flex-col items-center justify-between gap-4 border-t border-slate-100 px-5 py-6 sm:flex-row sm:px-8"
          >
            <!-- INFO -->
            <p class="text-sm text-slate-500">
              Halaman

              <span class="font-semibold text-slate-700">
                {{ pagination.current_page }}
              </span>

              dari

              <span class="font-semibold text-slate-700">
                {{ pagination.last_page }}
              </span>
            </p>

            <!-- PAGINATION -->
            <div class="flex items-center gap-2">
              <!-- PREVIOUS -->
              <button
                type="button"
                :disabled="pagination.current_page <= 1 || loading"
                class="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-600 disabled:cursor-not-allowed disabled:opacity-40"
                @click="goToPage(pagination.current_page - 1)"
              >
                <i class="fa-solid fa-chevron-left text-xs"></i>
              </button>

              <!-- PAGE NUMBERS -->
              <template v-for="page in pagination.last_page" :key="page">
                <!-- PAGE -->
                <button
                  v-if="
                    page === 1 ||
                    page === pagination.last_page ||
                    Math.abs(page - pagination.current_page) <= 1
                  "
                  type="button"
                  :disabled="loading"
                  class="flex h-10 min-w-10 items-center justify-center rounded-xl px-3 text-sm font-semibold transition"
                  :class="
                    page === pagination.current_page
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'border border-slate-200 text-slate-600 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-600'
                  "
                  @click="goToPage(page)"
                >
                  {{ page }}
                </button>

                <!-- LEFT ELLIPSIS -->
                <span
                  v-else-if="page === 2 && pagination.current_page > 3"
                  class="px-1 text-slate-400"
                >
                  ...
                </span>

                <!-- RIGHT ELLIPSIS -->
                <span
                  v-else-if="
                    page === pagination.last_page - 1 &&
                    pagination.current_page < pagination.last_page - 2
                  "
                  class="px-1 text-slate-400"
                >
                  ...
                </span>
              </template>

              <!-- NEXT -->
              <button
                type="button"
                :disabled="pagination.current_page >= pagination.last_page || loading"
                class="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-600 disabled:cursor-not-allowed disabled:opacity-40"
                @click="goToPage(pagination.current_page + 1)"
              >
                <i class="fa-solid fa-chevron-right text-xs"></i>
              </button>
            </div>
          </div>

          <!-- TOTAL -->
          <div class="border-t border-slate-100 px-5 py-4 text-center sm:px-8">
            <p class="text-xs text-slate-400">
              Menampilkan

              <span class="font-semibold text-slate-600">
                {{ inovasiList.length }}
              </span>

              dari

              <span class="font-semibold text-slate-600">
                {{ pagination.total }}
              </span>

              inovasi
            </p>
          </div>
        </template>
      </div>
    </section>
  </main>
</template>
