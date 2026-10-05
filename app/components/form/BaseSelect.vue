<template>
  <div ref="wrapper" class="relative">
    <!-- SELECT BOX -->
    <div
      class="w-full rounded-xl border px-4 py-3 text-sm bg-white flex items-center justify-between gap-2 transition cursor-pointer"
      :class="
        open
          ? 'border-emerald-500 ring-1 ring-emerald-500'
          : 'border-slate-200 hover:border-slate-300'
      "
      @click="toggle"
    >
      <span
        class="flex-1 truncate"
        :class="modelValue ? 'text-slate-800' : 'text-slate-400'"
      >
        {{ selectedLabel || placeholder }}
      </span>

      <!-- CLEAR BUTTON -->
      <button
        v-if="modelValue"
        @click.stop="clear"
        class="text-slate-400 hover:text-slate-600"
        aria-label="Clear"
      >
        ✕
      </button>

      <!-- CHEVRON -->
      <svg
        class="w-4 h-4 text-slate-400 transition"
        :class="{ 'rotate-180': open }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>

    <!-- DROPDOWN -->
    <Transition name="fade">
      <div
        v-if="open"
        class="absolute z-50 mt-2 w-full rounded-xl bg-white border border-slate-200 shadow-sm overflow-hidden"
      >
        <!-- SEARCH -->
        <div class="p-2">
          <input
            v-model="search"
            type="text"
            placeholder="Cari..."
            class="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-emerald-500"
          />
        </div>

        <!-- OPTIONS -->
        <ul class="max-h-52 overflow-y-auto">
          <li
            v-for="option in filteredOptions"
            :key="option.value"
            @click="select(option)"
            class="px-4 py-2 text-sm text-slate-800 cursor-pointer hover:bg-emerald-50 transition"
          >
            {{ option.label }}
          </li>

          <li
            v-if="filteredOptions.length === 0"
            class="px-4 py-3 text-sm text-slate-400 text-center"
          >
            Data tidak ditemukan
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";

const props = defineProps({
  modelValue: [String, Number, null],
  options: {
    type: Array,
    required: true,
  },
  placeholder: {
    type: String,
    default: "Pilih data",
  },
});

const emit = defineEmits(["update:modelValue"]);

const open = ref(false);
const search = ref("");
const wrapper = ref(null);

const selectedLabel = computed(
  () => props.options.find((o) => o.value === props.modelValue)?.label
);

const filteredOptions = computed(() =>
  props.options.filter((o) => o.label.toLowerCase().includes(search.value.toLowerCase()))
);

const toggle = () => {
  open.value = !open.value;
  search.value = "";
};

const select = (option) => {
  emit("update:modelValue", option.value);
  open.value = false;
  search.value = "";
};

const clear = () => {
  emit("update:modelValue", null);
  search.value = "";
};

const handleClickOutside = (e) => {
  if (wrapper.value && !wrapper.value.contains(e.target)) {
    open.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.12s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
