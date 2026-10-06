<template>
  <HeroSection />
  <section class="px-4 py-6 sm:px-6 lg:px-8">
    <div
      class="mx-auto max-w-9xl overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
    >
      <ClinicalSection />
      <ResearchSection />
      <SearchSection />
    </div>
  </section>
</template>

<script setup lang="ts">
import HeroSection from "~/components/section/HeroSection.vue";
import ClinicalSection from "~/components/section/ClinicalSection.vue";
import ResearchSection from "~/components/section/ResearchSection.vue";
import SearchSection from "~/components/section/SearchSection.vue";
useHead({
  title: "Sahih",
});
</script>
