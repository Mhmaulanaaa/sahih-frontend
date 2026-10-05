<template>
  <section class="pt-20">
    <!-- GLOBAL CONTAINER -->
    <div class="max-w-9xl mx-auto px-6">
      <!-- BREADCRUMB -->
      <div class="mt-15">
        <Breadcrumb />
      </div>
      <!-- HERO -->
      <div class="py-5">
        <BaseHeroPage title="Harga Obat" logo="/images/logo/logo_white.png" />
      </div>
      <!-- Menu -->
      <div class="bg-white rounded-2xl shadow-lg p-5">
        <!-- Tarif /> -->
        <div class="max-w-9xl mx-auto px-6">
          <!-- =========================================================
       DAFTAR OBAT
  ========================================================== -->
          <div class="space-y-6">
            <!-- HEADER -->
            <section>
              <h1
                class="text-lg sm:text-xl font-semibold text-slate-800 leading-relaxed mb-6"
              >
                Daftar Obat RSUD Dr. Soetomo
              </h1>

              <!-- SEARCH -->
              <div
                class="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm"
              >
                <div class="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-3">
                  <!-- INPUT SEARCH -->
                  <div class="relative">
                    <span
                      class="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400"
                    >
                      <i class="bi bi-search"></i>
                    </span>

                    <input
                      v-model="search"
                      type="text"
                      placeholder="Cari nama obat..."
                      class="w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 py-3 text-sm text-slate-700 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                      @keyup.enter="handleSearch"
                    />
                  </div>

                  <!-- CARI -->
                  <button
                    type="button"
                    class="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 active:scale-[0.98]"
                    @click="handleSearch"
                  >
                    <i class="bi bi-search"></i>
                    <span>Cari</span>
                  </button>

                  <!-- RESET -->
                  <button
                    type="button"
                    class="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 hover:text-slate-800 active:scale-[0.98]"
                    @click="handleReset"
                  >
                    <i class="bi bi-arrow-counterclockwise"></i>
                    <span>Reset</span>
                  </button>
                </div>
              </div>
            </section>

            <!-- TABLE -->
            <section
              class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <!-- TABLE HEADER -->
              <div
                class="flex flex-col gap-3 border-b border-slate-200 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6"
              >
                <div>
                  <h2 class="text-base font-semibold text-slate-800">Daftar Obat</h2>

                  <p class="mt-1 text-sm text-slate-500">
                    Menampilkan
                    <span class="font-medium text-slate-700">
                      {{ paginatedObat.length }}
                    </span>
                    dari
                    <span class="font-medium text-slate-700">
                      {{ filteredObat.length }}
                    </span>
                    obat
                  </p>
                </div>

                <!-- PER PAGE -->
                <div class="flex items-center gap-2">
                  <label class="text-sm text-slate-500"> Tampilkan </label>

                  <select
                    v-model="perPage"
                    class="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  >
                    <option :value="10">10</option>
                    <option :value="25">25</option>
                    <option :value="50">50</option>
                    <option :value="100">100</option>
                  </select>

                  <span class="text-sm text-slate-500"> data </span>
                </div>
              </div>

              <!-- RESPONSIVE TABLE -->
              <div class="overflow-x-auto">
                <table class="min-w-[900px] w-full text-left">
                  <thead>
                    <tr class="border-b border-slate-200 bg-emerald-50/70">
                      <th class="px-4 py-4 text-sm font-semibold text-slate-700 sm:px-6">
                        No.
                      </th>

                      <th class="px-4 py-4 text-sm font-semibold text-slate-700">
                        Nama Obat
                      </th>

                      <th class="px-4 py-4 text-sm font-semibold text-slate-700">
                        Kekuatan / Satuan
                      </th>

                      <th class="px-4 py-4 text-sm font-semibold text-slate-700">
                        Kemasan
                      </th>

                      <th class="px-4 py-4 text-sm font-semibold text-slate-700">
                        Produsen
                      </th>

                      <th
                        class="px-4 py-4 text-right text-sm font-semibold text-slate-700"
                      >
                        Harga Satuan
                      </th>
                    </tr>
                  </thead>

                  <tbody class="divide-y divide-slate-100">
                    <tr
                      v-for="(obat, index) in paginatedObat"
                      :key="`${obat.nama}-${index}`"
                      class="transition hover:bg-emerald-50/30"
                    >
                      <!-- NO -->
                      <td
                        class="whitespace-nowrap px-4 py-4 text-sm text-slate-500 sm:px-6"
                      >
                        {{ startIndex + index + 1 }}
                      </td>

                      <!-- NAMA -->
                      <td class="px-4 py-4 text-sm font-medium text-slate-800">
                        {{ obat.nama }}
                      </td>

                      <!-- KEKUATAN -->
                      <td class="whitespace-nowrap px-4 py-4 text-sm text-slate-600">
                        {{ obat.kekuatan || "-" }}
                      </td>

                      <!-- KEMASAN -->
                      <td class="whitespace-nowrap px-4 py-4 text-sm text-slate-600">
                        {{ obat.kemasan }}
                      </td>

                      <!-- PRODUSEN -->
                      <td class="whitespace-nowrap px-4 py-4 text-sm text-slate-600">
                        {{ obat.produsen }}
                      </td>

                      <!-- HARGA -->
                      <td
                        class="whitespace-nowrap px-4 py-4 text-right text-sm font-semibold text-emerald-700"
                      >
                        {{ obat.harga }}
                      </td>
                    </tr>

                    <!-- EMPTY -->
                    <tr v-if="paginatedObat.length === 0">
                      <td colspan="6" class="px-6 py-12 text-center">
                        <div class="flex flex-col items-center justify-center">
                          <div
                            class="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400"
                          >
                            <i class="bi bi-search text-xl"></i>
                          </div>

                          <p class="font-medium text-slate-700">
                            Data obat tidak ditemukan
                          </p>

                          <p class="mt-1 text-sm text-slate-500">
                            Silakan coba kata kunci pencarian lainnya.
                          </p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- PAGINATION -->
              <div
                v-if="filteredObat.length > 0"
                class="flex flex-col gap-4 border-t border-slate-200 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6"
              >
                <!-- INFO -->
                <p class="text-sm text-slate-500">
                  Menampilkan
                  <span class="font-medium text-slate-700">
                    {{ startIndex + 1 }}
                  </span>
                  -
                  <span class="font-medium text-slate-700">
                    {{ Math.min(startIndex + perPage, filteredObat.length) }}
                  </span>
                  dari
                  <span class="font-medium text-slate-700">
                    {{ filteredObat.length }}
                  </span>
                  data
                </p>

                <!-- PAGINATION -->
                <div class="flex items-center gap-1">
                  <!-- PREVIOUS -->
                  <button
                    type="button"
                    class="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                    :disabled="currentPage === 1"
                    @click="goToPage(currentPage - 1)"
                  >
                    <i class="bi bi-chevron-left"></i>
                  </button>

                  <!-- PAGE -->
                  <button
                    v-for="page in visiblePages"
                    :key="page"
                    type="button"
                    class="flex h-9 min-w-9 items-center justify-center rounded-lg px-2 text-sm font-medium transition"
                    :class="
                      page === currentPage
                        ? 'bg-emerald-600 text-white'
                        : 'border border-slate-200 text-slate-600 hover:bg-slate-50'
                    "
                    @click="goToPage(page)"
                  >
                    {{ page }}
                  </button>

                  <!-- NEXT -->
                  <button
                    type="button"
                    class="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                    :disabled="currentPage === totalPages"
                    @click="goToPage(currentPage + 1)"
                  >
                    <i class="bi bi-chevron-right"></i>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseHeroPage from "~/components/form/BaseHeroPage.vue";
import Breadcrumb from "~/components/layout/Breadcrumb.vue";
import BaseAccordion from "~/components/form/BaseAccordion.vue";

import BaseCardKerjasama from "~/components/form/BaseCardKerjasama.vue";

useHead({
  title: "Harga Obat RSUD Dr. Soetomo",
});

definePageMeta({
  breadcrumb: [{ label: "Beranda", to: "/" }, { label: "Harga Obat RSUD Dr. Soetomo" }],
});

import { computed, ref, watch } from "vue";

interface Obat {
  nama: string;
  kekuatan: string;
  kemasan: string;
  produsen: string;
  harga: string;
}

const search = ref("");
const activeSearch = ref("");
const currentPage = ref(1);
const perPage = ref(10);

const daftarObat: Obat[] = [
  {
    nama: "2FDC (R75/H50) KDT",
    kekuatan: "-",
    kemasan: "kapsul",
    produsen: "KIMIA FARMA",
    harga: "Rp 1.549",
  },
  {
    nama: "3FDC (R75/H50/Z150) KDT",
    kekuatan: "-",
    kemasan: "kapsul",
    produsen: "KIMIA FARMA",
    harga: "Rp 1.549",
  },
  {
    nama: "ABACAVIR 300 MG (BANTUAN)",
    kekuatan: "-",
    kemasan: "tab",
    produsen: "KIMIA FARMA",
    harga: "Rp 6.324",
  },
  {
    nama: "ABILIFY MAINTENA 400MG INJ",
    kekuatan: "-",
    kemasan: "SYRINGE",
    produsen: "OTSUKA",
    harga: "Rp 1.883.833",
  },
  {
    nama: "ABILIFY ORAL SOLUTION",
    kekuatan: "-",
    kemasan: "FLS",
    produsen: "OTSUKA",
    harga: "Rp 239.388",
  },
  {
    nama: "ABIXA 10MG",
    kekuatan: "10 / mg",
    kemasan: "tablet",
    produsen: "PZI",
    harga: "Rp 43.639",
  },
  {
    nama: "ACARBOSE 100MG",
    kekuatan: "100 / mg",
    kemasan: "tab",
    produsen: "DEXA MEDICA",
    harga: "Rp 1.058",
  },
  {
    nama: "ACARBOSE 100MG TAB",
    kekuatan: "100 / mg",
    kemasan: "tablet",
    produsen: "KIMIA FARMA",
    harga: "Rp 1.086",
  },
  {
    nama: "ACARBOSE 50MG",
    kekuatan: "50 / mg",
    kemasan: "tab",
    produsen: "DEXA MEDICA",
    harga: "Rp 897",
  },
  {
    nama: "ACARBOSE 50MG TAB",
    kekuatan: "-",
    kemasan: "tablet",
    produsen: "KIMIA FARMA",
    harga: "Rp 640",
  },
];

const filteredObat = computed(() => {
  const keyword = activeSearch.value.trim().toLowerCase();

  if (!keyword) {
    return daftarObat;
  }

  return daftarObat.filter((obat) => obat.nama.toLowerCase().includes(keyword));
});

const totalPages = computed(() => {
  return Math.max(1, Math.ceil(filteredObat.value.length / perPage.value));
});

const startIndex = computed(() => {
  return (currentPage.value - 1) * perPage.value;
});

const paginatedObat = computed(() => {
  return filteredObat.value.slice(startIndex.value, startIndex.value + perPage.value);
});

const visiblePages = computed(() => {
  const total = totalPages.value;
  const current = currentPage.value;

  if (total <= 5) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  if (current <= 3) {
    return [1, 2, 3, 4, 5];
  }

  if (current >= total - 2) {
    return [total - 4, total - 3, total - 2, total - 1, total];
  }

  return [current - 2, current - 1, current, current + 1, current + 2];
});

const handleSearch = () => {
  activeSearch.value = search.value;
  currentPage.value = 1;
};

const handleReset = () => {
  search.value = "";
  activeSearch.value = "";
  currentPage.value = 1;
};

const goToPage = (page: number) => {
  if (page < 1 || page > totalPages.value) {
    return;
  }

  currentPage.value = page;
};

watch(perPage, () => {
  currentPage.value = 1;
});

watch(totalPages, (total) => {
  if (currentPage.value > total) {
    currentPage.value = total;
  }
});
</script>
