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
          title="Pelayanan Bank Jaringan dan Regenerative Medicine"
          logo="/images/logo/logo_white.png"
        />
      </div>
      <!-- Menu -->
      <div class="bg-white rounded-2xl shadow-lg p-5">
        <div class="w-full rounded-3xl p-5 space-y-8">
          <BaseAccordion title="Profil" :defaultOpen="true">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              <ComponentCardRujukan
                :titles="[
                  'Kepala : Dr. Heri Suroto, dr., SpOT. Subsp. T.L.B.M(K), MARS,',
                ]"
                :subtitles="[
                  'Tempat : Instalasi Bank Jaringan, Gedung Pusat Diagnostik Terpadu (GPDT) Lantai 4, RSUD Dr. Soetomo',
                ]"
              />
            </div>
          </BaseAccordion>
          <!-- 1 -->
          <BaseAccordion title="Produk Layanan Unggulan" :defaultOpen="true">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
              <ComponentCardRujukan
                :titles="['Produk Biomaterial']"
                :items="[
                  'Amniotic Membrane',
                  'Bone Graft (Frozen dan Freeze dried)',
                  'Tendon Graft',
                ]"
              />
              <ComponentCardRujukan
                :titles="['Produk Sel']"
                :items="[
                  'Platelets Rich Plasma (PRP)',
                  'Platelets Rich Fibrin (PRF)',
                  'Mesenchymal Stem Cell',
                  'Hematopoitic Stem Cell',
                  'Secretome',
                ]"
              />
              <ComponentCardRujukan
                :titles="['Pengujian dan Penelitian']"
                :items="[
                  'Proses Demineralisasi',
                  'Proses Deproteinasi',
                  'Proses Furnish',
                  'Proses Freeze dried',
                  'Pengujian Kadar Air',
                  'Pengujian Sweeling',
                  'Pengujian Degradasi',
                  'Pengujian Absorbansi ',
                ]"
              />
              <ComponentCardRujukan
                :titles="['Penyimpanan']"
                :items="['Penyimpanan Calvaria (Batok Kepala)']"
              />
            </div>
          </BaseAccordion>
          <!-- 2 -->
          <BaseAccordion title="Layanan" :defaultOpen="true">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-0">
              <ComponentCardRujukan
                :titles="[
                  'Ketua Tim Regenerative Medicine : Prof. Dr. Ferdiansyah, dr., SpOT. Subsp. Onk.Ort.R(K)',
                  'Ketua Tim Bank Jaringan dan Sel : Dr. Heri Suroto, dr., SpOT. Subsp. T.L.B.M(K), MARS',
                  'Prof. Dr. Fedik A. Rantam, drh.',
                  'Prof. Dr. Dwikora N. Utomo, dr., SpOT. Subsp. P. L (K)',
                  'Dr. Mouli Edward, dr., M. Kes., SpOT. Subsp. Onk. Ort. R (K)',
                  'Tri Wahyu Martanto, dr., SpOT. Subsp. A (K)',
                  'Dr. Dhihinta Djiwangga Suta Winarno, SpB-TKV (K)',

                  'M. Hardian Basuki, dr., SpOT. Subsp. Onk. Ort. R (K)',
                  'Yuanita Safitri Dianti, dr., Sp. B. P. R. E. Subsp. T (K)',
                  'Jeffry Andrianus, dr., SpOT. Subsp. P. L (K)',
                  'Jifaldi Afrian Maharaja, dr., SpOT. Subsp. P. L (K)',
                  'Kukuh Dwiputra H., dr., SpOT. Subsp. P. L (K)',

                  'Lesmono',
                  'Endang Tris Handayani',
                  'Eddy Harianto',
                  'Trio Rachmawati, M.Si',
                  'Yulfaidah Ermawati, A.Md. Kep.',
                  'Analisa Sawiji Putriyekti, A.Md.AK.',
                  'Dewi Surya Lestiyani, S.Si.',
                  'Ika Sari Aprilia, A.Md. AM.',
                  'Annas Prasetyo Adi, M.Si.',
                  'Zahrotul Hasanah, S.Si.',
                  'Dina Ayu Pratiwi, S.Si.',
                  'Evlyn Anggraini Santoso, S.T.',
                  'Roni Imam Wahyudi, SE.',
                ]"
              />
            </div>
          </BaseAccordion>
          <!-- 3 -->
          <BaseAccordion title="Fasilitas Pelayanan" :defaultOpen="true">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-0">
              <ComponentCardRujukan :titles="['Ruang Clean room yang terstandar']" />
            </div>
          </BaseAccordion>
          <!-- 4 -->
          <BaseAccordion title="Kinerja Pelayanan" :defaultOpen="true">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-0">
              <ComponentCardRujukan
                :titles="[
                  'Saat ini Instalasi Bank Jaringan dan Sel telah memproduksi Produk Biomaterial dan Stem Cell. Produk Biomaterial tersebut meliputi :',
                ]"
                :items="[
                  'Amniotic Membrane',
                  'Bone Graft (Frozen dan Freeze dried)',
                  'Tendon Graft ',
                ]"
              />
              <ComponentCardRujukan
                :titles="['Produk Stem Cell meliputi :']"
                :items="[
                  'Platelets Rich Plasma (PRP)',
                  'Platelets Rich Fibrin (PRF)',
                  'Mesenchymal Stem Cell ',
                  'Hematopoitic Stem Cell',
                  'Secretome',
                ]"
              />
            </div>
          </BaseAccordion>
          <!-- 5 -->
          <BaseAccordion title="Penelitan dan Publikasi" :defaultOpen="true">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-0">
              <ComponentCardRujukan
                :titles="[
                  'Saat ini Instalasi Bank Jaringan dan Sel telah memproduksi Produk Biomaterial dan Stem Cell. Produk Biomaterial tersebut meliputi :',

                  'Kamadjaja DB, Purwati, Rantam FA, Ferdiansyah, Pramono C. The Osteogenic Capacity of Human Amniotic Membrane Mesenchymal Stem Cell (hAMSC) and Potential for Application in Maxillofacial Bone Reconstruction in Vitro Study. Journal Biomedical Science and Engineering. 2014; 7.',

                  'Kamadjaja DB, Purwati, Rantam FA, Ferdiansyah, Pramono C. Healing Mechanism and Osteogenic Capacity of Bovine Bone Mineral–Human Amniotic Mesenchymal Stem Cell and Autogenous Bone Graft in Critical Size Mandibular Defect. Journal Biomedical Science and Engineering. 2015; 8.',

                  'Rantam FA, Purwati, Setiawan B, Wibisono S, Ferdiansyah, Wahyuhadi J, et al. Induced Monocytes-Derived HSCs (CD34+) with LPS Accelerated Homing Rat Bone Marrow–Mesenchymal Stem Cell (BM-MSCs, CD105) in Injured Pancreas. Journal Biomedical Science and Engineering. 2015; 8.',

                  'Setiyaningsih R, Laswati H, Ferdiansyah, Rantam FA, Aulianni’am. Foam-Cell Signified Blood Vessel Endothelial Repair and Histopathology of Abdominal Aorta through Stem Cell Allogenous Therapy to Rats (Rattus norvegicus) with Atherosclerosis. International Journal of Pharmaceutical and Clinical Research. 2017; 9(1): 91–95.',

                  'Utomo DN, Rantam FA, Ferdiansyah, Purwati. Regeneration Mechanism of Full Thickness Cartilage Defect Using Combination of Freeze Dried Bovine Cartilage Scaffold–Allogenic Bone Marrow Mesenchymal Stem Cells–Platelet Rich Plasma Composite (SMPC) Implantation. Journal of Biomimetics, Biomaterials and Biomedical Engineering. 2017; 31: 70–82.',

                  'Mahyudin F, Utomo DN, Martanto TW, Hidayat AR, Putri LM. Effect of Decellularized Cartilage Bovine Scaffold and Hypoxic Condition on Stem Cell Differentiation to Chondrocyte: An In Vitro Study. Journal of Biomimetics, Biomaterials and Biomedical Engineering. 2018; 35: 67–76.',

                  'Utomo DN, Mahyudin F, Hernugrahanto KD, Suroto H, Chilmi MZ, Rantam FA. Implantation of Platelet Rich Fibrin and Allogenic Mesenchymal Stem Cells Facilitate the Healing of Muscle Injury: An Experimental Study on Animal. International Journal of Surgery Open. 2018; 11: 4–9.',

                  'Ferdiansyah, Roeshadi D, Rantam FA, Auliani’am. Regenerasi pada Massive Bone Defect dengan Bovine Hydroxyapatite sebagai Scaffold Mesenchymal Stem Cell. Jurnal Biosains Pascasarjana. 2011; 13(1).',

                  'Fathiyah S, Taat PS, Ferdiansyah. Nigella Sativa L Seed’s Extract Modulates Liver Regeneration by Affecting Endogenous Stem Cells in Liver Fibrosis Model of Rat. In: 1st International Conference in One Health (Malang); 2018.',

                  'Rantam FA, Ferdiansyah, Purwati, Utomo DN, Suroto H. Comparative Study: The Role of Stem Cell in Damaged Cell. In: 1st International Conference in One Health (Malang); 2018.',

                  'Setiawati R, Utomo DN, Rantam FA, Ifran NN, Budhiparama NC. Early Graft Tunnel Healing After Anterior Cruciate Ligament Reconstruction with Intratunnel Injection of Bone Marrow Mesenchymal Stem Cells and Vascular Endothelial Growth Factor. Orthopaedic Journal of Sports Medicine. 2017; 5(6): 1–8.',

                  'Mahyudin F, Utomo DN, Edward M, Widhiyanto L, Simanjuntak CA, Nikmatullah H. In Vitro Comparative Study of Osteogenic Differentiation Ability between Adipose and Bone Marrow Mesenchymal Stem Cell Applied to Bovine Demineralized Bone Matrix. Journal of Biomimetics, Biomaterials and Biomedical Engineering. 2018; 38: 59–66.',

                  'Suroto H, Pribadi A, Utomo DN, Mahyudin F, Widhiyanto W. Effect of Platelet-Rich Plasma and Amniotic Membrane in Patients with Rotator Cuff Repair. Journal of Biomimetics, Biomaterials and Biomedical Engineering. 2018; 39: 98–102.',

                  'Utomo DN, Mahyudin F, Wardhana TH, Purwati, Brahmana F, Gusti AWR. Physicobiochemical Characteristics and Chondrogenic Differentiation of Bone Marrow Mesenchymal Stem Cells (hBM-MSCs) in Biodegradable Porous Sponge Bovine Cartilage Scaffold. International Journal of Biomaterials. 2019: 1–11.',

                  'Utomo DN, Hernugrahanto KD, Edward M, Widhiyanto L, Mahyudin F. Combination of Bone Marrow Aspirate, Cancellous Bone Allograft, and Platelet-Rich Plasma as an Alternative Solution to Critical-Sized Diaphyseal Bone Defect: A Case Series. International Journal of Surgery Case Reports. 2019; 58: 178–185.',
                ]"
              />
            </div>
          </BaseAccordion>
          <!-- 6 -->
          <BaseAccordion title="Jejaring Rumah Sakit Mitra" :defaultOpen="true">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-0">
              <ComponentCardRujukan
                :titles="[
                  'RS ST Vincentius A. Paulo',
                  'RS Al Irsyad',
                  'RS William Booth',
                  'RS Soewandhi',
                ]"
              />
            </div>
          </BaseAccordion>
          <!-- 7 -->
          <BaseAccordion title="Agenda Kegiatan Ilmiah Mendatang" :defaultOpen="true">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-0">
              <ComponentCardRujukan
                :titles="[
                  'Asia Pacific Association of Surgical Tissue Bank (APASTB) 2026',
                ]"
              />
            </div>
          </BaseAccordion>
          <!-- 8 -->
          <BaseAccordion title="Penelitian dan Publikasi" :defaultOpen="true">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-0">
              <ComponentCardRujukan
                :titles="[
                  'Instalasi Bank Jaringan dapat diakses di Gedung Pusat Diagnostik Terpadu (GPDT) Lantai 4, RSUD Dr. Soetomo',
                ]"
              />
            </div>
          </BaseAccordion>
          <!-- 9 -->
          <BaseAccordion title="Cara Merujuk" :defaultOpen="true">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-0">
              <ComponentCardRujukan :titles="['-']" />
            </div>
          </BaseAccordion>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Breadcrumb from "~/components/layout/Breadcrumb.vue";
import BaseHeroPage from "~/components/form/BaseHeroPage.vue";
import BaseAccordion from "~/components/form/BaseAccordion.vue";
import ComponentCardRujukan from "~/components/rujukan/ComponentCardRujukan.vue";

useHead({
  title: "Pelayanan Bank Jaringan",
});

definePageMeta({
  breadcrumb: [
    { label: "Beranda", to: "/" },
    { label: "Pelayanan Bank Jaringan dan Regenerative Medicine" },
  ],
});
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
