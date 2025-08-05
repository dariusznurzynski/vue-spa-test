<template>
  <div class="orders p-4">
    <h2 class="text-xl font-bold mb-4">Orders</h2>
    <div v-if="orders.length === 0" class="text-gray-500">No orders found.</div>
    <ul class="space-y-4">
      <li v-for="order in orders" :key="order.id" class="border p-4 rounded shadow-sm mb-16">
        <div class="flex justify-between items-center">
          <div>
            <p><strong>Order #:</strong> {{ order.id }}</p>
            <p><strong>Date:</strong> {{ order.date }}</p>
            <p><strong>Status:</strong> <span :class="['status', statusColor(order.status)]">{{ order.status }}</span></p>
          </div>
          <div class="text-right">
            <p><strong>Total:</strong> ${{ order.total.toFixed(2) }}</p>
          </div>
        </div>
        <div class="products mt-3 flex gap-3 mb-16">
          <img
            v-for="prod in order.products"
            :key="prod.id"
            :src="useBaseUrl(prod.img)"
            :alt="prod.name"
            class="product-icon"
            title="prod.name"
          />
        </div>
        <button @click="goToReturns(order)" class="return-button mt-2 px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 transition">
          Return
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import products from '@/mocks/webshop-v2/products'
import useBaseUrl from '@/composables/useBaseUrl'
import { useRouter } from 'vue-router'

const router = useRouter()
// Example orders
const orders = [
  { id: '1001', date: '2025-07-23', status: 'Pending', total: 129.99 },
  { id: '1002', date: '2025-07-22', status: 'Shipped', total: 89.5 },
  { id: '1003', date: '2025-07-20', status: 'Delivered', total: 212.0 }
]

// Helper: Assign 1-3 random products to each order
function getRandomProducts() {
  const count = Math.floor(Math.random() * 3) + 1 // 1 to 3
  const shuffled = products.sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

orders.forEach(order => {
  order.products = getRandomProducts()
})

function statusColor(status) {
  switch (status) {
    case 'Pending':
      return 'text-yellow-500'
    case 'Shipped':
      return 'text-blue-500'
    case 'Delivered':
      return 'text-green-600'
    case 'Cancelled':
      return 'text-red-500'
    default:
      return 'text-gray-500'
  }
}

const goToReturns = (order) => {
  const productsIds = order.products.map((p) => (p.id))

  router.push({
    name: 'product-return-v3',
    query: {
      orderId: order.id,
      productsIds: productsIds.join(',')
    }
  })
}
</script>

<style scoped>
.orders {
  max-width: 700px;
  margin: 2rem auto;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #333;
}

.orders h2 {
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #222;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.2rem 1.5rem;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: default;
}

li:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
}

.flex > div {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

strong {
  font-weight: 600;
}

.status {
  font-weight: 700;
  padding: 0.15rem 0.5rem;
  border-radius: 8px;
  font-size: 0.9rem;
  display: inline-block;
}

.text-yellow-500 {
  background: #fef3c7;
  color: #b45309;
}

.text-blue-500 {
  background: #bfdbfe;
  color: #2563eb;
}

.text-green-600 {
  background: #d1fae5;
  color: #065f46;
}

.text-red-500 {
  background: #fecaca;
  color: #b91c1c;
}

.text-gray-500 {
  background: #e5e7eb;
  color: #6b7280;
}

.products {
  margin-top: 1rem;
  display: flex;
  gap: 12px;
}

.product-icon {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 2px 6px rgb(0 0 0 / 0.12);
  transition: transform 0.15s ease;
}

.product-icon:hover {
  transform: scale(1.15);
  box-shadow: 0 6px 12px rgb(0 0 0 / 0.2);
}

.return-button {
  background-color: #e0f2fe; /* light blue */
  color: #0369a1; /* soft blue text */
  font-size: 0.875rem;
  font-weight: 500;
  padding: 6px 12px;
  border: 1px solid #bae6fd; /* soft border */
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.return-button:hover {
  background-color: #bae6fd; /* slightly darker on hover */
}

.mb-16 {
  margin-bottom: 16px;
}

</style>
