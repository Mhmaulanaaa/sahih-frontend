<template>
  <div class="max-w-9xl mx-auto px-6">
    <div class="relative lg:p-8 bg-white shadow-lg rounded-2xl">
      <BaseTable :headers="tableHeaders1" :rows="tableRows1">
        <template #action="{ row }">
          <div class="flex gap-2">
            <button
              @click="handleEdit1(row)"
              class="px-3 py-1 text-xs rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition"
            >
              <i class="fa-solid fa-eye"></i>
            </button>
          </div>
        </template>
      </BaseTable>
    </div>
    <div class="p-5 mt-5">
      <Pengaduan />
    </div>
  </div>
</template>

<script setup lang="ts">
import Pengaduan from "~/components/ppid/PengaduanInformasiPermohonan.vue";
import BaseTable from "~/components/form/BaseTable.vue";

const tableHeaders1 = [
  "No",
  "Informasi",
  "Pejabat/Unit Yang Menguasai Informasi",
  "Penanggung Jawab Pembuat atau Penerbitan Informasi",
  "Waktu dan Tempat Pembuatan Informasi",
  "Jangka Waktu Penyimpanan atau Retensi",
  "Aksi",
];

const tableRows1 = [
  [
    "1",
    "Daftar Informasi Publik 2024",
    "Bagian Umum",
    "Subkoordinator Hukum, Hubungan Masyarakat dan Pemasaran",
    "2024, RSUD Dr. Soetomo",
    "6 Bulan",
    "__action__",
  ],
  [
    "2",
    "Daftar Informasi Publik 2023",
    "Bagian Umum",
    "Subkoordinator Hukum, Hubungan Masyarakat dan Pemasaran",
    "2023, RSUD Dr. Soetomo",
    "6 Bulan",
    "__action__",
  ],
  [
    "3",
    "Informasi Tentang Tarif",
    "Bagian Keuangan; Bidang Pelayanan Medik; Bidang Penunjang Medik",
    "Subkoordinator Pendapatan; Subkoordinator Perbendaharaan; Subkoordinator Pelayanan Rawat Jalan dan Rawat Inap; Subkoordinator Pelayanan Rawat Darurat dan Invasif; Subkoordinator Diagnostik dan Perencanaan Peralatan Medik; Subkoordinator Perbekalan dan Farmasi",
    "2023, RSUD Dr. Soetomo",
    "Setiap Ada Perubahan",
    "__action__",
  ],
  [
    "4",
    "Informasi Tentang Kegiatan Rumah Sakit",
    "Bagian Umum; Bagian Pendidikan dan Pelatihan",
    "Subkoordinator Hukum, Hubungan Masyarakat dan Pemasaran; Subkoordinator Pelatihan",
    "2023, RSUD Dr. Soetomo",
    "Sebelum Kegiatan",
    "__action__",
  ],
  [
    "5",
    "Informasi Kegiatan Pemerintah Provinsi dan Nasional",
    "Bagian Umum",
    "Subkoordinator Hukum, Hubungan Masyarakat dan Pemasaran",
    "2023, RSUD Dr. Soetomo",
    "Menjelang Kegiatan",
    "__action__",
  ],
  [
    "6",
    "Informasi Kerjasama dengan Pihak Ketiga",
    "Bagian Umum",
    "Subkoordinator Hukum, Hubungan Masyarakat dan Pemasaran",
    "2023, RSUD Dr. Soetomo",
    "Setiap Ada Perubahan",
    "__action__",
  ],
  [
    "7",
    "Jurnal Penelitian",
    "Bagian Penelitian dan Pengembangan",
    "Subkoordinator Penelitian",
    "2023, RSUD Dr. Soetomo",
    "Setiap Tahun",
    "__action__",
  ],
  [
    "8",
    "Informasi Tentang Pelatihan",
    "Bagian Pendidikan dan Pelatihan",
    "Subkoordinator Pelatihan",
    "2023, RSUD Dr. Soetomo",
    "Sebelum dan Setelah Kegiatan",
    "__action__",
  ],
  [
    "9",
    "Informasi Tentang Keputusan Direktur RSUD Dr. Soetomo yang Mengikat Publik",
    "Bagian Umum",
    "Subkoordinator Hukum, Hubungan Masyarakat dan Pemasaran",
    "2023, RSUD Dr. Soetomo",
    "Selama Masa Berlaku",
    "__action__",
  ],
  [
    "10",
    "Informasi Tentang Organisasi Rumah Sakit",
    "Bagian Umum",
    "Subkoordinator Hukum, Hubungan Masyarakat dan Pemasaran",
    "2023, RSUD Dr. Soetomo",
    "Selama Masa Berlaku",
    "__action__",
  ],
  [
    "11",
    "Kegiatan Pelayanan Informasi Publik 2023",
    "Bagian Umum",
    "Subkoordinator Hukum, Hubungan Masyarakat dan Pemasaran",
    "2024, RSUD Dr. Soetomo",
    "1 Tahun",
    "__action__",
  ],
  [
    "12",
    "Kegiatan Pelayanan Informasi Publik 2022",
    "Bagian Umum",
    "Subkoordinator Hukum, Hubungan Masyarakat dan Pemasaran",
    "2023, RSUD Dr. Soetomo",
    "1 Tahun",
    "__action__",
  ],
  [
    "13",
    "Laporan Pengaduan Publik 2022",
    "Bagian Umum",
    "Subkoordinator Hukum, Hubungan Masyarakat dan Pemasaran",
    "2023, RSUD Dr. Soetomo",
    "1 Tahun",
    "__action__",
  ],
  [
    "14",
    "Laporan Pengaduan Publik 2023",
    "Bagian Umum",
    "Subkoordinator Hukum, Hubungan Masyarakat dan Pemasaran",
    "2024, RSUD Dr. Soetomo",
    "1 Tahun",
    "__action__",
  ],
];

const handleEdit1 = (row: any) => {
  console.log(row);
};
</script>
