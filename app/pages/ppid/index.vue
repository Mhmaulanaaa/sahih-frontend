<template>
  <section class="bg-gradient-to- from-emerald-50 via-white to-emerald-50 pt-20">
    <!-- BREADCRUMB -->
    <div class="max-w-9xl mx-auto px-6 mt-15">
      <Breadcrumb />
    </div>
    <!-- HERO -->
    <div class="max-w-9xl mx-auto px-6 py-5">
      <BaseHeroPage title="PPID" logo="/images/logo/logo_white.png" />
    </div>

    <!-- CONTENT -->
    <div class="max-w-9xl mx-auto px-6">
      <div class="bg-white rounded-2xl shadow-lg p-5">
        <Informasi />
      </div>
      <div class="bg-white rounded-2xl shadow-lg p-5 mt-5">
        <BaseTable :title="tableTitle" :headers="tableHeaders" :rows="tableRows">
          <template #footer>
            <h4 class="text-sm font-semibold text-emerald-700 mb-2 text-center">
              Jangka Waktu Penyelesaian
            </h4>

            <p class="text-sm text-gray-700 leading-relaxed text-center">
              Waktu penyelesaian dilaksanakan paling lambat
              <span class="font-semibold">10 (sepuluh) hari kerja</span>
              sejak diterima permintaan. PPID dapat memperpanjang paling lambat
              <span class="font-semibold">7 (tujuh) hari kerja</span>.
            </p>
          </template>
        </BaseTable>
      </div>
      <div class="bg-white rounded-2xl shadow-lg p-5 mt-5">
        <Pengaduan />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from "vue";
import Informasi from "~/components/ppid/Informasi.vue";
import Pengaduan from "~/components/ppid/PengaduanInformasiPermohonan.vue";
import Breadcrumb from "~/components/layout/Breadcrumb.vue";
import BaseHeroPage from "~/components/form/BaseHeroPage.vue";
import BaseTable from "~/components/form/BaseTable.vue";

useHead({
  title: "PPID",
});

definePageMeta({
  breadcrumb: [{ label: "Beranda", to: "/" }, { label: "PPID" }],
});

const tableTitle = "Jam Pelayanan Informasi Publik";
const tableHeaders = ["Hari", "Waktu Pelayanan", "Waktu Istirahat"];

const tableRows = [
  ["Senin – Kamis", "07:00 – 15:30 WIB", "12:00 – 13:00 WIB"],
  ["Jumat", "07:00 – 15:00 WIB", "11:30 – 12:30 WIB"],
];
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
