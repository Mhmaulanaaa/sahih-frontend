<template>
  <table class="w-full text-sm border border-emerald-200">
    <thead class="bg-emerald-100 text-emerald-800">
      <tr>
        <th class="px-6 py-3 text-left font-semibold w-1/2">Nama Unit Kerja</th>
        <th class="px-6 py-3 text-left font-semibold w-1/2">Nama Pimpinan Unit Kerja</th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="(item, index) in data"
        :key="index"
        :class="index % 2 === 0 ? 'bg-emerald-50' : 'bg-white'"
        class="border-b border-emerald-100"
      >
        <td class="px-6 py-4 font-medium text-gray-900">
          {{ item.unit }}
        </td>
        <td class="px-6 py-4 text-gray-800">
          {{ item.pimpinan }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup lang="ts">
const data = [
  {
    unit: "Komite Etik dan Hukum",
    pimpinan: "Prof. Dr. Usman Hadi, dr., Sp.PD., K-PTI., Ph.D.",
  },
  {
    unit: "Komite Etik Penelitian Kesehatan",
    pimpinan: "Prof. Dr. Hendy Hendarto, dr., Sp.OG(K)",
  },
  {
    unit: "Komite Farmasi dan Terapi",
    pimpinan: "Fendy Matulatan, dr., SpB., Subsp.Pediatri(K)., FinACS",
  },
  {
    unit: "Komite Health Technology Assessment",
    pimpinan: "Dhihintia Jiwangga Suta Winarno, dr., Sp.BTKV.",
  },
  {
    unit: "Komite Keperawatan",
    pimpinan: "Sumail, S.Kep., Ns.",
  },
  {
    unit: "Komite Keselamatan Kerja Rumah Sakit",
    pimpinan: "Suhariono, S.T., M.KL.",
  },
  {
    unit: "Komite Koordinasi Pendidikan",
    pimpinan: "Dr. Tarmono, dr., Sp.U (K).",
  },
  {
    unit: "Komite Medik",
    pimpinan: "Prof. Dr. Joni Wahyuhadi, dr., Sp.BS (K)., M.A.R.S.",
  },
  {
    unit: "Komite Mutu dan Keselamatan Pasien",
    pimpinan: "Elly Listyani, dr., M.Kes.",
  },
  {
    unit: "Komite Pencegahan dan Pengendalian Infeksi",
    pimpinan: "Dr. Puspa Wardhani, dr., Sp.PK (K).",
  },
  {
    unit: "Komite Pengendali Resistensi Antimikroba",
    pimpinan: "Dr. Musofa Rusli, dr., Sp.PD., FINASIM.",
  },
  {
    unit: "Komite Rekam Medik",
    pimpinan: "Wita Saraswati, dr., Sp.OG (K).",
  },
  {
    unit: "Komite Tenaga Kesehatan Lain",
    pimpinan: "Budi Prijo Witjaksono, S.ST",
  },
];
</script>
