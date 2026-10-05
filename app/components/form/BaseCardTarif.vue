<template>
  <div class="mt-5">
    <!-- GRID -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- CARD -->
      <div
        v-for="(item, index) in items"
        :key="index"
        class="bg-white border border-slate-100 rounded-xl p-4 shadow hover:border-emerald-200 hover:shadow-md transition-all duration-300 group"
      >
        <!-- IMAGE -->
        <div class="overflow-hidden rounded-lg">
          <img
            :src="item.image"
            :alt="item.alt || 'Thumbnail'"
            class="w-full h-full object-cover transition-transform duration-300"
          />
        </div>

        <!-- TEXT -->
        <div class="mt-3">
          <p class="text-xs text-slate-600 italic line-clamp-3">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>

    <!-- FOOTER INFO -->
    <div v-if="createdAt" class="pt-3 text-xs font-medium italic text-slate-500">
      Halaman ini dibuat pada : {{ createdAt }}
    </div>

    <div v-if="updatedAt" class="pt-1 text-xs font-medium italic text-slate-500">
      Halaman ini diperbarui pada : {{ updatedAt }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
  createdAt: {
    type: String,
    default: "",
  },
  updatedAt: {
    type: String,
    default: "",
  },
});
</script>
