import "@/assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import BaseInput from "./components/base/BaseInput.vue";

const vueApp = createApp(App);

vueApp.mount("#app");

vueApp.component("BaseInput", BaseInput);
