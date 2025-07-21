<template>
  <div class="amount-changer">
    <button class="amount-btn" @click="decrease">−</button>
    <p class="amount-text">{{ amount }}</p>
    <button class="amount-btn" @click="increase">+</button>
  </div>
</template>
<script setup>
  import { ref } from 'vue'

  const emit = defineEmits(['decrease', 'increase'])
  const props = defineProps({
    min: {
      type: Number, 
      default: 1
    }
  })
  const amount = ref(1)

  const decrease = () => {
    if (amount.value === props.min) {
      return
    } 
    amount.value = amount.value + 1
    emit('decrease', amount)
  }

  const increase = () => {
    amount.value = amount.value + 1
    emit('increase', amount)
  }
</script>
<style>
.amount-changer {
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: #fafafa;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  width: fit-content;
}

.amount-btn {
  width: 36px;
  height: 36px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 50%;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.1s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.amount-btn:hover {
  background-color: #e0e0e0;
  transform: scale(1.05);
}

.amount-text {
  font-size: 16px;
  font-weight: 500;
  width: 24px;
  text-align: center;
  margin: 0;
}

</style>