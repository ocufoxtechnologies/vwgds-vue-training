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

const getProductById = (id) => {
  return products.value.find((product) => product.id == id);
};

export default function () {
  const { getCategoryById, loaded: categoriesLoaded } = useCategories();
  const { getBrandById, loaded: brandsLoaded } = useBrands(null);

  const axios = inject<Axios>(axiosKey);

  const fetchProducts = async () => {
    isLoading.value = true;
    console.log("Fetchproducts called");
    const response = await axios.get("/products");
    products.value = response.data;
    isLoading.value = false;
  };

  onMounted(fetchProducts);

  const addProduct = async (product) => {
    console.log(axios);
    product.id = new Date().getTime().toString();
    const response = await axios.post("/products", product);
    if (response.status == 201) {
      products.value.push(product);
      alert("Product Added");
    }
  };

  const deleteProduct = async (index) => {
    const product = products.value[index];
    try {
      const response = await axios.delete(`/products/${product.id}`);
      products.value.splice(index, 1);
      alert("Product Delete");
    } catch (e) {
      console.log(e);
    }
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

export function useProduct(id) {
  return getProductById(id);
}
