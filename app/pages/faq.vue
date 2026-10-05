<template>
  <section class="pt-20">
    <!-- GLOBAL CONTAINER -->
    <div class="max-w-9xl mx-auto px-6">
      <!-- BREADCRUMB -->
      <div class="mt-15">
        <Breadcrumb />
      </div>
      <!-- HERO -->
      <div class="py-5">
        <BaseHeroPage title="FAQ" logo="/images/logo/logo_white.png" />
      </div>

      <div class="max-w-9xl bg-white shadow-md rounded-3xl mt-2 p-6">
        <div>
          <h2 class="text-2xl text-center md:text-3xl font-bold text-gray-800 mb-6">
            Pertanyaan Seputar Pelayanan di
            <span class="text-green-600">RSUD Dr. Soetomo</span>
          </h2>
        </div>
        <BaseAccordion
          title="Instalasi Rawat Jalan RSUD Dr. Soetomo"
          :defaultOpen="false"
          class="mt-5"
        >
          <div class="space-y-6 text-gray-600 leading-relaxed md:text-lg">
            <!-- PERTANYAAN -->
            <div class="p-6 rounded-2xl bg-green-50 border border-green-200">
              <h3 class="text-lg font-semibold text-green-800 mb-6">
                💾 Bagaimana Cara Pendaftaran Rawat Jalan Pasien BPJS?
              </h3>

              <!-- PASIEN BARU -->
              <div class="flex items-start gap-3 mb-6">
                <span
                  class="w-8 h-8 flex items-center justify-center rounded-full bg-green-600 text-white text-sm font-semibold mt-1"
                >
                  1
                </span>
                <div>
                  <p class="font-semibold text-green-700 mb-2">Pasien Baru</p>

                  <ul class="list-disc pl-5 space-y-2 text-justify">
                    <li>Pasien langsung datang ke Instalasi Rawat Jalan.</li>
                    <li>Jika menggunakan BPJS, wajib membawa:</li>
                  </ul>

                  <ul class="list-[lower-alpha] pl-8 mt-2 space-y-1">
                    <li>
                      Surat Rujukan yang ditujukan ke <strong>RSUD Dr. Soetomo</strong>.
                    </li>
                    <li>Kartu BPJS.</li>
                    <li>KTP / Kartu Keluarga.</li>
                  </ul>
                </div>
              </div>

              <!-- PASIEN LAMA -->
              <div class="flex items-start gap-3 mb-6">
                <span
                  class="w-8 h-8 flex items-center justify-center rounded-full bg-green-600 text-white text-sm font-semibold mt-1"
                >
                  2
                </span>
                <div>
                  <p class="font-semibold text-green-700 mb-2">Pasien Lama</p>

                  <ul class="list-disc pl-5 space-y-2 text-justify">
                    <li>
                      Melakukan pendaftaran online melalui
                      <a
                        href="https://daftar.rsudrsoetomo.jatimprov.go.id/"
                        target="_blank"
                        class="text-green-600 font-semibold hover:underline break-all"
                      >
                        daftar.rsudrsoetomo.jatimprov.go.id
                      </a>
                    </li>
                    <li>
                      Pilih jaminan, masukkan nomor identitas, pilih tanggal berkunjung,
                      pilih poliklinik, lalu klik daftar.
                    </li>
                    <li>Bagi pasien BPJS wajib melakukan finger print (sidik jari).</li>
                    <li>Datang 30 menit sebelum waktu pelayanan.</li>
                  </ul>
                </div>
              </div>

              <!-- INFORMASI TAMBAHAN -->
              <div class="flex items-start gap-3">
                <span
                  class="w-8 h-8 flex items-center justify-center rounded-full bg-green-600 text-white text-sm font-semibold mt-1"
                >
                  3
                </span>
                <div>
                  <p class="font-semibold text-green-700 mb-2">Informasi Tambahan</p>

                  <p class="mb-2">
                    Pelayanan Instalasi Rawat Jalan buka hari
                    <strong>Senin – Jumat</strong>.
                  </p>

                  <p>
                    Informasi lebih lanjut dapat menghubungi nomor telepon
                    <strong>(031) 5501488</strong>
                    pada jam dan hari kerja.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </BaseAccordion>
        <!-- 1 -->
        <BaseAccordion
          title="Instalasi Gawat Darurat RSUD Dr. Soetomo"
          :defaultOpen="false"
          class="mt-5"
        >
          <div class="space-y-6 text-gray-600 leading-relaxed md:text-lg">
            <!-- CARD UTAMA -->
            <div class="p-6 rounded-2xl bg-red-50 border border-red-200">
              <h3 class="text-lg font-semibold text-red-700 mb-4 flex items-center gap-2">
                🚑 Bagaimana cara pemesanan Ambulance Gawat Darurat ?
              </h3>

              <p class="text-justify mb-4">
                Pemesanan Ambulance Gawat Darurat dapat dilakukan dengan cara berikut:
              </p>

              <ul class="space-y-3">
                <!-- TELEPON -->
                <li class="flex items-center gap-3">
                  <span
                    class="w-8 h-8 flex items-center justify-center rounded-full bg-red-600 text-white text-sm font-semibold"
                  >
                    1
                  </span>
                  <span>
                    Menghubungi nomor:
                    <strong class="text-red-700">0811-3440-118</strong>
                  </span>
                </li>

                <!-- LINK -->
                <li class="flex items-center gap-3">
                  <span
                    class="w-8 h-8 flex items-center justify-center rounded-full bg-red-600 text-white text-sm font-semibold"
                  >
                    2
                  </span>
                  <span>
                    Melalui website:
                    <a
                      href="https://itki.rsudrsoetomo.jatimprov.go.id/ambulans-rsds/public/index"
                      target="_blank"
                      class="text-red-600 font-semibold hover:underline break-all"
                    >
                      itki.rsudrsoetomo.jatimprov.go.id/ambulans-rsds
                    </a>
                  </span>
                </li>
              </ul>

              <!-- NOTICE -->
              <div
                class="mt-5 p-4 rounded-xl bg-white border border-red-200 text-sm text-gray-600"
              >
                Layanan ini digunakan untuk kondisi darurat yang memerlukan penanganan
                segera.
              </div>
            </div>
          </div>
        </BaseAccordion>
        <!-- 2 -->
        <BaseAccordion
          title="Instalasi Graha Amerta dan Paviliun Indraprasta (STOC)"
          :defaultOpen="false"
          class="mt-5"
        >
          <div class="space-y-6 text-gray-600 leading-relaxed md:text-lg">
            <!-- CARD UTAMA -->
            <div class="p-6 rounded-2xl bg-blue-50 border border-blue-200">
              <h3
                class="text-lg font-semibold text-blue-700 mb-4 flex items-center gap-2"
              >
                🏥 Bagaimana Cara Pendaftaran Rawat Jalan di Graha Amerta ?
              </h3>

              <p class="text-justify mb-4">
                Pasien dapat melakukan pendaftaran Rawat Jalan melalui Customer Service
                Pendaftaran Rawat Jalan Graha Amerta dengan cara berikut:
              </p>

              <!-- NOMOR TELEPON -->
              <div class="flex items-start gap-3">
                <span
                  class="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-semibold"
                >
                  1
                </span>
                <div>
                  <p>
                    Menghubungi nomor:
                    <strong class="text-blue-700">0822-3373-6431</strong>
                  </p>
                  <a
                    href="tel:082233736431"
                    class="inline-block mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
                  >
                    Hubungi Sekarang
                  </a>
                </div>
              </div>
            </div>
          </div>
        </BaseAccordion>
        <!-- 3 -->
        <BaseAccordion title="Jadwal Dokter Spesialis" :defaultOpen="false" class="mt-5">
          <div class="space-y-6 text-gray-600 leading-relaxed md:text-lg">
            <!-- CARD UTAMA -->
            <div class="p-6 rounded-2xl bg-emerald-50 border border-emerald-200">
              <h3
                class="text-lg font-semibold text-emerald-700 mb-4 flex items-center gap-2"
              >
                📅 Bagaimana mendapatkan jadwal dokter spesialis ?
              </h3>

              <p class="text-justify mb-4">
                Untuk mendapatkan informasi jadwal dokter spesialis, pasien dapat
                menghubungi Instalasi Graha Amerta melalui:
              </p>

              <!-- NOMOR TELEPON -->
              <div class="flex items-start gap-3">
                <span
                  class="w-8 h-8 flex items-center justify-center rounded-full bg-emerald-600 text-white text-sm font-semibold"
                >
                  1
                </span>
                <div>
                  <p>
                    Nomor Telepon:
                    <strong class="text-emerald-700">0822-3373-6431</strong>
                  </p>

                  <!-- CTA CALL -->
                  <a
                    href="tel:082233736431"
                    class="inline-block mt-2 px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 transition"
                  >
                    Hubungi Sekarang
                  </a>
                </div>
              </div>
            </div>
          </div>
        </BaseAccordion>
        <!-- 4 -->
        <BaseAccordion
          title="Hasil Laboratorium dan Radiologi"
          :defaultOpen="false"
          class="mt-5"
        >
          <div class="space-y-6 text-gray-600 leading-relaxed md:text-lg">
            <!-- CARD UTAMA -->
            <div class="p-6 rounded-2xl bg-indigo-50 border border-indigo-200">
              <h3
                class="text-lg font-semibold text-indigo-700 mb-4 flex items-center gap-2"
              >
                🧪 Bagaimana cara melihat hasil laboratorium dan radiologi ?
              </h3>

              <p class="text-justify mb-4">
                Hasil pemeriksaan Laboratorium dan Radiologi dapat diakses secara online
                melalui sistem resmi:
              </p>

              <!-- LINK -->
              <div class="flex items-start gap-3">
                <span
                  class="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-600 text-white text-sm font-semibold"
                >
                  1
                </span>

                <div>
                  <a
                    href="https://sips.rsudrsoetomo.jatimprov.go.id/"
                    target="_blank"
                    class="text-indigo-700 font-semibold hover:underline break-all"
                  >
                    https://sips.rsudrsoetomo.jatimprov.go.id/
                  </a>

                  <!-- CTA BUTTON -->
                  <div>
                    <a
                      href="https://sips.rsudrsoetomo.jatimprov.go.id/"
                      target="_blank"
                      class="inline-block mt-3 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition"
                    >
                      Akses Hasil Pemeriksaan
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BaseAccordion>
        <!-- 5 -->
        <BaseAccordion title="Pendidikan dan Pelatihan" :defaultOpen="false" class="mt-5">
          <div class="space-y-6 text-gray-600 leading-relaxed md:text-lg">
            <!-- CARD UTAMA -->
            <div class="p-6 rounded-2xl bg-amber-50 border border-amber-200">
              <h3
                class="text-lg font-semibold text-amber-700 mb-4 flex items-center gap-2"
              >
                🎓 Bagaimana mendapatkan info tentang Diklat yang diselenggarakan RSUD Dr.
                Soetomo ?
              </h3>

              <p class="text-justify mb-4">
                Untuk mendapatkan informasi mengenai Diklat yang diselenggarakan, dapat
                menghubungi Bagian Diklat melalui:
              </p>

              <!-- TELEPON -->
              <div class="flex items-start gap-3 mb-5">
                <span
                  class="w-8 h-8 flex items-center justify-center rounded-full bg-amber-600 text-white text-sm font-semibold"
                >
                  1
                </span>
                <div>
                  <p>
                    Nomor Telepon:
                    <strong class="text-amber-700">031-5501070</strong>
                  </p>

                  <a
                    href="tel:0315501070"
                    class="inline-block mt-2 px-4 py-2 bg-amber-600 text-white rounded-lg text-sm font-medium hover:bg-amber-700 transition"
                  >
                    Hubungi Bagian Diklat
                  </a>
                </div>
              </div>

              <!-- LINK AGENDA -->
              <div class="flex items-start gap-3">
                <span
                  class="w-8 h-8 flex items-center justify-center rounded-full bg-amber-600 text-white text-sm font-semibold"
                >
                  2
                </span>
                <div>
                  <p class="mb-2">Agenda Diklat dapat dilihat melalui halaman:</p>

                  <a
                    href="https://rsudrsoetomo.jatimprov.go.id/sicerdas/"
                    target="_blank"
                    class="text-amber-700 font-semibold hover:underline break-all"
                  >
                    rsudrsoetomo.jatimprov.go.id/sicerdas
                  </a>

                  <div>
                    <a
                      href="https://rsudrsoetomo.jatimprov.go.id/sicerdas/"
                      target="_blank"
                      class="inline-block mt-3 px-4 py-2 bg-amber-600 text-white rounded-lg text-sm font-medium hover:bg-amber-700 transition"
                    >
                      Lihat Agenda Diklat
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BaseAccordion>
        <!-- 6 -->
        <BaseAccordion
          title="Penelitian dan Pengembangan"
          :defaultOpen="false"
          class="mt-5"
        >
          <div class="space-y-6 text-gray-600 leading-relaxed md:text-lg">
            <!-- CARD UTAMA -->
            <div class="p-6 rounded-2xl bg-teal-50 border border-teal-200">
              <h3
                class="text-lg font-semibold text-teal-700 mb-4 flex items-center gap-2"
              >
                🔬 Bagaimana mendapatkan info tentang ijin Penelitian yang akan
                dilaksanakan di RSUD Dr. Soetomo ?
              </h3>

              <p class="text-justify mb-4">
                Untuk mendapatkan informasi mengenai izin penelitian yang akan
                dilaksanakan di RSUD Dr. Soetomo, dapat menghubungi Bagian Litbang
                melalui:
              </p>

              <!-- NOMOR TELEPON 1 -->
              <div class="flex items-start gap-3 mb-4">
                <span
                  class="w-8 h-8 flex items-center justify-center rounded-full bg-teal-600 text-white text-sm font-semibold"
                >
                  1
                </span>
                <div>
                  <p>
                    Nomor Telepon:
                    <strong class="text-teal-700">031-5501164</strong>
                  </p>

                  <a
                    href="tel:0315501164"
                    class="inline-block mt-2 px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium hover:bg-teal-700 transition"
                  >
                    Hubungi Bagian Litbang
                  </a>
                </div>
              </div>

              <!-- NOMOR TELEPON 2 -->
              <div class="flex items-start gap-3">
                <span
                  class="w-8 h-8 flex items-center justify-center rounded-full bg-teal-600 text-white text-sm font-semibold"
                >
                  2
                </span>
                <div>
                  <p>
                    Nomor Alternatif:
                    <strong class="text-teal-700">031-5501539</strong>
                  </p>

                  <a
                    href="tel:0315501539"
                    class="inline-block mt-2 px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium hover:bg-teal-700 transition"
                  >
                    Hubungi Nomor Alternatif
                  </a>
                </div>
              </div>
            </div>
          </div>
        </BaseAccordion>
        <!-- 7 -->
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Breadcrumb from "~/components/layout/Breadcrumb.vue";
import BaseHeroPage from "~/components/form/BaseHeroPage.vue";
import BaseAccordion from "~/components/form/BaseAccordion.vue";

useHead({
  title: "FAQ ",
});

definePageMeta({
  breadcrumb: [{ label: "Beranda", to: "/" }, { label: "FAQ RSUD Dr. Soetomo" }],
});
</script>
