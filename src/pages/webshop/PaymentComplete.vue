<template>
  <section class="section-payment-complete" data-it-payment-complete>
			<h1>Payment Complete</h1>
			<div class="payment-complete">
				<table>
					<thead>
						<tr>
							<th>Product name</th>
							<th>Quantity</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						<tr data-it-order-product-id="1" data-it-order-product-category="cat1" data-it-product-stock-status="in stock">
							<td>Product 1</td>
							<td>10</td>
							<td>12300$</td>
						</tr>
						<tr data-it-order-product-id="2" data-it-order-product-category="cat2" data-it-product-stock-status="in stock">
							<td>Product 2</td>
							<td>9</td>
							<td>11079$</td>
						</tr>
						<tr data-it-order-product-id="3" data-it-order-product-category="cat3" data-it-product-stock-status="in stock">
							<td>Product 3</td>
							<td>8</td>
							<td>9856$</td>
						</tr>
						<tr data-it-order-product-id="4,5,6" data-it-order-product-category="cat4|cat5|cat6,cat7" data-it-product-stock-status="in stock">
							<td>Multiply products</td>
							<td>7</td>
							<td>8631$</td>
						</tr>
						<tr>
							<th>Summary</th>
							<td></td>
							<td data-it-payment-amount="41866">41866$</td>
						</tr>
						<tr>
							<th>Payment</th>
							<td></td>
							<td data-it-payment-method="Payment1">Payment Method 1</td>
						</tr>
					</tbody>
				</table>
			</div>
			<bottom-nav 
				:links="links"
			/>
		</section>
</template>
<script setup>
import BottomNav from '../../components/BottomNav.vue';

const links = [
	{
		routeName: 'order-payment',
		text: 'Go Back to Payment'
	},
	{
		routeName: 'order-confirmation',
		text: 'Go to order complete'
	}
]
</script>