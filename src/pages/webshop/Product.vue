<template>
  <main>
		<section class="section-product" v-if="product && product.id">
			<h1>Product view</h1>
			<div class="product" 
				v-bind:data-it-product="hasProduct ? '' : null"
			>
				<div class="product__content" :data-it-product-id="product.id" :data-it-product-category="product.cat" :data-it-product-stock-status="product.stockStatus">
					<h2 class="product__title">Product {{ product.id }}</h2>
					<p class="product__desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas rerum hic, reprehenderit minus consequatur nam quasi nulla, minima, sit aperiam rem. Nulla natus amet molestias, autem doloribus eum veniam animi.</p>
					<p class="product__desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas rerum hic, reprehenderit minus consequatur nam quasi nulla, minima, sit aperiam rem. Nulla natus amet molestias, autem doloribus eum veniam animi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas rerum hic, reprehenderit minus consequatur nam quasi nulla, minima, sit aperiam rem. Nulla natus amet molestias, autem doloribus eum veniam animi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas rerum hic, reprehenderit minus consequatur nam quasi nulla, minima, sit aperiam rem. Nulla natus amet molestias, autem doloribus eum veniam animi.</p>
					<p class="product__desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas rerum hic, reprehenderit minus consequatur nam quasi nulla, minima, sit aperiam rem. Nulla natus amet molestias, autem doloribus eum veniam animi.</p>
					<!-- <button class="webshop-btn" data-it-cart-addition="" onclick="addProduct('1', 'cat1')">Add to cart</button> -->
					<button @click="quickChangeOfAttrs">Change attrs</button>
				</div>
			</div>
		</section>

		<h3>Similar products</h3>

		<section class="similar-products" style="display: flex; flex-direction: row;">
			<div data-it-product-list-view="" data-it-product-list-id="901" data-it-product-list-category="cat901" data-it-product-stock-status="In stock">
				<p style="width: 100px; height: 50px;">Product 901</p>
			</div>
			<div data-it-product-list-view="" data-it-product-list-id="902" data-it-product-list-category="cat902" data-it-product-stock-status="In stock"> 
				<p style="width: 100px; height: 50px;">Product 902</p>
			</div>
			<div data-it-product-list-view="" data-it-product-list-id="903" data-it-product-list-category="cat903" data-it-product-stock-status="In stock">
				<p style="width: 100px; height: 50px;">Product 903</p>
			</div>

			<div data-it-product-list-view="" data-it-product-list-id="904" data-it-product-list-category="cat904" data-it-product-stock-status="In stock">
				<p style="width: 100px; height: 50px;">Product 904</p>
			</div>
		</section>

		<h3>Some text here</h3>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore deserunt autem voluptate dolore illum quas doloremque labore praesentium maiores tempora, debitis itaque doloribus ullam, voluptatum, necessitatibus architecto consequuntur! Error saepe perferendis animi nesciunt doloribus nulla porro minima sapiente blanditiis quo.</p>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore deserunt autem voluptate dolore illum quas doloremque labore praesentium maiores tempora, debitis itaque doloribus ullam, voluptatum, necessitatibus architecto consequuntur! Error saepe perferendis animi nesciunt doloribus nulla porro minima sapiente blanditiis quo.</p>

		<h3>Buy with this</h3>

		<section class="recommended-products" style="display: flex; flex-direction: row;">
			<div data-it-product-list-view="" data-it-product-list-id="905" data-it-product-list-category="cat905" data-it-product-stock-status="In stock">
				<p style="width: 100px; height: 50px;">Product 905</p>
			</div>
			<div data-it-product-list-view="" data-it-product-list-id="906" data-it-product-list-category="cat906" data-it-product-stock-status="In stock">
				<p style="width: 100px; height: 50px;">Product 906</p>
			</div>

			<div data-it-product-list-view="" data-it-product-list-id="907" data-it-product-list-category="cat907" data-it-product-stock-status="In stock">
				<p style="width: 100px; height: 50px;">Product 907</p>
			</div>
		</section>
	</main>
</template>
<script setup>
	import { useProductsStore } from '@/stores/products.js'
	import { useRoute } from 'vue-router'
	import { ref} from 'vue'

	const productsStore = useProductsStore()
	const route = useRoute()
	const productId = route.params.id

	const product = ref(null)
	const hasProduct = ref(true)
	product.value = productsStore.getProductById(parseInt(productId))

	const quickChangeOfAttrs = () => {
		hasProduct.value = false

		const prod3 = productsStore.getProductById(3)
		product.value = prod3

		hasProduct.value = true
	}

</script>

<style setup>
.similar-products > div, .recommended-products > div {
  border: 1px solid black;
  margin-right: 3px;
  padding: 10px;
}
</style>