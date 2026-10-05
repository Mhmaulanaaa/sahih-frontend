<template>
  <div class="space-y-4">
    <BaseAccordion title="Spesialis Bedah Saraf" :defaultOpen="true">
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
  { nama: "Dr. Joni Wahyudi, dr., Sp.BS (K)" },
  { nama: "Dr. Muhammad Arifin Perenrengi, dr., Sp.BS (K)" },
  { nama: "Dr. Eko Agus Subagio, dr., Sp.BS (K)" },
  { nama: "Dr. Tedy Apriawan, dr., Sp.BS (K), FICS" },
  { nama: "Dr. Wihasto Suryaningtyas, dr., Sp.BS (K)" },
  { nama: "Dr. Asra Al Fauzi, dr., Sp.BS (K), FICS, FACS, IFAANS" },
  { nama: "Dr. Irwan Barlian Immadoel Haq, dr., Sp.BS (K)" },
  { nama: "Heri Subianto, dr., Sp.BS (K)" },
  { nama: "Dr. Achmad Fahmi, dr., Sp.BS (K), FINPS" },
  { nama: "Dr. Muhammad Faris, dr., Sp.BS (K), FINSS" },
  { nama: "Dr. Nur Setiawan Suroto, dr., Sp.BS (K)" },
  { nama: "Dr. Agus Turchan, dr., Sp.BS (K)" },
  { nama: "Dr. Rahadian Indarto Susilo, dr., Sp.BS (K)" },
  { nama: "Pandu Wicaksono, dr., Sp.BS (K)" },
].map((doctor) => ({
  ...doctor,
  jabatan: "Spesialis Bedah Saraf",
  foto: "/images/logo/Logo_RSDS.png",
}));
</script>
