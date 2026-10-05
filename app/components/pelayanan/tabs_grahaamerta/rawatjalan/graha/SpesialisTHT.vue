<template>
  <div class="space y-4">
    <BaseAccordion title="Spesialis THT (Telinga Hidung Tenggorokan)" :defaultOpen="true">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CardRajalDokter
          v-for="(doctor, index) in doctors"
          :key="index"
          :doctor="doctor"
        />
      </div>
    </BaseAccordion>
  </div>
</template>
<script setup lang="ts">
import CardRajalDokter from "../CardRajalDokter.vue";
import BaseAccordion from "~/components/form/BaseAccordion.vue";

/* DATA TABLE */
const doctors = [
  { nama: "Artono, dr., Sp.THT-KL (K), FICS" },
  { nama: "Dr. Nyilo Purnami, dr., Sp.THT-KL (K)" },
  { nama: "Irwan Kristyono, dr., Sp.THT-KL" },
  { nama: "Achmad Chusnu Romdhoni, dr., Sp.THT-KL, FICS" },
  { nama: "Diar Mia Ardani, dr., Sp.THT-KL, FICS" },
  { nama: "Prof. Dr. Muhtarum Yusuf, dr., Sp.THT-B.K.L (K), Subsp. Onk (K), FICS" },
  { nama: "Rizka Fathoni Perdana, dr., Sp.THT-KL, FICS" },
  { nama: "dr. Sofia Tiarini, Sp.THT-KL" },
  { nama: "dr. Yogi Putra Adhi Pradana, Sp.THT-KL" },
  { nama: "dr. Elsa Rosalina, Sp.THT-KL" },
].map((doctor) => ({
  ...doctor,
  jabatan: "Spesialis THT (Telinga Hidung Tenggorokan)",
  foto: "/images/logo/Logo_RSDS.png",
}));
</script>
