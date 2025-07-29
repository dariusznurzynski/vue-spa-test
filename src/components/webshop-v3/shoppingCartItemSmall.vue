<template>
  <div class="shopping-cart-item-small">
    <img
      class="product-img"
      :src="useBaseUrl(product.img)"
    />
    <span>{{ product.quantity }}x {{ product.name }}</span>
    <span>{{ product.quantity * product.price}} {{ product.currency }}</span>
    <trash-button
      v-if="!hideRemoveBtn"
      @click="removeItem"
    />
  </div>
</template>
<script setup>
import TrashButton from '@/components/webshop-v2/TrashButton.vue'
import useBaseUrl from '@/composables/useBaseUrl'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
  hideRemoveBtn: {
    type: Boolean,
    default: false,
  }
})

const emit = defineEmits(['remove'])
const removeItem = () => {
  emit('remove', props.product)
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
  min-width: 350px;
}

.img-wrapper {
  border: 1px solid black;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-img {
  width: 90px;
}
</style>