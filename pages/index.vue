<template>
  <div>
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="https://i.pinimg.com/originals/32/ba/b6/32bab62867d0cace5f3b614314e9d959.png" alt="Logo" width="40" height="40" class="d-inline-block align-text-top">
          <span class="brand-name">ME!</span>
        </a>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid justify-content-center"> 
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link active text-dark" aria-current="page" href="#home">HOME.</a>
                <a class="nav-link text-dark" href="#projects">PROJECT.</a>
                <a class="nav-link text-dark" href="#hobby">HOBBY.</a>
                <a class="nav-link text-dark" href="#hero">ABOUT.</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </nav>
    <ContactSection id="home" />
    <ProjectsSection id="projects" />
    <HobbySection id="hobby" />
    <HeroSection id="hero" />
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <h5 class="brand-name">Me!</h5>
            <ul class="list-inline">
              <li class="list-inline-item"><a href="#home">HOME.</a></li>
              <li class="list-inline-item"><a href="#projects">PROJECT.</a></li>
              <li class="list-inline-item"><a href="#hobby">HOBBY.</a></li>
              <li class="list-inline-item"><a href="#hero">ABOUT.</a></li>
            </ul>
            <ul class="list-inline social-media">
              <li class="list-inline-item">
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                  <img src="https://dwglogo.com/wp-content/uploads/2019/02/Twitter_logo.png" alt="Twitter" width="34" height="24">
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://www.facebook.com/share/JFVAjCYLLK5ouF9q/?mibextid=qi2Omg">
                  <img src="https://cdn.icon-icons.com/icons2/1826/PNG/512/4202107facebookfblogosocialsocialmedia-115710_115591.png" alt="Facebook" width="24" height="24">
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://www.instagram.com/crwbr.alvin">
                  <img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/62-instagram-512.png" alt="Instagram" width="24" height="24">
                </a>
              </li>
            </ul>
            <p class="small-text">© Made by Alvin Haris Suherdi.</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import HobbySection from '~/components/HobbySection.vue';
import ProjectsSection from '~/components/ProjectsSection.vue';
import ContactSection from '~/components/ContactSection.vue';
import HeroSection from '~/components/HeroSection.vue';

export default {
  components: {
    ProjectsSection, HeroSection, HobbySection, ContactSection
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

.navbar .nav-link,
.navbar .navbar-brand {
  color: black !important;
  font-family: 'Poppins';
}

.navbar .brand-name {
  font-weight: bold;
}

.footer {
  background-color: #000;
  color: #fff;
  padding: 20px 0;
  font-family: 'Poppins';
}

.footer .brand-name {
  font-weight: bold;
}

.footer h5 {
  color: #fff;
  margin-bottom: 20px;
}

.footer .list-inline-item a {
  color: #a8a8a8;
  text-decoration: none;
  padding: 0 10px;
}

.footer .list-inline-item a:hover {
  color: #fff;
}

.footer .social-media .list-inline-item {
  margin: 0 10px;
}

.footer .social-media .list-inline-item a {
  display: inline-block;
}

.footer .small-text {
  color: #a8a8a8;
  font-size: 12px;
  margin-top: 20px;
}
</style>
