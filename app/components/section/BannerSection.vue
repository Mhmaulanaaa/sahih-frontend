<template>
  <section class="zona-section">
    <div class="zona-banner">
      <!-- ==========================================
           GAMBAR BASE
      =========================================== -->
      <img
        src="/images/logo/zi-new.webp"
        alt="Zona Integritas RSUD Dr. Soetomo"
        class="zona-base-image"
      />

      <!-- ==========================================
           OVERLAY CONTENT
      =========================================== -->
      <div class="zona-overlay">
        <!-- ========================================
             TEKS KIRI
        ========================================= -->
        <div class="hero-title">
          <div class="hero-small">ANDA MEMASUKI</div>

          <div class="hero-main">ZONA INTEGRITAS</div>

          <div class="hero-hospital">RSUD Dr. Soetomo</div>
        </div>

        <!-- ========================================
             TEKS KANAN
        ========================================= -->
        <!-- ========================================
     WBK / WBBM
========================================= -->
        <div class="wbk-wrapper">
          <div class="wbk-text">
            <div class="wbk-line">
              <span>WILAYAH BEBAS DARI KORUPSI</span>
              <strong>(WBK)</strong>
            </div>

            <div class="wbk-line">
              <span class="wbk-and">&</span>
              <span>WILAYAH BIROKRASI BERSIH</span>
            </div>

            <div class="wbk-line">
              <span>DAN MELAYANI</span>
              <strong>(WBBM)</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* =========================================================
   SECTION
========================================================= */

.zona-section {
  width: 100%;
  padding: 20px 10px;
  box-sizing: border-box;
}

/* =========================================================
   BANNER
========================================================= */

.zona-banner {
  position: relative;

  width: 100%;
  max-width: 1216px;

  margin: 0 auto;

  overflow: hidden;

  border-radius: clamp(6px, 1vw, 15px);

  background: #ffffff;

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);

  /* cqw mengikuti ukuran banner */
  container-type: inline-size;

  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

/* =========================================================
   HOVER
========================================================= */

.zona-banner:hover {
  transform: translateY(-5px);

  box-shadow: 0 16px 35px rgba(0, 0, 0, 0.18);
}

/* =========================================================
   BASE IMAGE
========================================================= */

.zona-base-image {
  display: block;

  width: 100%;
  height: auto;

  user-select: none;
  pointer-events: none;
}

/* =========================================================
   OVERLAY
========================================================= */

.zona-overlay {
  position: absolute;

  inset: 0;

  width: 100%;
  height: 100%;
}

/* =========================================================
   HERO TITLE — KIRI
========================================================= */

.hero-title {
  position: absolute;

  /*
    Posisi teks mengikuti area hitam
  */
  left: -1%;
  top: 50%;

  width: 38%;

  transform: translateY(-50%);

  text-align: center;

  z-index: 10;
}

/* =========================================================
   ANDA MEMASUKI
========================================================= */

.hero-small {
  color: #ffffff;

  font-family: Impact, "Arial Narrow", Arial, sans-serif;

  font-size: clamp(6px, 3cqw, 36px);

  font-weight: 900;

  line-height: 1;

  white-space: nowrap;
}

/* =========================================================
   ZONA INTEGRITAS
========================================================= */

.hero-main {
  margin-top: clamp(1px, 0.55cqw, 7px);

  color: #ff252d;

  font-family: Impact, "Arial Narrow", Arial, sans-serif;

  font-size: clamp(10px, 4cqw, 60px);

  font-weight: 900;

  line-height: 0.9;

  letter-spacing: -0.02cqw;

  white-space: nowrap;
}

/* =========================================================
   RSUD DR SOETOMO
========================================================= */

.hero-hospital {
  margin-top: clamp(1px, 0.65cqw, 8px);

  color: #ffffff;

  font-family: Arial, sans-serif;

  font-size: clamp(5px, 2cqw, 25px);

  font-weight: 800;

  line-height: 1;

  white-space: nowrap;
}
/* =========================================================
   WBK / WBBM WRAPPER
========================================================= */

.wbk-wrapper {
  position: absolute;

  /*
   * Posisi area kanan banner
   * Tidak menggunakan right agar posisi mengikuti
   * pembagian kotak/banner.
   */
  left: 74%;
  top: 50%;

  /*
   * Lebar mengikuti area kanan
   */
  width: 23%;

  transform: translateY(-50%);

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 20;

  /*
   * Supaya ukuran relatif terhadap banner/container
   */
  container-type: inline-size;
}

.wbk-text {
  width: 100%;

  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: center;

  color: #111111;

  font-family: Arial, sans-serif;

  /*
   * Mengikuti ukuran kotak WBK
   */
  font-size: clamp(6px, 1.1vw, 15px);

  font-weight: 800;

  line-height: 1.15;

  text-align: left;

  white-space: nowrap;
}

/* =========================================================
   SETIAP BARIS
========================================================= */

.wbk-line {
  display: flex;

  align-items: center;
  justify-content: flex-start;

  width: 100%;

  gap: clamp(1px, 0.8cqw, 4px);
}

/* =========================================================
   WBK / WBBM
========================================================= */

.wbk-text strong {
  color: #111111;

  font-weight: 900;

  white-space: nowrap;
}

/* =========================================================
   &
========================================================= */

.wbk-and {
  color: #111111;

  font-weight: 900;

  margin-right: clamp(1px, 0.6cqw, 3px);
}

/* =========================================================
   LAPTOP
========================================================= */

@media (max-width: 1200px) {
  .zona-section {
    padding: 30px 20px;
  }

  .hero-title {
    left: -2%;
    width: 38%;
  }

  .wbk-wrapper {
    /*
     * Tetap di kotak kanan
     */
    left: 74%;
    width: 24%;
  }

  .wbk-text {
    font-size: clamp(6px, 5cqw, 18px);
    line-height: 1.15;
  }
}

/* =========================================================
   TABLET
========================================================= */

/* =========================================================
   TABLET
========================================================= */

@media (max-width: 768px) {
  .zona-section {
    padding: 15px;
  }

  .zona-banner {
    border-radius: 9px;
  }

  .hero-title {
    left: -2%;
    width: 38%;
  }

  .wbk-wrapper {
    /*
     * Tetap di area kanan
     */
    left: 76%;
    width: 29%;
  }

  .wbk-text {
    /*
     * Diperkecil agar seluruh tulisan
     * tetap masuk ke dalam kotak
     */
    font-size: clamp(5px, 3.2cqw, 11px);

    line-height: 1.1;

    /*
     * Pastikan tidak melewati wrapper
     */
    max-width: 100%;
  }

  .wbk-line {
    width: 100%;
    gap: clamp(1px, 0.5cqw, 3px);
  }
}

/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 480px) {
  .zona-section {
    padding: 15px 10px;
  }

  .zona-banner {
    border-radius: 6px;
  }

  .hero-title {
    left: 2%;
    width: 38%;
  }

  .wbk-wrapper {
    /*
     * Area kanan dibuat sedikit lebih lebar
     * agar teks tidak keluar.
     */
    left: 67%;
    width: 31%;
  }

  .hero-small {
    font-size: clamp(5px, 3.05cqw, 18px);
  }

  .hero-main {
    font-size: clamp(7px, 4.8cqw, 28px);
  }

  .hero-hospital {
    font-size: clamp(5px, 2.65cqw, 15px);
  }

  .wbk-text {
    /*
     * Ukuran lebih kecil dan stabil
     */
    font-size: clamp(4px, 2.8cqw, 8px);

    line-height: 1.1;

    max-width: 100%;
  }

  .wbk-line {
    width: 100%;
    gap: clamp(1px, 0.4cqw, 2px);
  }
}

/* =========================================================
   VERY SMALL MOBILE
========================================================= */

@media (max-width: 360px) {
  .zona-section {
    padding: 12px 6px;
  }

  .zona-banner {
    border-radius: 5px;
  }

  .wbk-wrapper {
    /*
     * Beri ruang sedikit lebih besar
     * untuk teks panjang WBK/WBBM
     */
    left: 65%;
    width: 33%;
  }

  .wbk-text {
    font-size: clamp(3px, 2.5cqw, 7px);

    line-height: 1.05;

    max-width: 100%;
  }

  .wbk-line {
    gap: 1px;
  }
}
</style>
