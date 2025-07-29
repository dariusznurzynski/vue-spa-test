<template>
  <div class="shopping-cart-item"
  >
    <div class="img-wrapper">
      <img :src="useBaseUrl(product.img)" alt="IMG"/>
    </div>
    <p>{{ product.quantity }}x {{ product.price}} {{ product.currency}} </p>
    <p>{{ product.name }}</p>
    <amount-changer :min="0" :amount="product.quantity" @decrease="emit('decrease')" @increase="emit('increase')"/>
    <trash-button @click="removeProduct(product)"/>
  </div>
</template>
<script setup>
import useBaseUrl from '@/composables/useBaseUrl'
import TrashButton from '@/components/webshop-v2/TrashButton.vue'
import AmountChanger from '@/components/webshop-v2/amountChanger.vue'


defineProps({
  product: {
    type: Object,
    required: true,
  }
})

const emit = defineEmits(['removeProduct', 'increase', 'decrease'])

const removeProduct = (product) => {
  emit('removeProduct', product)
} 

</script>
<style scoped>
.shopping-cart-item {
  display: flex;
  padding: 12px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  gap: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.shopping-cart-item:last-of-type {
  /* border-bottom: none; */
}

.img-wrapper {
  /* border: 1px solid black; */
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  height: 100%;
  /* border: 1px solid rgba(0, 0, 0, 0.1); */
}


</style>
