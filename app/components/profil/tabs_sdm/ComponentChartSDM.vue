<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
    <!-- PIE CHART -->
    <div class="bg-white rounded-xl shadow p-6 flex flex-col">
      <!-- <h3 class="font-semibold text-slate-700 mb-4">
        Total SDM Berdasarkan Status Kepegawaian
      </h3> -->

      <div class="flex-1 flex items-center justify-center">
        <Pie :data="chartData" :options="chartOptions" />
      </div>
    </div>

    <!-- TABLE -->
    <div class="bg-emerald-50 rounded-xl p-6 flex flex-col">
      <h3 class="font-semibold text-slate-700 mb-4">
        Total SDM Berdasarkan Status Kepegawaian
      </h3>

      <div class="flex-1">
        <table class="w-full text-sm">
          <thead class="bg-emerald-100 text-emerald-800">
            <tr>
              <th class="px-4 py-2 text-left">Jabatan</th>
              <th class="px-4 py-2 text-right">Jumlah</th>
              <th class="px-4 py-2 text-right">Persentase</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="row in rows" :key="row.nama" class="last:border-0">
              <td class="px-4 py-2">{{ row.nama }}</td>
              <td class="px-4 py-2 text-right">{{ row.jumlah }}</td>
              <td class="px-4 py-2 text-right">{{ row.persen }}</td>
            </tr>

            <tr class="font-semibold bg-emerald-100">
              <td class="px-4 py-2">Total</td>
              <td class="px-4 py-2 text-right">4941</td>
              <td class="px-4 py-2 text-right"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Pie } from "vue-chartjs";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

/**
 * DATA SESUAI PERMINTAAN
 * Persentase TIDAK DIHITUNG ULANG
 */
const rows = [
  { nama: "ASN PNS", jumlah: 1812, persen: "36,67%" },
  { nama: "ASN PPPK", jumlah: 770, persen: "15,58%" },
  { nama: "BLUD NON ASN", jumlah: 1040, persen: "21,05%" },
  { nama: "Tenaga Ahli/Profesional", jumlah: 241, persen: "4,88%" },
  { nama: "Tenaga Kontrak Perorangan", jumlah: 391, persen: "7,91%" },
  { nama: "Tenaga Outsourcing", jumlah: 465, persen: "9,41%" },
  { nama: "Dokter Mitra", jumlah: 130, persen: "2,63%" },
  { nama: "Dokter FK UNAIR", jumlah: 92, persen: "1,86%" },
];

const chartData = {
  labels: rows.map((r) => r.nama),
  datasets: [
    {
      data: rows.map((r) => r.jumlah),
      backgroundColor: [
        "#2563eb",
        "#16a34a",
        "#f59e0b",
        "#ef4444",
        "#8b5cf6",
        "#14b8a6",
        "#ec4899",
        "#64748b",
      ],
      radius: "90%",
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "right",
    },
    datalabels: {
      color: "#fff",
      font: {
        weight: "bold",
        size: 10,
      },
      formatter: (_, ctx) => {
        return rows[ctx.dataIndex].persen;
      },
    },
  },
};
</script>
