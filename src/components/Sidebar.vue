<template>
  <p class="text-2xl">Invento</p>

  <ul class="my-10 space-y-6 text-lg flex-1">
    <li class="cursor-pointer" v-for="menu in menus">
      <router-link :to="{ name: menu.name }">
        {{ menu.name }}
      </router-link>
    </li>
  </ul>

  <router-link to="/account">
    <p class="text-lg">Account</p>
  </router-link>
</template>

<script setup>
import { ref } from "vue";

const menus = ref([
  {
    name: "Dashboard",
    path: "/",
  },
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "Batch",
    path: "/batches",
  },
  {
    name: "Inventory",
    path: "/inventory",
  },
]);
</script>
