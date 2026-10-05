<template>
  <NuxtLink
    :to="item.link"
    class="group block bg-white rounded-3xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-emerald-100 hover:shadow-[0_18px_40px_rgba(16,185,129,0.25)]"
  >
    <div class="flex flex-col items-center text-center gap-4">
      <img
        :src="asset(item.icon)"
        alt=""
        class="h-24 transition-transform duration-300 group-hover:scale-110"
      />
      <p class="font-semibold text-emerald-700 leading-snug group-hover:text-emerald-800">
        {{ item.title }}
      </p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const { asset } = useAsset();

defineProps<{
  item: {
    title: string;
    icon: string;
    link: string; // wajib route internal Nuxt
  };
}>();
</script>
