<template>
  <section class="pt-20">
    <!-- GLOBAL CONTAINER -->
    <div class="max-w-9xl mx-auto px-6">
      <!-- BREADCRUMB -->
      <div class="mt-15">
        <Breadcrumb />
      </div>
      <!-- HERO -->
      <div class="py-5">
        <BaseHeroPage title="Kebijakan Privasi" logo="/images/logo/logo_white.png" />
      </div>

      <div class="max-w-9xl bg-white shadow-md rounded-3xl mt-2 p-6">
        <div>
          <!-- PARAGRAPH 1 -->
          <p class="text-gray-600 leading-relaxed text-justify md:text-lg mb-6">
            <span class="font-semibold text-green-600"> RSUD Dr. Soetomo </span>
            menghormati privasi pengguna website dan berkomitmen untuk menjaganya dengan
            serius. Kebijakan Privasi ini dibuat untuk membantu Pengguna agar mengetahui
            bagaimana cara
            <span class="font-semibold"> RSUD Dr. Soetomo </span>
            dalam mengumpulkan, menggunakan, membagikan, dan melindungi informasi dengan
            tetap menghormati hak Pengguna dalam menggunakan situs
            <span class="text-green-600 font-medium">
              www.rsudrsoetomo.jatimprov.go.id </span
            >.
          </p>

          <!-- PARAGRAPH 2 -->
          <p class="text-gray-600 leading-relaxed text-justify md:text-lg">
            Penggunaan atas Layanan
            <span class="font-semibold"> RSUD Dr. Soetomo </span>
            beserta setiap informasi pribadi yang diberikan oleh Pengguna, senantiasa
            tunduk pada syarat dan ketentuan Kebijakan Privasi ini.
          </p>
        </div>
        <!-- Description -->
        <BaseAccordion
          title="Bagaimana Cara RSUD Dr. Soetomo Menggunakan Informasi"
          :defaultOpen="false"
          class="mt-5"
        >
          <div class="space-y-6 text-gray-600 leading-relaxed md:text-lg">
            <!-- ITEM 1 -->
            <div
              class="flex gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-green-50 transition duration-300"
            >
              <div
                class="min-w-8 h-8 flex items-center justify-center rounded-full bg-green-600 text-white font-semibold text-sm"
              >
                1
              </div>
              <p class="text-justify">
                Apabila Pengguna mengirim Informasi Identitas Pribadi kepada
                <span class="font-semibold text-green-600"> RSUD Dr. Soetomo </span>, maka
                informasi tersebut akan digunakan sesuai permintaan Pengguna yang
                berkaitan dengan Layanan Website.
              </p>
            </div>

            <!-- ITEM 2 -->
            <div
              class="flex gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-green-50 transition duration-300"
            >
              <div
                class="min-w-8 h-8 flex items-center justify-center rounded-full bg-green-600 text-white font-semibold text-sm"
              >
                2
              </div>
              <p class="text-justify">
                <span class="font-semibold text-green-600"> RSUD Dr. Soetomo </span>
                menggunakan informasi Pengguna untuk menghubungi dan mengingatkan mengenai
                layanan yang dibuat melalui website. Informasi juga dapat digunakan dan
                diungkapkan apabila diperlukan untuk tinjauan medis, jasa hukum, maupun
                audit.
              </p>
            </div>

            <!-- ITEM 3 -->
            <div
              class="flex gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-green-50 transition duration-300"
            >
              <div
                class="min-w-8 h-8 flex items-center justify-center rounded-full bg-green-600 text-white font-semibold text-sm"
              >
                3
              </div>
              <p class="text-justify">
                <span class="font-semibold text-green-600"> RSUD Dr. Soetomo </span>
                menjamin bahwa data dan informasi yang diberikan oleh Pengguna bersifat
                rahasia dan tidak akan disebarluaskan.
              </p>
            </div>
          </div>
        </BaseAccordion>
        <!-- 1 -->
        <BaseAccordion
          title=" Kapan RSUD Dr. Soetomo Mengungkapkan Informasi"
          :defaultOpen="false"
          class="mt-5"
        >
          <div class="space-y-6 text-gray-600 leading-relaxed md:text-lg">
            <!-- ITEM 1 -->
            <div
              class="flex gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-green-50 transition duration-300"
            >
              <div
                class="min-w-8 h-8 flex items-center justify-center rounded-full bg-green-600 text-white font-semibold text-sm"
              >
                1
              </div>
              <p class="text-justify">
                <span class="font-semibold text-green-600"> RSUD Dr. Soetomo </span> dapat
                memberikan Informasi Data Pribadi atau informasi identifikasi non pribadi
                kepada penyedia layanan pihak ketiga selama diperlukan secara wajar.
                Pengguna dianggap telah menyetujui dan mengizinkan pihak ketiga mengetahui
                dan menggunakan data tersebut.
              </p>
            </div>

            <!-- ITEM 2 -->
            <div
              class="flex gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-green-50 transition duration-300"
            >
              <div
                class="min-w-8 h-8 flex items-center justify-center rounded-full bg-green-600 text-white font-semibold text-sm"
              >
                2
              </div>
              <p class="text-justify">
                Pihak ketiga tersebut termasuk Perusahaan atau Asuransi Penjamin dan
                Dokter.
              </p>
            </div>
          </div>
        </BaseAccordion>
        <!-- 2 -->
        <BaseAccordion
          title="Komitmen RSUD Dr. Soetomo Terhadap Keamanan Data"
          :defaultOpen="false"
          class="mt-5"
        >
          <div class="space-y-6 text-gray-600 leading-relaxed md:text-lg">
            <!-- ITEM 1 -->
            <div
              class="flex gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-green-50 transition duration-300"
            >
              <div
                class="min-w-8 h-8 flex items-center justify-center rounded-full bg-green-600 text-white font-semibold text-sm"
              >
                1
              </div>
              <p class="text-justify">
                <span class="font-semibold text-green-600"> RSUD Dr. Soetomo </span
                >menghormati privasi dan keamanan data Pengguna. Demi menjaga komitmen dan
                integritas terhadap keamanan informasi pribadi Pengguna, kami akan
                menggunakan seluruh akses informasi dengan cara wajar dan tidak dapat
                digunakan oleh pihak-pihak yang tidak bertanggung jawab.
              </p>
            </div>

            <!-- ITEM 2 -->
            <div
              class="flex gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-green-50 transition duration-300"
            >
              <div
                class="min-w-8 h-8 flex items-center justify-center rounded-full bg-green-600 text-white font-semibold text-sm"
              >
                2
              </div>
              <p class="text-justify">
                Penyimpanan data pribadi Pengguna dalam server database dilakukan untuk
                memberikan perlindungan yang wajar.
              </p>
            </div>

            <!-- ITEM 3 -->
            <div
              class="flex gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-green-50 transition duration-300"
            >
              <div
                class="min-w-8 h-8 flex items-center justify-center rounded-full bg-green-600 text-white font-semibold text-sm"
              >
                3
              </div>
              <p class="text-justify">
                Namun demikian,
                <span class="font-semibold text-green-600"> RSUD Dr. Soetomo</span>
                tidak bisa menjamin sepenuhnya terhadap keamanan ini sehingga setiap
                informasi yang Pengguna kirimkan masih mungkin dapat dibajak oleh pihak
                ketiga. Untuk itu, dalam menggunakan Layanan Website, Pengguna
                melakukannya atas risiko Pengguna sendiri.
              </p>
            </div>
            <!-- ITEM 4 -->
            <div
              class="flex gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-green-50 transition duration-300"
            >
              <div
                class="min-w-8 h-8 flex items-center justify-center rounded-full bg-green-600 text-white font-semibold text-sm"
              >
                4
              </div>
              <p class="text-justify">
                Kami menyarankan Pengguna untuk tidak menggunakan jaringan yang tidak
                terlindungi atau WiFi yang tidak aman.
              </p>
            </div>
          </div>
        </BaseAccordion>
        <!-- 3 -->
        <BaseAccordion
          title="Perubahan dan Pemutakhiran Kebijakan Privasi"
          :defaultOpen="false"
          class="mt-5"
        >
          <div class="space-y-6 text-gray-600 leading-relaxed md:text-lg">
            <!-- ITEM 1 -->
            <div
              class="flex gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-green-50 transition duration-300"
            >
              <div
                class="min-w-8 h-8 flex items-center justify-center rounded-full bg-green-600 text-white font-semibold text-sm"
              >
                1
              </div>
              <p class="text-justify">
                Perubahan, penghapusan, maupun penambahan ketentuan baru pada Kebijakan
                Privasi ini merupakan Hak RSUD Dr. Soetomo sepenuhnya. Pengguna diharapkan
                melakukan pemeriksaan halaman Kebijakan Privasi secara berkala untuk
                mengetahui perubahan tersebut.
              </p>
            </div>

            <!-- ITEM 2 -->
            <div
              class="flex gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-green-50 transition duration-300"
            >
              <div
                class="min-w-8 h-8 flex items-center justify-center rounded-full bg-green-600 text-white font-semibold text-sm"
              >
                2
              </div>
              <p class="text-justify">
                Pengguna secara tegas mengaku telah membaca syarat dan ketentuan layanan.
                Kebijakan Privasi ini diatur berdasarkan hukum Republik Indonesia sehingga
                Pengguna diwajibkan tunduk kepada semua peraturan yang berlaku di
                Indonesia.
              </p>
            </div>
          </div>
        </BaseAccordion>
        <!-- 4 -->
        <BaseAccordion
          title="Kontak Informasi, Pertanyaan, dan Keluhan"
          :defaultOpen="false"
          class="mt-5"
        >
          <div class="space-y-6 text-gray-600 leading-relaxed md:text-lg">
            <!-- ITEM 1 -->
            <div
              class="flex gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-green-50 transition duration-300"
            >
              <div
                class="min-w-8 h-8 flex items-center justify-center rounded-full bg-green-600 text-white font-semibold text-sm"
              >
                1
              </div>
              <p class="text-justify">
                Apabila Pengguna memiliki pertanyaan tentang Kebijakan Privasi ini, Hak
                Pengguna, maupun hal lain terkait penggunaan Website, silahkan mengirim
                email ke kontak.rsudrsoetomo@jatimprov.go.id.
              </p>
            </div>
          </div>
        </BaseAccordion>
        <!-- 5 -->
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Breadcrumb from "~/components/layout/Breadcrumb.vue";
import BaseHeroPage from "~/components/form/BaseHeroPage.vue";
import BaseAccordion from "~/components/form/BaseAccordion.vue";

useHead({
  title: "Kebijakan Privasi ",
});

definePageMeta({
  breadcrumb: [
    { label: "Beranda", to: "/" },
    { label: "Kebijakan Privasi RSUD Dr. Soetomo" },
  ],
});
</script>
