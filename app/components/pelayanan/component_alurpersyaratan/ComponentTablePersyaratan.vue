<template>
  <div
    class="relative bg-white rounded-[28px] shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden mb-8"
  >
    <!-- ================= HEADER ================= -->
    <div
      class="px-5 sm:px-6 py-4 sm:py-5 bg-gradient-to-r from-emerald-50 via-white to-emerald-50"
    >
      <h3 class="text-base sm:text-lg font-bold text-emerald-700">Alur Pelayanan</h3>
      <p class="text-xs sm:text-sm text-gray-500">Prosedur dan tahapan layanan</p>
    </div>

    <!-- ================= CONTENT ================= -->
    <div class="p-3 sm:p-4 md:p-6">
      <div class="relative overflow-x-auto">
        <!-- Scroll Hint (Mobile Only) -->
        <!-- <div
          class="pointer-events-none absolute top-1/2 right-2 -translate-y-1/2 text-[10px] text-emerald-600 bg-white/90 px-2 py-1 rounded-full shadow sm:hidden z-30"
        >
          Geser →
        </div> -->

        <div class="rounded-2xl overflow-hidden border border-emerald-600 min-w-max">
          <table
            class="min-w-[780px] md:min-w-[900px] w-full text-[11px] sm:text-xs md:text-sm border-separate border-spacing-0"
          >
            <!-- ================= THEAD ================= -->
            <thead
              class="sticky top-0 z-20 bg-gradient-to-r from-emerald-700 to-emerald-600 text-white"
            >
              <tr>
                <th
                  class="px-2 sm:px-3 py-2 sm:py-3 text-center w-10 border border-emerald-600 font-semibold"
                >
                  No
                </th>

                <th
                  class="px-3 sm:px-4 py-2 sm:py-3 text-left border border-emerald-600 sticky left-0 bg-gradient-to-r from-emerald-700 to-emerald-600 z-30 font-semibold"
                >
                  Jenis Penjaminan
                </th>

                <th
                  class="px-3 sm:px-4 py-2 sm:py-3 text-left border border-emerald-600 font-semibold"
                >
                  Persyaratan
                </th>
              </tr>
            </thead>

            <!-- ================= TBODY ================= -->
            <tbody class="divide-y divide-emerald-100 bg-white">
              <tr
                v-for="(item, i) in data"
                :key="i"
                class="transition md:hover:bg-emerald-50/70"
              >
                <!-- No -->
                <td class="text-center py-2 sm:py-3">
                  <span
                    class="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 text-emerald-700 text-[11px] sm:text-xs font-semibold"
                  >
                    {{ i + 1 }}
                  </span>
                </td>

                <!-- Jenis -->
                <td
                  class="sticky left-0 bg-white px-3 sm:px-4 py-2 sm:py-3 font-semibold text-emerald-700 md:group-hover:bg-emerald-50"
                >
                  {{ item.jenis }}
                </td>

                <!-- Syarat -->
                <td class="px-3 sm:px-4 py-2 sm:py-3">
                  <ul class="space-y-1">
                    <li
                      v-for="(syarat, s) in item.syarat"
                      :key="s"
                      class="flex items-start gap-2 text-slate-700"
                    >
                      <span
                        class="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"
                      ></span>
                      <span class="leading-snug">
                        {{ syarat }}
                      </span>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
            <!-- ================= END TBODY ================= -->
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const data = [
  {
    jenis: "Jaminan Kesehatan Nasional (JKN)",
    syarat: [
      "Kartu Identitas JKN",
      "KTP / KK",
      "Surat Rujukan (Kecuali Masuk Melalui IGD)",
    ],
  },
  {
    jenis:
      "Pembiayaan Pelayanan Kesehatan Bagi Masyarakat Miskin (Biakes Maskin) Provinsi Jawa Timur",
    syarat: [
      "Identitas Penerima Biakes Maskin",
      "KTP / KK",
      "Surat Rujukan (Kecuali Masuk Melalui IGD)",
    ],
  },
  {
    jenis: "Kabupaten / Kota yang Memiliki MoU",
    syarat: [
      "Surat Pernyataan / Rekomendasi Miskin",
      "KTP / KK",
      "Surat Rujukan (Kecuali Masuk Melalui IGD)",
    ],
  },
  {
    jenis: "BPJS Ketenagakerjaan",
    syarat: ["Kartu BPJS Ketenagakerjaan", "Surat Jaminan / Guarantee Letter"],
  },
  {
    jenis: "PT. Jasa Raharja",
    syarat: ["Surat Jaminan", "KTP / KK"],
  },
  {
    jenis: "Inhealth",
    syarat: ["Kartu Inhealth", "KTP / KK", "Surat Rujukan (Kecuali Masuk Melalui IGD)"],
  },
  {
    jenis: "Perusahaan / MoU",
    syarat: [
      "Kartu Identitas Kepesertaan",
      "KTP / KK",
      "Surat Rujukan (Kecuali Masuk Melalui IGD)",
    ],
  },
];
</script>
