import { ref, computed } from "vue";
import useBrands from "./useBrands";
import useCategories from "./useCategories";
import { ID } from "@/types";

interface Product {
  id: ID;
  name: string;
  category_id: ID;
  brand_id: ID;
  description: string;
  canBeRefurbished: boolean;
}

const products = ref<Product[]>([
  {
    id: 1,
    name: "Redragon Shiva Mechinical Keyboard",
    category_id: 1,
    brand_id: 2,
    description: "Mechnical Keyboard 80%",
    canBeRefurbished: true,
  },
]);

const { getBrandById } = useBrands();
const { getCategoryById } = useCategories();

export default function () {
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
