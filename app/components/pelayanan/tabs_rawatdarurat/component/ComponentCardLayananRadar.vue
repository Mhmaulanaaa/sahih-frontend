<template>
  <button
    class="relative w-full h-[80px] rounded-4xl flex items-center gap-4 px-4 bg-gradient-to-br from-emerald-700 to-emerald-500 transition-all duration-200 hover:from-[#13906A] hover:to-[#10805C] active:scale-[0.98] overflow-hidden"
  >
    <!-- LEFT: Poli Icon -->
    <div class="flex items-center justify-center ml-5">
      <!-- <img :src="icon" :alt="title" class="w-20 h-20 object-contain" /> -->
      <!-- <i class="fa-solid fa-bed-pulse text-white text-3xl sm:text-4xl"></i> -->
      <i class="fa-solid fa-truck-medical text-white text-3xl sm:text-4xl"></i>
    </div>

    <!-- CENTER: Text -->
    <div class="flex-1 leading-tight">
      <!-- <p class="text-[10px] text-emerald-200 tracking-wide">INSTALASI</p> -->
      <p class="text-white font-semibold text-sm uppercase">
        {{ title }}
      </p>
    </div>

    <!-- RIGHT: Action Icons -->
    <div class="flex flex-col items-center gap-2">
      <!-- Top Icon -->
      <div
        class="absolute right-0 top-0 w-48 h-48 bg-white/10 rounded-full translate-x-1/2"
      ></div>
      <img
        src="/images/logo/logo_white.png"
        alt="Logo RSUD"
        class="absolute left-4 top-1/2 w-50 -rotate-1 opacity-10 -translate-y-1/2 pointer-events-none"
      />

      <!-- Bottom Icon -->
      <span
        class="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center text-white text-xs"
      >
        ➜
      </span>
    </div>
  </button>
</template>

<script setup>
defineProps({
  title: String,
  icon: String,
});
</script>
