<template>
  <div class="max-w-9xl mx-auto px-5 py-10">
    <div
      class="group relative overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-br from-white via-emerald-50/40 to-emerald-100/40 p-6 shadow-sm transition-all duration-300 hover:border-emerald-200 hover:shadow-lg md:p-8"
    >
      <!-- Decorative Background -->
      <div
        class="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-emerald-200/20 blur-3xl transition-transform duration-500 group-hover:scale-125"
      ></div>

      <div
        class="absolute -bottom-24 -left-16 h-40 w-40 rounded-full bg-teal-200/20 blur-3xl"
      ></div>

      <!-- Header -->
      <div class="relative mb-6 flex items-center gap-4">
        <div
          class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-emerald-600 shadow-sm ring-1 ring-emerald-100"
        >
          <i class="fa-solid fa-user-plus text-lg"></i>
        </div>

        <div>
          <h3 class="text-lg font-bold text-emerald-900 sm:text-xl">
            Informasi & Pendaftaran Pasien
          </h3>

          <p class="mt-0.5 text-xs text-slate-500 sm:text-sm">
            Hubungi kami untuk mendapatkan informasi dan layanan pendaftaran
          </p>
        </div>
      </div>

      <!-- Contact List -->
      <div class="relative space-y-3">
        <!-- Rawat Jalan -->
        <a
          href="tel:082233736431"
          class="group/item flex items-center gap-4 rounded-2xl border border-emerald-100/80 bg-white/80 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-white hover:shadow-md"
        >
          <!-- Icon -->
          <div
            class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-all duration-300 group-hover/item:bg-emerald-600 group-hover/item:text-white"
          >
            <i class="fa-solid fa-stethoscope"></i>
          </div>

          <!-- Content -->
          <div class="min-w-0 flex-1">
            <p class="text-xs font-medium text-slate-500 sm:text-sm">
              Informasi & Pendaftaran Rawat Jalan
            </p>

            <p
              class="mt-0.5 text-sm font-bold text-slate-800 transition-colors group-hover/item:text-emerald-700 sm:text-base"
            >
              0822 3373 6431
            </p>
          </div>

          <!-- Arrow -->
          <div
            class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 transition-all duration-300 group-hover/item:translate-x-1 group-hover/item:bg-emerald-600 group-hover/item:text-white"
          >
            <i class="fa-solid fa-phone text-xs"></i>
          </div>
        </a>

        <!-- Rawat Inap -->
        <a
          href="tel:081216873905"
          class="group/item flex items-center gap-4 rounded-2xl border border-emerald-100/80 bg-white/80 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-white hover:shadow-md"
        >
          <!-- Icon -->
          <div
            class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-all duration-300 group-hover/item:bg-emerald-600 group-hover/item:text-white"
          >
            <i class="fa-solid fa-bed"></i>
          </div>

          <!-- Content -->
          <div class="min-w-0 flex-1">
            <p class="text-xs font-medium text-slate-500 sm:text-sm">
              Informasi Rawat Inap & Tindakan Operasi
            </p>

            <p
              class="mt-0.5 text-sm font-bold text-slate-800 transition-colors group-hover/item:text-emerald-700 sm:text-base"
            >
              0812 1687 3905
            </p>
          </div>

          <!-- Arrow -->
          <div
            class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 transition-all duration-300 group-hover/item:translate-x-1 group-hover/item:bg-emerald-600 group-hover/item:text-white"
          >
            <i class="fa-solid fa-phone text-xs"></i>
          </div>
        </a>

        <!-- Pendaftaran Rawat Inap -->
        <a
          href="tel:082245638276"
          class="group/item flex items-center gap-4 rounded-2xl border border-emerald-100/80 bg-white/80 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-white hover:shadow-md"
        >
          <!-- Icon -->
          <div
            class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-all duration-300 group-hover/item:bg-emerald-600 group-hover/item:text-white"
          >
            <i class="fa-solid fa-clipboard-list"></i>
          </div>

          <!-- Content -->
          <div class="min-w-0 flex-1">
            <p class="text-xs font-medium text-slate-500 sm:text-sm">
              Pendaftaran Rawat Inap & Operasi
            </p>

            <p
              class="mt-0.5 text-sm font-bold text-slate-800 transition-colors group-hover/item:text-emerald-700 sm:text-base"
            >
              0822 4563 8276
            </p>
          </div>

          <!-- Arrow -->
          <div
            class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 transition-all duration-300 group-hover/item:translate-x-1 group-hover/item:bg-emerald-600 group-hover/item:text-white"
          >
            <i class="fa-solid fa-phone text-xs"></i>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
