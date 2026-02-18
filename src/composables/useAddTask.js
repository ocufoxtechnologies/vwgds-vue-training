import { computed, ref } from "vue";

const useAddTask = (tasks) => {
    const showForm = ref(false);
    
    const closeForm = () => {
      showForm.value = false;
    };

    const openForm = () => showForm.value = true
    
    const handleAddTask = (taskName) => {
      tasks.value.push({
        name: taskName,
      });
      closeForm();
    };

    return {
        closeForm, 
        handleAddTask, 
        openForm,
        showForm: computed(() => showForm.value)
    }
}

export default useAddTask