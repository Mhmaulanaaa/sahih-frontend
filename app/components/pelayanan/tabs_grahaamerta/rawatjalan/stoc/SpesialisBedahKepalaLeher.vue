<template>
  <div class="space-y-4">
    <BaseAccordion title="Spesialis Bedah Kepala Leher" :defaultOpen="true">
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
  { nama: "Iwan Sidharta, dr, SpB-KL" },
  { nama: "Marjono Dwi Wibowo, dr., Sp.B (K) KL" },
  { nama: "Dr. Sahudi, dr., Sp.B (K) KL" },
  { nama: "Dwi Hari Susilo, dr., Sp.B (K) Onk-KL" },
  { nama: "Nina Irawati, dr., Sp.B (K) Onk-KL" },
].map((doctor) => ({
  ...doctor,
  jabatan: "Spesialis Bedah Kepala Leher",
  foto: "/images/logo/Logo_RSDS.png",
}));
</script>
