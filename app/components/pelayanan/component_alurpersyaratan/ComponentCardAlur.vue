<script setup lang="ts">
import { ref } from "vue";

const { asset } = useAsset();

const props = defineProps<{
  image: string;
}>();

const scale = ref(1);

const position = ref({
  x: 0,
  y: 0,
});

const isDragging = ref(false);

const start = ref({
  x: 0,
  y: 0,
});

const zoomIn = () => {
  scale.value = Math.min(scale.value + 0.2, 2.5);
};

const zoomOut = () => {
  scale.value = Math.max(scale.value - 0.2, 1);

  if (scale.value === 1) {
    position.value = {
      x: 0,
      y: 0,
    };
  }
};

const resetZoom = () => {
  scale.value = 1;

  position.value = {
    x: 0,
    y: 0,
  };
};

const startDrag = (e: MouseEvent) => {
  if (scale.value <= 1) return;

  isDragging.value = true;

  start.value = {
    x: e.clientX - position.value.x,
    y: e.clientY - position.value.y,
  };
};

const onDrag = (e: MouseEvent) => {
  if (!isDragging.value) return;

  position.value = {
    x: e.clientX - start.value.x,
    y: e.clientY - start.value.y,
  };
};

const stopDrag = () => {
  isDragging.value = false;
};
</script>

<template>
  <div
    class="relative bg-white rounded-[28px] shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden mb-8"
  >
    <!-- Header -->
    <div class="px-6 py-5 bg-gradient-to-r from-emerald-50 via-white to-emerald-50">
      <h3 class="text-lg font-bold text-emerald-700">Alur Pelayanan</h3>

      <p class="text-sm text-gray-500">Prosedur dan tahapan layanan</p>
    </div>

    <!-- Image -->
    <div class="p-6">
      <div
        class="relative overflow-hidden rounded-2xl ring-1 ring-gray-200"
        @mousedown="startDrag"
        @mousemove="onDrag"
        @mouseup="stopDrag"
        @mouseleave="stopDrag"
      >
        <!-- Floating Zoom Buttons -->
        <div
          class="absolute top-3 right-3 z-10 flex gap-1 bg-white/90 backdrop-blur rounded-xl"
        >
          <button
            type="button"
            @click.stop="zoomIn"
            class="w-9 h-9 flex items-center justify-center rounded-lg text-emerald-700 hover:bg-emerald-50"
          >
            +
          </button>

          <button
            type="button"
            @click.stop="zoomOut"
            class="w-9 h-9 flex items-center justify-center rounded-lg text-emerald-700 hover:bg-emerald-50"
          >
            −
          </button>

          <button
            type="button"
            @click.stop="resetZoom"
            class="w-9 h-9 flex items-center justify-center rounded-lg text-emerald-700 hover:bg-emerald-50"
          >
            ⟳
          </button>
        </div>

        <!-- Image -->
        <img
          :src="asset(props.image)"
          alt="Alur Pelayanan"
          class="w-full object-contain select-none transition-transform duration-200"
          :class="scale > 1 ? 'cursor-grab active:cursor-grabbing' : ''"
          :style="{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
          }"
          draggable="false"
        />
      </div>
    </div>
  </div>
</template>
