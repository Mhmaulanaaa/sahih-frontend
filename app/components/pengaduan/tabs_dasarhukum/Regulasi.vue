<template>
  <div>
    <div class="space-y-0 grid gap-5 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
      <BaseDocument v-for="(doc, i) in regulasi" :key="i" v-bind="doc" />
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
const regulasi: DocumentItem[] = [
  {
    title: "UNDANG UNDANG NO 25 TAHUN 2009 TENTANG PELAYANAN PUBLIK",
    href: "/images/welcome_drink.pdf",
    type: "PDF",
    size: "1,2 MB",
  },
  {
    title: "UNDANG UNDANG NO 37 TAHUN 2009 TENTANG OMBUDSMAN RI",
    href: "/images/welcome_drink.pdf",
    type: "PDF",
    size: "1,2 MB",
  },
  {
    title: "PERPRES NO 76 TAHUN 2013 TENTANG PENGELOLAAN PENGADUAN PELAYANAN PUBLIK",
    href: "/images/welcome_drink.pdf",
    type: "PDF",
    size: "1,2 MB",
  },
  {
    title:
      "PERATURAN OMBUDSMAN NO 26 TAHUN 2017 TENTANG TATA CARA PENERIMAAN, PEMERIKSAAN, DAN PENYELESAIAN LAPORAN",
    href: "/images/welcome_drink.pdf",
    type: "PDF",
    size: "1,2 MB",
  },
  {
    title:
      "PERGUBJATIM 113 TAHUN 2021 TENTANG NOMENKLATUR, SUSUNAN ORGANISASI, URAIAN TUGAS DAN FUNGSI SERTA TATA KERJA RSUD DR SOETOMO",
    href: "/images/welcome_drink.pdf",
    type: "PDF",
    size: "1,2 MB",
  },
];
</script>
