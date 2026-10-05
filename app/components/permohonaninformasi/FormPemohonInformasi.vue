<template>
  <div class="bg-white rounded-2xl shadow-lg p-5">
    <div class="w-full bg-white rounded-3xl shadow-md p-10">
      <form @submit.prevent="submitForm" class="space-y-6">
        <BaseInput v-model="form.nama" placeholder="Nama *" required />
        <BaseTextarea v-model="form.alamat" placeholder="Alamat *" required />
        <div class="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- EMAIL -->
          <BaseInput v-model="form.email" type="email" placeholder="Email *" required />
          <!-- TELEPON -->
          <BaseInput v-model="form.telepon" placeholder="Telepon *" />
        </div>
        <BaseInput v-model="form.pekerjaan" placeholder="Pekerjaan *" />
        <BaseInput v-model="form.tujuan" placeholder="Tujuan Penggunaan Informasi *" />

        <!-- PELAYANAN -->
        <BaseTextarea
          v-model="form.informasi"
          placeholder="Informasi yang dibutuhkan *"
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
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
import BaseButton from "../form/BaseButton.vue";
import BaseInput from "../form/BaseInput.vue";
import CaptchaInput from "../form/CaptchaInput.vue";
import BaseTextarea from "../form/BaseTextarea.vue";

const form = reactive({
  nama: "",
  alamat: "",
  pekerjaan: "",
  email: "",
  telepon: "",
  tujuan: "",
  informasi: "",
  captcha: "",
});

const submitForm = () => {
  console.log(form);
};

const reloadCaptcha = () => {
  console.log("reload captcha");
};
</script>
