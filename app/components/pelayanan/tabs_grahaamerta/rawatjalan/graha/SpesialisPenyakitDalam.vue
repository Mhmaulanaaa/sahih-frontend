<template>
  <div class="space y-4">
    <BaseAccordion title="Spesialis Penyakit Dalam" :defaultOpen="true">
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
  { nama: "Awalia, dr., Sp.PD, K-R, FINASIM" },
  { nama: "Dr. Lita Diah Rahmawati, dr., Sp.PD, K-R" },
  { nama: "Dr. Yuliasih, dr., Sp.PD, K-R, FINASIM" },
  { nama: "Herry Purbayu, dr., Sp.PD, K-GEH" },
  { nama: "Titong Sugihartono, dr., Sp.PD, K-GEH" },
  { nama: "Ulfa Kholili, dr., Sp.PD" },
  { nama: "Budi Widodo, dr., Sp.PD, K-GEH, FINASIM" },
  { nama: "Amie Vidyani, dr., Sp.PD" },
  { nama: "Ummi Maimunah, dr., Sp.PD, K-GEH, FINASIM" },
  { nama: "Hermawan Susanto, dr., Sp.PD" },
  { nama: "Prof. Dr. dr. Siprianus Ugroseno Y. B., Sp.PD-KHOM" },
  { nama: "Merlyana Savitri, dr., Sp.PD" },
  { nama: "Putu Niken Ayu Amrita, dr., Sp.PD" },
  { nama: "Deasy Ardiany, dr., Sp.PD" },
  { nama: "Novira Widajanti, dr., Sp.PD, K-Ger, FINASIM" },
  { nama: "Wita Kartika Nurani, dr., Sp.PD" },
  { nama: "Prof. Dr. Usman Hadi, dr., Sp.PD, K-PTI, FINASIM" },
  { nama: "Sony Wibisono Mudjanarko, dr., Sp.PD-KEMD, FINASIM" },
  { nama: "Jongky Hendro Prayitno, dr., Sp.PD" },
  { nama: "Soebagijo Adi Soelistijo, dr., Sp.PD, K-EMD" },
  { nama: "Deasy Fetarayani, dr., Sp.PD (K), FINASIM" },
  { nama: "Prof. Dr. Agung Pranoto, dr., M.Sc., Sp.PD, K-EMD, FINASIM" },
  { nama: "Hermina Novida, dr., Sp.PD" },
  { nama: "dr. Dana Pramudya, Sp.PD" },
  { nama: "Aditiawardana, dr., Sp.PD-KGH" },
  { nama: "Nunuk Mardiana, dr., Sp.PD-KGH" },
  { nama: "Artaria Tjempakasari, dr., Sp.PD, K-GH" },
  { nama: "Erwin Astha Triyono, dr., Sp.PD, K-PTI" },
  { nama: "Muhammad Vitanata Arfijanto, dr., Sp.PD, K-PTI, FINASIM" },
  { nama: "dr. Tri Pudy Asmarawati, Sp.PD (K)" },
  { nama: "dr. Decsa Medika Hertanto, Sp.PD" },
  { nama: "Musofa Rusli, dr., Sp.PD" },
  { nama: "Annisa Zahra Mufida, dr., Sp.PD" },
].map((doctor) => ({
  ...doctor,
  jabatan: "Spesialis Penyakit Dalam",
  foto: "/images/logo/Logo_RSDS.png",
}));
</script>
