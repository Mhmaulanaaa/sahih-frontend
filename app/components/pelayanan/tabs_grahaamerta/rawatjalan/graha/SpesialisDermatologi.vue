<template>
  <div class="space y-4">
    <BaseAccordion
      title="Spesialis Dermatologi, Venereologi dan Estetika (Kulit & Kelamin)"
      :defaultOpen="true"
    >
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
  { nama: "Trisniartami Setyaningrum, dr., Sp.KK" },
  { nama: "Rahmadewi, dr., Sp.KK" },
  { nama: "Maylita Sari, dr., Sp.KK" },
  { nama: "dr. Putri Hendria Wardhani, Sp.KK" },
  { nama: "dr. Hasnikmah Mappamasing, Sp.DV., M.Kes" },
  { nama: "Dr. Septiana Widyantari, Sp.KK" },
  { nama: "Medhi Denisa Alinda, dr., Sp.KK" },
  { nama: "Damayanti, dr., Sp.DV" },
  { nama: "Astindari, dr., Sp.KK" },
  { nama: "Yuri Widia, dr., Sp.KK" },
  { nama: "Regitta Indira Agusni, dr., Sp.KK" },
  { nama: "Sawitri, dr., Sp.KK (K)" },
  { nama: "Dwi Murtiastutik, dr., Sp.KK (K)" },
  { nama: "Linda Astari, dr., Sp.DV" },
  { nama: "Prof. Dr. Muhammad Yulianto Listiawan, dr., Sp.KK (K), FINSDV., FAADV" },
  { nama: "Evy Ervianti, dr., Sp.KK (K)" },
  { nama: "Sylvia Anggraini, dr., Sp.KK" },
  { nama: "dr. Bagus Haryo Kusumaputra, Sp.KK" },
  {
    nama: "Prof. Dr. Cita Rosita Sigit Prakoeswa, dr., Sp.KK (K), FINSDV., FAADV., MARS",
  },
  { nama: "Irmadita Citrashanty, dr., Sp.KK (K)" },
  { nama: "Menul Ayu Umborowati, dr., Sp.KK" },
].map((doctor) => ({
  ...doctor,
  jabatan: "Spesialis Dermatologi, Venereologi dan Estetika (Kulit & Kelamin)",
  foto: "/images/logo/Logo_RSDS.png",
}));
</script>
