<template>
  <div class="relative z-22">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Achievement Grid -->
      <div class="relative grid gap-6 md:grid-cols-2 md:gap-0">
        <!-- Garis Tengah -->
        <div
          class="pointer-events-none absolute left-1/2 top-8 bottom-8 hidden w-px -translate-x-1/2 bg-gray-300 md:block"
        ></div>

        <div
          v-for="item in achievements"
          :key="item.title"
          class="group relative overflow-hidden p-8 transition-all duration-300 hover:-translate-y-2"
        >
          <!-- Background Glow -->
          <div
            class="absolute -top-16 -right-16 h-40 w-40 rounded-full blur-3xl opacity-50"
          ></div>

          <!-- Content -->
          <div class="relative z-10 flex items-start gap-3 sm:gap-4">
            <!-- Trophy -->
            <div
              class="flex shrink-0 items-end justify-center w-20 sm:w-24 md:w-28 lg:w-30"
            >
              <img
                src="/images/logo/trophy.webp"
                alt="Trophy"
                class="h-auto w-full object-contain"
              />
            </div>

            <!-- Text Content -->
            <div class="min-w-0 flex-1">
              <!-- Score -->
              <h2
                class="m-0 font-black leading-none tracking-tight text-emerald-600 text-[clamp(3rem,5.5vw,0.5rem)]"
              >
                {{ item.value }}
              </h2>

              <!-- Title -->
              <h3
                class="mt-1 break-words text-[clamp(0.85rem,1.2vw,1.05rem)] font-black uppercase leading-tight text-gray-800"
              >
                {{ item.title }}
              </h3>

              <!-- Description -->
              <p
                class="mt-1 break-words text-[clamp(0.65rem,0.95vw,0.8rem)] leading-[1.3] text-gray-500"
              >
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Achivment -->
</template>

<script setup lang="ts">
// Achievement Data
const achievements = [
  {
    value: "91,54",
    title: "Kategori Bersih Dari Korupsi",
    description:
      "Hasil Survey Indeks Persepsi Anti Korupsi Semester I Tahun 2025 RSUD Dr. Soetomo",
  },
  {
    value: "86,25",
    title: "Survey Kepuasan Masyarakat",
    description: "Hasil Survey SKM Triwulan I Tahun 2026 RSUD Dr. Soetomo",
  },
];
</script>
