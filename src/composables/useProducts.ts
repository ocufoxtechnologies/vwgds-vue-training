import { ref, computed, onMounted } from "vue";
import { getBrandById } from "./useBrands";
import { getCategoryById } from "./useCategories";
import { ID } from "@/types";
import axios from "axios";

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
  isLoading.value = true;
  console.log("Fetchproducts called");
  const response = await axios.get("http://localhost:3000/products");
  products.value = response.data;
  isLoading.value = false;
};

export default function () {
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
    products: computed(() =>
      products.value.map((p) => {
        return {
          ...p,
          category: getCategoryById(p.category_id),
          brand: getBrandById(p.brand_id),
        };
      }),
    ),
    addProduct,
    getProductById,
    deleteProduct,
  };
}
