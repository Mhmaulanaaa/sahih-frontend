<template>
  <div class="max-w-9xl mx-auto px-6 py-10">
    <TransitionGroup
      name="fade-slide"
      tag="div"
      class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
    >
      <ComponentCardData v-for="item in informasi" :key="item.title" :item="item" />
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import ComponentCardData from "./component/ComponentCardData.vue";

const informasi = [
  {
    title: "Profil",
    icon: "/images/menusection/quicklink_pendol.png",
    link: "/ppid/profil",
  },
  {
    title: "Dokumen",
    icon: "/images/menusection/quicklink_pendol.png",
    link: "/ppid/dokumen",
  },
  {
    title: "Layanan Informasi",
    icon: "/images/menusection/quicklink_pendol.png",
    link: "/ppid/layanan_informasi",
  },
  {
    title: "Daftar Informasi",
    icon: "/images/menusection/quicklink_pendol.png",
    link: "/ppid/daftar_informasi",
  },
];
</script>
