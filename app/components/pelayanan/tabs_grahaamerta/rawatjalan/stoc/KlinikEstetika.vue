<template>
  <div class="space-y-4">
    <BaseAccordion title="Klinik Estetika (Soetomo Aesthetic Clinic)" :defaultOpen="true">
      <div v-if="open" class="bg-white rounded-xl shadow-sm p-6 space-y-10">
        <div v-for="(section, index) in tables" :key="index">
          <h3 class="text-md text-slate-800 mb-4">{{ section.title }}</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CardRajalDokter
              v-for="(doctor, docIndex) in section.doctors"
              :key="`${index}-${docIndex}`"
              :doctor="doctor"
            />
          </div>
        </div>
      </div>
    </BaseAccordion>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CardRajalDokter from "../CardRajalDokter.vue";
import BaseAccordion from "~/components/form/BaseAccordion.vue";

const open = ref(true);

const tables = [
  {
    title: "Spesialis Bedah Plastik",
    doctors: [
      { nama: "Prof. Dr. David S. Perdanakusuma, dr., Sp.B.P.R.E, Subsp. E.L (K)" },
      { nama: "Dr. Lobredia Zarasade, dr., Sp.B.P.R.E, Subsp. K.M. (K)" },
      { nama: "Prof. Dr. Iswinarno Doso Saputro, dr., Sp.B.P.R.E, Subsp. L.B.L (K)" },
      { nama: "Agus Santoso Budi, dr., Sp.B.P.R.E, Subsp. E.L (K)" },
      { nama: "Magda R. Hutagalung, dr., Sp.B.P.R.E, Subsp. K.M. (K)" },
      { nama: "Prof. M. Sjaifuddin Noer, dr., Sp.B., Sp.B.P.R.E, Subsp. G.E. (K)" },
      { nama: "Dr. Lynda Hariani, dr., Sp.B.P.R.E, Subsp. L.B.L (K)" },
      { nama: "Ira Handriani, dr., Sp.B.P.R.E, Subsp. L.B.L (K)" },
      { nama: "Yuanita Safitri Dianti, dr., Sp.B.P.R.E, Subsp. T. (K)" },
      { nama: "Hastika Saraswati, dr., Sp.B.P.R.E, Subsp. L.B.L (K)" },
      { nama: "Alki Andana, dr., Sp.B.P.R.E, Subsp. K.M. (K)" },
      { nama: "Taufiqur Rakhim Aditra, dr., M.Ked.Klin., Sp.B.P.R.E" },
    ].map((d) => ({
      ...d,
      jabatan: "Spesialis Bedah Plastik",
      foto: "/images/logo/Logo_RSDS.png",
    })),
  },

  {
    title: "Spesialis Dermatologi, Venereologi dan Estetika",
    doctors: [{ nama: "Prof. Dr. dr. M. Yulianto Listiawan, SpDVE., Subsp.OBK" }].map(
      (d) => ({
        ...d,
        jabatan: "Spesialis Dermatologi & Estetika",
        foto: "/images/logo/Logo_RSDS.png",
      })
    ),
  },
];

function toggle() {
  open.value = !open.value;
}
</script>
