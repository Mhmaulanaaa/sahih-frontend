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
        <BaseHeroPage title="Laporan Pengaduan" logo="/images/logo/logo_white.png" />
      </div>
      <!-- Menu -->
      <div class="bg-white rounded-2xl shadow-lg p-5">
        <!-- <DaftarDokter /> -->
        <div class="max-w-9xl mx-auto px-6">
          <BaseAccordion title="2024" :defaultOpen="true">
            <div
              class="space-y-4 grid gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1"
            >
              <div
                class="space-y-4 grid gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1"
              >
                <BaseDocument v-for="(doc, i) in documents2024" :key="i" v-bind="doc" />
              </div>
            </div>
          </BaseAccordion>
          <BaseAccordion title="2023" :defaultOpen="true" class="mt-5">
            <div
              class="space-y-4 grid gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1"
            >
              <div
                class="space-y-4 grid gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1"
              >
                <BaseDocument v-for="(doc, i) in documents2023" :key="i" v-bind="doc" />
              </div>
            </div>
          </BaseAccordion>
          <BaseAccordion title="2022" :defaultOpen="true" class="mt-5">
            <div
              class="space-y-4 grid gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1"
            >
              <div
                class="space-y-4 grid gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1"
              >
                <BaseDocument v-for="(doc, i) in documents2022" :key="i" v-bind="doc" />
              </div>
            </div>
          </BaseAccordion>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BaseHeroPage from "~/components/form/BaseHeroPage.vue";
import Breadcrumb from "~/components/layout/Breadcrumb.vue";
import BaseAccordion from "~/components/form/BaseAccordion.vue";
import BaseDocument from "~/components/form/BaseDocument.vue";
useHead({
  title: "Laporan Pengaduan",
});

definePageMeta({
  breadcrumb: [
    { label: "Beranda", to: "/" },
    { label: "Pengaduan", to: "/pengaduan" },
    { label: "Laporan Pengaduan" },
  ],
});

const documents2024 = [
  {
    title: "Laporan Pelayanan Keluhan Publik 2024",
    href: "/images/welcome_drink.pdf",
    type: "PDF",
    size: "1,2 MB",
  },
];

const documents2023 = [
  {
    title: "Laporan Pelayanan Keluhan Publik 2023",
    href: "/images/welcome_drink.pdf",
    type: "PDF",
    size: "1,2 MB",
  },
];

const documents2022 = [
  {
    title: "Laporan Pelayanan Keluhan Publik 2022",
    href: "/images/welcome_drink.pdf",
    type: "PDF",
    size: "1,2 MB",
  },
];
</script>
