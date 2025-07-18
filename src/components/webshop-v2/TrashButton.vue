<template>
  <button class="trash-btn" @click="remove" >
    <img src="/images/trash-icon.svg"/>
  </button>
</template>
<style scoped>
  button {
    background: transparent;
    border: none;
    border-radius: 5px;
  }
  button:hover {
    background: rgba(255, 0, 0, 0.5);
  }
 img {
  width: 15px;
 }
</style>