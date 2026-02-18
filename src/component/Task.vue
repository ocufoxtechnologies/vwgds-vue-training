<template>
  <li class="rounded-md bg-gray-200 py-2 px-2">
    <div class="flex space-x-10 justify-between">
      <p class="inline text-lg">{{ name }}</p>
      <div class="space-x-2">
        <template v-if="startTime == null">
          <button @click="emit('start')" class="bg-green-300">Start</button>
        </template>

        <template v-else>
          <p class="inline text-2xl mr-4">{{ minutes }}:{{ seconds }}</p>
          <button v-if="startTime != null" class="bg-amber-300">End</button>
        </template>

        <button @click="emit('delete')" class="bg-red-300">Delete</button>
      </div>
    </div>
  </li>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed, watch } from "vue";

const { name, startTime } = defineProps({
  name: {
    type: String,
    required: true,
  },
  startTime: {
    type: Date,
    required: false,
  },
});

const emit = defineEmits(["start", "delete"]);

const now = ref(new Date());
const intervalId = ref();

onMounted(() => {
  intervalId.value = setInterval(() => {
    now.value = new Date();
  }, 1000);
});

onBeforeUnmount(() => clearInterval(intervalId.value));

const countInSeconds = computed(() => {
  console.log("countInSeconds called");

  if (startTime == null) return 0;
  const countInMs = now.value.getTime() - startTime.getTime();
  return Math.round(countInMs / 1000);
});

const minutes = computed(() => {
  return Math.floor(countInSeconds.value / 60);
});

const seconds = computed(() => {
  return Math.round(countInSeconds.value % 60);
});

watch(now, (oldValue, newValue) => console.log("now changed"), {
  once: true,
});
</script>
