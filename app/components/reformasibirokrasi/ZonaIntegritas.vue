<template>
  <section
    class="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
  >
    <!-- =====================================================
         DECORATIVE BACKGROUND
    ====================================================== -->
    <div
      class="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-sky-50 blur-3xl"
    ></div>

    <div
      class="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-emerald-50 blur-3xl"
    ></div>

    <div
      class="relative grid grid-cols-1 gap-8 p-5 sm:p-7 lg:grid-cols-12 lg:gap-10 lg:p-10"
    >
      <!-- =====================================================
           LEFT : CONTENT
      ====================================================== -->
      <div class="lg:col-span-9">
        <!-- =====================================================
             HEADER
        ====================================================== -->

        <!-- =====================================================
             PENILAIAN
        ====================================================== -->
        <div class="mb-8">
          <div
            v-if="badge"
            class="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3.5 py-2 text-xs font-bold tracking-wide text-emerald-700 sm:text-sm"
          >
            <span class="h-2 w-2 rounded-full bg-emerald-500"></span>
            {{ badge }}
          </div>

          <!-- TITLE -->
          <h1
            class="text-3xl font-extrabold leading-tight tracking-tight text-emerald-700 sm:text-4xl lg:text-5xl"
          >
            PENILAIAN
          </h1>

          <!-- DECORATIVE LINE -->
          <div class="mt-5 flex items-center gap-2">
            <div class="h-1 w-16 rounded-full bg-emerald-500"></div>
            <div class="h-1 w-5 rounded-full bg-emerald-200"></div>
            <div class="h-1 w-2 rounded-full bg-emerald-100"></div>
          </div>

          <p class="mt-3 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
            Penetapan sebagai Wilayah Bebas dari Korupsi berdasarkan penilaian yang
            dilakukan oleh Tim Penilai Nasional (TPN), yang terdiri dari:
            <strong class="font-extrabold text-slate-900">
              KemenpanRB, KPK, dan Ombudsman RI.
            </strong>
          </p>
        </div>

        <!-- =====================================================
             STRATEGI PEMBANGUNAN ZI
        ====================================================== -->
        <div class="mb-10">
          <div
            v-if="badge"
            class="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3.5 py-2 text-xs font-bold tracking-wide text-emerald-700 sm:text-sm"
          >
            <span class="h-2 w-2 rounded-full bg-emerald-500"></span>
            {{ badge }}
          </div>

          <!-- TITLE -->
          <h1
            class="text-3xl font-extrabold leading-tight tracking-tight text-emerald-700 sm:text-4xl lg:text-5xl"
          >
            STRATEGI PEMBANGUNAN ZI
          </h1>

          <!-- DECORATIVE LINE -->
          <div class="mt-5 flex items-center gap-2">
            <div class="h-1 w-16 rounded-full bg-emerald-500"></div>
            <div class="h-1 w-5 rounded-full bg-emerald-200"></div>
            <div class="h-1 w-2 rounded-full bg-emerald-100"></div>
          </div>

          <ul class="mt-3 space-y-2 text-sm leading-6 text-slate-700 sm:text-base">
            <li class="flex gap-2">
              <span class="font-bold text-slate-900">•</span>
              <span> Komitmen pimpinan dan semua karyawan </span>
            </li>

            <li class="flex gap-2">
              <span class="font-bold text-slate-900">•</span>
              <span> Pelayanan yang mudah, cepat, dan transparan </span>
            </li>

            <li class="flex gap-2">
              <span class="font-bold text-slate-900">•</span>
              <span> Program/inovasi yang menyentuh masyarakat </span>
            </li>

            <li class="flex gap-2">
              <span class="font-bold text-slate-900">•</span>
              <span> Monitoring dan evaluasi yang berkelanjutan </span>
            </li>

            <li class="flex gap-2">
              <span class="font-bold text-slate-900">•</span>
              <span> Manajemen media </span>
            </li>
          </ul>
        </div>

        <!-- =====================================================
             PROSES PEMBANGUNAN ZI
        ====================================================== -->
        <div
          class="relative overflow-hidden rounded-3xl border border-slate-100 bg-slate-50/70 p-5 sm:p-7"
        >
          <!-- BACKGROUND DECORATION -->
          <div class="pointer-events-none absolute inset-0 opacity-30">
            <div class="absolute left-1/4 top-0 h-full w-px bg-slate-200"></div>

            <div class="absolute left-1/2 top-0 h-full w-px bg-slate-200"></div>

            <div class="absolute left-3/4 top-0 h-full w-px bg-slate-200"></div>
          </div>

          <div class="relative">
            <!-- TITLE -->
            <div class="mb-8 text-center">
              <h2
                class="text-xl font-extrabold uppercase leading-tight text-slate-900 sm:text-2xl lg:text-3xl"
              >
                Proses Pembangunan Zona
                <span class="block"> Integritas </span>
              </h2>
            </div>

            <!-- =================================================
     DESKTOP TIMELINE
================================================== -->
            <div class="hidden md:block">
              <div class="relative">
                <!-- =================================================
         TOP CARDS
    ================================================== -->
                <div class="grid grid-cols-5 items-stretch gap-3">
                  <!-- 01 -->
                  <div class="flex min-h-[155px] flex-col rounded-2xl bg-blue-100 p-4">
                    <!-- TITLE -->
                    <h3
                      class="min-h-[42px] translate-y-5 text-sm font-extrabold leading-5 text-red-600 lg:text-base"
                    >
                      Pencanangan ZI
                    </h3>

                    <!-- CONTENT -->
                    <ul
                      class="mt-3 flex-1 list-disc space-y-1 pl-4 text-xs leading-5 text-slate-700 lg:text-[13px]"
                    >
                      <li>Penandatanganan pakta integritas</li>
                      <li>Pernyataan komitmen</li>
                    </ul>
                  </div>

                  <!-- 02 EMPTY -->
                  <div></div>

                  <!-- 03 -->
                  <div class="flex min-h-[155px] flex-col rounded-2xl bg-blue-100 p-4">
                    <!-- TITLE -->

                    <h3
                      class="min-h-[42px] translate-y-5 text-sm font-extrabold leading-5 text-emerald-600 lg:text-base"
                    >
                      Pengusulan ZI
                    </h3>

                    <!-- CONTENT -->
                    <ul
                      class="mt-3 flex-1 list-disc space-y-1 pl-4 text-xs leading-5 text-slate-700 lg:text-[13px]"
                    >
                      <li>Penilaian mandiri oleh TPI</li>

                      <li>Pengusulan ke Kementerian PANRB</li>
                    </ul>
                  </div>

                  <!-- 04 EMPTY -->
                  <div></div>

                  <!-- 05 -->
                  <div class="flex min-h-[155px] flex-col rounded-2xl bg-blue-100 p-4">
                    <!-- TITLE -->
                    <h3
                      class="min-h-[42px] translate-y-5 text-sm font-extrabold leading-5 text-orange-600 lg:text-base"
                    >
                      Penetapan WBK/WBBM
                    </h3>

                    <!-- CONTENT -->
                    <ul
                      class="mt-3 flex-1 list-disc space-y-1 pl-4 text-xs leading-5 text-slate-700 lg:text-[13px]"
                    >
                      <li>Panel TPN</li>

                      <li>Kementerian PAN RB bersama KPK dan Ombudsman</li>

                      <li>Menetapkan bersama</li>
                    </ul>
                  </div>
                </div>

                <!-- =================================================
                    MAIN ARROW
                ================================================== -->
                <div class="relative z-10 my-0 h-12">
                  <!-- ARROW BODY -->
                  <div class="absolute left-0 right-8 top-0 h-12 bg-indigo-600"></div>

                  <!-- ARROW HEAD -->
                  <div
                    class="absolute right-0 top-0 h-0 w-0 border-b-[24px] border-l-[28px] border-t-[24px] border-b-transparent border-l-indigo-600 border-t-transparent"
                  ></div>

                  <!-- CIRCLES -->
                  <div
                    class="absolute inset-x-0 top-1/2 grid -translate-y-1/2 grid-cols-5"
                  >
                    <!-- 01 -->
                    <div class="flex justify-center">
                      <span
                        class="h-6 w-6 rounded-full border-2 border-white bg-orange-400 shadow-sm"
                      ></span>
                    </div>

                    <!-- 02 -->
                    <div class="flex justify-center">
                      <span
                        class="h-6 w-6 rounded-full border-2 border-white bg-slate-400 shadow-sm"
                      ></span>
                    </div>

                    <!-- 03 -->
                    <div class="flex justify-center">
                      <span
                        class="h-6 w-6 rounded-full border-2 border-white bg-yellow-400 shadow-sm"
                      ></span>
                    </div>

                    <!-- 04 -->
                    <div class="flex justify-center">
                      <span
                        class="h-6 w-6 rounded-full border-2 border-white bg-sky-400 shadow-sm"
                      ></span>
                    </div>

                    <!-- 05 -->
                    <div class="flex justify-center">
                      <span
                        class="h-6 w-6 rounded-full border-2 border-white bg-lime-500 shadow-sm"
                      ></span>
                    </div>
                  </div>
                </div>

                <!-- =================================================
                    BOTTOM CARDS
                ================================================== -->
                <div class="grid grid-cols-5 items-stretch gap-3">
                  <!-- 01 EMPTY -->
                  <div></div>

                  <!-- 02 -->
                  <div class="flex min-h-[155px] flex-col rounded-2xl bg-blue-100 p-4">
                    <!-- TITLE -->
                    <h3
                      class="min-h-[42px] translate-y-5 text-sm font-extrabold leading-5 text-sky-500 lg:text-base"
                    >
                      Pembangunan ZI
                    </h3>

                    <!-- CONTENT -->
                    <ul
                      class="mt-3 flex-1 list-disc space-y-1 pl-4 text-xs leading-5 text-slate-700 lg:text-[13px]"
                    >
                      <li>Menetapkan unit kerja</li>

                      <li>Membangun dan melakukan mondev atas pembangunan</li>
                    </ul>
                  </div>

                  <!-- 03 EMPTY -->
                  <div></div>

                  <!-- 04 -->
                  <div class="flex min-h-[155px] flex-col rounded-2xl bg-blue-100 p-4">
                    <!-- TITLE -->
                    <h3
                      class="min-h-[42px] translate-y-5 text-sm font-extrabold leading-5 text-indigo-600 lg:text-base"
                    >
                      Review oleh TPN
                    </h3>

                    <!-- CONTENT -->
                    <ul
                      class="mt-3 flex-1 list-disc space-y-1 pl-4 text-xs leading-5 text-slate-700 lg:text-[13px]"
                    >
                      <li>Verifikasi di lapangan</li>

                      <li>Survey oleh BPS</li>
                    </ul>
                  </div>

                  <!-- 05 EMPTY -->
                  <div></div>
                </div>
              </div>
            </div>

            <!-- =================================================
     MOBILE TIMELINE
================================================== -->
            <div class="md:hidden">
              <div class="relative space-y-4">
                <!-- VERTICAL LINE -->
                <div class="absolute bottom-5 left-5 top-5 w-0.5 bg-indigo-500"></div>

                <!-- =================================================
         01
    ================================================== -->
                <div class="relative flex gap-4">
                  <div
                    class="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-400 text-xs font-bold text-white ring-4 ring-slate-50"
                  >
                    01
                  </div>

                  <div class="flex-1 rounded-2xl bg-blue-100 p-4">
                    <h3 class="font-extrabold leading-5 text-red-600">Pencanangan ZI</h3>

                    <ul
                      class="mt-3 list-disc space-y-1 pl-4 text-xs leading-5 text-slate-700"
                    >
                      <li>Penandatanganan pakta integritas</li>

                      <li>Pernyataan komitmen</li>
                    </ul>
                  </div>
                </div>

                <!-- =================================================
         02
    ================================================== -->
                <div class="relative flex gap-4">
                  <div
                    class="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-400 text-xs font-bold text-white ring-4 ring-slate-50"
                  >
                    02
                  </div>

                  <div class="flex-1 rounded-2xl bg-blue-100 p-4">
                    <h3 class="font-extrabold leading-5 text-sky-500">Pembangunan ZI</h3>

                    <ul
                      class="mt-3 list-disc space-y-1 pl-4 text-xs leading-5 text-slate-700"
                    >
                      <li>Menetapkan unit kerja</li>

                      <li>Membangun dan melakukan mondev atas pembangunan</li>
                    </ul>
                  </div>
                </div>

                <!-- =================================================
         03
    ================================================== -->
                <div class="relative flex gap-4">
                  <div
                    class="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-white ring-4 ring-slate-50"
                  >
                    03
                  </div>

                  <div class="flex-1 rounded-2xl bg-blue-100 p-4">
                    <h3 class="font-extrabold leading-5 text-emerald-600">
                      Pengusulan ZI
                    </h3>

                    <ul
                      class="mt-3 list-disc space-y-1 pl-4 text-xs leading-5 text-slate-700"
                    >
                      <li>Penilaian mandiri oleh TPI</li>

                      <li>Pengusulan ke Kementerian PANRB</li>
                    </ul>
                  </div>
                </div>

                <!-- =================================================
         04
    ================================================== -->
                <div class="relative flex gap-4">
                  <div
                    class="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-400 text-xs font-bold text-white ring-4 ring-slate-50"
                  >
                    04
                  </div>

                  <div class="flex-1 rounded-2xl bg-blue-100 p-4">
                    <h3 class="font-extrabold leading-5 text-indigo-600">
                      Review oleh TPN
                    </h3>

                    <ul
                      class="mt-3 list-disc space-y-1 pl-4 text-xs leading-5 text-slate-700"
                    >
                      <li>Verifikasi di lapangan</li>

                      <li>Survey oleh BPS</li>
                    </ul>
                  </div>
                </div>

                <!-- =================================================
         05
    ================================================== -->
                <div class="relative flex gap-4">
                  <div
                    class="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime-500 text-xs font-bold text-white ring-4 ring-slate-50"
                  >
                    05
                  </div>

                  <div class="flex-1 rounded-2xl bg-blue-100 p-4">
                    <h3 class="font-extrabold leading-5 text-orange-600">
                      Penetapan WBK/WBBM
                    </h3>

                    <ul
                      class="mt-3 list-disc space-y-1 pl-4 text-xs leading-5 text-slate-700"
                    >
                      <li>Panel TPN</li>

                      <li>Kementerian PAN RB bersama KPK dan Ombudsman</li>

                      <li>Menetapkan bersama</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <!-- =================================================
     SOURCE
================================================== -->
            <div class="mt-6 flex justify-end">
              <div
                class="rounded-md bg-red-600 px-3 py-1.5 text-[11px] font-bold text-white sm:text-xs"
              >
                Sumber : Paparan Biro Organisasi Pemprov Jatim
              </div>
            </div>
          </div>
        </div>

        <!-- SLOT -->
        <slot />
      </div>

      <!-- =====================================================
           RIGHT : BUKU SAKU
      ====================================================== -->
      <div class="lg:col-span-3">
        <div
          class="sticky top-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <!-- COVER -->
          <div
            v-if="sideImage"
            class="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-slate-50 p-4"
          >
            <div
              class="absolute left-6 top-6 z-10 rounded-full bg-emerald-600 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg"
            >
              Panduan
            </div>

            <div
              class="overflow-hidden rounded-2xl border border-white bg-white p-3 shadow-sm"
            >
              <img
                :src="asset(sideImage)"
                alt="Buku Saku Pembangunan Zona Integritas"
                class="h-auto w-full rounded-xl object-contain transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>
          </div>

          <!-- CONTENT -->
          <div class="p-5 sm:p-6">
            <div class="mb-5">
              <span
                class="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-600"
              >
                Referensi
              </span>

              <h4 class="mt-1 text-lg font-extrabold leading-6 text-slate-800">
                {{ sideTitle }}
              </h4>

              <p class="mt-3 text-sm leading-6 text-slate-500">
                {{ sideDescription }}
              </p>
            </div>

            <!-- ACTION -->
            <a
              v-if="sideActionText"
              :href="asset(sideActionLink)"
              target="_blank"
              rel="noopener noreferrer"
              class="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition-all duration-200 hover:bg-emerald-700"
            >
              <span>
                {{ sideActionText }}
              </span>

              <span class="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
defineProps({
  badge: String,

  title: {
    type: String,
    default: "ZONA INTEGRITAS",
  },

  /*
   * COVER BUKU SAKU
   */
  sideImage: {
    type: String,
    default: "/images/reformasi/bukuSaku.png",
  },

  sideTitle: {
    type: String,
    default: "Buku Saku Pembangunan Zona Integritas",
  },

  sideDescription: {
    type: String,
    default: "Panduan resmi pembangunan Zona Integritas menuju WBK dan WBBM.",
  },

  sideActionText: {
    type: String,
    default: "Download Buku Saku",
  },

  sideActionLink: {
    type: String,
    default: "/images/reformasi/bukuSakuZI.pdf",
  },
});

const { asset } = useAsset();
</script>
