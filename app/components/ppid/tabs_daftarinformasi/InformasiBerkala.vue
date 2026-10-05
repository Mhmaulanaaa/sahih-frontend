<template>
  <div class="max-w-9xl mx-auto px-6">
    <div class="relative lg:p-8 bg-white shadow-lg rounded-2xl">
      <BaseAccordion title="Informasi Profil Badan Publik" :defaultOpen="true">
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
      </BaseAccordion>
      <BaseAccordion title="Rencana Strategis" :defaultOpen="true" class="mt-5">
        <BaseTable :headers="tableHeaders2" :rows="tableRows2">
          <template #action="{ row }">
            <div class="flex gap-2">
              <button
                @click="handleEdit2(row)"
                class="px-3 py-1 text-xs rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition"
              >
                <i class="fa-solid fa-eye"></i>
              </button>
            </div>
          </template>
        </BaseTable>
      </BaseAccordion>
      <BaseAccordion
        title="Ringkasan Program dan Kegiatan"
        :defaultOpen="true"
        class="mt-5"
      >
        <BaseTable :headers="tableHeaders3" :rows="tableRows3">
          <template #action="{ row }">
            <div class="flex gap-2">
              <button
                @click="handleEdit3(row)"
                class="px-3 py-1 text-xs rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition"
              >
                <i class="fa-solid fa-eye"></i>
              </button>
            </div>
          </template>
        </BaseTable>
      </BaseAccordion>
      <BaseAccordion
        title="Hasil Pelaksanaan Program dan Kegiatan"
        :defaultOpen="true"
        class="mt-5"
      >
        <BaseTable :headers="tableHeaders4" :rows="tableRows4">
          <template #action="{ row }">
            <div class="flex gap-2">
              <button
                @click="handleEdit4(row)"
                class="px-3 py-1 text-xs rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition"
              >
                <i class="fa-solid fa-eye"></i>
              </button>
            </div>
          </template>
        </BaseTable>
      </BaseAccordion>
      <BaseAccordion
        title="Pengumuman Pengadaan Barang dan Jasa"
        :defaultOpen="true"
        class="mt-5"
      >
        <BaseTable :headers="tableHeaders5" :rows="tableRows5">
          <template #action="{ row }">
            <div class="flex gap-2">
              <button
                @click="handleEdit5(row)"
                class="px-3 py-1 text-xs rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition"
              >
                <i class="fa-solid fa-eye"></i>
              </button>
            </div>
          </template>
        </BaseTable>
      </BaseAccordion>
      <BaseAccordion
        title="Laporan Pelayanan Informasi Publik"
        :defaultOpen="true"
        class="mt-5"
      >
        <BaseTable :headers="tableHeaders6" :rows="tableRows6">
          <template #action="{ row }">
            <div class="flex gap-2">
              <button
                @click="handleEdit6(row)"
                class="px-3 py-1 text-xs rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition"
              >
                <i class="fa-solid fa-eye"></i>
              </button>
            </div>
          </template>
        </BaseTable>
      </BaseAccordion>
      <BaseAccordion title="Informasi Lain-Lain" :defaultOpen="true" class="mt-5">
        <BaseTable :headers="tableHeaders7" :rows="tableRows7">
          <template #action="{ row }">
            <div class="flex gap-2">
              <button
                @click="handleEdit7(row)"
                class="px-3 py-1 text-xs rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition"
              >
                <i class="fa-solid fa-eye"></i>
              </button>
            </div>
          </template>
        </BaseTable>
      </BaseAccordion>
    </div>
    <div class="p-5 mt-5">
      <Pengaduan />
    </div>
  </div>
</template>

<script setup lang="ts">
import Pengaduan from "~/components/ppid/PengaduanInformasiPermohonan.vue";
import BaseTable from "~/components/form/BaseTable.vue";
import BaseAccordion from "~/components/form/BaseAccordion.vue";

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
    "Kedudukan, Domisili dan Alamat Lengkap",
    "Bagian Umum",
    "Subkoordinator Tata Usaha",
    "2023, RSUD Dr. Soetomo",
    "Selama Berlaku",
    "__action__",
  ],
  [
    "2",
    "Struktur Organisasi 	",
    "Bagian Umum",
    "Subkoordinator Hukum, Hubungan Masyarakat dan Pemasaran;Subkoordinator Tata Usaha",
    "2023, RSUD Dr. Soetomo",
    "Selama Berlaku",
    "__action__",
  ],
  [
    "3",
    "Profil Singkat Pejabat",
    "Bagian Umum",
    "Subkoordinator Tata Usaha",
    "2023, RSUD Dr. Soetomo",
    "Selama Berlaku",
    "__action__",
  ],
  [
    "4",
    "Visi dan Misi",
    "Bagian Umum",
    "Subkoordinator Hukum, Hubungan Masyarakat dan Pemasaran",
    "2023, RSUD Dr. Soetomo",
    "Selama Berlaku",
    "__action__",
  ],
  [
    "5",
    "Tugas Pokok dan Fungsi",
    "Bagian Umum",
    "Subkoordinator Hukum, Hubungan Masyarakat dan Pemasaran;Subkoordinator Tata Usaha",
    "2023, RSUD Dr. Soetomo",
    "Selama Berlaku",
    "__action__",
  ],
  [
    "6",
    "LHKASN",
    "Bagian Sumber Daya Manusia",
    "Subkoordinator Disiplin dan Pembinaan Sumber Daya Manusia",
    "2023, RSUD Dr. Soetomo",
    "1 Tahun",
    "__action__",
  ],
];

const handleEdit1 = (row: any) => {
  console.log("Edit:", row);
};

const tableHeaders2 = [
  "No",
  "Informasi",
  "Pejabat/Unit Yang Menguasai Informasi",
  "Penanggung Jawab Pembuat atau Penerbitan Informasi",
  "Waktu dan Tempat Pembuatan Informasi",
  "Jangka Waktu Penyimpanan atau Retensi",
  "Aksi",
];

const tableRows2 = [
  [
    "1",
    "Rencana Strategis",
    "Bagian Perencanaan dan Evaluasi",
    "Subkoordinator Perencanaan Program dan Anggaran",
    "2023, RSUD Dr. Soetomo",
    "5 Tahun",
    "__action__",
  ],
];

const handleEdit2 = (row: any) => {
  console.log("Edit:", row);
};

const tableHeaders3 = [
  "No",
  "Informasi",
  "Pejabat/Unit Yang Menguasai Informasi",
  "Penanggung Jawab Pembuat atau Penerbitan Informasi",
  "Waktu dan Tempat Pembuatan Informasi",
  "Jangka Waktu Penyimpanan atau Retensi",
  "Aksi",
];

const tableRows3 = [
  [
    "1",
    "Program dan Kegiatan",
    " Bagian Perencanaan dan Evaluasi",
    "Subkoordinator Perencanaan Program dan Anggaran;Subkoordinator Evaluasi dan Pelaporan",
    "2023, RSUD Dr. Soetomo",
    "1 Tahun",
    "__action__",
  ],
];

const handleEdit3 = (row: any) => {
  console.log("Edit:", row);
};

const tableHeaders4 = [
  "No",
  "Informasi",
  "Pejabat/Unit Yang Menguasai Informasi",
  "Penanggung Jawab Pembuat atau Penerbitan Informasi",
  "Waktu dan Tempat Pembuatan Informasi",
  "Jangka Waktu Penyimpanan atau Retensi",
  "Aksi",
];

const tableRows4 = [
  [
    "1",
    "Ringkasan Informasi Kinerja 2023 	",
    "Bagian Perencanaan dan Evaluasi",
    "Subkoordinator Evaluasi dan Pelaporan",
    "2024, RSUD Dr. Soetomo",
    "5 Tahun",
    "__action__",
  ],
  [
    "2",
    "Ringkasan Informasi Kinerja 2023",
    "Bagian Perencanaan dan Evaluasi",
    "Subkoordinator Evaluasi dan Pelaporan",
    "2023, RSUD Dr. Soetomo",
    "5 Tahun",
    "__action__",
  ],
  [
    "3",
    "LKj-IP 2022",
    "Bagian Perencanaan dan Evaluasi",
    "Subkoordinator Evaluasi dan Pelaporan",
    "2023, RSUD Dr. Soetomo",
    "5 Tahun",
    "__action__",
  ],
  [
    "4",
    "CALK (Catatan Arus Kas) 2022",
    "Bagian Akuntansi dan Aset",
    "Subkoordinator Akuntansi dan Verifikasi",
    "2023, RSUD Dr. Soetomo",
    "Selama Berlaku",
    "__action__",
  ],
  [
    "5",
    "DPPA 2023",
    "Bagian Akuntansi dan Aset",
    "Subkoordinator Akuntansi dan Verifikasi",
    "2023, RSUD Dr. Soetomo",
    "Selama Berlaku",
    "__action__",
  ],
];

const handleEdit4 = (row: any) => {
  console.log("Edit:", row);
};

const tableHeaders5 = [
  "No",
  "Informasi",
  "Pejabat/Unit Yang Menguasai Informasi",
  "Penanggung Jawab Pembuat atau Penerbitan Informasi",
  "Waktu dan Tempat Pembuatan Informasi",
  "Jangka Waktu Penyimpanan atau Retensi",
  "Aksi",
];

const tableRows5 = [
  [
    "1",
    "Rencana Pengadaan Barang dan Jasa 2024 	",
    "Unit Pelayanan Pengadaan Terpadu Satu Atap",
    "Unit Pelayanan Pengadaan Terpadu Satu Atap",
    "2024, RSUD Dr. Soetomo",
    "2 Tahun",
    "__action__",
  ],
  [
    "2",
    "Rencana Pengadaan Barang dan Jasa 2024",
    "Unit Pelayanan Pengadaan Terpadu Satu Atap",
    "Unit Pelayanan Pengadaan Terpadu Satu Atap",
    "2023, RSUD Dr. Soetomo",
    "2 Tahun",
    "__action__",
  ],
  [
    "3",
    "Pengumuman Proses Pengadaan",
    "Unit Pelayanan Pengadaan Terpadu Satu Atap",
    "Unit Pelayanan Pengadaan Terpadu Satu Atap",
    "2023, RSUD Dr. Soetomo",
    "2 Tahun",
    "__action__",
  ],
  [
    "4",
    "Kontrak Pengadaan Tahun 2022 ",
    "Unit Pelayanan Pengadaan Terpadu Satu Atap",
    "Unit Pelayanan Pengadaan Terpadu Satu Atap",
    "2022, RSUD Dr. Soetomo",
    "5 Tahun",
    "__action__",
  ],
];

const handleEdit5 = (row: any) => {
  console.log("Edit:", row);
};

const tableHeaders6 = [
  "No",
  "Informasi",
  "Pejabat/Unit Yang Menguasai Informasi",
  "Penanggung Jawab Pembuat atau Penerbitan Informasi",
  "Waktu dan Tempat Pembuatan Informasi",
  "Jangka Waktu Penyimpanan atau Retensi",
  "Aksi",
];

const tableRows6 = [
  [
    "1",
    "poran Pelayanan Informasi Publik Tahunan 	",
    "Bagian Umum/PPID",
    "Subkoordinator Hukum, Hubungan Masyarakat dan Pemasaran",
    "2023, RSUD Dr. Soetomo",
    "Tahunan",
    "__action__",
  ],
];

const handleEdit6 = (row: any) => {
  console.log("Edit:", row);
};

const tableHeaders7 = [
  "No",
  "Informasi",
  "Pejabat/Unit Yang Menguasai Informasi",
  "Penanggung Jawab Pembuat atau Penerbitan Informasi",
  "Waktu dan Tempat Pembuatan Informasi",
  "Jangka Waktu Penyimpanan atau Retensi",
  "Aksi",
];

const tableRows7 = [
  [
    "1",
    "Kebijakan Direktur RSUD Dr. Soetomo yang Mengikat Publik 	",
    "Bagian Umum",
    "Subkoordinator Hukum, Hubungan Masyarakat dan Pemasaran",
    "2023, RSUD Dr. Soetomo",
    "Selama Berlaku",
    "__action__",
  ],
  [
    "2",
    "Prosedur Memperoleh Informasi Publik 	",
    "Bagian Umum",
    "Subkoordinator Hukum, Hubungan Masyarakat dan Pemasaran",
    "2023, RSUD Dr. Soetomo",
    "Selama Berlaku",
    "__action__",
  ],
  [
    "3",
    "Prosedur Pengaduan Penyalahgunaan Wewenang atau Pelanggaran 	 	",
    "Satuan Pengawas Internal",
    "Satuan Pengawas Internal 	",
    "2023, RSUD Dr. Soetomo",
    "Selama Berlaku",
    "__action__",
  ],
  [
    "4",
    "Prosedur Peringatan Dini dan Evakuasi Keadaan Darurat di RSUD Dr. Soetomo 	",
    "Subkoordinator Hukum, Hubungan Masyarakat dan Pemasaran 	",
    "Komite Keselamatan Kerja Rumah Sakit 	",
    "2023, RSUD Dr. Soetomo",
    "Selama Berlaku",
    "__action__",
  ],
];

const handleEdit7 = (row: any) => {
  console.log("Edit:", row);
};
</script>
