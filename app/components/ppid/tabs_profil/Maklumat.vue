<template>
  <div class="max-w-9xl mx-auto px-6">
    <div class="relative lg:p-8 bg-white shadow-lg rounded-2xl">
      <!-- IMAGE -->
      <div
        class="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm"
      >
        <img
          src="/images/reformasi/maklumatRsds.jpg"
          alt="Maklumat RSUD Dr. Soetomo"
          class="block h-auto w-full object-contain"
        />
      </div>

      <!-- DESCRIPTION FULL WIDTH -->
    </div>
    <div class="p-5 mt-5">
      <Pengaduan />
    </div>
  </div>
</template>

<script setup lang="ts">
import Pengaduan from "~/components/ppid/PengaduanInformasiPermohonan.vue";
</script>
