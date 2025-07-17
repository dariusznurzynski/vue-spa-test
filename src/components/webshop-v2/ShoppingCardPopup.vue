<template>
  <div class="shopping-cart-popup" data-it-cart>
    <h4>Shopping Cart</h4>
    <div class="items-list">
      <shopping-cart-item-small
        v-for="product in shoppingCartStore.products"
        :key="product.id"
        :product="product"
        @remove="removeProduct"
      />
    </div>
    <router-link :to="{ name: 'shopping-cart'}" @click="hidePopup">Go to view cart</router-link><br>
    <router-link :to="{ name: 'webshop-checkout'}" @click="hidePopup">Go to checkout</router-link><br>
    <button class="hide" @click="hidePopup">Hide</button>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router"
import shoppingCartItemSmall from "@/components/webshop/shoppingCartItemSmall.vue"
import { useShoppingCartStore } from '@/stores/shoppingCart'

  const emit = defineEmits(['hide'])
  const router = useRouter()
  const shoppingCartStore = useShoppingCartStore()
  
  const hidePopup = () => {
    emit('hide')
  }

  const removeProduct = (id) => {
    shoppingCartStore.remove(id)
  }
</script>
<style scoped>
  h4 {
    margin-top: 5px;
  }
  .hide {
    margin-top: 8px;
  }
</style>