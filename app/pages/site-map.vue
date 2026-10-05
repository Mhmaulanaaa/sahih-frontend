<template>
  <section class="pt-20">
    <!-- GLOBAL CONTAINER -->
    <div class="max-w-9xl mx-auto px-6">
      <!-- BREADCRUMB -->
      <div class="mt-15">
        <Breadcrumb />
      </div>
      <!-- HERO -->
      <div class="py-5">
        <BaseHeroPage title="Site Maps" logo="/images/logo/logo_white.png" />
      </div>

      <div class="max-w-9xl bg-white shadow-md rounded-3xl mt-2 p-6">
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
          <h1 class="text-lg font-semibold text-emerald-700 mb-2">Halaman Site Map</h1>

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
import Breadcrumb from "~/components/layout/Breadcrumb.vue";
import BaseHeroPage from "~/components/form/BaseHeroPage.vue";
import BaseAccordion from "~/components/form/BaseAccordion.vue";

useHead({
  title: "Site Maps ",
});

definePageMeta({
  breadcrumb: [{ label: "Beranda", to: "/" }, { label: "Site Maps RSUD Dr. Soetomo" }],
});
</script>
