<script setup lang="ts">
import PoliAnak from "./jadwalpraktekdokter/graha/PoliAnak.vue";
import PoliRadioterapi from "./jadwalpraktekdokter/graha/PoliRadioterapi.vue";
import PoliPenyakitSaraf from "./jadwalpraktekdokter/graha/PoliPenyakitSaraf.vue";
import PoliIlmuKesTHT from "./jadwalpraktekdokter/graha/PoliIlmuKesTHT.vue";
import PoliKedokteranFisik from "./jadwalpraktekdokter/graha/PoliKedokteranFisik.vue";
import PoliRadiologi from "./jadwalpraktekdokter/graha/PoliRadiologi.vue";
import KlinikEstetikaKulit from "./jadwalpraktekdokter/graha/KlinikEstetikaKulit.vue";
import KlinikEstetikaBedahPlastik from "./jadwalpraktekdokter/graha/KlinikEstetikaBedahPlastik.vue";
import SubSpesialisOnkologi from "./jadwalpraktekdokter/graha/SubSpesialisOnkologi.vue";
import SubSpesialisObginSosial from "./jadwalpraktekdokter/graha/SubSpesialisObginSosial.vue";
import SubSpesialisUroginekologi from "./jadwalpraktekdokter/graha/SubSpesialisUroginekologi.vue";
import SubSpesialisFetomaternal from "./jadwalpraktekdokter/graha/SubSpesialisFetomaternal.vue";
// End Jadwal Praktek Dokter Graha Amerta
import SpesialisKesehatanKulitKelamin from "./jadwalpraktekdokter/paviliunstoc/SpesialisKesehatanKulitKelamin.vue";
import SpesialisGigiMulut from "./jadwalpraktekdokter/paviliunstoc/SpesialisGigiMulut.vue";
import SpesialisKardiologidan from "./jadwalpraktekdokter/paviliunstoc/SpesialisKardiologidan.vue";
import SpesialisIlmuPenyakitDalam from "./jadwalpraktekdokter/paviliunstoc/SpesialisIlmuPenyakitDalam.vue";
import SpesialisPulmonologi from "./jadwalpraktekdokter/paviliunstoc/SpesialisPulmonologi.vue";
import SpesialisIlumKedokteranJiwa from "./jadwalpraktekdokter/paviliunstoc/SpesialisIlumKedokteranJiwa.vue";
// End Jadwal Praktek Dokter Paviliun Stoc
import BedahSaraf from "./jadwalpraktekdokter/polistoc/BedahSaraf.vue";
import BedahVaskuler from "./jadwalpraktekdokter/polistoc/BedahVaskuler.vue";
import BedahDigestiv from "./jadwalpraktekdokter/polistoc/BedahDigestiv.vue";
import BedahPlastik from "./jadwalpraktekdokter/polistoc/BedahPlastik.vue";
import BedahUmum from "./jadwalpraktekdokter/polistoc/BedahUmum.vue";
import BedahAnak from "./jadwalpraktekdokter/polistoc/BedahAnak.vue";
import BedahKepalaLeher from "./jadwalpraktekdokter/polistoc/BedahKepalaLeher.vue";
import BedahOnkologi from "./jadwalpraktekdokter/polistoc/BedahOnkologi.vue";
import BedahUrologi from "./jadwalpraktekdokter/polistoc/BedahUrologi.vue";
import IlmunologoAnak from "./jadwalpraktekdokter/polistoc/IlmunologoAnak.vue";
import Mata from "./jadwalpraktekdokter/polistoc/Mata.vue";
import BedahOrthopedi from "./jadwalpraktekdokter/polistoc/BedahOrthopedi.vue";
import SubSpesialisOnkologPoliStoc from "./jadwalpraktekdokter/polistoc/SubSpesialisOnkologPoliStoc.vue";
import SubSpesialisObginSosialPoliStoc from "./jadwalpraktekdokter/polistoc/SubSpesialisObginSosialPoliStoc.vue";
import SubSpesialisUroginekologiStoc from "./jadwalpraktekdokter/polistoc/SubSpesialisUroginekologiStoc.vue";
import SubSpesialisFetomaternalPoliStoc from "./jadwalpraktekdokter/polistoc/SubSpesialisFetomaternalPoliStoc.vue";
</script>

<template>
  <div class="relative lg:p-8">
    <!-- GRID 2 COLUMN -->
    <div class="grid grid-cols-1 lg:grid-cols-1 gap-10">
      <!-- COLUMN 1 -->
      <div>
        <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">
          JADWAL PRAKTEK DOKTER Poli A Instalasi Graha Amerta
        </h2>
        <PoliAnak />
        <PoliRadioterapi class="mt-5" />
        <PoliPenyakitSaraf class="mt-5" />
        <PoliIlmuKesTHT class="mt-5" />
        <PoliKedokteranFisik class="mt-5" />
        <PoliRadiologi class="mt-5" />
        <KlinikEstetikaKulit class="mt-5" />
        <KlinikEstetikaBedahPlastik class="mt-5" />
        <SubSpesialisOnkologi class="mt-5" />
        <SubSpesialisObginSosial class="mt-5" />
        <SubSpesialisUroginekologi class="mt-5" />
        <SubSpesialisFetomaternal class="mt-5" />
      </div>

      <!-- COLUMN 2 -->
      <div>
        <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">
          JADWAL PRAKTEK DOKTER Poli Privat Instalasi Graha Amerta - Paviliun Indraprasta
          STOC
        </h2>
        <SpesialisKesehatanKulitKelamin />
        <SpesialisGigiMulut class="mt-5" />
        <SpesialisKardiologidan class="mt-5" />
        <SpesialisIlmuPenyakitDalam class="mt-5" />
        <SpesialisPulmonologi class="mt-5" />
        <SpesialisIlumKedokteranJiwa class="mt-5" />
      </div>

      <!-- COLUMN 3 -->
      <div>
        <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">
          JADWAL PRAKTEK DOKTER POLI STOC Instalasi Graha Amerta
        </h2>
        <BedahSaraf />
        <BedahVaskuler class="mt-5" />
        <BedahDigestiv class="mt-5" />
        <BedahPlastik class="mt-5" />
        <BedahUmum class="mt-5" />
        <BedahAnak class="mt-5" />
        <BedahKepalaLeher class="mt-5" />
        <BedahOnkologi class="mt-5" />
        <BedahUrologi class="mt-5" />
        <IlmunologoAnak class="mt-5" />
        <Mata class="mt-5" />
        <BedahOrthopedi class="mt-5" />
        <SubSpesialisOnkologPoliStoc class="mt-5" />
        <SubSpesialisObginSosialPoliStoc class="mt-5" />
        <SubSpesialisUroginekologiStoc class="mt-5" />
        <SubSpesialisFetomaternalPoliStoc class="mt-5" />
      </div>
    </div>
  </div>
</template>
