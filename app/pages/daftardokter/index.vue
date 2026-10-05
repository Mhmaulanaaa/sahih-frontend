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
        <BaseHeroPage title="Daftar Dokter" logo="/images/logo/logo_white.png" />
      </div>
      <!-- Menu -->
      <div class="bg-white rounded-2xl shadow-lg p-5">
        <DaftarDokter />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Breadcrumb from "~/components/layout/Breadcrumb.vue";
import DaftarDokter from "~/components/daftardoker/DaftarDokter.vue";
import BaseHeroPage from "~/components/form/BaseHeroPage.vue";

useHead({
  title: "Daftar Dokter",
});

definePageMeta({
  breadcrumb: [{ label: "Beranda", to: "/" }, { label: "Daftar Dokter" }],
});
</script>
