<template>
  <div>
    <h1 class="text-surface-200">En Coulisses : Qui Suis-Je ?</h1>
    <OrganismsSectionCard
      v-for="(item, i) in items"
      :key="i"
      :title="item.title"
      :subtitle="item.subtitle"
    >
      <template #content>
        <AtomsTextDescription :description="item.description || ''" />
      </template>
    </OrganismsSectionCard>
  </div>
</template>

<script lang="ts" setup>
import type { CardProps } from '../atoms/Card.vue';
defineProps<{
  items: CardProps[];
}>();
</script>
