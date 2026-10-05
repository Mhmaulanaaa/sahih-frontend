<template>
  <div class="space-y-4">
    <BaseAccordion title="Spesialis Bedah Anak" :defaultOpen="true">
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
  { nama: "Fendy Matulatan, dr., Sp.B., Subsp.Ped (K)" },
  { nama: "Ariandi Setiawan, dr., Sp.B, Sp.BA. Subsp.DA (K)" },
  { nama: "Fransiska Kusumowidagdo, dr., Sp.BA, Subsp.UA (K)" },
].map((doctor) => ({
  ...doctor,
  jabatan: "Spesialis Bedah Anak",
  foto: "/images/logo/Logo_RSDS.png",
}));
</script>
