<template>
  <header
    :class="[
      'fixed top-0 left-0 z-50 w-full transition-all duration-300',
      isHome && !scrolled ? 'bg-transparent' : 'bg-white/95 shadow-sm backdrop-blur-md',
    ]"
  >
    <!-- ================= MOBILE TOP BAR ================= -->
    <div
      :class="[
        'lg:hidden border-b transition-all duration-300',
        isHome && !scrolled
          ? 'border-white/10 bg-black/20 text-white backdrop-blur-md'
          : 'border-slate-100 bg-white text-slate-700',
      ]"
    >
      <div class="flex items-center justify-between px-4 py-2">
        <!-- CONTACT -->
        <div class="flex items-center gap-4 text-[11px] sm:text-xs">
          <!-- TELEPON -->
          <a
            href="tel:+62311500995"
            class="flex items-center gap-1.5 transition hover:text-emerald-500"
          >
            <i class="fas fa-phone-alt text-[10px]"></i>

            <span class="hidden sm:inline"> +62 31 1500995 </span>
          </a>

          <!-- WHATSAPP -->
          <a
            href="https://wa.me/6281216700101"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-1.5 transition hover:text-emerald-500"
          >
            <i class="fab fa-whatsapp text-xs"></i>

            <span class="hidden sm:inline"> +62 812 1670 0101 </span>
          </a>
        </div>
      </div>
    </div>

    <!-- ================= MAIN HEADER ================= -->
    <div
      class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-[68px] lg:h-20 lg:px-6"
    >
      <!-- ================= LOGO ================= -->
      <div class="z-50 flex items-center">
        <img
          src="/images/logo/grs.png"
          alt="RSUD Dr. Soetomo Jawa Timur"
          class="h-9 w-auto object-contain sm:h-10 lg:h-14"
        />
      </div>

      <!-- ================= ACTIONS ================= -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- LANGUAGE SWITCHER -->
        <div :class="['rounded-xl p-1 transition-all duration-300', isHome && !scrolled]">
          <LanguageVoiceSwitcher :scrolled="scrolled" />
        </div>

        <!-- LOGIN -->
        <NuxtLink
          to="/login"
          :class="[
            'inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 sm:px-5',
            isHome && !scrolled
              ? 'bg-white text-emerald-700 shadow-lg hover:bg-emerald-50'
              : 'bg-emerald-600 text-white shadow-sm hover:bg-emerald-700 hover:shadow-md',
          ]"
        >
          <i class="fas fa-right-to-bracket text-xs sm:text-sm"></i>

          <span class="hidden sm:inline"> Login </span>
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from "vue";
import VoiceSwitcher from "~/components/common/VoiceSwitcher.vue";
import LanguageSwitcher from "../common/LanguageSwitcher.vue";
import LanguageVoiceSwitcher from "../common/LanguageVoiceSwitcher.vue";

const route = useRoute();

const scrolled = ref(false);
const mobileOpen = ref(false);
const openAccordion = ref<string | null>(null);

const isHome = computed(() => route.path === "/");

const isExternal = (url: string) =>
  url.startsWith("http://") || url.startsWith("https://");

/* ================= MENU DATA ================= */
const dropdownMenus = [
  {
    label: "Profil",
    base: "/profil",
    items: [
      { label: "Tentang Kami", to: "/profil/tentang-kami" },
      { label: "Kedudukan", to: "/profil/kedudukan" },
      { label: "Tupoksi", to: "/profil/tupoksi" },
      { label: "Visi dan Misi", to: "/profil/visi-misi" },
      { label: "Struktur Organisasi", to: "/profil/struktur-organisasi" },
      { label: "SDM", to: "/profil/sdm" },
      { label: "Penghargaan & HAKI", to: "/profil/penghargaan-haki" },
    ],
  },
  {
    label: "Pelayanan",
    base: "/pelayanan",
    items: [
      { label: "Layanan Unggulan", to: "/pelayanan/layanan-unggulan" },
      { label: "Graha Amerta", to: "/pelayanan/graha-amerta" },
      { label: "Rawat Jalan", to: "/pelayanan/rawat-jalan" },
      { label: "Rawat Inap", to: "/pelayanan/rawat-inap" },
      { label: "Rawat Darurat", to: "/pelayanan/rawat-darurat" },
      { label: "Alur & Persyaratan", to: "/pelayanan/alur-persyaratan" },
      { label: "Petunjuk Umum", to: "/pelayanan/petunjuk-umum" },
      { label: "Panduan Praktik Klinik", to: "/pelayanan/panduan-praktik-klinik" },
    ],
  },
  {
    label: "Diklit",
    base: "/diklit",
    items: [
      {
        label: "Pendidikan & Pelatihan",
        to: "https://rsudrsoetomo.jatimprov.go.id/sicerdas/",
      },
      { label: "Penelitian & Pengembangan", to: "/diklit/penelitian-pengembangan" },
    ],
  },
  {
    label: "Promosi Kesehatan",
    base: "/promosi-kesehatan",
    items: [
      { label: "Edukasi Kesehatan", to: "/promosi-kesehatan/edukasi-kesehatan" },
      { label: "Majalah Mimbar", to: "/promosi-kesehatan/majalah-mimbar" },
    ],
  },
];

/* ================= ACTION ================= */
const handleScroll = () => {
  if (import.meta.client) scrolled.value = window.scrollY > 50;
};

const toggleMobile = () => (mobileOpen.value = !mobileOpen.value);

const closeMobile = () => {
  mobileOpen.value = false;
  openAccordion.value = null;
};

const toggleAccordion = (base: string) => {
  openAccordion.value = openAccordion.value === base ? null : base;
};

/* ================= CLASS ================= */
const linkClass = (path: string) => {
  if (route.path === path) return "text-green-500 font-semibold";
  if (isHome.value && !scrolled.value) return "text-white hover:text-green-400";
  return "text-gray-800 hover:text-green-400";
};

const dropdownClass = (base: string) => {
  if (route.path.startsWith(base))
    return "flex items-center gap-1 text-green-500 font-semibold";
  if (isHome.value && !scrolled.value)
    return "flex items-center gap-1 text-white hover:text-green-400";
  return "flex items-center gap-1 text-gray-800 hover:text-green-400";
};

const dropdownItemClass = (path: string) =>
  route.path === path
    ? "block px-5 py-3 text-sm bg-gray-100 text-green-500 font-semibold"
    : "block px-5 py-3 text-sm text-gray-700 hover:bg-gray-100";

/* ================= LIFECYCLE ================= */
watch(
  () => route.path,
  () => {
    closeMobile();
    if (import.meta.client)
      scrolled.value = route.path === "/" ? window.scrollY > 50 : true;
  }
);

onMounted(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>
