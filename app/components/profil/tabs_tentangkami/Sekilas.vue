<template>
  <div class="relative p-4 sm:p-5 lg:p-8">
    <section class="relative overflow-hidden rounded-3xl">
      <!-- VIDEO HERO -->
      <div class="bg-black rounded-xl overflow-hidden shadow-2xl">
        <div class="relative aspect-video">
          <!-- THUMBNAIL -->
          <template v-if="!isPlaying">
            <img :src="thumbnail" class="w-full h-full object-cover" loading="lazy" />

            <!-- OVERLAY -->
            <div
              class="absolute inset-0 bg-black/10 flex items-center justify-center cursor-pointer"
              @click="isPlaying = true"
            >
              <div
                class="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg text-red-600"
              >
                <i class="fa-brands fa-youtube text-4xl"></i>
              </div>
            </div>
          </template>

          <!-- IFRAME -->
          <iframe
            v-else
            :src="youtubeEmbed + '&autoplay=1'"
            class="w-full h-full"
            frameborder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <!-- VIDEO INFO -->
      <div class="max-w-9xl mx-auto px-1 mt-5">
        <p class="text-sm font-semibold text-emerald-600 mb-2">Profil Rumah Sakit</p>

        <h2 class="text-3xl font-bold text-gray-900 mb-6">RSUD Dr. Soetomo</h2>

        <div class="space-y-5 text-gray-600 leading-relaxed text-justify">
          <!-- PARAGRAF 1 -->
          <p>
            Rumah Sakit Umum Daerah (RSUD) Dokter (Dr.) Soetomo adalah rumah sakit milik
            Pemerintah Provinsi (Pemprov) Jawa Timur (Jatim) dengan predikat
            <strong>Kelas A Pendidikan</strong> dan <strong>Rujukan Tersier</strong>.
            Rumah sakit yang berdiri sejak <strong>29 Oktober 1938</strong> dengan nama
            <em>Centrale Burgerlijke Ziekenhuis (CBZ)</em> beralamat di Jalan Mayjend.
            Prof. Dr. Moestopo No. 6-8, Kecamatan Gubeng, Kelurahan Airlangga, Kota
            Surabaya, Provinsi Jawa Timur dengan Kode Pos 60286.
          </p>

          <!-- PARAGRAF 2 -->
          <p>
            RSUD Dr. Soetomo telah terakreditasi nasional
            <strong>KARS Paripurna</strong> sejak Tahun 2014, sedangkan Tahun 2018 telah
            terakreditasi <strong>Academic Medicine Center</strong> oleh
            <strong>JCI</strong>. Beberapa sistem pelayanan juga telah terstandar untuk
            IRJ dan IGD pada tahun 2009, kemudian disusul standar manajemen
            <strong>ISO 9001-2008</strong> untuk manajemen IGD, IRJ, Graha Amerta, GBPT
            beserta semua IRNA pada tahun 2010.
          </p>

          <!-- PARAGRAF 3 -->
          <p>
            Kini, RSUD Dr. Soetomo terus beradaptasi dan berkomitmen serta berupaya agar
            dapat memberikan pelayanan terbaik bagi seluruh masyarakat.
            <strong>“Innovating Efficiency Regulating Dependency”</strong> menjadi tagline
            kami sebagai upaya efisiensi dan mengatur ketergantungan pada beberapa hal.
            Kami berkomitmen untuk terus meningkatkan kualitas pelayanan, sesuai dengan
            visi dan misi kami untuk menjadi Rumah Sakit tersier yang terpercaya, aman,
            bermutu tinggi dan mandiri. RSUD Dr. Soetomo menjunjung tinggi nilai
            <strong>Etika, Integritas, Profesional dan Inovatif</strong> dalam bekerja
            memberikan pelayanan. Semoga kami dapat terus memberikan pelayanan versi
            terbaik bagi seluruh masyarakat. <strong>Terima Kasih.</strong>
          </p>
        </div>
      </div>

      <!-- COMPANY PROFILE -->
      <div>
        <BaseDonwloadDocument
          title="Company Profile RSUD Dr. Soetomo"
          description="Dokumen resmi yang memuat profil, visi misi, layanan unggulan, serta peran RSUD Dr. Soetomo sebagai rumah sakit rujukan nasional dan rumah sakit pendidikan."
          :file="asset('/pdf/tentangkami.pdf')"
          icon="fas fa-building"
          button-text="Unduh Company Profile"
        />
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import BaseDonwloadDocument from "~/components/form/BaseDonwloadDocument.vue";
const { asset } = useAsset();
const video = {
  id: "otpfYt1hTYc",
  title: "Company Profile RSUD Dr. Soetomo",
  description:
    "Podcast RSUD Dr. Soetomo membahas pentingnya kesadaran terhadap resistensi antimikroba dalam meningkatkan mutu pelayanan kesehatan.",
};

const youtubeEmbed = `https://www.youtube-nocookie.com/embed/${video.id}?rel=0`;

const isPlaying = ref(false);

const thumbnail = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
</script>
