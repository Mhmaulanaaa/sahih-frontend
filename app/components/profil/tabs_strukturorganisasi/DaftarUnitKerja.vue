<template>
  <div class="p-4 sm:p-6 lg:p-8">
    <div class="bg-white rounded-2xl shadow border border-emerald-100 overflow-hidden">
      <!-- TABLE -->
      <ComponentTableUnitKerja1 />
    </div>
    <div
      class="bg-white rounded-2xl shadow border border-emerald-100 overflow-hidden mt-5"
    >
      <ComponentTableUnitKerja2 />
    </div>
    <div
      class="bg-white rounded-2xl shadow border border-emerald-100 overflow-hidden mt-5"
    >
      <ComponentTableUnitKerja3 />
    </div>
    <div
      class="bg-white rounded-2xl shadow border border-emerald-100 overflow-hidden mt-5"
    >
      <ComponentTableUnitKerja4 />
    </div>
  </div>
</template>

<script setup lang="ts">
import ComponentTableUnitKerja1 from "./component/ComponentTableUnitKerja1.vue";
import ComponentTableUnitKerja2 from "./component/ComponentTableUnitKerja2.vue";
import ComponentTableUnitKerja3 from "./component/ComponentTableUnitKerja3.vue";
import ComponentTableUnitKerja4 from "./component/ComponentTableUnitKerja4.vue";
</script>
