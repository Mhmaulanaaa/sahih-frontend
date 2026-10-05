<template>
  <section class="bg-gradient-to- from-emerald-50 via-white to-emerald-50 pt-20">
    <!-- BREADCRUMB -->
    <div class="max-w-9xl mx-auto px-6 mt-15">
      <Breadcrumb />
    </div>
    <!-- HERO -->
    <div class="max-w-9xl mx-auto px-6 py-5">
      <BaseHeroPage title="CSIRT" logo="/images/logo/logo_white.png" />
    </div>

    <!-- CONTENT -->
    <div class="max-w-9xl mx-auto px-6">
      <div class="bg-white rounded-2xl shadow-lg p-5">
        <div
          class="bg-white rounded-2xl shadow-lg p-8 text-center border border-emerald-100"
        >
          <!-- ICON -->
          <div
            class="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-emerald-50 text-emerald-600"
          >
            🚧
          </div>

          <!-- TITLE -->
          <h1 class="text-lg font-semibold text-emerald-700 mb-2">Halaman CSIRT</h1>

          <!-- SUBTITLE -->
          <p class="text-sm text-gray-600 mb-4">
            Sedang dalam proses pengembangan. Kami sedang menyiapkan sistem yang lebih
            aman dan optimal.
          </p>

          <!-- BADGE -->
          <span
            class="inline-block px-4 py-1 text-xs font-medium rounded-full bg-emerald-100 text-emerald-700"
          >
            Under Construction
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from "vue";
import Breadcrumb from "~/components/layout/Breadcrumb.vue";
import BaseHeroPage from "~/components/form/BaseHeroPage.vue";

definePageMeta({
  breadcrumb: [{ label: "Beranda", to: "/" }, { label: "CSIRT" }],
});
useHead({
  title: "CSIRT",
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
