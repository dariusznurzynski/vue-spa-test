<template>
  <div class="product-item"
    :data-it-product-id="product.id"
    :data-it-product-category="product.cat"
    :data-it-product-stock-status="product.stockStatus"
  >
    <h2>{{ product.name }}</h2>
    <p>{{ product.shortDesc }}</p>
    <div class="actions">
      <button data-it-cart-addition class="add-to-cart" @click="addToCart(product)">Add to cart</button>
      <button @click="goToProduct(product.id)">Show product</button>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router"

  defineProps({
    product: {
      type: Object,
      required: true
    }
  })

  const emit = defineEmits(['addToCart'])

  const router = useRouter()

  const goToProduct = (id) => {
    router.push({
      name: 'product',
      params: { id: id }
    })
  }

  const addToCart = (product) => {
    emit('addToCart', product)
  }
</script>
<style scoped>
  .product-item {
    border: 1px solid black;
    max-width: 300px;
    padding: 15px 15px;
  }
  .product-item h2 {
    margin-top: 5px;
  }
  .add-to-cart {
    margin-right: 8px;
  }
</style>