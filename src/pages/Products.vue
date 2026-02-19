<template>
  <div>
    <div class="flex mb-6 items-center space-x-4">
      <h1>Product</h1>
      <button @click="showAddForm = !showAddForm">+</button>
    </div>

    <AddProduct v-if="showAddForm" />

    <table class="w-full">
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Brand</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="product in products">
          <td>{{ product.name }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.brand }}</td>
          <td>{{ product.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import AddProduct from "@/components/products/AddProduct.vue";
import { ref } from "vue";

interface Product {
  name: string;
  category: string;
  brand: string;
  description: string;
}

const products = ref<Product[]>([
  {
    name: "Redragon Shiva Mechinical Keyboard",
    category: "Electronics",
    brand: "Redragon",
    description: "Mechnical Keyboard 80%",
  },
]);

const showAddForm = ref(true);
</script>

<style scoped>
@reference "@/assets/main.css";

th,
td {
  @apply border border-gray-200;
}

td {
  @apply px-2;
}

button {
  @apply rounded-full px-2 py-1 bg-green-400 text-white;
}
</style>
