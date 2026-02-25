<template>
  {{ product }}

  <button @click="router.back">Back</button>
</template>

<script setup>
import { useProduct } from "@/composables/useProducts";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const { product } = useProduct(route.params.id);
</script>
