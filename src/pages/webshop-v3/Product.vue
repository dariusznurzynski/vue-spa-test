<template>
  <div class="loading-wrapper" v-if="!product">
    <loading-spinner />
  </div>
  <div v-else class="product-view">
    <div>
      <h3>{{ product.name }}</h3>
      <div class="product-panel">
        <img class="product-img" :src="'/examples/spa-vue/' + product.img" />
        <div class="product-actions">
          <p class="price">{{ product.price }} {{ product.currency }}</p>
          <div class="add-to-cart-section">
            <amount-changer
              :amount="amount"
              @increase="increase"
              @decrease="decrease"
            />
            <button class="add-to-cart-btn" @click="addToCart">
              Add to cart
            </button>
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
import { useShoppingCartStore } from "@/stores/shoppingCartV2";

const route = useRoute();

const id = route.params.id;
const productsStore = useProductsStore();
const product = ref(null);
const shoppingCartStore = useShoppingCartStore();
const amount = ref(1);

setTimeout(() => {
  product.value = productsStore.getProductById(id);

  if (window.WSC && window.WSC.modules.instatag) {
    let event = window.WSC.modules.instatag.createEvent("event37");

    // multiple or single porduct ids
    event.getEvar("eVarProductId").value = product.value.id;
    // category index should equal product index
    event.getEvar("eVarProductCategory").value = product.value.cat;

    event.getEvar("eVarProductStockStatus").value = product.value.stockStatus;

    // send it
    event.fire();
  }
}, 1500);

const increase = () => {
  amount.value = amount.value + 1;
};

const decrease = () => {
  amount.value = amount.value - 1;
};

const addToCart = () => {
  shoppingCartStore.add(product.value, amount.value);
  amount.value = 1;

  if (window.WSC && window.WSC.modules.instatag) {
    let event = window.WSC.modules.instatag.createEvent("scAdd");

    // multiple or single porduct ids
    event.getEvar("eVarProductId").value = product.value.id;
    // category index should equal product index
    event.getEvar("eVarProductCategory").value = product.value.cat;
    // stock status
    event.getEvar("eVarProductStockStatus").value = product.value.stockStatus;

    // send it
    event.fire();
  }
};
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
