<template>
  <div class="loading-wrapper" v-if="!product">
    <loading-spinner />
  </div>
  <div v-else class="product-view" v-bind:data-it-product="product ? '' : null">
    <div :data-it-product-id="product.id" :data-it-product-category="product.cat" :data-it-product-stock-status="product.stockStatus">
      <h3>{{ product.name }}</h3>
      <div class="product-panel">
        <img class="product-img" :src="'/examples/spa-vue/' + product.img" />
        <div class="product-actions">
          <p class="price">{{ product.price }} {{ product.currency }}</p>
          <div class="add-to-cart-section">
            <amount-changer @increase="increase" @decrease="decrease"/>
            <button class="add-to-cart-btn" data-it-cart-addition="" @click="addToCart">Add to cart</button>
          </div>
        </div>
      </div>
      <div class="product-desc"></div>
    </div>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";
import { useProductsStore } from "@/stores/productsV2";
import AmountChanger from "@/components/webshop-v2/amountChanger.vue";
import LoadingSpinner from "@/components/webshop-v2/LoadingSpinner.vue";
import { useShoppingCartStore } from '@/stores/shoppingCartV2'

const route = useRoute();

const id = route.params.id;
const productsStore = useProductsStore();
const product = ref(null);
const shoppingCartStore = useShoppingCartStore()
let amount = 1

setTimeout(() => {
  product.value = productsStore.getProductById(id);
}, 1500);

const increase = () => {
	amount = amount + 1
}

const decrease = () => {
	amount = amount - 1
}

const addToCart = () => {
	console.log('amount', amount)
	shoppingCartStore.add(product.value, amount)
}
</script>
<style scoped>
.product-view {
  margin: 0 auto;
  max-width: 850px;
}
.product-panel {
  display: flex;
}
.price {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, \.SFNSText-Regular,
    Helvetica, Arial, sans-serif;
  font-size: 22px;
}
.product-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
}

.add-to-cart-section {
  display: flex;
}

.add-to-cart-btn {
  background-color: #4caf50; /* green */
  color: white;
  border: none;
  border-radius: 6px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;
}

.add-to-cart-btn:hover {
  background-color: #45a049;
  transform: translateY(-1px);
}

.add-to-cart-btn:active {
  transform: scale(0.98);
}
</style>
