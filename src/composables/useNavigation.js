import Dashboard from "@/pages/Dashboard.vue";
import Products from "@/pages/Products.vue";
import Batch from "@/pages/Batch.vue";
import Inventory from "@/pages/Inventory.vue";
import { computed, ref } from "vue";

export const menus = [
  {
    name: "Dashboard",
    component: Dashboard,
    path: "/",
  },
  {
    name: "Products",
    component: Products,
    path: "/products",
  },
  {
    name: "Batch",
    component: Batch,
    path: "/batches",
  },
  {
    name: "Inventory",
    component: Inventory,
    path: "/inventory",
  },
];

export default function () {
  const navigate = (pageName) => {
    currentPage.value = pageName;
  };

  return {
    menus,
    navigate,
  };
}
