<template>
  <PrimeCard class="group w-96 overflow-hidden" :pt="{ header: 'p-5 pb-0' }">
    <template #header>
      <MoleculesServicesItemIcon :icon="icon" />
    </template>
    <template #title>
      <h4>{{ title }}</h4>
    </template>
    <template #content>
      <p>{{ description }}</p>
    </template>
  </PrimeCard>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});
</script>
