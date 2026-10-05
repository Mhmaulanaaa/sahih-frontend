<template>
  <div class="space-y-4">
    <!-- ACCORDION HEADER -->
    <button
      @click="toggle"
      class="w-full flex justify-between items-center bg-white rounded-xl px-6 py-4 shadow-sm hover:shadow-md transition"
    >
      <h2 class="text-lg text-start font-normal text-slate-800">
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
      enter-to-class="opacity-100 max-h-[1200px]"
      leave-from-class="opacity-100 max-h-[1200px]"
      leave-to-class="opacity-0 max-h-0"
    >
      <div v-if="open" class="bg-white rounded-xl shadow-sm p-5 flex justify-center">
        <!-- IMAGE ONLY -->
        <img
          src="/images/jadwaldoktergraha/poligraha/estetikaKulit.png"
          alt="Poli Anak"
          class="w-full max-w-5xl rounded-lg border border-slate-200 object-contain"
        />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const open = ref(false);
const title = "Klinik Estetika (Kulit)";

function toggle() {
  open.value = !open.value;
}
</script>
