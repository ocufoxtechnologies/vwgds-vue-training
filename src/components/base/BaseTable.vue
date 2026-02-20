<template>
  <table class="w-full">
    <slot name="header">
      <thead>
        <tr>
          <slot name="col-header-start"></slot>
          <th v-for="(obj, index) in config">
            <slot :name="`col-header-${index + 1}`">
              {{ obj.header }}
            </slot>
          </th>
          <slot name="col-header-end"></slot>
        </tr>
      </thead>
    </slot>

    <tbody>
      <slot>
        <tr v-for="(rowData, rowIndex) in data">
          <slot name="col-data-start" v-bind="{ rowIndex, rowData }"></slot>
          <td v-for="(obj, colIndex) in config">
            <slot
              :name="`col-data-${colIndex + 1}`"
              v-bind="{ rowIndex, value: rowData[obj.key], rowData }"
            >
              {{ rowData[obj.key] }}
            </slot>
          </td>
          <slot name="col-data-end" v-bind="{ rowIndex, rowData }"></slot>
        </tr>
      </slot>
    </tbody>
  </table>
</template>

<script setup>
const { data, config } = defineProps(["data", "config"]);
</script>

<style scoped>
@reference "@/assets/main.css";

th {
  @apply bg-gray-400;
}

th,
td {
  @apply border border-gray-200;
}

td {
  @apply px-2;
}
</style>
