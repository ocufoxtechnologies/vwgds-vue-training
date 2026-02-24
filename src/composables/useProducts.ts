import { ref, computed, onMounted, inject } from "vue";
import useBrands from "./useBrands";
import useCategories from "./useCategories";
import { ID } from "@/types";
import { Axios } from "axios";
import { axiosKey } from "@/keys";

interface Product {
  id: ID;
  name: string;
  category_id: ID;
  brand_id: ID;
  description: string;
  canBeRefurbished: boolean;
}

const products = ref<Product[]>([]);
const isLoading = ref(false);

const fetchProducts = async () => {
  const axios = inject<Axios>(axiosKey);
  console.log(axios);
  isLoading.value = true;
  console.log("Fetchproducts called");
  const response = await axios.get("/products");
  products.value = response.data;
  isLoading.value = false;
};

export default function () {
  const { getCategoryById, loaded: categoriesLoaded } = useCategories();
  const { getBrandById, loaded: brandsLoaded } = useBrands(null);

  onMounted(fetchProducts);

  const addProduct = (product) => {
    product.id = new Date().getTime();
    products.value.push(product);
  };

  const getProductById = (id) => {
    return products.value.find((product) => product.id == id);
  };

  const deleteProduct = (index) => {
    products.value.splice(index, 1);
  };

  return {
    isLoading: computed(() => isLoading.value),
    products: computed(() => {
      if (!categoriesLoaded.value || !brandsLoaded.value) return [];
      return products.value.map((p) => {
        return {
          ...p,
          category: getCategoryById(p.category_id),
          brand: getBrandById(p.brand_id),
        };
      });
    }),
    addProduct,
    getProductById,
    deleteProduct,
  };
}
