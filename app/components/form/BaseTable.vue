<template>
  <div
    class="bg-white rounded-2xl border border-emerald-200 shadow-sm hover:shadow-md transition-all duration-300"
  >
    <!-- HEADER -->
    <div v-if="title" class="px-6 py-4 border-b border-emerald-100">
      <h3 class="text-base font-semibold text-emerald-700 text-center">
        {{ title }}
      </h3>
    </div>

    <!-- TABLE -->
    <div class="overflow-x-auto px-6 py-4">
      <table class="w-full text-sm text-left border-collapse">
        <thead>
          <!-- CUSTOM THEAD -->
          <slot name="thead">
            <!-- DEFAULT THEAD -->
            <tr class="bg-emerald-50 text-emerald-700 text-center text-xs">
              <th
                v-for="(head, index) in headers"
                :key="index"
                class="px-4 py-3 font-semibold"
              >
                {{ head }}
              </th>
            </tr>
          </slot>
        </thead>

        <tbody class="text-gray-700 text-center text-xs">
          <tr
            v-for="(row, rowIndex) in rows"
            :key="rowIndex"
            class="hover:bg-emerald-50/40 transition"
          >
            <td
              v-for="(cell, cellIndex) in row"
              :key="cellIndex"
              class="px-4 py-3"
              :class="{ 'font-medium': cellIndex === 0 }"
            >
              <!-- ACTION SLOT -->
              <template v-if="isActionColumn(cell)">
                <slot name="action" :row="row" :rowIndex="rowIndex" />
              </template>

              <!-- NORMAL CELL -->
              <template v-else>
                <!-- JIKA ARRAY → UL LI -->
                <ul v-if="Array.isArray(cell)" class="space-y-2 text-left">
                  <li v-for="(item, i) in cell" :key="i" class="flex gap-2">
                    <span class="mt-1">•</span>
                    <span class="leading-relaxed">
                      {{ item }}
                    </span>
                  </li>
                </ul>

                <!-- JIKA STRING -->
                <template v-else>
                  {{ cell }}
                </template>
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- FOOTER SLOT -->
    <div v-if="$slots.footer" class="px-6 py-4 bg-emerald-50/60 rounded-b-2xl">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  headers: Array,
  rows: Array,
});

// marker khusus kolom action
const isActionColumn = (cell) => cell === "__action__";
</script>
