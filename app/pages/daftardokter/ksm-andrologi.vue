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
          title="Daftar Dokter KSM Andrologi"
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
  title: "KSM Andrologi",
});

const dokterList = ref([
  { nama: "SUPARDI, dr., Sp.And." },
  { nama: "PETY NARULITA, dr, Sp.And." },
  { nama: "TJAHJO DJOJO TANOJO, dr., MS., Sp.And." },
  { nama: "JUDIE HARTONO, dr., MS., Sp.And." },
  { nama: "AGUSTINUS, dr., Sp.And." },
]);
import Breadcrumb from "~/components/layout/Breadcrumb.vue";
definePageMeta({
  breadcrumb: [
    { label: "Beranda", to: "/" },
    { label: "Daftar Dokter", to: "/daftardokter" },
    { label: "KSM Andrologi" },
  ],
});
</script>
