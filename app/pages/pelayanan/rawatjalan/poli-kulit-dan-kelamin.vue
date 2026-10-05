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
          title="Daftar Poli Kulit dan Kelamin"
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
  title: "Poli Kulit dan Kelamin",
});

definePageMeta({
  breadcrumb: [
    { label: "Beranda", to: "/" },
    { label: " Rawat Jalan", to: "/pelayanan/rawat-jalan" },
    { label: "Poli Kulit dan Kelamin" },
  ],
});

const headers = [
  { label: "No.", key: "no" },
  { label: "Divisi", key: "divisi" },
  { label: "Hari", key: "hari" },
];

const items = [
  { no: 1, divisi: "Alergi", hari: "Setiap hari kerja" },
  { no: 2, divisi: "Dermatologi Anak", hari: "Setiap hari kerja" },
  { no: 3, divisi: "Dermatologi Geriatri", hari: "Setiap hari kerja" },
  { no: 4, divisi: "Kosmetik", hari: "Setiap hari kerja" },
  { no: 5, divisi: "Micologi/Jamur Kulit", hari: "Setiap hari kerja" },
  { no: 6, divisi: "Morbus Hansen/Kusta", hari: "Setiap hari kerja" },
  { no: 7, divisi: "PMS", hari: "Setiap hari kerja" },
  { no: 8, divisi: "TBK", hari: "Setiap hari kerja" },
  { no: 9, divisi: "Umum", hari: "Setiap hari kerja" },
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
