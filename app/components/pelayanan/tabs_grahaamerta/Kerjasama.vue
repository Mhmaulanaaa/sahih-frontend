<template>
  <div class="max-w-9xl mx-auto px-4 py-8 sm:py-10">
    <div
      class="group relative overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-br from-white via-emerald-50/40 to-emerald-100/40 p-5 sm:p-6 md:p-8 shadow-sm transition-all duration-300 hover:border-emerald-200 hover:shadow-lg"
    >
      <!-- Decorative background -->
      <div
        class="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-200/20 blur-3xl transition-transform duration-500 group-hover:scale-125"
      ></div>

      <div
        class="absolute -bottom-20 -left-10 h-36 w-36 rounded-full bg-teal-200/20 blur-3xl"
      ></div>

      <div
        class="relative flex flex-col items-center gap-5 text-center sm:flex-row sm:items-center sm:text-left"
      >
        <!-- Icon -->
        <div
          class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white text-emerald-600 shadow-sm ring-1 ring-emerald-100 transition-all duration-300 group-hover:scale-105 group-hover:bg-emerald-600 group-hover:text-white"
        >
          <i class="fa-solid fa-handshake text-2xl"></i>
        </div>

        <!-- Content -->
        <div class="min-w-0 flex-1">
          <div class="mb-1 flex items-center justify-center gap-2 sm:justify-start">
            <h3 class="text-base font-bold text-emerald-900 sm:text-lg">
              Informasi Kerja Sama
            </h3>

            <span
              class="hidden rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-700 sm:inline-flex"
            >
              Partnership
            </span>
          </div>

          <p class="text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            Untuk informasi dan kebutuhan kerja sama, silakan hubungi kami melalui email
            berikut.
          </p>

          <!-- Email -->
          <a
            href="mailto:comm.rsgrahaamerta@gmail.com"
            class="mt-3 inline-flex max-w-full items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-emerald-700 shadow-sm ring-1 ring-emerald-100 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-600 hover:text-white hover:shadow-md sm:text-sm"
          >
            <i class="fa-solid fa-envelope text-sm"></i>

            <span class="break-all"> comm.rsgrahaamerta@gmail.com </span>

            <i
              class="fa-solid fa-arrow-up-right-from-square ml-1 hidden text-[10px] opacity-70 sm:inline-block"
            ></i>
          </a>
        </div>

        <!-- Arrow -->
        <div
          class="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-emerald-500 shadow-sm ring-1 ring-emerald-100 transition-all duration-300 group-hover:translate-x-1 sm:flex"
        >
          <i class="fa-solid fa-arrow-right text-sm"></i>
        </div>
      </div>
    </div>
  </div>
</template>
