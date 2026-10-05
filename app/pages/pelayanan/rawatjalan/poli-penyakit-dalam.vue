<template>
  <section class="pt-20">
    <!-- GLOBAL CONTAINER -->
    <div class="max-w-9xl mx-auto px-6">
      <!-- BREADCRUMB -->
      <div class="mt-15">
        <Breadcrumb />
      </div>
      <!-- HERO -->
      <div class="py-5">
        <BaseHeroPage
          title="Daftar Poli Penyakit Dalam"
          logo="/images/logo/logo_white.png"
        />
      </div>
      <!-- Menu -->
      <div class="bg-white rounded-2xl shadow-lg p-5">
        <div class="w-full rounded-3xl p-5 space-y-8">
          <BaseTableDaftarPelayananRajal :headers="headers" :items="items">
            <!-- Badge Hari -->
            <template #hari="{ item }">
              <span class="badge">
                {{ item.hari }}
              </span>
            </template>
          </BaseTableDaftarPelayananRajal>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Breadcrumb from "~/components/layout/Breadcrumb.vue";
import BaseHeroPage from "~/components/form/BaseHeroPage.vue";
import BaseTableDaftarPelayananRajal from "~/components/form/BaseTableDaftarPelayananRajal.vue";

useHead({
  title: "Poli Penyakit Dalam",
});

definePageMeta({
  breadcrumb: [
    { label: "Beranda", to: "/" },
    { label: " Rawat Jalan", to: "/pelayanan/rawat-jalan" },
    { label: "Poli Penyakit Dalam" },
  ],
});

const headers = [
  { label: "No.", key: "no" },
  { label: "Divisi", key: "divisi" },
  { label: "Hari", key: "hari" },
];

const items = [
  { no: 1, divisi: "Alergi Dewasa", hari: "Setiap hari kerja" },
  { no: 2, divisi: "Endokrin : Diabetes/Thyroid", hari: "Setiap hari kerja" },
  { no: 3, divisi: "Gastro", hari: "Senin, Rabu" },
  { no: 4, divisi: "Ginjal/Nefrologi", hari: "Selasa, Kamis" },
  { no: 5, divisi: "Hepato", hari: "Selasa, Kamis" },
  { no: 6, divisi: "Rematik", hari: "Senin, Rabu, Kamis, Jumat" },
  { no: 7, divisi: "Tropic Infeksi", hari: "Selasa, Kamis" },
  { no: 8, divisi: "Umum", hari: "Setiap hari kerja" },
  { no: 9, divisi: "UPIPI", hari: "Setiap hari kerja (07.00 – 15.00)" },
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

.badge {
  background: #e6f4ec;
  color: #166534;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
}
</style>
