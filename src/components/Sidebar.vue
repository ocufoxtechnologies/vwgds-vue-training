<template>
  <div class="px-6 py-4">
    <p class="text-2xl">Invento</p>

    <ul class="my-10 space-y-6 text-lg">
      <li
        class="cursor-pointer"
        v-for="menu in menus"
        @click="navigate(menu.name)"
      >
        {{ menu.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import useNavigation from "@/composables/useNavigation";

const emit = defineEmits(["changePage"]);

const { navigate, menus } = useNavigation();
</script>
