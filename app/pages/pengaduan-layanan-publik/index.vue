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
          title="Pengaduan Layanan Publik"
          logo="/images/logo/logo_white.png"
        />
      </div>
      <!-- Menu -->
      <div class="bg-white rounded-2xl shadow-lg p-5">
        <div class="w-full bg-white rounded-3xl shadow-md p-10">
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
              <!-- NAMA -->
              <BaseInput v-model="form.nama" placeholder="Nama *" required />

              <!-- NO RM -->
              <BaseInput
                v-model="form.no_rm"
                placeholder="No. RM (Jika Sebagai Pasien RSUD Dr. Soetomo)"
              />
            </div>
            <BaseTextarea v-model="form.alamat" placeholder="Alamat *" required />
            <div class="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
              <!-- ALAMAT -->

              <!-- EMAIL -->
              <BaseInput
                v-model="form.email"
                type="email"
                placeholder="Email *"
                required
              />
              <!-- TELEPON -->
              <BaseInput v-model="form.telepon" placeholder="Telepon" />
            </div>

            <!-- PELAYANAN -->
            <BaseTextarea
              v-model="form.pelayanan"
              placeholder="Pelayanan yang Dikeluhkan *"
              required
            />

            <!-- <BaseSelect
              v-model="selectedWilayah"
              :options="wilayahOptions"
              placeholder="Pilih Wilayah"
            /> -->

            <!-- CAPTCHA -->
            <CaptchaInput v-model="form.captcha" @reload="reloadCaptcha" />

            <!-- BUTTON -->
            <div class="pt-4">
              <BaseButton type="submit"> Kirim Pengaduan </BaseButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Breadcrumb from "~/components/layout/Breadcrumb.vue";
import BaseButton from "~/components/form/BaseButton.vue";
import BaseInput from "~/components/form/BaseInput.vue";
import CaptchaInput from "~/components/form/CaptchaInput.vue";
import BaseTextarea from "~/components/form/BaseTextarea.vue";
import BaseHeroPage from "~/components/form/BaseHeroPage.vue";

useHead({
  title: "Pengaduan Layanan Publik",
});

definePageMeta({
  breadcrumb: [{ label: "Beranda", to: "/" }, { label: "Pengaduan Layanan Publik" }],
});

const form = reactive({
  nama: "",
  no_rm: "",
  alamat: "",
  email: "",
  telepon: "",
  pelayanan: "",
  pilihan: "",
  captcha: "",
});

const selectedWilayah = ref("");

const wilayahOptions = [
  { value: "sby", label: "Surabaya" },
  { value: "mlg", label: "Malang" },
  { value: "sda", label: "Sidoarjo" },
  { value: "gresik", label: "Gresik" },
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
