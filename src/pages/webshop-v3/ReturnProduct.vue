<template>
  <div class="return-view">
    <h2 class="title">Order #{{ orderId }}</h2>
    <p class="expiration">
      Return expires on: {{ expirationDate }}
    </p>
    <p class="lot">
      Lot number: {{ orderLot }}
    </p>

    <ul class="product-list">
      <li v-for="prod in selectedProducts" :key="prod.id" class="product">
        <img :src="useBaseUrl(prod.img)" :alt="prod.name" class="product-img" />
        <div
          class="product-info"
        >
          <p class="name">{{ prod.name }}</p>
          <p class="qty">Qty: {{ prod.quantity }}</p>
        </div>
      </li>
    </ul>

    <label class="label">Return reason:</label>
    <textarea
      v-model="returnReason"
      class="textarea"
      placeholder="Why are you returning?"
    ></textarea>

    <button @click="requestReturn" class="submit-btn">Request Return</button>
  </div>
  <div v-if="showModal" class="modal-overlay">
    <div class="modal">
      <accepted-icon text="Thank you for your request." />
      <button @click="showModal = false" class="modal-close">Close</button>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";
import allProducts from "@/mocks/webshop-v2/products.js";
import useBaseUrl from "@/composables/useBaseUrl";
import AcceptedIcon from "@/components/webshop-v2/AcceptedIcon.vue";

const route = useRoute();
const orderId = route.query.orderId || "";
const productIds = route.query.productsIds?.split(",") || [];
const showModal = ref(false);

const selectedProducts = allProducts
  .filter((p) => productIds.includes(p.id))
  .map((p) => ({ ...p, quantity: 1 }));

const returnReason = ref("");
const expirationDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 14)
  .toISOString()
  .slice(0, 10);

const itReturnReason = ref(null);
const itReturnProduct = ref(null);

const orderLot = "LOT-" + Math.floor(100000 + Math.random() * 900000);

function requestReturn() {
  itReturnReason.value = returnReason.value;
  itReturnProduct.value = "";
  showModal.value = true;

  if (window.WSC && window.WSC.modules.instatag) {
    // ES6
    let event = window.WSC.modules.instatag.createEvent("event113");

    // reason
    event.getEvar("eVar116").value = returnReason.value;
    // lot
    event.getEvar("eVar117").value = orderLot;
    // exp date
    event.getEvar("eVar118").value = expirationDate;
    // products

    event.getEvar("returnProductId").value = selectedProducts.map((p) => ({
      id: p.id,
      category: p.cat,
      qty: p.quantity,
      stock: p.stockStatus,
    }));

    // send it
    event.fire();
  }
}
</script>
<style scoped>
.return-view {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
  font-family: sans-serif;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.expiration {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1.5rem;
}

.product-list {
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
}

.product {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}

.product-img {
  width: 48px;
  height: 48px;
  border-radius: 6px;
  object-fit: cover;
}

.product-info {
  flex-grow: 1;
}

.name {
  font-weight: 500;
}

.qty {
  font-size: 0.85rem;
  color: #777;
}

.label {
  display: block;
  margin-bottom: 0.25rem;
  font-weight: 500;
}

.textarea {
  width: 100%;
  min-height: 80px;
  padding: 0.5rem;
  font-size: 0.9rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-bottom: 1rem;
}

.submit-btn {
  padding: 0.5rem 1rem;
  background: #3b82f6;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s ease;
}

.submit-btn:hover {
  background: #2563eb;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
}

.modal {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.modal-text {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.modal-close {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
}

.modal-close:hover {
  background: #2563eb;
}
</style>

