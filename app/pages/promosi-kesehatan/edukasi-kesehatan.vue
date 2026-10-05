<template>
  <section class="bg-gradient-to- from-emerald-50 via-white to-emerald-50 pt-20">
    <!-- BREADCRUMB -->
    <div class="max-w-9xl mx-auto px-6 mt-15">
      <Breadcrumb />
    </div>
    <!-- HERO -->
    <div class="max-w-9xl mx-auto px-6 py-5">
      <BaseHeroPage title="Edukasi Kesehatan" logo="/images/logo/logo_white.png" />
    </div>

    <!-- CONTENT -->
    <div class="max-w-9xl mx-auto px-6 space-y-6">
      <!-- =========================================================
         SEARCH CARD
    ========================================================== -->
      <div class="bg-white rounded-2xl shadow-lg border border-emerald-100 p-5 sm:p-6">
        <!-- TITLE -->
        <div class="mb-5">
          <h1 class="text-lg font-semibold text-emerald-700">Pencarian</h1>
        </div>

        <!-- SEARCH FORM -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <!-- JUDUL EDUKASI -->
          <div>
            <label for="judul" class="block mb-2 text-sm font-medium text-gray-700">
              Judul Edukasi
            </label>

            <input
              id="judul"
              v-model="filters.judul"
              type="text"
              placeholder="Cari judul edukasi..."
              class="w-full h-11 rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-700 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-100"
            />
          </div>

          <!-- JENIS EDUKASI -->
          <div>
            <label for="jenis" class="block mb-2 text-sm font-medium text-gray-700">
              Jenis Edukasi
            </label>

            <select
              id="jenis"
              v-model="filters.jenis"
              class="w-full h-11 rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-700 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-100"
            >
              <option value="">Semua Jenis Edukasi</option>

              <option v-for="item in jenisEdukasi" :key="item" :value="item">
                {{ item }}
              </option>
            </select>
          </div>

          <!-- UNIT KERJA -->
          <div>
            <label for="unit" class="block mb-2 text-sm font-medium text-gray-700">
              Unit Kerja
            </label>

            <select
              id="unit"
              v-model="filters.unit"
              class="w-full h-11 rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-700 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-100"
            >
              <option value="">Semua Unit Kerja</option>

              <option v-for="item in unitKerja" :key="item" :value="item">
                {{ item }}
              </option>
            </select>
          </div>

          <!-- RUANGAN -->
          <div>
            <label for="ruangan" class="block mb-2 text-sm font-medium text-gray-700">
              Ruangan
            </label>

            <select
              id="ruangan"
              v-model="filters.ruangan"
              class="w-full h-11 rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-700 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-100"
            >
              <option value="">Semua Ruangan</option>

              <option v-for="item in ruangan" :key="item" :value="item">
                {{ item }}
              </option>
            </select>
          </div>
        </div>

        <!-- ========================================================= BUTTON ========================================================== -->
        <div class="flex items-center gap-2 mt-5 pt-5 border-t border-gray-100">
          <!-- CARI -->
          <button
            type="button"
            @click="searchData"
            class="h-10 px-5 rounded-xl bg-emerald-600 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700 active:scale-[0.98]"
          >
            Cari
          </button>
          <!-- RESET -->
          <button
            type="button"
            @click="resetFilter"
            class="h-10 px-5 rounded-xl border border-gray-200 bg-white text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:border-gray-300"
          >
            Reset
          </button>
        </div>
      </div>

      <!-- ========================================================= TABLE CARD ========================================================== -->
      <div
        class="bg-white rounded-2xl shadow-lg border border-emerald-100 overflow-hidden"
      >
        <!-- TABLE HEADER -->
        <div
          class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-5 py-4 border-b border-gray-100"
        >
          <div>
            <h2 class="text-base font-semibold text-emerald-700">Edukasi Kesehatan</h2>
          </div>
        </div>
        <!-- TABLE -->
        <div class="overflow-x-auto">
          <table class="w-[95%] m-5 min-w-[900px] table-fixed text-xs">
            <!-- HEAD -->
            <thead>
              <tr class="bg-emerald-50/70 border-b border-emerald-100">
                <th class="w-[14%] px-3 py-3 text-left font-semibold text-emerald-800">
                  Kode Media Edukasi
                </th>
                <th class="w-[25%] px-3 py-3 text-left font-semibold text-emerald-800">
                  Judul Edukasi
                </th>
                <th class="w-[12%] px-3 py-3 text-left font-semibold text-emerald-800">
                  Jenis Edukasi
                </th>
                <th class="w-[19%] px-3 py-3 text-left font-semibold text-emerald-800">
                  Unit Kerja
                </th>
                <th class="w-[10%] px-3 py-3 text-left font-semibold text-emerald-800">
                  Ruangan
                </th>
                <th class="w-[10%] px-3 py-3 text-center font-semibold text-emerald-800">
                  Tahun Terbit
                </th>
                <th class="w-[10%] px-3 py-3 text-center font-semibold text-emerald-800">
                  Jumlah Akses
                </th>
              </tr>
            </thead>
            <!-- BODY -->
            <tbody class="divide-y divide-gray-100">
              <tr
                v-for="item in paginatedData"
                :key="item.kode"
                class="transition hover:bg-emerald-50/40"
              >
                <!-- KODE -->
                <td class="px-3 py-3 align-top">
                  <a
                    :href="item.kodeUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="font-medium text-emerald-600 hover:text-emerald-800 hover:underline break-words"
                  >
                    {{ item.kode }}
                  </a>
                </td>
                <!-- JUDUL -->
                <td class="px-3 py-3 align-top">
                  <a
                    :href="item.judulUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="font-medium text-gray-700 hover:text-emerald-700 hover:underline leading-relaxed break-words"
                  >
                    {{ item.judul }}
                  </a>
                </td>
                <!-- JENIS -->
                <td class="px-3 py-3 align-top">
                  <span
                    class="inline-flex items-center px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-[11px] font-medium"
                  >
                    {{ item.jenis }}
                  </span>
                </td>
                <!-- UNIT -->
                <td class="px-3 py-3 align-top text-gray-600 break-words">
                  {{ item.unit }}
                </td>
                <!-- RUANGAN -->
                <td class="px-3 py-3 align-top text-gray-600">{{ item.ruangan }}</td>
                <!-- TAHUN -->
                <td class="px-3 py-3 align-top text-center text-gray-600">
                  {{ item.tahun }}
                </td>
                <!-- AKSES -->
                <td class="px-3 py-3 align-top text-center">
                  <span
                    class="inline-flex min-w-7 h-6 px-2 items-center justify-center rounded-lg bg-gray-100 text-gray-700 text-[11px] font-semibold"
                  >
                    {{ item.akses }}
                  </span>
                </td>
              </tr>
              <!-- EMPTY -->
              <tr v-if="paginatedData.length === 0">
                <td colspan="7" class="px-5 py-12 text-center">
                  <div
                    class="w-11 h-11 mx-auto mb-3 flex items-center justify-center rounded-full bg-gray-100 text-gray-400"
                  >
                    🔍
                  </div>
                  <p class="text-sm font-medium text-gray-600">
                    Data edukasi tidak ditemukan
                  </p>
                  <p class="mt-1 text-xs text-gray-400">
                    Silakan ubah kata kunci atau filter pencarian.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- ======================================================= PAGINATION ======================================================== -->
        <!-- =======================================================
     PAGINATION
======================================================== -->
        <div class="border-t border-gray-100">
          <!-- PAGINATION ROW -->
          <div
            class="flex flex-col md:flex-row md:items-center md:justify-between gap-3 px-5 py-4"
          >
            <!-- INFO -->
            <div class="text-xs text-gray-500">
              Menampilkan
              <span class="font-medium text-gray-700">
                {{ startItem }}
              </span>
              -
              <span class="font-medium text-gray-700">
                {{ endItem }}
              </span>
              dari
              <span class="font-medium text-gray-700">
                {{ filteredData.length }}
              </span>
              data
            </div>

            <!-- PAGINATION -->
            <div class="flex items-center gap-1">
              <!-- PREVIOUS -->
              <button
                type="button"
                :disabled="currentPage === 1"
                @click="currentPage--"
                class="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 text-sm transition hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                ‹
              </button>

              <!-- PAGE -->
              <button
                v-for="page in totalPages"
                :key="page"
                type="button"
                @click="currentPage = page"
                class="w-8 h-8 flex items-center justify-center rounded-lg text-xs font-medium transition"
                :class="
                  currentPage === page
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'border border-gray-200 text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200'
                "
              >
                {{ page }}
              </button>

              <!-- NEXT -->
              <button
                type="button"
                :disabled="currentPage === totalPages || totalPages === 0"
                @click="currentPage++"
                class="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 text-sm transition hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                ›
              </button>
            </div>
          </div>

          <!-- UPDATE INFO -->
          <div class="px-5 pb-4 text-xs text-gray-400">
            Konten halaman ini diperbarui pada
            <span class="font-medium text-gray-500"> 10 September 2026 10:10:34 </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from "vue";
import Breadcrumb from "~/components/layout/Breadcrumb.vue";
import BaseHeroPage from "~/components/form/BaseHeroPage.vue";

useHead({
  title: "Edukasi Kesehatan",
});

definePageMeta({
  breadcrumb: [{ label: "Beranda", to: "/" }, { label: "Edukasi Kesehatan" }],
});

// =========================================================
// FILTER
// =========================================================

const filters = reactive({
  judul: "",
  jenis: "",
  unit: "",
  ruangan: "",
});

// =========================================================
// OPTIONS
// =========================================================

const jenisEdukasi = ["Lembar Balik", "Leaflet", "Flyer"];

const unitKerja = [
  "KSM Mikrobiologi Klinik",
  "Instalasi Rawat Inap Bedah",
  "Instalasi Farmasi",
  "KSM Kedokteran Jiwa",
  "Komite Pencegahan dan Pengendalian Infeksi",
  "Instalasi Bank Jaringan",
];

const ruangan = ["Teratai", "Melati", "Cempaka", "-"];

// =========================================================
// DATA
// =========================================================

const data = ref([
  {
    kode: "LB/102.6.4.49/1",
    kodeUrl:
      "https://rsudrsoetomo.jatimprov.go.id/f/buwdfFdnXGSsGV3-nn2HGcwtRj5fzJidjRg1iO8lhBRZruqJ8j28kgSHfs78NWoyIMx1qwur-qkcGP2FVUAdCdeFFn3D2NoGVbYtCcPN5SLrVxp8C9z_7xbn3fiP7PYi5qz9rS7n3oA2WVbrsWx5lhDR968-DkkOQAapzuXRN3bti4p3gErhd4J6j1t3gqxmyYc",
    judul: "Pemeriksaan Mikrobiologi Klinik RSUD Dr. Soetomo",
    judulUrl:
      "https://rsudrsoetomo.jatimprov.go.id/f/10-cHilQz0RlhLpkA91ZgUaJoFGjLQVoZ4VgElr6NAhujzm8l_hdo8MwNhoNKFHOPTbYP9k4wHjD73YcyNcPXHa_LijKWm5r2IOLtGSgfbxxxhY9HdPZ3DdsBvMKmfFRQw5KSHYeLkoz6eJpDWWri64rNjWzGDzacOVUHEqxKd71YsMrI4afC_XQkBa0NCdZpFM",
    jenis: "Lembar Balik",
    unit: "KSM Mikrobiologi Klinik",
    ruangan: "-",
    tahun: 2026,
    akses: 0,
  },

  {
    kode: "L/102.6.4.11/01",
    kodeUrl:
      "https://rsudrsoetomo.jatimprov.go.id/f/PRL7Fl8XvkILY1uMTUJYq_mgKikHR0I8EP5hsNz54B2PvuNzUs9VRIN_PqKlZppkBnHtrG-iLx6-5OaJNzBpn-tqX3aUT1Pd4zaY8BxReuz_qu_27IzcIZtWTl8LF-xhOZsDNYPctkdx5kelgevrFWGUOzU6mSKDse_ks424abdHEnDkAg",
    judul: "Mengenal Lebih Jauh Kanker Naso Faring",
    judulUrl:
      "https://rsudrsoetomo.jatimprov.go.id/f/tZq8VQNVs5cW7DRedbVimGi3SOVAM4Ua2bgSnZwPLGDjXh5nLPfAthmG-Z9j1usdFO9l2KOQSG06TNco-nTZ_5JmtPEayrFm33I_tNc0yEq4HftPRzab0Cai0kUwklPxp_QK0irlWA-EBFgZNscXw1-lI7gxr3nzyfsHjQvoT5ZcWK91Lg",
    jenis: "Leaflet",
    unit: "Instalasi Rawat Inap Bedah",
    ruangan: "Teratai",
    tahun: 2026,
    akses: 1,
  },

  {
    kode: "LB/102.6.4.24/1",
    kodeUrl:
      "https://rsudrsoetomo.jatimprov.go.id/f/6Kv4O1k6EKBXQZ0GH-pJJCBjtIcyRVHhPBpKRrv7Ldm1KdlYlo796mte8aEVKp_cKqha34dl1TTeaK4e9jyJTPYgQjcy7tMuDBasSQ-B5HuKXlqDuFKZcBoP958Kdr3VeUBFLypftoimHLzObF-YywhsqAfbofO2abacGy-BXzJGjqzq1cMX3cuO0brPqfobvPYaT_SG_oueow",
    judul: "Manajemen Efek Samping Obat Kemoterapi Oral",
    judulUrl:
      "https://rsudrsoetomo.jatimprov.go.id/f/qLp_itQpS_daILdZkmBsLCliIKnYsHb4uMh_Hh9snwavylbvyucTSu6Q1ipK4-31JTmf0zs-3qOp-9_M6jEzgCetsZHMlLhXlJgs8ETdO5uifSUva2steWJAmY9s17ADg7DNksNRxTFlMQKAQk7ud9aAincEq1-OP0ol0lzJhkDqWN1SFEwaI7mPHd25AEKP4uK392Jb1sb_4Q",
    jenis: "Lembar Balik",
    unit: "Instalasi Farmasi",
    ruangan: "-",
    tahun: 2024,
    akses: 0,
  },

  {
    kode: "LB/102.6.4.11/2",
    kodeUrl:
      "https://rsudrsoetomo.jatimprov.go.id/f/E5vVQs5xAUK3sxi43YJBHA4bfTrWyHqIf8aP1An0MTBY6sxD1E3L_r8O4W0nmr7qOPLbg1Ue-r9dtoNLjc4GZB9W-BFL0SjQExcRnT7Kjo3AewDDn5QrRjc9W5PY81azqsqxxHaKrAcX3tDZoOTtfZmz6P6qqiRO8Jj714nG3DjxsllH5inRmSEn",
    judul: "Welcome Book, IRNA Bedah - Melati",
    judulUrl:
      "https://rsudrsoetomo.jatimprov.go.id/f/PLNgY11DK4oD_KEcV6wKKyeOFg-gTBp26yvtMBuPNCZf7qbaDLlMhVglMCmnMxSYfIiLP0pLsHfhyE4ufNioSSa-Dp3v3E7skIqEtLfjNqbriNt6P-Pt2qFkRv8ehm7fvo64aD6KNifKTdNyQUSNgCAQWXC2AotfWQ_AnGeFSsPKSbzL5KRWpnxK",
    jenis: "Lembar Balik",
    unit: "Instalasi Rawat Inap Bedah",
    ruangan: "Melati",
    tahun: 2025,
    akses: 0,
  },

  {
    kode: "L/102.6.4.36/09",
    kodeUrl:
      "https://rsudrsoetomo.jatimprov.go.id/f/n85iIG0UQ_7KntXU1XksuFm-z7kfCKpU2Z9aSoFRLQ3qoGMuh4FZtaGRBNxDBfKvAHu13sQcAUODkPL9IVWhp9HJIilV9d70p5fvYeFMBEBbSwkKVOQDoLJQa1IbXbUTU0t3aJnC17OApbq2rdyh9YFDLcVPrB9hSXupmWfC77uo1KQQ2xHsQwXsVA",
    judul: "Manajemen Kecemasan Terhadap Penularan Kusta",
    judulUrl:
      "https://rsudrsoetomo.jatimprov.go.id/f/MWwlkQukHcAVBT5pbpwflzY-FZkKEpgIUwgwSRUExHJAd6xLX5DuhphwRte_aZ1rHVxNwnKABtFwTmlBeokDF3jle53D1_gey2vKqyuzqxW13Et5_7HJQIuRkanBdCyuxOXYsFes3XqWeeYxAJDUri3NDDJU1zrdHpICnhaJwdKr9diwlol4Me2iqw",
    jenis: "Leaflet",
    unit: "KSM Kedokteran Jiwa",
    ruangan: "-",
    tahun: 2024,
    akses: 0,
  },

  {
    kode: "L/102.6.4.36/08",
    kodeUrl:
      "https://rsudrsoetomo.jatimprov.go.id/f/CEarMCHVMrmrbJcCHTE6DUXgpBBMpx9YMSiPQ1D_3PegNGhz34DsYBFmYM2n9w3ay8x7dfK0yYKHZ6f2JGw663ddo5Lm55lMCBjLhoi-UfCOLlQZIWlw0rNQ-vCN2_OC7TunL9LXmXV9CmOrXmG_q6RzgneCRIjICQ-xJv71MOJGVby1DHukNI4gFBeDxP-9JAmZaIJbl3JFPYZ83arKebMJuw",
    judul: "Persiapan Psikologis Menuju Pemulihan dan Kembali ke Masyarakat",
    judulUrl:
      "https://rsudrsoetomo.jatimprov.go.id/f/OXfjsPC_7tdsw74ay3ji44AGzaRskcmQYhubIF-0pupKPdgwuv2T8PxWLF3Ule6pHPbomsfath3sbJ-yc1BNhSe86fjLF_BRlWaWK9LN1yUArk7yDpCBgc0voKD3j0L8nCWG3yOhB9zpeNipNa0y_8mmz938OWYnkrpnpSjmTImXfUhc7SHNRrzPDZSQfoWEjl2lXyz7a5R9DOoBqIfZudQxDg",
    jenis: "Leaflet",
    unit: "KSM Kedokteran Jiwa",
    ruangan: "-",
    tahun: 2024,
    akses: 0,
  },

  {
    kode: "LB/102.6.4.11/1",
    kodeUrl:
      "https://rsudrsoetomo.jatimprov.go.id/f/ItxKin5u7A1GMUnTOw5bIoOgH92GYUDCYm7ACB-Cp0FdxI0k0mGpj0dgaVN0MaSjJtVZrDVDNt0TC_Rqn0mF4fpWum2fQzJPmbOJBoBEuQY6sB3m1Q_IgAT4d7hoLVqt3N76_FNaZBIUyTckgj93w_WA_LR2iIb5um0-hCZFdU3f8Z3eirrZXbqwb4Cjmz78e9M",
    judul: "Welcome Book, IRNA Bedah - Cempaka",
    judulUrl:
      "https://rsudrsoetomo.jatimprov.go.id/f/oLOJ2v4kuuwkGhMGaF31SxrSGqapkxmkSDWpDKtl3LpPyzJ9jz3RDuI1alC0-GudrvXTXIDdfx_YEgVKa1tGfIkjzZZBBbTO4RKjpieKO2z_1zUJn7x5lW7Uw3AKc6kD_caTligunoeXJhe7dCxgcXIuKJ9Xm_YOGq61c_ygGXDgRT2IGobEd8Bz5ldYojqiRhc",
    jenis: "Lembar Balik",
    unit: "Instalasi Rawat Inap Bedah",
    ruangan: "Cempaka",
    tahun: 2025,
    akses: 1,
  },

  {
    kode: "LB/102.6.4.29/1",
    kodeUrl:
      "https://rsudrsoetomo.jatimprov.go.id/f/saZODDXhE0ftUUfP4AqJ7AcF8KfJegV2s008_ew80uaHDmS9jW0aEnL2Ey-3NQUXtezNDb2-a-BAtUQPsI6jHQ8SbMHrhEzkWcAFyeXXms2UHusUe_G6ZqSAEDca_Vw6yoRqMnJ6XzfsWdP3k6SrUwX9fIDRXTWdbInA-Qb5ZrRV2CTxTlcvV0hHQA",
    judul: "FNAB (Fine Needle Aspiration Biopsy)",
    judulUrl:
      "https://rsudrsoetomo.jatimprov.go.id/f/-IlWhSlD3G6fTB2hyaVm9XVf-2aMOXcP14YWEY52Rs4eURkl-haVgAWR75nevDJcoiShWneLxaokG5dsQXs9GLTVlLlVPDECkv0ww8Bwd63NyTatz1gRdiiMn134pyNJ1M3TzFuZ2Xu9ob4zzuYNkQ7OB-bjNLdBSbVAbLtmkye9L8TxRrBlA6ennw",
    jenis: "Lembar Balik",
    unit: "Komite Pencegahan dan Pengendalian Infeksi",
    ruangan: "-",
    tahun: 2024,
    akses: 0,
  },

  {
    kode: "F/102.6.1.7/03",
    kodeUrl:
      "https://rsudrsoetomo.jatimprov.go.id/f/bUu1H-XZMBdKev4Tl94_FqRZTexeyXRjgDvezLa92zZ6TUXn4Vsq5zbqpPDoQ1qRuqhhCLVYzJBTEf4elbH5_EVVkSlqPfglaiYxoa3jBGWPNtOK7OayHLb4Hazh67qqGrN-CPVRU0yJBdlc9tmwAkDlzljd",
    judul: "Donasi Jaringan",
    judulUrl:
      "https://rsudrsoetomo.jatimprov.go.id/f/7WooGrXgAXrTiBdNSFkfUESp4m3YGIzI73OOESKxsJ0lehk1cXAg2irJglmP2ideetVdDdPcqVN9ta4SqpLMMAy-hz3QAA3mTXPAB08Bq_LrYQdUVB0mFns21wewN73h8L769KGrJtIyEtQgbnUq3P8jVKNI",
    jenis: "Flyer",
    unit: "Instalasi Bank Jaringan",
    ruangan: "-",
    tahun: 2025,
    akses: 0,
  },

  {
    kode: "F/102.6.4.11/24",
    kodeUrl:
      "https://rsudrsoetomo.jatimprov.go.id/f/6DQujfZuobfzH1mKrrRfvQOlGwdHLEogXgzmsVbUSt0gPn3QhhlECG6s3Dwa5FbLv2onOWvLvB9Y_oP9uuPRyISp6V0vnaBlCGsibvPNHE3CxcCRn_iCeisZmnFxSK8bx6zpkvQbgF-0F7mAHruwu8n14BOVhYKHfRynmE05dfGAFIS58iKfQA",
    judul: "Edukasi Trakeostomi",
    judulUrl:
      "https://rsudrsoetomo.jatimprov.go.id/f/WApXGLl3OuJklEfFka2Y1tOg_ZHU0BCppv7zbDn0pNzLnojmj7r9sgrPNBuOG-nOaqfHOrdHUfw7UvDs5Yu14pNOM8p99q0_T2LNgYO3PvgfIIzWfCS7aCSaK4WHWeZRSDbtDNVYyGPfhrjpwm9Kwl3luIcnMfha7cM4wIMsIiTEdZaShm5dnw",
    jenis: "Flyer",
    unit: "Instalasi Rawat Inap Bedah",
    ruangan: "Teratai",
    tahun: 2026,
    akses: 1,
  },
]);

// =========================================================
// SEARCH
// =========================================================

const isSearching = ref(false);

const searchData = () => {
  currentPage.value = 1;
  isSearching.value = true;
};

const resetFilter = () => {
  filters.judul = "";
  filters.jenis = "";
  filters.unit = "";
  filters.ruangan = "";

  currentPage.value = 1;
  isSearching.value = false;
};

// =========================================================
// FILTERED DATA
// =========================================================

const filteredData = computed(() => {
  const judul = filters.judul.trim().toLowerCase();

  return data.value.filter((item) => {
    const matchJudul = !judul || item.judul.toLowerCase().includes(judul);

    const matchJenis = !filters.jenis || item.jenis === filters.jenis;

    const matchUnit = !filters.unit || item.unit === filters.unit;

    const matchRuangan = !filters.ruangan || item.ruangan === filters.ruangan;

    return matchJudul && matchJenis && matchUnit && matchRuangan;
  });
});

// =========================================================
// PAGINATION
// =========================================================

const currentPage = ref(1);

const perPage = 5;

const totalPages = computed(() => {
  return Math.ceil(filteredData.value.length / perPage);
});

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  const end = start + perPage;

  return filteredData.value.slice(start, end);
});

const startItem = computed(() => {
  if (filteredData.value.length === 0) return 0;

  return (currentPage.value - 1) * perPage + 1;
});

const endItem = computed(() => {
  return Math.min(currentPage.value * perPage, filteredData.value.length);
});

// =========================================================
// RESET PAGE WHEN FILTER CHANGES
// =========================================================

watch(
  () => [filters.judul, filters.jenis, filters.unit, filters.ruangan],
  () => {
    if (!isSearching.value) {
      currentPage.value = 1;
    }
  }
);
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
