<template>
  <h1>Order review</h1>
  <div class="order-review" data-it-review-page>
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <td>Will</td>
        </tr>
        <tr>
          <th>Surname</th>
          <td>Smith</td>
        </tr>
        <tr>
          <th>Phone</th>
          <td>+1-202-555-0182</td>
        </tr>
        <tr>
          <th>Address</th>
          <td>630 Wellington Dr. Bronx, NY 10473</td>
        </tr>
        <tr>
          <th>Payment</th>
          <td>Payment Method 1</td>
        </tr>
      </tbody>
    </table>
    <table>
      <thead>
        <tr>
          <th>Product name</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr data-it-cart-product-id="1" data-it-cart-product-category="cat1" data-it-product-stock-status="limited">
          <td>Product 1</td>
          <td>10</td>
          <td>12300$</td>
        </tr>
        <tr data-it-cart-product-id="2" data-it-cart-product-category="cat2" data-it-product-stock-status="limited">
          <td>Product 2</td>
          <td>9</td>
          <td>11079$</td>
        </tr>
        <tr data-it-cart-product-id="3" data-it-cart-product-category="cat3" data-it-product-stock-status="limited">
          <td>Product 3</td>
          <td>8</td>
          <td>9856$</td>
        </tr>
        <tr data-it-cart-product-id="4,5,6" data-it-cart-product-category="cat4|cat5|cat6,cat7"
          data-it-product-stock-status="in stock">
          <td>Multiply products</td>
          <td>7</td>
          <td>8631$</td>
        </tr>
        <tr>
          <th>Summary</th>
          <td></td>
          <td>41866$</td>
        </tr>
      </tbody>
    </table>
  </div>
  <bottom-nav
    :links="links"
  />
</template>
<script setup>
import BottomNav from '@/components/BottomNav.vue';
const links = [
  {
    routeName: 'webshop-checkout',
    text: 'Go back to checkout'
  },
  {
    routeName: 'order-payment',
    text: 'Go to payment'
  }
]
</script>
<style scoped>
.order-review {
  display: flex;
  justify-content: space-around;
}
</style>