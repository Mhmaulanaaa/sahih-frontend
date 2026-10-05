<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-300',
      isHome && !scrolled ? 'bg-transparent' : 'bg-white shadow-md',
    ]"
  >
    <!-- ================= TOP BAR ================= -->
    <div class="hidden lg:block bg-green-700 text-white text-sm">
      <div class="max-w-7xl mx-auto h-12 px-6 flex items-center justify-between">
        <!-- Left -->
        <div class="flex items-center gap-8">
          <!-- Telepon -->
          <a
            href="tel:031-550-1078"
            class="flex items-center gap-2 transition hover:text-yellow-200"
          >
            <i class="fas fa-phone-alt text-xs"></i>
            <span>Telepon : +62 31 1500995 (Senin - Sabtu 07.00 - 18.00)</span>
          </a>

          <!-- WhatsApp -->
          <a
            href="https://wa.me/6281216700101"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 transition hover:text-yellow-200"
          >
            <i class="fab fa-whatsapp text-sm"></i>
            <span>WhatsApp : +62 812 1670 0101 (Hanya Menerima Pesan Pengaduan)</span>
          </a>
        </div>

        <!-- Right -->
        <!-- KANAN -->
        <div class="flex items-center gap-1">
          <!-- Voice -->
          <!-- <div class="relative z-30">
            <VoiceSwitcher />
          </div> -->

          <!-- Google Translate -->
          <!-- <div class="relative z-20">
            <LanguageSwitcher />
          </div> -->

          <!-- LanguageVoice -->
          <div class="relative z-20">
            <LanguageVoiceSwitcher />
          </div>
        </div>
      </div>
    </div>
    <!-- Dekstop -->

    <!-- Mobile -->
    <div
      :class="[
        'lg:hidden text-white transition-all duration-300',
        isHome && !scrolled ? 'bg-black/20 backdrop-blur-md' : 'bg-green-700',
      ]"
    >
      <div class="px-4 py-2 flex items-center justify-between">
        <!-- Nomor -->
        <div class="flex items-center gap-3 text-xs">
          <a
            href="tel:031-550-1078"
            class="flex items-center gap-2 transition hover:text-yellow-200"
          >
            <i class="fas fa-phone-alt text-xs"></i>
            <span>Telepon : +62 31 1500995 (Senin - Sabtu 07.00 - 18.00)</span>
          </a>

          <!-- WhatsApp -->
          <a
            href="https://wa.me/6281216700101"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 transition hover:text-yellow-200"
          >
            <i class="fab fa-whatsapp text-sm"></i>
            <span>WhatsApp : +62 812 1670 0101 (Hanya Menerima Pesan Pengaduan)</span>
          </a>
        </div>

        <!-- Tombol -->
        <div class="flex items-center gap-5">
          <div class="px-2 py-1">
            <LanguageVoiceSwitcher />
          </div>
        </div>
        <!-- <div class="flex items-center gap-5">
          <div class="px-2 py-1">
            <VoiceSwitcher />
          </div>
        </div>
        <div class="flex items-center gap-2">
          <div class="px-2 py-1">
            <LanguageSwitcher />
          </div>
        </div> -->
      </div>
    </div>
    <div
      class="max-w-7xl mx-auto px-4 lg:px-6 h-16 lg:h-20 flex items-center justify-between"
    >
      <!-- LOGO -->
      <NuxtLink to="/" class="flex items-center gap-4 z-50">
        <img src="/images/logo/logo-rsds-jatimprov.png" alt="Logo" class="h-9 lg:h-20" />

        <div class="">
          <h2
            :class="[
              ' text-sm font-bold leading-none transition-colors xl:text-base',
              isHome && !scrolled ? 'text-white' : 'text-green-700',
            ]"
          >
            RSUD Dr. Soetomo
          </h2>
        </div>
      </NuxtLink>

      <!-- HAMBURGER -->
      <button
        class="lg:hidden text-2xl z-50"
        @click="toggleMobile"
        aria-label="Toggle Menu"
      >
        ☰
      </button>

      <!-- ================= DESKTOP NAV ================= -->
      <nav
        class="hidden lg:flex items-center justify-center gap-5 xl:gap-6 2xl:gap-7 whitespace-nowrap text-sm font-medium"
      >
        <NuxtLink to="/" :class="linkClass('/')">Beranda</NuxtLink>

        <!-- DROPDOWN -->
        <div v-for="menu in dropdownMenus" :key="menu.base" class="relative group">
          <button :class="dropdownClass(menu.base)">
            {{ menu.label }}
            <i class="fas fa-chevron-down text-xs"></i>
          </button>

          <div
            class="absolute top-full left-0 mt-3 w-64 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden"
          >
            <template v-for="item in menu.items" :key="item.to">
              <!-- EXTERNAL -->
              <a
                v-if="isExternal(item.to)"
                :href="item.to"
                target="_blank"
                rel="noopener noreferrer"
                :class="dropdownItemClass(item.to)"
              >
                {{ item.label }}
              </a>

              <!-- INTERNAL -->
              <NuxtLink v-else :to="item.to" :class="dropdownItemClass(item.to)">
                {{ item.label }}
              </NuxtLink>
            </template>
          </div>
        </div>

        <NuxtLink to="/laporan" :class="linkClass('/laporan')">Laporan</NuxtLink>
        <NuxtLink to="/reformasi-birokrasi" :class="linkClass('/reformasi-birokrasi')">
          Reformasi Birokrasi
        </NuxtLink>
        <!-- <NuxtLink to="/csirt" :class="linkClass('/csirt')">CSIRT</NuxtLink> -->
        <NuxtLink to="/ppid" :class="linkClass('/ppid')">PPID</NuxtLink>
        <NuxtLink to="/pengaduan" :class="linkClass('/pengaduan')"> Pengaduan </NuxtLink>
      </nav>
    </div>

    <!-- ================= MOBILE MENU ================= -->
    <transition name="fade">
      <div
        v-if="mobileOpen"
        class="lg:hidden fixed inset-0 bg-white z-40 pt-20 overflow-y-auto"
      >
        <div class="px-6 pb-6 space-y-2 pt-10">
          <NuxtLink to="/" @click="closeMobile" class="block py-2 font-medium">
            Beranda
          </NuxtLink>

          <!-- ACCORDION -->
          <div v-for="menu in dropdownMenus" :key="menu.base" class="border-b">
            <button
              class="w-full flex justify-between items-center py-3 font-medium"
              @click="toggleAccordion(menu.base)"
            >
              {{ menu.label }}
              <span class="text-xl">
                {{ openAccordion === menu.base ? "−" : "+" }}
              </span>
            </button>

            <div v-show="openAccordion === menu.base" class="pl-4 pb-3 space-y-1">
              <template v-for="item in menu.items" :key="item.to">
                <a
                  v-if="isExternal(item.to)"
                  :href="item.to"
                  target="_blank"
                  rel="noopener noreferrer"
                  @click="closeMobile"
                  class="block py-1 text-sm text-gray-700 hover:text-green-500"
                >
                  {{ item.label }}
                </a>

                <NuxtLink
                  v-else
                  :to="item.to"
                  @click="closeMobile"
                  class="block py-1 text-sm text-gray-700 hover:text-green-500"
                >
                  {{ item.label }}
                </NuxtLink>
              </template>
            </div>
          </div>

          <NuxtLink to="/laporan" @click="closeMobile" class="block py-2">
            Laporan
          </NuxtLink>
          <NuxtLink to="/reformasi-birokrasi" @click="closeMobile" class="block py-2">
            Reformasi Birokrasi
          </NuxtLink>
          <!-- <NuxtLink to="/csirt" @click="closeMobile" class="block py-2"> CSIRT </NuxtLink> -->
          <NuxtLink to="/ppid" @click="closeMobile" class="block py-2"> PPID </NuxtLink>
          <NuxtLink to="/pengaduan" @click="closeMobile" class="block py-2">
            Pengaduan
          </NuxtLink>
        </div>
      </div>
    </transition>
    <!-- ================= GOOGLE TRANSLATE ================= -->
    <!-- <div
      class="gtranslate_wrapper fixed -left-[9999px] -top-[9999px]"
      aria-hidden="true"
    ></div> -->
    <!-- ================= END GOOGLE TRANSLATE ================= -->
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
