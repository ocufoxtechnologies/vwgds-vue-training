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

export const getBrandById = (id) => {
  return brands.value.find((b) => b.id == id);
};

export default function (product) {
  return computed(() => {
    console.log("useBrands Computed called");
    if (product.value.category_id == null) return brands.value;

    return brands.value.filter((brand) =>
      brand.category_ids.includes(product.value.category_id),
    );
  });
}
