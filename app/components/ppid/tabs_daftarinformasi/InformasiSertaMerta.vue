<template>
  <div class="max-w-9xl mx-auto px-6">
    <div class="relative lg:p-8 bg-white shadow-lg rounded-2xl">
      <BaseAccordion
        title="Informasi Keadaan yang Dapat Mengancam Hajat Hidup Orang Banyak dan Ketertiban Umum di Lingkungan Rumah Sakit"
        :defaultOpen="true"
      >
        <BaseTable :headers="tableHeaders1" :rows="tableRows1">
          <template #action="{ row }">
            <div class="flex gap-2">
              <button
                @click="handleEdit1(row)"
                class="px-3 py-1 text-xs rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition"
              >
                <i class="fa-solid fa-eye"></i>
              </button></div
          ></template>
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
import BaseAccordion from "~/components/form/BaseAccordion.vue";
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
    "Informasi Bencana Alam/Non Alam",
    "Bagian Umum",
    "Subkoordinator Hukum, Hubungan Masyarakat dan Pemasaran",
    "Tentatif, RSUD Dr. Soetomo",
    "Selama Berlaku",
    "__action__",
  ],
  [
    "2",
    "Informasi Bencana Sosial ",
    "Bagian Umum",
    "Subkoordinator Hukum, Hubungan Masyarakat dan Pemasaran",
    "Tentatif, RSUD Dr. Soetomo",
    "Selama Berlaku",
    "__action__",
  ],
  [
    "3",
    "Informasi Tentang Peta Pesebaran Area Menular di RSUD Dr. Soetomo 	",
    "Bagian Umum",
    "Subkoordinator Hukum, Hubungan Masyarakat dan Pemasaran",
    "Tentatif, RSUD Dr. Soetomo",
    "Selama Berlaku",
    "__action__",
  ],
  [
    "4",
    "Informasi Tentang Potensi Gangguan Terhadap Utilitas Publik",
    "Bagian Umum",
    "Subkoordinator Hukum, Hubungan Masyarakat dan Pemasaran",
    "Tentatif, RSUD Dr. Soetomo",
    "Selama Berlaku",
    "__action__",
  ],
];
const handleEdit1 = (row: any) => {
  console.log("Edit:", row);
};
</script>
