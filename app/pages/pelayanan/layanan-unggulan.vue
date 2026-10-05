<template>
  <section class="bg-gradient-to- from-emerald-50 via-white to-emerald-50 pt-20">
    <!-- BREADCRUMB -->
    <div class="max-w-9xl mx-auto px-6 mt-15">
      <Breadcrumb />
    </div>
    <!-- HERO -->
    <div class="max-w-9xl mx-auto px-6 py-5">
      <BaseHeroPage title="Layanan Unggulan" logo="/images/logo/logo_white.png" />
    </div>

    <!-- CONTENT -->
    <div class="max-w-9xl mx-auto px-6">
      <div class="bg-white rounded-2xl shadow-lg p-5">
        <LayananUnggulan />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from "vue";
import LayananUnggulan from "~/components/pelayanan/component_layananunggulan/LayananUnggulan.vue";
import Breadcrumb from "~/components/layout/Breadcrumb.vue";
import BaseHeroPage from "~/components/form/BaseHeroPage.vue";

useHead({
  title: "Layanan Unggulan",
});

definePageMeta({
  breadcrumb: [{ label: "Beranda", to: "/" }, { label: "Pelayanan - Layanan Unggulan" }],
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
