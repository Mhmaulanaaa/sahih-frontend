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
        <i class="fa-solid fa-chevron-down text-sm"></i>
      </span>
    </button>

    <!-- ACCORDION CONTENT -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
      enter-from-class="opacity-0 max-h-0"
      enter-to-class="opacity-100 max-h-[1000px]"
      leave-from-class="opacity-100 max-h-[1000px]"
      leave-to-class="opacity-0 max-h-0"
    >
      <div v-if="open" class="bg-white rounded-xl shadow-sm p-5 overflow-hidden">
        <!-- FACILITY GRID -->
        <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-5 gap-6">
          <div
            v-for="(item, index) in facilities"
            :key="index"
            class="group flex flex-col items-center text-center bg-emerald-50 rounded-2xl p-6 hover:bg-emerald-100 transition"
          >
            <!-- ICON -->
            <div
              class="w-14 h-14 flex items-center justify-center rounded-full bg-white text-emerald-600 shadow-sm mb-4 group-hover:scale-110 transition"
            >
              <i :class="item.icon" class="text-xl"></i>
            </div>

            <!-- TITLE -->
            <p class="text-sm font-semibold text-slate-800">
              {{ item.name }}
            </p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const open = ref(true);
const title = "Fasilitas Umum";

const facilities = [
  { name: "AC", icon: "fa-solid fa-snowflake" },
  { name: "WiFi", icon: "fa-solid fa-wifi" },
  { name: "Toilet Umum", icon: "fa-solid fa-restroom" },
  { name: "Ruang Tunggu", icon: "fa-solid fa-couch" },
  {
    name: "Tempat Tidur Rawat Jalan",
    icon: "fa-solid fa-bed",
  },
  {
    name: "Kursi Roda Pasien",
    icon: "fa-solid fa-wheelchair",
  },
  { name: "Mushola", icon: "fa-solid fa-mosque" },
  { name: "Kantin", icon: "fa-solid fa-utensils" },
  { name: "Halaman Parkir", icon: "fa-solid fa-square-parking" },
];

function toggle() {
  open.value = !open.value;
}
</script>
