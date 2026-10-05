<template>
  <table class="w-full text-sm">
    <thead class="bg-emerald-100 text-emerald-800">
      <tr>
        <th class="px-6 py-3 text-left font-semibold w-1/2">Nama Unit Kerja</th>
        <th class="px-6 py-3 text-left font-semibold w-1/2">Nama Pimpinan Unit Kerja</th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="(bagian, index) in data"
        :key="index"
        :class="index % 2 === 0 ? 'bg-emerald-50' : 'bg-emerald-100/40'"
        class="align-top border-b border-emerald-100"
      >
        <!-- KOLOM UNIT -->
        <td class="px-6 py-4">
          <p class="font-semibold text-gray-900">
            {{ bagian.nama }}
          </p>

          <ul class="list-disc pl-5 mt-2 space-y-1 text-gray-700">
            <li v-for="(unit, i) in bagian.tim" :key="i">
              {{ unit }}
            </li>
          </ul>
        </td>

        <!-- KOLOM PIMPINAN -->
        <td class="px-6 py-4">
          <p class="font-semibold text-gray-900">
            {{ bagian.pimpinan }}
          </p>

          <ul class="list-disc pl-5 mt-2 space-y-1 text-gray-700">
            <li v-for="(nama, i) in bagian.pimpinanTim" :key="i">
              {{ nama }}
            </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup lang="ts">
const data = [
  {
    nama: "Bagian Umum",
    pimpinan: "Robeth Jabbar Syahansyah, S.H., M.H (Plt)",
    tim: ["Tim Kerja Tata Usaha", "Tim Kerja Rumah Tangga"],
    pimpinanTim: ["Wendry Juli Kharisma, S.Ak", "Priyo Utomo, S.Sos"],
  },
  {
    nama: "Bagian Sarana dan Prasarana",
    pimpinan: "drg. Poetri Sriestari Soetoyo, MARS",
    tim: [
      "Tim Kerja Sarana dan Prasarana Medik",
      "Tim Kerja Sarana dan Prasarana Non Medik",
      "Tim Kerja Data dan Informasi",
    ],
    pimpinanTim: [
      "Dyah Ratnaningtyas, S.Sos",
      "Gogot Kurniawan, S.E",
      "Ika Wulandari, S.Kom., M.T",
    ],
  },
  {
    nama: "Bagian Akuntansi dan Aset",
    pimpinan: "Robeth Jabbar Syahansyah, S.H., M.H",
    tim: ["Tim Kerja Akuntansi dan Verifikasi", "Tim Kerja Aset"],
    pimpinanTim: ["Andari Keisnaini, S.E., M.Ak", "Yudi Purwanto, S.E., M.Ak"],
  },
  {
    nama: "Bagian Keuangan",
    pimpinan: "Mirza Evsanti, S.KM., M.Kes",
    tim: ["Tim Kerja Pendapatan", "Tim Kerja Perbendaharaan"],
    pimpinanTim: ["Sesilia Adriana Arif, S.E., M.Ak", "Angga Teja Rakhmantoro, A.Md.AK"],
  },
  {
    nama: "Bagian Perencanaan dan Evaluasi",
    pimpinan: "Ida Mayasari, S.KM., M.Kes.",
    tim: [
      "Tim Kerja Perencanaan Program dan Anggaran",
      "Tim Kerja Evaluasi dan Pelaporan",
    ],
    pimpinanTim: ["-", "drg. Dian Fajar Hapsari, M.Kes"],
  },
  {
    nama: "Bagian Sumber Daya Manusia",
    pimpinan: "Septiana Widyantari, dr., Sp.DVE., FINSDV., FAADV",
    tim: [
      "Tim Kerja Perencanaan Pengembangan Sumber Daya Manusia",
      "Tim Kerja Disiplin dan Pembinaan Sumber Daya Manusia",
      "Tim Kerja Administrasi Sumber Daya Manusia",
    ],
    pimpinanTim: [
      "Christina M. Simatupang, S.KM., M.I.Kom",
      "Happy Setiawan, S.Psi., M.Psi.",
      "Siti Agustina Triastuti, S.T.",
    ],
  },
  {
    nama: "Bagian Pendidikan dan Pelatihan",
    pimpinan: "Astindari, dr., Sp.DVE., Subsp.Vens",
    tim: ["Tim Kerja Pendidikan", "Tim Kerja Pelatihan"],
    pimpinanTim: ["Deasy Ardiany, dr., Sp.PD., K-EMD", "Wahyu Mananda, dr., Sp.An-TI"],
  },
  {
    nama: "Bagian Penelitian dan Pengembangan",
    pimpinan: "Dr. Andy Darma, dr., SpA(K)",
    tim: ["Tim Kerja Penelitian", "Tim Kerja Pengembangan"],
    pimpinanTim: [
      "Inggar Narasinta, dr., Sp.KFR, K.R (K)",
      "Fany Arsad Hidayaturrachman, dr",
    ],
  },
  {
    nama: "Bidang Pelayanan Medik",
    pimpinan: "Dr. Mouli Edward, dr., M.Kes., SpOT(K)",
    tim: [
      "Tim Kerja Pelayanan Rawat Jalan dan Rawat Inap",
      "Tim Kerja Pelayanan Rawat Darurat dan Invasif",
    ],
    pimpinanTim: ["Azimatul Karimah, dr., Sp.KJ (K)", "Kun Arifi Abbas, dr., Sp.An"],
  },
  {
    nama: "Bidang Penunjang Medik",
    pimpinan: "Husnul Ghoib, dr., Sp.B(K)Onk",
    tim: [
      "Tim Kerja Diagnostik dan Perencanaan Peralatan Medik",
      "Tim Kerja Pengembangan Perbekalan Medik dan Farmasi",
    ],
    pimpinanTim: ["Anita Widyoningroem, dr., Sp.Rad", "Muhammad Yusuf, dr., Sp.OG"],
  },
  {
    nama: "Bidang Keperawatan",
    pimpinan: "Adi Sukrisno, S.Kep., Ns.",
    tim: [
      "Tim Kerja Keperawatan Rawat Jalan dan Rawat Inap",
      "Tim Kerja Keperawatan Rawat Darurat dan Invasif",
    ],
    pimpinanTim: [
      "Zulkifli Kurniawan Andriyadi, S.Kep.Ns",
      "Nurul Rachmaningsih, S.Kep.Ns",
    ],
  },
  {
    nama: "Satuan Pengawas Internal",
    pimpinan: "Judhi Kartiningroem, S.E., M.M.",
    tim: [],
    pimpinanTim: [],
  },
  {
    nama: "Unit Pelayanan Pengadaan Terpadu Satu Atap",
    pimpinan: "Ari Purwanto, S.KM.",
    tim: [],
    pimpinanTim: [],
  },
  {
    nama: "Unit Medical Check Up",
    pimpinan: "Senja Septia Darmiati, dr",
    tim: [],
    pimpinanTim: [],
  },
  {
    nama: "Clinical Research Unit",
    pimpinan: "Prof. Dr. Laksmi Wulandari, dr., Sp.P(K), FCCP",
    tim: [],
    pimpinanTim: [],
  },
];
</script>
