<template>
  <webshop-header v-if="!isNavHidden" />
  <router-view />
</template>
<script setup>
  import WebshopHeader from '@/components/webshop-v2/WebshopHeader.vue';
  import {computed} from 'vue'

  const isNavHidden = computed(() => {
    return window.location.pathname.includes('google-pay')
  })
</script>
