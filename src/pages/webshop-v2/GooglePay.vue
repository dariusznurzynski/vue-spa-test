<template>
  <div class="popup">
    <template v-if="stage === 'initial'">
      <h2>Google Pay</h2>
      <p class="message">Confirm your payment</p>
      <button class="pay-button" @click="confirmPayment">Confirm Payment</button>
    </template>

    <template v-else-if="stage === 'processing'">
      <div class="spinner" />
      <p class="message">Processing payment...</p>
    </template>

    <template v-else-if="stage === 'done'">
      <svg class="checkmark" viewBox="0 0 52 52">
        <circle class="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
        <path class="checkmark-check" fill="none" d="M14 27l7 7 16-16" />
      </svg>
      <p class="message success">Payment complete</p>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const stage = ref('initial');

function confirmPayment() {
  stage.value = 'processing';

  setTimeout(() => {
    stage.value = 'done';

    setTimeout(() => {
      // Notify the opener window
      if (window.opener) {
        window.opener.postMessage({ status: 'success', paymentId: 12345 }, '*');
      }
      // Close this popup window
      window.close();
    }, 1000);
  }, 2000); // simulate 2 seconds processing delay
}
</script>

<style scoped>
.popup {
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: system-ui, sans-serif;
  padding: 1rem;
  text-align: center;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.message {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: #333;
}

.pay-button {
  padding: 0.75rem 1.5rem;
  background-color: #0070f3;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;
}

.pay-button:hover {
  background-color: #005bd1;
}

.spinner {
  border: 5px solid #f3f3f3;
  border-top: 5px solid #0070f3;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

.success {
  color: #2ecc71;
  font-weight: bold;
}

.checkmark {
  width: 72px;
  height: 72px;
  stroke: #2ecc71;
  stroke-width: 3;
  stroke-miterlimit: 10;
  fill: none;
  animation: scaleIn 0.3s ease-out forwards;
  margin-bottom: 1rem;
}

.checkmark-circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  animation: strokeCircle 0.6s ease-out forwards;
}

.checkmark-check {
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: strokeCheck 0.4s 0.6s ease-out forwards;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes scaleIn {
  0% { transform: scale(0.6); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

@keyframes strokeCircle {
  to { stroke-dashoffset: 0; }
}

@keyframes strokeCheck {
  to { stroke-dashoffset: 0; }
}
</style>
