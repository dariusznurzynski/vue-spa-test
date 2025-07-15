<template>
  <div class="checkout__summary">
    <h2 class="checkout__summary-title">Summary</h2>
    <table>
      <thead>
        <tr>
          <th>Product name</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr data-it-cart-product-id="1" data-it-cart-product-category="cat1" data-it-product-stock-status="in stock">
          <td>Product 1</td>
          <td>1</td>
          <td>1234$</td>
        </tr>
        <tr data-it-cart-product-id="2" data-it-cart-product-category="cat2" data-it-product-stock-status="in stock">
          <td>Product 2</td>
          <td>1</td>
          <td>1234$</td>
        </tr>
        <tr data-it-cart-product-id="3" data-it-cart-product-category="cat3" data-it-product-stock-status="in stock">
          <td>Product 3</td>
          <td>1</td>
          <td>1234$</td>
        </tr>
        <tr data-it-cart-product-id="4,5,6" data-it-cart-product-category="cat4|cat5|cat6,cat7"
          data-it-product-stock-status="limited">
          <td>Multiply products</td>
          <td>1</td>
          <td>1234$</td>
        </tr>
        <tr>
          <th>Summary</th>
          <td></td>
          <td>4936$</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>