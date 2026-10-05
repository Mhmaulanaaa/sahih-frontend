<template>
  <div class="max-w-9xl mx-auto px-6 py-10">
    <TransitionGroup
      name="fade-slide"
      tag="div"
      class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
    >
      <ComponentCardData v-for="item in daftardokters" :key="item.link" :item="item" />
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import ComponentCardData from "./component/ComponentCardData.vue";

const daftardokters = [
  {
    title: "KSM Andrologi",
    icon: "/images/menusection/quicklink_pendol.png",
    link: "/daftardokter/ksm-andrologi",
  },
  {
    title: "KSM Anestesi dan Reanimasi",
    icon: "/images/menusection/quicklink_pendol.png",
    link: "/daftardokter/ksm-anestesi",
  },
  {
    title: "KSM Bedah Platik Rekonstruksi dan Estetik",
    icon: "/images/menusection/quicklink_pendol.png",
    link: "/daftardokter/ksm-bedahplatik",
  },
  {
    title: "KSM Bedah Saraf",
    icon: "/images/menusection/quicklink_pendol.png",
    link: "/daftardokter/ksm-bedahsaraf",
  },
  //   1
  {
    title: "KSM Bedah Toraks Kardiak dan Vasikular",
    icon: "/images/menusection/quicklink_pendol.png",
    link: "/daftardokter/ksm-bedahtoraks",
  },
  {
    title: "KSM Bedah Umum",
    icon: "/images/menusection/quicklink_pendol.png",
    link: "/daftardokter/ksm-bedahumum",
  },
  {
    title: "KSM Dokter Umum",
    icon: "/images/menusection/quicklink_pendol.png",
    link: "/daftardokter/ksm-dokterumum",
  },
  {
    title: "KSM Ilmu Kesehatan Anak",
    icon: "/images/menusection/quicklink_pendol.png",
    link: "/daftardokter/ksm-ilmukesehatananak",
  },
  //   2
  {
    title: "KSM Ilmu Kesehatan Mata",
    icon: "/images/menusection/quicklink_pendol.png",
    link: "/daftardokter/ksm-ilmukesehatanmata",
  },
  {
    title: "KSM Kardiologi dan Kedokteran Vaskular",
    icon: "/images/menusection/quicklink_pendol.png",
    link: "/daftardokter/ksm-kardiologi",
  },
  {
    title: "KSM Kedokteran Fisik dan Rehabilitasi",
    icon: "/images/menusection/quicklink_pendol.png",
    link: "/daftardokter/ksm-kedokteranfisik",
  },
  {
    title: "KSM Kedokteran Forensik dan Medikolegal",
    icon: "/images/menusection/quicklink_pendol.png",
    link: "/daftardokter/ksm-kedokteranforensik",
  },
  //   3
  {
    title: "KSM Kedokteran Jiwa",
    icon: "/images/menusection/quicklink_pendol.png",
    link: "/daftardokter/ksm-kedokteranjiwa",
  },
  {
    title: "KSM Kesehatan Gigi dan Mulut",
    icon: "/images/menusection/quicklink_pendol.png",
    link: "/daftardokter/ksm-kesehatangigi",
  },
  {
    title: "KSM Kesehatan Kulit dan Kelamin",
    icon: "/images/menusection/quicklink_pendol.png",
    link: "/daftardokter/ksm-kesehatankulit",
  },
  {
    title: "KSM Mikrobiologi Klinik",
    icon: "/images/menusection/quicklink_pendol.png",
    link: "/daftardokter/ksm-mikrobiologi",
  },
  //   4
  {
    title: "KSM Neurologi",
    icon: "/images/menusection/quicklink_pendol.png",
    link: "/daftardokter/ksm-neurologi",
  },
  {
    title: "KSM Obstetri dan Ginekologi",
    icon: "/images/menusection/quicklink_pendol.png",
    link: "/daftardokter/ksm-obstetri",
  },
  {
    title: "KSM Orthopedi dan Traumanologi",
    icon: "/images/menusection/quicklink_pendol.png",
    link: "/daftardokter/ksm-orthopedi",
  },
  {
    title: "KSM Patologi Anatomi",
    icon: "/images/menusection/quicklink_pendol.png",
    link: "/daftardokter/ksm-patologianatomi",
  },
  //   5
  {
    title: "KSM Patologi Klinik",
    icon: "/images/menusection/quicklink_pendol.png",
    link: "/daftardokter/ksm-patologiklinik",
  },
  {
    title: "KSM Penyakit Dalam",
    icon: "/images/menusection/quicklink_pendol.png",
    link: "/daftardokter/ksm-penyakitdalam",
  },
  {
    title: "KSM Pulmonologi dan Kedokteran Respirasi",
    icon: "/images/menusection/quicklink_pendol.png",
    link: "/daftardokter/ksm-pulmonologi",
  },
  {
    title: "KSM Radiologi",
    icon: "/images/menusection/quicklink_pendol.png",
    link: "/daftardokter/ksm-radiologi",
  },
  //   6
  {
    title: "KSM Radioterapi",
    icon: "/images/menusection/quicklink_pendol.png",
    link: "/daftardokter/ksm-radioterapi",
  },
  {
    title: "KSM THT-KL",
    icon: "/images/menusection/quicklink_pendol.png",
    link: "/daftardokter/ksm-tht-kl",
  },
  {
    title: "KSM Urologi",
    icon: "/images/menusection/quicklink_pendol.png",
    link: "/daftardokter/ksm-urologi",
  },
  {
    title: "KSM Paliatif dan Bebas Nyeri",
    icon: "/images/menusection/quicklink_pendol.png",
    link: "/daftardokter/ksm-paliatif",
  },
  //   7
];
</script>
