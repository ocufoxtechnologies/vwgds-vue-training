<template>
  <div class="m-4">
    <div class="flex space-x-10 items-center">
      <h1 class="text-xl">Task Tracker</h1>
      <button @click="showForm = true" v-if="!showForm">Add</button>
    </div>

    <AddTask @addTask="handleAddTask" @closeForm="closeForm" v-if="showForm" />

    <ul class="px-4 my-5 space-y-4">
      <Task
        :key="task.name"
        v-for="(task, index) in tasks"
        v-bind="task"
        @delete="deleteTask(index)"
        @start="startTask(task)"
      />
    </ul>
  </div>
</template>

<script>
import AddTask from "./component/AddTask.vue";

export default {
  components: {
    AddTask,
  },
  data() {
    const time = new Date();
    time.setTime(1771311155295);
    return {
      counter: 0,
      tasks: [
        {
          name: "Learn Vue",
          startTime: time,
          endTime: null,
        },
        {
          name: "Learn React",
          startTime: null,
          endTime: null,
        },
        {
          name: "Learn Angular",
          startTime: null,
          endTime: null,
        },
      ],
      showForm: false,
    };
  },
  methods: {
    closeForm() {
      this.showForm = false;
    },
    handleAddTask(taskName) {
      this.tasks.push({
        name: taskName,
      });
      this.closeForm();
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    startTask(task) {
      task.startTime = new Date();
    },
  },
};
</script>

<style>
@reference "./assets/main.css";

button {
  @apply border rounded-sm px-4 py-1 cursor-pointer;
}
</style>
