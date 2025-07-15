<template>
  <div :data-it-product="isProductReady ? '' : null">
    <p 
      :data-it-product-id="productId"
      :data-it-product-category="productCategory"
      :data-it-product-stock-status="productStockStatus">
      {{ text }}
    </p>
  </div> 
  <button @click="changeAttrs">Test</button>
</template>
<script setup>
  import {ref } from 'vue'

  const productId = ref(null)
  const productCategory = ref(null)
  const productStockStatus = ref(null)
  const isProductReady = ref(false)
  
  const text = ref('Product has NO attrs')
  const changeAttrs = () => {
    productId.value = 1
    productCategory.value = 1
    productStockStatus.value = 'out'
    text.value = 'Product has it-attrs'
    isProductReady.value = true
  } 
</script>