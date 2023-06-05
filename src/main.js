import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import VueSplide from "@splidejs/vue-splide";
import LazyLoad from "lazy-load-vue3";
import axios from "axios";
import VueAxios from "vue-axios";

// styles
import "@/assets/css/main.css";

// plugins
// import i18nPlugin from './plugins/i18n'
import { image } from "@/plugins/url";
import { stripHTML } from "@/plugins/filters";

// components
// import Modal from "@/components/Modal.vue";
// import svgIcon from "@/components/SvgIcon.vue";

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(VueSplide);
app.use(LazyLoad, { component: true });
app.use(VueAxios, axios);
app.config.globalProperties.$url = { image };
app.config.globalProperties.$filters = { stripHTML };
// app.component("Modal", Modal);
// app.component("SvgIcon", svgIcon);
app.mount("#app");
