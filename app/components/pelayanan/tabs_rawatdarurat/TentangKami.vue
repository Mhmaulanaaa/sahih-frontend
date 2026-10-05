<template>
  <section class="space-y-5 md:space-y-5">
    <!-- ================= HERO IGD ================= -->
    <div
      class="relative overflow-hidden rounded-4xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-green-600 p-10 md:p-14 text-white"
    >
      <div class="absolute inset-0 bg-white/10"></div>

      <div
        class="absolute right-0 top-0 w-72 h-72 bg-white/10 rounded-full translate-x-1/3 -translate-y-1/3"
      ></div>

      <img
        src="/images/logo/logo_white.png"
        alt="Logo RSUD"
        class="absolute left-6 top-1/2 w-70 opacity-10 -translate-y-1/2 pointer-events-none"
      />

      <div class="relative z-10 max-w-4xl">
        <p class="uppercase tracking-wide text-emerald-100 text-sm mb-2">
          Instalasi Gawat Darurat
        </p>
        <h1 class="text-3xl md:text-4xl font-bold leading-tight">
          Pelayanan Rawat Darurat (IGD)
          <span class="text-emerald-100">RSUD Dr. Soetomo</span>
        </h1>

        <p class="mt-5 text-emerald-50 leading-relaxed text-justify">
          Pelayanan penderita gawat darurat di Gedung Instalasi Gawat Darurat (IGD) RSUD
          Dr. Soetomo diberikan selama 24 jam dengan dukungan tenaga medis profesional,
          sistem pelayanan terpadu, serta peralatan medis modern dan canggih.
        </p>
      </div>
    </div>

    <!-- ================= DESKRIPSI ================= -->
    <div class="bg-white rounded-3xl p-10 shadow-sm space-y-5">
      <p class="text-slate-600 leading-relaxed text-justify">
        Instalasi Gawat Darurat (IGD) RSUD Dr. Soetomo memberikan pelayanan medis darurat
        secara cepat, tepat, dan terkoordinasi, dengan mengutamakan keselamatan serta
        prioritas penanganan pasien sesuai tingkat kegawatannya.
      </p>

      <p class="text-slate-600 leading-relaxed">
        <b>Sistem Pelayanan IGD</b><br />
        Dengan sistem <b>Triage</b>, pasien dipilah dan dilayani berdasarkan tingkat
        kegawatdaruratannya serta dikelompokkan menjadi empat kategori:
      </p>

      <!-- ================= TRIAGE CARDS ================= -->
      <div class="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 pt-4">
        <ComponentTriageCard
          img="/images/labelBiru.png"
          text="Label biru untuk penderita sangat gawat / ancaman nyawa"
        />
        <ComponentTriageCard
          img="/images/labelMerah.png"
          text="Label merah untuk penderita gawat darurat (kondisi stabil)"
        />
        <ComponentTriageCard
          img="/images/labelKuning.png"
          text="Label kuning untuk penderita darurat tetapi tidak gawat"
        />
        <ComponentTriageCard
          img="/images/labelHijau.png"
          text="Label hijau untuk penderita gawat"
        />
      </div>
    </div>

    <!-- ================= LAYANAN IGD ================= -->
    <div
      class="bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-8 md:p-10 shadow-sm"
    >
      <!-- Header -->
      <div class="flex items-center gap-4 mb-8">
        <div class="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
          <i class="fa-solid fa-stethoscope text-emerald-600 text-xl"></i>
        </div>
        <h2 class="text-2xl font-bold text-emerald-700">Sistem Pelayanan Terpadu IGD</h2>
      </div>

      <!-- Content -->
      <div class="grid md:grid-cols-2 gap-6 text-slate-600">
        <!-- LEFT -->
        <ul class="space-y-4 leading-relaxed">
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-hospital text-emerald-600 mt-1"></i>
            <span>
              <b>Pusat rujukan (Top Referral)</b> Jawa Timur dan Indonesia Timur
            </span>
          </li>

          <li class="flex items-start gap-3">
            <i class="fa-solid fa-clock text-emerald-600 mt-1"></i>
            <span> Pelayanan gawat darurat medik & bedah <b>24 jam</b> </span>
          </li>

          <li class="flex items-start gap-3">
            <i class="fa-solid fa-flask text-emerald-600 mt-1"></i>
            <span>
              Pemeriksaan penunjang lengkap (Laboratorium, ECG, Radiologi, CT Scan, USG,
              dan lainnya)
            </span>
          </li>

          <li class="flex items-start gap-3">
            <i class="fa-solid fa-syringe text-emerald-600 mt-1"></i>
            <span>Kamar Operasi Emergency pelayanan <b>24 jam</b></span>
          </li>

          <li class="flex items-start gap-3">
            <i class="fa-solid fa-pills text-emerald-600 mt-1"></i>
            <span>Apotek IGD melayani selama <b>24 jam</b></span>
          </li>
        </ul>

        <!-- RIGHT -->
        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-user-doctor text-emerald-600 mt-1"></i>
            <div>
              <p class="font-semibold text-slate-700 mb-1">
                Layanan Spesialis Terintegrasi
              </p>
              <ul class="ml-4 list-disc space-y-1 text-sm">
                <li>Bedah Umum, Orthopedi, Bedah Saraf, Urologi</li>
                <li>Kebidanan & Kandungan</li>
                <li>Penyakit Dalam, Anak, Jantung, Paru, Saraf</li>
                <li>THT, Mata, Kulit & Kelamin, Psikiatri</li>
                <li>Ruang ROI, VIP, NICU, dan Obgyn</li>
              </ul>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <i class="fa-solid fa-ambulance text-emerald-600 mt-1"></i>
            <span> Pelayanan Ambulans <b>118</b> & Sistem Radio Medik Terpadu </span>
          </div>

          <div class="flex items-start gap-3">
            <i class="fa-solid fa-skull-crossbones text-emerald-600 mt-1"></i>
            <span>Pusat Informasi Keracunan dan Toksikologi</span>
          </div>

          <!-- Contact -->
          <div class="mt-4 p-4 rounded-2xl bg-emerald-100/60 flex items-center gap-3">
            <i class="fa-solid fa-headset text-emerald-700 text-xl"></i>
            <div>
              <p class="text-sm text-slate-600">Customer Care</p>
              <p class="font-bold text-emerald-700">(031) 5501239 / 5501259</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ================= DOKUMEN PDF ================= -->
    <div
      class="bg-gradient-to-br from-emerald-50 via-white to-white rounded-3xl p-4 sm:p-6 shadow-sm border border-emerald-100"
    >
      <!-- Header -->
      <div class="flex items-center justify-center gap-3 mb-6 sm:mb-8">
        <div
          class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-100 flex items-center justify-center"
        >
          <i class="fa-solid fa-file-medical text-emerald-600 text-sm sm:text-base"></i>
        </div>

        <h3
          class="text-lg sm:text-xl font-bold text-emerald-700 text-center leading-snug"
        >
          Ringkasan Informasi & Edukasi Awal IGD
        </h3>
      </div>

      <!-- Card PDF -->
      <div>
        <BaseDonwloadDocument
          title="WELCOME DRINK"
          description="Documen resmi yang memuat informasi ringkasan informasi & edukasi awal IGD."
          file="/images/welcome_drink.pdf"
          icon="fas fa-building"
          button-text="Unduh"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ComponentTriageCard from "./component/ComponentTriageCard.vue";
import BaseDonwloadDocument from "~/components/form/BaseDonwloadDocument.vue";
</script>
