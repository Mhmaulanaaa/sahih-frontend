<template>
  <div class="kontak-wrapper">
    <div class="overflow-x-auto">
      <table class="kontak-table">
        <!-- HEADER -->
        <thead>
          <tr>
            <th>Unit</th>
            <th>Kontak</th>
            <th>Jam Kerja</th>
          </tr>
        </thead>

        <!-- BODY -->
        <tbody>
          <tr v-for="(item, index) in contacts" :key="index">
            <td data-label="Unit">
              {{ item.unit }}
            </td>

            <td data-label="Kontak">
              <div v-for="(c, i) in item.kontak" :key="i">
                {{ c }}
              </div>
            </td>

            <td data-label="Jam Kerja">
              <div v-for="(k, i) in item.jam" :key="i">
                {{ k }}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
const contacts = [
  {
    unit: "Call Center",
    kontak: ["+62 31 1500995"],
    jam: ["Senin - Sabtu, 07.00 - 18.00 WIB"],
  },
  {
    unit: "Instalasi Gawat Darurat",
    kontak: ["Customer Care : +62 812 1314 4007"],
    jam: ["24 Jam"],
  },
  {
    unit: "Instalasi Graha Amerta dan Paviliun Indraprastha",
    kontak: [
      "Informasi : +62 822 3373 6431 (WhatsApp)",
      "Customer Care : +62 812 1687 3905 (WhatsApp)",
    ],
    jam: ["Senin - Jumat, 07.00 - 20.00 WIB", "Sabtu - Minggu, 07.00 - 18.00 WIB"],
  },
  {
    unit: "Medical Check Up",
    kontak: ["Customer Care : +62 812 2590 5986 (WhatsApp)"],
    jam: ["Senin - Jumat, 08.00 - 15.00 WIB"],
  },
  {
    unit: "Pengaduan",
    kontak: ["+62 812 1670 0101 (WhatsApp)"],
    jam: ["Senin - Jumat, 08.00 - 15.30 WIB"],
  },
  {
    unit: "Hotline BPJS Kesehatan",
    kontak: ["+62 813 3181 9776"],
    jam: ["Senin - Jumat, 08.00 - 15.30 WIB"],
  },
];
</script>
<style scoped>
.kontak-wrapper {
  background: #ffffff;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.03);
}

.kontak-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
}

.kontak-table thead {
  background-color: #f9fafb;
}

.kontak-table th {
  text-align: left;
  padding: 0.75rem 1rem;
  font-weight: 600;
  color: #374151;
  border-bottom: 1px solid #e5e7eb;
}

.kontak-table td {
  padding: 0.75rem 1rem;
  vertical-align: top;
  color: #374151;
  border-bottom: 1px solid #e5e7eb;
}

.kontak-table tbody tr:hover {
  background-color: #f9fafb;
  transition: background 0.2s ease;
}

/* RESPONSIVE MOBILE */
@media (max-width: 768px) {
  .kontak-table thead {
    display: none;
  }

  .kontak-table tr {
    display: block;
    border: 1px solid #e5e7eb;
    border-radius: 0.75rem;
    margin-bottom: 1rem;
    padding: 0.5rem 0;
  }

  .kontak-table td {
    display: block;
    border: none;
    padding: 0.5rem 1rem;
  }

  .kontak-table td::before {
    content: attr(data-label);
    display: block;
    font-size: 0.75rem;
    font-weight: 600;
    color: #6b7280;
    margin-bottom: 0.25rem;
  }
}
</style>
