<template>
  <NuxtLink
    :to="item.link"
    class="group relative block rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-emerald-100 hover:shadow-[0_18px_40px_rgba(16,185,129,0.25)]"
  >
    <div class="relative flex flex-col items-center justify-center px-6 py-10">
      <!-- ICON WRAPPER -->
      <div
        class="w-35 h-35 flex items-center justify-center group-hover:scale-105 transition"
      >
        <img :src="asset(item.icon)" :alt="item.title" class="w-40 h-40 object-contain" />
      </div>

      <!-- TITLE -->
      <h3
        class="mt-6 text-xs font-semibold text-emerald-700 text-center leading-relaxed group-hover:text-emerald-800 transition"
      >
        {{ item.title }}
      </h3>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const { asset } = useAsset();
defineProps<{
  item: {
    title: string;
    icon: string;
    link: string;
  };
}>();
</script>
