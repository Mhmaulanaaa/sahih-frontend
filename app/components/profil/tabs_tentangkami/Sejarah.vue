<template>
  <div class="relative">
    <!-- TITLE -->
    <h2 class="text-2xl font-bold text-gray-900 mb-8">Lini Masa</h2>

    <!-- TIMELINE GRID -->
    <div class="grid lg:grid-cols-3 gap-10 relative z-10">
      <div v-for="(column, colIndex) in timelines" :key="colIndex" class="space-y-8">
        <div v-for="(item, index) in column" :key="index" class="flex gap-4">
          <!-- BADGE -->
          <div class="flex-shrink-0">
            <div
              class="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-emerald-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"
                />
              </svg>
            </div>
          </div>

          <!-- CONTENT -->
          <div>
            <p class="font-bold text-gray-900">
              {{ item.year }}
            </p>
            <div class="text-sm text-gray-600 mt-1">
              <span v-html="item.description"></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- BACKGROUND IMAGE -->
    <div class="absolute inset-0 opacity-15 pointer-events-none">
      <img
        src="/images/sejarah.png"
        alt="Sejarah RSUD Dr. Soetomo"
        class="w-full h-full object-cover rounded-2xl"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
const timelines = [
  [
    {
      year: "29 Oktober 1938",
      description:
        "Peletakan batu pertama Rumah Sakit <i>Centrale Burgerlijke Ziekenhuis</i> (CBZ) oleh Pemerintah Belanda di Desa Karangmenjangan, Surabaya.",
    },
    {
      year: "1943–1945",
      description:
        "Pada masa penjajahan Jepang, Rumah Sakit Karangmenjangan dijadikan Rumah Sakit Angkatan Darat.",
    },
    {
      year: "1945–1949",
      description:
        "Rumah sakit dikuasai Belanda kembali dan berubah nama menjadi <b>Marine Hospitaal</b> (RSAL Belanda).",
    },
    {
      year: "1950",
      description:
        "Rumah Sakit Oemoem Soerabaja berganti nama menjadi <b>RSUP Dr. Soetomo</b> di bawah Departemen Kesehatan RI.",
    },
  ],
  [
    {
      year: "1951–1954",
      description:
        "Sebagian Rumah Sakit Simpang pindah ke RSUP Surabaya, sedangkan pelayanan bedah akut tetap di RS Simpang.",
    },
    {
      year: "1964",
      description:
        "Berdasarkan SK Menkes RI 20 Mei 1964 No. 26769/KAB/76, RSUP Surabaya resmi menjadi RSUP Dr. Soetomo.",
    },
    {
      year: "1965",
      description:
        "Berdasarkan PP No. 4 Tahun 1965, penyelenggaraan RSUP Dr. Soetomo diserahkan kepada Pemerintah Daerah Tingkat I Jawa Timur.",
    },
  ],
  [
    {
      year: "1979",
      description:
        "RSU Dr. Soetomo ditetapkan sebagai rumah sakit kelas A dan dikenal sebagai:<ul class='list-disc ml-4 mt-1'><li>Rumah sakit pelayanan, pendidikan dan penelitian</li><li>Pusat rujukan Indonesia Timur</li><li>Rumah sakit terbesar di wilayah Indonesia Timur</li></ul>",
    },
    {
      year: "1980",
      description:
        "Seluruh kegiatan pelayanan dipusatkan di RSU Dr. Soetomo setelah RS Simpang dijual dan menjadi Surabaya Plaza.",
    },
    {
      year: "2002",
      description:
        "Perda Provinsi Jawa Timur menetapkan perubahan nama menjadi <b>RSUD Dr. Soetomo</b>.",
    },
  ],
];
</script>
