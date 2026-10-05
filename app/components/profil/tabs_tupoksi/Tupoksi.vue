<template>
  <div class="relative px-5 sm:px-6 lg:px-0 py-0">
    <!-- CONTENT WRAPPER -->
    <div class="max-w-9xl mx-auto py-6 px-3 mb-10 sm:py-10">
      <!-- DESCRIPTION -->
      <div
        class="text-gray-700 leading-relaxed text-justify text-sm sm:text-base lg:text-[15px]"
      >
        <!-- Tugas Pokok -->
        <h2 class="text-lg sm:text-xl font-semibold mb-2">Tugas Pokok</h2>
        <p class="mb-6">
          Melaksanakan upaya kesehatan secara berdaya guna dan berhasil guna dengan
          mengutamakan upaya penyembuhan dan pemulihan yang dilaksanakan secara serasi dan
          terpadu dengan upaya peningkatan, pencegahan dan penyelenggaraan upaya rujukan
          serta penyelenggaraan pendidikan, pelatihan dan pengembangan kesehatan.
        </p>

        <!-- Fungsi -->
        <h2 class="text-lg sm:text-xl font-semibold mb-3">Fungsi</h2>
        <ul class="list-disc pl-5 space-y-2">
          <li>Pelayanan asuhan pasien secara profesional</li>
          <li>
            Penyelenggaraan pendidikan dan penelitian dalam rangka pengembangan pelayanan
            kesehatan
          </li>
          <li>Pengelolaan manajemen sumber daya secara efektif dan efisien</li>
          <li>Penyelenggaraan dukungan penanganan masalah kesehatan masyarakat</li>
          <li>Pelaksanaan program kesehatan nasional</li>
          <li>Pelaksanaan fungsi lain yang diberikan oleh Kepala Dinas</li>
        </ul>
      </div>

      <!-- SOURCE CARD -->
      <div>
        <BaseDonwloadDocument
          title="Sumber"
          description="Peraturan Gubernur Jawa Timur Nomor 113 Tahun 2021 tentang Nomenklatur, Susunan Organisasi, Uraian Tugas dan Fungsi serta Tata Kerja Rumah Sakit Umum Daerah Dr. Soetomo"
          :file="asset('/pdf/tupoksi.pdf')"
          icon="fas fa-building"
          button-text="Unduh Peraturan"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BaseDonwloadDocument from "~/components/form/BaseDonwloadDocument.vue";
const { asset } = useAsset();
// Semua konten statis
</script>
