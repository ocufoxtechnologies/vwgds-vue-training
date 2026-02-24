import { axiosKey } from "@/keys";
import { ID } from "@/types";
import { Axios } from "axios";
import { computed, inject, onMounted, readonly, ref } from "vue";

interface Brand {
  id: ID;
  name: string;
  category_ids: Array<ID>;
}

const brands = ref<Brand[]>([]);

const isLoading = ref(false);
const loaded = ref(false);

const fetchBrands = async () => {
  const axios = inject<Axios>(axiosKey);
  console.log(axios);
  isLoading.value = true;
  console.log("fetchBrands called");
  const response = await axios.get("/brands");
  brands.value = response.data;
  isLoading.value = false;
  loaded.value = true;
};

const getBrandById = (id) => {
  if (!loaded.value) return;
  return brands.value.find((b) => b.id == id);
};

export default function (product) {
  if (!loaded.value) fetchBrands();

  return {
    brands: computed(() => {
      console.log("useBrands Computed called");
      if (!loaded.value) return [];
      if (product?.value.category_id == null) return brands.value;

      return brands.value.filter((brand) =>
        brand.category_ids.includes(product.value.category_id),
      );
    }),
    loaded: readonly(loaded),
    getBrandById,
  };
}
