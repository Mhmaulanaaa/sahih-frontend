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
        <div class="mb-10">
          <div
            v-if="badge"
            class="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3.5 py-2 text-xs font-bold tracking-wide text-emerald-700 sm:text-sm"
          >
            <span class="h-2 w-2 rounded-full bg-emerald-500"></span>
            {{ badge }}
          </div>

          <h1
            class="text-3xl font-extrabold leading-tight tracking-tight text-emerald-700 sm:text-4xl lg:text-5xl"
          >
            WHISTLE BLOWING SYSTEM
          </h1>

          <!-- DECORATIVE LINE -->
          <div class="mt-5 flex items-center gap-2">
            <div class="h-1 w-16 rounded-full bg-emerald-500"></div>
            <div class="h-1 w-5 rounded-full bg-emerald-200"></div>
            <div class="h-1 w-2 rounded-full bg-emerald-100"></div>
          </div>
        </div>

        <!-- =====================================================
             MEKANISME
        ====================================================== -->
        <div class="mb-8">
          <div class="mb-6">
            <h2
              class="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl"
            >
              MEKANISME
            </h2>

            <div class="mt-3 flex items-center gap-2">
              <div class="h-1 w-12 rounded-full bg-emerald-500"></div>
              <div class="h-1 w-4 rounded-full bg-emerald-200"></div>
            </div>
          </div>

          <!-- =====================================================
               MEKANISME PENGADUAN
          ====================================================== -->
          <article
            class="mb-6 rounded-3xl border border-emerald-100 bg-emerald-50/50 p-5 sm:p-6"
          >
            <div class="mb-5 flex items-start gap-3">
              <div
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-sm font-extrabold text-white shadow-sm"
              >
                01
              </div>

              <div>
                <h3
                  class="text-lg font-extrabold uppercase leading-6 text-emerald-700 sm:text-xl"
                >
                  MEKANISME
                  <span class="block">PENGADUAN</span>
                </h3>
              </div>
            </div>

            <ol
              class="space-y-4 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8"
            >
              <li class="flex gap-3">
                <span
                  class="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-xs font-extrabold text-emerald-600 shadow-sm ring-1 ring-emerald-100"
                >
                  1
                </span>

                <p class="text-justify">
                  Tim penyelesai Aduan sesuai kewenangannya adalah SPI.
                </p>
              </li>

              <li class="flex gap-3">
                <span
                  class="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-xs font-extrabold text-emerald-600 shadow-sm ring-1 ring-emerald-100"
                >
                  2
                </span>

                <p class="text-justify">
                  Whistle blower menyampaikan laporan menyebutkan identitas lengkap dan
                  bukti pendukung.
                </p>
              </li>

              <li class="flex gap-3">
                <span
                  class="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-xs font-extrabold text-emerald-600 shadow-sm ring-1 ring-emerald-100"
                >
                  3
                </span>

                <p class="text-justify">
                  SPI menyusun telaah singkat atas pengajuan kepada Direktur sekaligus
                  rekomendasi tindak lanjut.
                </p>
              </li>

              <li class="flex gap-3">
                <span
                  class="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-xs font-extrabold text-emerald-600 shadow-sm ring-1 ring-emerald-100"
                >
                  4
                </span>

                <p class="text-justify">
                  Diberikan perlindungan atas kerahasiaan identitas whistle blower.
                </p>
              </li>
            </ol>
          </article>

          <!-- =====================================================
               MEKANISME TINDAK LANJUT
          ====================================================== -->
          <article class="mb-6 rounded-3xl border border-sky-100 bg-sky-50/50 p-5 sm:p-6">
            <div class="mb-5 flex items-start gap-3">
              <div
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-600 text-sm font-extrabold text-white shadow-sm"
              >
                02
              </div>

              <div>
                <h3
                  class="text-lg font-extrabold uppercase leading-6 text-sky-700 sm:text-xl"
                >
                  MEKANISME
                  <span class="block">TINDAK LANJUT</span>
                </h3>
              </div>
            </div>

            <ol
              class="space-y-4 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8"
            >
              <li class="flex gap-3">
                <span
                  class="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-xs font-extrabold text-sky-600 shadow-sm ring-1 ring-sky-100"
                >
                  1
                </span>

                <p class="text-justify">
                  Hasil telaah atas pengaduan yang memenuhi kriteria dilakukan audit
                  investigatif atas penugasan khusus Direktur.
                </p>
              </li>

              <li class="flex gap-3">
                <span
                  class="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-xs font-extrabold text-sky-600 shadow-sm ring-1 ring-sky-100"
                >
                  2
                </span>

                <p class="text-justify">
                  Direktur memberikan kebijakan penanganan aduan untuk diselesaikan SPI
                  melalui koordinasi dengan pihak terkait.
                </p>
              </li>

              <li class="flex gap-3">
                <span
                  class="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-xs font-extrabold text-sky-600 shadow-sm ring-1 ring-sky-100"
                >
                  3
                </span>

                <p class="text-justify">
                  SPI dapat menggali informasi dan berkomunikasi dengan pihak terkait
                  dengan tetap menjaga kerahasiaan whistle blower.
                </p>
              </li>

              <li class="flex gap-3">
                <span
                  class="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-xs font-extrabold text-sky-600 shadow-sm ring-1 ring-sky-100"
                >
                  4
                </span>

                <p class="text-justify">
                  Hasil penanganan aduan dilaporkan kepada Direktur.
                </p>
              </li>
            </ol>
          </article>

          <!-- =====================================================
               MEKANISME EKSPOSE HASIL AUDIT INVESTIGASI
          ====================================================== -->
          <article
            class="rounded-3xl border border-orange-100 bg-orange-50/50 p-5 sm:p-6"
          >
            <div class="mb-5 flex items-start gap-3">
              <div
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-600 text-sm font-extrabold text-white shadow-sm"
              >
                03
              </div>

              <div>
                <h3
                  class="text-lg font-extrabold uppercase leading-6 text-orange-700 sm:text-xl"
                >
                  MEKANISME
                  <span class="block">EKSPOSE HASIL AUDIT INVESTIGASI</span>
                </h3>
              </div>
            </div>

            <ol
              class="space-y-4 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8"
            >
              <li class="flex gap-3">
                <span
                  class="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-xs font-extrabold text-orange-600 shadow-sm ring-1 ring-orange-100"
                >
                  1
                </span>

                <p class="text-justify">
                  Jika dirasa perlu, Direktur mengundang ekspose internal yang isinya
                  rapat bersama antara SPI, pihak yang dilaporkan, dan unit kerja terkait.
                </p>
              </li>

              <li class="flex gap-3">
                <span
                  class="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-xs font-extrabold text-orange-600 shadow-sm ring-1 ring-orange-100"
                >
                  2
                </span>

                <p class="text-justify">
                  Apabila telah diputuskan bahwa aduan whistle blower dapat dibuktikan,
                  maka dilakukan ekspose eksternal khusus untuk pelanggaran berupa
                  tindakan korupsi.
                </p>
              </li>
            </ol>
          </article>
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
