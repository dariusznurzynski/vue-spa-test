<template>
  <h2>Profile</h2>
  <div class="order-list">
    <order-link 
      v-for="order in orders"
      :id="order.id"
      :key="order.id"
      @click="onOrderReturnClicked(order.id)"
    />
  </div>
  <button @click="goBackToList">Go back to list</button>
  <return-order-dialog
    v-if="isOrderDialogVisible"
    :order-id="orderIdChosen"
    @close="closeReturnDialog"
  />
</template>
<script setup>
  import OrderLink from '@/components/webshop/OrderLink.vue';
  import ReturnOrderDialog from '@/components/webshop/ReturnOrderDialog.vue';
  import { useRouter } from 'vue-router'
  import { ref } from 'vue'

  const router = useRouter()

  const orders = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ]

  const isOrderDialogVisible = ref(false)
  const orderIdChosen = ref(null)

  const goBackToList = () => {
    router.push({ name: 'webshop-home' })
  }

  const onOrderReturnClicked = (orderId) => {
    orderIdChosen.value = orderId
    isOrderDialogVisible.value = true
  } 

  const closeReturnDialog = () => {
    isOrderDialogVisible.value = false
  }
</script>
<style scoped>
 .order-list {
  display: flex;
  flex-direction: column;
 }
 .order-link {
  margin-bottom: 15px;
 }
</style>
