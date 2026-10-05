<template>
  <div
    class="rounded-3xl bg-gradient-to-br from-emerald-700 to-emerald-500 p-6 shadow-lg text-emerald-900"
  >
    <h3 class="text-center font-bold text-lg mb-4 uppercase tracking-wide text-white">
      {{ title }}
    </h3>

    <ol class="space-y-2 text-sm leading-relaxed">
      <li v-for="(item, i) in items" :key="i" class="flex gap-3">
        <span
          class="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-semibold"
        >
          {{ i + 1 }}
        </span>

        <p class="text-white">{{ item }}</p>
      </li>
    </ol>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  desc: String,
  items: Array,
});
</script>
