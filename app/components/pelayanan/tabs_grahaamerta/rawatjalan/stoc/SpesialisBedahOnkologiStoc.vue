<template>
  <div class="space-y-4">
    <BaseAccordion title="Spesialis Bedah Onkologi" :defaultOpen="true">
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
  { nama: "Dr. Desak G. A. Suprabawati, dr., Sp.B (K) Onk." },
  { nama: "Heru Purwanto, dr., M.Epid., Sp.B (K) Onk." },
  { nama: "Iskandar Ali, dr., Sp.B (K) Onk." },
  { nama: "Vidi Vianney M. Tanggo, dr., SpB (K) Onk." },
  { nama: "Husnul Ghaib, dr., Sp.B (K) Onk, M.Kes." },
  { nama: "Asdi Wihandono, dr.Sp.B (K) Onk" },
].map((doctor) => ({
  ...doctor,
  jabatan: "Spesialis Bedah Onkologi",
  foto: "/images/logo/Logo_RSDS.png",
}));
</script>
