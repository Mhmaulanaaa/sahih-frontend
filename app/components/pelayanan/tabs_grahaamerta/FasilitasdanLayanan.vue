<script setup lang="ts">
import FasilitasUmum from "./fasilitasdanlayanan/FasilitasUmum.vue";
import FasilitiasMedik from "./fasilitasdanlayanan/FasilitiasMedik.vue";
</script>

<template>
  <div class="relative lg:p-8">
    <!-- GRID 2 COLUMN -->
    <div class="grid grid-cols-1 lg:grid-cols-1 gap-10">
      <!-- COLUMN 1 -->
      <div>
        <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">FASILITAS MEDIK</h2>

        <FasilitiasMedik />
      </div>

      <!-- COLUMN 2 -->
      <div>
        <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">FASILITAS UMUM</h2>
        <FasilitasUmum />
      </div>
    </div>
  </div>
</template>
