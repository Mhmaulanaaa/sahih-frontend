<template>
  <!-- Research Search Section -->
  <section class="relative isolate overflow-hidden py-0 sm:py-5">
    <!-- Content -->
    <div class="relative mx-auto max-w-9xl px-4 sm:px-6 lg:px-8">
      <!-- Main Card -->
      <div
        class="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
      >
        <!-- Header -->
        <div class="px-6 pt-8 text-center sm:px-10 sm:pt-10">
          <h2
            class="mt-4 text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl lg:text-4xl"
          >
            Search Research
          </h2>
          <div class="mx-auto mt-4 h-1 w-16 rounded-full bg-emerald-500"></div>
        </div>

        <!-- Search Content -->
        <div class="px-6 pb-8 pt-8 sm:px-10 sm:pb-10">
          <!-- Filter Buttons -->
          <div class="flex flex-wrap justify-center gap-2">
            <button
              v-for="filter in filters"
              :key="filter.value"
              type="button"
              class="inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all duration-200"
              :class="
                activeFilter === filter.value
                  ? 'border-emerald-600 bg-emerald-600 text-white shadow-sm'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700'
              "
              @click="toggleFilter(filter.value)"
            >
              <i :class="filter.icon" class="text-xs"></i>

              <span>{{ filter.label }}</span>

              <i
                class="fas fa-chevron-down text-[9px] transition-transform duration-200"
                :class="activeFilter === filter.value ? 'rotate-180' : ''"
              ></i>
            </button>
          </div>

          <!-- Filter Panel -->
          <Transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-2"
          >
            <div
              v-if="activeFilter"
              class="mx-auto mt-6 max-w-5xl rounded-2xl border border-emerald-100 bg-slate-50/70 p-5 sm:p-6"
            >
              <!-- TAGS -->
              <div v-if="activeFilter === 'tags'">
                <label class="mb-2 block text-sm font-semibold text-slate-700">
                  Choose Tags
                </label>

                <select
                  v-model="searchForm.tags"
                  class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                >
                  <option value="">Choose Tags</option>

                  <option
                    v-for="item in tagsOptions"
                    :key="item.value"
                    :value="item.value"
                  >
                    {{ item.label }}
                  </option>
                </select>
              </div>

              <!-- CATEGORY -->
              <div v-else-if="activeFilter === 'category'">
                <label class="mb-2 block text-sm font-semibold text-slate-700">
                  Choose Category
                </label>

                <select
                  v-model="searchForm.category"
                  class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                >
                  <option value="">Choose Category</option>

                  <option
                    v-for="item in categoryOptions"
                    :key="item.value"
                    :value="item.value"
                  >
                    {{ item.label }}
                  </option>
                </select>
              </div>

              <!-- COLLABORATION -->
              <div v-else-if="activeFilter === 'collaboration'">
                <label class="mb-2 block text-sm font-semibold text-slate-700">
                  Choose Collaboration
                </label>

                <select
                  v-model="searchForm.collaboration"
                  class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                >
                  <option value="">Choose Collaboration</option>

                  <option
                    v-for="item in collaborationOptions"
                    :key="item.value"
                    :value="item.value"
                  >
                    {{ item.label }}
                  </option>
                </select>
              </div>

              <!-- ASSOCIATION -->
              <div v-else-if="activeFilter === 'association'">
                <label class="mb-2 block text-sm font-semibold text-slate-700">
                  Choose Association
                </label>

                <select
                  v-model="searchForm.association"
                  class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                >
                  <option value="">Choose Association</option>

                  <option
                    v-for="item in associationOptions"
                    :key="item.value"
                    :value="item.value"
                  >
                    {{ item.label }}
                  </option>
                </select>
              </div>

              <!-- WORK UNIT -->
              <div
                v-else-if="activeFilter === 'work_unit'"
                class="grid grid-cols-1 gap-4 md:grid-cols-2"
              >
                <!-- Work Unit -->
                <div>
                  <label class="mb-2 block text-sm font-semibold text-slate-700">
                    Choose Work Unit
                  </label>

                  <select
                    v-model="searchForm.workUnit"
                    class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  >
                    <option value="">Choose Work Unit</option>

                    <option
                      v-for="item in workUnitOptions"
                      :key="item.value"
                      :value="item.value"
                    >
                      {{ item.label }}
                    </option>
                  </select>
                </div>

                <!-- Division KSM -->
                <div>
                  <label class="mb-2 block text-sm font-semibold text-slate-700">
                    Choose Division KSM
                  </label>

                  <select
                    v-model="searchForm.divisionKsm"
                    class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  >
                    <option value="">Choose Division KSM</option>

                    <option
                      v-for="item in divisionOptions"
                      :key="item.value"
                      :value="item.value"
                    >
                      {{ item.label }}
                    </option>
                  </select>
                </div>
              </div>

              <!-- ACTION -->
              <div
                class="mt-5 flex flex-col-reverse gap-2 border-t border-slate-200 pt-5 sm:flex-row sm:justify-end"
              >
                <button
                  type="button"
                  class="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600 transition-all hover:bg-slate-100"
                  @click="resetSearch"
                >
                  <i class="fas fa-rotate-left text-xs"></i>
                  Reset
                </button>

                <button
                  type="button"
                  class="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-md"
                  @click="handleSearch"
                >
                  <i class="fas fa-magnifying-glass text-xs"></i>
                  Search
                </button>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

type FilterType = "tags" | "category" | "collaboration" | "association" | "work_unit";

const activeFilter = ref<FilterType | null>(null);

const filters = [
  {
    value: "tags" as FilterType,
    label: "Tags",
    icon: "fas fa-tags",
  },
  {
    value: "category" as FilterType,
    label: "Category",
    icon: "fas fa-layer-group",
  },
  {
    value: "collaboration" as FilterType,
    label: "Collaboration",
    icon: "fas fa-handshake",
  },
  {
    value: "association" as FilterType,
    label: "Association",
    icon: "fas fa-users",
  },
  {
    value: "work_unit" as FilterType,
    label: "Work Unit",
    icon: "fas fa-building",
  },
];

const searchForm = reactive({
  tags: "",
  category: "",
  collaboration: "",
  association: "",
  workUnit: "",
  divisionKsm: "",
});

const tagsOptions = [
  { value: "stem-cell", label: "Stem Cell" },
  { value: "cancer", label: "Cancer" },
  { value: "infection", label: "Infection" },
  { value: "children", label: "Children" },
];

const categoryOptions = [
  { value: "clinical", label: "Clinical Research" },
  { value: "basic", label: "Basic Research" },
  { value: "health-service", label: "Health Service Research" },
];

const collaborationOptions = [
  { value: "national", label: "National Collaboration" },
  { value: "international", label: "International Collaboration" },
  { value: "university", label: "University Collaboration" },
];

const associationOptions = [
  { value: "professional", label: "Professional Association" },
  { value: "medical", label: "Medical Association" },
  { value: "research", label: "Research Association" },
];

const workUnitOptions = [
  { value: "internal-medicine", label: "Internal Medicine" },
  { value: "pediatrics", label: "Pediatrics" },
  { value: "pulmonology", label: "Pulmonology" },
  { value: "surgery", label: "Surgery" },
];

const divisionOptions = [
  { value: "ksm-pulmonology", label: "KSM Pulmonology" },
  { value: "ksm-pediatrics", label: "KSM Pediatrics" },
  { value: "ksm-surgery", label: "KSM Surgery" },
  {
    value: "ksm-internal-medicine",
    label: "KSM Internal Medicine",
  },
];

const toggleFilter = (filter: FilterType) => {
  activeFilter.value = activeFilter.value === filter ? null : filter;
};

const resetSearch = () => {
  searchForm.tags = "";
  searchForm.category = "";
  searchForm.collaboration = "";
  searchForm.association = "";
  searchForm.workUnit = "";
  searchForm.divisionKsm = "";

  activeFilter.value = null;
};

const handleSearch = () => {
  console.log("Research Search:", {
    ...searchForm,
  });
};
</script>
