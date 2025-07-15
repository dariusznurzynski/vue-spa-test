<template>
  <nav>
    <h3>Webshop</h3>
    <div class="side-left-panel">
      <button
        @click="goToEmptyAttrs"
      >
        Empty attrs
      </button>
      <button 
        @click="goToProductList"
      >
        Product List
      </button>
      <button 
        @click="changeVisibilityForShoppingCartVshow"
      >
        Shopping Cart (v-show)
      </button>
      <button 
        @click="changeVisibilityForShoppingCartVif"
      >
        Shopping Cart (v-if)
      </button>
      <button 
        @click="navigateToProfile"
      >
        Profile
      </button>
      <shopping-card-popup 
        v-if="isShoppingCardVisibleVif"
        class="shopping-cart-v-if"
        @hide="hidePopupVif"
      />
      <shopping-card-popup
        v-show="isShoppingCardVisibleVshow"
        class="shopping-cart-v-show"
        @hide="hidePopupVshow"
      />
    </div>
  </nav>
</template>
<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import ShoppingCardPopup from './ShoppingCardPopup.vue'

  const router = useRouter()

  const isShoppingCardVisibleVif = ref(false)
  const isShoppingCardVisibleVshow = ref(false)

  const changeVisibilityForShoppingCartVif = () => {
    isShoppingCardVisibleVif.value = !isShoppingCardVisibleVif.value
  }

  const changeVisibilityForShoppingCartVshow = () => {
    isShoppingCardVisibleVshow.value = !isShoppingCardVisibleVshow.value
  }

  const hidePopupVif = () => {
    isShoppingCardVisibleVif.value = false
  }

  const hidePopupVshow = () => {
    isShoppingCardVisibleVshow.value = false
  }

  const navigateToProfile = () => {
    router.push({ name: 'webshop-profile' })
  }

  const goToProductList = () => {
    router.push({ name: 'webshop-home'})
  }

  const goToEmptyAttrs = () => {
    router.push({name: 'empty-product-attrs'})
  }
</script>
<style scoped>
  nav {
    background: blue;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px;
  }

  a {
    background: white;
  }

  .side-left-panel {
    display: flex;
    gap: 5px;
  }

  h3 {
    color: white;
  }

  .side-left-panel {
    position: relative;
  }

  .shopping-cart-popup {
    position: absolute;
    background: white;
    border: 1px solid black;
    padding: 10px 15px;
    top: 25px;
  }

  .shopping-cart-v-show {
    left: 90px;
  }
  
  .shopping-cart-v-if {
    left: 250px;
  }
</style>