<template>
  <div class="max-w-9xl mx-auto px-6 py-10">
    <TransitionGroup
      name="fade-slide"
      tag="div"
      class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
    >
      <ComponentCardLaporan v-for="item in laporans" :key="item.link" :item="item" />
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import ComponentCardLaporan from "./component/ComponentCardLaporan.vue";

const laporans = [
  {
    title: "Laporan Hibah Covid 19",
    icon: "/images/menusection/quicklink_sips.png",
    link: "/laporan/covid19",
  },
  {
    title: "Laporan Hospital Wide Indicator",
    icon: "/images/menusection/quicklink_sips.png",
    link: "/laporan/hospital_wide_indicator",
  },
  {
    title: "Laporan Indeks Kepuasan Masyarakat",
    icon: "/images/menusection/quicklink_sips.png",
    link: "/laporan/indeks_kepuasan_masyarakat",
  },
  {
    title: "Laporan Keuangan",
    icon: "/images/menusection/quicklink_sips.png",
    link: "/laporan/keuangan",
  },
  {
    title: "LHKASN",
    icon: "/images/menusection/quicklink_sips.png",
    link: "/laporan/lhkasn",
  },
  {
    title: "Laporan Penerima Kegiatan Sponsorship",
    icon: "/images/menusection/quicklink_sips.png",
    link: "/laporan/penerima_kegiatan_sponsorship",
  },
  {
    title: "Laporan SAKIP",
    icon: "/images/menusection/quicklink_sips.png",
    link: "/laporan/sakip",
  },
  {
    title: "Laporan Pengadaan Barang dan Jasa",
    icon: "/images/menusection/quicklink_sips.png",
    link: "/laporan/pengaduanan_barang_dan_jasa",
  },
  {
    title: "Laporan SATA",
    icon: "/images/menusection/quicklink_sips.png",
    link: "/laporan/sata",
  },
];
</script>
