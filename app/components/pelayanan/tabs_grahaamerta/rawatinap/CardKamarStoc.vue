<template>
  <div
    class="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
  >
    <!-- IMAGE -->

    <!-- CONTENT -->
    <div class="p-6 space-y-4">
      <!-- TITLE -->
      <h3 class="text-lg font-semibold text-slate-800">
        {{ title }}
      </h3>

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
  spesifikasi: string[];
}>();
</script>
