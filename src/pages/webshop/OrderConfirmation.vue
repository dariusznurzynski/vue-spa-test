<template>
  <section class="section-order-confirmation" data-it-order-confirmation-page>
    <h1>Order confirmation</h1>
    <div class="order-confirmation">
      <table>
        <tbody>
          <tr>
            <th>Your order id</th>
            <td data-it-order-id="123">123</td>
          </tr>
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
            <td data-it-payment-method="Payment1">Payment Method 1</td>
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
          <tr data-it-order-product-id="1" data-it-order-product-category="cat1" data-it-product-stock-status="limited">
            <td>Product 1</td>
            <td data-it-order-item-quantity="10">10</td>
            <td data-it-order-item-price="1230">12300$</td>
          </tr>
          <tr data-it-order-product-id="2" data-it-order-product-category="cat2" data-it-product-stock-status="limited">
            <td>Product 2</td>
            <td data-it-order-item-quantity="9">9</td>
            <td data-it-order-item-price="1231">11079$</td>
          </tr>
          <tr data-it-order-product-id="3" data-it-order-product-category="cat3" data-it-product-stock-status="limited">
            <td>Product 3</td>
            <td data-it-order-item-quantity="8">8</td>
            <td data-it-order-item-price="1232">9856$</td>
          </tr>
          <tr data-it-order-product-id="4,5,6" data-it-order-product-category="cat4|cat5|cat6,cat7"
            data-it-product-stock-status="limited">
            <td>Multiply products</td>
            <td data-it-order-item-quantity="7">7</td>
            <td data-it-order-item-price="1233">8631$</td>
          </tr>
          <tr>
            <th>Summary</th>
            <td></td>
            <td>41866$</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
  <bottom-nav :links="links" />
</template>
<script setup>
import BottomNav from '@/components/BottomNav.vue';
const links = [
  {
    routeName: 'order-payment',
    text: 'Go Back to Payment Complete'
  },
  {
    routeName: 'webshop-profile',
    text: 'Go to profile'
  }
]
</script>