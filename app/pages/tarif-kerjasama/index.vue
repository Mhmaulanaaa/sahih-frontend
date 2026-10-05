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
        <BaseHeroPage title="Tarif dan Kerjasama" logo="/images/logo/logo_white.png" />
      </div>
      <!-- Menu -->
      <div class="bg-white rounded-2xl shadow-lg p-5">
        <!-- Tarif /> -->
        <div class="max-w-9xl mx-auto px-6">
          <BaseAccordion title="Tarif" :defaultOpen="true">
            <div class="space-y-5">
              <!-- SECTION 1 -->
              <section class="text-center">
                <h1
                  class="text-lg sm:text-xl md:text-md font-semibold text-slate-800 leading-relaxed mb-8 mx-auto"
                >
                  Tarif Pelayanan RSUD Dr. Soetomo berdasarkan Peraturan Daerah Jawa Timur
                  No.8 Tahun 2023 tentang Pajak Daerah dan Retribusi Daerah
                </h1>

                <div class="grid gap-6 sm:gap-8 grid-cols-1 lg:grid-cols-2">
                  <BaseDocument v-for="(doc, i) in tarif1" :key="i" v-bind="doc" />
                </div>
              </section>

              <!-- SECTION 2 -->
              <section class="text-center">
                <h1
                  class="text-lg sm:text-xl md:text-md font-semibold text-slate-800 leading-relaxed mb-8 mx-auto"
                >
                  Tarif Pelayanan RSUD Dr. Soetomo berdasarkan Peraturan Gubernur Jawa
                  Timur No.20 Tahun 2025 tentang Peninjauan Tarif Retribusi Daerah
                </h1>

                <div class="grid gap-6 sm:gap-8 grid-cols-1">
                  <BaseDocument v-for="(doc, i) in tarif2" :key="i" v-bind="doc" />
                </div>
              </section>

              <!-- SECTION 3 -->
              <section class="text-center">
                <h1
                  class="text-lg sm:text-xl md:text-md font-semibold text-slate-800 leading-relaxed mb-8 mx-auto"
                >
                  Peraturan Gubernur Jawa Timur Nomor 28 Tahun 2025 Tentang Perubahan Atas
                  Peraturan Gubernur Nomor 10 Tahun 2024 Tentang Lain-lain Pendapatan Asli
                  Daerah yang Sah
                </h1>

                <div class="grid gap-6 sm:gap-8 grid-cols-1 lg:grid-cols-2">
                  <BaseDocument v-for="(doc, i) in tarif3" :key="i" v-bind="doc" />
                </div>
              </section>
              <BaseCardTarif
                :items="tarifkerjasamas4"
                created-at="21 Juni 2023"
                updated-at="01 September 2025"
              />
            </div>
          </BaseAccordion>
          <BaseAccordion title="Kerjasama Pembiayaan" :defaultOpen="true" class="mt-5">
            <div class="space-y-5">
              <BaseCardKerjasama
                :items="kerjasamaPembiayaan"
                grid-class="grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6"
              />
            </div>
          </BaseAccordion>
          <!-- End Menu -->
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
import BaseCardTarif from "~/components/form/BaseCardTarif.vue";
import BaseCardKerjasama from "~/components/form/BaseCardKerjasama.vue";

useHead({
  title: "Tarif dan Kerjasama",
});

definePageMeta({
  breadcrumb: [
    { label: "Beranda", to: "/" },
    { label: "Tarif dan Kerjasama RSUD Dr. Soetomo" },
  ],
});

const tarif1 = [
  {
    title: "PERDA JATIM NO. 8 2023 PAJAK DAERAH DAN RETRIBUSI DAERAH ",
    href: "/images/welcome_drink.pdf",
    type: "PDF",
    size: "0,5 MB",
  },
  {
    title: "PERDA JATIM NO. 8 2023 PAJAK DAERAH DAN RETRIBUSI DAERAH LAMPIRAN I",
    href: "/images/welcome_drink.pdf",
    type: "PDF",
    size: "4,6 MB",
  },
];
const tarif2 = [
  {
    title: "PERGUB JATIM NO. 20 TAHUN 2025 PENINJAUAN TARIF RETRIBUSI DAERAH ",
    href: "/images/welcome_drink.pdf",
    type: "PDF",
    size: "26,4 MB",
  },
];

const tarif3 = [
  {
    title: "PERGUB JATIM NO. 10 TAHUN 2024 LLPADS ",
    href: "/images/welcome_drink.pdf",
    type: "PDF",
    size: "0,2 MB",
  },
  {
    title: "PERGUB JATIM NO. 10 TAHUN 2024 LLPADS LAMPIRAN II  ",
    href: "/images/welcome_drink.pdf",
    type: "PDF",
    size: "3,4 MB",
  },
];

const tarifkerjasamas4 = [
  {
    image: "/images/tarif/tarifAkomodasi.png",
    description:
      "Tarif Pelayanan Instalasi Rawat Inap RSUD Dr. Soetomo Berdasarkan Peraturan Daerah Provinsi Jawa Timur No. 8 Tahun 2023",
  },
  {
    image: "/images/tarif/tarifAkomodasiGriu.png",
    description:
      "Tarif Pelayanan Rawat Inap Instalasi Graha Amerta dan STOC RSUD Dr. Soetomo Berdasarkan Peraturan Daerah Provinsi Jawa Timur No. 8 Tahun 2023",
  },
];

const kerjasamaPembiayaan = [
  {
    image: "/images/tarif/kerjasama/1.svg",
    description: "Administrasi Medika (AdMedika)",
  },
  { image: "/images/tarif/kerjasama/2.png", description: "Alodokter Teknologi Solusi" },
  {
    image: "/images/tarif/kerjasama/3.svg",
    description: "Aplikanuasa Lintasarta - Owlexa Healthcare",
  },
  { image: "/images/tarif/kerjasama/4.svg", description: "ASABRI (Persero)" },
  {
    image: "/images/tarif/kerjasama/5.svg",
    description: "Asih Eka Abadi (International SOS)",
  },
  { image: "/images/tarif/kerjasama/6.svg", description: "Asuransi BRI Life" },

  {
    image: "/images/tarif/kerjasama/7.svg",
    description: "Asuransi Jiwa InHealth Indonesia",
  },
  { image: "/images/tarif/kerjasama/8.svg", description: "AXA Financial Indonesia" },
  { image: "/images/tarif/kerjasama/9.svg", description: "Biddokkes Polda Jatim" },
  {
    image: "/images/tarif/kerjasama/10.svg",
    description: "BNI Life Insurance - Indemnity",
  },
  {
    image: "/images/tarif/kerjasama/11.svg",
    description: "BNI Life Insurance - Managed Care",
  },
  { image: "/images/tarif/kerjasama/12.svg", description: "BPD Jatim, Tbk (Bank Jatim)" },

  { image: "/images/tarif/kerjasama/13.svg", description: "BPJS Kesehatan" },
  { image: "/images/tarif/kerjasama/14.svg", description: "BPJS Ketenagakerjaan" },
  { image: "/images/tarif/kerjasama/15.svg", description: "Ecosystems International" },
  { image: "/images/tarif/kerjasama/16.svg", description: "Fullerton Health Indonesia" },
  { image: "/images/tarif/kerjasama/17.svg", description: "Global Dairi Alami" },
  {
    image: "/images/tarif/kerjasama/18.svg",
    description: "Industri Kereta Api (Persero) - INKA",
  },

  {
    image: "/images/tarif/kerjasama/19.svg",
    description: "International Organization of Migration (IOM)",
  },
  { image: "/images/tarif/kerjasama/20.svg", description: "Jasa Raharja" },
  {
    image: "/images/tarif/kerjasama/21.svg",
    description: "Kartika Bina Medikotama (Medika Plaza)",
  },
  { image: "/images/tarif/kerjasama/22.svg", description: "Kereta Api Indonesia" },
  {
    image: "/images/tarif/kerjasama/23.svg",
    description: "Koperasi TKBM Usaha Karya Tanjung Perak",
  },
  {
    image: "/images/tarif/kerjasama/24.svg",
    description: "Lembaga Perlindungan Saksi dan Korban (LPSK)",
  },

  { image: "/images/tarif/kerjasama/25.svg", description: "Lippo Life Assurance" },
  {
    image: "/images/tarif/kerjasama/26.svg",
    description: "Media Dokter Investama (Halodoc)",
  },
  { image: "/images/tarif/kerjasama/27.svg", description: "Medilink Digital Medika" },
  { image: "/images/tarif/kerjasama/28.svg", description: "Nayaka Era Husada" },
  { image: "/images/tarif/kerjasama/29.svg", description: "PLN (Persero)" },
  { image: "/images/tarif/kerjasama/30.svg", description: "Prima Top Boga" },

  {
    image: "/images/tarif/kerjasama/31.svg",
    description: "Rumah Sakit Bhayangkara H.S. Samsoeri Mertojoso",
  },
  { image: "/images/tarif/kerjasama/32.svg", description: "Sumber Kopi Prima" },
  {
    image: "/images/tarif/kerjasama/33.svg",
    description: "Suprima Mitra Adhisasda / ASO Tirta Medical Centre",
  },
  { image: "/images/tarif/kerjasama/34.svg", description: "Taspen" },
  {
    image: "/images/tarif/kerjasama/35.svg",
    description: "Teknologi Pratama Analitika (Meditap)",
  },
  {
    image: "/images/tarif/kerjasama/36.svg",
    description: "Vertika Technologies Nusantara (Asuransi REY)",
  },
  { image: "/images/tarif/kerjasama/37.svg", description: "Yayasan Kesehatan Pertamina" },
];
</script>
