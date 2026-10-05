<template>
  <div
    class="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-lg transition hover:-translate-y-1"
  >
    <img :src="img" class="w-44 mb-4 rounded" />
    <p class="text-sm font-semibold text-emerald-700">
      {{ text }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  img: string;
  text: string;
}>();
</script>
