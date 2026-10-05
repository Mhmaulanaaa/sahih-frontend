<template>
  <div class="space-y-4">
    <BaseAccordion title="Spesialis Urologi" :defaultOpen="true">
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
  { nama: "Dr. Wahjoe Djatisoesanto, dr., Sp.U-K" },
  { nama: "Dr. Tarmono, dr., Sp.U-K" },
  { nama: "Johan Renaldo, dr., Sp.U-K" },
  { nama: "dr. Tetuka Bagus Laksita, Sp.U, M.Ked.Klin" },
  { nama: "dr. Rheza Maulana Putra, Sp.U" },
].map((doctor) => ({
  ...doctor,
  jabatan: "Spesialis Urologi",
  foto: "/images/logo/Logo_RSDS.png",
}));
</script>
