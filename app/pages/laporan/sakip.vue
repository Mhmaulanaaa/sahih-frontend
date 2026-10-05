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
        <BaseHeroPage title="Sakip" logo="/images/logo/logo_white.png" />
      </div>
      <!-- Menu -->
      <div class="bg-white rounded-2xl shadow-lg p-5">
        <div class="max-w-9xl mx-auto px-6">
          <!-- ================= SEARCH ================= -->
          <div class="mb-10 flex flex-col items-center">
            <div class="relative w-full md:w-[500px]">
              <!-- ICON -->
              <span
                class="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400"
              >
                <i class="fas fa-search"></i>
              </span>

              <!-- INPUT -->
              <input
                v-model="search"
                type="text"
                placeholder="Cari laporan sakip berdasarkan judul"
                class="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none transition-all duration-300 shadow-sm"
              />
            </div>
          </div>

          <!-- ================= ACCORDION ================= -->
          <div
            v-if="filteredDocuments.length > 0"
            class="grid gap-8 sm:grid-cols-1 md:grid-cols-1"
          >
            <BaseAccordion
              v-for="(group, index) in filteredDocuments"
              :key="index"
              :title="group.year"
              :defaultOpen="true"
            >
              <div class="space-y-4 pt-2">
                <BaseUnduhDocument
                  v-for="(doc, i) in group.items"
                  :key="i"
                  :title="doc.title"
                  :description="doc.description"
                  :file="doc.file"
                  :icon="doc.icon"
                  :button-text="doc.buttonText"
                />
              </div>
            </BaseAccordion>
          </div>

          <!-- ================= EMPTY STATE ================= -->
          <div v-else class="flex flex-col items-center justify-center py-20 text-center">
            <div
              class="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mb-6"
            >
              <i class="fas fa-folder-open text-3xl text-slate-400"></i>
            </div>

            <h3 class="text-xl font-semibold text-slate-700 mb-2">
              Data Tidak Ditemukan
            </h3>

            <p class="text-slate-500 max-w-md">
              Tidak ada laporan yang sesuai dengan kata kunci
              <span class="font-semibold text-emerald-600">"{{ search }}"</span>. Silakan
              coba dengan kata kunci lain.
            </p>

            <button
              @click="search = ''"
              class="mt-6 px-5 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition"
            >
              Reset Pencarian
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BaseHeroPage from "~/components/form/BaseHeroPage.vue";
import Breadcrumb from "~/components/layout/Breadcrumb.vue";
import BaseAccordion from "~/components/form/BaseAccordion.vue";
import BaseUnduhDocument from "~/components/form/BaseUnduhDocument.vue";
useHead({
  title: "Sakip",
});

definePageMeta({
  breadcrumb: [
    { label: "Beranda", to: "/" },
    { label: "Laporan", to: "/laporan" },
    { label: "Sakip" },
  ],
});

//  Search
const search = ref("");

//  Data per tahun
const documents = ref([
  {
    year: "2022",
    items: [
      {
        title: "Sakip",
        description: "Laporan Sakip tahun 2022",
        file: "/pdf/tupoksi.pdf",
        icon: "fas fa-file-pdf",
        buttonText: "Unduh",
      },
    ],
  },
  {
    year: "2021",
    items: [
      {
        title: "Sakip",
        description: "Laporan Sakip tahun 2021",
        file: "/pdf/tupoksi.pdf",
        icon: "fas fa-file-pdf",
        buttonText: "Unduh",
      },
    ],
  },
  {
    year: "2020",
    items: [
      {
        title: "Sakip",
        description: "Laporan Sakip tahun 2020",
        file: "/pdf/tupoksi.pdf",
        icon: "fas fa-file-pdf",
        buttonText: "Unduh",
      },
    ],
  },
]);

// 🔎 Filter Logic
const filteredDocuments = computed(() => {
  if (!search.value) return documents.value;

  const keyword = search.value.toLowerCase();

  return documents.value
    .map((group) => {
      const yearMatch = group.year.includes(keyword);

      const filteredItems = group.items.filter(
        (item) =>
          item.title.toLowerCase().includes(keyword) ||
          item.description.toLowerCase().includes(keyword)
      );

      return {
        ...group,
        items: yearMatch ? group.items : filteredItems,
      };
    })
    .filter((group) => group.items.length > 0);
});
</script>
