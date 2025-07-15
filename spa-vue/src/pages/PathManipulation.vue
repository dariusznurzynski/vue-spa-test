<template>
  <button @click="addRandomParamByPush">Add random param to path by push</button><br>
  <button @click="addRandomParamByReplace">Add random param to path by replace</button><br>
  <br>
</template>
<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

function getRandomValue() {
  return Math.floor(Math.random() * 1000)
}

const addRandomParamByPush = () => {
  router.push({
    query: {
      ...route.query,
      rand: getRandomValue()
    }
  })
}

const addRandomParamByReplace = () => {
  router.replace({
    query: {
      ...route.query,
      rand: getRandomValue()
    }
  })
}
</script>
