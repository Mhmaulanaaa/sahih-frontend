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
        <BaseHeroPage
          title="Instalasi Rawat Inap Intensif dan Reanimasi"
          logo="/images/logo/logo_white.png"
        />
      </div>
      <!-- Menu -->
      <div class="bg-white rounded-2xl shadow-lg p-5">
        <div class="w-full rounded-3xl p-5 space-y-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <ComponentCardMenu title="Instalasi Reanimasi 1" />
            <ComponentCardMenu title="Instalasi Reanimasi 2" />
            <ComponentCardMenu title="Instalasi Reanimasi 3" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Breadcrumb from "~/components/layout/Breadcrumb.vue";
import BaseHeroPage from "~/components/form/BaseHeroPage.vue";
import ComponentCardMenu from "~/components/pelayanan/tabs_rawatinap/component/ComponentCardMenu.vue";

useHead({
  title: "Instalasi Rawat Inap Intensif dan Reanimasi",
});

definePageMeta({
  breadcrumb: [
    { label: "Beranda", to: "/" },
    { label: " Rawat Inap", to: "/pelayanan/rawat-inap" },
    { label: "Instalasi Rawat Inap Intensif dan Reanimasi" },
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

.badge {
  background: #e6f4ec;
  color: #166534;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
}
</style>
