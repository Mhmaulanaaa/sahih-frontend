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
          title="Pelayanan Endoskopi dan Minimal Invasif"
          logo="/images/logo/logo_white.png"
        />
      </div>
      <!-- Menu -->
      <div class="bg-white rounded-2xl shadow-lg p-5">
        <div class="w-full rounded-3xl p-5 space-y-8">
          <BaseAccordion title="Profil" :defaultOpen="true">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              <ComponentCardRujukan :titles="['-']" :subtitles="['-']" />
            </div>
          </BaseAccordion>
          <!-- 1 -->
          <BaseAccordion title="Produk Layanan Unggulan" :defaultOpen="true">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
              <ComponentCardRujukan :titles="['-']" :items="['-', '-', '-']" />
              <ComponentCardRujukan :titles="['-']" :items="['-']" />
              <ComponentCardRujukan :titles="['-']" :items="['-']" />
              <ComponentCardRujukan :titles="['-']" :items="['-']" />
            </div>
          </BaseAccordion>
          <!-- 2 -->
          <BaseAccordion title="Layanan" :defaultOpen="true">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-0">
              <ComponentCardRujukan :titles="['-']" :items="['-']" />
            </div>
          </BaseAccordion>
          <!-- 3 -->
          <BaseAccordion title="Fasilitas Pelayanan" :defaultOpen="true">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-0">
              <ComponentCardRujukan :titles="['-']" />
            </div>
          </BaseAccordion>
          <!-- 4 -->
          <BaseAccordion title="Kinerja Pelayanan" :defaultOpen="true">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-0">
              <ComponentCardRujukan :titles="['-']" :items="['-']" />
              <ComponentCardRujukan :titles="['-']" :items="['-']" />
            </div>
          </BaseAccordion>
          <!-- 5 -->
          <BaseAccordion title="Penelitan dan Publikasi" :defaultOpen="true">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-0">
              <ComponentCardRujukan :titles="['-']" />
            </div>
          </BaseAccordion>
          <!-- 6 -->
          <BaseAccordion title="Jejaring Rumah Sakit Mitra" :defaultOpen="true">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-0">
              <ComponentCardRujukan :titles="['-']" />
            </div>
          </BaseAccordion>
          <!-- 7 -->
          <BaseAccordion title="Agenda Kegiatan Ilmiah Mendatang" :defaultOpen="true">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-0">
              <ComponentCardRujukan :titles="['-']" />
            </div>
          </BaseAccordion>
          <!-- 8 -->
          <BaseAccordion title="Penelitian dan Publikasi" :defaultOpen="true">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-0">
              <ComponentCardRujukan :titles="['-']" />
            </div>
          </BaseAccordion>
          <!-- 9 -->
          <BaseAccordion title="Cara Merujuk" :defaultOpen="true">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-0">
              <ComponentCardRujukan :titles="['-']" />
            </div>
          </BaseAccordion>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Breadcrumb from "~/components/layout/Breadcrumb.vue";
import BaseHeroPage from "~/components/form/BaseHeroPage.vue";
import BaseAccordion from "~/components/form/BaseAccordion.vue";
import ComponentCardRujukan from "~/components/rujukan/ComponentCardRujukan.vue";

useHead({
  title: "Pelayanan Endoskopi dan Minimal Invasif",
});

definePageMeta({
  breadcrumb: [
    { label: "Beranda", to: "/" },
    { label: "Pelayanan Endoskopi dan Minimal Invasif" },
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
