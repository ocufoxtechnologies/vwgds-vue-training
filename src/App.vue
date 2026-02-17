<template>
  <div>
    <p>
      Counter :
      <!-- <span v-if="counter > 10" class="text-green">{{ counter }}</span>
      <span v-else-if="counter > 5" class="text-orange">{{ counter }}</span>
      <span v-else class="text-red">{{ counter }}</span> -->

      <span
        v-bind:class="{
          'text-green': counter > 10,
          'text-orange': counter > 5 && counter < 10,
          'text-red': counter < 5,
        }"
        >{{ counter }}</span
      >
    </p>

    <button v-if="counter > 0" v-on:click="counter--">Decrement</button>
    <button @click="counter++">Increment</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
};
</script>

<style>
p {
  font-size: 1.5rem;
}

.text-green {
  color: green;
}

.text-orange {
  color: orange;
}

.text-red {
  color: red;
}

button {
  margin: 8px;
}
</style>
