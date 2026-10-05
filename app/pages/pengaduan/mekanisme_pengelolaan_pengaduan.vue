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
          title="Mekanisme Pengelolaan Pengaduan"
          logo="/images/logo/logo_white.png"
        />
      </div>
      <!-- Menu -->
      <div class="bg-white rounded-2xl shadow-lg overflow-hidden p-4 sm:p-6">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start">
          <!-- IMAGE -->
          <div class="lg:col-span-7 xl:col-span-7">
            <div class="rounded-2xl overflow-hidden">
              <img
                src="/images//pengaduan/alurPengaduan.png "
                alt="Alur Pengaduan Pelayanan Publik"
                class="w-full h-56 sm:h-72 md:h-96 lg:h-full object-cover"
              />
            </div>
          </div>

          <!-- DOCUMENT -->
          <div class="space-y-4 lg:col-span-5 xl:col-span-5 lg:sticky">
            <div class="bg-white rounded-2xl shadow-md p-4">
              <BaseDocument v-for="(doc, i) in documents" :key="i" v-bind="doc" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BaseHeroPage from "~/components/form/BaseHeroPage.vue";
import Breadcrumb from "~/components/layout/Breadcrumb.vue";
import BaseDocument from "~/components/form/BaseDocument.vue";
useHead({
  title: "Mekanisme Pengelolaan Pengaduan",
});

definePageMeta({
  breadcrumb: [
    { label: "Beranda", to: "/" },
    { label: "Pengaduan", to: "/pengaduan" },
    { label: "Mekanisme Pengelolaan Pengaduan" },
  ],
});

const documents = [
  {
    title: "Formulir Pengaduan",
    href: "/documents/sk_tim_pengelola_pengaduan.pdf",
    type: "PDF",
    size: "1.2 MB",
  },
];
</script>
