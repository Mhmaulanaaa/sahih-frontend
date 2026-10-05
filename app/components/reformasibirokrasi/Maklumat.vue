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

    <!-- =====================================================
         CONTENT
    ====================================================== -->
    <div
      class="relative grid grid-cols-1 gap-8 p-5 sm:p-7 lg:grid-cols-12 lg:gap-10 lg:p-10"
    >
      <!-- =====================================================
           LEFT : GAMBAR MAKLUMAT
      ====================================================== -->
      <div class="lg:col-span-9">
        <div
          class="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm"
        >
          <img
            src="/images/reformasi/maklumatRsds.jpg"
            alt="Maklumat RSUD Dr. Soetomo"
            class="block h-auto w-full object-contain"
          />
        </div>
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
                src="/images/reformasi/bukuSaku.png"
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
                Buku Saku Pembangunan Zona Integritas
              </h4>

              <p class="mt-3 text-sm leading-6 text-slate-500">
                Panduan resmi pembangunan Zona Integritas menuju WBK dan WBBM.
              </p>
            </div>

            <!-- ACTION -->
            <a
              :href="asset('/images/reformasi/bukuSakuZI.pdf')"
              target="_blank"
              rel="noopener noreferrer"
              class="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition-all duration-200 hover:bg-emerald-700"
            >
              <span>Lihat Buku Saku</span>

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
const { asset } = useAsset();
</script>
