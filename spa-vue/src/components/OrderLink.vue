<template>
  <div class="order-link">
    Order {{ orderId }}
    <button>Return</button>
  </div>
</template>
<script setup>
  defineProps({
    id: {
      type: Number,
      required: true,
    }
  })
</script>