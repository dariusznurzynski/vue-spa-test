<template>
  <h2>EXPLORE YOUR INTERESTS</h2>
  <div class="product-list">
    <product-item
      v-for="product in productsStore.products"
      :key="product.id"
      :product="product"
      @add-to-cart="addToShoppingCart"
      @click="navigateToProduct(product.id)"
    />
  </div>
</template>
<script setup>
  import ProductItem from '@/components/webshop-v2/ProductItem.vue'
  import { useProductsStore } from '@/stores/productsV2'
  import { useShoppingCartStore } from '@/stores/shoppingCartV2'
  import { useRouter } from 'vue-router'

  const productsStore = useProductsStore()
  const shoppingCartStore = useShoppingCartStore()
  const router = useRouter()

  const addToShoppingCart = (product) => {
    console.log('adding product')
    shoppingCartStore.add(product)
  }

  const addAllProductsToShoppingCart = () => {
    for (let product of productsStore.products) {
      shoppingCartStore.add(product)
    }
  }

  const navigateToProduct = (id) => {
    router.push({
      name: 'product-v2',
      params: { id }
    })
  }

</script>
<style scoped>
  h2 {
    text-align: center;
  }
  .product-list {
    display: flex;
    gap: 15px;
    justify-content: center;
    align-items: center;
  }
</style>