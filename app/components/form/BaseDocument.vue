```vue
<template>
  <a
    :href="documentHref"
    target="_blank"
    rel="noopener noreferrer"
    class="group relative block overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-[0_10px_30px_rgba(16,185,129,0.10)]"
  >
    <!-- HOVER ACCENT -->
    <div
      class="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 transition-transform duration-300 group-hover:scale-x-100"
    ></div>

    <div class="flex items-center gap-3.5 p-3.5 sm:gap-4 sm:p-4">
      <!-- ICON -->
      <div
        class="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100/70 ring-1 ring-emerald-100 transition-all duration-300 group-hover:scale-105 group-hover:from-emerald-100 group-hover:to-emerald-50 sm:h-14 sm:w-14"
      >
        <!-- Decorative Circle -->
        <div
          class="absolute -right-3 -top-3 h-8 w-8 rounded-full bg-emerald-200/30 transition-transform duration-500 group-hover:scale-150"
        ></div>

        <img
          :src="iconSrc"
          :alt="type || 'Document'"
          class="relative z-10 h-7 w-7 object-contain transition-transform duration-300 group-hover:scale-110 sm:h-8 sm:w-8"
        />
      </div>

      <!-- CONTENT -->
      <div class="min-w-0 flex-1">
        <!-- TITLE -->
        <p
          class="line-clamp-2 text-sm font-semibold leading-snug text-slate-800 transition-colors duration-200 group-hover:text-emerald-700 sm:text-[15px]"
        >
          {{ title }}
        </p>

        <!-- META -->
        <div class="mt-2 flex flex-wrap items-center gap-2">
          <!-- TYPE -->
          <span
            class="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-700 ring-1 ring-emerald-100"
          >
            <i class="fa-regular fa-file-lines text-[9px]"></i>
            {{ type || "FILE" }}
          </span>

          <!-- SIZE -->
          <span v-if="size" class="text-[10px] font-medium text-slate-400">
            {{ size }}
          </span>
        </div>
      </div>

      <!-- ACTION -->
      <div
        class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-white"
      >
        <i
          class="fa-solid fa-arrow-up-right-from-square text-[11px] transition-transform duration-300 group-hover:rotate-12"
        ></i>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import { computed } from "vue";
const { asset } = useAsset();
const props = defineProps<{
  title: string;
  href: string;
  type?: string;
  size?: string;
  icon?: string;
}>();

const iconSrc = computed(() => {
  if (props.icon) return props.icon;

  switch (props.type?.toUpperCase()) {
    case "PDF":
      return "/images/pdf.png";

    case "DOC":
    case "DOCX":
      return "/images/doc.png";

    case "XLS":
    case "XLSX":
      return "/images/xls.png";

    case "PPT":
    case "PPTX":
      return "/images/ppt.png";

    default:
      return "/images/file.png";
  }
});

const documentHref = computed(() => {
  return asset(props.href);
});
</script>
