<template>
  <section class="bg-gradient-to- from-emerald-50 via-white to-emerald-50 pt-20">
    <!-- BREADCRUMB -->
    <div class="max-w-9xl mx-auto px-6 mt-15">
      <Breadcrumb />
    </div>
    <!-- HERO -->
    <div class="max-w-9xl mx-auto px-6 py-5">
      <BaseHeroPage title="Sumber Daya Manusia" logo="/images/logo/logo_white.png" />
    </div>

    <!-- CONTENT -->
    <div class="max-w-9xl mx-auto px-6">
      <div class="bg-white rounded-2xl shadow-lg p-6">
        <div class="overflow-hidden">
          <ComponentChartSDM />
        </div>
        <div class="overflow-hidden mt-5">
          <ComponentChartSDMAsn />
        </div>
        <div class="overflow-hidden mt-5">
          <ComponentChartSDMJenisJabatan />
        </div>
        <div class="overflow-hidden mt-5">
          <ComponentChartSDMPendidikan />
        </div>
        <div class="overflow-hidden mt-5">
          <ComponentChartSDMJenisKelamin />
        </div>
        <p className="mt-5 p-5 text-center justify-centertext-sm text-gray-600">
          <b>Sumber</b> : Bagian Sumber Daya Manusia RSUD Dr. Soetomo (Data Per 30 Juli
          2025)
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from "vue";
import Breadcrumb from "~/components/layout/Breadcrumb.vue";
import ComponentChartSDM from "~/components/profil/tabs_sdm/ComponentChartSDM.vue";
import ComponentChartSDMAsn from "~/components/profil/tabs_sdm/ComponentChartSDMAsn.vue";
import ComponentChartSDMJenisJabatan from "~/components/profil/tabs_sdm/ComponentChartSDMJenisJabatan.vue";
import ComponentChartSDMPendidikan from "~/components/profil/tabs_sdm/ComponentChartSDMPendidikan.vue";
import ComponentChartSDMJenisKelamin from "~/components/profil/tabs_sdm/ComponentChartSDMJenisKelamin.vue";
import BaseHeroPage from "~/components/form/BaseHeroPage.vue";

useHead({
  title: "Sumber Daya Manusia",
});

definePageMeta({
  breadcrumb: [{ label: "Beranda", to: "/" }, { label: "Profil - Sumber Daya Manusia" }],
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
