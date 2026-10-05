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
  { unit: "KSM Andrologi", pimpinan: "Supardi, dr., Sp.And (K)." },
  {
    unit: "KSM Anestesiologi dan Reanimasi",
    pimpinan: "Dr. Kohar Hari Santoso, dr., Sp.An-TI, Subsp. An.Ped (K), Subsp. T.I (K)",
  },
  {
    unit: "KSM Bedah Plastik Rekontruksi dan Estetik",
    pimpinan: "Prof. Dr. Iswinarno Doso Saputro, dr., Sp.B.P.R.E, Subsp. L.B.L.(K)",
  },
  { unit: "KSM Bedah Saraf", pimpinan: "Dr. Nur Setiawan Suroto, dr., SpBS(K)., IFAANS" },
  {
    unit: "KSM Bedah Toraks, Kardiak dan Vaskular",
    pimpinan: "Dr. Heroe Soebroto, dr., SpB., SpBTKV, Subsp.JPK(K)",
  },
  { unit: "KSM Dokter Umum", pimpinan: "Putu Ismawantri, dr" },
  { unit: "KSM Ilmu Bedah", pimpinan: "Iskandar Ali, dr., SpB, Subsp.Onk(K)" },
  {
    unit: "KSM Ilmu Kedokteran Fisik dan Rehabilitasi",
    pimpinan: "Rwahita Satyawati Dharmanta, dr., Sp.KFR., Ger(K)",
  },
  {
    unit: "KSM Ilmu Kesehatan Anak",
    pimpinan: "Prof. Dr. Anang Endaryanto, dr., SpA(K)",
  },
  {
    unit: "KSM Ilmu Kesehatan Gigi dan Mulut",
    pimpinan: "drg. Ronny Baehaqi, Sp.BMM., Subsp T.M.T.M.J(K)",
  },
  { unit: "KSM Ilmu Kesehatan Mata", pimpinan: "Dr. Wimbo Sasono, dr., Sp.M (K)" },
  { unit: "KSM Ilmu Kesehatan THT-KL", pimpinan: "Irwan Kristiyono, Sp.THT-KL(K), FICS" },
  {
    unit: "KSM Kardiologi dan Kedokteran Vaskular",
    pimpinan: "Prof. Dr. Yudi Her Oktaviono, dr., SpJP(K), FIHA",
  },
  {
    unit: "KSM Kedokteran Forensik dan Medikolegal",
    pimpinan: "Prof. Dr. Ahmad Yudianto, dr., Sp.FM., Subsp.S.B.M(K), S.H., M.Kes",
  },
  {
    unit: "KSM Kedokteran Jiwa",
    pimpinan: "Royke Tony Kalalo, dr., Sp.KJ., Subsp.A.R(K), FISCM",
  },
  {
    unit: "KSM Kesehatan Kulit dan Kelamin",
    pimpinan: "Sawitri, dr., Sp.DVE, Subsp.DA., FINSDV, FAADV",
  },
  { unit: "KSM Mikrobiologi Klinik", pimpinan: "Naritha Vermasari, dr., Sp.MK (K)" },
  { unit: "KSM Neurologi", pimpinan: "Yudha Haryono, dr., Sp.N(K)" },
  {
    unit: "KSM Obstetri dan Ginekologi",
    pimpinan: "dr. Ashon Saadi, Sp.OG., Subsp.F.E.R",
  },
  {
    unit: "KSM Ortopaedi dan Traumatologi",
    pimpinan: "Tri Wahyu Martanto, dr., Sp.OT(K)",
  },
  {
    unit: "KSM Paliatif dan Bebas Nyeri",
    pimpinan: "RR Susie Ernawati Praptiningtyas, dr., PGD.Pall.Med",
  },
  {
    unit: "KSM Patologi Anatomi",
    pimpinan: "Dr. Etty Hary Kusumastuti, dr., Sp.P.A., Subsp.S.P.(K), FIAC",
  },
  { unit: "KSM Patologi Klinik", pimpinan: "Munawaroh Fitriah, dr., Sp.PK(K)" },
  {
    unit: "KSM Penyakit Dalam",
    pimpinan: "Prof. Dr. Siprianus Ugroseno Yudho Bintoro, dr., Sp.PD-KHOM",
  },
  {
    unit: "KSM Pulmonologi dan Ilmu Kedokteran Respirasi",
    pimpinan: "Prof. Dr. Laksmi Wulandari, dr., Sp.P(K), FCCP, FISCM, FIS",
  },
  { unit: "KSM Radiologi", pimpinan: "Tri Wulan Handarini, dr., Sp.Rad (K)" },
  {
    unit: "KSM Radioterapi",
    pimpinan: "Ulinta Purwati Pasaribu, dr., Sp.Rad., Sp.Onk.Rad(K)",
  },
  { unit: "KSM Urologi", pimpinan: "Dr. Tarmono, dr., Sp.U-K" },
];
</script>
