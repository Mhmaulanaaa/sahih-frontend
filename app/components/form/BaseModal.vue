<template>
  <Transition name="modal">
    <div v-if="modelValue" class="fixed inset-0 z-50 flex items-center justify-center">
      <!-- BACKDROP -->
      <div class="absolute inset-0 bg-black/40 backdrop-blur-sm" @click="close" />

      <!-- MODAL BOX -->
      <div class="relative z-10 w-full max-w-lg bg-white rounded-2xl shadow-xl p-6 mx-4">
        <!-- HEADER -->
        <div v-if="$slots.header" class="mb-4 flex justify-between items-center">
          <slot name="header" />

          <button class="text-slate-400 hover:text-slate-600 text-xl" @click="close">
            ✕
          </button>
        </div>

        <!-- BODY -->
        <div class="mb-6">
          <slot />
        </div>

        <!-- FOOTER -->
        <div v-if="$slots.footer" class="flex justify-end gap-3">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const close = () => {
  emit("update:modelValue", false);
};

// Close modal with ESC
const handleKeydown = (e) => {
  if (e.key === "Escape") close();
};

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);
});
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.25s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
