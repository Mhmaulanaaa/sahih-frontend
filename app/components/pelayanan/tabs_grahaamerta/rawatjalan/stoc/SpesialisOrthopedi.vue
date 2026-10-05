<template>
  <div class="space-y-4">
    <BaseAccordion title="Spesialis Orthopedi" :defaultOpen="true">
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
  { nama: "Prof. Dr. Ferdiansyah, dr., Sp.OT (K)" },
  { nama: "Kukuh Dwiputra H, dr., Sp.OT (K)" },
  { nama: "Teddy Heri Wardhana, dr., Sp.OT (K)" },
  { nama: "Dr. Lukas Widhiyanto, dr., Sp.OT (K)" },
  { nama: "Dr. Mouli Edward, dr., Sp.OT (K)" },
  { nama: "Jeffry Andrianus, dr., Sp.OT (K)" },
  { nama: "M. Hardian Basuki, dr., Sp.OT (K)" },
  { nama: "Dr. Mohammad Zaim Chilmi, dr., Sp.OT (K)" },
  { nama: "Pramono Ari Wibowo, dr., Sp.OT (K)" },
  { nama: "Primadenny Ariesa Airlangga, dr., M.Si., Sp.OT (K)" },
  { nama: "Jifaldi Afrian Maharaja D. S., dr., Sp.OT (K)" },
  { nama: "Andre Triadi Desnantyo, dr., Sp.OT (K)" },
  { nama: "Dr. Heri Suroto, dr., Sp.OT (K)" },
  { nama: "Tri Wahyu Martanto, dr., Sp.OT (K)" },
  { nama: "Aries Rakhmat Hidayat, dr., Sp.OT (K)" },
  { nama: "Dr. Komang Agung Irianto Suryaningrat, dr., Sp.OT (K)" },
  { nama: "Hizbillah Yazid, dr., Sp.OT (K)" },
  { nama: "Prof. Dr. Dwikora Novembri Utomo, dr., Sp.OT (K)" },
].map((doctor) => ({
  ...doctor,
  jabatan: "Spesialis Orthopedi",
  foto: "/images/logo/Logo_RSDS.png",
}));

</script>
