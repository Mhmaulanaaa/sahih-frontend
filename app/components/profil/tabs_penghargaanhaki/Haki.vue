<script setup lang="ts">
const emit = defineEmits<{
  (e: "preview", image: string): void;
}>();

interface HakiItem {
  id: number;
  nomor: string;
  title: string;
  tahun: string;
  thumb: string;
  preview: string;
}

const { asset } = useAsset();

const hakis: HakiItem[] = [
  {
    id: 1,
    nomor: "EC0020221",
    title: "Electronic Medical Record Soetomo (EMR Soetomo)",
    tahun: "30 Desember 2022",
    thumb: "/images/penghargaan/Haki/emr.png",
    preview: "/images/penghargaan/Haki/emr.png",
  },
  {
    id: 2,
    nomor: "EC0020242098",
    title: "Aplikasi Budgeting, Key Performance Indikator and Evaluation (BRIEV)",
    tahun: "5 Maret 2024",
    thumb: "/images/penghargaan/Haki/briev.png",
    preview: "/images/penghargaan/Haki/briev.png",
  },
  {
    id: 3,
    nomor: "EC002023136140",
    title: "Emonev RSUD Dr. Soetomo",
    tahun: "20 Desember 2023",
    thumb: "/images/penghargaan/Haki/emonev.png",
    preview: "/images/penghargaan/Haki/emonev.png",
  },
  {
    id: 4,
    nomor: "EC002023136116",
    title: "KEPK Online RSUD Dr. Soetomo",
    tahun: "20 Desember 2023",
    thumb: "/images/penghargaan/Haki/kepk.png",
    preview: "/images/penghargaan/Haki/kepk.png",
  },
  {
    id: 5,
    nomor: "EC002022115944",
    title: "SOETOMO KLAIM (S-KLAIM)",
    tahun: "30 Desember 2022",
    thumb: "/images/penghargaan/Haki/sklaim.png",
    preview: "/images/penghargaan/Haki/sklaim.png",
  },
  {
    id: 6,
    nomor: "EC00202366732",
    title: "SWALAB",
    tahun: "14 Agustus 2023",
    thumb: "/images/penghargaan/Haki/swalab.png",
    preview: "/images/penghargaan/Haki/swalab.png",
  },
  {
    id: 7,
    nomor: "EC00202311849",
    title: "SOETOMO VEMES",
    tahun: "9 Februari 2023",
    thumb: "/images/penghargaan/Haki/vemes.png",
    preview: "/images/penghargaan/Haki/vemes.png",
  },
  {
    id: 8,
    nomor: "EC00202053131",
    title: "PANDUAN ASESMEN KEMATIAN PENDERITA COVID-19 ",
    tahun: "25 November 2020",
    thumb: "/images/penghargaan/Haki/asesmen.png",
    preview: "/images/penghargaan/Haki/asesmen.png",
  },
  {
    id: 9,
    nomor: "EC00202181042",
    title: "Aplikasi HTA RSUD Dr. Soetomo",
    tahun: "20 Desember 2021",
    thumb: "/images/penghargaan/Haki/ehta.png",
    preview: "/images/penghargaan/Haki/ehta.png",
  },
  {
    id: 10,
    nomor: "EC002022053126",
    title: "KONSORSIUM KOLABORASI PENELITIAN COVID-19 ",
    tahun: "25 November 2020",
    thumb: "/images/penghargaan/Haki/konsorsium.png",
    preview: "/images/penghargaan/Haki/konsorsium.png",
  },
];

const openPreview = (item: HakiItem) => {
  emit("preview", asset(item.preview));
};
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
    <button
      v-for="item in hakis"
      :key="item.id"
      @click="openPreview(item)"
      class="w-full text-left bg-white rounded-xl shadow-sm hover:shadow-md transition p-4"
    >
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        <!-- Thumbnail -->
        <NuxtImg
          :src="item.thumb"
          width="200"
          height="280"
          fit="contain"
          loading="lazy"
          class="mx-auto rounded cursor-pointer"
        />

        <!-- Detail HAKI -->
        <div class="space-y-2 text-sm text-gray-700">
          <div>
            <span class="font-semibold">Nomor HAKI:</span><br />
            <span>{{ item.nomor }}</span>
          </div>

          <div>
            <span class="font-semibold">Nama HAKI:</span><br />
            <span>{{ item.title }}</span>
          </div>

          <div>
            <span class="font-semibold">Tahun:</span><br />
            <span>{{ item.tahun }}</span>
          </div>
        </div>
      </div>
    </button>
  </div>
</template>
