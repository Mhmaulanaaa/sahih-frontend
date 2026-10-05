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
        <BaseHeroPage
          title="Daftar Dokter KSM Anestesi"
          logo="/images/logo/logo_white.png"
        />
      </div>
      <!-- Menu -->
      <div class="bg-white rounded-2xl shadow-lg p-5">
        <!-- <DaftarDokter /> -->
        <div class="max-w-9xl mx-auto px-6">
          <!-- TABLE WRAPPER -->
          <div
            class="overflow-hidden rounded-2xl border border-emerald-200 bg-white shadow-sm"
          >
            <table class="w-full border-collapse text-sm">
              <!-- HEADER -->
              <thead>
                <tr class="bg-emerald-50">
                  <th class="px-6 py-4 text-center font-semibold text-emerald-700 w-20">
                    No
                  </th>
                  <th class="px-6 py-4 text-center font-semibold text-emerald-700">
                    Nama Dokter
                  </th>
                </tr>
              </thead>

              <!-- BODY -->
              <tbody>
                <tr
                  v-for="(dokter, index) in dokterList"
                  :key="index"
                  class="group border-t border-emerald-100 hover:bg-emerald-50 transition-colors"
                >
                  <!-- NO -->
                  <td
                    class="px-6 py-4 text-center font-medium text-slate-800 group-hover:text-emerald-700 transition"
                  >
                    {{ index + 1 }}
                  </td>

                  <!-- NAME -->
                  <td
                    class="px-6 py-4 text-center text-slate-800 group-hover:text-emerald-700 transition"
                  >
                    {{ dokter.nama }}
                  </td>
                </tr>

                <!-- EMPTY STATE -->
                <tr v-if="dokterList.length === 0">
                  <td colspan="2" class="px-6 py-10 text-center text-slate-400">
                    Tidak ada data dokter
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BaseHeroPage from "~/components/form/BaseHeroPage.vue";

useHead({
  title: "KSM Anestesi",
});

const dokterList = ref([
  { nama: "LILA TRI HARJANA, dr., Sp.An., KIC." },
  { nama: "SONI SUNARSO SULISTIAWAN, dr., Sp.An., FIPM., KMN." },
  { nama: "PHILIA SETIAWAN, dr., Sp.An., KIC., KAKV." },
  { nama: "CHRISTRIJOGO SUMARTONO W., dr., Sp.An., KAR." },
  { nama: "BAMBANG PUJO SEMEDI, dr., Sp.An., KIC." },
  { nama: "MARIZA FITRIATI, dr., Sp.An., KIC., KAO." },
  { nama: "EDWARD KUSUMA, dr., M.Kes., Sp.An., KIC." },
  { nama: "PRANANDA SURYA AIRLANGGA, dr., M.Kes., Sp.An., KIC." },
  { nama: "AGUSTINA SALINDING, dr., Sp.An., KIC." },
  { nama: "PESTA PARULIAN MAURID EDWAR, dr., Sp.An., KIC." },
  { nama: "MAULYDIA, dr., Sp.An., KIC." },
  { nama: "Prof. Dr. NANCY MARGARITA REHATTA, dr., Sp.An., KMN, KNA." },
  { nama: "PRIHATMA KRISWIDYATOMO, dr., Sp.An." },
  { nama: "FAJAR PERDHANA, dr., Sp.An., KIC., KAKV." },
  { nama: "BELINDO WIRABUANA, dr., Sp.An., KMN." },
  { nama: "WAHYU MANANDA, dr., Sp.An." },
  { nama: "TEUKU ASWIN HUSAIN, dr., Sp.An., KAKV." },
  { nama: "ROBBY DWESTU NUGROHO SISYANTO, dr., Sp.An." },
  { nama: "LUCKY ANDRIYANTO, dr., Sp.An., KIC., KAP." },
  { nama: "DHANIA ANINDITA SANTOSA, dr., Sp.An., KNA." },
  { nama: "DEDI SUSILA, dr., Sp.An., KMN., FIPP." },
  { nama: "KUN ARIFI ABBAS, dr., Sp.An., KIC." },
  { nama: "SRI PUSPITASARI, dr., Sp.An." },
  { nama: "HERDIANI SULISTYOPUTRI, dr., Sp.An., FIPM." },
  { nama: "ANNA SURGEAN VETERINI, dr., Sp.An., KIC." },
  { nama: "Prof. Dr. EDDY RAHARDJO, dr., Sp.An., KIC., KAO." },
  { nama: "Prof. SRI WAHJOENINGSIH, dr., Sp.An., KIC., KAO." },
  { nama: "HARDIONO, dr., Sp.An., KIC., KAKV." },
  { nama: "GATUT DWIDJO PRIJAMBODO, dr., Sp.An., KIC., KAO." },
  { nama: "HERDY SULISTYONO, dr., Sp.An., KIC., KMN., PGD., Pall.Med., ECU." },
  { nama: "TEGUH SYLVARANTO, dr., Sp.An., KIC." },
  { nama: "HARI ANGGORO DWIANTO, dr., Sp.An., KIC., KAR." },
  { nama: "PUGER RAHARDJO, dr., Sp.An., KIC., KAKV." },
  { nama: "ELIZEUS HANINDITO, dr., Sp.An., KIC., KAP." },
  { nama: "BAMBANG WAHJUPRAJITNO, dr., Sp.An., KIC." },
  { nama: "BAMBANG HARIJONO, dr., Sp.An., KNA." },
  { nama: "APRIL POERWANTO BASOEKI, dr., Sp.An., KIC." },
  { nama: "AIRI MUTIAR, dr., Sp.An., M.Ked.Klin." },
  { nama: "ARIE UTARIANI, dr., Sp.An., KAP." },
  { nama: "HAMZAH, dr., Sp.An., KNA., KIC." },
  { nama: "YOS KOWARA, dr., Sp.An., M.Ked.Klin." },
  { nama: "RETTI KARTIKA BAKTI, dr., Sp.An." },
  { nama: "KOHAR HARI SANTOSO, dr., Sp.An., KIC., KAP." },
]);

import Breadcrumb from "~/components/layout/Breadcrumb.vue";
definePageMeta({
  breadcrumb: [
    { label: "Beranda", to: "/" },
    { label: "Daftar Dokter", to: "/daftardokter" },
    { label: "KSM Anestesi" },
  ],
});
</script>
