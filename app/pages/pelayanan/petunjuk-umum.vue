<template>
  <section class="bg-gradient-to- from-emerald-50 via-white to-emerald-50 pt-20">
    <!-- BREADCRUMB -->
    <div class="max-w-9xl mx-auto px-6 mt-15">
      <Breadcrumb />
    </div>
    <!-- HERO -->
    <div class="max-w-9xl mx-auto px-6 py-5">
      <BaseHeroPage title="Petunjuk Umum" logo="/images/logo/logo_white.png" />
    </div>

    <!-- CONTENT -->
    <div class="max-w-9xl mx-auto px-6">
      <div class="bg-white rounded-2xl shadow-lg p-5 py-5">
        <div
          class="rounded-[28px] shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden mb-8"
        >
          <!-- Header -->
          <div class="px-6 py-5 bg-gradient-to-r from-emerald-50 via-white to-emerald-50">
            <h3 class="text-lg font-bold text-emerald-700">Tata Tertib</h3>
            <p class="text-sm text-gray-500">Prosedur dan tahapan petunjuk umum</p>
          </div>
          <h1 class="text-3xl font-bold text-center text-emerald-700">
            Tata Tertib RSUD Dr. Soetomo
          </h1>
          <p
            class="text-center text-medium text-sm font-semibold mb-auto text-emerald-600"
          >
            Berdasarkan SK Direktur RSUD Dr. Soetomo Nomor : 100.3.3/4484/102.6/2025
          </p>

          <!-- GRID -->
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-5 m-5">
            <ComponentCardTataTertib title="Tata Tertib Umum" :items="tataTertibUmum" />

            <ComponentCardTataTertib
              title="Tata Tertib Khusus Bagi Pasien"
              :items="tataTertibPasien"
            />

            <ComponentCardTataTertib
              title="Tata Tertib Khusus Penunggu Pasien"
              :items="tataTertibPenunggu"
            />

            <ComponentCardTataTertib
              title="Tata Tertib Pengunjung Pasien (BEZUK)"
              :items="tataTertibPengunjung"
            />

            <ComponentCardTataTertib title="Tata Tertib Tamu" :items="tataTertibTamu" />

            <ComponentCardTataTertib
              title="Tata Tertib Pekerja"
              :items="tataTertibPekerja"
            />
          </div>
        </div>
      </div>
      <div class="bg-white rounded-2xl shadow-lg p-5 mt-5">
        <section
          class="rounded-[28px] shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden mb-8"
        >
          <!-- HERO -->
          <div class="px-6 py-5 bg-gradient-to-r from-emerald-50 via-white to-emerald-50">
            <h3 class="text-lg font-bold text-emerald-700">Kewajiban dan Hak</h3>
            <p class="text-sm text-gray-500">Prosedur dan tahapan petunjuk umum</p>
          </div>
          <div class="text-center space-y-4">
            <h1 class="text-3xl font-bold text-center text-emerald-700">
              Hak Pasien & Keluarga
            </h1>
            <p
              class="text-center text-medium text-sm font-semibold mb-auto text-emerald-600"
            >
              Informasi resmi mengenai hak, kewajiban, dan tanggung jawab pasien sesuai
              peraturan perundang-undangan.
            </p>
          </div>

          <!-- CONTENT -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-5 m-5">
            <ComponentCardKewajibanHak
              title="Hak Pasien"
              subtitle="Pasal 276 UU No. 17 Tahun 2023"
              :items="hakPasien"
            />

            <ComponentCardKewajibanHak
              title="Kewajiban Pasien"
              subtitle="Pasal 277 UU No. 17 Tahun 2023"
              :items="kewajibanPasien"
            />

            <ComponentCardKewajibanHak
              title="Tanggung Jawab"
              subtitle="Dalam Pelayanan Kesehatan"
              :items="tanggungJawab"
            />
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from "vue";
import ComponentCardTataTertib from "~/components/pelayanan/component_petunjukumum/ComponentCardTataTertib.vue";
import ComponentCardKewajibanHak from "~/components/pelayanan/component_petunjukumum/ComponentCardKewajibanHak.vue";
import Breadcrumb from "~/components/layout/Breadcrumb.vue";
import BaseHeroPage from "~/components/form/BaseHeroPage.vue";

useHead({
  title: "Petunjuk Umum",
});

definePageMeta({
  breadcrumb: [{ label: "Beranda", to: "/" }, { label: "Pelayanan - Petunjuk Umum" }],
});

const tataTertibUmum = [
  "Wajib menjaga kebersihan lingkungan rumah sakit.",
  "Wajib menjaga ketertiban dan ketenangan di ruang perawatan pasien.",
  "Tidak diperbolehkan membawa barang berharga seperti perhiasan, uang tunai berlebihan, atau barang elektronik yang berpotensi memicu kebakaran.",
  "Rumah sakit tidak bertanggung jawab atas kehilangan atau kerusakan barang pribadi pasien dan pengunjung.",
  "Dilarang membawa senjata, alkohol, dan obat-obatan terlarang ke area rumah sakit.",
  "Dilarang membawa pulang fasilitas atau barang milik rumah sakit.",
  "Dilarang merokok di seluruh area rumah sakit.",
  "Dilarang mengambil foto/video pasien atau pegawai tanpa izin, serta menyebarkannya ke media sosial.",
  "Anak sehat usia di bawah 12 tahun tidak diperbolehkan masuk ruang perawatan.",
  "Dilarang mencuci atau menjemur pakaian di lingkungan rumah sakit.",
  "Dilarang membuang sampah atau sisa makanan ke wastafel atau toilet.",
  "Pedagang dilarang berjualan tanpa izin dari Direktur.",
  "Dilarang memberikan hadiah dalam bentuk apapun kepada petugas rumah sakit.",
  "Kendaraan listrik hanya boleh digunakan oleh pegawai yang bertugas dan harus didaftarkan terlebih dahulu.",
];

const tataTertibPasien = [
  "Pasien hanya boleh ditunggu oleh 1 orang, kecuali pasien anak, kondisi kritis, atau pasca operasi, boleh ditunggu maksimal 2 orang.",
  "Pasien wajib menggunakan gelang identitas selama dirawat.",
  "Dilarang mengubah pengaturan alat medis tanpa izin petugas.",
  "Pasien tidak boleh meninggalkan ruang perawatan tanpa izin dokter atau perawat.",
  "Pasien disarankan tidak mengonsumsi makanan/minuman dari luar yang bisa membahayakan kesehatannya.",
];

const tataTertibPenunggu = [
  "Jumlah penunggu pasien maksimal 1 orang, kecuali untuk pasien kritis, pasca operasi, atau anak-anak dapat ditunggu maksimal 2 orang.",
  "Penunggu wajib mendaftar di Admisi Rawat Inap (Arina) di Gedung Pusat Diagnostik Terpadu (GPDT), melalui sistem SIPS.",
  "Penunggu tidak diperbolehkan keluar masuk rumah sakit, kecuali untuk kepentingan pasien.",
  "Pergantian penunggu wajib dilaporkan ke Posko Keamanan di Instalasi Keamanan, Ketertiban & Perparkiran.",
  "Dilarang memberikan makanan/minuman dari luar yang tidak sesuai kebutuhan nutrisi pasien.",
  "Wajib menjaga barang pribadi dan milik pasien, karena rumah sakit tidak bertanggung jawab atas kehilangan atau kerusakan.",
  "Dilarang berbicara, mendengarkan musik, atau menonton video dengan suara keras di ruang perawatan.",
  "Dilarang meninggalkan barang pribadi di rumah sakit. Barang yang ditinggal akan dimusnahkan setelah 3 hari jika tidak diambil.",
];

const tataTertibPengunjung = [
  "Kunjungan hanya diperbolehkan pada jam berkunjung, yaitu setiap hari pukul 16.00–17.00 WIB.",
  "Maksimal 2 orang pengunjung diperbolehkan masuk secara bergantian.",
  "Pengunjung wajib melakukan entry kunjungan melalui aplikasi Soetomo Care untuk identifikasi.",
  "Pengunjung harus dalam kondisi sehat. Dilarang berkunjung jika sedang flu, demam, atau kurang sehat.",
  "Pengunjung harus segera meninggalkan ruang perawatan setelah jam kunjung selesai.",
];

const tataTertibTamu = [
  "Tamu wajib lapor ke Posko Keamanan dan melakukan pendataan melalui Soetomo Care.",
  "Sebelum berkunjung, tamu wajib menyerahkan identitas diri (seperti KTP atau SIM).",
  "Tamu wajib menggunakan ID Card selama berada di area rumah sakit.",
];

const tataTertibPekerja = [
  "Pekerja wajib lapor ke Posko Keamanan dengan membawa SPMK dari unit terkait dan SPK dari perusahaan, serta melakukan pendataan melalui Soetomo Care.",
  "Wajib menyertakan data diri, serta identitas asli dan fotokopi KTP/SIM.",
  "Wajib menggunakan ID Card dari perusahaan.",
  "Wajib memakai rompi keselamatan kerja (rompi oranye) saat bekerja.",
  "Wajib lapor saat datang dan pulang kerja ke Posko Keamanan.",
  "Dilarang merokok dan mengonsumsi minuman keras.",
  "Dilarang membawa barang inventaris rumah sakit atau limbah proyek, kecuali dengan surat perintah resmi dari unit terkait.",
  "Dilarang menginap atau bermalam di area rumah sakit.",
];

const hakPasien = [
  "Mendapatkan informasi mengenai Kesehatan dirinya; ",
  "Mendapatkan penjelasan yang memadai mengenai Pelayanan Kesehatan yang diterimanya; ",
  "Mendapatkan Pelayanan Kesehatan sesuai dengan kebutuhan medis, standar profesi, dan pelayanan yang bermutu; ",
  "Menolak atau menyetujui tindakan medis, kecuali untuk tindakan medis yang diperlukan dalam rangka pencegahan penyakit menular dan penanggulangan KLB atau Wabah; ",
  "Mendapatkan akses terhadap informasi yang terdapat di dalam rekam medis; ",
  "Meminta pendapat Tenaga Medis atau Tenaga Kesehatan lain; dan ",
  "Mendapatkan hak lain sesuai dengan ketentuan peraturan perundangan-undangan.",
];

const kewajibanPasien = [
  "Memberikan informasi yang lengkap dan jujur tentang masalah kesehatannya; ",
  "Mematuhi nasihat dan petunjuk Tenaga Medis dan Tenaga Kesehatan; ",
  "Mematuhi ketentuan yang berlaku pada Fasilitas Pelayanan Kesehatan; dan ",
  "Memberikan imbalan jasa atas pelayanan yang diterima.",
];

const tanggungJawab = [
  "Mengajukan pertanyaan dan berpatisipasi aktif dalam diskusi dan keputusan mengenai perawatan kesehatan pasien",
  "Memberikan informasi yang lengkap dan akurat tentang kesehatan dan riwayat kesehatan pasien, termasuk kondisi sekarang, penyakit masa lalu, riwayat rawat inap dan pengobatan",
  "Mendiskusikan masalah perawatan kesehatan, kekhawatiran dan kebutuhan pribadi pasien dengan penyedia layanan kesehatan secara jujur dan memberi tahu penyedia layanan kesehatan tentang setiap perubahan yang terjadi pada kesehatan pasien",
  "Memastikan pasien bebas narkoba dan alkohol. Pasien yang diyakini berada dibawah pengaruh hal tersebut wajib ditangani oleh ketentuan yang berlaku",
  "Bekerja sama dengan semua petugas kesehatan yang terlibat dalam perawatan pasien dan berperilaku sopan dan saling menghormati",
  "Menghormati hak penyedia layanan kesehatan dan untuk bertukar informasi dengan cara yang baik dan tidak melakukan kekerasan, secara fisik maupun verbal saat dalam perawatan",
  "Mengikuti intruksi asuhan kesehatan atau memberi tahu staf kami jika pasien tidak dapat atau tidak bersedia mengikuti rencana asuhan",
  "Menerima konsekuensi karena menolak rencana asuhan atau tidak mengikuti rencana asuhan",
  "Menghormati hak dan privasi semua profesional pemberi asuhan, karyawan rumah sakit, dan pasien lain",
  "Memberitahu staf rumah sakit bila merubah keputusan persetujuan atas rencana asuhan yang telah disetujui.",
];
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
