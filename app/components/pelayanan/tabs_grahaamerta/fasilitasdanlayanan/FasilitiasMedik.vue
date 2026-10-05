<template>
  <div class="space-y-4">
    <!-- ACCORDION HEADER -->
    <button
      @click="toggle"
      class="w-full flex justify-between items-center bg-white rounded-xl px-6 py-4 shadow-sm hover:shadow-md transition"
    >
      <h2 class="text-lg font-medium text-slate-800">
        {{ title }}
      </h2>

      <span
        class="w-8 h-8 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600 transition-transform duration-300"
        :class="{ 'rotate-180': open }"
      >
        <i class="fa-solid fa-chevron-down"></i>
      </span>
    </button>

    <!-- ACCORDION CONTENT -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
      enter-from-class="opacity-0 max-h-0"
      enter-to-class="opacity-100 max-h-[2000px]"
      leave-from-class="opacity-100 max-h-[2000px]"
      leave-to-class="opacity-0 max-h-0"
    >
      <div v-if="open" class="bg-white rounded-xl shadow-sm p-6">
        <!-- GRID SHOWCASE -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(item, index) in doctors"
            :key="index"
            class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
          >
            <!-- IMAGE -->
            <div class="aspect-square overflow-hidden bg-emerald-50">
              <img
                :src="asset(item.image)"
                alt="No Images Available"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <!-- TITLE -->
            <div class="px-4 py-4 text-center">
              <h3 class="text-sm font-semibold text-slate-800 leading-snug">
                {{ item.nama }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const { asset } = useAsset();

const open = ref(true);
const title = "Fasilitas Medik";

const doctors = [
  {
    nama: "Ruang Poli Rawat Jalan",
    image: "/images/fasilitas/rprj.png",
  },
  {
    nama: "Kamar Rawat Inap",
    image: "/images/fasilitas/kri.png",
  },
  {
    nama: "Ruang Periksa Radiologi",
    image: "/images/fasilitas/rpr.png",
  },
  {
    nama: "Laboratorium",
    image: "/images/fasilitas/lab.png",
  },
  {
    nama: "Ruang Rehab Medik",
    image: "/images/fasilitas/rprj.png",
  },
  {
    nama: "Kamar Operasi",
    image: "/images/fasilitas/ko.png",
  },
  {
    nama: "ICU dan HCU",
    image: "/images/fasilitas/icu.png",
  },
  {
    nama: "Farmasi",
    image: "/images/fasilitas/rprj.png",
  },
];

function toggle() {
  open.value = !open.value;
}
</script>
