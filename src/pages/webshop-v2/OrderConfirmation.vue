<template>
  <div class="order-confirmation">
    <accepted-icon
      text="Thank you for your purchase! Your order is confirmed and on its way."
    />
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import { useShoppingCartStore } from "@/stores/shoppingCartV2.js";
import AcceptedIcon from "@/components/webshop-v2/AcceptedIcon.vue";

const shoppingCartStore = useShoppingCartStore();

onMounted(() => {
  if (window.WSC && WSC.modules.instatag) {
    let event = WSC.modules.instatag.createEvent("order_confirmation_page");

    event.getEvar("eVar71").value = "visa";
    event.getEvar("eVar70").value = "1293";

    const orderProducts = shoppingCartStore.products.map((p) => ({
      id: p.id,
      category: p.cat,
      qty: p.qty?.toString() || "1",
      price: p.price.toString(),
      stock: p.stockStatus || "unknown"
    }))

    event.getEvar("eVarOrderProductId").value = orderProducts;
    event.fire();
  }
});
</script>