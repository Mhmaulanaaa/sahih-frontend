<template>
  <div class="pt-20 pb-6 bg-transparent">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Logos -->
      <div class="mb-6 bg-gray-100 shadow">
        <div class="px-6 py-10 flex flex-wrap justify-center items-center gap-8">
          <a
            v-for="(item, index) in logos"
            :key="index"
            :href="item.url"
            target="_blank"
            class="transition-transform hover:scale-110"
          >
            <img
              :src="asset(item.img)"
              :alt="item.alt"
              class="h-26 w-auto object-contain"
            />
          </a>
        </div>
      </div>

      <!-- Info -->
      <div class="text-center mt-6">
        <h2 class="text-2xl font-bold mb-3">
          RSUD Dr. Soetomo, Pemerintah Provinsi Jawa Timur
        </h2>

        <div class="text-gray-700 leading-relaxed max-w-5xl mx-auto">
          <!-- Alamat -->
          <div>
            <b>Alamat :</b>
            <span class="text-green-600 font-semibold hover:text-yellow-500">
              Jl. Mayjend. Prof. Dr. Moestopo No. 6-8, Gubeng, Surabaya 60286
            </span>
          </div>

          <!-- Telepon -->
          <div class="flex items-center justify-center flex-wrap gap-x-1">
            <b>Telepon :</b>
            <span class="text-green-600 font-semibold hover:text-yellow-500">
              +62 31 1500995
            </span>
            <span class="text-gray-700"> (Senin - Sabtu 07.00 - 18.00) </span>
          </div>

          <!-- WhatsApp -->
          <div class="flex items-center justify-center flex-wrap gap-x-1">
            <b>WhatsApp :</b>
            <a
              href="https://wa.me/6281216700101"
              target="_blank"
              rel="noopener noreferrer"
              class="text-green-600 font-semibold hover:text-yellow-500"
            >
              +62 812 1670 0101
            </a>
            <span class="text-gray-700"> (Hanya Menerima Pesan Pengaduan) </span>
          </div>

          <!-- Email -->
          <div>
            <b>Email :</b>
            <span class="text-green-600 font-semibold hover:text-yellow-500">
              kontak.rsudrsoetomo@jatimprov.go.id
            </span>
          </div>
        </div>

        <!-- Social -->
        <div class="flex justify-center gap-3 py-4">
          <a
            v-for="social in socials"
            :key="social.url"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            :class="social.class"
          >
            <i :class="social.icon"></i>
          </a>
        </div>
      </div>

      <!-- Copyright -->
      <div class="text-center text-sm text-gray-700 mt-4">
        <strong>© 2026</strong>
        Instalasi Teknologi Komunikasi dan Informasi, RSUD Dr. Soetomo
        <span class="mx-2">•</span>
        <NuxtLink
          to="/kebijakan-privasi"
          class="text-green-600 hover:text-yellow-500 font-semibold"
        >
          Kebijakan & Privasi
        </NuxtLink>

        <span class="mx-2">•</span>

        <NuxtLink to="/faq" class="text-green-600 hover:text-yellow-500 font-semibold">
          FAQ
        </NuxtLink>

        <span class="mx-2">•</span>

        <NuxtLink
          to="/site-map"
          class="text-green-600 hover:text-yellow-500 font-semibold"
        >
          Site Map
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { asset } = useAsset();
const logos = [
  {
    url: "https://jatimprov.go.id/",
    img: "/images/footer/pemprovjatim2.png",
    alt: "Pemprov Jatim",
  },
  {
    url: "https://dinkes.jatimprov.go.id/",
    img: "/images/footer/dinkesjatim.png",
    alt: "Dinkes Jatim",
  },
  {
    url: "https://kominfo.jatimprov.go.id/",
    img: "/images/footer/diskominfojatim.png",
    alt: "Diskominfo Jatim",
  },
  {
    url: "https://ppid.jatimprov.go.id/",
    img: "/images/footer/ppidjatim.png",
    alt: "PPID Jatim",
  },
  {
    url: "https://spse.inaproc.id/jatimprov",
    img: "/images/footer/inaprocspse.png",
    alt: "INAPROC",
  },
  { url: "https://www.lapor.go.id/", img: "/images/footer/lapor.png", alt: "LAPOR" },
  { url: "https://sippn.menpan.go.id/", img: "/images/footer/sippn.png", alt: "SIPPN" },
  { url: "https://kemkes.go.id/", img: "/images/footer/kemenkes.png", alt: "Kemenkes" },
  { url: "https://komisiinformasi.go.id/", img: "/images/footer/kip.png", alt: "KIP RI" },
];

const socials = [
  {
    url: "https://www.facebook.com/rsudrsoetomo",
    icon: "bi bi-facebook",
    class:
      "w-10 h-10 flex items-center justify-center rounded-lg bg-blue-600 text-white hover:opacity-80",
  },
  {
    url: "https://twitter.com/rsudrsoetomo",
    icon: "fab fa-twitter",
    class:
      "w-10 h-10 flex items-center justify-center rounded-lg bg-sky-500 text-white hover:opacity-80",
  },
  {
    url: "https://www.instagram.com/rsudrsoetomo/",
    icon: "fab fa-instagram",
    class:
      "w-10 h-10 flex items-center justify-center rounded-lg bg-pink-500 text-white hover:opacity-80",
  },
  {
    url: "https://www.youtube.com/@RSUDDrSOETOMOSurabaya",
    icon: "fab fa-youtube",
    class:
      "w-10 h-10 flex items-center justify-center rounded-lg bg-red-600 text-white hover:opacity-80",
  },
];
</script>
