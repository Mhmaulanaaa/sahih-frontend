<template>
  <div class="space-y-4">
    <BaseAccordion title="Rehabilitasi Medik" :defaultOpen="true">
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
  { nama: "Lydia Arfianti, dr., Sp.KFR., M.S(K)" },
  { nama: "Martha Kurnia Kusumawardani, dr., Sp.KFR., N(K)" },
  { nama: "Adriati, dr., Sp.KFR., K.R(K)" },
  { nama: "Abdul Jabbar Al Hayyan, dr., Sp.KFR" },
  { nama: "Nuniek Nugraheni, dr., Sp.KFR., GER(K)" },
  { nama: "I. Lukitra Wardhani, dr., Sp.KFR., M.S(K)" },
  { nama: "Damayanti Tinduh, dr., Sp.KFR., M.S(K)" },
  { nama: "Dyah Intania Sari, dr., Sp.KFR., M.S(K)" },
  { nama: "Inggar Narasinta, dr., Sp.KFR., K.R(K)" },
  { nama: "Sintia Dewi Septiani, dr., Sp.KFR" },
  { nama: "Noor Idha Handajani, dr., Sp.KFR., Ped(K)" },
  { nama: "Nurul Kusuma Wardani, dr., Sp.KFR., Ped(K)" },
  { nama: "Dewi Masrifah Ayub, dr., Sp.KFR., Ped(K)" },
  { nama: "Subagyo, dr., Sp.KFR., N.M(K)" },
].map((doctor) => ({
  ...doctor,
  jabatan: "Rehabilitasi Medik",
  foto: "/images/logo/Logo_RSDS.png",
}));
</script>
