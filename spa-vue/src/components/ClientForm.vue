<template>
  <div class="checkout__address">
    <h2 class="checkout__address-title">Address</h2>
    <form class="checkout__form">
      <label>Name:</label>
      <input type="text">
      <label>Surname:</label>
      <input type="text">
      <label>Phone:</label>
      <input type="tel">
      <label>Address:</label>
      <input type="text">
    </form>
  </div>
</template>
<style scoped>
  .checkout__form {
    display: flex;
    flex-direction: column;
  }
</style>