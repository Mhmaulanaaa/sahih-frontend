<template>
  <section class="relative overflow-hidden py-10">
    <!-- BACKGROUND -->
    <div class="absolute inset-0 bg-gradient-to-b from-white via-[#e6f7f1] to-white" />

    <div
      class="absolute left-1/2 top-20 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-emerald-100/40 blur-3xl"
    />

    <div class="relative mx-auto max-w-7xl px-6">
      <!-- HEADER -->
      <div class="mb-10 text-center">
        <h2 class="text-3xl font-bold text-gray-900 lg:text-4xl">Inovasi</h2>

        <p class="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-500">
          Berbagai inovasi unggulan RSUD Dr. Soetomo dalam meningkatkan pelayanan dan
          memberikan manfaat bagi masyarakat.
        </p>
      </div>

      <!-- LOADING -->
      <div v-if="loading" class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="index in 4"
          :key="index"
          class="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm"
        >
          <!-- IMAGE SKELETON -->
          <div class="h-56 animate-pulse bg-gray-200" />

          <!-- CONTENT SKELETON -->
          <div class="space-y-3 p-6">
            <div class="mx-auto h-5 w-3/4 animate-pulse rounded bg-gray-200" />

            <div class="mx-auto h-4 w-full animate-pulse rounded bg-gray-100" />

            <div class="mx-auto h-4 w-2/3 animate-pulse rounded bg-gray-100" />

            <div class="mx-auto mt-4 h-3 w-24 animate-pulse rounded bg-emerald-100" />
          </div>
        </div>
      </div>

      <!-- ERROR -->
      <div
        v-else-if="error"
        class="rounded-3xl border border-red-100 bg-red-50 p-8 text-center"
      >
        <i class="bi bi-exclamation-circle text-3xl text-red-500" />

        <p class="mt-3 text-sm text-red-600">
          {{ error }}
        </p>
      </div>

      <!-- EMPTY -->
      <div
        v-else-if="!inovasi.length"
        class="rounded-3xl border border-gray-200 bg-white p-10 text-center"
      >
        <i class="bi bi-lightbulb text-4xl text-emerald-500" />

        <p class="mt-3 text-gray-500">Belum ada data inovasi.</p>
      </div>

      <!-- GRID -->
      <TransitionGroup
        v-else
        name="fade-down"
        tag="div"
        class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
      >
        <NuxtLink
          v-for="item in inovasi"
          :key="item.id"
          :to="`/landing/inovasi/${item.id}`"
          class="group block overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-emerald-100 hover:shadow-[0_18px_40px_rgba(16,185,129,0.25)]"
        >
          <!-- IMAGE -->
          <div class="relative overflow-hidden">
            <img
              v-if="item.thumbnail"
              :src="item.thumbnail"
              :alt="item.title"
              loading="lazy"
              class="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div
              v-else
              class="flex h-56 w-full items-center justify-center bg-gradient-to-br from-emerald-50 to-green-100"
            >
              <i class="bi bi-lightbulb text-5xl text-emerald-400" />
            </div>

            <!-- OVERLAY -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
            />

            <!-- DETAIL ICON -->
            <div
              class="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-emerald-600 opacity-0 shadow-sm backdrop-blur transition-all duration-300 group-hover:opacity-100"
            >
              <i class="bi bi-arrow-up-right" />
            </div>
          </div>

          <!-- CONTENT -->
          <div class="p-6 text-center">
            <!-- TITLE -->
            <h3
              class="line-clamp-2 min-h-[48px] text-base font-bold text-gray-900 transition group-hover:text-emerald-700"
            >
              {{ item.title }}
            </h3>

            <!-- DESCRIPTION -->
            <p
              v-if="item.description"
              class="mt-3 line-clamp-3 min-h-[63px] text-sm leading-relaxed text-gray-500"
            >
              {{ htmlToPlainText(item.description) }}
            </p>

            <p
              v-else
              class="mt-3 min-h-[63px] text-sm italic leading-relaxed text-gray-400"
            >
              Belum ada deskripsi.
            </p>

            <!-- DETAIL LINK -->
            <div
              class="mt-4 inline-flex items-center text-xs font-semibold text-emerald-600 transition group-hover:text-emerald-700"
            >
              Lihat Detail

              <i
                class="bi bi-arrow-right ml-1 transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>
          </div>
        </NuxtLink>
      </TransitionGroup>

      <!-- BUTTON -->
      <div class="mt-12 text-center">
        <NuxtLink
          to="/landing/inovasi"
          class="inline-flex items-center gap-2 rounded-full border border-emerald-600 px-8 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-600 hover:text-white"
        >
          Semua Inovasi

          <i class="bi bi-arrow-right" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useInovasi } from "~/composables/landing/inovasi/useInovasi";

const { data: inovasi, loading, error, fetchLanding } = useInovasi();

const htmlToPlainText = (html: string | null | undefined) => {
  if (!html) return "";

  if (import.meta.server) {
    return html
      .replace(/<br\s*\/?>/gi, " ")
      .replace(/<\/p>/gi, " ")
      .replace(/<\/h[1-6]>/gi, " ")
      .replace(/<[^>]*>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  const parser = new DOMParser();

  const document = parser.parseFromString(html, "text/html");

  return document.body.textContent?.replace(/\s+/g, " ").trim() ?? "";
};
onMounted(() => {
  fetchLanding();
});
</script>

<style scoped>
.fade-down-enter-active,
.fade-down-leave-active {
  transition: all 0.45s ease;
}

.fade-down-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-down-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
