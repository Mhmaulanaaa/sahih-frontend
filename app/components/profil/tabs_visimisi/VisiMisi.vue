<template>
  <div class="relative lg:p-8">
    <section class="relative overflow-hidden rounded-3xl text-white">
      <!-- Background Image -->
      <div
        class="absolute inset-0 bg-cover bg-center"
        :style="{
          backgroundImage: `url('${asset('/images/gedung1.webp')}')`,
        }"
      ></div>

      <!-- Overlay (dibuat lebih transparan) -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-emerald-900/70 via-emerald-800/60 to-emerald-600/70"
      ></div>

      <!-- Content -->
      <div class="relative z-10 p-10 lg:p-7">
        <div class="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20">
          <!-- VISI -->
          <div class="flex flex-col justify-center">
            <h2 class="text-4xl lg:text-7xl font-bold tracking-wide text-yellow-400 mb-6">
              VISI
            </h2>

            <p class="text-xl lg:text-2xl font-medium leading-relaxed">
              Menjadi rumah sakit tersier yang terpercaya, aman, bermutu tinggi dan
              mandiri.
            </p>
          </div>

          <!-- MISI -->
          <div>
            <h2 class="text-4xl lg:text-7xl font-bold tracking-wide text-yellow-400 mb-8">
              MISI
            </h2>

            <div class="space-y-8">
              <div class="flex gap-5">
                <span class="text-5xl font-bold text-yellow-400 leading-none">1</span>
                <p class="text-base lg:text-lg leading-relaxed">
                  Menyelenggarakan pelayanan dan jejaring pelayanan sebagai rumah sakit
                  rujukan tersier yang aman, bermutu tinggi dan terjangkau.
                </p>
              </div>

              <div class="flex gap-5">
                <span class="text-5xl font-bold text-yellow-400 leading-none">2</span>
                <p class="text-base lg:text-lg leading-relaxed">
                  Menyelenggarakan pendidikan dan penelitian tenaga kesehatan yang
                  berintegritas tinggi, profesional, inovatif dan melakukan jejaring
                  pendidikan penelitian yang terintegrasi (Academic Medical Center), pusat
                  pengembangan bidang kesehatan yang bermutu tinggi serta mewujudkan SDM
                  yang handal.
                </p>
              </div>

              <div class="flex gap-5">
                <span class="text-5xl font-bold text-yellow-400 leading-none">3</span>
                <p class="text-base lg:text-lg leading-relaxed">
                  Mewujudkan kehandalan sarana dan prasarana penunjang pelayanan yang
                  terstandar serta lingkungan kerja yang aman dan nyaman.
                </p>
              </div>

              <div class="flex gap-5">
                <span class="text-5xl font-bold text-yellow-400 leading-none">4</span>
                <p class="text-base lg:text-lg leading-relaxed">
                  Menyelenggarakan tata kelola organisasi yang terintegrasi, efektif
                  efisien dan akuntabel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- DESCRIPTION FULL WIDTH -->
  </div>
</template>

<script setup lang="ts">
const { asset } = useAsset();
</script>
