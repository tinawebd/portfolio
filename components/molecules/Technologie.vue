<template>
  <PrimeCard class="w-96 overflow-hidden" :pt="{ header: 'p-5 pb-0' }">
    <template #header>
      <MoleculesServicesItemIcon />
    </template>
    <template #title
      ><AtomsTypographyTitle tag="h4">{{
        title
      }}</AtomsTypographyTitle></template
    >
    <template #content>
      <AtomsTypographyParagraphe>
        {{ description }}
      </AtomsTypographyParagraphe>
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
