<template>
  <div class="flex">
    <div class="h-screen w-1/5 bg-orange-300">
      <Sidebar />
    </div>

    <div class="flex-1 py-4 px-6">
      <Transition name="fade" mode="out-in" appear>
        <component :is="currentPageComponent" />
      </Transition>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "./components/Sidebar.vue";
import useNavigation from "./composables/useNavigation";

const { currentPageComponent } = useNavigation();
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
