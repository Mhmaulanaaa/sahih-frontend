<template>
  <section class="space-y-20">
    <!-- ================= HERO RAWAT INAP ================= -->
    <div
      class="relative overflow-hidden rounded-4xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-green-600 p-10 md:p-14 text-white"
    >
      <div class="absolute inset-0 bg-white/10"></div>

      <div
        class="absolute right-0 top-0 w-72 h-72 bg-white/10 rounded-full translate-x-1/3 -translate-y-1/3"
      ></div>

      <img
        src="/images/logo/logo_white.png"
        alt="Logo RSUD"
        class="absolute left-6 top-1/2 w-70 opacity-10 -translate-y-1/2 pointer-events-none"
      />

      <div class="relative z-10 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p class="text-emerald-200 tracking-wide text-sm mb-2">INFORMASI LAYANAN</p>
          <h1 class="text-3xl md:text-4xl font-bold leading-tight">
            Ketersediaan Kamar Rawat Inap
            <span class="block text-emerald-100 mt-1"> RSUD Dr. Soetomo </span>
          </h1>

          <p class="mt-5 text-emerald-50 leading-relaxed max-w-2xl text-justify">
            RSUD Dr. Soetomo menyediakan fasilitas kamar rawat inap dengan berbagai kelas
            perawatan, mulai dari
            <b>Super VIP, VIP, Utama, hingga Kelas I, II, dan III</b>. Ketersediaan kamar
            bersifat <b>dinamis</b> dan disesuaikan dengan tingkat hunian serta kebutuhan
            medis pasien.
          </p>

          <p class="mt-3 text-emerald-100 text-sm max-w-2xl text-justify">
            Informasi ketersediaan kamar diperbarui secara berkala untuk mendukung proses
            pendaftaran dan penempatan pasien secara tepat dan transparan.
          </p>

          <!-- CTA Button -->
          <div class="mt-8 flex flex-wrap gap-4">
            <NuxtLink
              to="/pendaftaran-rawat-inap"
              class="inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3 text-emerald-700 font-semibold shadow hover:bg-emerald-50 transition"
            >
              <i class="fa-solid fa-file-pen"></i>
              Daftar Rawat Inap
            </NuxtLink>

            <NuxtLink
              to="https://itki.rsudrsoetomo.jatimprov.go.id/dashboard-kamar/public/umum"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-3 rounded-xl border border-white/40 px-6 py-3 text-white font-medium hover:bg-white/10 transition"
            >
              <i class="fa-solid fa-bed"></i>
              Lihat Ketersediaan Kamar
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
