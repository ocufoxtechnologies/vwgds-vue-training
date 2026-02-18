import Dashboard from "@/pages/Dashboard.vue";
import Products from "@/pages/Products.vue";
import Batch from "@/pages/Batch.vue";
import Inventory from "@/pages/Inventory.vue";
import { computed, ref } from "vue";

const menus = [
  {
    name: "Dashboard",
    component: Dashboard,
  },
  {
    name: "Products",
    component: Products,
  },
  {
    name: "Batch",
    component: Batch,
  },
  {
    name: "Inventory",
    component: Inventory,
  },
];

const currentPage = ref("Dashboard");

const currentPageComponent = computed(() => {
  return menus.find((menu) => menu.name === currentPage.value).component;
});

export default function () {
  const navigate = (pageName) => {
    currentPage.value = pageName;
  };

  return {
    menus,
    currentPage: computed(() => currentPage.value),
    currentPageComponent,
    navigate,
  };
}
