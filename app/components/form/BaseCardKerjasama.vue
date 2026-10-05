<template>
  <div class="mt-5">
    <!-- GRID -->
    <div class="grid gap-4" :class="gridClass">
      <!-- CARD -->
      <div
        v-for="(item, index) in items"
        :key="index"
        class="bg-white border border-slate-100 rounded-xl p-4 shadow hover:border-emerald-200 hover:shadow-md transition-all duration-300 group"
      >
        <!-- IMAGE -->
        <div class="flex justify-center">
          <div class="overflow-hidden rounded-lg">
            <img
              :src="item.image"
              :alt="item.alt || 'Kerjasama'"
              class="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 object-contain transition-transform duration-300 bg-white"
            />
          </div>
        </div>

        <!-- TEXT -->
        <div class="mt-5 px-2">
          <p
            class="font-semibold text-xs sm:text-sm text-center text-slate-700 line-clamp-3"
          >
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
  gridClass: {
    type: String,
    default: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
  },
});
</script>
