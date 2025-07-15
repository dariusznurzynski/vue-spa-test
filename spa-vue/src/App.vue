<template>
  SPA (history mode, clean urls)
  <br>
  <br>
  <nav class="it-vue-navigation">
    <router-link :to="{name: 'home'}">Home</router-link> |
    <router-link :to="{name: 'asset-management'}">Asset Management</router-link> |
    <router-link :to="{name: 'asset-print'}">Asset Print</router-link> |
    <router-link :to="{name: 'teaser-tracking'}">Teaser Tracking</router-link> |
    <router-link :to="{name: 'path-manipulation'}">Path Manipulation</router-link> |
    <router-link :to="{name: 'webshop'}">Webshop</router-link> |
    <router-link :to="{name: 'course-start'}">Course tracking</router-link>
  </nav>
  <br>
  <b>Page content</b>
  <br>
  <br>
  <router-view />
</template>
<script setup>


</script>

<style scoped>

</style>
