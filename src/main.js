import "@/assets/main.css";
import { createApp } from "vue";
import App from "@/App.vue";
import baseComponentPlugin from "@/plugins/base";
import IconDelete from "@/components/icons/IconDelete.vue";
import vDate from "./directives/vDate";
import { router } from "./router";
import axios from "./plugins/axios";

const vueApp = createApp(App);

vueApp.use(router);

vueApp.use(axios);

vueApp.mount("#app");

vueApp.component("IconDelete", IconDelete);

vueApp.use(baseComponentPlugin, { components: ["table", "input"] });

vueApp.directive("date", vDate);
