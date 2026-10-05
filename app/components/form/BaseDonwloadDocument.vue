<template>
  <div
    class="relative mt-10 bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg"
  >
    <!-- ICON -->
    <div
      class="absolute -top-5 sm:-top-6 left-6 sm:left-10 w-12 h-12 sm:w-14 sm:h-14 bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-xl sm:text-2xl shadow-lg"
    >
      <i :class="icon"></i>
    </div>

    <div class="pt-6 sm:pt-8">
      <!-- TITLE -->
      <h3 class="text-xl sm:text-2xl font-bold text-gray-900">
        {{ title }}
      </h3>

      <!-- DESCRIPTION -->
      <p class="mt-3 text-sm sm:text-base text-gray-600 max-w-2xl">
        {{ description }}
      </p>

      <!-- ACTION -->
      <div class="mt-5 sm:mt-6">
        <a
          :href="file"
          target="_blank"
          class="inline-flex items-center gap-3 px-5 sm:px-6 py-3 rounded-full bg-emerald-600 text-white text-sm sm:text-base font-semibold hover:bg-emerald-700 transition"
        >
          <span>{{ buttonText }}</span>
          <span class="text-lg">⤓</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
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
</script>
