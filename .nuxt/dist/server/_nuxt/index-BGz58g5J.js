import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "devalue";
const _imports_0$3 = "" + __buildAssetsURL("thom yorke is such a rock star(1) png.CqfnwGdG.png");
const _sfc_main$4 = {
  name: "ContactSection",
  mounted() {
    setTimeout(() => {
      this.$refs.contactSection.classList.add("fade-in");
    }, 100);
    (void 0).addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    (void 0).removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const section = this.$refs.contactSection;
      const scrollTop = (void 0).pageYOffset || (void 0).documentElement.scrollTop;
      const sectionHeight = section.offsetHeight;
      const opacity = Math.max(0, 1.4 - scrollTop / sectionHeight);
      section.style.opacity = opacity;
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "Contact",
    ref: "contactSection"
  }, _attrs))} data-v-bb93f529><div id="background-image" data-v-bb93f529></div><div id="container" data-v-bb93f529><div class="container__image" data-v-bb93f529><img${ssrRenderAttr("src", _imports_0$3)} id="logo" alt="Maison Mauricette&#39;s logo" data-v-bb93f529></div><div class="text-wrapper" data-v-bb93f529><div class="overlay-text" data-v-bb93f529><strong data-v-bb93f529>Hello.</strong></div><div class="small-text" data-v-bb93f529><p data-v-bb93f529>Saya adalah penggemar berat Radiohead, mengekspresikan cinta saya pada musik mereka dengan apresiasi yang mendalam terhadap karya mereka.</p><p data-v-bb93f529>Sebagai pecinta film, saya menyukai berbagai genre dan menghargai aspek-aspek artistik dan cerita di dalamnya.</p><p data-v-bb93f529>Ketertarikan saya pada desain grafis juga memungkinkan saya untuk mengeksplorasi estetika visual, komposisi, dan desain dalam berbagai format.</p><a href="mailto:alvinsuherdi@students.amikom.ac.id" class="follow-button" data-v-bb93f529>Contact Me</a></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-bb93f529"]]);
const _imports_0$2 = "" + __buildAssetsURL("ad 4.CSmwQdDA.jpg");
const _imports_1 = "" + __buildAssetsURL("Bateman.BIX4Hs5W.jpg");
const _imports_2 = "" + __buildAssetsURL("Lego White Stripes Iklan.CgcMUGdB.jpg");
const _imports_3 = "" + __buildAssetsURL("Radiohead.DnpOrkwV.jpg");
const _sfc_main$3 = {
  name: "ProjectsSection",
  mounted() {
    setTimeout(() => {
      this.$refs.projectsSection.classList.add("fade-in");
    }, 100);
    (void 0).addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    (void 0).removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const section = this.$refs.projectsSection;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollTop = (void 0).pageYOffset || (void 0).documentElement.scrollTop;
      const windowHeight = (void 0).innerHeight;
      const opacity = Math.max(0, Math.min(1, 2.1 - (scrollTop - sectionTop + windowHeight) / sectionHeight));
      section.style.opacity = opacity;
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "projects",
    ref: "projectsSection"
  }, _attrs))} data-v-cbadadaf><div class="content" data-v-cbadadaf><div class="text-section" data-v-cbadadaf><h1 data-v-cbadadaf>MY PROJECT.</h1><p data-v-cbadadaf>Proyek ini saya dedikasikan untuk band Radiohead. Di dalamnya, saya menampilkan berbagai karya saya, termasuk desain visual dan ilustrasi yang terinspirasi oleh musik dan estetika Radiohead &amp; musik-musik yang saya kagumi.</p><p data-v-cbadadaf>Proyek ini juga berfungsi sebagai portofolio pribadi, menunjukkan kemampuan saya dalam desain grafis dan kreativitas artistik.</p></div><div class="image-section" data-v-cbadadaf><div class="image-group" data-v-cbadadaf><img${ssrRenderAttr("src", _imports_0$2)} alt="Image 1" data-v-cbadadaf><img${ssrRenderAttr("src", _imports_1)} alt="Image 2" data-v-cbadadaf><img${ssrRenderAttr("src", _imports_2)} alt="Image 3" data-v-cbadadaf><img${ssrRenderAttr("src", _imports_3)} alt="Image 4" data-v-cbadadaf></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectsSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-cbadadaf"]]);
const _imports_0$1 = "" + __buildAssetsURL("Control.BsXbxOZf.png");
const _sfc_main$2 = {
  name: "ImageSection",
  mounted() {
    setTimeout(() => {
      this.$refs.imageSection.classList.add("fade-in");
    }, 100);
    (void 0).addEventListener("scroll", this.handleScroll);
    this.handleScroll();
  },
  beforeDestroy() {
    (void 0).removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const section = this.$refs.imageSection;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollTop = (void 0).pageYOffset || (void 0).documentElement.scrollTop;
      const windowHeight = (void 0).innerHeight;
      const opacity = Math.max(0, Math.min(2, 2.2 - (scrollTop - sectionTop + windowHeight) / sectionHeight));
      section.style.opacity = opacity;
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "image-section",
    ref: "imageSection"
  }, _attrs))} data-v-d96256f8><div class="background-black" data-v-d96256f8></div><div class="content-wrapper" data-v-d96256f8><div class="image-container" data-v-d96256f8><img${ssrRenderAttr("src", _imports_0$1)} alt="" class="foreground-image" data-v-d96256f8></div></div><div class="text-container" data-v-d96256f8><h2 class="section-title" data-v-d96256f8>THE HOBBY I LOVE.</h2><p data-v-d96256f8> Saya adalah seorang pecinta film yang gemar menulis ulasan film sebagai hobi. Saya menonton berbagai genre film dan menikmati menganalisis alur cerita, karakter, sinematografi, dan pesan yang disampaikan. Melalui ulasan saya, saya berharap dapat membantu teman-teman menemukan film-film menarik dan berbagi pandangan saya tentang dunia perfilman. </p><a href="https://www.facebook.com/share/yrVyd7t83aLKRNX8/?mibextid=qi2Omg" class="follow-button" data-v-d96256f8>My Post!</a></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HobbySection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-d96256f8"]]);
const _imports_0 = "" + __buildAssetsURL("Name.D3Un52bg.jpg");
const _sfc_main$1 = {
  name: "HeroSection"
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" data-v-438a4e85><section class="hero" id="hero" data-v-438a4e85><div class="container" data-v-438a4e85><div class="main-body" data-v-438a4e85><div class="row gutters-sm" data-v-438a4e85><div class="col-md-4 mb-3" data-v-438a4e85><div class="card" data-v-438a4e85><div class="card-body" data-v-438a4e85><div class="d-flex flex-column align-items-center text-center" data-v-438a4e85><img${ssrRenderAttr("src", _imports_0)} alt="Admin" class="rounded-circle" width="150" data-v-438a4e85><div class="mt-3" data-v-438a4e85><h4 data-v-438a4e85>Alvin Haris Suherdi</h4><p class="text-secondary mb-1" data-v-438a4e85>Graphic Design</p><p class="text-muted font-size-sm" data-v-438a4e85>Bantul, Jogja</p></div></div></div></div></div><div class="col-md-8" data-v-438a4e85><div class="card mb-3" data-v-438a4e85><div class="card-body" data-v-438a4e85><div class="row" data-v-438a4e85><div class="col-sm-3" data-v-438a4e85><h6 class="mb-0" data-v-438a4e85>Full Name</h6></div><div class="col-sm-9 text-secondary" data-v-438a4e85> Alvin Haris Suherdi </div></div><hr data-v-438a4e85><div class="row" data-v-438a4e85><div class="col-sm-3" data-v-438a4e85><h6 class="mb-0" data-v-438a4e85>Email</h6></div><div class="col-sm-9 text-secondary" data-v-438a4e85> alvinsuherdi@students.amikom.ac.id </div></div><hr data-v-438a4e85><div class="row" data-v-438a4e85><div class="col-sm-3" data-v-438a4e85><h6 class="mb-0" data-v-438a4e85>Phone</h6></div><div class="col-sm-9 text-secondary" data-v-438a4e85> (+62) 6969-6969 </div></div><hr data-v-438a4e85><div class="row" data-v-438a4e85><div class="col-sm-3" data-v-438a4e85><h6 class="mb-0" data-v-438a4e85>Mobile</h6></div><div class="col-sm-9 text-secondary" data-v-438a4e85> (+62) 6969-6969 </div></div><hr data-v-438a4e85><div class="row" data-v-438a4e85><div class="col-sm-3" data-v-438a4e85><h6 class="mb-0" data-v-438a4e85>Address</h6></div><div class="col-sm-9 text-secondary" data-v-438a4e85> Bantul, Jogja </div></div><hr data-v-438a4e85></div></div></div><div class="col-md-4 offset-md-4" data-v-438a4e85><div class="card mt-3" data-v-438a4e85><ul class="list-group list-group-flush" data-v-438a4e85><li class="list-group-item d-flex justify-content-between align-items-center flex-wrap" data-v-438a4e85><h6 class="mb-0" data-v-438a4e85><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe mr-2 icon-inline" data-v-438a4e85><circle cx="12" cy="12" r="10" data-v-438a4e85></circle><line x1="2" y1="12" x2="22" y2="12" data-v-438a4e85></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" data-v-438a4e85></path></svg> Website </h6><a href="https://radiohead.com/" class="link-black" data-v-438a4e85>Radiohead.com</a></li><li class="list-group-item d-flex justify-content-between align-items-center flex-wrap" data-v-438a4e85><h6 class="mb-0" data-v-438a4e85><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github mr-2 icon-inline" data-v-438a4e85><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" data-v-438a4e85></path></svg> Github </h6><a href="https://github.com/AlvinHaris" class="link-black" data-v-438a4e85>LuckyFat</a></li><li class="list-group-item d-flex justify-content-between align-items-center flex-wrap" data-v-438a4e85><h6 class="mb-0" data-v-438a4e85><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info" data-v-438a4e85><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" data-v-438a4e85></path></svg> Twitter </h6><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="link-black" data-v-438a4e85>LuckyFat</a></li><li class="list-group-item d-flex justify-content-between align-items-center flex-wrap" data-v-438a4e85><h6 class="mb-0" data-v-438a4e85><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram mr-2 icon-inline text-danger" data-v-438a4e85><rect x="2" y="2" width="20" height="20" rx="5" ry="5" data-v-438a4e85></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" data-v-438a4e85></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" data-v-438a4e85></line></svg> Instagram </h6><a href="https://www.instagram.com/crwbr.alvin" class="link-black" data-v-438a4e85>Crwbr.alvin</a></li><li class="list-group-item d-flex justify-content-between align-items-center flex-wrap" data-v-438a4e85><h6 class="mb-0" data-v-438a4e85><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook mr-2 icon-inline text-primary" data-v-438a4e85><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" data-v-438a4e85></path></svg> Facebook </h6><a href="https://www.facebook.com/share/JFVAjCYLLK5ouF9q/?mibextid=qi2Omg" class="link-black" data-v-438a4e85>Crowbar Alvin</a></li></ul></div></div></div></div></div></section><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-438a4e85"]]);
const _sfc_main = {
  components: {
    ProjectsSection: __nuxt_component_1,
    HeroSection: __nuxt_component_3,
    HobbySection: __nuxt_component_2,
    ContactSection: __nuxt_component_0
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ContactSection = __nuxt_component_0;
  const _component_ProjectsSection = __nuxt_component_1;
  const _component_HobbySection = __nuxt_component_2;
  const _component_HeroSection = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(_attrs)}><nav class="navbar bg-body-tertiary"><div class="container-fluid"><a class="navbar-brand" href="#"><img src="https://i.pinimg.com/originals/32/ba/b6/32bab62867d0cace5f3b614314e9d959.png" alt="Logo" width="40" height="40" class="d-inline-block align-text-top"><span class="brand-name">ME!</span></a><nav class="navbar navbar-expand-lg bg-body-tertiary"><div class="container-fluid justify-content-center"><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup"><div class="navbar-nav"><a class="nav-link active text-dark" aria-current="page" href="#home">HOME.</a><a class="nav-link text-dark" href="#projects">PROJECT.</a><a class="nav-link text-dark" href="#hobby">HOBBY.</a><a class="nav-link text-dark" href="#hero">ABOUT.</a></div></div></div></nav></div></nav>`);
  _push(ssrRenderComponent(_component_ContactSection, { id: "home" }, null, _parent));
  _push(ssrRenderComponent(_component_ProjectsSection, { id: "projects" }, null, _parent));
  _push(ssrRenderComponent(_component_HobbySection, { id: "hobby" }, null, _parent));
  _push(ssrRenderComponent(_component_HeroSection, { id: "hero" }, null, _parent));
  _push(`<footer class="footer"><div class="container"><div class="row"><div class="col text-center"><h5 class="brand-name">Me!</h5><ul class="list-inline"><li class="list-inline-item"><a href="#home">HOME.</a></li><li class="list-inline-item"><a href="#projects">PROJECT.</a></li><li class="list-inline-item"><a href="#hobby">HOBBY.</a></li><li class="list-inline-item"><a href="#hero">ABOUT.</a></li></ul><ul class="list-inline social-media"><li class="list-inline-item"><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img src="https://dwglogo.com/wp-content/uploads/2019/02/Twitter_logo.png" alt="Twitter" width="34" height="24"></a></li><li class="list-inline-item"><a href="https://www.facebook.com/share/JFVAjCYLLK5ouF9q/?mibextid=qi2Omg"><img src="https://cdn.icon-icons.com/icons2/1826/PNG/512/4202107facebookfblogosocialsocialmedia-115710_115591.png" alt="Facebook" width="24" height="24"></a></li><li class="list-inline-item"><a href="https://www.instagram.com/crwbr.alvin"><img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/62-instagram-512.png" alt="Instagram" width="24" height="24"></a></li></ul><p class="small-text">© Made by Alvin Haris Suherdi.</p></div></div></div></footer></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-BGz58g5J.js.map
