<template>
  <div class="shopping-cart-item-small"
    :data-it-cart-product-id="product.id"
    :data-it-cart-product-category="product.cat"
    :data-it-product-stock-status="product.stockStatus"
  >
    <p>{{ product.name }}</p>
    <p>Quantity: {{ product.quantity }}</p>
    <button 
      class="close-buttons" 
      @click="removeItem" 
      data-it-cart-removal
    >
    x
    </button>
  </div>
</template>
<script setup>

const props = defineProps({
  product: {
    type: Object,
    required: true,
  }
})

const emit = defineEmits(['remove'])
const removeItem = () => {
  emit('remove', props.product.id)
}
</script>
<style scoped>
.shopping-cart-item-small {
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