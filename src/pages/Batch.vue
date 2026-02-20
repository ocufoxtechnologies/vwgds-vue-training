<template>
  <div>
    <div class="flex mb-6 items-center space-x-4">
      <h1>Batch</h1>
    </div>
    <!-- <table class="w-full">
      <thead>
        <tr>
          <th>Product</th>
          <th>Manufacturing Date</th>
          <th>Expiry Date</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="b in batches">
          <td>{{ b.product.name }}</td>
          <td>{{ b.manufacturing_date }}</td>
          <td>{{ b.expiry_date }}</td>
          <td>{{ b.price }}</td>
        </tr>
      </tbody>
    </table> -->

    <BaseTable :config="tableConfig" :data="batches">
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

      <template #col-data-1="{ value }">
        <span>{{ value.name }}</span>
      </template>

      <template #col-data-2="{ value }">
        <span>{{
          value.toLocaleDateString("en-IN", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })
        }}</span>
      </template>

      <template #col-data-3="{ value }">
        <span>{{
          value.toLocaleDateString("en-IN", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })
        }}</span>
      </template>

      <template #col-data-end="{ rowIndex }">
        <td>
          <IconDelete
            @click="deleteBatch(rowIndex)"
            class="cursor-pointer text-red-400 text-xs text-right"
          />
        </td>
      </template>
    </BaseTable>
  </div>
</template>

<script setup lang="ts">
import useBatches from "@/composables/useBatches";
import { ref } from "vue";

const { batches, deleteBatch } = useBatches();

const tableConfig = ref([
  {
    header: "Product",
    key: "product",
  },
  {
    header: "Manufacturing Date",
    key: "manufacturing_date",
  },
  {
    header: "Expiry Date",
    key: "expiry_date",
  },
  {
    header: "Price",
    key: "price",
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
</style>
