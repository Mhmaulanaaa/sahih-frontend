<template>
  <div class="max-w-9xl mx-auto px-6 py-10">
    <TransitionGroup
      name="fade-slide"
      tag="div"
      class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
    >
      <ComponentCardPengaduan v-for="item in pengaduan" :key="item.title" :item="item" />
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import ComponentCardPengaduan from "./ComponentCardPengaduan.vue";

const pengaduan = [
  {
    title: "Dasar Hukum",
    icon: "/images/menusection/quicklink_pendol.png",
    link: "/pengaduan/dasar_hukum",
  },
  {
    title: "Kanal Pengaduan",
    icon: "/images/menusection/quicklink_pendol.png",
    link: "/pengaduan/kanal_pengaduan",
  },
  {
    title: "Mekanisme Pengelolaan Pengaduan",
    icon: "/images/menusection/quicklink_pendol.png",
    link: "/pengaduan/mekanisme_pengelolaan_pengaduan",
  },
  {
    title: "Tim Pengelola Pengaduan",
    icon: "/images/menusection/quicklink_pendol.png",
    link: "/pengaduan/pengelola_pengaduan",
  },
  {
    title: "Rekapitulasi Pengaduan",
    icon: "/images/menusection/quicklink_pendol.png",
    link: "/pengaduan/rekapitulasi_pengaduan",
  },
  {
    title: "Laporan Pengaduan",
    icon: "/images/menusection/quicklink_pendol.png",
    link: "/pengaduan/laporan_pengaduan",
  },
];
</script>
