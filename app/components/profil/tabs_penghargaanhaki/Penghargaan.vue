<script setup lang="ts">
import BaseAccordion from "~/components/form/BaseAccordion.vue";

const { asset } = useAsset();

const awards2025 = [
  {
    image: "/images/penghargaan/2025/tahun-2025-1.jpg",
    nama: "Sata Jatim Awards 2025 (Terbaik 1 Kategori Rumah Sakit)",
    tanggal: "08 November 2025",
    instansi: "SATA JATIM 2025",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2025/tahun-2025-2.jpg",
    nama: "Indonesia Healthcare Innovation Award IHIA VIII - 2025 DIAMOND AWARD",
    tanggal: "23 Oktober 2025",
    instansi: "IHIA",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2025/tahun-2025-3.jpg",
    nama: "Seva Paramahita Award",
    tanggal: "09 Oktober 2025",
    instansi: "BPJS Kesehatan",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2025/tahun-2025-4.jpg",
    nama: "Persi Award (Pemenang 4 Kategori 8 : Innovation Healthcare IT)",
    tanggal: "27 September 2025",
    instansi: "PERSI",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2025/tahun-2025-5.jpg",
    nama: "Persi Award (Pemenang 1 Kategori 6 : Leadership and Management)",
    tanggal: "27 September 2025",
    instansi: "PERSI",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2025/tahun-2025-6.jpg",
    nama: "Persi Award (Pemenang 2 Kategori 3 : Green Hospital)",
    tanggal: "27 September 2025",
    instansi: "PERSI",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2025/tahun-2025-7.jpg",
    nama: "Persi Award (Pemenang 2 Kategori 2 : Corporate Social Responsibility)",
    tanggal: "27 September 2025",
    instansi: "PERSI",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2025/tahun-2025-8.jpg",
    nama: "Persi Award (Pemenang 1 Kategori 4 : Health Services During Crisis)",
    tanggal: "27 September 2025",
    instansi: "PERSI",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2025/tahun-2025-9.jpg",
    nama: "Persi Award (12 Rumah Sakit Terbaik Bidang Layanan Saraf)",
    tanggal: "27 September 2025",
    instansi: "PERSI",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2025/tahun-2025-10.jpg",
    nama: "Persi Award (12 Rumah Sakit Terbaik Layanan Kanker)",
    tanggal: "27 September 2025",
    instansi: "PERSI",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2025/tahun-2025-11.jpg",
    nama: "Persi Award (Grand Hospital Award Kategori 4 Health Services During Crisis)",
    tanggal: "27 September 2025",
    instansi: "PERSI",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2025/tahun-2025-12.jpg",
    nama:
      "Percepatan Layanan Instalasi Gawat Darurat RSUD Dr. Soetomo Melalui Pengembangan Kewaspadaan Kolektif Turn Around Time Antar Titik Pelayanan (TaTaTaP)",
    tanggal: "27 September 2025",
    instansi: "PERSI AWARD",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2025/tahun-2025-13.jpg",
    nama:
      "Recognition of its Achievement in Implementing the Guidelines for Patient Centered Care Services and Integrated Patient Care",
    tanggal: "12 Agustus 2025",
    instansi:
      "Patient Care Centered Institute dan The Indonesian Commission on Accreditation of Hospitals (KARS)",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2025/tahun-2025-14.jpg",
    nama:
      "Penghargaan Perpustakaan Perangkat Daerah di Lingkungan Pemerintah Provinsi Jawa Timur Sesuai dengan Standart Nasional Perpustakaan Tahun 2025",
    tanggal: "21 Mei 2025",
    instansi: "Gubernur Jawa Timur",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2025/tahun-2025-15.jpg",
    nama:
      "Perpustakaan Perangkat Daerah di Lingkungan Pemerintah Provinsi Jawa Timur Sesuai dengan Standar Nasional Perpustakaan Tahun 2025",
    tanggal: "21 Mei 2025",
    instansi: "Gubernur Jawa Timur",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2025/tahun-2025-16.jpg",
    nama:
      "Wajib Pajak Instansi Pemerintah dengan Kontribusi Pembayaran Terbesar Tahun 2024 di KPP Pratama Surabaya Gubeng",
    tanggal: "09 Mei 2025",
    instansi: "Direktur Jendral Pajak KPP Pratama Surabaya Gubeng",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2025/tahun-2025-17.jpg",
    nama:
      "Kategori I Capaian Updating Data SIMASTER Dalam Layanan Kepegawaian Dengan 26 Item Kepegawaian & Penyelesaian Disparitas Data SIASN-SIMASTER",
    tanggal: "20 Januari 2025",
    instansi: "BKD JATIM",
    penerima: "RSUD Dr. Soetomo",
  },
];

const awards2024 = [
  {
    image: "/images/penghargaan/2024/tahun-2024-1.jpg",
    nama: "Innovative Government Award (IGA) dengan Predikat Sangat Inovatif",
    tanggal: "11 Desember 2024",
    instansi: "Gubernur Jawa Timur",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2024/tahun-2024-2.jpg",
    nama: "Rumah Sakit Tercettar dalam Penyelenggaraan RME Terkoneksi Satu Sehat",
    tanggal: "21 November 2024",
    instansi: "Gubernur Jawa Timur",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2024/tahun-2024-3.jpg",
    nama:
      "Badan Publik Informatif Pada Monitoring dan Evaluasi Keterbukaan Informasi Publik OPD Pemprov Jatim",
    tanggal: "13 November 2024",
    instansi: "Komisi Informasi Provinsi Jawa Timur",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2024/tahun-2024-4.jpg",
    nama:
      "Pelaksanaan Pemantauan dan Evaluasi Kinerja Penyelenggaraan Pelayanan Publik (PEKPPP) Provinsi Jawa Timur dengan Predikat Sangat Baik",
    tanggal: "13 November 2024",
    instansi: "Gubernur Jawa Timur",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2024/tahun-2024-5.jpg",
    nama:
      "Penilaian Budaya CETTAR pada Aplikasi Sistem Integrasi Bersama Kinerja Implementasi Budaya CETTAR (SIBEKISAR) dengan Predikat Sangat CETTAR",
    tanggal: "12 November 2024",
    instansi: "Gubernur Jawa Timur",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2024/tahun-2024-6.jpg",
    nama:
      "Juara I Perangkat Daerah Rumah Sakit Rencana Tindak Lanjut (RTL) Terbaik Disaster Leadership Academy (DILA)",
    tanggal: "12 November 2024",
    instansi: "Gubernur Jawa Timur",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2024/tahun-2024-7.jpg",
    nama: "Terbaik I Kategori Perangkat Daerah SATA JATIM Awards 2024",
    tanggal: "23 Oktober 2024",
    instansi: "Gubernur Jawa Timur",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2024/tahun-2024-8.jpg",
    nama: "Pemenang 3 Kategori 3 Green Hospital",
    tanggal: "19 Oktober 2024",
    instansi: "Persatuan Rumah Sakit Indonesia",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2024/tahun-2024-9.jpg",
    nama: "Pemenang 1 Kategori 7 Quality and Patient Safety",
    tanggal: "19 Oktober 2024",
    instansi: "Persatuan Rumah Sakit Indonesia",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2024/tahun-2024-10.jpg",
    nama: "Excellence Award Kategori 7 Quality and Patient Safety",
    tanggal: "19 Oktober 2024",
    instansi: "Persatuan Rumah Sakit Indonesia",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2024/tahun-2024-11.jpg",
    nama:
      "Rumah Sakit Anggota PERSI yang Telah Menunjukkan Prestasi Kemasyarakatan yang Menonjol Dalam Pengalaman Pelayanan",
    tanggal: "16 Oktober 2024",
    instansi: "Perhimpunan Rumah Sakit Indonesia",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2024/tahun-2024-12.jpg",
    nama:
      "Peringkat Pertama Fasilitas Kesehatan Tingkat Lanjut Berkomitmen dalam Pelayanan Kesehatan Program JKN Tingkat Nasional",
    tanggal: "19 September 2024",
    instansi: "BPJS Kesehatan",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2024/tahun-2024-13.jpg",
    nama:
      "Kategori Rumah Sakit dengan Layanan PDP paling Inovatif dalam Pemeriksaan Viral Load (VL) HIV",
    tanggal: "01 September 2024",
    instansi:
      "Direktorat Jenderal Pencegahan dan Pengendalian Penyakit Kementerian Kesehatan Republik Indonesia",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2024/tahun-2024-14.jpg",
    nama:
      "Peringkat I Unit Organisasi Bersifat Khusus dengan Total Pesanan dan Total Transaksi Terbanyak Bidang Kesehatan dalam Pemanfaatan Pengadaan Barang/Jasa Melalui E-Katalog Lokal Provinsi Jawa Timur",
    tanggal: "20 Agustus 2024",
    instansi: "Gubernur Jawa Timur",
    penerima: "RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2024/tahun-2024-15.jpg",
    nama:
      "Kategori Memuaskan sebagai Organisasi Perangkat Daerah Provinsi Jawa Timur Berdasarkan Hasil Pengawasan Kearsipan Internal",
    tanggal: "07 Maret 2024",
    instansi: "Gubernur Jawa Timur",
    penerima: "RSUD Dr. Soetomo",
  },
];

const awards2022 = [
  {
    image: "/images/penghargaan/2022/tahun-2022-1.png",
    nama:
      "Penghargaan Program Penilaian Peringkat Kinerja Perusahaan Dalam Pengelolaan Lingkungan Hidup Peringkat Biru",
    tanggal: "29 Desember 2022",
    instansi: "Kementerian Lingkungan Hidup dan Kehutanan Republik Indonesia",
    penerima: "Direktur Utama RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2022/tahun-2022-2.png",
    nama: "RSUD Dr. Soetomo atas Peran serta Pengembangan Penelitian",
    tanggal: "16 Desember 2022",
    instansi: "Sekolah Pascasarjana Universitas Airlangga",
    penerima: "Direktur Utama RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2022/tahun-2022-3.png",
    nama:
      "Top 30 Kompetisi Inovasi Pelayanan Publik (Kovablik) Telenutrition untuk Mendukung ASI Eksklusif di Ruang Neonatus RSUD Dr. Soetomo",
    tanggal: "02 Desember 2022",
    instansi: "Gubernur Jawa Timur",
    penerima: "Direktur Utama RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2022/tahun-2022-4.png",
    nama:
      "Rumah Sakit dengan Kemandirian di Bidang Farmasi Terbaik untuk Mendukung Kemandirian Kesehatan Indonesia (Vaksin Merah Putih) dalam Anugerah Prioritas Nasional",
    tanggal: "01 Desember 2022",
    instansi: "Anugerah Prioritas Nasional",
    penerima: "Direktur Utama RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2022/tahun-2022-5.png",
    nama:
      "Telah Memenuhi Kualifikasi sebagai Institusi Penyelenggara Pelatihan Bidang Kesehatan Terakreditasi A",
    tanggal: "30 November 2022",
    instansi: "Direktur Jenderal Tenaga Kesehatan",
    penerima: "Direktur Utama RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2022/tahun-2022-6.png",
    nama: "Telah Memenuhi Persyaratan Kesehatan Lingkungan dengan Predikat Sangat Baik",
    tanggal: "09 November 2022",
    instansi: "Menteri Kesehatan",
    penerima: "Direktur Utama RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2022/tahun-2022-7.png",
    nama:
      "Anugerah BAPETEN 2022 pada Bidang Keselamatan dan Keamanan Nuklir dalam Kegiatan Kedokteran Nuklir",
    tanggal: "05 November 2022",
    instansi: "Plt. Kepala Badan Pengawas Tenaga Nuklir",
    penerima: "Direktur Utama RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2022/tahun-2022-8.png",
    nama:
      "Penilaian Budaya CETTAR pada Aplikasi Sistem Integrasi Bersama Kinerja Implementasi Budaya CETTAR (SIBEKISAR) Tahun 2021 dengan Predikat CETTAR",
    tanggal: "27 Oktober 2022",
    instansi: "Gubernur Jawa Timur",
    penerima: "Direktur Utama RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2022/tahun-2022-9.png",
    nama: "RSUD Dr. Soetomo Lulus Akreditasi KARS Tingkat Paripurna",
    tanggal: "30 September 2022",
    instansi: "Komisi Akreditasi Rumah Sakit",
    penerima: "Direktur Utama RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2022/tahun-2022-10.png",
    nama:
      "Partisipasi dan Peran Aktif dalam Tugas Penanganan Corona Virus Disease (Covid-19) di Indonesia",
    tanggal: "17 Agustus 2022",
    instansi: "Gubernur Jawa Timur",
    penerima: "Direktur Utama RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2022/tahun-2022-11.png",
    nama:
      "Apresiasi dalam Penanganan Pandemi Covid-19 dan Bencana Alam di Wilayah Jawa Timur",
    tanggal: "04 Juli 2022",
    instansi: "Kepolisian Daerah Jawa Timur",
    penerima: "Direktur Utama RSUD Dr. Soetomo",
  },
];

const awards2021 = [
  {
    image: "/images/penghargaan/2021/tahun-2021-1.png",
    nama:
      "Terbaik Pertama atas Prestasi dan Dedikasi dalam Menjalankan Program Pengendalian Resistensi Antimikroba (PPRA) di Rumah Sakit",
    tanggal: "24 November 2021",
    instansi: "Provinsi Jawa Timur",
    penerima: "Direktur Utama RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2021/tahun-2021-2.png",
    nama:
      "Narasumber dalam Podcast Dialog Pakar BPSDM Provinsi Jawa Timur pada Pameran & Simposium Inovasi Pelayanan Publik Jawa Timur Tahun 2021",
    tanggal: "19 November 2021",
    instansi: "BPSDM Provinsi Jawa Timur",
    penerima: "Direktur Utama RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2021/tahun-2021-3.png",
    nama:
      "Top 30 Kompetisi Inovasi Pelayanan Publik (KOVABLIK) Provinsi Jawa Timur Tahun 2021",
    tanggal: "15 November 2021",
    instansi: "Gubernur Jawa Timur",
    penerima: "Direktur Utama RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2021/tahun-2021-4.png",
    nama: "Pelaksanaan Percepatan Reformasi Birokrasi",
    tanggal: "27 Oktober 2021",
    instansi: "Gubernur Jawa Timur",
    penerima: "Direktur Utama RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2021/tahun-2021-5.png",
    nama: "Penerapan Akuntabilitas Kinerja Instansi Pemerintah (SAKIP)",
    tanggal: "27 Oktober 2021",
    instansi: "Gubernur Jawa Timur",
    penerima: "Direktur Utama RSUD Dr. Soetomo",
  },
  {
    image: "/images/penghargaan/2021/tahun-2021-6.png",
    nama:
      "Fasilitas Kesehatan Tingkat Lanjutan Paling Berkomitmen dalam Memberikan Pelayanan Terbaik bagi Peserta JKN-KIS Kategori Rumah Sakit Tipe A",
    tanggal: "07 September 2021",
    instansi: "BPJS Kesehatan",
    penerima: "Direktur Utama RSUD Dr. Soetomo",
  },
];
</script>

<template>
  <div class="relative lg:p-8">
    <BaseAccordion title="Penghargaan 2025" :defaultOpen="true">
      <div class="space-y-4 grid gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
        <!-- ITEM CARD -->
        <div
          v-for="(item, index) in awards2025"
          :key="index"
          class="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6"
        >
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <!-- IMAGE -->
            <div class="flex justify-center">
              <a
                :href="item.image"
                target="_blank"
                rel="noopener noreferrer"
                class="group"
              >
                <img
                  :src="asset(item.image)"
                  alt="Penghargaan"
                  class="rounded-lg border shadow-sm group-hover:shadow-md group-hover:scale-105 transition w-50"
                />
              </a>
            </div>
            <!-- CONTENT -->
            <div class="md:col-span-2">
              <ul class="list-disc pl-5 space-y-2 text-slate-700 text-sm">
                <li>
                  <strong>Nama Penghargaan :</strong>
                  {{ item.nama }}
                </li>
                <li>
                  <strong>Diterima Tanggal :</strong>
                  {{ item.tanggal }}
                </li>
                <li>
                  <strong>Instansi yang Mengeluarkan Penghargaan :</strong>
                  {{ item.instansi }}
                </li>
                <li>
                  <strong>Penerima :</strong>
                  {{ item.penerima }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- END ITEM CARD -->
      </div>
    </BaseAccordion>
    <BaseAccordion title="Penghargaan 2024" :defaultOpen="true" class="mt-5">
      <div class="space-y-4 grid gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
        <!-- ITEM CARD -->
        <div
          v-for="(item, index) in awards2024"
          :key="index"
          class="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6"
        >
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <!-- IMAGE -->
            <div class="flex justify-center">
              <a
                :href="item.image"
                target="_blank"
                rel="noopener noreferrer"
                class="group"
              >
                <img
                  :src="asset(item.image)"
                  alt="Penghargaan"
                  class="rounded-lg border shadow-sm group-hover:shadow-md group-hover:scale-105 transition w-50"
                />
              </a>
            </div>
            <!-- CONTENT -->
            <div class="md:col-span-2">
              <ul class="list-disc pl-5 space-y-2 text-slate-700 text-sm">
                <li>
                  <strong>Nama Penghargaan :</strong>
                  {{ item.nama }}
                </li>
                <li>
                  <strong>Diterima Tanggal :</strong>
                  {{ item.tanggal }}
                </li>
                <li>
                  <strong>Instansi yang Mengeluarkan Penghargaan :</strong>
                  {{ item.instansi }}
                </li>
                <li>
                  <strong>Penerima :</strong>
                  {{ item.penerima }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- END ITEM CARD -->
      </div>
    </BaseAccordion>
    <BaseAccordion title="Penghargaan 2022" :defaultOpen="true" class="mt-5">
      <div class="space-y-4 grid gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
        <div
          v-for="(item, index) in awards2022"
          :key="index"
          class="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6"
        >
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <!-- IMAGE -->
            <div class="flex justify-center">
              <a
                :href="item.image"
                target="_blank"
                rel="noopener noreferrer"
                class="group"
              >
                <img
                  :src="asset(item.image)"
                  alt="Penghargaan"
                  class="rounded-lg shadow-sm group-hover:shadow-md group-hover:scale-105 transition w-50"
                />
              </a>
            </div>
            <!-- CONTENT -->
            <div class="md:col-span-2">
              <ul class="list-disc pl-5 space-y-2 text-slate-700 text-sm">
                <li>
                  <strong>Nama Penghargaan :</strong>
                  {{ item.nama }}
                </li>
                <li>
                  <strong>Diterima Tanggal :</strong>
                  {{ item.tanggal }}
                </li>
                <li>
                  <strong>Instansi yang Mengeluarkan Penghargaan :</strong>
                  {{ item.instansi }}
                </li>
                <li>
                  <strong>Penerima :</strong>
                  {{ item.penerima }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </BaseAccordion>
    <BaseAccordion title="Penghargaan 2021" :defaultOpen="true" class="mt-5">
      <div class="space-y-4 grid gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
        <div
          v-for="(item, index) in awards2021"
          :key="index"
          class="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6"
        >
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <!-- IMAGE -->
            <div class="flex justify-center">
              <a
                :href="item.image"
                target="_blank"
                rel="noopener noreferrer"
                class="group"
              >
                <img
                  :src="asset(item.image)"
                  alt="Penghargaan"
                  class="rounded-lg shadow-sm group-hover:shadow-md group-hover:scale-105 transition w-50"
                />
              </a>
            </div>
            <!-- CONTENT -->
            <div class="md:col-span-2">
              <ul class="list-disc pl-5 space-y-2 text-slate-700 text-sm">
                <li>
                  <strong>Nama Penghargaan :</strong>
                  {{ item.nama }}
                </li>
                <li>
                  <strong>Diterima Tanggal :</strong>
                  {{ item.tanggal }}
                </li>
                <li>
                  <strong>Instansi yang Mengeluarkan Penghargaan :</strong>
                  {{ item.instansi }}
                </li>
                <li>
                  <strong>Penerima :</strong>
                  {{ item.penerima }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </BaseAccordion>
  </div>
</template>
