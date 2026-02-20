import { ID } from "@/types";
import { computed, ref } from "vue";

export interface Category {
  id: ID;
  name: string;
}

const categories = ref<Category[]>([
  {
    id: 1,
    name: "Electronics",
  },
  {
    id: 2,
    name: "Food",
  },
  {
    id: 3,
    name: "Healthcare",
  },
  {
    id: 4,
    name: "Household",
  },
]);

export default function () {
  const getCategoryById = (id) => {
    return categories.value.find((category) => category.id == id);
  };

  return {
    categories: computed(() => categories.value),
    getCategoryById,
  };
}
