<template>
  <div>
    <div class="space-y-0 grid gap-5 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
      <BaseDocument
        v-for="(doc, i) in layananPelauyananInfoPublik"
        :key="i"
        v-bind="doc"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseDocument from "~/components/form/BaseDocument.vue";

interface DocumentItem {
  title: string;
  href: string;
  type: string;
  size: string;
}
const layananPelauyananInfoPublik: DocumentItem[] = [
  {
    title:
      "Laporan Monitoring dan Evaluasi Keterbukaan Informasi Publik Periode Bulan Januari s.d Juni 2025",
    href: "/images/welcome_drink.pdf",
    type: "PDF",
    size: "1,2 MB",
  },
  {
    title: "Laporan Pelayanan Informasi Publik Tahun 2024",
    href: "/images/welcome_drink.pdf",
    type: "PDF",
    size: "1,2 MB",
  },
  {
    title: "Laporan Pelayanan Informasi Publik Tahun 2023",
    href: "/images/welcome_drink.pdf",
    type: "PDF",
    size: "1,2 MB",
  },
  {
    title: "Laporan Pelayanan Informasi Publik Tahun 2022",
    href: "/images/welcome_drink.pdf",
    type: "PDF",
    size: "1,2 MB",
  },
  {
    title: "Laporan Pelayanan Informasi Publik Tahun 2021",
    href: "/images/welcome_drink.pdf",
    type: "PDF",
    size: "1,2 MB",
  },
  {
    title: "Laporan Pelayanan Informasi Publik Tahun 2020",
    href: "/images/welcome_drink.pdf",
    type: "PDF",
    size: "1,2 MB",
  },
  {
    title: "Laporan Pelayanan Informasi Publik Tahun 2019",
    href: "/images/welcome_drink.pdf",
    type: "PDF",
    size: "1,2 MB",
  },
  {
    title: "Laporan Pelayanan Informasi Publik Tahun 2018",
    href: "/images/welcome_drink.pdf",
    type: "PDF",
    size: "1,2 MB",
  },
];
</script>
