<template>
  <table class="w-full">
    <slot name="header">
      <thead>
        <tr>
          <th v-for="header in headers">{{ header }}</th>
        </tr>
      </thead>
    </slot>

    <slot></slot>
    <!-- <tbody>
      <tr v-for="product in products">
        <td>{{ product.name }}</td>
        <td>{{ product.category.name }}</td>
        <td>{{ product.brand.name }}</td>
        <td>{{ product.canBeRefurbished ? "Yes" : "No" }}</td>
        <td>{{ product.description }}</td>
      </tr>
    </tbody> -->
  </table>
</template>

<script setup>
const { data, headers } = defineProps(["data", "headers"]);
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
</style>
