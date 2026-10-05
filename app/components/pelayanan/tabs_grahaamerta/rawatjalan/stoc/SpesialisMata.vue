<template>
  <div class="space-y-4">
    <BaseAccordion title="Spesialis Mata" :defaultOpen="true">
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
  { nama: "Rozalina Loebis, dr., Sp.M (K)" },
  { nama: "Luki Indriaswati, dr., Sp.M (K)" },
  { nama: "Dr. Lukisari Agustini, dr., Sp.M (K)" },
  { nama: "Dr. Evelyn Komaratih, dr., Sp.M (K)" },
  { nama: "Dicky Hermawan, dr., Sp.M (K)" },
  { nama: "Delfitri Lutfi, dr., Sp.M (K)" },
  { nama: "Christina Aritonang, dr., Sp.M (K)" },
  { nama: "Sutjipto, dr., Sp.M (K)" },
  { nama: "Ady Dwi Prakosa, dr., Sp.M" },
  { nama: "Dr. Yulia Primitasari, dr., Sp.M (K)" },
  { nama: "Reni Prasetyani, dr., Sp.M, M.Kes." },
  { nama: "Ima Yustiarini, dr., Sp.M" },
  { nama: "Sauli Ari Widjaja, dr., Sp.M (K), Ph.D" },
  { nama: "Susy Fatmariyanti, dr., Sp.M (K)" },
  { nama: "Dr. Ismi Zuhria, dr., Sp.M (K)" },
  { nama: "Ratna Doemilah, dr., Sp.M (K)" },
  { nama: "Ria Sandy Deneska, dr., Sp.M (K)" },
].map((doctor) => ({
  ...doctor,
  jabatan: "Mata",
  foto: "/images/logo/Logo_RSDS.png",
}));
</script>
