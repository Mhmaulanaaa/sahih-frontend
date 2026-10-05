<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { usePodkies } from "~/composables/landing/podkies/usePodkies";

const { data: videos, loading, error, fetchLanding } = usePodkies();

const showAll = ref(false);

const playingVideo = ref<string | null>(null);

const visibleVideos = computed(() => {
  return showAll.value ? videos.value : videos.value.slice(0, 4);
});

const playVideo = (id: string) => {
  playingVideo.value = id;
};

const getThumb = (id: string) => {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
};

const onThumbError = (e: Event, id: string) => {
  const img = e.target as HTMLImageElement;

  if (img.src.includes("maxresdefault")) {
    img.src = `https://img.youtube.com/vi/${id}/sddefault.jpg`;
  } else if (img.src.includes("sddefault")) {
    img.src = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  } else if (img.src.includes("hqdefault")) {
    img.src = `https://img.youtube.com/vi/${id}/mqdefault.jpg`;
  } else {
    img.src = "/images/thumb-placeholder.jpg";
  }
};

onMounted(() => {
  fetchLanding();
});
</script>

<template>
  <section class="relative overflow-hidden py-10">
    <div class="absolute inset-0 bg-gradient-to-b from-white via-[#e6f7f1]"></div>

    <div
      class="absolute left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-emerald-100/40 rounded-full blur-3xl"
    ></div>

    <div class="relative max-w-7xl mx-auto px-2">
      <div class="max-w-7xl mx-auto px-6">
        <!-- HEADER -->
        <div class="text-center mb-10 flex justify-center">
          <h1 class="text-4xl font-bold text-gray-900 md:text-4xl">Podkies</h1>
        </div>

        <!-- LOADING -->
        <div v-if="loading" class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="i in 4"
            :key="i"
            class="overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm"
          >
            <!-- Thumbnail Skeleton -->
            <div class="aspect-video animate-pulse bg-gray-200"></div>

            <!-- Content Skeleton -->
            <div class="p-4 space-y-3">
              <div class="h-3 w-20 rounded bg-gray-200 animate-pulse"></div>

              <div class="h-4 w-full rounded bg-gray-200 animate-pulse"></div>

              <div class="h-4 w-3/4 rounded bg-gray-200 animate-pulse"></div>

              <div class="h-3 w-40 rounded bg-gray-200 animate-pulse"></div>
            </div>
          </div>
        </div>

        <!-- ERROR -->
        <div v-else-if="error" class="py-12 text-center">
          <div class="text-red-500 text-sm">
            {{ error }}
          </div>

          <button
            type="button"
            class="mt-4 px-5 py-2 rounded-full bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition"
            @click="fetchLanding"
          >
            Coba Lagi
          </button>
        </div>

        <!-- EMPTY -->
        <div v-else-if="videos.length === 0" class="py-12 text-center text-gray-500">
          Belum ada podkies.
        </div>

        <!-- GRID -->
        <TransitionGroup
          v-else
          name="fade-slide"
          tag="div"
          class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <div
            v-for="video in visibleVideos"
            :key="video.podkies_id"
            class="rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-emerald-100 hover:shadow-[0_18px_40px_rgba(16,185,129,0.25)]"
          >
            <!-- VIDEO -->
            <div class="relative aspect-video">
              <!-- Thumbnail -->
              <template v-if="playingVideo !== video.id">
                <img
                  :src="getThumb(video.id)"
                  :alt="video.title"
                  class="w-full h-full object-cover bg-gray-200"
                  loading="lazy"
                  @error="onThumbError($event, video.id)"
                />

                <!-- Overlay -->
                <div
                  class="absolute inset-0 bg-black/10 flex items-center justify-center cursor-pointer"
                  @click="playVideo(video.id)"
                >
                  <div
                    class="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg text-red-600"
                  >
                    <i class="fa-brands fa-youtube text-2xl"></i>
                  </div>
                </div>
              </template>

              <!-- IFRAME -->
              <iframe
                v-else
                :src="`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1`"
                :title="video.title"
                class="w-full h-full"
                frameborder="0"
                allow="
                  accelerometer;
                  autoplay;
                  clipboard-write;
                  encrypted-media;
                  gyroscope;
                  picture-in-picture;
                "
                allowfullscreen
              ></iframe>
            </div>

            <!-- CONTENT -->
            <div class="p-4">
              <p class="mt-1 text-xs text-green-600 font-semibold">
                {{ video.episode }}
              </p>

              <h3 class="text-sm font-bold text-gray-900 line-clamp-2">
                {{ video.title }}
              </h3>

              <p class="mt-1 text-xs text-gray-500">
                {{ video.description }}
              </p>
            </div>
          </div>
        </TransitionGroup>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.45s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
