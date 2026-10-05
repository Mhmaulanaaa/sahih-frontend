<template>
  <div class="max-w-9xl mx-auto px-6">
    <div class="relative lg:p-8 bg-white shadow-lg rounded-2xl">
      <!-- IMAGE -->
      <div class="rounded-2xl overflow-hidden aspect-ratio-[4/3]">
        <img
          src="/images/ppid/visiMisiPpid.png"
          alt="Visi Misi PPID RSUD Dr. Soetomo"
          class="w-full h-full object-fill"
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
