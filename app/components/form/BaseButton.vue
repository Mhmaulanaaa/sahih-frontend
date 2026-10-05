<template>
  <button
    :type="type"
    class="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-xl transition font-medium text-sm disabled:opacity-50"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: "button",
  },
});
</script>
