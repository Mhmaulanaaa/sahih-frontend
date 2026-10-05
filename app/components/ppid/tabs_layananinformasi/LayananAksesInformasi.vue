<template>
  <div>
    <div class="space-y-0 grid gap-5 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
      <BaseDocument v-for="(doc, i) in layananAksesInformasi" :key="i" v-bind="doc" />
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
const layananAksesInformasi: DocumentItem[] = [
  {
    title: "Laporan Akses Informasi Tahun 2025",
    href: "/images/welcome_drink.pdf",
    type: "PDF",
    size: "1,2 MB",
  },
  {
    title: "Laporan Akses Informasi Tahun 2024",
    href: "/images/welcome_drink.pdf",
    type: "PDF",
    size: "1,2 MB",
  },
];
</script>
