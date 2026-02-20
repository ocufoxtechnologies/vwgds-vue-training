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

    <BaseTable :data="products" :config="tableConfig">
      <template #col-header-start>
        <th><p class="text-red-800">#</p></th>
      </template>
      <template #col-header-end>
        <th><p class="text-red-800">Actions</p></th>
      </template>
      <template #col-data-start="{ rowIndex }">
        <th>
          <p class="px-2">{{ rowIndex + 1 }}</p>
        </th>
      </template>

      <template #col-data-2="{ value, rowData, rowIndex }">
        <span>{{ value.name }}</span>
      </template>

      <template #col-data-3="{ value, rowData, rowIndex }">
        <span>{{ value.name }}</span>
      </template>

      <template #col-data-4="{ value, rowData, rowIndex }">
        <span>{{ value ? "Yes" : "No" }}</span>
      </template>

      <template #col-data-end="{ rowIndex, rowData }">
        <td>
          <IconDelete
            @click="deleteProduct(rowIndex)"
            class="cursor-pointer text-red-400 text-xs text-right"
          />
        </td>
      </template>
    </BaseTable>
  </div>
</template>

<script setup lang="ts">
import IconDelete from "@/components/icons/IconDelete.vue";
import AddProduct from "@/components/products/AddProduct.vue";
import useProducts from "@/composables/useProducts";
import { ref } from "vue";

const { addProduct, products, deleteProduct } = useProducts();

const showAddForm = ref(false);
const tableConfig = ref([
  {
    header: "Name",
    key: "name",
  },
  {
    header: "Brand",
    key: "brand",
  },
  {
    header: "Category",
    key: "category",
  },
  {
    header: "Refurbished?",
    key: "canBeRefurbished",
  },
  {
    header: "Description",
    key: "description",
  },
]);
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
