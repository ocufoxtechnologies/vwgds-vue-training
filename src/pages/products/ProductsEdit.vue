<template>
  <div>
    <div class="flex mb-6 items-center space-x-4">
      <h1>Edit Product</h1>
    </div>

    {{ product }}
  </div>
</template>

<script setup>
import useProducts, { useProduct } from "@/composables/useProducts";
import { useRoute } from "vue-router";

const route = useRoute();
const product = useProduct(route.params.id);
</script>

<script>
export const routeName = "ProductsEdit";
</script>
