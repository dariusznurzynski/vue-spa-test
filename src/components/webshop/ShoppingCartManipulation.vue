<template>
  <h3>Change params for products in shopping cart</h3>
  <div>
    <p>Index: </p>
    <input v-model="shoppingCartIndex" type="number" />
  </div>
  <div>
    <p>Id: </p>
    <input v-model="productId" type="text" />
  </div>
  <div>
    <p>Category: </p>
    <input v-model="productCategory" type="text" />
  </div>
  <div>
    <p>Stock status: </p>
    <input v-model="productStockStatus" type="text" />
  </div>
  <button @click="updateShoppingCartItem">Update</button>
</template>
<script setup>
  import { ref } from 'vue'
  import { useShoppingCartStore } from '@/stores/shoppingCart'
  const shoppingCartIndex = ref(0)
  const productId = ref('')
  const productCategory = ref('')
  const productStockStatus = ref('')
  const shoppingCartStore = useShoppingCartStore()

  const updateShoppingCartItem = () => {
    const data = {
      id: productId.value,
      cat: productCategory.value,
      stockStatus: productStockStatus.value,
    }
    shoppingCartStore.update(shoppingCartIndex.value, data)
  }
</script>
<style scoped>
  div {
    display: flex;
    align-items: center;
  }
  p {
    min-width: 100px;
  }
</style>