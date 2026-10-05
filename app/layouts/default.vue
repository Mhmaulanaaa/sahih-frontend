<script setup lang="ts">
import AppFooter from "~/components/layout/AppFooter.vue";
import AppHeader from "~/components/layout/AppHeader.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <AppHeader />

    <main class="flex-1 overflow-hidden">
      <slot />
    </main>
    <!-- BUTTON -->

    <AppFooter />
  </div>
</template>
