<template>
  <section class="relative overflow-hidden py-25">
    <div class="absolute inset-0 bg-gradient-to-b from-[#f6fcfa] via-[#e6f7f1]"></div>
    <div
      class="absolute left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-[#a0e7c8]/40 rounded-full blur-3xl"
    ></div>
    <div class="relative max-w-7xl mx-auto px-6">
      <!-- ================= SOETOMO NEWS ================= -->
      <div class="mb-15">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900">Soetomo News</h2>
          <!-- <p class="mt-3 text-gray-600 max-w-2xl mx-auto">
            Informasi terbaru seputar layanan, inovasi, dan kegiatan RSUD Dr. Soetomo
          </p> -->
        </div>

        <TransitionGroup
          name="fade-down"
          tag="div"
          class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <article
            v-for="item in visibleNews"
            :key="item.title"
            class="group rounded-3xl bg-white border border-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-emerald-100 hover:shadow-[0_18px_40px_rgba(16,185,129,0.25)]"
          >
            <img :src="item.image" class="h-52 w-full object-cover" alt="" />

            <div class="p-6">
              <span class="text-xs text-green-600 font-semibold">
                {{ item.date }}
              </span>

              <h3
                class="mt-2 text-lg font-bold text-gray-900 line-clamp-2 min-h-[3.5rem] transition-colors group-hover:text-green-700"
              >
                {{ item.title }}
              </h3>

              <p class="mt-2 text-sm text-gray-600 line-clamp-3 min-h-[4.5rem]">
                {{ item.excerpt }}
              </p>
              <NuxtLink
                :to="item.link"
                class="-mt-2 nline-flex items-center gap-2 text-sm font-medium text-green-700 hover:text-green-800 transition-colors"
              >
                Baca selengkapnya →
              </NuxtLink>
            </div>
          </article>
        </TransitionGroup>

        <!-- BUTTON -->
        <div class="text-center mt-12">
          <button
            class="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-emerald-600 text-emerald-700 font-semibold hover:bg-emerald-600 hover:text-white transition text-sm"
          >
            Semua Berita
          </button>
        </div>
      </div>

      <!-- ================= SEPUTAR JATIM ================= -->
      <div class="mb-15">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900">Seputar Jawa Timur</h2>
        </div>

        <TransitionGroup
          name="fade-down"
          tag="div"
          class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <newsjatim
            v-for="item in visibleSeputarJatim"
            :key="item.title"
            class="group rounded-3xl bg-white border border-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-emerald-100 hover:shadow-[0_18px_40px_rgba(16,185,129,0.25)]"
          >
            <img :src="item.image" class="h-50 w-full object-cover" alt="" />
            <div class="p-6">
              <span class="text-xs text-green-600 font-semibold">
                {{ item.date }}
              </span>

              <h3
                class="mt-2 text-lg font-bold text-gray-900 line-clamp-2 min-h-[3.5rem] transition-colors group-hover:text-green-700"
              >
                {{ item.title }}
              </h3>

              <p class="mt-2 text-sm text-gray-600 line-clamp-3 min-h-[4.5rem]">
                {{ item.excerpt }}
              </p>
              <NuxtLink
                :to="item.link"
                class="-mt-2 nline-flex items-center gap-2 text-sm font-medium text-green-700 hover:text-green-800 transition-colors"
              >
                Baca selengkapnya →
              </NuxtLink>
            </div>
          </newsjatim>
        </TransitionGroup>

        <!-- BUTTON -->
        <div class="text-center mt-12">
          <button
            class="inline-flex items-center mt-2 gap-2 px-8 py-3 rounded-full border border-emerald-600 text-emerald-700 font-semibold hover:bg-emerald-600 hover:text-white transition text-sm"
          >
            Semua Berita Jatim
          </button>
        </div>
      </div>

      <!-- ================= INSTAGRAM ================= -->
      <div class="max-w-7xl mx-auto px-6">
        <!-- HEADER -->
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900">
            Update Instagram Terbaru
          </h2>
          <p class="mt-3 text-gray-600">
            Posting terbaru dari Instagram resmi RSUD Dr. Soetomo
          </p>
        </div>

        <!-- GRID INSTAGRAM -->
        <div class="grid sm:grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
          <div
            v-for="(post, index) in instagramPosts"
            :key="index"
            class="w-full flex justify-center"
          >
            <div
              class="bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-emerald-100 hover:shadow-[0_18px_40px_rgba(16,185,129,0.25)] max-w-[480px] w-full p-5"
            >
              <!-- Instagram Embed -->
              <blockquote
                class="instagram-media !mx-auto"
                :data-instgrm-permalink="post"
                data-instgrm-version="14"
              ></blockquote>
            </div>
          </div>
        </div>

        <!-- BUTTON -->
        <div class="text-center mt-14">
          <NuxtLink
            href="https://www.instagram.com/rsudrsoetomo/"
            target="_blank"
            class="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition shadow-lg"
          >
            Lihat Instagram RSUD Dr. Soetomo
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

const instagramPosts = [
  "https://www.instagram.com/p/DTg-fjdj4jW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==/",
  "https://www.instagram.com/p/DTesmaFj_de/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==/",
  "https://www.instagram.com/p/DTeZxK7j3rH/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==/",
];
const showAll = ref(false);

const visibleNews = computed(() =>
  showAll.value ? soetomoNews : soetomoNews.slice(0, 6)
);

// const toggleShowBerita = () => {
//   showAll.value = !showAll.value;
// };

const showAllSeputarJatim = ref(false);

const visibleSeputarJatim = computed(() =>
  showAllSeputarJatim.value ? jatimNews : jatimNews.slice(0, 6)
);

// const toggleShowSeputarJatim = () => {
//   showAllSeputarJatim.value = !showAllSeputarJatim.value;
// };

const soetomoNews = [
  {
    title: "RSUD Dr. Soetomo Resmikan Layanan Digital Terpadu",
    excerpt:
      "Transformasi digital untuk meningkatkan kecepatan dan kualitas layanan pasien.",
    date: "12 Jan 2026",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
    link: "#",
  },
  {
    title: "Klinik Jantung Terpadu Jadi Rujukan Nasional",
    excerpt: "Pelayanan kardiovaskular komprehensif dengan teknologi mutakhir.",
    date: "10 Jan 2026",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
    link: "#",
  },
  {
    title: "RSUD Soetomo Raih Penghargaan Pelayanan Publik",
    excerpt: "Penghargaan atas inovasi dan peningkatan mutu pelayanan.",
    date: "08 Jan 2026",
    image: "https://images.unsplash.com/photo-1600959907703-125ba1374a12",
    link: "#",
  },
  {
    title: "RSUD Dr. Soetomo Resmikan Layanan Digital Terpadu",
    excerpt:
      "Transformasi digital untuk meningkatkan kecepatan dan kualitas layanan pasien.",
    date: "12 Jan 2026",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
    link: "#",
  },
  {
    title: "Klinik Jantung Terpadu Jadi Rujukan Nasional",
    excerpt: "Pelayanan kardiovaskular komprehensif dengan teknologi mutakhir.",
    date: "10 Jan 2026",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
    link: "#",
  },
  {
    title: "RSUD Soetomo Raih Penghargaan Pelayanan Publik",
    excerpt: "Penghargaan atas inovasi dan peningkatan mutu pelayanan.",
    date: "08 Jan 2026",
    image: "https://images.unsplash.com/photo-1600959907703-125ba1374a12",
    link: "#",
  },
];

const jatimNews = [
  {
    title: "Pemprov Jatim Perkuat Sistem Kesehatan Daerah",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
    excerpt: "Kolaborasi rumah sakit dan puskesmas se-Jawa Timur.",
    date: "11 Jan 2026",
    link: "#",
  },
  {
    title: "Program Pemeriksaan Kesehatan Gratis Diluncurkan",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
    excerpt: "Upaya meningkatkan derajat kesehatan masyarakat Jatim.",
    date: "09 Jan 2026",
    link: "#",
  },
  {
    title: "Digitalisasi Data Kesehatan di Jawa Timur",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
    excerpt: "Langkah strategis menuju layanan kesehatan terintegrasi.",
    date: "06 Jan 2026",
    link: "#",
  },
  {
    title: "Pemprov Jatim Perkuat Sistem Kesehatan Daerah",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
    excerpt: "Kolaborasi rumah sakit dan puskesmas se-Jawa Timur.",
    date: "11 Jan 2026",
    link: "#",
  },
  {
    title: "Program Pemeriksaan Kesehatan Gratis Diluncurkan",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
    excerpt: "Upaya meningkatkan derajat kesehatan masyarakat Jatim.",
    date: "09 Jan 2026",
    link: "#",
  },
  {
    title: "Digitalisasi Data Kesehatan di Jawa Timur",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
    excerpt: "Langkah strategis menuju layanan kesehatan terintegrasi.",
    date: "06 Jan 2026",
    link: "#",
  },
];

onMounted(() => {
  const win = window as any;

  if (win.instgrm) {
    win.instgrm.Embeds.process();
  } else {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }
});
</script>

<style scoped>
.fade-down-enter-active,
.fade-down-leave-active {
  transition: all 0.45s ease;
}

.fade-down-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-down-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
