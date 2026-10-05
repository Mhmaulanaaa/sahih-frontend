<template>
  <div class="max-w-9xl mx-auto px-6">
    <div class="relative lg:p-8 bg-white shadow-lg rounded-2xl">
      <BaseTable :headers="tableHeaders1" :rows="tableRows1"> </BaseTable>
    </div>
    <div class="p-5 mt-5">
      <Pengaduan />
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseTable from "~/components/form/BaseTable.vue";
import Pengaduan from "~/components/ppid/PengaduanInformasiPermohonan.vue";

const tableHeaders1 = ["PPID RSUD Dr. Soetomo", "Tugas", "Wewenang"];

const tableRows1 = [
  [
    "PPID pada RSUD Dr. Soetomo merupakan PPID Pelaksana yang bertanggungjawab dalam membantu PPID Utama dalam pelaksanaan layanan Informasi Publik yang meliputi proses penyimpanan, pendokumentasian, penyediaan dan pelayanan Informasi Publik di RSUD Dr. Soetomo.",
    [
      "Membantu PPID melaksanakan tanggungjawab, tugas, dan kewenangannya",
      "Melaksanakan kebijakan teknis layanan Informasi Publik yang telah ditetapkan PPID",
      "Mengonsolidasikan proses penyimpanan, pendokumentasian, penyediaan dan pelayanan Informasi Publik",
      "Mengumpulkan dokumen Informasi Publik dari Petugas Pelayanan Informasi di Badan Publik",
      "Membantu PPID melakukan verifikasi dokumen Informasi Publik",
      "Membantu membuat, mengelola, memelihara, dan memutakhirkan Daftar Informasi Publik",
      "Menjamin ketersediaan dan akselerasi layanan Informasi Publik agar mudah diakses oleh publik",
    ],
    [
      "Meminta dokumen Informasi Publik dari Petugas Pelayanan Informasi di Badan Publik",
      "Meminta klarifikasi kepada Petugas Pelayanan Informasi di Badan Publik dalam melaksanakan pelayanan Informasi Publik.",
      "Menugaskan Petugas Pelayanan Informasi untuk menyiapkan dokumen untuk membantu PPID dalam melaksanakan pengujian konsekuensi atas Informasi Publik yang akan dikecualikan atau pembuatan pertimbangan tertulis dalam hal suatu Informasi Publik dikecualikan atau Permintaan Informasi Publik ditolak",
    ],
  ],
];
</script>
