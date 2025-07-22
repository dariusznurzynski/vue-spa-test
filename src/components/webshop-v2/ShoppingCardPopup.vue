<template>
  <div class="shopping-cart-popup" data-it-cart>
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
      <router-link class="button-link" :to="{ name: 'shopping-cart-v2'}">View cart</router-link>
      <router-link class="button-link" :to="{ name: 'webshop-v2-checkout-and-order-review-v2'}" data-it-cart-checkout="">Checkout</router-link>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router"
import shoppingCartItemSmall from "@/components/webshop-v2/shoppingCartItemSmall.vue"
import { useShoppingCartStore } from '@/stores/shoppingCartV2'
import { computed } from 'vue'

  const router = useRouter()
  const shoppingCartStore = useShoppingCartStore()

  const removeProduct = (id) => {
    shoppingCartStore.remove(id)
  }

  const isCartEmpty = computed(() => {
    return shoppingCartStore.products.length === 0
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