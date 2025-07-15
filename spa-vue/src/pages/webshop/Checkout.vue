<template>
  <h2>Checkout</h2>
  <div
    class="checkout"
    data-it-checkout-page
  >
    <client-form />
    <payment />
    <summary-test />
  </div>
  <!-- <div class="nav">
    <button @click="goToCart">Go back to cart</button>
    <button @click="goToReview">Go to Order Review</button>
  </div> -->
  <bottom-nav 
    :links="links"
  />
</template>
<script setup>
import { useRouter } from 'vue-router';
import ClientForm from '@/components/ClientForm.vue';
import Payment from '@/components/Payment.vue';
import SummaryTest from '@/components/Summary.vue';
import bottomNav from '@/components/bottomNav.vue';

const router = useRouter()

const links = [
  {
    routeName: 'shopping-cart',
    text: 'Go back to cart'
  },
  {
    routeName: 'order-review',
    text: 'Go to Order Review',
    attrs: {
      'data-it-cart-checkout': ''
    }
  }
]

const goToCart = () => {
  router.push({
    name: 'shopping-cart'
  })
}

const goToReview = () => {
  router.push({
    name: 'order-review'
  })
}
</script>
<style scoped>
.checkout {
  display: flex;
  justify-content: space-around;
}
</style>