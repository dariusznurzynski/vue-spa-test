<template>
  <div class="order-return-dialog__root">
    <div class="order-return-dialog__content" data-it-return-product>
				<h3>Order #{{ orderId }}</h3>
				<p data-it-return-product-reason="Order #1 test reason"> Test reason </p>
				<p data-it-return-product-lot="Order {{ orderId }} test lot"> Test lot </p>
				<p data-it-return-product-expiration="Order #1 05/06/2025">Expiration date: 05/06/2025 </p>

				<div data-it-return-product-id="1" data-it-return-product-category="testcategory" data-it-return-product-quantity="1" data-it-product-stock-status="in stock">
					Product #1 | TestCategory | Qty: 1
				</div>

				<div data-it-return-product-id="1" data-it-return-product-category="testcategory2" data-it-return-product-quantity="2" data-it-product-stock-status="in stock">
					Product #2 | TestCategory2 | Qty: 2
				</div>

				<button style="margin-top: 20px;" @click="closeDialog()">Close</button>
    </div>
  </div>
</template>
<script setup>
  defineProps({
    orderId: {
      type: Number,
      required: true
    }
  })

	const emit = defineEmits(['close'])

	const closeDialog = () => {
		emit('close')
	}
</script>
<style scoped>
.order-return-dialog__root {
	position: absolute;
	width: 100%; 
	height: 100%;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.6);
}

.order-return-dialog__content {
	background: white;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 20px;
}
</style>