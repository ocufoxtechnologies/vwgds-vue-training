import { ID } from "@/types";
import { computed, ref } from "vue";

interface Brand {
  id: ID;
  name: string;
  category_ids: Array<ID>;
}

const brands = ref<Brand[]>([
  {
    id: 1,
    name: "Apple",
    category_ids: [1, 3],
  },
  {
    id: 2,
    name: "Redragon",
    category_ids: [2],
  },
  {
    id: 3,
    name: "Amazon",
    category_ids: [1, 2, 3, 4],
  },
]);

export default function (category_id = null) {
  console.log(category_id);

  const getBrandByCategory = (category_id) => {
    if (category_id == null) return brands.value;

    return brands.value.filter((brand) =>
      brand.category_ids.includes(category_id),
    );
  };

  const getBrandById = (id) => {
    return brands.value.find((b) => b.id == id);
  };

  return {
    getBrandByCategory,
    getBrandById,
  };
}
