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
          title="Tim Pengelola Pengaduan"
          logo="/images/logo/logo_white.png"
        />
      </div>
      <!-- Menu -->
      <div class="bg-white rounded-2xl shadow-lg overflow-hidden p-4 sm:p-6">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start">
          <!-- IMAGE -->
          <div class="lg:col-span-7 xl:col-span-12">
            <div class="rounded-2xl overflow-hidden">
              <img
                src="/images//pengaduan/sandi.png"
                alt="Alur Pengaduan Pelayanan Publik"
                class="w-full h-56 sm:h-72 md:h-96 lg:h-full object-cover"
              />
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
useHead({
  title: "Tim Pengelola Pengaduan",
});

definePageMeta({
  breadcrumb: [
    { label: "Beranda", to: "/" },
    { label: "Pengaduan", to: "/pengaduan" },
    { label: "Tim Pengelola Pengaduan" },
  ],
});
</script>
