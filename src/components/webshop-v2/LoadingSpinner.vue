<template>
  <div class="loading-overlay">
    <div class="spinner"></div>
  </div>
</template>

<style scoped>
.loading-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px; /* Adjust to fit your product area */
  width: 100%;
  background-color: #fafafa;
  border-radius: 8px;
  border: 1px solid #ddd;
}

.spinner {
  border: 4px solid #ddd;
  border-top: 4px solid #4caf50; /* green accent */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
