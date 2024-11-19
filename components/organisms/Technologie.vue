<template>
  <AtomsBasecard class="group w-96" pt:header:class="p-4">
    <template #header>
      <MoleculesServicesItemIcon :icon="icon" />
    </template>
    <template #title
      ><h4>{{ title }}</h4></template
    >
    <template #content>
      <p>{{ description }}</p>
    </template>
  </AtomsBasecard>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  description: string;
  icon: string;
}
defineProps<Props>();
</script>
