<template>
  <div class="space y-4">
    <BaseAccordion title="Spesialis Obstetri dan Ginekologi" :defaultOpen="true">
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
  { nama: "Dr. Brahmana Askandar, dr., Sp.OG (K)" },
  { nama: "Wita Saraswati, dr., Sp.OG (K)" },
  { nama: "Indra Yuliati, dr., Sp.OG (K)" },
  { nama: "Primandono Perbowo, dr., Sp.OG" },
  { nama: "Hari Nugroho, dr., Sp.OG" },
  { nama: "Birama Robby Indraprasta, dr., Sp.OG" },
  { nama: "Khoirunnisa Novitasari, dr., Sp.OG" },
  { nama: "Baksono Winardi, dr., Sp.OG (K)" },
  { nama: "Dr. Budi Prasetyo, dr., Sp.OG" },
  { nama: "Muhammad Yusuf, dr., Sp.OG" },
  { nama: "Hanifa Erlin D, dr., Sp.OG" },
  { nama: "Rizky Pranadyan, dr., Sp.OG" },
  { nama: "dr. Pandu Hanindito Habibie, M.Kes.Klin., Sp.OG" },
  { nama: "Riska Wahyuningtyas, dr., Sp.OG" },
  { nama: "Gatut Hardianto, dr., Sp.OG (K)" },
  { nama: "Eighty Mardiyan Kurniawati, dr., Sp.OG" },
  { nama: "Tri Hastono Setyo Hadi, dr., Sp.OG" },
  { nama: "M. Dimas Abdi Putra, dr., Sp.OG" },
  { nama: "Dr. Ernawati, dr., Sp.OG (K), Subsp. K.Fm" },
  { nama: "Dr. Agus Sulistyono, dr., Sp.OG (K), Subsp. K.Fm" },
  { nama: "Budi Wicaksono, dr., Sp.OG" },
  { nama: "Manggala Pasca Wardhana, dr., Sp.OG (K), Subsp. K.Fm" },
  { nama: "Nareswari Imanadha Cininta Marcianora, dr., Sp.OG" },
  { nama: "Rozi Aditya Aryananda, dr., Sp.OG" },
].map((doctor) => ({
  ...doctor,
  jabatan: "Spesialis Obstetri dan Ginekologi",
  foto: "/images/logo/Logo_RSDS.png",
}));
</script>
