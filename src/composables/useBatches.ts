import { computed, ref } from "vue";
import useProducts from "./useProducts";
import { ID } from "@/types";

interface Batch {
  id: ID;
  product_id: ID;
  manufacturing_date: Date | string;
  expiry_date: Date | string;
  price: number;
}

const batches = ref<Batch[]>([
  {
    id: 1,
    product_id: 1,
    manufacturing_date: new Date(),
    expiry_date: new Date(),
    price: 3499,
  },
]);

const { getProductById } = useProducts();

const deleteBatch = (index) => {
  batches.value.splice(index, 1);
};

export default function () {
  return {
    batches: computed(() => {
      return batches.value.map((batch) => {
        return {
          ...batch,
          product: getProductById(batch.product_id),
        };
      });
    }),
    deleteBatch,
  };
}
