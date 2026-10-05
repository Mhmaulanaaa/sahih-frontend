<template>
  <section class="bg-gradient-to- from-emerald-50 via-white to-emerald-50 pt-20">
    <!-- BREADCRUMB -->
    <div class="max-w-9xl mx-auto px-6 mt-15">
      <Breadcrumb />
    </div>
    <!-- HERO -->
    <div class="max-w-9xl mx-auto px-6 py-5">
      <BaseHeroPage title="Tentang Kami" logo="/images/logo/logo_white.png" />
    </div>

    <!-- TABS -->
    <div class="max-w-9xl mx-auto px-4 sm:px-6 -mt-1">
      <div class="bg-white rounded-2xl shadow-lg p-4 sm:p-5">
        <div
          class="relative flex justify-start sm:justify-center gap-6 sm:gap-8 overflow-x-auto sm:overflow-visible whitespace-nowrap scrollbar-hide"
        >
          <button
            v-for="(tab, index) in tabs"
            :key="tab.key"
            ref="tabRefs"
            @click="setActiveTab(tab.key, index)"
            class="px-2 py-3 font-light transition-colors duration-300 whitespace-nowrap"
            :class="
              activeTab === tab.key
                ? 'text-emerald-600'
                : 'text-gray-500 hover:text-emerald-600'
            "
          >
            {{ tab.label }}
          </button>

          <!-- MOVING UNDERLINE -->
          <span
            class="absolute bottom-0 h-[3px] bg-emerald-600 transition-all duration-300"
            :style="underlineStyle"
          ></span>
        </div>
      </div>
    </div>

    <!-- CONTENT -->
    <div class="max-w-9xl mx-auto px-6 py-14">
      <transition name="fade" mode="out-in">
        <component
          :is="tabComponent"
          :key="activeTab"
          class="bg-white rounded-3xl shadow-lg p-10 -mt-10"
        />
      </transition>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from "vue";

import Sekilas from "@/components/profil/tabs_tentangkami/Sekilas.vue";
import Sejarah from "@/components/profil/tabs_tentangkami/Sejarah.vue";
import Lambang from "@/components/profil/tabs_tentangkami/Lambang.vue";
import Mars from "@/components/profil/tabs_tentangkami/Mars.vue";
import Breadcrumb from "~/components/layout/Breadcrumb.vue";
import BaseHeroPage from "~/components/form/BaseHeroPage.vue";

useHead({
  title: "Tentang Kami",
});

/* =====================
    TABS
  ===================== */
interface TabItem {
  key: "sekilas" | "sejarah" | "lambang" | "mars";
  label: string;
}

const tabs: TabItem[] = [
  { key: "sekilas", label: "Sekilas" },
  { key: "sejarah", label: "Sejarah" },
  { key: "lambang", label: "Lambang" },
  { key: "mars", label: "Mars & Himne" },
];

const activeTab = ref<TabItem["key"]>("sekilas");

/* =====================
    TAB REFS (DOM)
  ===================== */
const tabRefs = ref<HTMLElement[]>([]);

const underlineStyle = ref<{
  width: string;
  left: string;
}>({
  width: "0px",
  left: "0px",
});

/* =====================
    COMPONENT MAP
  ===================== */
const tabComponent = computed(() => {
  const map: Record<TabItem["key"], any> = {
    sekilas: Sekilas,
    sejarah: Sejarah,
    lambang: Lambang,
    mars: Mars,
  };
  return map[activeTab.value];
});

/* =====================
    METHODS
  ===================== */
const setActiveTab = async (key: TabItem["key"], index: number) => {
  activeTab.value = key;
  await nextTick();
  moveUnderline(index);
};

const moveUnderline = (index: number) => {
  const el = tabRefs.value[index];
  if (!el) return;

  underlineStyle.value = {
    width: `${el.offsetWidth}px`,
    left: `${el.offsetLeft}px`,
  };
};

const updateUnderline = () => {
  const index = tabs.findIndex((tab) => tab.key === activeTab.value);
  moveUnderline(index);
};

/* =====================
    BREADCRUMB META
  ===================== */
definePageMeta({
  breadcrumb: [{ label: "Beranda", to: "/" }, { label: "Profil - Tentang Kami" }],
});

/* =====================
    INIT
  ===================== */
onMounted(async () => {
  await nextTick();
  moveUnderline(0);
  window.addEventListener("resize", updateUnderline);
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
