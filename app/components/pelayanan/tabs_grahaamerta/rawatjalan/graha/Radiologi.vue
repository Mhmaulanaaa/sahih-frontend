<template>
  <div class="space-y-4">
    <BaseAccordion title="Radiologi" :defaultOpen="true">
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
import { ref } from "vue";

/* DATA TABLE */
const doctors = [
  { nama: "Alvita Triwulaning Sari, dr., Sp.Rad." },
  { nama: "dr. Fierly Hayati, Sp.Rad." },
  { nama: "Dian Nur Hayati, dr., Sp.Rad." },
  { nama: "Muhammad Hidayat Surya Atmaja, dr., Sp.Rad." },
  { nama: "Anita Widyoningroem, dr., Sp.Rad (K)" },
].map((doctor) => ({
  ...doctor,
  jabatan: "Radiologi",
  foto: "/images/logo/Logo_RSDS.png",
}));
</script>
