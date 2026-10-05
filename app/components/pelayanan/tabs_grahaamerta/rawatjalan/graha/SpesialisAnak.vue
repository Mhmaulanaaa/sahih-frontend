<template>
  <div class="space y-4">
    <BaseAccordion title="Spesialis Anak" :defaultOpen="true">
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
  { nama: "Dr. dr. Tinuk Agung Meilany, Sp.A(K)" },
  { nama: "Leny Kartina, dr., Sp.A(K)" },
  { nama: "Dr. Muhammad Faizi, dr., Sp.A(K)" },
  { nama: "Dr. Nur Rochmah, dr., Sp.A(K)" },
  { nama: "Dr. Azwin Mengindra Putera, dr., Sp.A(K)" },
  { nama: "Dr. Bagus Setyoboedi, dr., Sp.A(K)" },
  { nama: "Dr. H. Mahrus A. Rahman, dr., Sp.A(K)" },
  { nama: "Dr. I Ketut Alit Utamayasa, dr., Sp.A(K)" },
  { nama: "Taufiq Hidayat, dr., Sp.A(K)" },
  { nama: "Dr. Prastiya Indra Gunawan, dr., Sp.A(K)" },
  { nama: "Dr. Ninik Asmaningsih Soemyarso, dr., Sp.A(K), MM Paed." },
  { nama: "Kartika Darma Handayani, dr., Sp.A(K)" },
  { nama: "Dr. Martono Tri Utomo, dr., Sp.A(K)" },
  { nama: "Dr. Alpha Fardah Athiyyah, dr., Sp.A(K)" },
  { nama: "Maria Christina Shanty Larasati, dr., Sp.A(K)" },
  { nama: "Andy Darma, dr., Sp.A(K)" },
  { nama: "Andi Cahyadi, dr., Sp.A(K)" },
  { nama: "Dwiyanti Puspitasari, dr., DTMH., MCTM., Sp.A(K)" },
  { nama: "Prof. Dr. Ismoedijanto, dr., DTM&H., Sp.A(K)" },
  { nama: "Dina Angelika, dr., Sp.A(K)" },
  { nama: "Dr. Risa Etika, dr., Sp.A(K)" },
  { nama: "Wurry Ayuningtyas, dr., Sp.A" },
].map((doctor) => ({
  ...doctor,
  jabatan: "Spesialis Anak",
  foto: "/images/logo/Logo_RSDS.png",
}));
</script>
