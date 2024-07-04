<template>
  <section class="image-section" ref="imageSection">
    <div class="background-black"></div>
    <div class="content-wrapper">
      <div class="image-container">
        <img src="/assets/Control.png" alt="" class="foreground-image" />
      </div>
    </div>
    <div class="text-container">
      <h2 class="section-title">THE HOBBY I LOVE.</h2>
      <p>
        Saya adalah seorang pecinta film yang gemar menulis ulasan film sebagai hobi. Saya menonton berbagai genre film dan menikmati menganalisis alur cerita, karakter, sinematografi, dan pesan yang disampaikan. Melalui ulasan saya, saya berharap dapat membantu teman-teman menemukan film-film menarik dan berbagi pandangan saya tentang dunia perfilman.
      </p>
      <a href="https://www.facebook.com/share/yrVyd7t83aLKRNX8/?mibextid=qi2Omg" class="follow-button">My Post!</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ImageSection',
  mounted() {
    // Tambahkan kelas 'fade-in' setelah komponen dimuat
    setTimeout(() => {
      this.$refs.imageSection.classList.add('fade-in');
    }, 100); // Tambahkan sedikit penundaan untuk memberikan waktu bagi elemen untuk dimuat sepenuhnya

    // Tambahkan event listener untuk scroll
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll(); // Panggil fungsi handleScroll saat mounting komponen untuk mengatur opacity awal
  },
  beforeDestroy() {
    // Hapus event listener untuk scroll
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const section = this.$refs.imageSection;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;

      // Hitung opasitas berdasarkan posisi scroll
      const opacity = Math.max(0, Math.min(2, 2.2 - (scrollTop - sectionTop + windowHeight) / sectionHeight));
      section.style.opacity = opacity;
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.image-section {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  font-family: 'Poppins';
  background-color: #FFF;
  padding-left: 100px;
  position: relative;
  opacity: 0; /* Mulai dengan opasitas nol */
  animation: fadeIn 1.5s ease forwards; /* Animasi fade-in */
}

.image-section.fade-out {
  animation: fadeOut 1.5s ease forwards; /* Animasi fade-out */
}

.content-wrapper {
  position: relative;
  width: 50%;
  height: auto;
  border-radius: 20px;
  overflow: hidden;
}

.background-black {
  position: absolute;
  top: 0;
  left: 100px; /* Perbaiki posisi left */
  width: 42%;
  height: 95%;
  background-color: #000000;
  z-index: 1;
  border-radius: 20px;
}

.image-container {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  padding: 1px;
}

.foreground-image {
  width: 96%;
  height: auto;
}

.text-container {
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
  width: 50%;
  margin-left: 150px; /* Geser ke kanan */
  line-height: 1.6; /* Jarak antar baris */
  text-align: justify; /* Ratakan teks */
  z-index: 2;
}

.section-title {
  font-family: 'Poppins';
  font-weight: bold;
  font-size: 48px;
  margin-bottom: 10px;
  margin-left: 0px; /* Geser ke kanan */
  line-height: 1.6; /* Jarak antar baris */
  text-align: justify; /* Ratakan teks */
}

.follow-button {
  display: inline-block;
  background-color: #000000; /* Warna latar belakang */
  color: #ffffff; /* Warna teks */
  text-decoration: none; /* Hapus dekorasi link */
  padding: 10px 20px; /* Padding */
  border-radius: 5px; /* Sudut melengkung */
  margin-top: 20px; /* Jarak dari paragraf terakhir */
  transition: background-color 0.3s ease; /* Transisi warna latar belakang */
}

.follow-button:hover {
  background-color: #333333; /* Warna latar belakang saat hover */
}
</style>
