<template>
  <PrimeMenubar :model="items" />
</template>

<script setup>
import { ref } from 'vue'

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
  },
  {
    label: 'Features',
    icon: 'pi pi-star',
  },
  {
    label: 'Contact',
    icon: 'pi pi-envelope',
  },
])
</script>
