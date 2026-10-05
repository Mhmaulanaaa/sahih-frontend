<template>
  <div class="max-w-9xl mx-auto px-6">
    <div class="relative lg:p-8 bg-white shadow-lg rounded-2xl">
      <BaseTable :rows="tableRows1">
        <template #thead>
          <tr class="bg-emerald-50 text-emerald-700 text-xs text-center">
            <th rowspan="2" class="px-4 py-3">No.</th>
            <th rowspan="2" class="px-4 py-3">Informasi</th>
            <th rowspan="2" class="px-4 py-3">Dasar Hukum</th>
            <th rowspan="2" class="px-4 py-3">Batas Waktu Pengecualian</th>
            <th colspan="2" class="px-4 py-3">Konsekuensi</th>
          </tr>
          <tr class="bg-emerald-50 text-emerald-700 text-xs text-center">
            <th class="px-4 py-3">Dampak Jika Dibuka</th>
            <th class="px-4 py-3">Dampak Jika Ditutup</th>
          </tr>
        </template>

        <template #action="{ row }">
          <!-- kalau tetap mau action -->
          <button class="text-emerald-600 hover:underline">Detail</button>
        </template>
      </BaseTable>
    </div>
    <div class="p-5 mt-0">
      <Pengaduan />
    </div>
  </div>
</template>

<script setup lang="ts">
import Pengaduan from "~/components/ppid/PengaduanInformasiPermohonan.vue";
import BaseTable from "~/components/form/BaseTable.vue";

const tableRows1 = [
  [
    "1",
    "Biodata Elektronik PNS (Basis Data)",
    "UU RI No 14 Tahun 2008 Tentang Keterbukaan Informasi Publik",
    "Tidak Terbatas",
    "Mengungkap Data Pribadi PNS yang Bersifat Rahasia",
    "Melindungi Data Pribadi PNS yang Bersifat Rahasia",
  ],
  [
    "2",
    "Dokumen/Berkas/Arsip PNS",
    "Undang-Undang Republik Indonesia Nomor 14 Tahun 2008 Tentang Keterbukaan Informasi Publik",
    "Tidak Terbatas",
    "Mengungkap Data Pribadi PNS yang Bersifat Rahasia",
    "Melindungi Data Pribadi PNS yang Bersifat Rahasia",
  ],
  [
    "3",
    "Identitas PNS yang Melanggar Disiplin dan Dijatuhi Hukuman",
    "Undang-Undang Republik Indonesia Nomor 14 Tahun 2008 Tentang Keterbukaan Informasi Publik",
    "Tidak Terbatas",
    "Mengungkap Data Pribadi PNS yang Bersifat Rahasia",
    "Melindungi Data Pribadi PNS yang Bersifat Rahasia",
  ],
  [
    "4",
    "Identitas PNS yang Mengajukan Izin Perceraian",
    "Undang-Undang Republik Indonesia Nomor 14 Tahun 2008 Tentang Keterbukaan Informasi Publik",
    "Tidak Terbatas",
    "Mengungkap Data Pribadi PNS yang Bersifat Rahasia",
    "Melindungi Data Pribadi PNS yang Bersifat Rahasia",
  ],
  [
    "5",
    "Daftar Nilai PNS Antara Lain SKP",
    "Undang-Undang Republik Indonesia Nomor 14 Tahun 2008 Tentang Keterbukaan Informasi Publik; Peraturan Pemerintah Republik Indonesia Nomor 10 Tahun 1979 Tentang Penilaian Pelaksanaan Pekerjaan Pegawai Negeri Sipil",
    "Tidak Terbatas",
    "Mengungkap Data Pribadi PNS yang Bersifat Rahasia",
    "Melindungi Data Pribadi PNS yang Bersifat Rahasia",
  ],
  [
    "6",
    "Data Usulan Pengangkatan PNS dalam Jabatan Struktural",
    "Undang-Undang Republik Indonesia Nomor 14 Tahun 2008 Tentang Keterbukaan Informasi Publik",
    "Sampai dengan Pelantikan",
    "Merugikan Proses Penyusunan Kebijakan atau Menghambat Kesuksesan Kebijakan karena Adanya Pengungkapan Secara Prematur",
    "Menjaga Iklim Konduksif",
  ],
  [
    "7",
    "Arsip Dinamis yang Menurut Sifatnya Rahasia",
    "Undang-Undang Republik Indonesia Nomor 14 Tahun 2008 Tentang Keterbukaan Informasi Publik",
    "Tidak Terbatas",
    "Merugikan Proses Penyusunan Kebijakan karena Adanya Pengungkapan Secara Prematur",
    "Melindungi Kerahasiaan Dokumen",
  ],
  [
    "8",
    "Rincian HPS (Harga Perkiraan Sendiri)",
    "Undang-Undang Republik Indonesia Nomor 14 Tahun 2008 Tentang Keterbukaan Informasi Publik; Peraturan Presiden Republik Indonesia Nomor 12 Tahun 2021 Tentang Perubahan Atas Peraturan Presiden Nomor 16 Tahun 2018 Tentang Pengadaan Barang/Jasa Pemerintah",
    "Tidak Terbatas",
    "Menghambat Kesuksesan Kebijakan karena Ada Pengungkapan Secara Prematur (Informasi Apabila Dibuka Menimbulkan Penilaian Tidak Baik)",
    "Efisiensi Anggaran karena Diperoleh Penawaran Harga yang Wajar",
  ],
  [
    "9",
    "Dokumen Penawaran Kontrak",
    "Undang-Undang Republik Indonesia Nomor 14 Tahun 2008 Tentang Keterbukaan Informasi Publik; Peraturan Presiden Republik Indonesia Nomor 12 Tahun 2021 Tentang Perubahan Atas Peraturan Presiden Nomor 16 Tahun 2018 Tentang Pengadaan Barang/Jasa Pemerintah",
    "Selama Proses Pengadaan Barang",
    "Muncul Persaingan Usaha yang Sehat",
    "Dapat Menjaga Objektifitas Penilaian",
  ],
  [
    "10",
    "Lokasi Server",
    "Undang-Undang Republik Indonesia Nomor 11 Tahun 2008 Tentang Informasi dan Transaksi Elektronik",
    "Tidak Terbatas",
    "Tindakan Kriminal Pengrusakan dan Pencurian Data",
    "Melindungi/Mengamankan Perangkat serta Data",
  ],
  [
    "11",
    "Internet Protocol/IP Address Private",
    "Undang-Undang Republik Indonesia Nomor 11 Tahun 2008 Tentang Informasi dan Transaksi Elektronik",
    "Tidak Terbatas",
    "Penerobosan/Penyalahgunaan Hak Akses",
    "Menjaga/Melindungi Akses",
  ],
  [
    "12",
    "Bandwidth Management",
    "Undang-Undang Republik Indonesia Nomor 11 Tahun 2008 Tentang Informasi dan Transaksi Elektronik",
    "Tidak Terbatas",
    "Penyalahgunaan Kapasitas Bandwidth Diluar Ketentuan",
    "Mengatur Kestabilan Penggunaan Bandwidth",
  ],
  [
    "13",
    "Kode Akses Elektronik",
    "Undang-Undang Republik Indonesia Nomor 11 Tahun 2008 Tentang Informasi dan Transaksi Elektronik",
    "Tidak Terbatas",
    "Penyalahgunaan Pihak Lain",
    "Menjaga Keamanan Jaringan Komputer",
  ],
  [
    "14",
    "Sistem Keamanan Elektronik",
    "Undang-Undang Republik Indonesia Nomor 11 Tahun 2008 Tentang Informasi dan Transaksi Elektronik",
    "Tidak Terbatas",
    "Penyalahgunaan Pihak Lain",
    "Menjaga Keamanan Jaringan Komputer",
  ],
  [
    "15",
    "Sistem Manajemen Basis Data",
    "Undang-Undang Republik Indonesia Nomor 14 Tahun 2008 Tentang Keterbukaan Informasi Publik; Undang-Undang Republik Indonesia Nomor 11 Tahun 2008 Tentang Informasi dan Transaksi Elektronik",
    "Tidak Terbatas",
    "Penyalahgunaan Pihak Lain",
    "Menjaga Keamanan Basis Data",
  ],
  [
    "16",
    "Hasil: Pemeriksaan Reguler, Pemeriksaan Kasus, Pemeriksaan Khusus, Review Laporan Keuangan dan Evaluasi/Pemantauan",
    "Undang-Undang Republik Indonesia Nomor 14 Tahun 2008 Tentang Keterbukaan Informasi Publik; Peraturan Menteri Pendayagunaan Aparatur Negara Nomor Per/04/M.PAN/03/2008 Tentang Kode Etik APIP; Peraturan Menteri Pendayagunaan Aparatur Negara Nomor Per/05/M.PAN/03/2008 Tentang Standar Audit APIP",
    "Tidak Terbatas",
    "Menghambat Kesuksesan Kebijakan karena Adanya Pengungkapan secara Prematur, Melanggar PP Tentang Batasan Distribusi LHP dan Melanggar Peraturan MENPAN Tentang Batasan Distribusi LHP",
    "Membantu Badan Publik dalam Mencapai Keberhasilan Pelaksanaan Kebijakan",
  ],
  [
    "17",
    "Rekam Medis",
    "Undang-Undang Republik Indonesia Nomor 29 Tahun 2004 Tentang Praktik Kedokteran; Undang-Undang Republik Indonesia Nomor 14 Tahun 2008 Tentang Keterbukaan Informasi Publik; Undang-Undang Republik Indonesia Nomor 44 Tahun 2009 Tentang Rumah Sakit",
    "Tidak Terbatas",
    "Mengungkap Rahasia Pribadi Terkait Kondisi Kesehatan dan Fisik Seseorang",
    "Melindungi Kerahasiaan Pribadi Terkait Kondisi Kesehatan dan Fisik Seseorang",
  ],
  [
    "18",
    "Data Hutang Pasien kepada Rumah Sakit",
    "Undang-Undang Republik Indonesia Nomor 14 Tahun 2008 Tentang Keterbukaan Informasi Publik",
    "Tidak Terbatas",
    "Mengungkap Rahasia dan Kondisi Keuangan",
    "Melindungi Kerahasiaan Pribadi Terkait Kondisi Keuangan Seseorang",
  ],
  [
    "19",
    "Rincian Pendapatan Rumah Sakit",
    "Undang-Undang Republik Indonesia Nomor 14 Tahun 2008 Tentang Keterbukaan Informasi Publik",
    "Tidak Terbatas",
    "Muncul Persaingan Usaha/Kepentingan yang Tidak Sehat",
    "Melindungi Rumah Sakit dari Persaingan Usaha/Kepentingan yang Tidak Sehat",
  ],
  [
    "20",
    "Naskah Kerjasama",
    "Undang-Undang Republik Indonesia Nomor 14 Tahun 2008 Tentang Keterbukaan Informasi Publik",
    "Tidak Terbatas",
    "Muncul Persaingan Usaha/Kepentingan yang Tidak Sehat",
    "Melindungi Rumah Sakit dari Persaingan Usaha/Kepentingan yang Tidak Sehat",
  ],
  [
    "21",
    "Besaran Harga Hasil Penilaian Lembaga Independen/Appraisal untuk Pengadaan",
    "Undang-Undang Republik Indonesia Nomor 14 Tahun 2008 Tentang Keterbukaan Informasi Publik",
    "Tidak Terbatas",
    "Muncul Persaingan Usaha/Kepentingan yang Tidak Sehat",
    "Melindungi Rumah Sakit dari Persaingan Usaha/Kepentingan yang Tidak Sehat",
  ],
  [
    "22",
    "Data Insiden Pasien",
    "Peraturan Menteri Kesehatan Republik Indonesia Nomor 11 Tahun 2017 Tentang Keselamatan Pasien",
    "Tidak Terbatas",
    "Reputasi Rumah Sakit dan Beresiko Terjadi Masalah Hukum",
    "Melindungi Reputasi Rumah Sakit dan Meminimalisir Masalah Hukum",
  ],
];
</script>
