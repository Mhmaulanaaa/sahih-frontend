<template>
  <HeroSection />
  <LogoSection />
  <TrophySection />
  <BannerSection />
  <MenuSection />
  <ServicesSection />
  <SoetomoNewsSection />
  <SeputarJatimSection />
  <InstagramSection />
  <PodkiesSection />
  <InovasiSection />
  <AgendaSection />
</template>

<script setup lang="ts">
import HeroSection from "~/components/section/HeroSection.vue";
import BannerSection from "~/components/section/BannerSection.vue";
import TrophySection from "~/components/section/TrophySection.vue";
import MenuSection from "~/components/section/MenuSection.vue";
import ServicesSection from "~/components/section/ServicesSection.vue";
import PodkiesSection from "~/components/section/PodkiesSection.vue";
import InovasiSection from "~/components/section/InovasiSection.vue";
import AgendaSection from "~/components/section/AgendaSection.vue";
import LogoSection from "~/components/section/LogoSection.vue";
import SoetomoNewsSection from "~/components/section/SoetomoNewsSection.vue";
import SeputarJatimSection from "~/components/section/SeputarJatimSection.vue";
import InstagramSection from "~/components/section/InstagramSection.vue";
useHead({
  title: "Beranda",
});
</script>
