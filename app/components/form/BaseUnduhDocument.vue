<template>
  <div
    class="mt-3 rounded-2xl border border-emerald-100/80 bg-gradient-to-br from-emerald-50/70 via-white to-green-50/30 p-3 sm:p-4"
  >
    <!-- HEADER -->
    <div class="flex items-center gap-2.5">
      <!-- PDF ICON -->
      <div
        class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-500"
      >
        <i class="bi bi-file-earmark-pdf-fill text-base"></i>
      </div>

      <!-- TITLE -->
      <h3 class="text-base sm:text-lg font-semibold text-gray-900">
        {{ title }}
      </h3>
    </div>

    <!-- DESCRIPTION -->
    <p class="mt-1.5 max-w-xl text-xs sm:text-sm leading-relaxed text-gray-500">
      {{ description }}
    </p>

    <!-- ACTION -->
    <div class="mt-2.5">
      <a
        :href="documentFile"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-emerald-700 shadow-sm transition-all duration-200 hover:border-emerald-300 hover:bg-white hover:shadow-md"
      >
        <span>{{ buttonText }}</span>
        <i class="bi bi-download text-[11px]"></i>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  file: {
    type: String,
    required: true,
  },

  icon: {
    type: String,
    default: "fas fa-file-pdf",
  },

  buttonText: {
    type: String,
    default: "Unduh Dokumen",
  },
});

const { asset } = useAsset();

const documentFile = computed(() => {
  return asset(props.file);
});
</script>
