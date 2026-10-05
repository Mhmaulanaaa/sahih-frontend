<template>
  <!-- Menu Section -->
  <section class="relative isolate pt-15 pb-10">
    <!-- BG -->
    <div class="absolute inset-0 bg-gradient-to-b via-[#e6f7f1]"></div>
    <div
      class="absolute left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-[#a0e7c8]/40 rounded-full blur-3xl"
    ></div>
    <!-- Content Wrapper -->
    <div class="relative max-w-7xl mx-auto px-6">
      <!-- Card -->
      <div class="bg-white rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.15)] px-10 py-16">
        <!-- TOP SERVICES -->
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          <component
            v-for="item in services"
            :key="item.title"
            :is="isExternal(item.link) ? 'a' : NuxtLink"
            :href="isExternal(item.link) ? item.link : undefined"
            :to="!isExternal(item.link) ? item.link : undefined"
            :target="isExternal(item.link) ? '_blank' : undefined"
            :rel="isExternal(item.link) ? 'noopener noreferrer' : undefined"
            class="group relative z-10 cursor-pointer rounded-2xl p-4 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-emerald-50 hover:shadow-[0_20px_40px_rgba(34,197,94,0.25)]"
          >
            <img
              :src="asset(item.icon)"
              :alt="item.title"
              class="mx-auto mb-5 h-20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
            />

            <p
              class="whitespace-pre-line text-sm font-semibold leading-snug text-emerald-700 transition-colors group-hover:text-emerald-800"
            >
              {{ item.title }}
            </p>
          </component>
        </div>

        <!-- Divider -->
        <div
          class="my-16 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"
        ></div>

        <!-- BOTTOM SERVICES -->
        <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-12">
          <component
            v-for="item in servicesBottom"
            :key="item.title"
            :is="isExternal(item.link) ? 'a' : NuxtLink"
            :href="isExternal(item.link) ? item.link : undefined"
            :to="!isExternal(item.link) ? item.link : undefined"
            :target="isExternal(item.link) ? '_blank' : undefined"
            :rel="isExternal(item.link) ? 'noopener noreferrer' : undefined"
            class="group text-center rounded-2xl p-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(34,197,94,0.25)] hover:bg-emerald-50"
          >
            <img
              :src="asset(item.icon)"
              class="mx-auto h-20 mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
              alt=""
            />
            <p
              class="text-sm font-semibold text-emerald-700 whitespace-pre-line leading-snug transition-colors group-hover:text-emerald-800"
            >
              {{ item.title }}
            </p>
          </component>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { NuxtLink } from "#components";

const { asset } = useAsset();
const isExternal = (url: string) => {
  return url.startsWith("http") || url.endsWith(".pdf");
};

const services = [
  {
    title: "Pendaftaran\nOnline",
    icon: "/images/menusection/quicklink_pendol.png",
    link: "https://daftar.rsudrsoetomo.jatimprov.go.id/",
  },
  {
    title: "Ketersediaan\nKamar Rawat Inap",
    icon: "/images/menusection/quicklink_inforanap.png",
    link: "https://itki.rsudrsoetomo.jatimprov.go.id/dashboard-kamar/public/umum",
  },
  {
    title: "Hasil Penunjang\n(SIPS)",
    icon: "/images/menusection/quicklink_sips.png",
    link: "https://sips.rsudrsoetomo.jatimprov.go.id/",
  },
  {
    title: "Daftar Dokter",
    icon: "/images/menusection/quicklink_daftardokter.png",
    link: "/daftardokter",
  },
  {
    title: "Tarif dan\nKerjasama",
    icon: "/images/menusection/quicklink_tarifkerjasama.png",
    link: "/tarif-kerjasama",
  },
  {
    title: "Harga\nObat",
    icon: "/images/menusection/quicklink_obat.png",
    link: "/harga-obat",
  },
];

const servicesBottom = [
  {
    title: "Standar\nPelayanan Publik",
    icon: "/images/menusection/quicklink_spp.png",
    link: "/pdf/Spp_rsds.pdf",
  },
  {
    title: "Rekrutment",
    icon: "/images/menusection/ql_rekrutmen.png",
    link: "https://sdm.rsudrsoetomo.jatimprov.go.id/rekrutmen/",
  },
  {
    title: "Pengaduan\nLayanan Publik",
    icon: "/images/menusection/quicklink_plp.png",
    link: "/pengaduan-layanan-publik",
  },
  {
    title: "Permohonan\nInformasi",
    icon: "/images/menusection/quicklink_pi.png",
    link: "/permohonan-informasi",
  },
  {
    title: "Keberatan Atas\nPermohonan Informasi",
    icon: "/images/menusection/quicklink_kapi.png",
    link: "/keberatan-informasi",
  },
  {
    title: "PROMs & PREMs",
    icon: "/images/menusection/quicklink_promprem.png",
    link: "/proms-prems",
  },
];
// Menu Data
</script>
