<template>
  <div class="">
    <div v-if="$slots.header" class="table-header">
      <slot name="header" />
    </div>

    <div class="table-wrapper">
      <table class="premium-table">
        <thead>
          <tr>
            <th v-for="header in headers" :key="header.key">
              {{ header.label }}
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(item, index) in items" :key="index" class="table-row">
            <td v-for="header in headers" :key="header.key" :data-label="header.label">
              <slot :name="header.key" :item="item" :index="index">
                {{ item[header.key] }}
              </slot>
            </td>
          </tr>

          <tr v-if="!items.length">
            <td :colspan="headers.length" class="empty">Tidak ada data tersedia</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Header {
  label: string;
  key: string;
}

defineProps<{
  headers: Header[];
  items: any[];
}>();
</script>

<style scoped>
/* 🔥 OUTER CARD */
.table-card {
  position: relative;
  border-radius: 24px;
  padding: 28px;
  background: #ffffff;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05), 0 2px 8px rgba(0, 0, 0, 0.03);
  overflow: hidden;
}

/* subtle gradient border effect */
.table-card::before {
  content: "";
  position: absolute;
  inset: 0;
  padding: 1px;
  border-radius: 24px;
  background: linear-gradient(135deg, #e0f2e9, #ffffff);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

/* HEADER TITLE */
.table-header {
  margin-bottom: 24px;
  font-size: 20px;
  font-weight: 600;
  color: #111827;
}

/* TABLE WRAPPER */
.table-wrapper {
  overflow: hidden;
  border-radius: 18px;
}

/* TABLE */
.premium-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-size: 14px;
}

/* HEADER */
.premium-table thead {
  background: linear-gradient(to right, #e6f4ec, #f0faf4);
  position: sticky;
  top: 0;
  z-index: 1;
}

.premium-table th {
  padding: 18px 20px;
  text-align: left;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  color: #1f2937;
}

/* BODY */
.premium-table td {
  padding: 20px;
  border-bottom: 1px solid #f1f5f3;
  color: #374151;
  font-weight: 500;
}

/* ROW */
.table-row {
  transition: all 0.25s ease;
  background: #ffffff;
}

.table-row:hover {
  background: #f5fbf7;
  box-shadow: inset 4px 0 0 #22c55e; /* side accent */
}

/* EMPTY */
.empty {
  text-align: center;
  padding: 50px;
  color: #9ca3af;
  font-weight: 500;
}

/* 🔥 MOBILE RESPONSIVE */
@media (max-width: 768px) {
  .premium-table thead {
    display: none;
  }

  .premium-table,
  .premium-table tbody,
  .premium-table tr,
  .premium-table td {
    display: block;
    width: 100%;
  }

  .table-row {
    margin-bottom: 18px;
    border-radius: 16px;
    background: #f9fbfa;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  }

  .premium-table td {
    border: none;
    padding: 12px 16px;
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }

  .premium-table td::before {
    content: attr(data-label);
    font-weight: 600;
    color: #6b7280;
  }
}

/* subtle fade in */
.table-row {
  animation: fadeIn 0.4s ease forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
