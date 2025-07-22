<template>
  <teleport to="body">
    <div v-if="visible" class="modal-overlay" @click.self="close">
      <div class="modal">
        <h2>BLIK</h2>

        <template v-if="stage === 'input'">
          <p>Enter the 6-digit BLIK code to continue</p>
          <input
            v-model="blikCode"
            maxlength="6"
            placeholder="••••••"
            class="blik-input"
            :disabled="loading"
          />
          <div class="buttons">
            <button @click="submit" :disabled="loading || blikCode.length !== 6">Confirm</button>
            <button @click="close" class="cancel" :disabled="loading">Cancel</button>
          </div>
        </template>

        <template v-else-if="stage === 'loading'">
          <h3>Accept your payment in your bank app</h3>
          <loading-spinner />
        </template>

        <template v-else-if="stage === 'accepted'">
          <accepted-icon text="Your payment is accepted" />
        </template>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import LoadingSpinner from './LoadingSpinner.vue';
import AcceptedIcon from './AcceptedIcon.vue'

const props = defineProps({
  visible: Boolean,
});

const emit = defineEmits(['close']);

const blikCode = ref('123456');
const stage = ref('input'); // 'input' | 'loading' | 'accepted'
const loading = ref(false);

const router = useRouter();

function close() {
  if (loading.value) return; // prevent close during loading
  stage.value = 'input';
  blikCode.value = '';
  emit('close');
}

function submit() {
  if (blikCode.value.length !== 6) return;

  stage.value = 'loading';
  loading.value = true;

  setTimeout(() => {
    stage.value = 'accepted';

    setTimeout(() => {
      loading.value = false;
      navigateToOrderConfirmation();
    }, 2000);
  }, 3000);
}

function navigateToOrderConfirmation() {
  router.push('/order-confirmation');
  close();
}
</script>


<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background: white;
  padding: 24px;
  border-radius: 12px;
  max-width: 360px;
  width: 90%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.modal h2 {
  margin-bottom: 12px;
}

.modal p {
  margin-bottom: 16px;
}

.blik-input {
  width: 100%;
  padding: 12px;
  font-size: 18px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 20px;
  letter-spacing: 4px;
  box-sizing: border-box;
}

.buttons {
  display: flex;
  justify-content: space-between;
}

button {
  padding: 10px 18px;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  background-color: #009e60;
  color: white;
}

.cancel {
  background-color: #ccc;
  color: #333;
}
</style>
