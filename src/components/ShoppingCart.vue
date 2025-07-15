<template>
  <div 
    class="shopping-cart"
    data-it-cart
  >
    <shopping-cart-item
      v-for="product in shoppingCartStore.products"
      :key="product.id"
      :product="product"
      @remove-product="removeProduct"
    />
  </div>
  <button @click="goToCheckout">Go to Checkout</button>
</template>
<script setup>
  import { ref } from 'vue' 
import { useRouter } from 'vue-router';
  import { useProductsStore } from "../stores/products";
  import ShoppingCartItem from "./ShoppingCartItem.vue";
  import { useShoppingCartStore } from '@/stores/shoppingCart'

  const productsStore = useProductsStore()
  const shoppingCartStore = useShoppingCartStore()
  const router = useRouter()

  const removeProduct = (id) => {
    shoppingCartStore.remove(id)
  } 

  const goToCheckout = () => {
    router.push({
      name: 'webshop-checkout'
    })
  }
</script>
