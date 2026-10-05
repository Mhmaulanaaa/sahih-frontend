<template>
  <div>
    <!-- GRID + ANIMATION -->
    <TransitionGroup
      name="fade-slide"
      tag="div"
      class="grid gap-6 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-4"
    >
      <ComponentCardLayananUnggulan
        v-for="item in rujukan"
        :key="item.title"
        :item="item"
      />
    </TransitionGroup>

    <!-- GRID + ANIMATION -->
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
import ComponentCardLayananUnggulan from "./component/ComponentCardLayananUnggulan.vue";

const rujukan = [
  {
    title: "Immunotherapy Clinic",
    icon: "/images/layananunggulan/layungimuno.png",
    link: "/layanan/immunotherapy",
    isRujukan: false,
  },
  {
    title: "Soetomo Aesthetic Clinic",
    icon: "/images/layananunggulan/layungestetik.png",
    link: "/layanan/aesthetic",
    isRujukan: false,
  },
  {
    title: "Pelayanan Bank Jaringan",
    icon: "/images/layananunggulan/rnPbjrm.png",
    link: "/rujukan/bankjaringan",
    isRujukan: true,
  },
  {
    title: "Pelayanan Bayi Tabung",
    icon: "/images/layananunggulan/rnPbt.png",
    link: "/rujukan/bayitabung",
    isRujukan: true,
  },
  {
    title: "Pelayanan Endoskopi dan Minimal Invasif",
    icon: "/images/layananunggulan/rnPemi.png",
    link: "/rujukan/endoskopi",
    isRujukan: true,
  },
  {
    title: "Pelayanan Endokrin Terintegrasi",
    icon: "/images/layananunggulan/rnPet.png",
    link: "/rujukan/endokrin",
    isRujukan: true,
  },
  {
    title: "Pelayanan Ginjal Terpadu",
    icon: "/images/layananunggulan/rnPgit.png",
    link: "/rujukan/ginjalterpadu",
    isRujukan: true,
  },
  {
    title: "Pelayanan Geriatri Terpadu",
    icon: "/images/layananunggulan/rnPgt.png",
    link: "/rujukan/geriatriterpadu",
    isRujukan: true,
  },
  {
    title: "Pelayanan Penyakit Infeksi Emerging dan Re-Emerging",
    icon: "/images/layananunggulan/rnPinere.png",
    link: "/rujukan/penyakitinfeksi",
    isRujukan: true,
  },
  {
    title: "Pelayanan Kembar Siam",
    icon: "/images/layananunggulan/rnPks.png",
    link: "/rujukan/kembarsiam",
    isRujukan: true,
  },
  // 1
  {
    title: "Pelayanan Ortorik Prosterik",
    icon: "/images/layananunggulan/rnPop.png",
    link: "/rujukan/ortorikprosterik",
    isRujukan: true,
  },
  {
    title: "Pelayanan Paliatif dan Bebas Nyeri",
    icon: "/images/layananunggulan/rnPpbn.png",
    link: "/rujukan/bayitabung",
    isRujukan: true,
  },
  {
    title: "Pelayanan Sport Clinic",
    icon: "/images/layananunggulan/rnPsc.png",
    link: "/rujukan/endoskopi",
    isRujukan: true,
  },
  {
    title: "Pelayanan Sistem Saraf Terintegrasi",
    icon: "/images/layananunggulan/rnPsst.png",
    link: "/rujukan/endokrin",
    isRujukan: true,
  },
  {
    title: "Pelayanan Tumbuh Kembang Anak",
    icon: "/images/layananunggulan/rnPtka.png",
    link: "/rujukan/ginjalterpadu",
    isRujukan: true,
  },
  {
    title: "Program Pencegahan Resistensi Antimikroba",
    icon: "/images/layananunggulan/rnPpra.png",
    link: "/rujukan/geriatriterpadu",
    isRujukan: true,
  },
  {
    title: "Pusat Pelayanan Jantung Terpadu",
    icon: "/images/layananunggulan/rnPpjt.png",
    link: "/rujukan/penyakitinfeksi",
    isRujukan: true,
  },
  {
    title: "Pusat Pengembangan Layanan Kanker",
    icon: "/images/layananunggulan/rnPplk.png",
    link: "/rujukan/kembarsiam",
    isRujukan: true,
  },
];
</script>
