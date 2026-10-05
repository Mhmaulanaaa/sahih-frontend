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
        <BaseHeroPage title="Immunotherapy Clinic" logo="/images/logo/logo_white.png" />
      </div>

      <div class="bg-white shadow-md rounded-3xl">
        <!-- CARD UTAMA -->
        <div class="py-10">
          <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white rounded-3xl p-6 sm:p-10 shadow-sm"
          >
            <!-- IMAGE -->
            <div class="relative overflow-hidden rounded-3xl shadow-md">
              <img
                src="/images/immunotherapy_banner.png"
                alt="Immunotherapy Clinic"
                class="w-full h-full object-cover aspect-[4/5] sm:aspect-square"
              />

              <!-- Badge -->
              <div
                class="absolute top-4 left-4 bg-emerald-600/90 backdrop-blur text-white px-4 py-1.5 rounded-xl text-xs font-semibold shadow"
              >
                Immunotherapy Clinic
              </div>
            </div>

            <!-- CONTENT -->
            <div class="flex flex-col justify-center">
              <span
                class="text-sm font-semibold text-emerald-600 uppercase tracking-wide"
              >
                Layanan Imunoterapi
              </span>

              <h2 class="mt-2 text-3xl md:text-4xl font-bold text-emerald-700">
                Immunotherapy Clinic
              </h2>

              <p class="mt-4 text-slate-600 leading-relaxed">
                <strong>Immunotherapy Clinic</strong> merupakan pusat layanan kesehatan
                untuk penanganan alergi dan imunoterapi pada anak.
              </p>

              <p class="mt-3 text-slate-600 leading-relaxed">
                Pendampingan menyeluruh mulai dari diagnosis, terapi, hingga pemantauan
                jangka panjang oleh Dokter Spesialis Anak.
              </p>

              <p class="mt-3 text-slate-600 leading-relaxed">
                Berlokasi di
                <strong>Gedung STOC RSUD Dr. Soetomo lantai 1</strong>, dengan suasana
                klinik yang nyaman dan tim medis berpengalaman.
              </p>
            </div>
          </div>
        </div>

        <!-- PELAYANAN -->
        <div class="py-5 px-10">
          <h3 class="text-2xl font-bold text-emerald-700 mb-6">Pelayanan Kami</h3>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              v-for="service in services"
              :key="service.title"
              class="bg-white rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-emerald-100 hover:shadow-[0_18px_40px_rgba(16,185,129,0.25)] flex items-center gap-4"
            >
              <div
                class="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-emerald-100 text-emerald-600"
              >
                <i :class="service.icon" class="text-xl"></i>
              </div>

              <h4 class="text-md font-medium text-slate-800">
                {{ service.title }}
              </h4>
            </div>
          </div>
        </div>

        <!-- DOKTER -->
        <div class="py-14 pt-0 px-10">
          <h3 class="text-2xl font-bold text-emerald-700 mb-6">Daftar Dokter</h3>

          <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li
              v-for="doctor in doctors"
              :key="doctor"
              class="bg-white rounded-xl p-5 shadow flex items-center gap-4"
            >
              <div
                class="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center"
              >
                <i class="fa-solid fa-user-doctor"></i>
              </div>

              <span class="text-slate-700 font-medium">
                {{ doctor }}
              </span>
            </li>
          </ul>
        </div>

        <!-- KONTAK -->
        <div class="pb-5 pt-0 px-10">
          <div
            class="bg-emerald-600 rounded-3xl p-10 text-white flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6"
          >
            <div>
              <h3 class="text-2xl font-bold">Informasi & Pendaftaran</h3>
              <p class="mt-2 text-emerald-100">
                Informasi terkait pelayanan dan pendaftaran Immunotherapy Clinic
              </p>
            </div>

            <a
              href="https://wa.me/6281331702754"
              target="_blank"
              class="inline-flex items-center gap-3 bg-white text-emerald-700 px-6 py-3 rounded-xl font-semibold shadow hover:shadow-lg transition"
            >
              <i class="fa-brands fa-whatsapp text-xl"></i>
              <span>+62 813 3170 2754</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Breadcrumb from "~/components/layout/Breadcrumb.vue";
import BaseHeroPage from "~/components/form/BaseHeroPage.vue";

useHead({
  title: "Immunotherapy Clinic",
});

definePageMeta({
  breadcrumb: [{ label: "Beranda", to: "/" }, { label: "Immunotherapy Clinic" }],
});
const services = [
  {
    title: "Imunoterapi Alergi",
    icon: "fa-solid fa-shield-heart",
  },
  {
    title: "Tes Alergi",
    icon: "fa-solid fa-shield-heart",
  },
  {
    title: "Konsultasi Alergi",
    icon: "fa-solid fa-shield-heart",
  },
  {
    title: "Konsultasi Imunologi",
    icon: "fa-solid fa-shield-heart",
  },
];

const doctors = [
  "Prof. Dr. Anang Endaryanto, dr., Sp.A (K)",
  "Dr. Zahrah Hikmah, dr., Sp.A (K)",
  "Dr. Azwin Mengindra Putera, dr., SpA (K)",
];
</script>
