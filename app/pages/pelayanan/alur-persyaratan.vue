<template>
  <section class="bg-gradient-to- from-emerald-50 via-white to-emerald-50 pt-20">
    <!-- BREADCRUMB -->
    <div class="max-w-9xl mx-auto px-6 mt-15">
      <Breadcrumb />
    </div>
    <!-- HERO -->
    <div class="max-w-9xl mx-auto px-6 py-5">
      <BaseHeroPage title="Alur dan Persyaratan" logo="/images/logo/logo_white.png" />
    </div>

    <!-- CONTENT -->
    <div class="max-w-9xl mx-auto px-6">
      <div class="bg-white rounded-2xl shadow-lg p-5">
        <ComponentCardAlur image="/images/alur.png" />
      </div>
      <div class="bg-white rounded-2xl shadow-lg p-5 mt-5">
        <ComponentTablePersyaratan
          :data="[
            {
              jenis: 'Jaminan Kesehatan Nasional (JKN)',
              syarat: ['Kartu JKN', 'KTP/KK', 'Surat Rujukan (kecuali IGD)'],
            },
            {
              jenis: 'BPJS Ketenagakerjaan',
              syarat: ['Kartu BPJS', 'Surat Jaminan'],
            },
          ]"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from "vue";
import ComponentCardAlur from "~/components/pelayanan/component_alurpersyaratan/ComponentCardAlur.vue";
import ComponentTablePersyaratan from "~/components/pelayanan/component_alurpersyaratan/ComponentTablePersyaratan.vue";
import Breadcrumb from "~/components/layout/Breadcrumb.vue";
import BaseHeroPage from "~/components/form/BaseHeroPage.vue";

useHead({
  title: "Alur dan Persyaratan",
});

definePageMeta({
  breadcrumb: [
    { label: "Beranda", to: "/" },
    { label: "Pelayanan - Alur dan Persyaratan" },
  ],
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
