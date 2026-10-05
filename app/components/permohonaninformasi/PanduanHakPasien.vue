<template>
  <div class="relative py-12 px-4 lg:px-12 overflow-hidden">
    <!-- Background diagonal effect -->
    <div
      class="relative max-w-9xl mx-auto grid lg:grid-cols-3 gap-0 shadow-sm rounded-2xl overflow-hidden"
    >
      <!-- ================= LEFT COLUMN ================= -->
      <div class="p-8 space-y-10">
        <!-- PASIEN -->
        <div>
          <h2
            class="text-emerald-600 text-3xl font-extrabold text-center uppercase leading-tight mb-6"
          >
            Tata Tertib<br />Khusus Bagi Pasien
          </h2>

          <ol class="space-y-4 text-gray-700 text-sm leading-relaxed">
            <li class="flex gap-3">
              <span class="font-bold text-emerald-600">1.</span>
              Pasien hanya boleh ditunggu oleh 1 orang, kecuali pasien anak, kondisi
              kritis, atau pasca operasi, boleh ditunggu maksimal 2 orang.
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-emerald-600">2.</span>
              Pasien wajib menggunakan gelang identitas selama dirawat.
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-emerald-600">3.</span>
              Dilarang mengubah pengaturan alat medis tanpa izin petugas.
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-emerald-600">4.</span>
              Pasien tidak boleh meninggalkan ruang perawatan tanpa izin dokter atau
              perawat.
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-emerald-600">5.</span>
              Pasien disarankan tidak mengonsumsi makanan/minuman dari luar yang bisa
              membahayakan kesehatannya.
            </li>
          </ol>
        </div>

        <!-- PENGUNJUNG -->
        <div>
          <h2
            class="text-emerald-600 text-3xl font-extrabold text-center uppercase leading-tight mb-6"
          >
            Tata Tertib<br />Bagi Pengunjung Bezuk
          </h2>

          <ol class="space-y-4 text-gray-700 text-sm leading-relaxed">
            <li class="flex gap-3">
              <span class="font-bold text-emerald-600">1.</span>
              Kunjungan hanya diperbolehkan pada jam berkunjung, yaitu setiap hari pukul
              16.00–17.00 WIB.
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-emerald-600">2.</span>
              Maksimal 2 orang pengunjung diperbolehkan masuk secara bergantian.
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-emerald-600">3.</span>
              Pengunjung wajib melakukan entry kunjungan melalui aplikasi Soetomo Care
              untuk identifikasi.
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-emerald-600">4.</span>
              Pengunjung harus dalam kondisi sehat. Dilarang berkunjung jika sedang flu,
              demam, atau kurang sehat.
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-emerald-600">5.</span>
              Pengunjung harus segera meninggalkan ruang perawatan setelah jam kunjung
              selesai.
            </li>
          </ol>
        </div>
      </div>

      <!-- ================= MIDDLE COLUMN (HIJAU FULL) ================= -->
      <div class="bg-emerald-600 text-white p-8 space-y-10">
        <div>
          <h2 class="text-3xl font-extrabold text-center uppercase leading-tight mb-6">
            Tata Tertib Khusus Bagi Penunggu Pasien
          </h2>

          <ol class="space-y-4 text-sm leading-relaxed">
            <li>
              1. Jumlah penunggu pasien maksimal 1 orang, kecuali untuk pasien kritis,
              pasca operasi, atau anak-anak dapat ditunggu maksimal 2 orang.
            </li>
            <li>
              2. Penunggu wajib mendaftar di Admisi Rawat Inap (Arina) di Gedung Pusat
              Diagnostik Terpadu (GPDT), melalui sistem SIPS.
            </li>
            <li>
              3. Penunggu tidak diperbolehkan keluar masuk rumah sakit, kecuali untuk
              kepentingan pasien.
            </li>
            <li>
              4. Pergantian penunggu wajib dilaporkan ke Posko Keamanan di Instalasi
              Keamanan, Ketertiban & Perparkiran.
            </li>
            <li>
              5. Dilarang memberikan makanan/minuman dari luar yang tidak sesuai kebutuhan
              nutrisi pasien.
            </li>
            <li>
              6. Dilarang berbicara, mendengarkan musik, atau menonton video dengan suara
              keras di ruang perawatan.
            </li>
            <li>7. Dilarang meninggalkan barang pribadi di rumah sakit.</li>
          </ol>
        </div>
      </div>

      <!-- ================= RIGHT COLUMN ================= -->
      <div class="relative bg-white p-8 flex flex-col h-full overflow-hidden">
        <!-- BACKGROUND IMAGE + GRADIENT -->
        <div class="absolute inset-0 flex items-center justify-center">
          <img
            src="/images/gedung_1.webp"
            alt="Gedung RSUD"
            class="w-full opacity-1000"
          />

          <!-- Gradient Overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-b from-white via-white/50 to-white"
          ></div>
        </div>

        <!-- CONTENT -->
        <div class="relative z-10 flex flex-col items-center flex-1 text-center">
          <!-- LOGO -->
          <img src="/images/logo/Logo_Badge_Terbaru.png" alt="logo" class="w-95 mb-4" />

          <!-- TITLE -->
          <h2 class="text-5xl font-extrabold text-emerald-600 uppercase leading-tight">
            Hak Pasien <br />
            & Keluarga
          </h2>

          <h3 class="text-2xl font-bold text-emerald-700 mt-2">RSUD DR. SOETOMO</h3>

          <p class="italic text-emerald-600 mt-2">"Tangguh, Tumbuh, Terus Melaju"</p>
        </div>

        <!-- SOCIAL MEDIA -->
        <div class="relative z-10 text-center mt-8">
          <div class="flex justify-center gap-6 text-2xl text-emerald-600">
            <a
              href="https://www.instagram.com/rsudrsoetomo/"
              target="_blank"
              class="hover:text-emerald-800 transition"
            >
              <i class="fa-brands fa-instagram cursor-pointer"></i>
            </a>

            <a
              href="https://www.facebook.com/rsudrsoetomo"
              target="_blank"
              class="hover:text-emerald-800 transition"
            >
              <i class="fa-brands fa-facebook cursor-pointer"></i>
            </a>

            <a
              href="https://rsudrsoetomo.jatimprov.go.id/"
              target="_blank"
              class="hover:text-emerald-800 transition"
            >
              <i class="fa-solid fa-globe cursor-pointer"></i>
            </a>
          </div>

          <div class="text-sm text-gray-600 mt-3">
            <p>@rsudrsoetomo</p>
            <p>rsud dr. soetomo</p>
            <p>www.rsudrsoetomo.jatimprov.go.id</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Document -->
    <div
      class="bg-gradient-to-br from-emerald-50 via-white to-white rounded-3xl p-4 sm:p-6 shadow-sm border border-emerald-100 mt-5"
    >
      <!-- Header -->
      <div class="flex items-center justify-center gap-3 mb-6 sm:mb-8">
        <div
          class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-100 flex items-center justify-center"
        >
          <i class="fa-solid fa-file-medical text-emerald-600 text-sm sm:text-base"></i>
        </div>

        <h3
          class="text-lg sm:text-xl font-bold text-emerald-700 text-center leading-snug"
        >
          Informasi Panduan Hak Pasien dan Keluarga
        </h3>
      </div>

      <!-- Card PDF -->
      <div>
        <BaseDocument v-for="(doc, i) in panduanHakPasien" :key="i" v-bind="doc" />
      </div>
    </div>
    <!-- End Document -->
  </div>
</template>
<script setup lang="ts">
import BaseDocument from "~/components/form/BaseDocument.vue";

const panduanHakPasien = [
  {
    title: "Panduan Hak Pasien dan Keluarga",
    href: "/pdf/panduan_hak_pasien.pdf",
    type: "PDF",
  },
];
</script>
