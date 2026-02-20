<template>
  <div class="space-x-4 my-4 flex">
    <label class="w-24" :for="id">
      <slot
        ><span>{{ label }}</span></slot
      >
    </label>
    <input
      type="text"
      :id="id"
      class="flex-1 px-2 py-1 border border-slate-300 rounded-sm"
      v-bind="$attrs"
      v-model="model"
    />
  </div>
</template>

<script setup>
defineOptions({
  inheritAttrs: false,
});

const model = defineModel();

const { id } = defineProps({
  id: String,
  label: String,
});
</script>
