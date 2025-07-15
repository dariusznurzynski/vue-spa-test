<template>
  <div class="bottom-nav">
    <button
      v-for="link in links"
      :key="link.routeName"
      @click="goToPage(link.routeName)"
      v-bind="link.attrs"
    >
      {{ link.text }}
    </button>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router"

  defineProps({
    links: {
      type: Array,
      required: true,
    }
  })

  const router = useRouter()

  const goToPage = (routeName) => {
    router.push({
      name: routeName
    })
  } 
</script>
<style scoped>
.bottom-nav {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}
</style>