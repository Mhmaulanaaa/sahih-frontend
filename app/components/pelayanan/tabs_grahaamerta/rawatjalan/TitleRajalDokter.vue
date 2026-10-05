<template>
  <div class="space-y-4">
    <h3 class="text-lg font-semibold text-emerald-700">
      {{ title }}
    </h3>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <CardRajalDokter
        v-for="(doctor, index) in doctors"
        :key="index"
        :doctor="doctor"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import CardRajalDokter from './CardRajalDokter.vue';

defineProps<{
  title: string;
  doctors: any[];
}>();
</script>
