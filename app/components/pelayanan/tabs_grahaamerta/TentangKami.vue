<template>
  <section class="relative overflow-hidden">
    <!-- Background Image -->
    <div
      class="absolute inset-0 bg-cover bg-[position:70%_35%] contrast-125 brightness-90 saturate-110 scale-105 z-0"
      :style="{
        backgroundImage: `url('${asset('/images/gedung6.webp')}')`,
      }"
    ></div>

    <!-- Overlay (cinematic) -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-white/70 z-10"
    ></div>

    <!-- Content -->
    <div class="relative z-20 max-w-7xl mx-auto px-5 py-20">
      <!-- Title -->
      <div class="text-center mb-10">
        <h2 class="text-3xl md:text-4xl font-extrabold text-white drop-shadow">
          Build Trust
        </h2>
        <div class="w-24 h-1 bg-emerald-400 mx-auto mt-4 rounded-full"></div>
      </div>

      <!-- Content Card -->
      <div
        class="max-w-9xl mx-auto bg-white/45 backdrop-blur-lg rounded-3xl shadow-xl border border-white/60 p-6 md:p-10"
      >
        <p class="text-white leading-relaxed text-justify md:text-lg">
          Selama lebih dari
          <span class="font-semibold text-green-400">20 tahun</span>, Instalasi
          <span class="font-semibold"> Graha Amerta RSUD dr. Soetomo Surabaya </span>
          berkomitmen untuk memberikan layanan kesehatan prima yang komprehensif dengan
          berfokus pada pasien dan penyedia layanan medis, baik dalam penegakan diagnosis,
          tindakan korektif, maupun tindakan penyelamatan.
          <br /><br />
          Graha Amerta & Paviliun Indraprasta (STOC) didukung oleh lebih dari
          <span class="font-semibold text-green-400">
            200 Dokter, Profesor Spesialis, dan Subspesialis
          </span>
          yang ahli di bidangnya. Dilengkapi dengan
          <span class="font-semibold">153 kamar</span>
          yang tersebar di Gedung Graha Amerta & Paviliun Indraprasta (STOC), kami
          memastikan setiap pasien mendapatkan pelayanan kesehatan yang
          <span class="font-semibold"> unggul, cekatan, dan terpercaya </span>.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { asset } = useAsset();
</script>
