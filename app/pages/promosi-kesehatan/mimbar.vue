<template>
  <div class="p-6 max-w-7xl mx-auto space-y-10">
    <h1 class="text-3xl font-bold text-center">Arsip Majalah Mimbar</h1>

    <div v-for="year in mimbarData" :key="year.tahun">
      <h2 class="text-xl font-semibold text-emerald-600 mb-4">Tahun {{ year.tahun }}</h2>

      <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <CardMajalahMimbar
          v-for="item in year.list"
          :key="item.title"
          :title="item.title"
          :image="item.image"
          :link="item.link"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const mimbarData = [
  {
    tahun: 2025,
    list: [
      {
        title: "Volume 29 No. 4",
        image: "/images/mimbar-4.jpg",
        link: "#",
      },
    ],
  },
  {
    tahun: 2024,
    list: [
      {
        title: "Volume 28 No. 3",
        image: "/images/mimbar-3.jpg",
        link: "#",
      },
    ],
  },
  {
    tahun: 2023,
    list: [],
  },
  {
    tahun: 2022,
    list: [],
  },
  {
    tahun: 2021,
    list: [],
  },
  {
    tahun: 2020,
    list: [],
  },
];
</script>
