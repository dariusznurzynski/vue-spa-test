<template>
<button class="account-button">
  <img class="account-icon" :src="useBaseUrl('images/my-account-5.svg')">
</button>
</template>
<script setup>
  import useBaseUrl from '@/composables/useBaseUrl.js'
</script>
<style scoped>
.account-button {
  /* display: flex; */
  width: fit-content;
  min-width: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
}

.account-button:hover {
  background: rgba(255, 255, 255, 0.3)
}


.account-icon {
  width: 20px;
}
</style>