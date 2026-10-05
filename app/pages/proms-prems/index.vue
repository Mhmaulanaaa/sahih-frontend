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
        <BaseHeroPage
          title="Scans Barcode PROMs & PREMs"
          logo="/images/logo/logo_white.png"
        />
      </div>
      <!-- Menu -->
      <div class="bg-white rounded-2xl shadow-lg p-5">
        <div class="w-full bg-white rounded-3xl shadow-md p-10 space-y-8">
          <!-- PERHATIAN -->
          <div class="rounded-2xl bg-emerald-50 p-6">
            <div class="px-2 space-y-3">
              <!-- TITLE -->
              <h3 class="font-semibold text-slate-600">⚠️ Perhatian!</h3>

              <!-- LIST -->
              <ul class="list-disc list-inside text-sm text-slate-600 space-y-2 pl-5">
                <li>
                  Setelah klik tombol <b>"Scan Barcode"</b> maka akan tampil kamera untuk
                  scan barcode pasien.
                </li>
                <li>
                  Jika scan berhasil, Anda akan diarahkan pada halaman pengisian dan hasil
                  pengisian kuisioner.
                </li>
              </ul>
            </div>
          </div>

          <!-- DESKRIPSI -->
          <div class="text-sm text-slate-600 leading-relaxed space-y-3">
            <p>
              Kepada Yth. Pasien <b>RSUD Dr. Soetomo</b>, sebagai bagian dari komitmen
              kami untuk terus meningkatkan kualitas layanan, kami mohon kesediaan Anda
              untuk mengisi survei singkat tentang hasil perawatan (<b>PROMs</b>) dan
              pengalaman (<b>PREMs</b>) yang Anda rasakan.
            </p>

            <p>Partisipasi Anda sangat berarti bagi perbaikan pelayanan kami.</p>

            <ul class="list-disc list-inside space-y-1">
              <li>
                <b>PROMs</b> adalah untuk mengukur status kesehatan pasien berdasarkan
                pengalaman yang dirasakan.
              </li>
              <li>
                <b>PREMs</b> adalah untuk mengukur pengalaman pasien dalam pelayanan
                kesehatan (kualitas interaksi dengan tenaga kesehatan, akses layanan, dan
                kesinambungan pelayanan).
              </li>
            </ul>
          </div>
          <div class="">
            <BaseButton type="submit" class="inline-flex items-center">
              <i class="fa fa-camera text-xl mr-2"></i>
              <span>Scan Barcode</span>
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Breadcrumb from "~/components/layout/Breadcrumb.vue";
import BaseButton from "~/components/form/BaseButton.vue";
import BaseHeroPage from "~/components/form/BaseHeroPage.vue";

useHead({
  title: "PROMs & PREMs",
});

definePageMeta({
  breadcrumb: [{ label: "Beranda", to: "/" }, { label: "Scan Barcode PROMs & PREMs" }],
});

const form = reactive({
  nama: "",
  alamat: "",
  email: "",
  telepon: "",
  pekerjaan: "",
  namakuasa: "",
  alamatkuasa: "",
  emailkuasa: "",
  teleponkuasa: "",
  kasusposisi: "",
  captcha: "",
});

const selectedAlasan = ref("");

const alasanOptions = [
  { value: "pid", label: "Pemohon Informasi Ditolak" },
  { value: "ibt", label: "Informasi Berkala Tidak Disediakan" },
  { value: "pit", label: "Permintaan Informasi Tidak Tanggapi" },
  {
    value: "pidts",
    label: "Permintaan Informasi Ditanggapi Tidak Sebagaimana yang Diminta",
  },
  { value: "pitd", label: "Permintaan Informasi Tidak Dipenuhi" },
  { value: "bydt", label: "Biaya Yang Dikenakan Tidak Wajar" },
];

const submitForm = () => {
  console.log("DATA FORM:", { ...form });
};

const reloadCaptcha = () => {
  console.log("reload captcha");
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
