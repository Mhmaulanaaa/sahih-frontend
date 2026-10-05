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
        <BaseHeroPage title="Permohonan Informasi" logo="/images/logo/logo_white.png" />
      </div>
    </div>
    <!-- Menu -->
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
import Breadcrumb from "~/components/layout/Breadcrumb.vue";
import PanduanHakPasien from "~/components/permohonaninformasi/PanduanHakPasien.vue";
import FormPemohonInformasi from "~/components/permohonaninformasi/FormPemohonInformasi.vue";
import BaseHeroPage from "~/components/form/BaseHeroPage.vue";

useHead({
  title: "Permohonan Informasi",
});

definePageMeta({
  breadcrumb: [{ label: "Beranda", to: "/" }, { label: "Permohonan Informasi" }],
});

interface TabItem {
  key: "panduan-hak-pasien" | "form-pemohon-informasi";
  label: string;
}

const tabs: TabItem[] = [
  { key: "panduan-hak-pasien", label: "Panduan Hak Pasien" },
  { key: "form-pemohon-informasi", label: "Form Pemohon Informasi" },
];

const activeTab = ref<TabItem["key"]>("panduan-hak-pasien");

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
    "panduan-hak-pasien": PanduanHakPasien,
    "form-pemohon-informasi": FormPemohonInformasi,
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

onMounted(async () => {
  await nextTick();
  moveUnderline(0);
  window.addEventListener("resize", updateUnderline);
});

const inputClass =
  "w-full rounded-xl border border-slate-200 px-5 py-3 " +
  "focus:outline-none focus:ring-2 focus:ring-emerald-400 " +
  "placeholder:text-slate-400 text-xs";

const textareaClass = inputClass + " resize-none";

const form = reactive({
  nama: "",
  no_rm: "",
  alamat: "",
  email: "",
  telepon: "",
  pelayanan: "",
  captcha: "",
});

const submitForm = () => {
  console.log("Form data:", form);
  alert("Pengaduan terkirim (dummy)");
};

const reloadCaptcha = () => {
  alert("Captcha reload (dummy)");
};
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
