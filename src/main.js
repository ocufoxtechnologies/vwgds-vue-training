import "@/assets/main.css";
import { createApp } from "vue";
import App from "@/App.vue";
import BaseInput from "@/components/base/BaseInput.vue";
import BaseTable from "@/components/base/BaseTable.vue";
import IconDelete from "@/components/icons/IconDelete.vue";

const vueApp = createApp(App);

vueApp.mount("#app");

vueApp.component("BaseInput", BaseInput);

vueApp.component("BaseTable", BaseTable);

vueApp.component("IconDelete", IconDelete);
