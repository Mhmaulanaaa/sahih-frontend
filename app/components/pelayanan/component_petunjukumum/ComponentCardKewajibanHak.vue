<template>
  <div
    class="rounded-3xl bg-gradient-to-br from-emerald-700 to-emerald-500 p-6 shadow-lg text-emerald-900 p-8 border border-emerald-100"
  >
    <div class="mb-6">
      <span
        class="inline-block text-xs font-semibold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full mb-2"
      >
        {{ subtitle }}
      </span>

      <h3 class="text-2xl font-bold text-white">
        {{ title }}
      </h3>
    </div>

    <ol class="space-y-4 text-slate-700 leading-relaxed">
      <li v-for="(item, i) in items" :key="i" class="flex gap-4">
        <span
          class="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-semibold text-sm"
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
  subtitle: String,
  items: Array,
});
</script>
