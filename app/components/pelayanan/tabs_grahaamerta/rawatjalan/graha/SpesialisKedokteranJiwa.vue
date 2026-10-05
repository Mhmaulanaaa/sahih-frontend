<template>
  <div class="space y-4">
    <BaseAccordion title="Spesialis Kedokteran Jiwa" :defaultOpen="true">
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
  { nama: "Dr. Margarita Maria Maramis, dr., Sp.KJ (K), FISCM" },
  { nama: "Erikavitri Yulianti, dr., Sp.KJ (K)" },
  { nama: "Royke Tony Kalalo, dr., Sp.KJ (K), FISCM" },
  { nama: "Agustina Konginan, dr., Sp.KJ (K)" },
  { nama: "Nining Febriyana, dr., Sp.KJ (K)" },
  { nama: "Dr. Yunias Setiawati, dr., Sp.KJ (K), FISCM" },
  { nama: "Azimatul Karimah, dr., Sp.KJ (K), FISCM" },
  { nama: "Soetjipto, dr., Sp.KJ (K)" },
  { nama: "Izzatul Fithriyah, dr., Sp.KJ (K)" },
  { nama: "Sasanti Juniar Santosewoyo, dr., Sp.KJ (K)" },
].map((doctor) => ({
  ...doctor,
  jabatan: "Spesialis Kedokteran Jiwa",
  foto: "/images/logo/Logo_RSDS.png",
}));
</script>
