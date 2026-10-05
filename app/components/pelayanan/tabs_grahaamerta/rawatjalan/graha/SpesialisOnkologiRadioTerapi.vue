<template>
  <div class="space y-4">
    <BaseAccordion title="Spesialis Onkologi Radio Terapi" :defaultOpen="true">
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
  { nama: "Ulinta Purwati Pasaribu, dr., Sp.Rad.,Sp.Onk. Rad(K)" },
  { nama: "Dyah Erawati, dr., Sp.Rad.,Sp.Onk. Rad(K)" },
  { nama: "Yoke Surpri Marlina, dr. Sp.Onk. Rad(K)" },
  { nama: "Lulus Handayani, dr., Sp.Rad.,Sp.Onk. Rad(K)" },
  { nama: "Stepanus Massora, dr., Sp.KN-TM(K)" },
  { nama: "Tri Pera Sucianti, dr., Sp.KN" },
  { nama: "Hartono Yudi Sarastika, dr., Sp.Rad (K)" },
  { nama: "Ardhi Tripriyanggara, dr., Sp. Rad." },
].map((doctor) => ({
  ...doctor,
  jabatan: "Spesialis Onkologi Radio Terapi",
  foto: "/images/logo/Logo_RSDS.png",
}));
</script>
