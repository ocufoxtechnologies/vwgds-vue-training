import Dashboard from "@/pages/Dashboard.vue";
import ProductsIndex from "@/pages/products/ProductsIndex.vue";
import Batch from "@/pages/Batch.vue";
import Inventory from "@/pages/Inventory.vue";
import ProductsEdit from "@/pages/products/ProductsEdit.vue";

export const menus = [
  {
    name: "Dashboard",
    component: Dashboard,
    path: "/",
  },
  {
    name: "Products",
    component: ProductsIndex,
    path: "/products",
  },
  {
    name: "ProductsEdit",
    component: ProductsEdit,
    path: "/products/:id",
    sidebar: false,
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
