<template>
  <div class="delivery-and-payment-section">
    <div class="details">
      <div class="card">
        <h2>Shipment recipient</h2>
        <div class="address">
          <p>Will Smith</p>
          <p>Green Road 69</p>
          <p>NY 10011, USA</p>
          <p>111 222 333</p>
        </div>
        <button class="card-button">Edit address</button>
      </div>
      <div class="card">
        <h2>Delivery</h2>
        <div class="delivery-type">
          <p>Delivery icon</p>
          <p>Parcel locker</p>
        </div>
        <button class="card-button delivery-button">
          Change delivery method
        </button>
      </div>
      <div class="card">
        <h2>Items</h2>
        <div class="items-list" data-it-checkout-page='' data-it-review-page=''>
          <shopping-cart-item-small
            v-for="product in shoppingCartStore.products"
            :key="product.id"
            :product="product"
            hide-remove-btn
          />
        </div>
      </div>
    </div>
    <div class="payment">
      <div class="card">
        <h2>Summary</h2>
        <p><span>Products: </span> {{ shoppingCartStore.total }} zl</p>
        <p><span>Delivery: </span> 00,00 zl</p>
        <p><span>Total: </span> {{ shoppingCartStore.total }} zl</p>
        <button class="payment-button" @click="startPayment">
          Pay by {{ paymentMethod }}
        </button>
      </div>
      <div class="card">
        <h2>Payment method</h2>

        <div
          class="payment-button-2"
          :class="{ active: paymentMethod === 'GOOGLE_PAY' }"
          @click="paymentMethod = 'GOOGLE_PAY'"
        >
          <div class="label">
            <img
              src="https://img.icons8.com/color/32/google-pay-india.png"
              width="24"
              height="24"
            />
            Google Pay
          </div>
        </div>

        <div
          class="payment-button-2"
          :class="{ active: paymentMethod === 'BLIK' }"
          @click="paymentMethod = 'BLIK'"
        >
          <div class="label">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Blik_logo.svg"
              width="24"
              height="24"
            />
            BLIK
          </div>
        </div>
      </div>
    </div>
  </div>
  <blik-popup :visible="isBlikPopupVisible" @close="closeBlikPopup" />
</template>
<script setup>
import { useRouter } from "vue-router";
import { useShoppingCartStore } from "@/stores/shoppingCartV2";
import shoppingCartItemSmall from "@/components/webshop-v2/shoppingCartItemSmall.vue";
import BlikPopup from "@/components/webshop-v2/BlikPopup.vue";
import { computed, ref, onBeforeUnmount } from "vue";

const router = useRouter();
const shoppingCartStore = useShoppingCartStore();

const paymentMethod = ref("BLIK");

const isBlikPopupVisible = ref(false);

const goToCart = () => {
  router.push({
    name: "shopping-cart",
  });
};

const goToReview = () => {
  router.push({
    name: "order-review",
  });
};

const handlePaymentCompleteByGooglePay = () => {
  if (window.WSC && window.WSC.modules.instatag) {
    let event = WSC.modules.instatag.createEvent("event92");

    // Payment method
    event.getEvar("eVar71").value = "google_pay";
    // payment amount
    event.getEvar("eVar111").value = shoppingCartStore.total;

    event.getEvar("eVarOrderProductId").value = shoppingCartStore.products
      .map((product) => product.id)
      .join(",");
    event.getEvar("eVarOrderProductCategory").value = shoppingCartStore.products
      .map((product) => product.cat)
      .join(",");
    event.getEvar("eVarTransactionProductStockStatus").value =
      shoppingCartStore.products
        .map((product) => product.stockStatus)
        .join(",");

    // send it
    event.fire();
  }
};

const messageHandler = (event) => {
  // upewnij się, że pochodzi z zaufanego źródła
  if (event.origin !== window.location.origin) return

  const { status } = event.data || {}
  if (status === 'success') {
    handlePaymentCompleteByGooglePay()

    setTimeout(() => {
      router.push({ name: 'order-confirmation-v2' })
    }, 500)
  }
}

const startPaymentByInstatag = (paymentType) => {
    if (window.WSC && window.WSC.modules.instatag) {
    let event = WSC.modules.instatag.createEvent("event91");

    // Payment method
    event.getEvar("eVar71").value = paymentType;
    // payment amount
    event.getEvar("eVar111").value = shoppingCartStore.total;

    event.getEvar("eVarOrderProductId").value = shoppingCartStore.products
      .map((product) => product.id)
      .join(",");
    event.getEvar("eVarOrderProductCategory").value = shoppingCartStore.products
      .map((product) => product.cat)
      .join(",");
    event.getEvar("eVarTransactionProductStockStatus").value =
      shoppingCartStore.products
        .map((product) => product.stockStatus)
        .join(",");

    // send it
    event.fire();
  }
}

const openGooglePayWindow = () => {
  const width = 500;
  const height = 300;
  const left = 0;
  const top = (screen.height - height) / 4;

  const paymentWindow = window.open(
    "google-pay",
    "GooglePayWindow",
    `width=${width},height=${height},left=${left},top=${top},resizable=no`
  );

  if (!paymentWindow) {
    alert("Please allow popups.");
    return;
  }

  // Optional: listen for postMessage response
  window.addEventListener("message", messageHandler);

  startPaymentByInstatag('google_pay')
};

const startPayment = () => {
  if (paymentMethod.value === "BLIK") {
    isBlikPopupVisible.value = true;
    startPaymentByInstatag('blik');
  } else if (paymentMethod.value === "GOOGLE_PAY") {
    openGooglePayWindow();
  }
};

const closeBlikPopup = () => {
  isBlikPopupVisible.value = false;
};

onBeforeUnmount(() => {
  window.removeEventListener("message", messageHandler)
})
</script>
<style scoped>
.delivery-and-payment-section {
  display: flex;
  width: 100%;
  gap: 20px;
}

.details {
  width: 65%;
}

.payment {
  width: 35%;
}

.card {
  /* max-width: 460px; */
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 24px;
  font-family: "Segoe UI", sans-serif;
  color: #222;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
  margin-bottom: 10px;
}

.card h2 {
  font-size: 18px;
  margin-bottom: 16px;
  border-bottom: 1px solid #eee;
  padding-bottom: 8px;
}

.address p {
  margin: 4px 0;
  font-size: 14px;
}

.card .card-button {
  margin-top: 12px;
  padding: 0;
  background: none;
  border: none;
  color: #0073e6;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
}

.card .card-button:hover {
  text-decoration: underline;
}

.payment-button {
  background-color: #4caf50;
  color: white;
  padding: 14px 28px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;
}

.payment-button:hover {
  background-color: #45a049;
  transform: scale(1.02);
}

.payment-button:active {
  transform: scale(0.98);
}

.payment-button-2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border: 1px solid #ccc;
  color: #111;
  padding: 12px 16px;
  margin-bottom: 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: border 0.2s ease, background 0.2s ease;
}

.payment-button-2:hover {
  border-color: #009e60;
  background-color: #f3fef7;
}

.payment-button-2.active {
  border-color: #009e60;
  box-shadow: inset 0 0 0 1px #009e60;
}

.payment-button-2 .label {
  display: flex;
  align-items: center;
  gap: 10px;
}

.payment-button-2 .badge {
  background-color: #00cc66;
  color: #fff;
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: bold;
}
</style>