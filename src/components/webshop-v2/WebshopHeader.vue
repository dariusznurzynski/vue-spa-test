<template>
  <nav>
    <h3>Webshop v2</h3>
    <div class="side-left-panel">
      <account-button @click="navigateToProfile"/>
      <cart-button
        @mouseenter="changeVisibilityForShoppingCartVIf(true)"
      />
      <shopping-card-popup
        v-if="isShoppingCardVisibleVif"
        class="shopping-cart-v-if"
        @mouseleave="changeVisibilityForShoppingCartVIf(false)"
        @close="closeCart"
      />
    </div>
  </nav>
</template>
<script setup>
  import CartButton from '@/components/webshop-v2/CartButton.vue'
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import ShoppingCardPopup from '@/components/webshop-v2/ShoppingCardPopup.vue'
  import AccountButton from '@/components/webshop-v2/AccountButton.vue'

  const router = useRouter()

  const isShoppingCardVisibleVif = ref(false)

  const changeVisibilityForShoppingCartVIf = (visibility) => {
    isShoppingCardVisibleVif.value = visibility
  }

  const navigateToProfile = () => {
    router.push({
      name: 'profile-v2'
    })
  }

  const closeCart = () => {
    isShoppingCardVisibleVif.value = false
  }
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