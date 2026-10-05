<template>
  <section class="relative isolate w-full overflow-hidden py-0">
    <!-- BACKGROUND GRADIENT -->
    <div class="absolute inset-0 bg-gradient-to-b from-[#] via-[#e6f7f1]"></div>

    <!-- GREEN GLOW -->
    <div
      class="absolute left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-[#]/40 rounded-full blur-3xl"
    ></div>

    <!-- CONTENT -->
    <div class="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- HEADER -->
      <div class="mb-8 w-full text-center sm:mb-10">
        <h2 class="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">Agenda</h2>

        <p class="mx-auto mt-2 max-w-2xl px-2 text-sm text-gray-600 sm:mt-3 sm:text-base">
          Jadwal kegiatan, pelatihan, dan agenda resmi RSUD Dr. Soetomo
        </p>
      </div>

      <!-- AGENDA -->
      <div class="w-full min-w-0 overflow-hidden">
        <TransitionGroup
          name="fade-down"
          tag="div"
          class="grid w-full min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8"
        >
          <div
            v-for="(item, index) in visibleAgenda"
            :key="`${item.title}-${index}`"
            class="group min-w-0 w-full overflow-hidden"
          >
            <!-- CARD WRAPPER -->
            <div
              class="grid w-full min-w-0 grid-cols-[56px_minmax(0,1fr)] gap-2.5 sm:grid-cols-[72px_minmax(0,1fr)] sm:gap-3.5 lg:grid-cols-[85px_minmax(0,1fr)]"
            >
              <!-- DATE -->
              <div
                class="flex h-full min-h-[150px] min-w-0 w-full flex-col items-center justify-center rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-emerald-300 group-hover:shadow-md sm:min-h-[170px] sm:rounded-2xl"
              >
                <div
                  class="text-xl font-bold leading-none text-emerald-700 sm:text-2xl lg:text-3xl"
                >
                  {{ item.day }}
                </div>

                <div
                  class="mt-1 text-[9px] font-bold uppercase tracking-wide text-emerald-600 sm:text-[10px] lg:text-xs"
                >
                  {{ item.month }}
                </div>

                <div class="mt-0.5 text-[9px] text-gray-500 sm:text-[10px] lg:text-xs">
                  {{ item.year }}
                </div>
              </div>

              <!-- CONTENT -->
              <div
                class="min-h-[150px] min-w-0 w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_5px_18px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:border-emerald-100 group-hover:shadow-[0_12px_28px_rgba(16,185,129,0.16)] sm:min-h-[170px] sm:rounded-2xl"
              >
                <div class="flex h-full min-w-0 w-full flex-col p-3 sm:p-4 lg:p-5">
                  <!-- BADGE -->
                  <div class="w-full min-w-0">
                    <span
                      class="inline-flex max-w-full rounded-md px-2 py-0.5 text-[9px] font-semibold whitespace-nowrap sm:text-[10px]"
                      :class="
                        item.status === 'Penting'
                          ? 'bg-red-100 text-red-700'
                          : 'bg-amber-100 text-amber-700'
                      "
                    >
                      {{ item.status }}
                    </span>
                  </div>

                  <!-- TITLE -->
                  <h3
                    class="mt-2 min-w-0 w-full break-words text-sm font-bold leading-snug text-gray-900 transition-colors group-hover:text-emerald-600 sm:text-base lg:text-lg"
                  >
                    {{ item.title }}
                  </h3>

                  <!-- DESCRIPTION -->
                  <p
                    class="mt-2 min-w-0 w-full break-words text-[11px] leading-relaxed text-gray-600 sm:text-xs lg:text-sm"
                  >
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TransitionGroup>
      </div>

      <!-- BUTTON -->
      <div class="mt-8 w-full text-center sm:mt-10">
        <a
          href="https://rsudrsoetomo.jatimprov.go.id/sicerdas/"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex max-w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-emerald-700 sm:px-8 sm:py-3 sm:text-sm"
        >
          <span>Website SICERDAS</span>
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
const showAll = ref(false);

const visibleAgenda = computed(() => (showAll.value ? agenda : agenda.slice(0, 3)));

const toggleShowAgenda = () => {
  showAll.value = !showAll.value;
};
const agenda = [
  {
    day: "28",
    month: "Jan",
    year: "2025",
    status: "Pelatihan",
    title: "Pelatihan Peningkatan Kompetensi Sistem Informasi Rumah Sakit",
    description:
      "Kegiatan edukasi bagi seluruh unit kerja mengenai penerapan keamanan informasi dan perlindungan data pasien sesuai standar nasional.",
  },
  {
    day: "05",
    month: "Feb",
    year: "2025",
    status: "Pendidikan",
    title: "Pendidikan dan Sosialisasi Keamanan Data dan Privasi Pasien",
    description:
      "Kegiatan edukasi bagi seluruh unit kerja mengenai penerapan keamanan informasi dan perlindungan data pasien sesuai standar nasional.",
  },
  {
    day: "12",
    month: "Mar",
    year: "2025",
    status: "Pelatihan",
    title: "Pelatihan Penggunaan Aplikasi SIMRS Versi Terbaru",
    description:
      "Pelatihan teknis bagi tenaga medis dan administrasi terkait fitur dan pembaruan terbaru pada aplikasi SIMRS rumah sakit.",
  },
];
</script>

<style scoped>
.fade-down-enter-active,
.fade-down-leave-active {
  transition: all 0.45s ease;
}

.fade-down-enter-from {
  opacity: 0;
  transform: translateY(24px);
}

.fade-down-leave-to {
  opacity: 0;
  transform: translateY(24px);
}
</style>
