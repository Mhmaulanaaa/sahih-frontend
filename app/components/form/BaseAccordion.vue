<template>
  <div class="space-y-4">
    <!-- ACCORDION HEADER -->
    <button
      @click="toggle"
      class="w-full flex justify-between items-center bg-emerald-50/70 border border-emerald-100 rounded-xl px-6 py-4 shadow-sm hover:bg-emerald-100/70 hover:shadow-md transition-all duration-300"
    >
      <h2 class="text-lg text-start font-normal text-slate-800">{{ title }}</h2>
      <span
        class="w-8 h-8 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600 transition-transform duration-300"
        :class="{ 'rotate-180': open }"
      >
        <i class="fa-solid fa-chevron-down"></i>
      </span>
    </button>
    <!-- ACCORDION CONTENT -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
      enter-from-class="opacity-0 max-h-0"
      enter-to-class="opacity-100 max-h-[1500px]"
      leave-from-class="opacity-100 max-h-[1500px]"
      leave-to-class="opacity-0 max-h-0"
    >
      <div v-if="open" class="bg-white rounded-xl border border-emerald-50 shadow-sm p-6">
        <!-- SLOT CONTENT -->
        <slot />
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  defaultOpen: {
    type: Boolean,
    default: false,
  },
});

const open = ref(props.defaultOpen);

const toggle = () => {
  open.value = !open.value;
};
</script>
