<template>
  <div class="space y-4">
    <BaseAccordion title="Spesialis Kedokteran Gigi dan Mulut" :defaultOpen="true">
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
  { nama: "drg. Rizka Firdaus Rosidin, Sp.Ort." },
  { nama: "Nining Dwi Suti Ismawati, drg., Sp.BMMF, Subsp. Ped.OMF (K)" },
  { nama: "Ronny Baehaqi, drg., Sp.BMMF, Subsp. TMF-TMJ (K)" },
  { nama: "Florentina Hapsari, drg., Sp.Perio" },
  { nama: "Retno Wulandari, drg., Sp.Perio" },
  { nama: "Christinari Ratih, drg., Sp.KGA" },
  { nama: "Liandari Dyah Kartikasari, drg., Sp.KGA" },
  { nama: "Herry Wahyudi Aqfari, drg., Sp.Ort" },
  { nama: "Wayan Wiratni, drg., Sp.Ort" },
  { nama: "M. Ardian Syah, drg., Sp.Ort" },
  { nama: "Febrina, drg., Sp.KG" },
  { nama: "Harsiwi Purwandani, drg., Sp.KG" },
  { nama: "Dwi Retnaningtyas, drg., Sp.Pros" },
  { nama: "Sulistiyowati B. U., drg., Sp.PM (KI)" },
  { nama: "Dr. Remita Adya Prasetyo, drg., Sp.PM (KNI)" },
  { nama: "Andreas Pratama Nugraha, drg., Sp.BMM., M.Ked.Klin" },
  { nama: "drg. Erna Fakhriyana, Sp.Pros" },
].map((doctor) => ({
  ...doctor,
  jabatan: "Spesialis Kedokteran Gigi dan Mulut",
  foto: "/images/logo/Logo_RSDS.png",
}));
</script>
