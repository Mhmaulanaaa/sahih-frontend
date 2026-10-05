<template>
  <div
    class="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-md transition-all"
  >
    <!-- FOTO -->
    <img
      :src="asset(doctor.foto)"
      alt="Dokter"
      class="w-full sm:w-24 h-48 sm:h-20 rounded-xl object-contain border border-slate-200 flex-shrink-0"
    />

    <!-- INFO -->
    <div class="space-y-1">
      <!-- NAMA -->
      <p class="text-base sm:text-lg font-semibold text-slate-800 leading-snug">
        {{ doctor.nama }}
      </p>

      <!-- JABATAN -->
      <p class="text-sm sm:text-base text-emerald-700 flex items-center gap-2">
        <i class="fa-solid fa-briefcase text-emerald-600"></i>
        {{ doctor.jabatan }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { asset } = useAsset();
defineProps<{
  doctor: {
    nama: string;
    jabatan: string;
    foto: string;
  };
}>();
</script>
