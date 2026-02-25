<template>
  <p class="text-2xl">Invento</p>

  <ul class="my-10 space-y-6 text-lg flex-1">
    <li class="cursor-pointer" v-for="menu in menus">
      {{ menu.name }}
    </li>
  </ul>

  <router-link to="/">
    <p class="text-lg">Back</p>
  </router-link>
</template>

<script setup>
import { ref } from "vue";
const menus = ref([
  {
    name: "Profile",
  },
  {
    name: "Preferences",
  },
  {
    name: "Security",
  },
]);
</script>
