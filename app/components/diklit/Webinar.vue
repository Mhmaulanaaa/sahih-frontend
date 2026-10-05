<script setup lang="ts">
import BaseAccordion from "../form/BaseAccordion.vue";

const webinars2023 = [
  {
    image: "/images/2021web.jpg",
    title: "Webinar : Praindo AMR Awareness Series",
    date: "26 November 2023",
  },
];

const webinars2021 = [
  {
    image: "/images/2023web_1.png",
    title: "Webinar : Tackling Antimicrobial Resistance Post Pandemic, Recover Faster",
    date: "22 November 2021",
  },
  {
    image: "/images/2023web_2.png",
    title:
      "Webinar : Challenges and Opportunities Antimicrobial Stewardship in Pandemic Era (Best Practice in Dr. Soetomo General Academic Hospital)",
    date: "21 November 2021",
  },
  {
    image: "/images/2023web_3.png",
    title:
      "Webinar : Seputar Tata Laksana Covid-19 dengan Komorbid (Tata Laksana Diabetes Mellitus, Penggunaan Antikoagulan dan Steroid pada Pasien Covid-19)",
    date: "4 Februari 2021",
  },
  {
    image: "/images/2023web_4.png",
    title:
      "Webinar : Seputar Vaksin Covid-19 (Memahami Isi, Mekanisme Kerja, Manfaat dan Keamanan Vaksin Covid-19)",
    date: "20 Januari 2021",
  },
  {
    image: "/images/2023web_5.png",
    title:
      "Webinar : Koordinasi Tata Laksana Penanganan Covid-19 di RS Rujukan (Best Practice di RSUD Dr. Soetomo)",
    date: "6 Januari 2021",
  },
];
</script>
<template>
  <div class="relative lg:p-8">
    <BaseAccordion title="Webinar 2023" :defaultOpen="true">
      <div class="space-y-4 grid gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- CARD -->
          <div
            v-for="(item, index) in webinars2023"
            :key="index"
            class="flex gap-4 p-4 rounded-xl border border-slate-100 hover:border-emerald-200 hover:shadow-md transition-all duration-300 group bg-white"
          >
            <!-- IMAGE -->
            <img
              :src="item.image"
              alt="Thumbnail"
              class="w-16 h-16 rounded-lg object-cover border group-hover:scale-105 transition"
            />

            <!-- TEXT -->
            <div class="flex-1">
              <h3
                class="text-sm font-semibold text-emerald-600 leading-snug group-hover:underline"
              >
                {{ item.title }}
              </h3>

              <p class="text-xs text-slate-500 mt-1">
                {{ item.date }}
              </p>
            </div>
          </div>
        </div>
        <!-- END CARD -->
      </div>
    </BaseAccordion>
    <BaseAccordion title="Webinar 2021" :defaultOpen="true" class="mt-5">
      <div class="space-y-4 grid gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- CARD -->
          <div
            v-for="(item, index) in webinars2021"
            :key="index"
            class="flex gap-4 p-4 rounded-xl border border-slate-100 hover:border-emerald-200 hover:shadow-md transition-all duration-300 group bg-white"
          >
            <!-- IMAGE -->
            <img
              :src="item.image"
              alt="Thumbnail"
              class="w-16 h-16 rounded-lg object-cover border group-hover:scale-105 transition"
            />

            <!-- TEXT -->
            <div class="flex-1">
              <h3
                class="text-sm font-semibold text-emerald-600 leading-snug group-hover:underline"
              >
                {{ item.title }}
              </h3>

              <p class="text-xs text-slate-500 mt-1">
                {{ item.date }}
              </p>
            </div>
          </div>
          <!-- END CARD -->
        </div>
      </div>
    </BaseAccordion>
  </div>
</template>
