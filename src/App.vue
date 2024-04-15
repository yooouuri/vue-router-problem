<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

console.log(router.currentRoute.value)
</script>

<template>
  <div>
    <RouterView />
  </div>
</template>
