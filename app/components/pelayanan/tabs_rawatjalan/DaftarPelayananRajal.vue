<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
    <NuxtLink v-for="item in polis" :key="item.title" :to="item.link" class="block group">
      <ComponentCardsLayananRajal
        :title="item.title"
        :icon="item.icon"
        class="transition duration-300 group-hover:scale-105"
      />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import ComponentCardsLayananRajal from "./component/ComponentCardsLayananRajal.vue";

const polis = [
  {
    title: "Poli Anak",
    icon: "/images/logo/Logo_RSDS.png",
    link: "/pelayanan/rawatjalan/poli-anak",
  },
  {
    title: "Poli Andrologi",
    icon: "/images/logo/Logo_RSDS.png",
    link: "/pelayanan/rawatjalan/poli-andrologi",
  },
  {
    title: "Poli Anestesiologi dan Reanimasi",
    icon: "/images/logo/Logo_RSDS.png",
    link: "/pelayanan/rawatjalan/poli-anestesiologi",
  },
  {
    title: "Poli Bedah Plastik",
    icon: "/images/logo/Logo_RSDS.png",
    link: "/pelayanan/rawatjalan/poli-bedah-plastik",
  },
  {
    title: "Poli Bedah Saraf",
    icon: "/images/logo/Logo_RSDS.png",
    link: "/pelayanan/rawatjalan/poli-bedah-saraf",
  },
  {
    title: "Poli Bedah TKV",
    icon: "/images/logo/Logo_RSDS.png",
    link: "/pelayanan/rawatjalan/poli-bedah-tkv",
  },
  {
    title: "Poli Bedah Umum",
    icon: "/images/logo/Logo_RSDS.png",
    link: "/pelayanan/rawatjalan/poli-bedah-umum",
  },
  {
    title: "Poli Bedah Urologi",
    icon: "/images/logo/Logo_RSDS.png",
    link: "/pelayanan/rawatjalan/poli-bedah-urologi",
  },
  {
    title: "Poli Eksekutif",
    icon: "/images/logo/Logo_RSDS.png",
    link: "/pelayanan/rawatjalan/poli-eksekutif",
  },
  {
    title: "Poli Geriatri",
    icon: "/images/logo/Logo_RSDS.png",
    link: "/pelayanan/rawatjalan/poli-geriatri",
  },
  {
    title: "Poli Gigi dan Mulut",
    icon: "/images/logo/Logo_RSDS.png",
    link: "/pelayanan/rawatjalan/poli-gigi-dan-mulut",
  },
  {
    title: "Poli Gizi",
    icon: "/images/logo/Logo_RSDS.png",
    link: "/pelayanan/rawatjalan/poli-gizi",
  },
  {
    title: "Poli Jantung",
    icon: "/images/logo/Logo_RSDS.png",
    link: "/pelayanan/rawatjalan/poli-jantung",
  },
  {
    title: "Poli Jiwa",
    icon: "/images/logo/Logo_RSDS.png",
    link: "/pelayanan/rawatjalan/poli-jiwa",
  },
  {
    title: "Poli Kulit Dan Kelamin",
    icon: "/images/logo/Logo_RSDS.png",
    link: "/pelayanan/rawatjalan/poli-kulit-dan-kelamin",
  },
  {
    title: "Poli Mata",
    icon: "/images/logo/Logo_RSDS.png",
    link: "/pelayanan/rawatjalan/poli-mata",
  },
  {
    title: "Poli Obat Tradisional Indonesia",
    icon: "/images/logo/Logo_RSDS.png",
    link: "/pelayanan/rawatjalan/poli-obat-tradisional-indonesia",
  },
  {
    title: "Poli Obstetri Dan Ginekologi",
    icon: "/images/logo/Logo_RSDS.png",
    link: "/pelayanan/rawatjalan/poli-obstetri-dan-ginekologi",
  },
  {
    title: "Poli Onkologi",
    icon: "/images/logo/Logo_RSDS.png",
    link: "/pelayanan/rawatjalan/poli-onkologi",
  },
  {
    title: "Poli Orthopedi",
    icon: "/images/logo/Logo_RSDS.png",
    link: "/pelayanan/rawatjalan/poli-orthopedi",
  },
  {
    title: "Poli Paru",
    icon: "/images/logo/Logo_RSDS.png",
    link: "/pelayanan/rawatjalan/poli-paru",
  },
  {
    title: "Poli Penyakit Dalam",
    icon: "/images/logo/Logo_RSDS.png",
    link: "/pelayanan/rawatjalan/poli-penyakit-dalam",
  },
  {
    title: "Poli Saraf",
    icon: "/images/logo/Logo_RSDS.png",
    link: "/pelayanan/rawatjalan/poli-saraf",
  },
  {
    title: "Poli THT KL",
    icon: "/images/logo/Logo_RSDS.png",
    link: "/pelayanan/rawatjalan/poli-tht-kl",
  },
];
</script>
