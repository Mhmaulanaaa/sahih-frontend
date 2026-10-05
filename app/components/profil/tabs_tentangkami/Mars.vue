<template>
  <div class="space-y-14">
    <!-- VIDEO GRID -->
    <div class="grid grid-cols-1 md:grid-cols-1 gap-10 max-w-7xl mx-auto px-4">
      <div v-for="(item, index) in videos" :key="index" class="space-y-4">
        <!-- TITLE -->
        <h3 class="text-lg sm:text-xl font-bold text-gray-900 text-center">
          {{ item.label }}
        </h3>

        <!-- VIDEO CARD -->
        <div
          class="bg-black rounded-3xl overflow-hidden shadow-xl mx-auto w-full max-w-3xl"
        >
          <div class="relative aspect-video">
            <!-- THUMBNAIL -->
            <template v-if="!item.isPlaying">
              <img
                :src="item.thumbnail"
                class="w-full h-full object-cover"
                loading="lazy"
              />

              <!-- PLAY OVERLAY -->
              <div
                class="absolute inset-0 bg-black/10 flex items-center justify-center cursor-pointer transition hover:bg-black/40"
                @click="item.isPlaying = true"
              >
                <div
                  class="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg text-red-600"
                >
                  <i class="fa-brands fa-youtube text-4xl"></i>
                </div>
              </div>
            </template>

            <!-- IFRAME -->
            <iframe
              v-else
              :src="item.embed + '&autoplay=1'"
              class="w-full h-full"
              frameborder="0"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const videos = reactive([
  {
    label: "Mars RSUD Dr. Soetomo",
    id: "ephnbSa-raM",
    embed: "https://www.youtube-nocookie.com/embed/ephnbSa-raM?rel=0",
    thumbnail: "https://img.youtube.com/vi/ephnbSa-raM/hqdefault.jpg",
    isPlaying: false,
  },
  {
    label: "Hymne RSUD Dr. Soetomo",
    id: "uNO-M8jcLv0",
    embed: "https://www.youtube-nocookie.com/embed/uNO-M8jcLv0?rel=0",
    thumbnail: "https://img.youtube.com/vi/uNO-M8jcLv0/hqdefault.jpg",
    isPlaying: false,
  },
]);
</script>
