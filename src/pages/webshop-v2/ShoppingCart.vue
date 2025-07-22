<template>
  <div class="shopping-cart" data-it-cart>
    <p>New</p>
    <shopping-cart-item
      v-for="product in shoppingCartStore.products"
      :key="product.id"
      :product="product"
      @remove-product="removeProduct"
      @decrease="decrease(product)"
      @increase="increase(product)"
    />
  </div>
  <router-link class="button-link" :to="{ name: 'webshop-v2-checkout-and-order-review-v2' }" data-it-cart-checkout=''>
    Checkout - Order Review - Payment and delivery Address
  </router-link>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useProductsStore } from "@/stores/products";
import ShoppingCartItem from "@/components/webshop-v2/ShoppingCartItem.vue";
import { useShoppingCartStore } from "@/stores/shoppingCartV2";

const productsStore = useProductsStore();
const shoppingCartStore = useShoppingCartStore();
const router = useRouter();

const removeProduct = (id) => {
  shoppingCartStore.remove(id);
};

const increase = (product) => {
  shoppingCartStore.add(product, 1);
};

const decrease = (product) => {
  if (product.quantity === 1) {
    shoppingCartStore.remove(product.id);

    if (WSC.modules.instatag) {
          // ES6
      let event = WSC.modules.instatag.createEvent("scRemove");
      // multiple or single porduct ids
      event.getEvar("eVarCartProductId").value = product.id;
      // category index should equal product index
      event.getEvar("eVarCartProductCategory").value = product.cat;
      // stock status
      event.getEvar("eVarCartProductStockStatus").value = product.stockStatus;

      // send it
      event.fire();
    }

    return;
  }

  shoppingCartStore.decrease(product.id);
};
</script>
<style>
.button-link {
  display: inline-block;
  background-color: #1890ff;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.2s;
}
</style>
