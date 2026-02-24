import { axiosKey } from "@/keys";
import { ID } from "@/types";
import { Axios } from "axios";
import { computed, inject, onMounted, readonly, ref } from "vue";

export interface Category {
  id: ID;
  name: string;
}

const categories = ref<Category[]>([]);

const isLoading = ref(false);
const loaded = ref(false);

const fetchCategories = async () => {
  const axios = inject<Axios>(axiosKey);
  isLoading.value = true;
  console.log("fetchCategories called");
  const response = await axios.get("/categories");
  categories.value = response.data;
  isLoading.value = false;
  loaded.value = true;
};

const getCategoryById = (id) => {
  if (!loaded.value) return;
  return categories.value.find((category) => category.id == id);
};

export default function () {
  if (!loaded.value) fetchCategories();
  return {
    categories: computed(() => categories.value),
    getCategoryById,
    loaded: readonly(loaded),
  };
}
