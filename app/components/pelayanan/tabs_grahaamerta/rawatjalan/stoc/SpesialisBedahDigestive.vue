<template>
  <div class="space-y-4">
    <BaseAccordion title="Spesialis Bedah Digestive" :defaultOpen="true">
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
  { nama: "Tomy Lesmana, dr., Sp.B-KBD" },
  { nama: "Iwan Kristian, dr. Sp.B, Subsp.BD (K)" },
  { nama: "Edwin Danardono, dr. Sp.B, Subsp.BD (K)" },
  { nama: "Denny Septarendra, dr. Sp.B, Subsp.BD (K)" },
  { nama: "Jemmy Andijaya Sutanto, dr., Sp.B" },
].map((doctor) => ({
  ...doctor,
  jabatan: "Spesialis Bedah Digestive",
  foto: "/images/logo/Logo_RSDS.png",
}));
</script>
