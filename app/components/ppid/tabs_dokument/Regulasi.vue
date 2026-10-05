<template>
  <div>
    <div class="space-y-0 grid gap-5 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
      <BaseDocument v-for="(doc, i) in regulasiPpid" :key="i" v-bind="doc" />
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
const regulasiPpid: DocumentItem[] = [
  {
    title:
      "Undang-Undang Republik Indonesia Nomor 14 Tahun 2008 Tentang Keterbukaan Informasi Publik ",
    href: "/images/welcome_drink.pdf",
    type: "PDF",
    size: "1,2 MB",
  },
  {
    title:
      "Undang-Undang Republik Indonesia Nomor 25 Tahun 2009 Tentang Pelayanan Publik",
    href: "/images/welcome_drink.pdf",
    type: "PDF",
    size: "1,2 MB",
  },
  {
    title: "Undang-Undang Republik Indonesia Nomor 43 Tahun 2009 Tentang Kearsipan",
    href: "/images/welcome_drink.pdf",
    type: "PDF",
    size: "1,2 MB",
  },
  {
    title:
      "Peraturan Pemerintah Republik Indonesia Nomor 61 Tahun 2010 Tentang Pelaksanaan Undang-Undang Nomor 14 Tahun 2008 Tentang Keterbukaan Informasi Publik",
    href: "/images/welcome_drink.pdf",
    type: "PDF",
    size: "1,2 MB",
  },
  {
    title:
      "Peraturan Menteri Dalam Negeri Republik Indonesia Nomor 3 Tahun 2017 Tentang Pedoman Pengelolaan Pelayanan Informasi dan Dokumentasi Kementerian Dalam Negeri dan Pemerintah Daerah",
    href: "/images/welcome_drink.pdf",
    type: "PDF",
    size: "1,2 MB",
  },
  {
    title:
      "Peraturan Komisi Informasi Nomor 1 Tahun 2010 Tentang Standar Layanan Informasi Publik",
    href: "/images/welcome_drink.pdf",
    type: "PDF",
    size: "1,2 MB",
  },
  {
    title:
      "Peraturan Komisi Informasi Nomor 1 Tahun 2013 Tentang Prosedur Penyelesaian Sengketa Informasi Publik",
    href: "/images/welcome_drink.pdf",
    type: "PDF",
    size: "1,2 MB",
  },
  {
    title:
      "Peraturan Gubernur Jawa Timur Nomor 8 Tahun 2018 Tentang Pedoman Pengelolaan Pelayanan Informasi dan Dokumentasi di Lingkungan Pemerintah Provinsi Jawa Timur",
    href: "/images/welcome_drink.pdf",
    type: "PDF",
    size: "1,2 MB",
  },
];
</script>
