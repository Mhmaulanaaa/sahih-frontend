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
        <BaseHeroPage title="Kanal Pengaduan" logo="/images/logo/logo_white.png" />
      </div>
      <!-- Menu -->
      <div class="bg-white rounded-3xl shadow-lg p-6 sm:p-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <!-- LEFT PANEL -->
          <div
            class="lg:col-span-4 rounded-2xl bg-[#15336F] text-white p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <img
                src="/images/logo/lambangRsdsprovJatimkarsjci.png"
                alt="Logo"
                class="h-20 mb-6"
              />

              <h2 class="text-3xl font-bold leading-tight mb-4">KANAL PENGADUAN</h2>

              <p class="text-sm text-white/90 leading-relaxed">
                Berbagai saluran untuk menyampaikan laporan, keluhan, saran, atau
                pengaduan pelayanan publik.
              </p>
            </div>
          </div>

          <!-- RIGHT CONTENT -->
          <div class="lg:col-span-8">
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
              <a
                v-for="(item, index) in channels"
                :key="index"
                :href="item.link"
                target="_blank"
                class="rounded-2xl p-6 flex flex-col items-center justify-center gap-3 group relative block shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-emerald-100 hover:shadow-[0_18px_40px_rgba(16,185,129,0.25)]"
              >
                <i
                  :class="item.icon"
                  class="text-4xl group-hover:scale-110 transition"
                  :style="{ color: item.color }"
                ></i>

                <span class="text-sm font-medium text-slate-700">
                  {{ item.name }}
                </span>
              </a>
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
  title: "Kanal Pengaduan",
});

definePageMeta({
  breadcrumb: [
    { label: "Beranda", to: "/" },
    { label: "Pengaduan", to: "/pengaduan" },
    { label: "Kanal Pengaduan" },
  ],
});

interface ChannelItem {
  name: string;
  icon: string;
  link: string;
}

interface ChannelItem {
  name: string;
  icon: string;
  link: string;
  color: string;
}

const channels: ChannelItem[] = [
  {
    name: "Instagram",
    icon: "fa-brands fa-instagram",
    link: "https://instagram.com",
    color: "#E1306C",
  },
  {
    name: "Facebook",
    icon: "fa-brands fa-facebook",
    link: "https://facebook.com",
    color: "#1877F2",
  },
  {
    name: "X",
    icon: "fa-brands fa-x-twitter",
    link: "https://x.com",
    color: "#000000",
  },
  {
    name: "Email",
    icon: "fa-solid fa-envelope",
    link: "mailto:pengaduan@domain.com",
    color: "#EA4335",
  },
  {
    name: "WhatsApp",
    icon: "fa-brands fa-whatsapp",
    link: "https://wa.me/628xxxxxxxxx",
    color: "#25D366",
  },
  {
    name: "Live Chat",
    icon: "fa-solid fa-comments",
    link: "#",
    color: "#16A34A",
  },
];
</script>
