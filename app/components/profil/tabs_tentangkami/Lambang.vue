<template>
  <section class="space-y-20">
    <!-- LOGO -->
    <div class="text-center">
      <img
        src="/images/logo/Logo_RSDS.png"
        alt="Lambang RSUD Dr. Soetomo"
        class="w-48 mx-auto mb-6"
      />
      <h2 class="text-3xl font-bold text-gray-900">Lambang RSUD Dr. Soetomo</h2>
      <p class="text-gray-600 mt-2">Makna dan Filosofi Lambang</p>
    </div>

    <!-- FILOSOFI -->
    <div>
      <h3 class="text-2xl font-bold text-gray-900 mb-8">Filosofi Lambang</h3>

      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="item in filosofi"
          :key="item.title"
          class="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
        >
          <h4 class="text-lg font-semibold text-emerald-600 mb-3">
            {{ item.title }}
          </h4>
          <p class="text-gray-600 text-justify leading-relaxed">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>

    <!-- WARNA -->
    <div>
      <h3 class="text-2xl font-bold text-gray-900 mb-8">Makna Warna</h3>

      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="color in colors"
          :key="color.name"
          class="bg-white rounded-2xl shadow-md p-6"
        >
          <div class="flex items-center gap-3 mb-4">
            <div
              class="w-6 h-6 rounded-full"
              :style="{ backgroundColor: color.hex }"
            ></div>
            <h4 class="font-semibold text-gray-900">
              {{ color.name }} ({{ color.hex }})
            </h4>
          </div>

          <p class="text-gray-600 text-justify leading-relaxed">
            {{ color.description }}
          </p>
        </div>
      </div>
    </div>

    <!-- DOWNLOAD -->
    <div>
      <h3 class="text-2xl font-bold text-gray-900 mb-8 text-center">Unduh Lambang</h3>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <a
          v-for="file in downloads"
          :key="file.title"
          :href="file.url"
          target="_blank"
          class="group bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition"
        >
          <div class="w-full h-40 flex items-center justify-center">
            <img
              :src="asset(file.preview)"
              class="max-w-full max-h-full object-contain"
              :alt="file.title"
            />
          </div>

          <p class="text-sm font-semibold text-gray-900">
            {{ file.title }}
          </p>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { asset } = useAsset();
const filosofi = [
  {
    title: "Cross",
    description:
      "Simbol palang pada logo RSUD Dr. Soetomo menunjukkan komitmen, etika, netralitas, dan ketulusan tanpa membedakan ras, agama, maupun status sosial dalam memberikan pelayanan terbaik kepada seluruh pasien.",
  },
  {
    title: "Handshake",
    description:
      "Dua tangan yang berjabat melambangkan kepercayaan dan kerja sama yang baik antara pimpinan dan seluruh jajaran RSUD Dr. Soetomo. Bentuk jabat tangan yang membulat mencerminkan sikap yang tidak kaku, tanpa batasan atau sekat, dalam memberikan pelayanan maksimal secara profesional dan berintegritas tinggi.",
  },
  {
    title: "Heart",
    description:
      "Simbol hati menjadi pengikat dari keseluruhan makna logo RSUD Dr. Soetomo. Seluruh pelayanan, inovasi, dan profesionalisme dijalankan dengan penuh cinta kasih kepada sesama. Berlandaskan pelayanan sepenuh hati, RSUD Dr. Soetomo terus berinovasi, bekerja secara profesional, berintegritas, dan penuh empati.",
  },
];

const colors = [
  {
    name: "Hijau",
    hex: "#0ba14b",
    description:
      'Warna hijau melambangkan pertumbuhan, harmoni, kesegaran, dan kesuburan. RSUD Dr. Soetomo merepresentasikan warna hijau dengan makna "healing", yang diyakini mampu menurunkan stres, mendukung proses penyembuhan, serta mendorong empati. Warna ini mencerminkan komitmen RSUD Dr. Soetomo dalam memberikan pelayanan kesehatan yang optimal dan bermanfaat bagi masyarakat.',
  },
  {
    name: "Kuning",
    hex: "#ffde00",
    description:
      "Warna kuning melambangkan keceriaan, energi, harapan, dan sikap positif. Warna ini menunjukkan karakter RSUD Dr. Soetomo yang hangat dan penuh kepedulian dalam memberikan pelayanan kepada masyarakat.",
  },
  {
    name: "Jingga",
    hex: "#ffc20e",
    description:
      "Warna jingga melambangkan optimisme, keramahan, kebijaksanaan, serta kreativitas. Sejalan dengan visi RSUD Dr. Soetomo, warna ini merepresentasikan semangat inovasi untuk menjadi rumah sakit rujukan tersier yang terpercaya, aman, bermutu tinggi, dan mandiri.",
  },
];

const downloads = [
  {
    title: "Lambang RSUD Dr. Soetomo",
    url: "/images/logo/Logo_RSDS.png",
    preview: "/images/logo/Logo_RSDS.png",
  },
  {
    title: "Lambang Pemerintah Provinsi Jawa Timur",
    url: "/images/pemprovJatim.png",
    preview: "/images/pemprovJatim.png",
  },
  {
    title: "Lambang RSUD + Pemprov + KARS + JCI",
    url: "/images/logo-rsds-baru.png",
    preview: "/images/logo-rsds-baru.png",
  },
];
</script>
