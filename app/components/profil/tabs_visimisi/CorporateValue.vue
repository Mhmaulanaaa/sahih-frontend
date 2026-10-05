<template>
  <section class="bg-white lg:p-8">
    <div class="">
      <div
        class="overflow-hidden rounded-[30px] bg-white shadow-2xl border border-gray-100"
      >
        <div class="grid grid-cols-1 xl:grid-cols-12">
          <!-- ================= LEFT ================= -->
          <div
            class="xl:col-span-4 relative flex items-end justify-center min-w-0 overflow-visible"
          >
            <img
              src="/images/etiprovi/48.png"
              alt="Corporate Value"
              class="w-64 sm:w-80 md:w-96 lg:w-[460px] xl:w-[min(42vw,620px)] 2xl:w-[min(38vw,680px)] h-auto max-w-full object-contain xl:translate-y-10"
            />
          </div>

          <!-- ================= RIGHT ================= -->

          <div class="xl:col-span-8 p-8 md:p-12 lg:p-16">
            <!-- HEADER -->

            <div
              class="mb-16 flex flex-col-reverse items-center gap-8 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left"
            >
              <!-- TEXT -->
              <div class="flex-1">
                <h3 class="text-2xl font-bold tracking-[4px] text-gray-900 md:text-3xl">
                  CORPORATE VALUE
                </h3>

                <h1
                  class="mt-2 text-6xl font-black leading-none tracking-tight text-blue-900 md:text-8xl xl:text-[7rem] 2xl:text-[10rem]"
                >
                  ETIPROVI
                </h1>
              </div>

              <!-- LOGO -->
              <div class="flex justify-center lg:justify-end">
                <img
                  src="/images/logo/logo-rsds-jatimprov.png"
                  alt="Logo"
                  class="h-28 w-auto md:h-36 lg:h-44 xl:h-59 object-contain"
                />
              </div>
            </div>

            <!-- LIST -->

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div
                v-for="item in values"
                :key="item.title"
                class="group relative rounded-[30px] border border-gray-200 bg-white shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:shadow-2xl h-auto md:h-[300px]"
              >
                <div
                  class="flex flex-col sm:flex-row items-center sm:items-end gap-5 w-full"
                >
                  <!-- IMAGE -->
                  <div
                    class="relative flex justify-center pt-6 md:absolute md:left-0 md:bottom-0 md:w-[250px] md:h-full md:items-end md:justify-center"
                  >
                    <img
                      :src="asset(item.image)"
                      :alt="item.title"
                      class="w-auto h-44 sm:h-52 md:h-[220px] object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <!-- CONTENT -->
                  <div
                    class="min-w-0 flex-1 px-5 pb-7 pt-4 text-center sm:px-6 md:ml-[170px] md:h-full md:px-6 md:py-7 md:text-left md:flex md:flex-col md:justify-center"
                  >
                    <!-- TITLE -->
                    <h2
                      class="min-w-0 max-w-full break-words font-black uppercase leading-tight text-gray-900 text-[clamp(1.15rem,4vw,1.5rem)] md:text-[clamp(1rem,1.35vw,1.5rem)] xl:text-[clamp(1rem,1.15vw,1.4rem)]"
                    >
                      {{ item.title }}
                    </h2>

                    <!-- LINE -->
                    <div
                      class="mt-3 mb-4 h-1 w-16 shrink-0 rounded-full bg-green-600 mx-auto md:mx-0"
                    ></div>

                    <!-- DESCRIPTION -->
                    <p
                      class="min-w-0 max-w-full break-words whitespace-normal text-gray-600 text-[clamp(0.8rem,3vw,0.95rem)] leading-6 sm:leading-7 md:text-[clamp(0.75rem,1vw,0.95rem)] md:leading-6 xl:leading-7 text-center sm:text-left"
                    >
                      {{ item.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface CorporateValue {
  title: string;
  image: string;
  description: string;
}

const { asset } = useAsset();

const values: CorporateValue[] = [
  {
    title: "ETIKA",
    image: "/images/etiprovi/49.png",
    description:
      "Nilai yang dijunjung tinggi dalam pergaulan dengan pasien dan keluarga, antar sesama staf, antar karyawan dengan pimpinan, maupun antar individu, dalam menjalankan profesi kesehatan.",
  },
  {
    title: "PROFESIONALISME",
    image: "/images/etiprovi/50.png",
    description:
      "Kompeten dan bertanggung jawab dalam menjalankan tugas untuk memberikan yang terbaik.",
  },
  {
    title: "INTEGRITAS",
    image: "/images/etiprovi/52.png",
    description:
      "Keselarasan antara perkataan dan perbuatan sesuai moral dan kemanusiaan.",
  },

  {
    title: "INOVATIF",
    image: "/images/etiprovi/51.png",
    description: "Menghasilkan yang terbaik, kreatif dan berkelanjutan.",
  },
];
</script>

<style scoped>
h1 {
  letter-spacing: 2px;
}

@media (max-width: 1024px) {
  .ml-28 {
    margin-left: 0;
  }

  .absolute {
    position: static;
    margin: 0 auto 1rem;
    display: block;
  }

  .relative {
    text-align: center;
  }
}

h1 {
  letter-spacing: 2px;
}

/* Desktop */
@media (min-width: 1280px) {
  img[alt="Corporate Value"] {
    transform: scale(1.25) translateY(35px);
    transform-origin: bottom center;
  }
}

/* Tablet */
@media (max-width: 1279px) {
  img[alt="Corporate Value"] {
    transform: scale(1.05);
  }
}

/* Mobile */
@media (max-width: 768px) {
  img[alt="Corporate Value"] {
    transform: scale(0.95);
    margin-top: 20px;
  }
}
</style>
