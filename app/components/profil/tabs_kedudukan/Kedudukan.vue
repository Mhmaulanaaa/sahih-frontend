<template>
  <div class="relative p-4 sm:p-5 lg:p-8">
    <section class="relative overflow-hidden rounded-3xl">
      <!-- Background Image -->
      <div
        class="absolute inset-0 bg-[url('/images/gedung1.webp')] bg-cover bg-[position:50%_58%] contrast-125 brightness-90 saturate-110 scale-105 z-0"
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
            Kedudukan
          </h2>
          <div class="w-24 h-1 bg-emerald-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <!-- Content Card -->
        <div
          class="max-w-9xl mx-auto bg-white/45 backdrop-blur-lg rounded-3xl shadow-xl border border-white/60 p-6 md:p-10"
        >
          <p class="text-white leading-relaxed text-justify md:text-lg">
            <span class="font-semibold text-green-300">RSUD Dr. Soetomo </span>merupakan
            unit organisasi bersifat khusus yang memiliki klasifikasi
            <span class="font-semibold">Rumah Sakit Kelas A</span>
            serta memberikan layanan kesehatan secara profesional. Rumah sakit ini berada
            di bawah dan bertanggung jawab kepada
            <span class="font-semibold text-green-300">
              Dinas Kesehatan Provinsi Jawa Timur.
            </span>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
