<template>
  <section
    class="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
  >
    <!-- =====================================================
         DECORATIVE BACKGROUND
    ====================================================== -->
    <div
      class="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-sky-50 blur-3xl"
    ></div>

    <div
      class="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-emerald-50 blur-3xl"
    ></div>

    <div
      class="relative grid grid-cols-1 gap-8 p-5 sm:p-7 lg:grid-cols-12 lg:gap-10 lg:p-10"
    >
      <!-- =====================================================
           LEFT : CONTENT
      ====================================================== -->
      <div class="min-w-0 lg:col-span-9">
        <!-- =====================================================
             HEADER
        ====================================================== -->
        <div class="mb-10">
          <div
            v-if="badge"
            class="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3.5 py-2 text-xs font-bold tracking-wide text-emerald-700 sm:text-sm"
          >
            <span class="h-2 w-2 rounded-full bg-emerald-500"></span>
            {{ badge }}
          </div>

          <h1
            class="text-3xl font-extrabold leading-tight tracking-tight text-emerald-700 sm:text-4xl lg:text-5xl"
          >
            WBK DAN WBBM
          </h1>

          <div class="mt-5 flex items-center gap-2">
            <div class="h-1 w-16 rounded-full bg-emerald-500"></div>
            <div class="h-1 w-5 rounded-full bg-emerald-200"></div>
            <div class="h-1 w-2 rounded-full bg-emerald-100"></div>
          </div>
        </div>

        <!-- =====================================================
             WBK & WBBM
        ====================================================== -->
        <div class="mb-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          <!-- WBK -->
          <article class="rounded-2xl border border-red-100 bg-red-50/60 p-5 sm:p-6">
            <div class="mb-4 flex items-center gap-3">
              <span
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-600 text-sm font-extrabold text-white"
              >
                WBK
              </span>

              <h2 class="text-xl font-extrabold text-red-600 sm:text-2xl">WBK</h2>
            </div>

            <p
              class="text-justify text-sm leading-7 text-slate-700 sm:text-base sm:leading-8"
            >
              <strong class="font-extrabold text-slate-900">
                Wilayah Bebas dari Korupsi (WBK)
              </strong>
              adalah predikat yang diberikan kepada suatu unit kerja/satuan kerja yang
              telah berhasil melaksanakan reformasi birokrasi dengan baik, yang telah
              memenuhi sebagian besar kriteria proses perbaikan pada komponen pengungkit
              serta mewujudkan pemerintahan yang bersih dan akuntabel serta pelayanan
              publik yang prima.
            </p>
          </article>

          <!-- WBBM -->
          <article
            class="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5 sm:p-6"
          >
            <div class="mb-4 flex items-center gap-3">
              <span
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-xs font-extrabold text-white"
              >
                WBBM
              </span>

              <h2 class="text-xl font-extrabold text-emerald-600 sm:text-2xl">WBBM</h2>
            </div>

            <p
              class="text-justify text-sm leading-7 text-slate-700 sm:text-base sm:leading-8"
            >
              <strong class="font-extrabold text-slate-900">
                Wilayah Birokrasi Bersih dan Melayani (WBBM)
              </strong>
              adalah predikat yang diberikan kepada suatu unit kerja/satuan kerja yang
              telah berhasil melaksanakan reformasi birokrasi dengan sangat baik, dengan
              telah memenuhi sebagian besar kriteria proses perbaikan pada komponen
              pengungkit untuk mewujudkan pemerintahan yang bersih dan akuntabel serta
              pelayanan publik yang prima.
            </p>
          </article>
        </div>

        <!-- =====================================================
             PENGUKURAN KEBERHASILAN
        ====================================================== -->
        <div class="mb-12">
          <div class="mb-7">
            <h2
              class="text-2xl font-extrabold uppercase leading-tight text-slate-900 sm:text-3xl lg:text-4xl"
            >
              PENGUKURAN
              <span class="block text-emerald-700"> KEBERHASILAN PEMBANGUNAN ZI </span>
            </h2>

            <div class="mt-4 flex items-center gap-2">
              <div class="h-1 w-14 rounded-full bg-emerald-500"></div>
              <div class="h-1 w-5 rounded-full bg-emerald-200"></div>
              <div class="h-1 w-2 rounded-full bg-emerald-100"></div>
            </div>
          </div>

          <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
            <!-- KOMPONEN PENGUNGKIT -->
            <article class="rounded-2xl border border-sky-100 bg-sky-50/70 p-5 sm:p-6">
              <div class="mb-5 flex items-start justify-between gap-3">
                <h3 class="text-lg font-extrabold leading-6 text-sky-700 sm:text-xl">
                  KOMPONEN PENGUNGKIT
                </h3>

                <span
                  class="shrink-0 rounded-full bg-sky-600 px-3 py-1 text-sm font-extrabold text-white"
                >
                  60%
                </span>
              </div>

              <ol class="space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
                <li class="flex gap-3">
                  <span class="font-extrabold text-sky-600">01</span>
                  <span>Manajemen Perubahan</span>
                </li>

                <li class="flex gap-3">
                  <span class="font-extrabold text-sky-600">02</span>
                  <span>Penataan Tatalaksana</span>
                </li>

                <li class="flex gap-3">
                  <span class="font-extrabold text-sky-600">03</span>
                  <span>Penataan Sistem Manajemen SDM</span>
                </li>

                <li class="flex gap-3">
                  <span class="font-extrabold text-sky-600">04</span>
                  <span>Penguatan Akuntabilitas Kinerja</span>
                </li>

                <li class="flex gap-3">
                  <span class="font-extrabold text-sky-600">05</span>
                  <span>Penguatan Pengawasan</span>
                </li>

                <li class="flex gap-3">
                  <span class="font-extrabold text-sky-600">06</span>
                  <span>Peningkatan Kualitas Pelayanan Publik</span>
                </li>
              </ol>
            </article>

            <!-- KOMPONEN HASIL -->
            <article
              class="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-5 sm:p-6"
            >
              <div class="mb-5 flex items-start justify-between gap-3">
                <h3 class="text-lg font-extrabold leading-6 text-emerald-700 sm:text-xl">
                  KOMPONEN HASIL
                </h3>

                <span
                  class="shrink-0 rounded-full bg-emerald-600 px-3 py-1 text-sm font-extrabold text-white"
                >
                  40%
                </span>
              </div>

              <ol
                class="space-y-2 text-justify text-sm leading-7 text-slate-700 sm:text-base sm:leading-8"
              >
                <li class="flex gap-3">
                  <span class="font-extrabold text-emerald-600"> 01 </span>

                  <span>
                    Birokrasi yang bersih dan akuntabel, dengan Nilai Survey Persepsi
                    Korupsi (Survei Eksternal) dan Capaian Kinerja Lebih Baik dari pada
                    Capaian Kinerja Sebelumnya.
                  </span>
                </li>

                <li class="flex gap-3">
                  <span class="font-extrabold text-emerald-600"> 02 </span>

                  <span>
                    Pelayanan Publik yang Prima, dengan Nilai Persepsi Kualitas Pelayanan
                    (Survei Eksternal).
                  </span>
                </li>
              </ol>
            </article>
          </div>
        </div>

        <!-- =====================================================
             KKN
        ====================================================== -->
        <div class="mb-12">
          <div class="mb-7">
            <h2
              class="text-2xl font-extrabold uppercase leading-tight text-slate-900 sm:text-3xl lg:text-4xl"
            >
              KKN
              <span class="text-red-600"> (KORUPSI, KOLUSI, NEPOTISME) </span>
            </h2>

            <div class="mt-4 flex items-center gap-2">
              <div class="h-1 w-14 rounded-full bg-red-500"></div>
              <div class="h-1 w-5 rounded-full bg-red-200"></div>
              <div class="h-1 w-2 rounded-full bg-red-100"></div>
            </div>
          </div>

          <div class="grid grid-cols-1 gap-5 md:grid-cols-3">
            <!-- KORUPSI -->
            <article class="rounded-2xl border border-red-100 bg-red-50/60 p-5">
              <h3 class="mb-4 text-xl font-extrabold text-red-600">KORUPSI</h3>

              <p class="text-justify text-sm leading-7 text-slate-700 sm:text-base">
                Penggelapan/ penyelewengan harta milik perusahaan ataupun milik negara
                untuk kepentingan diri sendiri (pribadi) maupun untuk kepentingan orang
                lain.
              </p>
            </article>

            <!-- KOLUSI -->
            <article class="rounded-2xl border border-orange-100 bg-orange-50/60 p-5">
              <h3 class="mb-4 text-xl font-extrabold text-orange-600">KOLUSI</h3>

              <p class="text-justify text-sm leading-7 text-slate-700 sm:text-base">
                Pemufakatan/kerjasama secara melawan hukum antar penyelenggara
                negara/antar penyelenggara negara dan pihak lain yang merugikan orang
                lain, masyarakat, dan/atau negara.
              </p>
            </article>

            <!-- NEPOTISME -->
            <article class="rounded-2xl border border-amber-100 bg-amber-50/60 p-5">
              <h3 class="mb-4 text-xl font-extrabold text-amber-600">NEPOTISME</h3>

              <p class="text-justify text-sm leading-7 text-slate-700 sm:text-base">
                Setiap perbuatan Penyelenggara Negara secara melawan hukum yang
                menguntungkan kepentingan keluarganya dan/atau kroninya di atas
                kepentingan masyarakat, bangsa, dan negara.
              </p>
            </article>
          </div>
        </div>

        <!-- =====================================================
             TUJUH KLASIFIKASI KORUPSI
        ====================================================== -->
        <div class="mb-12">
          <div class="mb-7">
            <h2
              class="text-2xl font-extrabold uppercase leading-tight text-slate-900 sm:text-3xl lg:text-4xl"
            >
              TUJUH KLASIFIKASI
              <span class="block text-red-600"> KORUPSI </span>
            </h2>

            <div class="mt-4 flex items-center gap-2">
              <div class="h-1 w-14 rounded-full bg-red-500"></div>
              <div class="h-1 w-5 rounded-full bg-red-200"></div>
              <div class="h-1 w-2 rounded-full bg-red-100"></div>
            </div>
          </div>

          <div class="space-y-5">
            <!-- 01 -->
            <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
              <div class="mb-4 flex items-start gap-3">
                <span
                  class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-600 text-sm font-extrabold text-white"
                >
                  01
                </span>

                <h3
                  class="pt-1 text-base font-extrabold leading-6 text-red-600 sm:text-lg"
                >
                  MERUGIKAN KEUANGAN NEGARA
                </h3>
              </div>

              <ul
                class="ml-12 list-disc space-y-2 pl-4 text-sm leading-7 text-slate-700 sm:text-base"
              >
                <li>
                  Mencari keuntungan dengan cara melawan hukum dan merugikan negara.
                </li>

                <li>
                  Menyalahgunakan jabatan untuk mencari keuntungan dan merugikan negara.
                </li>
              </ul>
            </article>

            <!-- 02 -->
            <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
              <div class="flex items-start gap-3">
                <span
                  class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-sm font-extrabold text-white"
                >
                  02
                </span>

                <div>
                  <h3
                    class="text-base font-extrabold leading-6 text-orange-600 sm:text-lg"
                  >
                    SUAP
                  </h3>

                  <p class="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
                    Tindakan pemberian uang atau menerima uang/hadiah yang dilakukan oleh
                    pejabat pemerintah untuk melakukan atau tidak melakukan sesuatu yang
                    bertentangan dengan kewajibannya.
                  </p>
                </div>
              </div>
            </article>

            <!-- 03 -->
            <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
              <div class="flex items-start gap-3">
                <span
                  class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-sm font-extrabold text-white"
                >
                  03
                </span>

                <div>
                  <h3
                    class="text-base font-extrabold leading-6 text-amber-600 sm:text-lg"
                  >
                    PENYALAHGUNAAN DALAM JABATAN
                  </h3>

                  <p class="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
                    Pejabat Penyelenggara Negara melakukan penggelapan uang, memalsukan
                    dokumen pemeriksaan administrasi, membantu, membiarkan atau diri
                    sendiri merusak bukti.
                  </p>
                </div>
              </div>
            </article>

            <!-- 04 -->
            <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
              <div class="flex items-start gap-3">
                <span
                  class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-yellow-500 text-sm font-extrabold text-white"
                >
                  04
                </span>

                <div>
                  <h3
                    class="text-base font-extrabold leading-6 text-yellow-600 sm:text-lg"
                  >
                    PEMERASAN
                  </h3>

                  <p class="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
                    Tindakan yang dilakukan oleh pegawai negeri / penyelenggara negara
                    dengan maksud menguntungkan diri sendiri / orang lain secara melawan
                    hukum atau dengan menyalahgunakan kekuasaannya memaksa seseorang
                    memberikan sesuatu, membayar, atau menerima pembayaran dengan
                    potongan, atau untuk mengerjakan sesuatu bagi dirinya sendiri.
                  </p>
                </div>
              </div>
            </article>

            <!-- 05 -->
            <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
              <div class="flex items-start gap-3">
                <span
                  class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-lime-600 text-sm font-extrabold text-white"
                >
                  05
                </span>

                <div>
                  <h3 class="text-base font-extrabold leading-6 text-lime-700 sm:text-lg">
                    PERBUATAN CURANG
                  </h3>

                  <p class="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
                    Tindakan curang oleh Pemborong Ahli Bangunan, Pengawas Proyek, Rekanan
                    yang merugikan negara, serta pejabat penyelenggara negara menyerobot
                    tanah.
                  </p>
                </div>
              </div>
            </article>

            <!-- 06 -->
            <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
              <div class="flex items-start gap-3">
                <span
                  class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-600 text-sm font-extrabold text-white"
                >
                  06
                </span>

                <div class="min-w-0">
                  <h3 class="text-base font-extrabold leading-6 text-sky-700 sm:text-lg">
                    BENTURAN KEPENTINGAN
                  </h3>

                  <p
                    class="mt-3 text-sm leading-7 text-slate-700 sm:text-base text-justify"
                  >
                    Situasi dimana seorang penyelenggara negara mendapatkan kekuasaan dan
                    kewenangan berdasarkan peraturan perundang-undangan memiliki / diduga
                    memiliki kepentingan pribadi atas setiap penggunaan wewenang yang
                    dimilikinya sehingga dapat mempengaruhi kualitas dan kinerja yang
                    seharusnya.
                  </p>

                  <p class="mt-4 font-bold text-slate-900">
                    Beberapa bentuk konflik kepentingan yang sering terjadi:
                  </p>

                  <ul
                    class="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base"
                  >
                    <li>
                      Kebijakan yang berpihak akibat pengaruh/hubungan
                      dekat/ketergantungan/pemberian gratifikasi.
                    </li>

                    <li>Pemberian izin yang diskriminatif.</li>

                    <li>
                      Pengangkatan pegawai berdasarkan hubungan dekat/balas
                      jasa/rekomendasi/pengaruh dari pejabat pemerintah.
                    </li>

                    <li>
                      Pemilihan partner/rekanan kerja berdasarkan keputusan yang tidak
                      profesional.
                    </li>

                    <li>Melakukan komersialisasi pelayanan publik.</li>

                    <li>
                      Penggunaan aset dan informasi rahasia untuk kepentingan
                      pribadi/golongan.
                    </li>

                    <li>Pengawas ikut menjadi bagian dari pihak yang diawasi.</li>

                    <li>
                      Melakukan pengawasan/penilaian atas pengaruh pihak lain dan tidak
                      sesuai norma, standar, dan prosedur.
                    </li>

                    <li>
                      Menjadi bagian dari pihak yang memiliki kepentingan atas sesuatu
                      yang dinilai; dan lain-lain.
                    </li>
                  </ul>
                </div>
              </div>
            </article>

            <!-- 07 -->
            <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
              <div class="flex items-start gap-3">
                <span
                  class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-sm font-extrabold text-white"
                >
                  07
                </span>

                <div>
                  <h3
                    class="text-base font-extrabold leading-6 text-indigo-700 sm:text-lg"
                  >
                    GRATIFIKASI
                  </h3>

                  <p class="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
                    Pemberian uang, barang, rabat (diskon), komisi, pinjaman tanpa bunga,
                    tiket perjalanan, fasilitas penginapan, perjalanan wisata, pengobatan
                    cuma-cuma, dan fasilitas lainnya. Suatu pemberian menjadi gratifikasi
                    yang dianggap suap jika terkait dengan jabatan dan bertentangan dengan
                    kewajiban atau tugas penerima.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>

        <!-- SLOT -->
        <slot />
      </div>

      <!-- =====================================================
           RIGHT : BUKU SAKU
      ====================================================== -->
      <div class="min-w-0 lg:col-span-3">
        <div
          class="sticky top-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <!-- COVER -->
          <div
            v-if="sideImage"
            class="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-slate-50 p-4"
          >
            <div
              class="absolute left-6 top-6 z-10 rounded-full bg-emerald-600 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg"
            >
              Panduan
            </div>

            <div
              class="overflow-hidden rounded-2xl border border-white bg-white p-3 shadow-sm"
            >
              <img
                :src="asset(sideImage)"
                alt="Buku Saku Pembangunan Zona Integritas"
                class="h-auto w-full rounded-xl object-contain transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>
          </div>

          <!-- CONTENT -->
          <div class="p-5 sm:p-6">
            <div class="mb-5">
              <span
                class="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-600"
              >
                Referensi
              </span>

              <h4 class="mt-1 text-lg font-extrabold leading-6 text-slate-800">
                {{ sideTitle }}
              </h4>

              <p class="mt-3 text-sm leading-6 text-slate-500">
                {{ sideDescription }}
              </p>
            </div>

            <!-- ACTION -->
            <a
              v-if="sideActionText"
              :href="asset(sideActionLink)"
              target="_blank"
              rel="noopener noreferrer"
              class="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition-all duration-200 hover:bg-emerald-700"
            >
              <span>
                {{ sideActionText }}
              </span>

              <span class="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  badge: String,

  title: {
    type: String,
    default: "ZONA INTEGRITAS",
  },

  /*
   * COVER BUKU SAKU
   */
  sideImage: {
    type: String,
    default: "/images/reformasi/bukuSaku.png",
  },

  sideTitle: {
    type: String,
    default: "Buku Saku Pembangunan Zona Integritas",
  },

  sideDescription: {
    type: String,
    default: "Panduan resmi pembangunan Zona Integritas menuju WBK dan WBBM.",
  },

  sideActionText: {
    type: String,
    default: "Download Buku Saku",
  },

  sideActionLink: {
    type: String,
    default: "/images/reformasi/bukuSakuZI.pdf",
  },
});

const { asset } = useAsset();
</script>
