<template>
  <div class="flex">
    <div class="h-screen w-1/5 bg-orange-300 flex flex-col py-4 px-6">
      <router-view name="sidebar"></router-view>
    </div>

    <div class="flex-1 py-4 px-6">
      <!-- <component :is="currentPageComponent" /> -->
      <button @click="router.back()" class="float-right">Back</button>
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import Sidebar from "./components/Sidebar.vue";

const router = useRouter();
</script>

<style>
@reference "./assets/main.css";

button {
  @apply border rounded-sm px-4 py-1 cursor-pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
