<template>
  <div class="product-item"
    :data-it-product-id="product.id"
    :data-it-product-category="product.cat"
    :data-it-product-stock-status="product.stockStatus"
    @click="goToProduct(product.id)"
  >
    <img 
      class="product-img"
      :src="product.img" 
    />
    <p class="product-name">{{ product.name }}</p>
    <p>{{ product.shortDesc }}</p>
    <div class="bottom-panel">
      <span class="product-price">{{ product.price}} {{ product.currency }}</span>
      <add-to-cart-button
        data-it-cart-addition
        @click.stop.prevent="addToCart(product)"
      />
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router"
import AddToCartButton from '@/components/webshop-v2/AddToCartButton.vue'


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
    /* border: 1px solid black; */
    max-width: 300px;
    padding: 15px 15px;
    box-shadow: 0 4px 24px 0 rgba(0,0,0,.1);
    font-family: system-ui,-apple-system,BlinkMacSystemFont,\.SFNSText-Regular,Helvetica,Arial,sans-serif;
    cursor: pointer;
  }
  .product-item:hover {
    box-shadow: 0 2px 24px 0 #0A8800;
  }
  .product-img {
    max-width: 200px;
  }
  .product-name {
    text-overflow: ellipsis;
    color: #777;
    font-size: 13px;
    font-weight: inherit;
    line-height: 20px;
  }
  .bottom-panel {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .product-item h2 {
    margin-top: 5px;
  }
  .add-to-cart {
    margin-right: 8px;
  }
  .product-price {
    line-height: 1;
  }
</style>