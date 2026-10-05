<template>
  <section
    class="relative overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-sm"
  >
    <!-- DECORATIVE BACKGROUND -->
    <div
      class="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-50 blur-3xl"
    ></div>

    <div
      class="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-teal-50 blur-3xl"
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
        <div class="mb-10">
          <!-- BADGE -->
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
            {{ title || "REFORMASI BIROKRASI" }}
          </h1>

          <!-- DECORATIVE LINE -->
          <div class="mt-5 flex items-center gap-2">
            <div class="h-1 w-16 rounded-full bg-emerald-500"></div>
            <div class="h-1 w-5 rounded-full bg-emerald-200"></div>
            <div class="h-1 w-2 rounded-full bg-emerald-100"></div>
          </div>
        </div>

        <!-- =====================================================
             PENJELASAN RB
        ====================================================== -->
        <div
          class="relative mb-12 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 sm:p-8"
        >
          <!-- TOP ACCENT -->
          <div class="absolute left-0 top-0 h-full w-1.5 bg-emerald-500"></div>

          <div class="flex gap-4">
            <!-- ICON -->

            <div class="min-w-0">
              <div class="mb-3">
                <span
                  class="text-xs font-bold uppercase tracking-[0.18em] text-emerald-600"
                >
                  Reformasi Birokrasi
                </span>
              </div>

              <p class="text-sm leading-7 text-slate-600 sm:text-base">
                Reformasi Birokrasi merupakan langkah pemerintah yang dilakukan untuk
                penataan sistem penyelenggaraan pemerintah yang baik, efektif, dan efisien
                sehingga dapat melayani masyarakat secara tepat dan profesional.
              </p>

              <!-- TARGET -->
              <div
                class="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-5"
              >
                <p class="font-bold text-slate-800">
                  Target capaiannya adalah 3 sasaran hasil utama:
                </p>

                <div class="mt-4 grid gap-3 sm:grid-cols-3">
                  <div class="rounded-xl bg-white p-4 shadow-sm ring-1 ring-emerald-100">
                    <div
                      class="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-sm font-bold text-emerald-700"
                    >
                      01
                    </div>

                    <p class="text-sm font-semibold leading-6 text-slate-700">
                      Peningkatan kapasitas dan akuntabilitas organisasi.
                    </p>
                  </div>

                  <div class="rounded-xl bg-white p-4 shadow-sm ring-1 ring-emerald-100">
                    <div
                      class="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-sm font-bold text-emerald-700"
                    >
                      02
                    </div>

                    <p class="text-sm font-semibold leading-6 text-slate-700">
                      Pemerintah yang bersih dan bebas KKN.
                    </p>
                  </div>

                  <div class="rounded-xl bg-white p-4 shadow-sm ring-1 ring-emerald-100">
                    <div
                      class="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-sm font-bold text-emerald-700"
                    >
                      03
                    </div>

                    <p class="text-sm font-semibold leading-6 text-slate-700">
                      Peningkatan pelayanan publik.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- =====================================================
             PEMBANGUNAN ZI
        ====================================================== -->
        <div class="mb-12">
          <!-- SECTION HEADER -->
          <div class="mb-7">
            <div class="flex flex-wrap items-end gap-x-3 gap-y-1">
              <h2
                class="text-2xl font-extrabold tracking-tight text-emerald-700 sm:text-3xl"
              >
                PEMBANGUNAN ZI
              </h2>
            </div>

            <p class="text-base font-bold text-slate-800 sm:text-lg">
              DALAM RANGKA REFORMASI BIROKRASI
            </p>

            <div class="mt-4 flex items-center gap-2">
              <div class="h-1 w-16 rounded-full bg-emerald-500"></div>
              <div class="h-1 w-8 rounded-full bg-emerald-200"></div>
            </div>
          </div>

          <!-- =====================================================
               RB VS ZI
          ====================================================== -->
          <div class="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <!-- =================================================
                 RB : 8 AREA
            ================================================== -->
            <div
              class="group relative overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-white p-5 sm:p-6"
            >
              <!-- Decorative -->
              <div
                class="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-emerald-100/60 blur-2xl transition-transform duration-500 group-hover:scale-125"
              ></div>

              <div class="relative">
                <!-- CARD HEADER -->
                <div class="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <h3 class="mt-1 text-xl font-extrabold text-slate-800 sm:text-2xl">
                      8 Area Perubahan
                    </h3>
                    <span
                      class="text-xs font-bold uppercase tracking-[0.18em] text-emerald-600"
                    >
                      Reformasi Birokrasi
                    </span>
                  </div>

                  <div
                    class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-lg font-extrabold text-white shadow-lg shadow-emerald-600/20"
                  >
                    8
                  </div>
                </div>

                <!-- AREA LIST -->
                <div class="space-y-3">
                  <div
                    v-for="(area, index) in rbAreas"
                    :key="`rb-${area}`"
                    :class="[
                      'group/item flex items-center gap-3 rounded-2xl border p-3 transition-all duration-200',
                      area.highlight
                        ? 'border-amber-200 bg-amber-50 shadow-sm'
                        : 'border-slate-100 bg-white hover:border-emerald-200 hover:shadow-sm',
                    ]"
                  >
                    <!-- NUMBER -->
                    <div
                      :class="[
                        'flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-extrabold',
                        area.highlight
                          ? 'bg-amber-500 text-white'
                          : 'bg-emerald-100 text-emerald-700',
                      ]"
                    >
                      {{ String(index + 1).padStart(2, "0") }}
                    </div>

                    <!-- TEXT -->
                    <div class="min-w-0 flex-1">
                      <p
                        :class="[
                          'text-xs font-bold leading-5 sm:text-sm',
                          area.highlight ? 'text-amber-800' : 'text-slate-700',
                        ]"
                      >
                        {{ area.name }}
                      </p>

                      <!-- SPECIAL LABEL -->
                      <span
                        v-if="area.highlight"
                        class="mt-0.5 inline-block text-[10px] font-bold uppercase tracking-wider text-amber-600"
                      >
                        Area Khusus RB
                      </span>
                    </div>

                    <!-- ARROW -->
                    <span
                      :class="[
                        'text-sm transition-transform duration-200 group-hover/item:translate-x-1',
                        area.highlight ? 'text-amber-500' : 'text-emerald-400',
                      ]"
                    >
                      →
                    </span>
                  </div>
                </div>

                <!-- =================================================
                     2 AREA RB NOT INCLUDED IN ZI
                ================================================== -->
                <div class="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4">
                  <div class="flex gap-3">
                    <div
                      class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-sm text-white"
                    >
                      !
                    </div>

                    <div>
                      <p class="text-sm font-extrabold leading-6 text-amber-900">
                        2 area perubahan RB ini tidak termasuk dalam area perubahan ZI.
                      </p>

                      <p class="mt-1 text-xs leading-5 text-amber-800/80">
                        Kedua area tersebut adalah
                        <strong>Penguatan Akuntabilitas</strong> dan
                        <strong>Pelayanan Publik</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- =================================================
                 ZI : 6 AREA
            ================================================== -->
            <div
              class="group relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-white p-5 sm:p-6"
            >
              <!-- Decorative -->
              <div
                class="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-slate-100 blur-2xl transition-transform duration-500 group-hover:scale-125"
              ></div>

              <div class="relative">
                <!-- CARD HEADER -->
                <div class="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <h3 class="mt-1 text-xl font-extrabold text-slate-800 sm:text-2xl">
                      6 Area Perubahan
                    </h3>
                    <span
                      class="text-xs font-bold uppercase tracking-[0.18em] text-slate-500"
                    >
                      Zona Integritas
                    </span>
                  </div>

                  <div
                    class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-800 text-lg font-extrabold text-white shadow-lg shadow-slate-800/20"
                  >
                    6
                  </div>
                </div>

                <!-- AREA LIST -->
                <div class="space-y-3">
                  <div
                    v-for="(area, index) in ziSixAreas"
                    :key="`zi-${area}`"
                    class="group/item flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3 transition-all duration-200 hover:border-emerald-200 hover:shadow-sm"
                  >
                    <div
                      class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-xs font-extrabold text-slate-600"
                    >
                      {{ String(index + 1).padStart(2, "0") }}
                    </div>

                    <p
                      class="min-w-0 flex-1 text-xs font-bold leading-5 text-slate-700 sm:text-sm"
                    >
                      {{ area }}
                    </p>

                    <span
                      class="text-sm text-slate-300 transition-transform duration-200 group-hover/item:translate-x-1 group-hover/item:text-emerald-400"
                    >
                      →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- =====================================================
             HUBUNGAN RB & ZI
        ====================================================== -->
        <div class="relative mb-10">
          <div
            class="relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md sm:p-8 lg:p-10"
          >
            <!-- Line -->
            <div
              class="absolute left-0 top-0 h-full w-1.5 rounded-l-3xl bg-emerald-500"
            ></div>
            <!-- Content -->
            <div class="relative pl-4 sm:pl-5">
              <!-- SMALL LABEL -->
              <!-- State -->
              <div class="max-w-4xl">
                <p
                  class="text-lg font-medium leading-8 text-slate-600 sm:text-xl sm:leading-9"
                >
                  Zona Integritas dan Reformasi Birokrasi
                  <span class="font-extrabold text-slate-800">
                    bukan merupakan dua hal yang terpisah.
                  </span>
                </p>

                <p
                  class="mt-2 text-base leading-7 text-slate-500 sm:text-lg sm:leading-8"
                >
                  Pembangunan Zona Integritas merupakan
                  <span class="font-bold text-emerald-700">
                    bagian dari Reformasi Birokrasi,
                  </span>
                  yang bertujuan untuk mewujudkan Grand Design Reformasi Birokrasi
                </p>
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
            <!-- Badge -->
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
              <span>{{ sideActionText }}</span>

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
    required: true,
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

// 8 AREA PERUBAHAN REFORMASI BIROKRASI
const rbAreas = [
  {
    name: "MANAJEMEN PERUBAHAN",
    highlight: false,
  },
  {
    name: "PENATAAN TATALAKSANA",
    highlight: false,
  },
  {
    name: "PENATAAN SDM APARATUR",
    highlight: false,
  },
  {
    name: "PENGUATAN PENGAWASAN",
    highlight: false,
  },
  {
    name: "PENGUATAN AKUNTABILITAS",
    highlight: false,
  },
  {
    name: "PELAYANAN PUBLIK",
    highlight: false,
  },
  {
    name: "PENGUATAN ORGANISASI",
    highlight: true,
  },
  {
    name: "DELEGASI KEBIJAKAN",
    highlight: true,
  },
];

// 6 AREA PERUBAHAN REFORMASI ZONA INTEGRITAS
const ziSixAreas = [
  "MANAJEMEN PERUBAHAN",
  "PENATAAN TATALAKSANA",
  "PENATAAN SDM APARATUR",
  "PENGUATAN PENGAWASAN",
  "PENGUATAN AKUNTABILITAS",
  "PELAYANAN PUBLIK",
];
</script>
