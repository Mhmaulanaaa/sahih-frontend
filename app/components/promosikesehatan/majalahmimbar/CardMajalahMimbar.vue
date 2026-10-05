<template>
  <div
    @click="goToDetail"
    class="group cursor-pointer bg-white rounded-2xl p-5 flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 shadow-md"
  >
    <!-- IMAGE -->
    <div class="w-[170px] aspect-[3/4] overflow-hidden rounded-lg shadow-lg relative">
      <img
        :src="image"
        :alt="title"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <!-- Overlay Hover -->
      <div
        class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center"
      >
        <span
          class="opacity-0 group-hover:opacity-100 text-white text-xs bg-emerald-500 px-3 py-1 rounded-full shadow"
        >
          Lihat Detail
        </span>
      </div>
    </div>

    <!-- TITLE -->
    <p
      class="mt-4 text-sm font-semibold text-slate-700 text-center transition-all duration-300 group-hover:text-emerald-600"
    >
      {{ title }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  image: string;
  link: string; // link ke PDF / halaman detail
}>();

function goToDetail() {
  // kalau mau buka di tab baru
  window.open(props.link, "_blank");

  // atau kalau pakai Nuxt Router:
  // navigateTo(props.link)
}
</script>
