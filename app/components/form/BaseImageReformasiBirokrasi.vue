<template>
  <section
    class="relative bg-white rounded-3xl border border-emerald-100 shadow-sm overflow-hidden"
  >
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 lg:p-10">
      <!-- LEFT : MAIN IMAGE / CONTENT -->
      <div class="lg:col-span-9 space-y-6">
        <!-- Badge -->
        <div
          v-if="badge"
          class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold"
        >
          {{ badge }}
        </div>

        <!-- MAIN IMAGE GALLERY -->
        <div v-if="mainImages.length" class="gap-2">
          <div v-for="(img, index) in mainImages" :key="index" class="">
            <img
              :src="img"
              class="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              alt="Infografis Reformasi Birokrasi"
            />
          </div>
        </div>

        <!-- Slot tambahan -->
        <slot />
      </div>

      <!-- RIGHT : SIDE CARD -->
      <div class="lg:col-span-3">
        <div
          class="sticky top-24 bg-slate-50 rounded-2xl border border-slate-100 p-5 space-y-4 hover:shadow-md transition"
        >
          <img
            v-if="sideImage"
            :src="sideImage"
            alt="Side Image"
            class="w-full rounded-xl object-contain bg-white p-2"
          />

          <h4 class="font-semibold text-slate-800">
            {{ sideTitle }}
          </h4>

          <p class="text-sm text-slate-600">
            {{ sideDescription }}
          </p>

          <a
            v-if="sideActionText"
            :href="sideActionLink"
            target="_blank"
            class="inline-flex items-center justify-center w-full px-4 py-2 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition"
          >
            {{ sideActionText }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  badge: String,
  title: {
    type: String,
    required: true,
  },
  mainImages: {
    type: Array,
    default: () => [],
  },
  sideImage: String,
  sideTitle: String,
  sideDescription: String,
  sideActionText: String,
  sideActionLink: {
    type: String,
    default: "#",
  },
});
</script>
