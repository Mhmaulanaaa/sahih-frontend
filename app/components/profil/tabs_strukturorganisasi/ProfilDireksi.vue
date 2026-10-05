<template>
  <div class="p-4 sm:p-6 lg:p-10 max-w-9xl mx-auto">
    <!-- DIREKTUR UTAMA -->
    <div class="flex justify-center mb-12">
      <div
        class="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 text-center max-w-md"
      >
        <!-- FOTO -->
        <img
          :src="asset(direktur.foto)"
          :alt="direktur.nama"
          class="w-75 mx-auto rounded-2xl shadow-md"
        />

        <!-- NAMA -->
        <h3 class="mt-5 text-lg font-bold text-emerald-600">
          {{ direktur.nama }}
        </h3>

        <!-- JABATAN -->
        <p class="mt-1 text-sm text-gray-800 font-semibold leading-relaxed">
          {{ direktur.jabatan }}
        </p>
      </div>
    </div>

    <!-- WAKIL DIREKTUR -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="wakil in wakilDirektur"
        :key="wakil.foto"
        class="bg-white rounded-2xl shadow border border-gray-100 p-6 text-center"
      >
        <!-- FOTO -->
        <img
          :src="asset(wakil.foto)"
          :alt="wakil.nama"
          class="w-55 mx-auto rounded-xl shadow-sm"
        />

        <!-- NAMA -->
        <h3 class="mt-5 text-base font-bold text-emerald-600 leading-snug">
          {{ wakil.nama }}
        </h3>

        <!-- JABATAN -->
        <p class="mt-2 text-sm text-gray-800 font-medium leading-relaxed">
          {{ wakil.jabatan }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ProfilPejabat {
  nama: string;
  jabatan: string;
  foto: string;
}

const { asset } = useAsset();

const direktur: ProfilPejabat = {
  nama:
    "Prof. Dr. Cita Rosita Sigit Prakoeswa, dr., Sp.DVE., Subsp.DAI., FINS-DV., FAADV., M.A.R.S.",
  jabatan: "Direktur RSUD Dr. Soetomo",
  foto: "/images/profil/direktur-rsds.png",
};

const wakilDirektur: ProfilPejabat[] = [
  {
    nama: "Tjipto Prasetyo Nugroho, Ak.",
    jabatan: "Wakil Direktur Umum dan Operasional",
    foto: "/images/profil/wadir-uo.png",
  },
  {
    nama: "Primada Kusumaninggar, drg., M.Kes., M.A.R.S.",
    jabatan: "Wakil Direktur Perencanaan dan Keuangan",
    foto: "/images/profil/wadir-pk.png",
  },
  {
    nama: "Dr. Damayanti Tinduh, dr., Sp.KR(K).",
    jabatan: "Wakil Direktur Pendidikan, Penelitian dan SDM",
    foto: "/images/profil/wadir-sdm.png",
  },
  {
    nama: "Prof. Dr. Ahmad Suryawan, dr., Sp.A(K).",
    jabatan: "Wakil Direktur Pelayanan Medik dan Keperawatan",
    foto: "/images/profil/wadir-pmk.png",
  },
];
</script>
