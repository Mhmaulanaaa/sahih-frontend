<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
    <!-- PIE CHART -->
    <div class="bg-white rounded-xl shadow p-6 flex flex-col">
      <!-- <h3 class="font-semibold text-slate-700 mb-4">Total SDM ASN dan BLUD</h3> -->

      <div class="flex-1 flex items-center justify-center">
        <Pie :data="chartData" :options="chartOptions" />
      </div>
    </div>

    <!-- TABLE -->
    <div class="bg-emerald-50 rounded-xl p-6 flex flex-col">
      <h3 class="font-semibold text-slate-700 mb-4">Total SDM ASN dan BLUD</h3>

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
              <td class="px-4 py-2 text-right">3622</td>
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
 * TANPA HITUNG ULANG PERSENTASE
 */
const rows = [
  { nama: "ASN PNS", jumlah: 1812, persen: "50%" },
  { nama: "ASN PPPK", jumlah: 770, persen: "21,3%" },
  { nama: "BLUD NON ASN", jumlah: 1040, persen: "28,7%" },
];

const chartData = {
  labels: rows.map((r) => r.nama),
  datasets: [
    {
      data: rows.map((r) => r.jumlah),
      backgroundColor: [
        "#2563eb", // ASN PNS
        "#16a34a", // ASN PPPK
        "#f59e0b", // BLUD
      ],
      radius: "100%",
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
