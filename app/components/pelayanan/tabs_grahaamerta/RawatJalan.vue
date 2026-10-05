<script setup lang="ts">
import SpesialisAnak from "./rawatjalan/graha/SpesialisAnak.vue";
import SpesialisBedahOnkologi from "./rawatjalan/graha/SpesialisBedahOnkologi.vue";
import SpesialisOnkologiRadioTerapi from "./rawatjalan/graha/SpesialisOnkologiRadioTerapi.vue";
import SpesialisTHT from "./rawatjalan/graha/SpesialisTHT.vue";
import SpesialisDermatologi from "./rawatjalan/graha/SpesialisDermatologi.vue";
import Radiologi from "./rawatjalan/graha/Radiologi.vue";
import RehabilitasiMedik from "./rawatjalan/graha/RehabilitasiMedik.vue";
import SpesialisGigiMulut from "./rawatjalan/graha/SpesialisGigiMulut.vue";
import SpesialisPenyakitDalam from "./rawatjalan/graha/SpesialisPenyakitDalam.vue";
import SpesialisObstetri from "./rawatjalan/graha/SpesialisObstetri.vue";
import SpesialisKedokteranJiwa from "./rawatjalan/graha/SpesialisKedokteranJiwa.vue";
// End Rawat Jalan Graha Amerta
import SpesialisBedahSaraf from "./rawatjalan/stoc/SpesialisBedahSaraf.vue";
import SpesialisBedahDigestive from "./rawatjalan/stoc/SpesialisBedahDigestive.vue";
import SpesialisBedahVeskuler from "./rawatjalan/stoc/SpesialisBedahVeskuler.vue";
import SpesialisMata from "./rawatjalan/stoc/SpesialisMata.vue";
import SpesialisBedahKepalaLeher from "./rawatjalan/stoc/SpesialisBedahKepalaLeher.vue";
import SpesialisUrologi from "./rawatjalan/stoc/SpesialisUrologi.vue";
import SpesialisOrthopedi from "./rawatjalan/stoc/SpesialisOrthopedi.vue";
import SpesialisBedahOnkologiStoc from "./rawatjalan/stoc/SpesialisBedahOnkologiStoc.vue";
import SpesialisBedahAnak from "./rawatjalan/stoc/SpesialisBedahAnak.vue";
import KlinikImunoterapiAnak from "./rawatjalan/stoc/KlinikImunoterapiAnak.vue";
import KlinikEstetika from "./rawatjalan/stoc/KlinikEstetika.vue";
// End Rawat Inap Graha Amerta
</script>

<template>
  <div class="relative lg:p-8">
    <!-- GRID 2 COLUMN -->
    <div class="grid grid-cols-1 lg:grid-cols-1 gap-10">
      <!-- COLUMN 1 -->
      <div>
        <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">
          RAWAT JALAN GRAHA AMERTA
        </h2>

        <SpesialisAnak />
        <SpesialisBedahOnkologi class="mt-5" />
        <SpesialisOnkologiRadioTerapi class="mt-5" />
        <SpesialisTHT class="mt-5" />
        <SpesialisDermatologi class="mt-5" />
        <Radiologi class="mt-5" />
        <RehabilitasiMedik class="mt-5" />
        <SpesialisGigiMulut class="mt-5" />
        <SpesialisPenyakitDalam class="mt-5" />
        <SpesialisObstetri class="mt-5" />
        <SpesialisKedokteranJiwa class="mt-5" />
      </div>

      <!-- COLUMN 2 -->
      <div>
        <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">
          RAWAT INAP GRAHA AMERTA
        </h2>
        <SpesialisBedahSaraf />
        <SpesialisBedahDigestive class="mt-5" />
        <SpesialisBedahVeskuler class="mt-5" />
        <SpesialisMata class="mt-5" />
        <SpesialisBedahKepalaLeher class="mt-5" />
        <SpesialisUrologi class="mt-5" />
        <SpesialisOrthopedi class="mt-5" />
        <SpesialisBedahOnkologiStoc class="mt-5" />
        <SpesialisBedahAnak class="mt-5" />
        <KlinikImunoterapiAnak class="mt-5" />
        <KlinikEstetika class="mt-5" />
      </div>
    </div>
  </div>
</template>
