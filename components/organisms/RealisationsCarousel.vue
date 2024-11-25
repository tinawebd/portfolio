<template>
  <OrganismsCarousel :value="realisations">
    <template #item-template="{ item }">
      <MoleculesRealisationCard
        :title="item.title"
        :subtitle="item.subtitle"
        :description="item.description"
        :cover-image="item.coverImage"
        :href="item.href"
        class="m-2 w-auto border border-surface-200 dark:border-surface-700"
      />
    </template>
  </OrganismsCarousel>
</template>

<script lang="ts" setup>
import type { RealisationCardProps } from '../molecules/RealisationCard.vue';
defineProps<{
  realisations: RealisationCardProps[];
}>();
</script>
