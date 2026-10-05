<template>
  <section class="space-y-12 sm:space-y-16">
    <div
      class="relative overflow-hidden rounded-3xl md:rounded-4xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-green-600 px-6 py-10 sm:px-8 md:p-14 text-white"
    >
      <!-- Overlay -->
      <div class="absolute inset-0 bg-white/10"></div>

      <!-- Decorative Circle (hide di mobile) -->
      <div
        class="hidden md:block absolute right-0 top-0 w-72 h-72 bg-white/10 rounded-full translate-x-1/3 -translate-y-1/3"
      ></div>

      <!-- Watermark -->
      <img
        src="/images/logo/logo_white.png"
        alt="Logo RSUD"
        class="absolute left-4 sm:left-6 top-1/2 w-40 sm:w-52 md:w-70 opacity-10 -translate-y-1/2 pointer-events-none"
      />

      <div
        class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center"
      >
        <!-- TEXT -->
        <div class="text-center md:text-left">
          <p class="text-emerald-200 tracking-wide text-sm mb-2">TENTANG KAMI</p>

          <h1 class="text-2xl sm:text-3xl font-bold leading-tight">
            Penelitian dan Pengembangan
            <span class="block text-emerald-100"> RSUD Dr. Soetomo </span>
          </h1>

          <p
            class="mt-4 text-emerald-50 max-w-xl mx-auto md:mx-0 text-sm sm:text-base text-justify md:text-left"
          >
            Penelitian dan Pengembangan RSUD Dr. Soetomo dan Gunakan Aplikasi
            <b>"E-HTA"</b> untuk pengajuan ATK/Obat di RSUD Dr. Soetomo
          </p>

          <!-- ACTION -->
          <div
            class="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <NuxtLink
              to="https://itki.rsudrsoetomo.jatimprov.go.id/hta/public/"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-emerald-700 rounded-xl font-semibold hover:bg-emerald-50 transition"
            >
              <i class="fa-solid fa-arrow-up-right-from-square text-sm"></i>
              Aplikasi e-HTA
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
