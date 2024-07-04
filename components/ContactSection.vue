<template>
  <section class="Contact" ref="contactSection">
    <div id="background-image"></div>
    <div id="container">
      <div class="container__image">
        <img src="/assets/thom yorke is such a rock star(1) png.png" id="logo" alt="Maison Mauricette's logo">
      </div>
      <div class="text-wrapper">
        <div class="overlay-text"><strong>Hello.</strong></div>
        <div class="small-text">
          <p>Saya adalah penggemar berat Radiohead, mengekspresikan cinta saya pada musik mereka dengan apresiasi yang mendalam terhadap karya mereka.</p>
          <p>Sebagai pecinta film, saya menyukai berbagai genre dan menghargai aspek-aspek artistik dan cerita di dalamnya.</p>
          <p>Ketertarikan saya pada desain grafis juga memungkinkan saya untuk mengeksplorasi estetika visual, komposisi, dan desain dalam berbagai format.</p>
          <a href="mailto:alvinsuherdi@students.amikom.ac.id" class="follow-button">Contact Me</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  mounted() {
    // Tambahkan kelas 'fade-in' setelah komponen dimuat
    setTimeout(() => {
      this.$refs.contactSection.classList.add('fade-in');
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
      const section = this.$refs.contactSection;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const sectionHeight = section.offsetHeight;
      
      // Hitung opasitas berdasarkan posisi scroll
      const opacity = Math.max(0, 1.4 - scrollTop / sectionHeight);
      section.style.opacity = opacity;
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

.Contact {
  position: relative;
  padding: 90px 20px; /* Increase padding and add some horizontal padding */
  background: #ffffff;
  opacity: 0; /* Mulai dengan opasitas nol */
  transition: opacity 0.5s ease; /* Transisi untuk opasitas */
  max-width: 1200px; /* Set maximum width to prevent it from being too wide */
  margin: 0 auto; /* Center the section horizontally */
  font-family: 'Poppins'; /* Tambahkan font Poppins */
}

.Contact.fade-in {
  opacity: 1; /* Opasitas kembali normal setelah elemen dimuat */
}

#container {
  display: flex;
  align-items: center; /* Center vertically */
  justify-content: space-between; /* Space between elements */
  position: relative;
}

.container__image {
  width: 40%; /* Adjust this value as needed */
}

.container__image img {
  opacity: 0.7;
  width: 100%;
  height: auto;
}

.text-wrapper {
  flex: 1; /* Mengisi ruang kosong */
}

.overlay-text {
  font-size: 700%; /* Ukuran font dalam persen */
  font-weight: bold; /* Ketebalan font */
  position: relative; /* Menambahkan posisi relatif */
  left: 150px; /* Menggeser teks ke kiri */
  margin-bottom: 0.1px; /* Sesuaikan jarak dengan small-text */
}

.small-text {
  font-size: 94%; /* Ukuran font dalam persen */
  color: #555; /* Warna teks */
  margin-left: 150px; /* Geser ke kanan */
  line-height: 1.6; /* Jarak antar baris */
  text-align: justify; /* Ratakan teks */
}

.small-text p {
  margin-bottom: 4px; /* Jarak antar paragraf */
  margin-top: 0.2px; /* Sesuaikan jarak dengan tulisan besar */
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
