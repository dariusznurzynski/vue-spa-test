<template>
  <nav class="it-vue-navigation"
    v-if="!isNavHidden"
  >
    <router-link :to="{name: 'home'}">Home</router-link> |
    <router-link :to="{name: 'asset-management'}">Asset Management</router-link> |
    <router-link :to="{name: 'asset-print'}">Asset Print</router-link> |
    <router-link :to="{name: 'teaser-tracking'}">Teaser Tracking</router-link> |
    <router-link :to="{name: 'path-manipulation'}">Path Manipulation</router-link> |
    <router-link :to="{name: 'course-start'}">Course tracking</router-link> |
    <router-link :to="{name: 'webshop'}">Webshop</router-link> |
    <router-link :to="{name: 'webshop-v2'}">Webshop V2</router-link>
  </nav>
  <br>
  <b v-if="!isNavHidden">Page content</b>
  <br>
  <br>
  <router-view />
</template>
<script setup>
  import { computed } from 'vue'

  const isNavHidden = computed(() => {
    return window.location.pathname.includes('google-pay')
  })
</script>

<style scoped>
  .hidden {
    display: none;
  }
</style>
