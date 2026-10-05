<template>
  <div class="relative rounded-3xl p-10 text-white overflow-hidden" :class="bgClass">
    <!-- Gradient Overlay -->
    <div class="absolute inset-0 opacity-90" :class="gradientClass"></div>

    <!-- CONTENT -->
    <div class="relative z-10 max-w-4xl">
      <slot name="title">
        <h1 class="text-4xl font-bold">
          {{ title }}
        </h1>
      </slot>

      <slot name="subtitle">
        <p v-if="subtitle" class="mt-3 text-emerald-100">
          {{ subtitle }}
        </p>
      </slot>

      <!-- EXTRA CONTENT -->
      <slot />
    </div>

    <!-- PATTERN ACCENT -->
    <div
      class="absolute right-0 top-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"
    ></div>

    <!-- LOGO -->
    <img
      v-if="logo"
      :src="asset(logo)"
      alt="Hero Logo"
      class="absolute left-1 top-1/2 w-32 opacity-10 -translate-y-1/2 pointer-events-none"
    />
  </div>
</template>

<script setup lang="ts">
const { asset } = useAsset();
defineProps({
  title: {
    type: String,
    default: "",
  },
  subtitle: {
    type: String,
    default: "",
  },
  logo: {
    type: String,
    default: "",
  },
  bgClass: {
    type: String,
    default: "bg-emerald-600",
  },
  gradientClass: {
    type: String,
    default: "bg-gradient-to-br from-emerald-700 to-emerald-500",
  },
});
</script>
