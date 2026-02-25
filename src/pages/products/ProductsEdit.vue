<template>
  <div>
    <div class="flex mb-6 items-center space-x-4">
      <h1>Edit Product</h1>
    </div>

    <div class="bg-white px-6 py-4 rounded-md w-2/5">
      <p class="text-lg font-medium mb-4">Edit Product</p>

      <form
        @submit.prevent="
          editProduct(product);
          router.back();
        "
        action="#"
      >
        <BaseInput
          label="Name"
          id="name"
          placeholder="Enter Name"
          v-model="product.name"
          required
        >
          <p class="text-3xl">Name</p>
        </BaseInput>

        <div class="space-x-4 my-4 flex">
          <label class="w-24" for="category">Category</label>
          <select
            class="border border-slate-300 rounded-sm flex-1 px-2 py-1"
            name="category"
            id="category"
            v-model="product.category_id"
          >
            <option v-for="category in categories" :value="category.id">
              {{ category.name }}
            </option>
          </select>
        </div>

        <div class="space-x-4 my-4 flex">
          <label class="w-24" for="brand">Brand</label>
          <select
            class="border border-slate-300 rounded-sm flex-1 px-2 py-1"
            name="brand"
            id="brand"
            v-model="product.brand_id"
          >
            <option v-for="brand in brands" :value="brand.id">
              {{ brand.name }}
            </option>
          </select>
        </div>

        <div class="space-x-4 my-4 flex">
          <label class="w-24" for="desc">Description</label>
          <textarea
            v-model="product.description"
            class="border border-slate-300 rounded-sm flex-1 px-2 py-1"
            name="description"
            id="desc"
          ></textarea>
        </div>

        <div class="space-x-4 my-4 flex">
          <p class="w-24">Can Be refurbished?</p>
          <div class="flex flex-1 justify-around">
            <div>
              <input
                v-model="product.canBeRefurbished"
                name="canBeRefurbished"
                type="radio"
                id="yes"
                :value="true"
              />
              <label class="mx-2" for="yes">Yes</label>
            </div>

            <div>
              <input
                name="canBeRefurbished"
                v-model="product.canBeRefurbished"
                type="radio"
                id="no"
                :value="false"
              />
              <label class="mx-2" for="no">No</label>
            </div>
          </div>
        </div>

        <div class="flex justify-between">
          <button @click.prevent="router.back" class="bg-red-600 text-white">
            Cancel
          </button>
          <button class="bg-green-600 text-white">Edit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import useBrands from "@/composables/useBrands";
import useCategories from "@/composables/useCategories";
import { useProduct } from "@/composables/useProducts";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const { product, editProduct } = useProduct(route.params.id);

const { categories } = useCategories();
const { brands } = useBrands(product);
</script>

<script>
export const routeName = "ProductsEdit";
</script>
