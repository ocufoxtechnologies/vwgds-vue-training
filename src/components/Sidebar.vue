<template>
  <div class="px-6 py-4">
    <p class="text-2xl">Invento</p>

    <ul class="my-10 space-y-6 text-lg">
      <li class="cursor-pointer" v-for="menu in filteredMenu">
        <router-link :to="{ name: menu.name }">
          {{ menu.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from "vue";
import useNavigation from "@/composables/useNavigation";

const { navigate, menus } = useNavigation();

const filteredMenu = computed(() =>
  menus.filter((menu) => menu.sidebar !== false),
);
</script>
