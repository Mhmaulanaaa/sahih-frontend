<template>
  <div class="relative p-4 sm:p-5 lg:p-8">
    <!-- IMAGE -->
    <div class="rounded-2xl overflow-hidden">
      <img
        src="/images/profil/profil_strukturOrganisasi.png"
        alt="Tupoksi RSUD Dr. Soetomo"
        class="w-full h-auto object-cover sm:object-fill rounded-2xl"
      />
    </div>

    <div>
      <BaseDonwloadDocument
        title="Sumber"
        description="Peraturan Gubernur Jawa Timur Nomor 113 Tahun 2021 tentang Nomenklatur, Susunan
          Organisasi, Uraian Tugas dan Fungsi serta Tata Kerja Rumah Sakitr Umum Daerah
          Dr. Soetomo"
        :file="asset('/pdf/struktur_organisasi.pdf')"
        icon="fas fa-building"
        button-text="Unduh Peraturan"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseDonwloadDocument from "~/components/form/BaseDonwloadDocument.vue";
const { asset } = useAsset();
// Tidak ada perubahan script, semua statis
</script>
