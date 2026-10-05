<template>
  <div>
    <div class="space-y-0 grid gap-5 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
      <BaseDocument v-for="(doc, i) in sk" :key="i" v-bind="doc" />
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseDocument from "~/components/form/BaseDocument.vue";

interface DocumentItem {
  title: string;
  href: string;
  type: string;
  size: string;
}
const sk: DocumentItem[] = [
  {
    title: "SK KEBIJAKAN PENGELOLAAN PENGADUAN PELAYANAN PUBLIK",
    href: "/images/welcome_drink.pdf",
    type: "PDF",
    size: "1,2 MB",
  },
  {
    title: "SK TIM PENGELOLA PENGADUAN",
    href: "/images/welcome_drink.pdf",
    type: "PDF",
    size: "1,2 MB",
  },
];
</script>
