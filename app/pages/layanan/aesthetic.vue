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
        <BaseHeroPage title="Aeshetic Clinic" logo="/images/logo/logo_white.png" />
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
                src="/images/aesthetic_banner.png"
                alt="Soetomo Aesthetic Clinic"
                class="w-full h-full object-cover aspect-[4/5] sm:aspect-square"
              />

              <!-- Badge -->
              <div
                class="absolute top-4 left-4 bg-emerald-600/90 backdrop-blur text-white px-4 py-1.5 rounded-xl text-xs font-semibold shadow"
              >
                Soetomo Aesthetic Clinic
              </div>
            </div>

            <!-- CONTENT -->
            <div class="flex flex-col justify-center">
              <span
                class="text-sm font-semibold text-emerald-600 uppercase tracking-wide"
              >
                Layanan Estetika Terpadu
              </span>

              <h2 class="mt-2 text-3xl md:text-4xl font-bold text-emerald-700">
                Soetomo Aesthetic Clinic
              </h2>

              <p class="mt-4 text-slate-600 leading-relaxed">
                <strong>Soetomo Aesthetic Clinic</strong> merupakan klinik estetika
                terpadu milik RSUD Dr. Soetomo Surabaya yang berlokasi di
                <strong>Gedung STOC lantai 2</strong>.
              </p>

              <p class="mt-3 text-slate-600 leading-relaxed">
                Klinik ini menghadirkan layanan estetika yang ditangani oleh Dokter
                Spesialis dan Subspesialis
                <strong>Bedah Plastik Rekonstruksi dan Estetik</strong> serta
                <strong>Dermatologi, Venereologi & Estetika</strong>
                yang berpengalaman.
              </p>

              <p class="mt-3 text-slate-600 leading-relaxed">
                Didukung fasilitas modern dan teknologi terkini, setiap tindakan dilakukan
                dengan mengedepankan standar medis yang tinggi untuk memastikan keamanan
                dan hasil yang optimal bagi pasien.
              </p>

              <p class="mt-3 text-slate-600 leading-relaxed">
                Dengan pendekatan pelayanan yang mengutamakan kenyamanan, kualitas, dan
                efisiensi, Soetomo Aesthetic Clinic hadir sebagai solusi estetika yang
                aman, profesional, dan terpercaya.
              </p>
            </div>
          </div>
        </div>

        <!-- PELAYANAN -->
        <div class="py-5 px-10">
          <h3 class="text-2xl font-bold text-emerald-700 mb-6">Pelayanan Kami</h3>
          <div>
            <!-- Title -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div
                v-for="service in services"
                :key="service.title"
                class="bg-white rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-emerald-100 hover:shadow-[0_18px_40px_rgba(16,185,129,0.25)] flex items-center gap-4"
              >
                <!-- Icon -->
                <div
                  class="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-emerald-100 text-emerald-600"
                >
                  <i :class="service.icon" class="text-xl"></i>
                </div>

                <!-- Title -->
                <h4 class="text-md font-medium text-slate-800">
                  {{ service.title }}
                </h4>
              </div>
            </div>
          </div>
          <div class="mt-5">
            <!-- Title -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div
                v-for="serviceEstetika in serviceEstetikas"
                :key="serviceEstetika.title"
                class="bg-white rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-emerald-100 hover:shadow-[0_18px_40px_rgba(16,185,129,0.25)] flex items-center gap-4"
              >
                <!-- Icon -->
                <div
                  class="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-emerald-100 text-emerald-600"
                >
                  <i :class="serviceEstetika.icon" class="text-xl"></i>
                </div>

                <!-- Title -->
                <h4 class="text-md font-medium text-slate-800">
                  {{ serviceEstetika.title }}
                </h4>
              </div>
            </div>
          </div>
        </div>

        <!-- DOKTER -->

        <div class="py-14 pt-0 px-10">
          <h3 class="text-2xl font-bold text-emerald-700 mb-6">Daftar Dokter</h3>
          <h3 class="text-md font-bold text-emerald-700 mb-6">
            Dokter Spesialis Bedah Plastik Rekonstruksi dan Estetik
          </h3>

          <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li
              v-for="doctor in doctors"
              :key="doctor"
              class="bg-white rounded-xl p-5 shadow flex items-center gap-4"
            >
              <div
                class="w-10 h-10 shrink-0 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center"
              >
                <i class="fa-solid fa-user-doctor"></i>
              </div>

              <span class="text-slate-700 font-medium">
                {{ doctor }}
              </span>
            </li>
          </ul>
        </div>

        <!-- DOKTER -->
        <div class="py-14 pt-0 px-10">
          <h3 class="text-md font-bold text-emerald-700 mb-6">
            Dokter Spesialis Dermatologi, Venereologi dan Estetika
          </h3>

          <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li
              v-for="doctorEstetika in doctorEstetikas"
              :key="doctorEstetika"
              class="bg-white rounded-xl p-5 shadow flex items-center gap-4"
            >
              <div
                class="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center"
              >
                <i class="fa-solid fa-user-doctor"></i>
              </div>

              <span class="text-slate-700 font-medium">
                {{ doctorEstetika }}
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
                Informasi terkait pelayanan dan pendaftaran Soetomo Aesthetic Clinic
              </p>
            </div>

            <a
              href="https://wa.me/6282245012896"
              target="_blank"
              class="inline-flex items-center gap-3 bg-white text-emerald-700 px-6 py-3 rounded-xl font-semibold shadow hover:shadow-lg transition"
            >
              <i class="fa-brands fa-whatsapp text-xl"></i>
              <span>+62 822 4501 2896</span>
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
  title: "Aesthetic Clinic",
});

definePageMeta({
  breadcrumb: [{ label: "Beranda", to: "/" }, { label: "Aesthetic Clinic" }],
});
const services = [
  {
    title: "Rhinoplasty",
    icon: "fa-solid fa-shield-heart",
  },
  {
    title: "Blepharoplasty",
    icon: "fa-solid fa-shield-heart",
  },
  {
    title: "Face Lift",
    icon: "fa-solid fa-shield-heart",
  },
  {
    title: "Breast Lift / Augmentation / Reduction",
    icon: "fa-solid fa-shield-heart",
  },
  {
    title: "Liposuction",
    icon: "fa-solid fa-shield-heart",
  },
  {
    title: "Implan",
    icon: "fa-solid fa-shield-heart",
  },
  {
    title: "Buccal Fat Pad Removal",
    icon: "fa-solid fa-shield-heart",
  },
  {
    title: "Abdominoplasty",
    icon: "fa-solid fa-shield-heart",
  },
];

const serviceEstetikas = [
  {
    title: "Laser : PICO, Ablatif, Fraksional Ablatif, Hair Removal, Peel dan sebagainya",
    icon: "fa-solid fa-shield-heart",
  },
  {
    title: "Peeling",
    icon: "fa-solid fa-shield-heart",
  },
  {
    title: "HIFU",
    icon: "fa-solid fa-shield-heart",
  },
  {
    title: "Injeksi Botox dan Filler",
    icon: "fa-solid fa-shield-heart",
  },
  {
    title: "Microdermabrasi",
    icon: "fa-solid fa-shield-heart",
  },
  {
    title: "Rawat Luka",
    icon: "fa-solid fa-shield-heart",
  },
];

const doctors = [
  "Prof. Dr. David S. Perdanakusuma, dr., Sp.B.P.R.E, Subsp.E.L (K)",
  "Dr. Lobredia Zarasade, dr., Sp.B.P.R.E, Subsp.K.M. (K)",
  "Prof. Dr. Iswinarno Doso Saputro, dr., Sp.B.P.R.E, Subsp.L.B.L (K)",
  "Agus Santoso Budi, dr., Sp.B.P.R.E, Subsp.E.L (K)",
  "Magda R.Hutagalung, dr., Sp.B.P.R.E, Subsp.K.M. (K)",
  "Prof. M.Sjaifuddin Noer, dr., Sp.B., Sp.B.P.R.E, Subsp.G.E. (K)",
  "Dr. Lynda Hariani, dr., Sp.B.P.R.E, Subsp.L.B.L (K)",
  "Ira Handriani, dr., Sp.B.P.R.E, Subsp.L.B.L (K)",
  "Yuanita Safitri Dianti, dr., Sp.B.P.R.E, Subsp.T. (K)",
  "Hastika Saraswati, dr., Sp.B.P.R.E, Subsp.L.B.L (K)",
  "Alki Andana, dr., Sp.B.P.R.E, Subsp.K.M. (K)",
  "Taufiqur Rakhim Aditra, dr., M.Ked.Klin.Sp.B.P.R.E.",
];

const doctorEstetikas = [
  "Prof. Dr. David S. Perdanakusuma, dr., Sp.B.P.R.E, Subsp.E.L (K)",
  "Dr. Lobredia Zarasade, dr., Sp.B.P.R.E, Subsp.K.M. (K)",
  "Prof. Dr. Iswinarno Doso Saputro, dr., Sp.B.P.R.E, Subsp.L.B.L (K)",
  "Dr. Lynda Hariani, dr., Sp.B.P.R.E, Subsp.L.B.L (K)",
  "Prof. Dr. Muhammad Yulianto Listiawan, dr., Sp. D.V.E., Subsp. O.8.K., FINSDV, FAADV",
  "Sawitri, dr., Sp.D.V.E., Subsp. D.A., FINSDV, FAADV",
  "Diah Mira Indramaya, dr., Sp. D.V.E., Subsp. D.K.E., FINSDV, FAADV",
  "Dr. Trisniartami S., dr., Sp. D.V.E., Subsp. D.K.E., FINSDV, FAADV",
  "Rahmadewi, dr., Sp. D.V.E., Subsp. D.K.E., FINSDV, FAADV",
  "Dr. Damayanti, dr., Sp. D.V.E., Subsp. D.A.I., FINSDV, FAADV",
  "Astindari, dr., Sp.D.V.E., Subsp.Ven., FINSDV",
  "Irmadita Citrashanty, dr., Sp. D.V.E., Subsp. O.B.K., FINSDV",
  "Maylita Sari, dr., Sp. D.V.E., Subsp. O.B.K., FINSDV",
  "Dr. Medhi Denisa Alinda, dr., Sp.D.V.E., Subsp. D.T., FINSDV",
  "Septiana Widyantari, dr., Sp.KK, Subsp.Ven., FINSDV, FAA",
  "Hasnikmah Mappamasing, dr., Sp.D.V.E., Subsp. D.T., M.Kes, FINSDV",
  "Sylvia Anggraeni, dr., Sp.D.V.E., Subsp. D.A.I., FINSDV",
  "Bagus Haryo Kusumaputra, dr., Sp.D.V.E., FINSDV",
  "Menul Ayu Umborowati, dr., Sp.D.V.E., FINSDV",
  "Putri Hendria Wardhani, dr., Sp.D.V.E.",
];
</script>
