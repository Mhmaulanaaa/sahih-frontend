<template>
  <!-- Chief Clinical Scientist -->
  <section class="relative isolate overflow-hidden py-0 sm:py-5">
    <!-- Background -->

    <!-- Decorative Glow -->

    <!-- Content -->
    <div class="relative mx-auto max-w-9xl px-4 sm:px-6 lg:px-8">
      <!-- Card -->
      <div
        class="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
      >
        <!-- Header -->
        <div class="px-6 pt-8 text-center sm:px-10 sm:pt-10">
          <span
            class="inline-flex items-center rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-emerald-700"
          >
            Chief Clinical Scientist
          </span>
        </div>

        <!-- Profile -->
        <div class="px-6 py-8 sm:px-10 sm:py-10">
          <!-- Photo -->
          <div class="flex justify-center">
            <div
              class="relative rounded-full bg-gradient-to-br from-emerald-100 via-white to-emerald-50 p-1.5 shadow-lg"
            >
              <div
                class="h-full w-full overflow-hidden rounded-full border-4 border-white bg-slate-100 shadow-md sm:h-52 sm:w-52"
              >
                <img
                  :src="asset('/images/foto.jpeg')"
                  alt="Prof. dr. Laksmi Wulandari, dr., SpP(K), FCCP, FISCM, FISR"
                  class="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>

          <!-- Name -->
          <div class="mt-7 text-center">
            <a
              href="https://rsudrsoetomo.jatimprov.go.id/sahih/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-xl font-bold leading-relaxed text-emerald-700 transition-colors hover:text-emerald-800 sm:text-2xl"
            >
              Prof. dr. Laksmi Wulandari, dr., SpP(K), FCCP, FISCM, FISR
            </a>

            <p
              class="mx-auto mt-3 max-w-3xl text-sm font-medium leading-7 text-slate-600 sm:text-base"
            >
              Prof. Laksmi Wulandari is a Clinical Senior Pulmonologist in Dr. Soetomo
              General Academic Hospital.
            </p>
          </div>

          <!-- Divider -->
          <div
            class="mx-auto my-8 h-px max-w-3xl bg-gradient-to-r from-transparent via-emerald-200 to-transparent"
          ></div>

          <!-- Description -->
          <div
            class="mx-auto max-w-9xl text-center text-sm leading-7 text-slate-600 sm:text-base sm:leading-8"
          >
            <p class="mb-5">
              She was graduated with her Medical Doctor from Universitas Airlangga,
              Surabaya, Indonesia in 1993. She accomplished her residency in Pulmonology
              in 2003 and consultant of respiratory infection in 2008 and also consultant
              of lung and mediastinum oncology in 2016. She was awarded her doctoral
              degree in 2014 and Professor of Pulmonology in 2023. She has many
              experiences in pulmonology research and publication. She also conducts the
              Clinical Research Unit of Dr. Soetomo General Academic Hospital since 2016
              until now.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { asset } = useAsset();
</script>
