import Dashboard from "@/pages/Dashboard.vue";
import ProductsIndex from "@/pages/products/ProductsIndex.vue";
import Batch from "@/pages/Batch.vue";
import Inventory from "@/pages/Inventory.vue";
import ProductsEdit from "@/pages/products/ProductsEdit.vue";
import ProductView from "@/pages/products/ProductView.vue";
import Account from "@/pages/Account.vue";
import AccountSidebar from "@/components/AccountSidebar.vue";
import Sidebar from "@/components/Sidebar.vue";

export const menus = [
  {
    name: "Dashboard",
    components: { default: Dashboard, sidebar: Sidebar },
    path: "/",
  },
  {
    name: "Products",
    components: { default: ProductsIndex, sidebar: Sidebar },
    path: "/products",
    children: [
      {
        name: "ProductView",
        components: { default: ProductView, nestedSidebar: AccountSidebar },
        path: ":id",
      },
      {
        name: "ProductsEdit",
        components: { default: ProductsEdit, nestedSidebar: AccountSidebar },
        path: "edit/:id",
      },
    ],
  },
  {
    name: "Batch",
    components: { default: Batch, sidebar: Sidebar },
    path: "/batches",
  },
  {
    name: "Inventory",
    components: { default: Inventory, sidebar: Sidebar },
    path: "/inventory",
  },
  {
    name: "Account",
    components: {
      default: Account,
      sidebar: AccountSidebar,
    },
    path: "/account",
    sidebar: false,
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
