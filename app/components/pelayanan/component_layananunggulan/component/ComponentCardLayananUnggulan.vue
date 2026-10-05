<template>
  <NuxtLink
    :to="item.link"
    class="relative block rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-emerald-100 hover:shadow-[0_18px_40px_rgba(16,185,129,0.25)]"
  >
    <!-- RIBBON -->
    <div v-if="item.isRujukan" class="absolute top-3 left-0 z-10">
      <span
        class="bg-emerald-600 text-white text-[10px] font-semibold px-3 py-1 rounded-r-full shadow-md"
      >
        RUJUKAN NASIONAL
      </span>
    </div>

    <!-- CARD CONTENT -->
    <div class="p-5 flex flex-col items-center text-center gap-4">
      <img :src="asset(item.icon)" :alt="item.title" class="w-20 h-20 object-contain" />

      <h3 class="text-sm font-semibold text-gray-800 leading-snug">
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
    isRujukan?: boolean;
  };
}>();
</script>
