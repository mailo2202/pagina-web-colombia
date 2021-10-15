import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;


//estilos
import "@/styles/header/header.scss"
import "@/styles/landing.scss"
import "@/styles/fonts.scss"
import "@/styles/medias.scss"
import "@/styles/mixin.scss"
import "@/styles/styles.scss"
import "@/styles/landing/animate.css"
import "@/styles/landing/application.scss"
import "@/styles/landing/font-awesome.min.css"
import "@/styles/landing/landing.scss"
import "@/styles/landing/style.scss"
import "@/styles/application.scss"

import router from './router'

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
