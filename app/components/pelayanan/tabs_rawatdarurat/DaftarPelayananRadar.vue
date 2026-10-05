<template>
  <section class="space-y-10">
    <!-- TITLE -->
    <div class="text-center">
      <h1 class="text-3xl font-bold text-gray-900">
        Layanan Instalasi Gawat Darurat (IGD)
      </h1>
      <p class="mt-2 text-gray-600 text-sm">
        Informasi layanan IGD menular dan non menular RSUD Dr. Soetomo
      </p>
    </div>

    <!-- GRID 2 CARD -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- ================= IGD NON MENULAR ================= -->
      <div
        class="rounded-3xl border border-emerald-100 bg-white shadow-sm hover:shadow-md transition"
      >
        <!-- Header -->
        <div
          class="flex items-center gap-4 p-6 rounded-t-3xl bg-gradient-to-r from-emerald-600 to-green-500 text-white"
        >
          <div class="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
            <i class="fa-solid fa-heart-pulse text-xl"></i>
          </div>
          <div>
            <h2 class="text-xl font-semibold">IGD Non Menular</h2>
            <p class="text-sm text-emerald-100">Layanan gawat darurat non infeksi</p>
          </div>
        </div>

        <!-- Content -->
        <div class="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ComponentCardLayananRadar
            v-for="item in igdNonMenular"
            :key="item.title"
            :title="item.title"
            :icon="item.icon"
          />
        </div>
      </div>

      <!-- ================= IGD MENULAR ================= -->
      <div
        class="rounded-3xl border border-rose-100 bg-white shadow-sm hover:shadow-md transition"
      >
        <!-- Header -->
        <div
          class="flex items-center gap-4 p-6 rounded-t-3xl bg-gradient-to-r from-emerald-600 to-green-500 text-white"
        >
          <div class="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
            <i class="fa-solid fa-virus text-xl"></i>
          </div>
          <div>
            <h2 class="text-xl font-semibold">IGD Menular</h2>
            <p class="text-sm text-rose-100">Layanan gawat darurat penyakit infeksi</p>
          </div>
        </div>

        <!-- Content -->
        <div class="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ComponentCardLayananRadar
            v-for="item in igdMenular"
            :key="item.title"
            :title="item.title"
            :icon="asset(item.icon)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ComponentCardLayananRadar from "./component/ComponentCardLayananRadar.vue";
const { asset } = useAsset();
/* ================= IGD NON MENULAR ================= */
const igdNonMenular = [
  { title: "Buffer", icon: "/images/logo/Logo_RSDS.png" },
  { title: "NICU Berlian", icon: "/images/logo/Logo_RSDS.png" },
  { title: "NICU Intan", icon: "/images/logo/Logo_RSDS.png" },
  { title: "NICU Mutiara", icon: "/images/logo/Logo_RSDS.png" },
  { title: "NICU Rubi", icon: "/images/logo/Logo_RSDS.png" },
  { title: "NICU Safir", icon: "/images/logo/Logo_RSDS.png" },
  { title: "NICU Zamrud", icon: "/images/logo/Logo_RSDS.png" },
  { title: "ROI", icon: "/images/logo/Logo_RSDS.png" },
];

/* ================= IGD MENULAR ================= */
const igdMenular = [
  { title: "Buffer Menular", icon: "/images/logo/Logo_RSDS.png" },
  {
    title: "Resusitasi Menular",
    icon: "/images/logo/Logo_RSDS.png",
  },
  {
    title: "Obstetri Ginekologi Nifas",
    icon: "/images/logo/Logo_RSDS.png",
  },
  {
    title: "Obstetri Ginekologi VK",
    icon: "/images/logo/Logo_RSDS.png",
  },
];
</script>
