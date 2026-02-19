import { computed, ref } from "vue";

interface Brand {
  id: string | number;
  name: string;
  category_ids: Array<string | number>;
}

const brands = ref<Brand[]>([
  {
    id: 1,
    name: "Apple",
    category_ids: [1, 3],
  },
  {
    id: 2,
    name: "Noise",
    category_ids: [2],
  },
  {
    id: 3,
    name: "Amazon",
    category_ids: [1, 2, 3, 4],
  },
]);

export default function (category_id) {
  console.log(category_id);

  const getBrandByCategory = (category_id) => {
    if (category_id == null) return brands.value;

    return brands.value.filter((brand) =>
      brand.category_ids.includes(category_id),
    );
  };

  return {
    getBrandByCategory,
  };
}
