<template>
  <section class="relative overflow-hidden py-5">
    <!-- <div class="absolute inset-2 bg-gradient-to-b from-[#ffffff] via-[#e6f7f1]"></div> -->
    <div
      class="absolute left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-[#a0e7c8]/20 rounded-full blur-3xl"
    ></div>
    <!-- BG -->
    <!-- CONTENT -->
    <div class="relative z-10 max-w-7xl mx-auto px-6">
      <!-- CATEGORY : Layanan Unggulan -->
      <div class="mb-20 text-center">
        <!-- HEADER -->
        <div class="flex flex-col items-center gap-4 mb-12">
          <div
            class="flex items-center justify-center rounded-xl text-white font-bold text-lg"
          >
            <!-- <img src="/images/layung.svg" alt="Logo" class="h-40 mb-5" /> -->
            <h1 class="text-4xl font-bold text-gray-900 md:text-4xl">Layanan Unggulan</h1>
          </div>
        </div>

        <!-- CARDS -->
        <div class="flex flex-wrap justify-center gap-8">
          <ServiceCard
            v-for="item in unggulan"
            :key="item.title"
            :item="item"
            class="w-full max-w-sm"
          />
        </div>
      </div>

      <!-- End Layanan Unggulan -->

      <!-- CATEGORY : Rujukan Nasional -->
      <div>
        <!-- HEADER -->
        <div class="flex flex-col items-center gap-4 mb-10 text-center">
          <div
            class="flex items-center justify-center rounded-xl text-white font-bold text-lg"
          >
            <h1 class="text-3xl font-bold text-gray-900 md:text-4xl">Rujukan Nasional</h1>

            <!-- <img src="/images/runas.svg" alt="Logo" class="h-40 mb-5" /> -->
          </div>
        </div>

        <!-- GRID + ANIMATION -->
        <TransitionGroup
          name="fade-slide"
          tag="div"
          class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <ServiceCard v-for="item in visibleRujukan" :key="item.title" :item="item" />
        </TransitionGroup>

        <!-- BUTTON -->
        <div class="flex justify-center mt-12">
          <button
            @click="toggleShow"
            class="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition"
          >
            {{ showAll ? "Lihat Lebih Sedikit" : "Lihat Selengkapnya" }}
            <span
              class="transition-transform duration-300"
              :class="showAll ? 'rotate-180' : ''"
            >
              ▼
            </span>
          </button>
        </div>
      </div>
      <!-- End Rujukan Nasional -->
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import ServiceCard from "../cards/ServiceCard.vue";

const showAll = ref(false);

const visibleRujukan = computed(() => (showAll.value ? rujukan : rujukan.slice(0, 8)));

const toggleShow = () => {
  showAll.value = !showAll.value;
};

const unggulan = [
  {
    title: "Immunotherapy Clinic",
    icon: "/images/layananunggulan/layungimuno.png",
    link: "/layanan/immunotherapy",
  },
  {
    title: "Soetomo Aesthetic Clinic",
    icon: "/images/layananunggulan/layungestetik.png",
    link: "/layanan/aesthetic",
  },
];

const rujukan = [
  {
    title: "Pelayanan Bank Jaringan",
    icon: "/images/layananunggulan/rnPbjrm.png",
    link: "/rujukan/bankjaringan",
  },
  {
    title: "Pelayanan Bayi Tabung",
    icon: "/images/layananunggulan/rnPbt.png",
    link: "/rujukan/bayitabung",
  },
  {
    title: "Pelayanan Endoskopi dan Minimal Invasif",
    icon: "/images/layananunggulan/rnPemi.png",
    link: "/rujukan/endoskopi",
  },
  {
    title: "Pelayanan Endokrin Terintegrasi",
    icon: "/images/layananunggulan/rnPet.png",
    link: "/rujukan/endokrin",
  },
  {
    title: "Pelayanan Ginjal Terpadu",
    icon: "/images/layananunggulan/rnPgit.png",
    link: "/rujukan/ginjalterpadu",
  },
  {
    title: "Pelayanan Geriatri Terpadu",
    icon: "/images/layananunggulan/rnPgt.png",
    link: "/rujukan/geriatriterpadu",
  },
  {
    title: "Pelayanan Penyakit Infeksi Emerging dan Re-Emerging",
    icon: "/images/layananunggulan/rnPinere.png",
    link: "/rujukan/penyakitinfeksi",
  },
  {
    title: "Pelayanan Kembar Siam",
    icon: "/images/layananunggulan/rnPks.png",
    link: "/rujukan/kembarsiam",
  },
  // 1
  {
    title: "Pelayanan Ortorik Prosterik",
    icon: "/images/layananunggulan/rnPop.png",
    link: "/rujukan/ortorikprosterik",
  },
  {
    title: "Pelayanan Paliatif dan Bebas Nyeri",
    icon: "/images/layananunggulan/rnPpbn.png",
    link: "/rujukan/paliatifdanbebasnyeri",
  },
  {
    title: "Pelayanan Sport Clinic",
    icon: "/images/layananunggulan/rnPsc.png",
    link: "/rujukan/sportclinic",
  },
  {
    title: "Pelayanan Sistem Saraf Terintegrasi",
    icon: "/images/layananunggulan/rnPsst.png",
    link: "/rujukan/sarafterintegrasi",
  },
  {
    title: "Pelayanan Tumbuh Kembang Anak",
    icon: "/images/layananunggulan/rnPtka.png",
    link: "/rujukan/tumbuhkembanganak",
  },
  {
    title: "Program Pencegahan Resistensi Antimikroba",
    icon: "/images/layananunggulan/rnPpra.png",
    link: "/rujukan/pencegahanresistensi",
  },
  {
    title: "Pusat Pelayanan Jantung Terpadu",
    icon: "/images/layananunggulan/rnPpjt.png",
    link: "/rujukan/pelayananjantungterpadu",
  },
  {
    title: "Pusat Pengembangan Layanan Kanker",
    icon: "/images/layananunggulan/rnPplk.png",
    link: "/rujukan/pusatpengembangankanker",
  },
  // 2
];
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(16px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(16px);
}
</style>
