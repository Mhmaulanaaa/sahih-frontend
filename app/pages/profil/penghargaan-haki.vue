<template>
  <section class="bg-gradient-to- from-emerald-50 via-white to-emerald-50 pt-20">
    <!-- BREADCRUMB -->
    <div class="max-w-9xl mx-auto px-6 mt-15">
      <Breadcrumb />
    </div>

    <!-- HERO -->
    <div class="max-w-9xl mx-auto px-6 py-5">
      <BaseHeroPage title="Penghargaan dan HAKI" logo="/images/logo/logo_white.png" />
    </div>

    <!-- TABS -->
    <div class="max-w-9xl mx-auto px-4 sm:px-6 -mt-1">
      <div class="bg-white rounded-2xl shadow-lg p-4 sm:p-5">
        <div
          class="relative flex justify-start sm:justify-center gap-6 sm:gap-8 overflow-x-auto sm:overflow-visible whitespace-nowrap scrollbar-hide"
        >
          <button
            v-for="(tab, index) in tabs"
            :key="tab.key"
            ref="tabRefs"
            @click="setActiveTab(tab.key, index)"
            class="px-2 py-3 font-light transition-colors duration-300 whitespace-nowrap"
            :class="
              activeTab === tab.key
                ? 'text-emerald-600'
                : 'text-gray-500 hover:text-emerald-600'
            "
          >
            {{ tab.label }}
          </button>

          <!-- MOVING UNDERLINE -->
          <span
            class="absolute bottom-0 h-[3px] bg-emerald-600 transition-all duration-300"
            :style="underlineStyle"
          ></span>
        </div>
      </div>
    </div>

    <!-- CONTENT -->
    <div class="max-w-9xl mx-auto px-6 py-14">
      <transition name="fade" mode="out-in">
        <component
          :is="tabComponent"
          :key="activeTab"
          @preview="openModal"
          class="bg-white rounded-3xl shadow-lg p-10 -mt-10"
        />
      </transition>
    </div>

    <!-- MODAL -->
    <transition name="fade">
      <!-- MODAL -->
      <div
        v-if="selectedImage"
        class="fixed inset-0 z-[999] bg-black/30 flex items-center justify-center px-4 sm:px-6"
        @click.self="closeModal"
      >
        <div
          class="bg-white w-full sm:w-[90vw] md:w-[70vw] lg:w-[40vw] h-[96vh] rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex flex-col overflow-hidden"
        >
          <!-- CONTENT -->
          <div
            class="flex-1 flex items-center justify-center bg-white overflow-hidden"
            @wheel.prevent="onWheel"
            @mousemove="onDrag"
            @mouseup="stopDrag"
            @mouseleave="stopDrag"
            @touchmove.prevent="onDrag"
            @touchend="stopDrag"
          >
            <div
              class="bg-white aspect-[210/297] w-[80vw] sm:w-[420px] lg:w-[500px] rounded-md border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.06)] flex items-center justify-center cursor-grab active:cursor-grabbing transition-transform duration-200 ease-out"
              :style="{
                transform: `translate(${posX}px, ${posY}px) scale(${zoom})`,
              }"
              @mousedown.prevent="startDrag"
              @touchstart.prevent="startDrag"
            >
              <NuxtImg
                :src="selectedImage"
                fit="contain"
                loading="eager"
                class="w-full h-full select-none pointer-events-none"
              />
            </div>
          </div>

          <!-- FOOTER -->
          <div class="px-6 py-4 flex justify-between items-center">
            <!-- ZOOM CONTROLS -->
            <div class="flex items-center gap-2 backdrop-blur px-2 py-1 rounded-xl">
              <button
                @click="zoomOut"
                class="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 font-light hover:bg-gray-50 active:scale-95 transition"
              >
                −
              </button>

              <button
                @click="resetTransform"
                class="px-3 h-9 rounded-lg border border-gray-200 text-gray-500 text-xs font-light hover:bg-gray-50 active:scale-95 transition"
              >
                Reset
              </button>

              <button
                @click="zoomIn"
                class="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 font-light hover:bg-gray-50 active:scale-95 transition"
              >
                +
              </button>
            </div>

            <!-- CLOSE -->
            <button
              @click="closeModal"
              class="px-5 py-2 rounded-xl bg-white border border-gray-200 text-gray-600 text-sm font-light hover:bg-gray-50 active:scale-95 transition"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </transition>
    <!-- End Modal -->
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick, watch } from "vue";
import Breadcrumb from "~/components/layout/Breadcrumb.vue";
import Penghargaan from "~/components/profil/tabs_penghargaanhaki/Penghargaan.vue";
import Haki from "~/components/profil/tabs_penghargaanhaki/Haki.vue";
import BaseHeroPage from "~/components/form/BaseHeroPage.vue";

useHead({
  title: "Penghargaan dan Haki",
});

definePageMeta({
  breadcrumb: [{ label: "Beranda", to: "/" }, { label: "Profil - Penghargaan dan HAKI" }],
});

/* ================= TAB ================= */
const tabs = [
  { key: "penghargaan", label: "Penghargaan" },
  { key: "haki", label: "HAKI" },
] as const;

const activeTab = ref<typeof tabs[number]["key"]>("penghargaan");

/* ================= REFS ================= */
const tabRefs = ref<(HTMLElement | null)[]>([]);
const underlineStyle = ref({ width: "0px", left: "0px" });

const tabComponent = computed(() =>
  activeTab.value === "penghargaan" ? Penghargaan : Haki
);

/* ================= METHODS ================= */
const moveUnderline = (index: number) => {
  const el = tabRefs.value[index];
  if (!el || !(el instanceof HTMLElement)) return;

  underlineStyle.value = {
    width: `${el.offsetWidth}px`,
    left: `${el.offsetLeft}px`,
  };
};

const setActiveTab = async (key: any, index: number) => {
  activeTab.value = key;
  await nextTick();
  moveUnderline(index);
};

/* ================= MODAL ================= */
const selectedImage = ref<string | null>(null);

const openModal = (img: string) => {
  selectedImage.value = img;
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  selectedImage.value = null;
  document.body.style.overflow = "";
};

const zoom = ref(1);

const zoomIn = () => {
  zoom.value = Math.min(zoom.value + 0.2, 3);
};

const zoomOut = () => {
  zoom.value = Math.max(zoom.value - 0.2, 0.6);
};

const getPoint = (e: MouseEvent | TouchEvent) => {
  if (e instanceof MouseEvent) {
    return { x: e.clientX, y: e.clientY };
  }

  if (e.touches.length > 0 && e.touches[0]) {
    return {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  }

  return null;
};

const onWheel = (e: WheelEvent) => {
  if (e.deltaY < 0) zoomIn();
  else zoomOut();
};

const posX = ref(0);
const posY = ref(0);
const isDragging = ref(false);
const startX = ref(0);
const startY = ref(0);

const startDrag = (e: MouseEvent | TouchEvent) => {
  const point = getPoint(e);
  if (!point) return;

  isDragging.value = true;
  startX.value = point.x - posX.value;
  startY.value = point.y - posY.value;
};

const onDrag = (e: MouseEvent | TouchEvent) => {
  if (!isDragging.value) return;

  const point = getPoint(e);
  if (!point) return;

  posX.value = point.x - startX.value;
  posY.value = point.y - startY.value;
};

const stopDrag = () => {
  isDragging.value = false;
};

const resetTransform = () => {
  zoom.value = 1;
  posX.value = 0;
  posY.value = 0;
};

// reset zoom setiap modal dibuka
watch(
  () => selectedImage.value,
  () => {
    resetTransform();
  }
);
/* ================= END MODAL ================= */

/* ================= INIT ================= */
onMounted(async () => {
  await nextTick();
  moveUnderline(0);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Style Modal */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
