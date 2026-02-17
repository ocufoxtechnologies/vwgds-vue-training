<template>
  <li class="rounded-md bg-gray-200 py-2 px-2">
    <div class="flex space-x-10 justify-between">
      <p class="inline text-lg">{{ name }}</p>
      <div class="space-x-2">
        <template v-if="startTime == null">
          <button @click="$emit('start')" class="bg-green-300">Start</button>
          <button @click="$emit('delete')" class="bg-red-300">Delete</button>
        </template>

        <template v-else>
          <p class="inline text-2xl mr-4">{{ minutes }}:{{ seconds }}</p>
          <button v-if="startTime != null" class="bg-amber-300">End</button>
        </template>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    startTime: {
      type: Date,
      required: false,
    },
  },
  data() {
    return {
      now: new Date(),
      intervalId: null,
    };
  },
  mounted() {
    this.intervalId = setInterval(() => {
      this.now = new Date();
    }, 1000);
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
  computed: {
    countInSeconds() {
      console.log("countInSeconds called");
      if (this.startTime == null) return 0;
      const countInMs = this.now.getTime() - this.startTime.getTime();
      return Math.round(countInMs / 1000);
    },

    minutes() {
      return Math.floor(this.countInSeconds / 60);
    },

    seconds() {
      return Math.round(this.countInSeconds % 60);
    },
  },
  watch: {
    now: {
      handler(oldValue, newValue) {
        console.log("now changed");
      },
      once: true,
    },
  },
};
</script>
