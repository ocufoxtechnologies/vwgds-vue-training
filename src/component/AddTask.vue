<template>
  <form action="#" class="my-4 w-1/3">
    <div class="w-full mb-2">
      <label class="mx-4" for="name">Name</label>
      <input
        class="bg-gray-200 rounded-sm px-2 py-1"
        type="text"
        id="name"
        placeholder="Enter Task Name"
        v-model="inputName"
      />
    </div>
    <div class="block mx-auto text-center space-x-2">
      <button @click="$emit('closeForm')">Close</button>
      <button @click="$emit('addTask', inputName)">Add</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      inputName: null,
    };
  },
};
</script>
