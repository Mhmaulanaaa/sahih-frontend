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
    unit: "Instalasi Anestesi dan Reanimasi",
    pimpinan: "Anna Surgean Veterini, dr., Sp.An.",
  },
  { unit: "Instalasi Bank Jaringan", pimpinan: "Dr. Heri Suroto, dr., Sp.OT (K)." },
  {
    unit: "Instalasi Bedah Pusat",
    pimpinan: "Dr. Irwan Barlian Immadoel Haq, dr., Sp.BS (K).",
  },
  { unit: "Instalasi Casemix Center", pimpinan: "Ahmad Amin Mahmudin, dr., M.Kes." },
  { unit: "Instalasi Farmasi", pimpinan: "Irvina Harini, S.Si., Apt., Sp.FRS." },
  {
    unit: "Instalasi Gawat Darurat",
    pimpinan: "M. Hardian Basuki, dr., Sp.OT., Sub.Sp.Onk.Ort.R(K)",
  },
  {
    unit: "Instalasi Gedung Bedah Pusat Terpadu",
    pimpinan: "Nining Dwi Suti Ismawati, drg., Sp.BM.",
  },
  {
    unit: "Instalasi Gedung Pusat Diagnostik Terpadu",
    pimpinan: "R. Ari Wahyu Hidayati., S.Sos., M.M.",
  },
  { unit: "Instalasi Gigi dan Mulut", pimpinan: "Dyah Ernawati, drg." },
  { unit: "Instalasi Gizi", pimpinan: "Dyah Puspitasari, S.KM." },
  { unit: "Instalasi Graha Amerta", pimpinan: "Iskandar Ali, dr., Sp.B (K) Onk." },
  { unit: "Instalasi Dialisis", pimpinan: "Widodo, dr., Sp.PD.K-GH., FINASIM." },
  {
    unit: "Instalasi Hukum, Hubungan Masyarakat dan Pemasaran",
    pimpinan: "Martha Kurnia Kusumawardani, dr., Sp.KFR.",
  },
  { unit: "Instalasi Invasif Minimal Urogenital", pimpinan: "Johan Renaldo, dr., Sp.U." },
  {
    unit: "Instalasi Kedokteran Forensik dan Medikolegal",
    pimpinan: "Abdul Aziz, dr., Sp.F.",
  },
  {
    unit: "Instalasi Laboratorium Sentral",
    pimpinan: "Etty Hari Kusumastuti, dr., Sp.PA (K)",
  },
  {
    unit: "Instalasi Paliatif dan Bebas Nyeri",
    pimpinan: "Agus Ali Fauzi, dr., PGD.Pall.Med (ECU).",
  },
  { unit: "Instalasi Pemeliharaan Sarana Medik", pimpinan: "Budi Minarno, S.ST." },
  {
    unit: "Instalasi Promosi Kesehatan Rumah Sakit",
    pimpinan: "Pesta Parulian Maurid E., dr., Sp.An.",
  },
  {
    unit: "Instalasi Pusat Pelayanan Jantung Terpadu",
    pimpinan: "Budi Baktijasa D., dr., Sp.JP (K)., FIHA.",
  },
  {
    unit: "Instalasi Pusat Pelayanan Pendidikan dan Riset Penyakit Menular",
    pimpinan: "Tri Wahyu Martanto, dr., Sp.OT (K).",
  },
  {
    unit: "Instalasi Radiodiagnostik",
    pimpinan: "Hartono Yudi Sarastika, dr., Sp.Rad (K).",
  },
  { unit: "Instalasi Radioterapi", pimpinan: "Dyah Erawati, dr., Sp.Rad (K) Onk.Rad." },
  { unit: "Instalasi Rawat Inap Anak", pimpinan: "Dr. Mira Irnawati, dr., Sp.A(K)." },
  {
    unit: "Instalasi Rawat Inap Bedah",
    pimpinan: "Dr. R. Marjono Dwi Wibowo, dr., Sp.B (K) KL",
  },
  {
    unit: "Instalasi Rawat Inap Jiwa",
    pimpinan: "Dr. Margaritta Maria Maramis, dr., Sp.KJ (K)., FISCM.",
  },
  { unit: "Instalasi Rawat Inap Medik", pimpinan: "Ariani Permatasari, dr., Sp.P (K)." },
  {
    unit: "Instalasi Rawat Inap Obstetri Ginekologi",
    pimpinan: "Wita Saraswati, dr., Sp.OG (K).",
  },
  {
    unit: "Instalasi Rawat Intensif dan Reanimasi",
    pimpinan: "Fajar Perdhana, dr., Sp.An., KIC., KAKV.",
  },
  { unit: "Instalasi Rawat Jalan", pimpinan: "Trisiswati Indranarum, dr., Sp.KK." },
  { unit: "Instalasi Rehabilitasi Medik", pimpinan: "Nuniek Nugraheni S., dr., Sp.RM." },
  { unit: "Instalasi Rekam Medik", pimpinan: "Ahmad Muhajir, A.Md.PK., S.Tr.RMIK" },
  { unit: "Instalasi Sanitasi Lingkungan", pimpinan: "Suhariono, S.T., M.KL." },
  {
    unit: "Instalasi Soetomo Health Education and Training Center",
    pimpinan: "Dhihintia Jiwangga Suta Winarno, dr., Sp.BTKV.",
  },
  {
    unit: "Instalasi Sterilisasi dan Binatu",
    pimpinan: "Ammar Widitaputra, S.Farm., Apt.",
  },
  {
    unit: "Plt. Instalasi Teknologi Komunikasi dan Informasi",
    pimpinan: "Wahyu Adi Nugroho, S.Kom",
  },
  { unit: "Instalasi Transfusi Darah", pimpinan: "Betty Agustina T., dr., Sp.PK." },
  {
    unit: "Instalasi Keamanan, Ketertiban dan Perparkiran",
    pimpinan: "Rini Ekowati, S.KM., M.KL",
  },
  {
    unit: "Instalasi Onkologi Center",
    pimpinan:
      "Dr. Desak Gede Agung Pramesti Devi, dr., M.Ked.Klin., Sp.B., Subsp.Onk (K)",
  },
];
</script>
