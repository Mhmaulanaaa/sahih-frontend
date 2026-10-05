<template>
  <div class="space-y-4">
    <BaseAccordion title="Klinik Imunoterapi Anak" :defaultOpen="true">
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

import { ref } from "vue";

const open = ref(true);

/* DATA TABLE */
const doctors = [
  { nama: "Prof. Dr. Anang Endaryanto, dr., Sp.A (K)" },
  { nama: "Dr. Zahrah Hikmah, dr., Sp.A (K)" },
].map((doctor) => ({
  ...doctor,
  jabatan: "Klinik Imunoterapi Anak",
  foto: "/images/logo/Logo_RSDS.png",
}));
</script>
