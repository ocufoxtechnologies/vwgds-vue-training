import { computed, ref } from "vue";

export interface Category {
  id: string | number;
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
  return {
    categories: computed(() => categories.value),
  };
}
