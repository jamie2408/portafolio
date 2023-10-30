import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import { MotionPlugin } from "@vueuse/motion";
import responsive from "vue-responsive";

loadFonts();
const app = createApp(App);
app.use(MotionPlugin);
app.use(responsive);
app.use(router).use(store).use(vuetify).mount("#app");
