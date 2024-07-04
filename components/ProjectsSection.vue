<template>
  <section class="projects" ref="projectsSection">
    <div class="content">
      <div class="text-section">
        <h1>MY PROJECT.</h1>
        <p>Proyek ini saya dedikasikan untuk band Radiohead. Di dalamnya, saya menampilkan berbagai karya saya, termasuk desain visual dan ilustrasi yang terinspirasi oleh musik dan estetika Radiohead & musik-musik yang saya kagumi.</p>
        <p>Proyek ini juga berfungsi sebagai portofolio pribadi, menunjukkan kemampuan saya dalam desain grafis dan kreativitas artistik.</p>
      </div>
      <div class="image-section">
        <div class="image-group">
          <img src="/assets/ad 4.jpg" alt="Image 1">
          <img src="/assets/Bateman.jpg" alt="Image 2">
          <img src="/assets/Lego White Stripes Iklan.jpg" alt="Image 3">
          <img src="/assets/Radiohead.jpg" alt="Image 4">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsSection',
  mounted() {
    // Tambahkan kelas 'fade-in' setelah komponen dimuat
    setTimeout(() => {
      this.$refs.projectsSection.classList.add('fade-in');
    }, 100); // Tambahkan sedikit penundaan untuk memberikan waktu bagi elemen untuk dimuat sepenuhnya

    // Tambahkan event listener untuk scroll
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    // Hapus event listener untuk scroll
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const section = this.$refs.projectsSection;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;

      // Hitung opasitas berdasarkan posisi scroll
      const opacity = Math.max(0, Math.min(1, 2.1 - (scrollTop - sectionTop + windowHeight) / sectionHeight));
      section.style.opacity = opacity;
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

.projects {
  padding: 50px 0;
  background: #ffffff;
  opacity: 0; /* Mulai dengan opasitas nol */
  transition: opacity 0.5s ease; /* Transisi untuk opasitas */
}

.projects.fade-in {
  opacity: 1; /* Opasitas kembali normal setelah elemen dimuat */
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
}

.text-section {
  flex: 1;
  margin-right: 15px;
  font-family: 'Poppins', sans-serif;
  text-align: left; /* Menyelaraskan teks ke kiri */
  align-self: center; /* Menyelaraskan teks di tengah vertikal */
}

.text-section h1 {
  font-size: 48px;
  margin: 0;
  font-weight: 700; /* Menambahkan gaya tebal */
}

.text-section p {
  margin: 20px 0;
  text-align: justify; /* Menyelaraskan teks secara rata kiri-kanan */
}

.image-section {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.image-group {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.image-group img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}
</style>
