<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
    <NuxtLink
      v-for="item in ranaps"
      :key="item.title"
      :to="item.link"
      class="block group"
    >
      <ComponentCardLayananRanap
        :title="item.title"
        :icon="item.icon"
        class="transition duration-300 group-hover:scale-105"
      />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { Link } from "#components";
import ComponentCardLayananRanap from "./component/ComponentCardLayananRanap.vue";

const ranaps = [
  {
    title: "Instalasi Graha Amerta",
    icon: "/images/logo/Logo_RSDS.png",
    link: "/pelayanan/rawatinap/instalasi-graha-amerta",
  },
  {
    title: "Instalasi Pusat Pelayanan Jantung Terpadu",
    icon: "/images/logo/Logo_RSDS.png",
    link: "/pelayanan/rawatinap/instalasi-pusat-pelayanan-jantung-terpadu",
  },
  {
    title: "Instalasi Pelayanan Pendidikan Riset Penyakit Menular",
    icon: "/images/logo/Logo_RSDS.png",
    link: "/pelayanan/rawatinap/instalasi-pelayanan-pendidikan-riset-penyakit-menular",
  },
  {
    title: "Instalasi Rawat Inap Anak",
    icon: "/images/logo/Logo_RSDS.png",
    link: "/pelayanan/rawatinap/instalasi-rawat-inap-anak",
  },
  {
    title: "Instalasi Rawat Inap Bedah",
    icon: "/images/logo/Logo_RSDS.png",
    link: "/pelayanan/rawatinap/instalasi-rawat-inap-bedah",
  },
  {
    title: "Instalasi Rawat Inap Jiwa",
    icon: "/images/logo/Logo_RSDS.png",
    link: "/pelayanan/rawatinap/instalasi-rawat-inap-jiwa",
  },
  {
    title: "Instalasi Rawat Inap Medik",
    icon: "/images/logo/Logo_RSDS.png",
    link: "/pelayanan/rawatinap/instalasi-rawat-inap-medik",
  },
  {
    title: "Instalasi Rawat Inap Obstetri dan Ginekologi",
    icon: "/images/logo/Logo_RSDS.png",
    link: "/pelayanan/rawatinap/instalasi-rawat-inap-obstetri-dan-ginekologi",
  },
  {
    title: "Instalasi Rawat Inap Intensif dan Reanimasi",
    icon: "/images/logo/Logo_RSDS.png",
    link: "/pelayanan/rawatinap/instalasi-rawat-inap-intensif-dan-reanimasi",
  },
];
</script>
