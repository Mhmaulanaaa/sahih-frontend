<template>
  <footer class="bg-white">
    <div class="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8">
      <!-- ===================================================== -->
      <!-- RELATED LINKS -->
      <!-- ===================================================== -->
      <section class="py-10 sm:py-12">
        <div class="rounded-2xl bg-white px-5 py-7 sm:px-8 sm:py-9">
          <!-- Title -->
          <div class="mb-7 text-center">
            <p class="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">
              Tautan Terkait
            </p>

            <h2 class="mt-2 text-xl font-bold tracking-tight text-slate-800 sm:text-2xl">
              Portal & Layanan
            </h2>
          </div>

          <!-- Logos -->
          <div class="flex flex-wrap items-center justify-center gap-x-5 gap-y-4">
            <a
              v-for="(item, index) in logos"
              :key="index"
              :href="item.url"
              target="_blank"
              rel="noopener noreferrer"
              class="group block"
            >
              <img
                :src="asset(item.img)"
                :alt="item.alt"
                class="h-auto w-[180px] rounded-lg object-contain transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-[1.02] group-hover:shadow-md sm:w-[200px] lg:w-[225px]"
              />
            </a>
          </div>
        </div>
      </section>

      <!-- ===================================================== -->
      <!-- MAIN FOOTER -->
      <!-- ===================================================== -->
      <section class="border-t border-slate-100 py-10 sm:py-12">
        <div class="grid gap-8 lg:grid-cols-[1.5fr_1fr_1fr]">
          <!-- Brand -->
          <div class="text-center lg:text-left">
            <div class="flex items-center justify-center gap-3 lg:justify-start">
              <div
                class="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600"
              >
                <i class="bi bi-hospital text-xl"></i>
              </div>

              <div>
                <h2 class="text-lg font-bold text-slate-800">RSUD Dr. Soetomo</h2>

                <p class="text-xs text-slate-500">Pemerintah Provinsi Jawa Timur</p>
              </div>
            </div>

            <p class="mx-auto mt-4 max-w-md text-sm leading-6 text-slate-500 lg:mx-0">
              Rumah sakit pendidikan dengan layanan kesehatan rujukan tersier nasional
              yang berkomitmen memberikan pelayanan terbaik bagi masyarakat.
            </p>
          </div>

          <!-- Contact -->
          <div class="text-center lg:text-left">
            <h3 class="text-sm font-bold text-slate-800">Hubungi Kami</h3>

            <div class="mt-4 space-y-3 text-sm">
              <!-- Phone -->
              <a
                href="tel:+62315501078"
                class="group flex items-center justify-center text-slate-500 transition-colors hover:text-emerald-600 lg:justify-start"
              >
                <i
                  class="bi bi-telephone mr-2 text-emerald-600 transition-transform group-hover:scale-110"
                ></i>
                <span>+62 31 5501078</span>
              </a>

              <!-- Emergency -->
              <a
                href="tel:118"
                class="group flex items-center justify-center text-slate-500 transition-colors hover:text-red-600 lg:justify-start"
              >
                <i
                  class="bi bi-telephone-outbound mr-2 text-red-500 transition-transform group-hover:scale-110"
                ></i>
                <span>118 — Layanan Darurat</span>
              </a>

              <!-- WhatsApp -->
              <a
                href="https://wa.me/6281216700101"
                target="_blank"
                rel="noopener noreferrer"
                class="group flex items-center justify-center text-slate-500 transition-colors hover:text-emerald-600 lg:justify-start"
              >
                <i
                  class="bi bi-whatsapp mr-2 text-emerald-600 transition-transform group-hover:scale-110"
                ></i>
                <span>+62 812 1670 0101</span>
              </a>

              <!-- Email -->
              <a
                href="mailto:kontak.rsudrsoetomo@jatimprov.go.id"
                class="group flex items-center justify-center break-all text-slate-500 transition-colors hover:text-emerald-600 lg:justify-start"
              >
                <i class="bi bi-envelope mr-2 shrink-0 text-emerald-600"></i>
                <span>kontak.rsudrsoetomo@jatimprov.go.id</span>
              </a>
            </div>
          </div>

          <!-- Address & Social -->
          <div class="text-center lg:text-left">
            <h3 class="text-sm font-bold text-slate-800">Lokasi</h3>

            <p class="mt-4 text-sm leading-6 text-slate-500">
              Jl. Mayjend. Prof. Dr. Moestopo No. 6-8, Kecamatan Gubeng, Kelurahan
              Airlangga, Kota Surabaya 60286.
            </p>

            <!-- Social -->
            <div class="mt-5 flex justify-center gap-2 lg:justify-start">
              <a
                v-for="social in socials"
                :key="social.url"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="social.label"
                :class="[
                  'flex h-9 w-9 items-center justify-center rounded-lg text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md',
                  social.color,
                ]"
              >
                <i :class="social.icon"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- ===================================================== -->
      <!-- BOTTOM -->
      <!-- ===================================================== -->
      <section
        class="flex flex-col gap-3 border-t border-slate-100 py-6 text-center text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:text-left"
      >
        <p>
          © {{ currentYear }}

          <span class="font-medium text-slate-500">
            Instalasi Teknologi Komunikasi dan Informasi
          </span>

          · RSUD Dr. Soetomo
        </p>

        <nav class="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:justify-end">
          <NuxtLink
            to="/kebijakan-privasi"
            class="transition-colors hover:text-emerald-600"
          >
            Kebijakan & Privasi
          </NuxtLink>

          <NuxtLink to="/faq" class="transition-colors hover:text-emerald-600">
            FAQ
          </NuxtLink>

          <NuxtLink to="/site-map" class="transition-colors hover:text-emerald-600">
            Site Map
          </NuxtLink>
        </nav>
      </section>
    </div>

    <!-- Small Accent -->
    <div class="h-1 bg-emerald-600"></div>
  </footer>
</template>

<script setup lang="ts">
const { asset } = useAsset();

/**
 * Automatic current year
 * Akan berubah otomatis setiap tahun.
 */
const currentYear = new Date().getFullYear();

const logos = [
  {
    url: "https://jatimprov.go.id/",
    img: "/images/footer/linkWebRsds.png",
    alt: "Company Profile RSUD Dr. Soetomo",
  },
  {
    url: "https://dinkes.jatimprov.go.id/",
    img: "/images/footer/linkKepk.png",
    alt: "KEPK",
  },
  {
    url: "https://kominfo.jatimprov.go.id/",
    img: "/images/footer/linkEmonev.png",
    alt: "E-Monev",
  },
  {
    url: "https://ppid.jatimprov.go.id/",
    img: "/images/footer/linkEhta.png",
    alt: "E-Hata",
  },
  {
    url: "https://spse.inaproc.id/jatimprov",
    img: "/images/footer/linkApsLitbang.png",
    alt: "Litbang",
  },
];

const socials = [
  {
    label: "Facebook",
    url: "https://www.facebook.com/rsudrsoetomo",
    icon: "bi bi-facebook",
    color: "bg-[#1877F2] hover:bg-[#0D65D9]",
  },
  {
    label: "Twitter",
    url: "https://twitter.com/rsudrsoetomo",
    icon: "fab fa-twitter",
    color: "bg-[#1DA1F2] hover:bg-[#0C85D0]",
  },
  {
    label: "Instagram",
    url: "https://www.instagram.com/rsudrsoetomo/",
    icon: "fab fa-instagram",
    color:
      "bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:from-[#E1306C] hover:via-[#C13584] hover:to-[#833AB4]",
  },
  {
    label: "YouTube",
    url: "https://www.youtube.com/@RSUDDrSOETOMOSurabaya",
    icon: "fab fa-youtube",
    color: "bg-[#FF0000] hover:bg-[#CC0000]",
  },
];
</script>
