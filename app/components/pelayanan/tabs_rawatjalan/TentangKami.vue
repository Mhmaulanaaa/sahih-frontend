<template>
  <section class="space-y-20">
    <!-- ================= HERO RAWAT JALAN ================= -->
    <div
      class="relative overflow-hidden rounded-4xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-green-600 p-10 md:p-14 text-white"
    >
      <!-- Overlay -->
      <div class="absolute inset-0 bg-white/10"></div>

      <!-- Decorative Circle -->
      <div
        class="absolute right-0 top-0 w-72 h-72 bg-white/10 rounded-full translate-x-1/3 -translate-y-1/3"
      ></div>

      <!-- Watermark -->
      <img
        src="/images/logo/logo_white.png"
        alt="Logo RSUD"
        class="absolute left-6 top-1/2 w-70 opacity-10 -translate-y-1/2 pointer-events-none"
      />

      <div class="relative z-10 grid md:grid-cols-2 gap-10 items-center">
        <!-- TEXT -->
        <div>
          <p class="text-emerald-200 tracking-wide text-sm mb-2">TENTANG KAMI</p>
          <h1 class="text-3xl md:text-4xl font-bold leading-tight">
            Pelayanan Rawat Jalan
            <span class="text-emerald-100">RSUD Dr. Soetomo</span>
          </h1>

          <p class="mt-4 text-emerald-50 max-w-xl text-justify">
            Pelayanan rawat jalan RSUD Dr. Soetomo memberikan akses pemeriksaan,
            konsultasi, dan tindakan medis oleh dokter spesialis dan subspesialis dengan
            sistem terintegrasi dan pendaftaran online.
          </p>

          <div class="mt-6 flex gap-4 flex-wrap">
            <NuxtLink
              to="https://daftar.rsudrsoetomo.jatimprov.go.id/"
              target="_blank"
              rel="noopener"
              class="px-6 py-3 bg-white text-emerald-700 rounded-xl font-semibold hover:bg-emerald-50 transition"
            >
              <i class="fa-solid fa-arrow-up-right-from-square text-sm"></i>
              Daftar Online
            </NuxtLink>

            <!-- <button
              class="px-6 py-3 bg-emerald-800/70 rounded-xl hover:bg-emerald-800 transition"
            >
              Lihat Poli
            </button> -->
          </div>
        </div>

        <!-- IMAGE -->
        <!-- <img
          src="/images/logo/logo_white.png"
          alt="Rawat Jalan"
          class="w-full max-w-md mx-auto"
        /> -->
      </div>
    </div>

    <!-- ================= DESKRIPSI RAWAT JALAN ================= -->
    <section class="relative">
      <div class="grid lg:grid-cols-3 gap-8 items-stretch">
        <!-- ================= LEFT CONTENT ================= -->
        <div
          class="lg:col-span-2 rounded-3xl p-10 shadow-sm relative overflow-hidden bg-gradient-to-br from-white via-emerald-50 to-white"
        >
          <!-- Decorative Gradient -->
          <div
            class="absolute right-0 top-0 w-40 h-40 bg-emerald-100/50 rounded-full translate-x-1/3 -translate-y-1/3"
          ></div>
          <div
            class="absolute left-0 bottom-0 w-64 h-64 bg-emerald-100/40 rounded-full -translate-x-1/3 translate-y-1/3"
          ></div>

          <!-- Title -->
          <h2 class="text-2xl md:text-3xl font-bold text-emerald-700 mb-5 relative z-10">
            Layanan Rawat Jalan Terpadu
          </h2>

          <!-- Description -->
          <p class="text-slate-600 leading-relaxed max-w-2xl relative z-10 text-justify">
            Layanan Rawat Jalan RSUD Dr. Soetomo menghadirkan pemeriksaan, konsultasi,
            serta tindakan medis yang komprehensif oleh dokter spesialis dan subspesialis.
            Seluruh pelayanan dirancang secara terpadu dengan dukungan sistem pendaftaran
            online guna memberikan kemudahan, kenyamanan, serta efisiensi waktu bagi
            pasien dan keluarga.
          </p>

          <!-- Stats -->
          <div class="mt-10 grid sm:grid-cols-3 gap-6 relative z-10">
            <div class="flex items-center gap-4">
              <div
                class="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center"
              >
                <i class="fa-solid fa-user-doctor text-emerald-600 text-xl"></i>
              </div>
              <div>
                <p class="text-xl font-bold text-slate-800">50+</p>
                <p class="text-sm text-slate-500">Dokter Spesialis & Subspesialis</p>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div
                class="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center"
              >
                <i class="fa-solid fa-hospital text-emerald-600 text-xl"></i>
              </div>
              <div>
                <p class="text-xl font-bold text-slate-800">20+</p>
                <p class="text-sm text-slate-500">Poliklinik Unggulan</p>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div
                class="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center"
              >
                <i class="fa-solid fa-mobile-screen-button text-emerald-600 text-xl"></i>
              </div>
              <div>
                <p class="text-xl font-bold text-slate-800">Cepat & Mudah</p>
                <p class="text-sm text-slate-500">Pendaftaran Online</p>
              </div>
            </div>
          </div>
        </div>

        <!-- ================= RIGHT INFO CARD ================= -->
        <div
          class="rounded-3xl p-8 text-white shadow-sm bg-gradient-to-br from-emerald-700 via-emerald-600 to-green-600 relative overflow-hidden"
        >
          <!-- Decorative -->
          <div class="absolute inset-0 bg-white/10"></div>

          <div class="relative z-10">
            <h3 class="text-xl font-semibold mb-6 flex items-center gap-3">
              <i class="fa-solid fa-circle-info text-2xl"></i>
              Informasi Pelayanan
            </h3>

            <ul class="space-y-5 text-sm leading-relaxed">
              <li class="flex items-start gap-3">
                <i class="fa-solid fa-check-circle text-emerald-200 mt-1"></i>
                Pemeriksaan dan konsultasi langsung oleh dokter spesialis dan subspesialis
                sesuai kebutuhan medis pasien.
              </li>

              <li class="flex items-start gap-3">
                <i class="fa-solid fa-check-circle text-emerald-200 mt-1"></i>
                Pendaftaran layanan tersedia secara online maupun langsung di rumah sakit
                untuk fleksibilitas pasien.
              </li>

              <li class="flex items-start gap-3">
                <i class="fa-solid fa-check-circle text-emerald-200 mt-1"></i>
                Didukung fasilitas medis yang lengkap, modern, serta nyaman untuk
                menunjang proses pemeriksaan.
              </li>

              <li class="flex items-start gap-3">
                <i class="fa-solid fa-check-circle text-emerald-200 mt-1"></i>
                Terintegrasi dengan layanan penunjang seperti laboratorium, radiologi, dan
                farmasi.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= CTA ================= -->
    <div
      class="relative rounded-3xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-green-600 p-10 text-white text-center overflow-hidden"
    >
      <div class="absolute inset-0 bg-white/10"></div>

      <div class="relative z-10 text-center">
        <h3 class="text-2xl font-bold">Daftar Rawat Jalan Lebih Mudah</h3>
        <p class="mt-3 text-emerald-100">
          Gunakan fitur pendaftaran online untuk pelayanan yang lebih cepat.
        </p>

        <NuxtLink
          to="https://daftar.rsudrsoetomo.jatimprov.go.id/"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center justify-center gap-2 mt-6 px-8 py-3 bg-white text-emerald-700 rounded-xl font-semibold hover:bg-emerald-50 transition active:scale-95"
        >
          <i class="fa-solid fa-arrow-up-right-from-square text-sm"></i>
          Pendaftaran Online
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
