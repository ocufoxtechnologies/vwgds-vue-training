<template>
  <div>
    <div class="flex mb-6 items-center space-x-4">
      <h1>Product</h1>
      <button @click="showAddForm = !showAddForm">+</button>
    </div>

    <AddProduct
      @add="
        addProduct($event);
        showAddForm = false;
      "
      @cancel="showAddForm = false"
      v-if="showAddForm"
    />

    <!-- <table class="w-full">
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Brand</th>
          <th>Refurbished?</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="product in products">
          <td>{{ product.name }}</td>
          <td>{{ product.category.name }}</td>
          <td>{{ product.brand.name }}</td>
          <td>{{ product.canBeRefurbished ? "Yes" : "No" }}</td>
          <td>{{ product.description }}</td>
        </tr>
      </tbody>
    </table> -->

    <BaseTable
      :headers="[
        'Name',
        'Brand',
        'Category',
        'Refurbished?',
        'Description',
        'Actions',
      ]"
    >
      <template #header="">
        <thead>
          <tr>
            <th
              v-for="header in [
                'Name',
                'Brand',
                'Category',
                'Refurbished?',
                'Description',
              ]"
            >
              {{ header }}
            </th>
          </tr>
        </thead>
      </template>

      <template v-slot="">
        <tbody>
          <tr v-for="product in products">
            <td>{{ product.name }}</td>
            <td>{{ product.category.name }}</td>
            <td>{{ product.brand.name }}</td>
            <td>{{ product.canBeRefurbished ? "Yes" : "No" }}</td>
            <td>{{ product.description }}</td>
            <td>
              <IconDelete class="text-red-400 text-xs text-right" />
            </td>
          </tr>
        </tbody>
      </template>
    </BaseTable>
  </div>
</template>

<script setup lang="ts">
import IconDelete from "@/components/icons/IconDelete.vue";
import AddProduct from "@/components/products/AddProduct.vue";
import useProducts from "@/composables/useProducts";
import { ref } from "vue";

const { addProduct, products } = useProducts();

const showAddForm = ref(false);
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
