<template>
  <PrimeMenubar :model="items">
    <template #start>
      <NuxtLink to="/">
        <span class="text-2xl font-bold text-primary">Logo</span>
      </NuxtLink>
    </template>
    <template #item="{ item }">
      <AtomsMenuBarItem :to="item.route" :label="item.label" />
    </template>
    <template #end>
      <div class="flex items-center gap-2">
        <PrimeAvatar
          image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
          shape="circle"
        />
        <PrimeAvatar
          image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
          shape="circle"
        />
      </div>
    </template>
  </PrimeMenubar>
</template>

<script setup>
import { ref } from 'vue'

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    route: '/',
  },
  {
    label: 'Realisations',
    icon: 'pi pi-star',
    route: '/realisations',
  },
  {
    label: 'Contact',
    icon: 'pi pi-envelope',
    route: '/contact',
  },
])
</script>
