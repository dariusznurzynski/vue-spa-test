<template>
  <h3>Webshop List</h3>
  <button
    data-it-cart-addition
    data-it-product-id="1,2,3,4"
    data-it-product-category="cat1,cat2,cat3,cat4|cat5|cat6"
    @click="addAllProductsToShoppingCart"
  >
    Add all products to cart
  </button>
  <div class="product-list">
    <product-item
      v-for="product in productsStore.products"
      :key="product.id"
      :product="product"
      @add-to-cart="addToShoppingCart"
    />
  </div>
  <shopping-cart-manipulation />
</template>
<script setup>
  import ProductItem from '@/components/ProductItem.vue'
  import { useProductsStore } from '@/stores/products'
  import { useShoppingCartStore } from '@/stores/shoppingCart'
  import ShoppingCartManipulation from '@/components/ShoppingCartManipulation.vue'

  const productsStore = useProductsStore()
  const shoppingCartStore = useShoppingCartStore()

  const addToShoppingCart = (product) => {
    shoppingCartStore.add(product)
  }

  const addAllProductsToShoppingCart = () => {
    for (let product of productsStore.products) {
      shoppingCartStore.add(product)
    }
  }

</script>
<style scoped>
  .product-list {
    display: flex;
    gap: 5px;
    justify-content: space-around;
  }
</style>