<template>
  <div
    class="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
  >
    <!-- IMAGE -->
    <div
      class="group relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-100"
    >
      <img
        :src="image"
        :alt="title"
        class="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-105"
      />

      <div
        class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      ></div>
    </div>

    <!-- CONTENT -->
    <div class="p-6 space-y-4">
      <!-- TITLE -->
      <div class="flex items-start justify-between gap-4">
        <h3 class="text-lg font-semibold text-slate-800 leading-snug">
          {{ title }}
        </h3>

        <span class="text-lg font-bold text-emerald-600 whitespace-nowrap">
          {{ harga }}
        </span>
      </div>

      <div class="h-px bg-slate-200"></div>

      <!-- SPECS -->
      <ul class="space-y-3 text-sm text-slate-600">
        <li v-for="(spec, i) in spesifikasi" :key="i" class="flex items-start gap-3">
          <span
            class="mt-1 w-5 h-5 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600"
          >
            <i class="fa-solid fa-check text-xs"></i>
          </span>
          <span class="leading-relaxed">
            {{ spec }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  image: string;
  spesifikasi: string[];
  harga: string;
}>();
</script>
