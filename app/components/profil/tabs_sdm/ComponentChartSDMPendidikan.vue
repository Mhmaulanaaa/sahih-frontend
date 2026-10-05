<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
    <!-- BAR CHART -->
    <div class="bg-white rounded-xl shadow p-6 h-full">
      <!-- <h3 class="font-semibold text-slate-700 mb-4">Total SDM Berdasarkan Pendidikan</h3> -->
      <Bar :data="chartData" :options="chartOptions" />
    </div>

    <!-- TABLE -->
    <div class="bg-emerald-50 rounded-xl p-6 h-full">
      <h3 class="font-semibold text-slate-700 mb-4">Total SDM Berdasarkan Pendidikan</h3>

      <table class="w-full text-sm">
        <thead class="bg-emerald-100 text-emerald-800">
          <tr>
            <th class="px-4 py-2 text-left">Jenjang</th>
            <th class="px-4 py-2 text-right">Jumlah</th>
            <th class="px-4 py-2 text-right">Persentase</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rows" :key="row.nama">
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
</template>

<script setup>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const rows = [
  { nama: "S3", jumlah: 54, persen: "1,49%" },
  { nama: "S2", jumlah: 340, persen: "9,39%" },
  { nama: "S1/D4", jumlah: 1028, persen: "28,38%" },
  { nama: "D3", jumlah: 1616, persen: "44,62%" },
  { nama: "D1-D2", jumlah: 7, persen: "0,19%" },
  { nama: "SMA/Setara", jumlah: 566, persen: "15,63%" },
  { nama: "SMP/Setara", jumlah: 10, persen: "0,28%" },
  { nama: "SD/Setara", jumlah: 1, persen: "0,03%" },
];

const chartData = {
  labels: rows.map((r) => r.nama),
  datasets: [
    {
      label: "Pendidikan",
      data: rows.map((r) => r.jumlah),
      backgroundColor: "#111827",
    },
  ],
};

const chartOptions = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};
</script>
