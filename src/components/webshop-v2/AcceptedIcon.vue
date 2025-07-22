<template>
  <div class="accepted-view">
    <div class="checkmark-wrapper">
      <svg class="checkmark" viewBox="0 0 52 52">
        <circle class="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
        <path class="checkmark-check" fill="none" d="M14 27l7 7 16-16" />
      </svg>
    </div>
    <p class="success-text">{{ text }}</p>
  </div>
</template>

<script setup>
// No logic needed here — purely presentational
defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.accepted-view {
  text-align: center;
  padding: 1rem;
}

.checkmark-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.checkmark {
  width: 72px;
  height: 72px;
  stroke: #2ecc71;
  stroke-width: 3;
  stroke-miterlimit: 10;
  fill: none;
  animation: scaleIn 0.3s ease-out forwards;
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

@keyframes strokeCircle {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes strokeCheck {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes scaleIn {
  0% {
    transform: scale(0.6);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.success-text {
  font-size: 1.2rem;
  color: #2ecc71;
  font-weight: bold;
}
</style>
