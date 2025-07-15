<template>
  <div class="shopping-cart-item"
    :data-it-cart-product-id="product.id"
    :data-it-cart-product-category="product.cat"
    :data-it-product-stock-status="product.stockStatus"
  >
    <div class="img-wrapper">
      <img alt="IMG"/>
    </div>
    <p>{{ product.name }}</p>
    <p>{{ product.shortDesc }}</p>
    <button class="close-buttons" @click="removeProduct(product.id)" data-it-cart-removal>x</button>
  </div>
</template>
<script setup>

defineProps({
  product: {
    type: Object,
    required: true,
  }
})

const emit = defineEmits(['removeProduct'])

const removeProduct = (id) => {
  emit('removeProduct', id)
} 

</script>
<style scoped>
.shopping-cart-item {
  display: flex;
  border: 1px solid black;
  padding: 12px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  gap: 15px;
}

.img-wrapper {
  border: 1px solid black;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
