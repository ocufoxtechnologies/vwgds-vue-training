import { createRouter, createWebHistory } from "vue-router";
import { menus } from "@/composables/useNavigation";

console.log(menus);

export const router = createRouter({
  routes: menus,
  history: createWebHistory(),
});
