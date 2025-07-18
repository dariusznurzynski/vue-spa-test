<template>
  <nav>
    <h3>Webshop v2</h3>
    <div class="side-left-panel">
      <!-- <button
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
      </button> -->
      <cart-button 
        @mouseenter="changeVisibilityForShoppingCartVIf(true)"
      />
      <shopping-card-popup
        v-if="isShoppingCardVisibleVif"
        class="shopping-cart-v-if"
        @mouseleave="changeVisibilityForShoppingCartVIf(false)"
      />
    </div>
  </nav>
</template>
<script setup>
  import CartButton from '@/components/webshop-v2/CartButton.vue'
  import { ref } from 'vue'
  // import { useRouter } from 'vue-router'
  import ShoppingCardPopup from '@/components/webshop-v2/ShoppingCardPopup.vue'

  // const router = useRouter()

  const isShoppingCardVisibleVif = ref(false)

  const changeVisibilityForShoppingCartVIf = (visibility) => {
    isShoppingCardVisibleVif.value = visibility
  }

  // const hidePopupVif = () => {
  //   isShoppingCardVisibleVif.value = false
  // }

  // const hidePopupVshow = () => {
  //   isShoppingCardVisibleVshow.value = false
  // }

  // const navigateToProfile = () => {
  //   router.push({ name: 'webshop-profile' })
  // }

  // const goToProductList = () => {
  //   router.push({ name: 'webshop-home'})
  // }

  // const goToEmptyAttrs = () => {
  //   router.push({name: 'empty-product-attrs'})
  // }
</script>
<style scoped>
  nav {
    background: #0A8800;
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
    top: 25px;
  }

  .shopping-cart-v-show {
    left: 90px;
  }
  
  .shopping-cart-v-if {
    right: 0px;
  }
</style>