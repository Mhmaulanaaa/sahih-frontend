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
        <!-- TEXT -->
        <div>
          <p class="text-emerald-200 tracking-wide text-sm mb-2">TENTANG KAMI</p>
          <h1 class="text-3xl md:text-4xl font-bold leading-tight">
            Pelayanan Rawat Inap
            <span class="text-emerald-100">RSUD Dr. Soetomo</span>
          </h1>

          <p class="mt-4 text-emerald-50 max-w-xl text-justify">
            Pelayanan Rawat Inap RSUD Dr. Soetomo menyediakan perawatan intensif dan
            berkelanjutan bagi pasien dengan dukungan tenaga medis profesional, fasilitas
            lengkap, serta lingkungan yang aman dan nyaman untuk menunjang proses
            penyembuhan.
          </p>
        </div>
      </div>
    </div>

    <!-- ================= DESKRIPSI RAWAT INAP ================= -->
    <section class="relative">
      <div class="grid lg:grid-cols-3 gap-8 items-stretch">
        <!-- LEFT CONTENT -->
        <div
          class="lg:col-span-2 rounded-3xl p-10 shadow-sm relative overflow-hidden bg-gradient-to-br from-white via-emerald-50 to-white"
        >
          <div
            class="absolute right-0 top-0 w-40 h-40 bg-emerald-100/50 rounded-full translate-x-1/3 -translate-y-1/3"
          ></div>
          <div
            class="absolute left-0 bottom-0 w-64 h-64 bg-emerald-100/40 rounded-full -translate-x-1/3 translate-y-1/3"
          ></div>

          <h2 class="text-2xl md:text-3xl font-bold text-emerald-700 mb-5 relative z-10">
            Layanan Rawat Inap Terpadu
          </h2>

          <p class="text-slate-600 leading-relaxed max-w-2xl relative z-10 text-justify">
            Rawat Inap RSUD Dr. Soetomo dirancang untuk memberikan pelayanan medis yang
            optimal selama masa perawatan pasien, mulai dari pemantauan kondisi kesehatan,
            tindakan medis lanjutan, hingga pelayanan keperawatan yang profesional dan
            humanis.
          </p>

          <!-- Stats -->
          <div class="mt-10 grid sm:grid-cols-3 gap-6 relative z-10">
            <div class="flex items-center gap-4">
              <div
                class="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center"
              >
                <i class="fa-solid fa-bed text-emerald-600 text-xl"></i>
              </div>
              <div>
                <p class="text-xl font-bold text-slate-800">1.000+</p>
                <p class="text-sm text-slate-500">Tempat Tidur</p>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div
                class="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center"
              >
                <i class="fa-solid fa-user-nurse text-emerald-600 text-xl"></i>
              </div>
              <div>
                <p class="text-xl font-bold text-slate-800">24 Jam</p>
                <p class="text-sm text-slate-500">Perawatan & Monitoring</p>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div
                class="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center"
              >
                <i class="fa-solid fa-hospital-user text-emerald-600 text-xl"></i>
              </div>
              <div>
                <p class="text-xl font-bold text-slate-800">Kelas Lengkap</p>
                <p class="text-sm text-slate-500">VIP – Kelas III</p>
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT INFO -->
        <div
          class="rounded-3xl p-8 text-white shadow-sm bg-gradient-to-br from-emerald-700 via-emerald-600 to-green-600 relative overflow-hidden"
        >
          <div class="absolute inset-0 bg-white/10"></div>

          <div class="relative z-10">
            <h3 class="text-xl font-semibold mb-6 flex items-center gap-3">
              <i class="fa-solid fa-circle-info text-2xl"></i>
              Informasi Rawat Inap
            </h3>

            <ul class="space-y-5 text-sm leading-relaxed">
              <li class="flex items-start gap-3">
                <i class="fa-solid fa-check-circle text-emerald-200 mt-1"></i>
                Perawatan pasien dilakukan secara berkelanjutan dengan pengawasan dokter
                dan perawat selama 24 jam.
              </li>
              <li class="flex items-start gap-3">
                <i class="fa-solid fa-check-circle text-emerald-200 mt-1"></i>
                Tersedia berbagai kelas perawatan sesuai kebutuhan dan kenyamanan pasien.
              </li>
              <li class="flex items-start gap-3">
                <i class="fa-solid fa-check-circle text-emerald-200 mt-1"></i>
                Terintegrasi dengan layanan penunjang medis dan non-medis.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= TABEL INFORMASI ================= -->
    <section
      class="grid grid-cols-1 xl:grid-cols-1 gap-8 max-w-[2000px] mx-auto px-4 py-1"
    >
      <!-- TABEL JUMLAHTEMPAT TIDUR -->
      <section class="space-y-7">
        <!-- HEADER CARD -->
        <div
          class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-green-500 p-5 text-white shadow-lg"
        >
          <!-- Overlay -->
          <div class="absolute inset-0 bg-white/10"></div>

          <!-- Accent -->
          <div
            class="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full"
          ></div>

          <!-- Content -->
          <div
            class="relative z-10 flex flex-col md:flex-row items-center md:items-center gap-3 md:gap-4 text-center md:text-left"
          >
            <!-- Logo -->
            <img
              src="/images/logo/lambangRsdsprovJatimkarsjci.png"
              alt="Logo RSUD"
              class="h-12 md:h-14 drop-shadow"
            />

            <!-- Text -->
            <div>
              <h1 class="text-base sm:text-lg md:text-2xl font-bold uppercase">
                Jumlah Tempat Tidur
              </h1>
              <p class="text-xs sm:text-sm text-emerald-100 uppercase mt-1">
                RSUD Dr. Soetomo
              </p>
            </div>
          </div>
        </div>

        <!-- TABLE -->
        <div
          class="overflow-x-auto rounded-3xl border border-emerald-100 bg-white shadow-sm"
        >
          <table class="min-w-[900px] w-full border-collapse text-xs md:text-sm">
            <thead class="bg-emerald-50 text-emerald-800 sticky top-0 z-10">
              <tr class="text-center font-semibold">
                <th rowspan="3" class="px-4 py-4 border border-emerald-100 bg-emerald-50">
                  TOTAL
                </th>
                <th colspan="13" class="px-4 py-4 border border-emerald-100">KELAS</th>
              </tr>

              <tr class="text-center font-medium">
                <th colspan="2" class="border border-emerald-100">Super VIP</th>
                <th rowspan="2" class="border border-emerald-100">VIP</th>
                <th colspan="3" class="border border-emerald-100">UTAMA</th>
                <th rowspan="2" class="border border-emerald-100">I</th>
                <th rowspan="2" class="border border-emerald-100">II</th>
                <th rowspan="2" class="border border-emerald-100">III</th>
                <th rowspan="2" class="border border-emerald-100">BAYI</th>
                <th rowspan="2" class="border border-emerald-100">HCU</th>
                <th rowspan="2" class="border border-emerald-100">ICU</th>
                <th rowspan="2" class="border border-emerald-100">ISOLASI</th>
              </tr>

              <tr class="text-center text-xs uppercase tracking-wide">
                <th class="border border-emerald-100">I</th>
                <th class="border border-emerald-100">II</th>
                <th class="border border-emerald-100">I</th>
                <th class="border border-emerald-100">II</th>
                <th class="border border-emerald-100">III</th>
              </tr>
            </thead>

            <tbody class="text-center">
              <tr
                class="font-semibold bg-emerald-50 hover:bg-emerald-100/60 transition-colors"
              >
                <td class="border border-emerald-100 px-4 py-3">TOTAL</td>
                <td class="border border-emerald-100 px-4 py-3">6</td>
                <td class="border border-emerald-100 px-4 py-3">6</td>
                <td class="border border-emerald-100 px-4 py-3">111</td>
                <td class="border border-emerald-100 px-4 py-3">14</td>
                <td class="border border-emerald-100 px-4 py-3">6</td>
                <td class="border border-emerald-100 px-4 py-3">3</td>
                <td class="border border-emerald-100 px-4 py-3">131</td>
                <td class="border border-emerald-100 px-4 py-3">113</td>
                <td class="border border-emerald-100 px-4 py-3">482</td>
                <td class="border border-emerald-100 px-4 py-3">9</td>
                <td class="border border-emerald-100 px-4 py-3">167</td>
                <td class="border border-emerald-100 px-4 py-3">93</td>
                <td class="border border-emerald-100 px-4 py-3">42</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <!-- End Tables -->

      <!-- TABEL FASILITAS -->
      <section class="space-y-6">
        <div class="rounded-3xl bg-white shadow-sm border border-emerald-100">
          <div class="p-4 md:p-6">
            <!-- Scroll Hint -->
            <div class="mb-3 flex items-center gap-2 text-xs text-slate-500 md:hidden">
              <i class="fa-solid fa-arrows-left-right"></i>
              Geser ke kanan untuk melihat data lainnya
            </div>

            <!-- TABLE SCROLL -->
            <div class="relative overflow-x-auto overscroll-x-contain">
              <table
                class="min-w-[1200px] w-full text-xs border-separate border-spacing-0"
              >
                <thead class="bg-emerald-600 text-white">
                  <tr class="text-center">
                    <th class="px-3 py-3 border border-emerald-500">No</th>

                    <!-- Sticky first column -->
                    <th
                      class="px-4 py-3 border border-emerald-500 text-left bg-emerald-600 z-30"
                    >
                      Fasilitas
                    </th>

                    <th class="px-3 py-3 border">ICU</th>
                    <th class="px-3 py-3 border">HCU</th>
                    <th class="px-3 py-3 border">Ruang Isolasi</th>
                    <th class="px-3 py-3 border">III</th>
                    <th class="px-3 py-3 border">II</th>
                    <th class="px-3 py-3 border">I</th>
                    <th class="px-3 py-3 border">Utama III</th>
                    <th class="px-3 py-3 border">Utama II</th>
                    <th class="px-3 py-3 border">Utama I</th>
                    <th class="px-3 py-3 border">VIP</th>
                    <th class="px-3 py-3 border">Super VIP I &amp; II</th>
                  </tr>
                </thead>

                <tbody class="divide-y divide-emerald-100">
                  <!-- 1 -->
                  <tr class="hover:bg-emerald-50">
                    <td class="text-center py-3">1</td>
                    <td class="bg-white px-4 font-medium">
                      Tempat tidur per ruang (minimal)
                    </td>
                    <td class="text-center">Minimal 1 TT</td>
                    <td class="text-center">Minimal 1 TT</td>
                    <td class="text-center">Minimal 1 TT</td>
                    <td class="text-center">&gt; 4 TT</td>
                    <td class="text-center">2–4 TT</td>
                    <td class="text-center">1–4 TT</td>
                    <td class="text-center">3 TT</td>
                    <td class="text-center">3 TT</td>
                    <td class="text-center">2 TT</td>
                    <td class="text-center">1 TT</td>
                    <td class="text-center">1 TT</td>
                  </tr>

                  <!-- 2 -->
                  <tr class="hover:bg-emerald-50">
                    <td class="text-center py-3">2</td>
                    <td class="bg-white px-4 font-medium">Kursi penunggu pasien</td>
                    <td class="text-center">-</td>
                    <td class="text-center">-</td>
                    <td class="text-center">-</td>
                    <td class="text-center">+</td>
                    <td class="text-center">+</td>
                    <td class="text-center">+</td>
                    <td class="text-center">+</td>
                    <td class="text-center">+</td>
                    <td class="text-center">+</td>
                    <td class="text-center">+</td>
                    <td class="text-center">+</td>
                  </tr>

                  <!-- 3 -->
                  <tr class="hover:bg-emerald-50">
                    <td class="text-center py-3">3</td>
                    <td class="bg-white px-4 font-medium">Bedside cabinet</td>
                    <td class="text-center">+</td>
                    <td class="text-center">+</td>
                    <td class="text-center">+</td>
                    <td class="text-center">+</td>
                    <td class="text-center">+</td>
                    <td class="text-center">+</td>
                    <td class="text-center">+</td>
                    <td class="text-center">+</td>
                    <td class="text-center">+</td>
                    <td class="text-center">+</td>
                    <td class="text-center">+</td>
                  </tr>

                  <!-- 4 -->
                  <tr class="hover:bg-emerald-50">
                    <td class="text-center py-3">4</td>
                    <td class="bg-white px-4 font-medium">Bed penunggu pasien</td>
                    <td class="text-center">-</td>
                    <td class="text-center">-</td>
                    <td class="text-center">-</td>
                    <td class="text-center">-</td>
                    <td class="text-center">-</td>
                    <td class="text-center">-</td>
                    <td class="text-center">-</td>
                    <td class="text-center">-</td>
                    <td class="text-center">-</td>
                    <td class="text-center">+</td>
                    <td class="text-center">+</td>
                  </tr>

                  <!-- 5 -->
                  <tr class="hover:bg-emerald-50">
                    <td class="text-center py-3">5</td>
                    <td class="bg-white px-4 font-medium">Kamar mandi / WC</td>
                    <td class="text-center">Luar/dalam sharing</td>
                    <td class="text-center">Luar/dalam sharing</td>
                    <td class="text-center">Luar/dalam sharing</td>
                    <td class="text-center">Luar/dalam sharing</td>
                    <td class="text-center">Luar/dalam sharing</td>
                    <td class="text-center">Luar/dalam sharing</td>
                    <td class="text-center">Dalam sharing</td>
                    <td class="text-center">Dalam sharing</td>
                    <td class="text-center">Dalam sharing</td>
                    <td class="text-center font-semibold text-emerald-700">Dalam</td>
                    <td class="text-center font-semibold text-emerald-700">Dalam</td>
                  </tr>

                  <!-- 6 -->
                  <tr class="hover:bg-emerald-50">
                    <td class="text-center py-3">6</td>
                    <td class="bg-white px-4 font-medium">Air conditioner</td>
                    <td class="text-center">+/-</td>
                    <td class="text-center">+/-</td>
                    <td class="text-center">+/-</td>
                    <td class="text-center">+/-</td>
                    <td class="text-center">-</td>
                    <td class="text-center">+/-</td>
                    <td class="text-center">+</td>
                    <td class="text-center">+</td>
                    <td class="text-center">+</td>
                    <td class="text-center">+</td>
                    <td class="text-center">+</td>
                  </tr>

                  <!-- 7 -->
                  <tr class="hover:bg-emerald-50">
                    <td class="text-center py-3">7</td>
                    <td class="bg-white px-4 font-medium">Lemari es</td>
                    <td class="text-center">-</td>
                    <td class="text-center">-</td>
                    <td class="text-center">-</td>
                    <td class="text-center">-</td>
                    <td class="text-center">-</td>
                    <td class="text-center">+/-</td>
                    <td class="text-center">+</td>
                    <td class="text-center">+</td>
                    <td class="text-center">+</td>
                    <td class="text-center">+</td>
                    <td class="text-center">+</td>
                  </tr>

                  <!-- 8 -->
                  <tr class="hover:bg-emerald-50">
                    <td class="text-center py-3">8</td>
                    <td class="bg-white px-4 font-medium">Televisi</td>
                    <td class="text-center">-</td>
                    <td class="text-center">-</td>
                    <td class="text-center">-</td>
                    <td class="text-center">-</td>
                    <td class="text-center">-</td>
                    <td class="text-center">+/-</td>
                    <td class="text-center">+</td>
                    <td class="text-center">+</td>
                    <td class="text-center">+</td>
                    <td class="text-center">+</td>
                    <td class="text-center">+</td>
                  </tr>

                  <!-- 9 -->
                  <tr class="hover:bg-emerald-50">
                    <td class="text-center py-3">9</td>
                    <td class="bg-white px-4 font-medium">Bedside monitor</td>
                    <td class="text-center">+</td>
                    <td class="text-center">+</td>
                    <td class="text-center">-</td>
                    <td class="text-center">-</td>
                    <td class="text-center">-</td>
                    <td class="text-center">-</td>
                    <td class="text-center">-</td>
                    <td class="text-center">-</td>
                    <td class="text-center">-</td>
                    <td class="text-center">-</td>
                    <td class="text-center">-</td>
                  </tr>

                  <!-- 10 -->
                  <tr class="hover:bg-emerald-50">
                    <td class="text-center py-3">10</td>
                    <td class="bg-white px-4 font-medium">Ventilator</td>
                    <td class="text-center">+</td>
                    <td class="text-center">-</td>
                    <td class="text-center">-</td>
                    <td class="text-center">-</td>
                    <td class="text-center">-</td>
                    <td class="text-center">-</td>
                    <td class="text-center">-</td>
                    <td class="text-center">-</td>
                    <td class="text-center">-</td>
                    <td class="text-center">-</td>
                    <td class="text-center">-</td>
                  </tr>

                  <!-- 11 -->
                  <tr class="hover:bg-emerald-50">
                    <td class="text-center py-3">11</td>
                    <td class="bg-white px-4 font-medium">Tekanan negatif</td>
                    <td class="text-center">-</td>
                    <td class="text-center">-</td>
                    <td class="text-center">+/-</td>
                    <td class="text-center">-</td>
                    <td class="text-center">-</td>
                    <td class="text-center">-</td>
                    <td class="text-center">-</td>
                    <td class="text-center">-</td>
                    <td class="text-center">-</td>
                    <td class="text-center">-</td>
                    <td class="text-center">-</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p class="mt-6 text-sm text-slate-600">
              <b>Berdasarkan:</b> Keputusan Direktur Utama Rumah Sakit Umum Daerah Dr.
              Soetomo Nomor: <b>100.3.3/7553/102.6/2025</b><br />
              Tentang Alokasi Tempat Tidur Pasien Rawat Inap RSUD Dr. Soetomo
            </p>
          </div>
        </div>
      </section>
      <!-- End Tables -->
    </section>
  </section>
</template>

<script setup lang="ts"></script>
