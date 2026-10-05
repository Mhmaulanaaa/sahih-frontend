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
        <BaseHeroPage title="Rekapitulasi Pengaduan" logo="/images/logo/logo_white.png" />
      </div>
      <!-- Menu -->
      <div class="bg-white rounded-2xl shadow-lg p-5">
        <!-- <DaftarDokter /> -->
        <div class="max-w-9xl mx-auto px-6">
          <BaseAccordion title="2025" :defaultOpen="true">
            <div
              class="space-y-4 grid gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1"
            >
              <BaseTable :headers="tableHeaders1" :rows="tableRows1"> </BaseTable>
            </div>
          </BaseAccordion>
          <BaseAccordion title="2024" :defaultOpen="true" class="mt-5">
            <div
              class="space-y-4 grid gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1"
            >
              <BaseTable :headers="tableHeaders2" :rows="tableRows2"> </BaseTable>
            </div>
          </BaseAccordion>
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
import BaseTable from "~/components/form/BaseTable.vue";
useHead({
  title: "Rekapitulasi Pengaduan",
});

definePageMeta({
  breadcrumb: [
    { label: "Beranda", to: "/" },
    { label: "Pengaduan", to: "/pengaduan" },
    { label: "Rekapitulasi Pengaduan" },
  ],
});

const tableHeaders1 = [
  "Periode 	",
  "Jumlah Pengaduan 	",
  "Respon Time ≤ 5 hari (pengaduan)",
  "Respon Time > 5 hari (pengaduan)",
];

const tableRows1 = [
  ["Januari", 70, 70, 0],
  ["Februari", 57, 57, 0],
  ["Maret", 62, 62, 0],
  ["April", 60, 60, 0],
  ["Mei", 62, 62, 0],
  ["Juni", 82, 82, 0],
  ["Juli", 85, 85, 0],
  ["Agustus", 49, 49, 0],
  ["September", 47, 47, 0],
  ["Oktober", 33, 33, 0],
  ["TOTAL", 607, 607, 0],
];

const tableHeaders2 = [
  "Periode 	",
  "Jumlah Pengaduan 	",
  "Respon Time ≤ 5 hari (pengaduan)",
  "Respon Time > 5 hari (pengaduan)",
];

const tableRows2 = [
  ["Januari", 16, 16, 0],
  ["Februari", 16, 16, 0],
  ["Maret", 8, 8, 0],
  ["April", 5, 5, 0],
  ["Mei", 51, 51, 0],
  ["Juni", 34, 33, 1],
  ["Juli", 64, 64, 0],
  ["Agustus", 50, 50, 0],
  ["September", 54, 52, 2],
  ["Oktober", 58, 58, 0],
  ["November", 54, 54, 0],
  ["Desember", 77, 77, 0],
  ["TOTAL", 487, 484, 3],
];
</script>
