<template>
  <div class="shopping-cart-popup">
    <div class="items-list">
      <shopping-cart-item-small
        v-for="product in shoppingCartStore.products"
        :key="product.id"
        :product="product"
        @remove="removeProduct"
      />
      <p v-if="isCartEmpty">Cart is empty</p>
    </div>
    <div class="links" v-if="!isCartEmpty">
      <router-link class="button-link" :to="{ name: 'shopping-cart-v3'}" @click="emit('close')">View cart</router-link>
      <router-link class="button-link" :to="{ name: 'webshop-checkout-and-order-review-v3'}" @click="emit('close')">Checkout</router-link>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router"
import shoppingCartItemSmall from "@/components/webshop-v2/shoppingCartItemSmall.vue"
import { computed, onMounted } from 'vue'
import { useShoppingCartStore } from "@/stores/shoppingCartV2";

  const router = useRouter()
  const shoppingCartStore = useShoppingCartStore()

  const emit = defineEmits(["close"])

  const removeProduct = (product) => {
    shoppingCartStore.remove(product.id)

    if (window.WSC && window.WSC.modules.instatag) {
      let event = window.WSC.modules.instatag.createEvent('scRemove');

      // multiple or single porduct ids
      event.getEvar('eVarCartProductId').value = product.id; 
      // category index should equal product index
      event.getEvar('eVarCartProductCategory').value = product.cat;
      // stock status
      event.getEvar('eVarCartProductStockStatus').value = product.stockStatus; 

      // send it
      event.fire();
    }
  }

  const isCartEmpty = computed(() => {
    return shoppingCartStore.products.length === 0
  })

  onMounted(() => {
    if (window.WSC && window.WSC.modules.instatag) {
      // ES6
      let event = window.WSC.modules.instatag.createEvent('scView');

      // setting values here
      event.getEvar('eVarCartProductId').value = shoppingCartStore.products
      .map((product) => product.id)
      .join(",");

      event.getEvar('eVarCartProductCategory').value = shoppingCartStore.products
      .map((product) => product.cat)
      .join(",");

      event.getEvar('eVarCartProductStockStatus').value = shoppingCartStore.products
        .map((product) => product.stockStatus)
        .join(",");

      // send it
      event.fire();
    }
  })
</script>
<style scoped>
  .shopping-cart-popup {
    font-family: system-ui,-apple-system,BlinkMacSystemFont,\.SFNSText-Regular,Helvetica,Arial,sans-serif;
    box-shadow: 0 4px 24px 0 rgba(0,0,0,.1);
    background: white;
    padding: 10px 15px;
    min-width: 250px;
  }

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

  .links {
    display: flex;
    justify-content: space-between;
  }
</style>