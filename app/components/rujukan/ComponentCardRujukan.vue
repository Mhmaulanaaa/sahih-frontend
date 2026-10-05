<template>
  <div class="rounded-2xl px-4 py-3 transition-all h-full">
    <!-- TITLES -->
    <div class="space-y-2 mb-3 sm:mb-4">
      <h3
        v-for="(title, index) in titles"
        :key="'title-' + index"
        class="text-sm sm:text-md lg:text-base font-semibold text-slate-800 flex items-start gap-3"
      >
        <span
          class="w-1 min-h-[1.25rem] sm:w-1.5 sm:min-h-[1.5rem] bg-emerald-500 rounded-full flex-shrink-0"
        ></span>
        <span class="leading-snug break-words">
          {{ title }}
        </span>
      </h3>
    </div>

    <!-- SUBTITLES -->
    <div v-if="subtitles.length" class="space-y-2 mb-3 sm:mb-4">
      <h4
        v-for="(subtitle, index) in subtitles"
        :key="'subtitle-' + index"
        class="text-sm sm:text-md lg:text-base font-semibold text-slate-800 flex items-start gap-3"
      >
        <span
          class="w-1 min-h-[1.25rem] sm:w-1.5 sm:min-h-[1.5rem] bg-emerald-500 rounded-full flex-shrink-0"
        ></span>
        <span class="leading-snug break-words">
          {{ subtitle }}
        </span>
      </h4>
    </div>

    <!-- LIST -->
    <ul
      class="space-y-2 sm:space-y-3 pl-3 sm:pl-4 lg:pl-6 text-xs sm:text-sm lg:text-base text-slate-600"
    >
      <li v-for="(item, index) in items" :key="index" class="flex items-center gap-3">
        <span
          class="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 flex-shrink-0"
        ></span>
        <span class="leading-snug">
          {{ item }}
        </span>
      </li>
    </ul>

    <slot />
  </div>
</template>
<script setup lang="ts">
defineProps({
  titles: {
    type: Array as () => string[],
    required: true,
  },
  subtitles: {
    type: Array as () => string[],
    default: () => [],
  },
  items: {
    type: Array as () => string[],
    default: () => [],
  },
});
</script>
