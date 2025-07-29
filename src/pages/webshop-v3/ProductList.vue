<template>
  <h2>EXPLORE YOUR INTERESTS</h2>
  <div class="product-list">
    <product-item
      v-for="product in productsStore.products"
      :key="product.id"
      :product="product"
      @add-to-cart="addToShoppingCart"
      @click="navigateToProduct(product.id)"
    />
  </div>
</template>
<script setup>
import ProductItem from "@/components/webshop-v3/ProductItem.vue";
import { useProductsStore } from "@/stores/productsV2";
import { useShoppingCartStore } from "@/stores/shoppingCartV2";
import { useRouter } from "vue-router";

const productsStore = useProductsStore();
const shoppingCartStore = useShoppingCartStore();
const router = useRouter();

const addToShoppingCart = (product) => {
  console.log("adding product");
  shoppingCartStore.add(product);

  if (window.WSC && window.WSC.modules.instatag) {
    let event = window.WSC.modules.instatag.createEvent("scAdd");

    // multiple or single porduct ids
    event.getEvar("eVarProductId").value = product.id;
    // category index should equal product index
    event.getEvar("eVarProductCategory").value = product.cat;
    // stock status
    event.getEvar("eVarProductStockStatus").value = product.stockStatus;

    // send it
    event.fire();
  }
};

const addAllProductsToShoppingCart = () => {
  for (let product of productsStore.products) {
    shoppingCartStore.add(product);
  }
};

const navigateToProduct = (id) => {
  router.push({
    name: "product-v3",
    params: { id },
  });
};
</script>
<style scoped>
h2 {
  text-align: center;
}
.product-list {
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
}
</style>