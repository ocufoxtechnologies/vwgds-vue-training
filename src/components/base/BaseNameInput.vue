<template>
  <div>
    <BaseInput
      v-model="fname"
      id="fname"
      label="First Name"
      placeholder="Enter First Name"
    />
    <BaseInput
      v-model="lname"
      id="lname"
      label="Last Name"
      placeholder="Enter Last Name"
    />
  </div>
</template>

<script setup>
// const { fname, lname } = defineProps({
//   fname: String,
//   lname: String,
// });

// const emit = defineEmits(["update:fname", "update:lname"]);

const fname = defineModel("fname");
const lname = defineModel("lname");
</script>
