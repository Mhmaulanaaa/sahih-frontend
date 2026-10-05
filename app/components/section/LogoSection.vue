<template>
  <div class="mb-2">
    <div class="px-6 py-10 flex flex-wrap justify-center items-center gap-8">
      <a
        v-for="(item, index) in logos"
        :key="index"
        target="_blank"
        class="transition-transform hover:scale-110"
      >
        <img :src="asset(item.img)" :alt="item.alt" class="h-20 w-auto object-contain" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const { asset } = useAsset();
const logos = [
  {
    img: "/images/logo/logo-sectionn.webp",
    alt: "Logo Section",
  },
];
</script>
