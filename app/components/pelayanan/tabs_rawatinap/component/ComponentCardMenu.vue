<template>
  <button
    class="group relative w-full h-[150px] rounded-2xl bg-gradient-to-br from-emerald-700 to-emerald-500 hover:from-[#13906A] hover:to-[#10805C] transition-all duration-300 shadow-md hover:shadow-xl active:scale-[0.97] overflow-hidden"
  >
    <img
      src="/images/logo/logo_white.png"
      alt="Logo RSUD"
      class="absolute left-4 top-1/2 w-50 -rotate-1 opacity-10 -translate-y-1/2 pointer-events-none"
    />

    <!-- CENTER CONTENT -->
    <div class="relative z-10 flex flex-col items-center justify-center h-full">
      <!-- ICON -->
      <div
        class="w-20 h-20 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110 m-5"
      >
        <i :class="icon" class="text-white text-3xl drop-shadow-md"></i>
      </div>

      <!-- TITLE -->
      <p class="text-white font-semibold text-sm uppercase tracking-wide text-center m-5">
        {{ title }}
      </p>
    </div>
  </button>
</template>

<script setup>
defineProps({
  title: String,
  icon: {
    type: String,
    default: "fa-solid fa-bed-pulse",
  },
});
</script>
