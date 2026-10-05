<template>
  <div>
    <div class="space-y-0 grid gap-5 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
      <BaseDocument v-for="(doc, i) in sopPpid" :key="i" v-bind="doc" />
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
const sopPpid: DocumentItem[] = [
  {
    title: "Alur Pelaporan WBS Online",
    href: "/images/welcome_drink.pdf",
    type: "PDF",
    size: "2,12 MB",
  },
  {
    title:
      "Keputusan Direktur Utama RSUD Dr. Soetomo Nomor 188.4/3946/301/2020 Tentang Kebijakan Penanganan Benturan Kepentingan di RSUD Dr. Soetomo",
    href: "/images/welcome_drink.pdf",
    type: "PDF",
    size: "3,3 MB",
  },
  {
    title:
      "Keputusan Direktur Utama RSUD Dr. Soetomo Nomor 188.4/3947/301/2020 Tentang Kebijakan Sistem Penanganan Pengaduan (Whistle Blowing System) di RSUD Dr. Soetomo",
    href: "/images/welcome_drink.pdf",
    type: "PDF",
    size: "3.71 MB",
  },
  {
    title:
      "Keputusan Direktur RSUD Dr. Soetomo Nomor 188.4/728.6/301/2022 Tentang Kebijakan Keterbukaan Informasi Publik RSUD Dr. Soetomo ",
    href: "/images/welcome_drink.pdf",
    type: "PDF",
    size: "3.71 MB",
  },
  {
    title: "Prosedur Penanganan Pengaduan WBS Melalui Aplikasi Siesta",
    href: "/images/welcome_drink.pdf",
    type: "PDF",
    size: "3.71 MB",
  },
  {
    title: "SOP Penanganan Keberatan Informasi 2024",
    href: "/images/welcome_drink.pdf",
    type: "PDF",
    size: "3.71 MB",
  },
  {
    title: "SOP Pendokumentasian Informasi Publik Pada PPID 2024 ",
    href: "/images/welcome_drink.pdf",
    type: "PDF",
    size: "3.71 MB",
  },
  {
    title: "SOP Penyusunan DIP 2024",
    href: "/images/welcome_drink.pdf",
    type: "PDF",
    size: "3.71 MB",
  },
  {
    title: "SOP Permintaan Informasi 2024 ",
    href: "/images/welcome_drink.pdf",
    type: "PDF",
    size: "3.71 MB",
  },
  {
    title: "SOP Uji Konsekuensi 2024 ",
    href: "/images/welcome_drink.pdf",
    type: "PDF",
    size: "3.71 MB",
  },
];
</script>
