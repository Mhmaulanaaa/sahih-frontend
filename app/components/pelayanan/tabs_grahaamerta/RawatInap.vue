<script setup lang="ts">
import CardKamarGraha from "./rawatinap/CardKamarGraha.vue";
import CardKamarStoc from "./rawatinap/CardKamarStoc.vue";

const { asset } = useAsset();

const facilities = [
  {
    title: "Kamar Super VIP 1",
    harga: "Rp. 1.500.000 / Hari",
    image: "/images/ranap/Super-VVIP-1.webp",
    spesifikasi: [
      "1 Kamar kapasitas 1 Pasien",
      "Ruang Tamu Pribadi",
      "Dapur Kering (Pantry)",
      "Kamar mandi dengan Water Heater",
      "2 Set Sofa dan 1 Meja Tamu",
      "2 TV (Kamar Pasien & Ruang Tamu)",
      "Tempat tidur penunggu Pasien",
      "Lemari Pakaian",
      "Lemari Pendingin (Kulkas) 2 Pintu",
      "Makan Pasien & Penunggu 3x Sehari",
    ],
  },
  {
    title: "Kamar Super VIP 2",
    harga: "Rp. 1.200.000 / Hari",
    image: "/images/ranap/Super-VVIP-2.webp",
    spesifikasi: [
      "1 Kamar kapasitas 1 Pasien",
      "Ruang Tamu Pribadi",
      "Dapur Kering (Pantry)",
      "Kamar mandi dengan Water Heater",
      "2 Set Sofa dan 1 Meja Tamu",
      "1 TV (Kamar Pasien)",
      "Tempat tidur penunggu Pasien",
      "Lemari Pakaian",
      "Lemari Pendingin (Kulkas)",
      "Makan Penunggu 3x Sehari",
    ],
  },
  {
    title: "Kamar VIP",
    harga: "Rp. 900.000 / Hari",
    image: "/images/ranap/Super-VVIP-3.webp",
    spesifikasi: [
      "1 Kamar kapasitas 1 Pasien",
      "Kamar mandi dengan Water Heater",
      "Sofa",
      "TV",
      "Tempat tidur penunggu Pasien",
      "Lemari Pakaian",
      "Lemari Pendingin (Kulkas)",
      "Makan Penunggu 3x Sehari",
    ],
  },
  {
    title: "Kamar Utama 1",
    harga: "Rp. 750.000 / Hari",
    image: "/images/ranap/utama1.png",
    spesifikasi: [
      "1 Kamar kapasitas 2 Pasien",
      "Kamar mandi dengan Water Heater",
      "TV",
      "Kursi penunggu Pasien",
      "Lemari Pendingin (Kulkas)",
    ],
  },
  {
    title: "Kamar Utama 2",
    harga: "Rp. 600.000 / Hari",
    image: "/images/ranap/utama2.png",
    spesifikasi: [
      "1 Kamar kapasitas 3 Pasien",
      "Kamar mandi dengan Water Heater",
      "TV",
      "Lemari Pendingin (Kulkas)",
    ],
  },
];

const facilitiesStoc = [
  {
    title: "Kamar VIP",
    spesifikasi: [
      "1 Kamar kapasitas 1 Pasien",
      "Tempat tidur penunggu Pasien",
      "Sofa dan Meja Tamu",
      "Lemari Pakaian",
      "Kamar mandi dengan Water Heater",
      "TV",
      "Dapur Kering (Pantry)",
      "Lemari Pendingin (Kulkas) 2 Pintu",
    ],
  },
  {
    title: "Kamar Utama 1",
    spesifikasi: [
      "1 Kamar kapasitas 2 Pasien",
      "Sofa penunggu Pasien",
      "Lemari Pakaian",
      "Kamar mandi dengan Water Heater",
      "Lemari Pendingin (Kulkas)",
      "TV",
    ],
  },
];
</script>

<template>
  <div class="relative lg:p-8">
    <!-- GRID 2 COLUMN -->
    <div class="grid grid-cols-1 lg:grid-cols-1 gap-10">
      <!-- COLUMN 1 -->
      <div>
        <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">
          RAWAT INAP GRAHA AMERTA
        </h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <CardKamarGraha
            v-for="(item, index) in facilities"
            :key="index"
            :title="item.title"
            :harga="item.harga"
            :image="asset(item.image)"
            :spesifikasi="item.spesifikasi"
          />
        </div>
      </div>

      <!-- COLUMN 2 -->
      <div>
        <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">
          RAWAT INAP PAVILIUN INDRAPRASTA (STOC)
        </h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <CardKamarStoc
            v-for="(item, index) in facilitiesStoc"
            :key="index"
            :title="item.title"
            :spesifikasi="item.spesifikasi"
          />
        </div>
      </div>
    </div>
  </div>
</template>
