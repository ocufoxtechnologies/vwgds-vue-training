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

    <BaseTable
      :headers="[
        'Product',
        'Manufacturing Date',
        'Expiry Date',
        'Price',
        'Actions',
      ]"
    >
      <tbody>
        <tr v-for="b in batches">
          <td>{{ b.product.name }}</td>
          <td>{{ b.manufacturing_date }}</td>
          <td>{{ b.expiry_date }}</td>
          <td>{{ b.price }}</td>
          <td>
            <IconDelete class="text-red-400 text-xs text-right" />
          </td>
        </tr>
      </tbody>
    </BaseTable>
  </div>
</template>

<script setup lang="ts">
import useBatches from "@/composables/useBatches";

const { batches } = useBatches();
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
