<template>
  <div class="max-w-9xl mx-auto px-6 py-10">
    <TransitionGroup
      name="fade-slide"
      tag="div"
      class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
    >
      <CardPengaduanInformasiPengaduan
        v-for="item in informasipengaduans"
        :key="item.title"
        :item="item"
      />
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import CardPengaduanInformasiPengaduan from "./component/CardPengaduanInformasiPengaduan.vue";

const informasipengaduans = [
  {
    title: "Pengaduan Layanan Publik",
    icon: "/images/menusection/quicklink_pendol.png",
    link: "/pengaduan-layanan-publik",
  },
  {
    title: "Permohonan Informasi",
    icon: "/images/menusection/quicklink_pendol.png",
    link: "/permohonan-informasi",
  },
  {
    title: "Keberatan Atas Permohonan Informasi RSUD Dr. Soetomo",
    icon: "/images/menusection/quicklink_pendol.png",
    link: "/keberatan-informasi",
  },
];
</script>
