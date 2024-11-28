<template>
  <div>
    <OrganismsSectionCard
      title="Mes services"
      subtitle="Développeur web PHP Fullstack"
      class="border-t-0"
    >
      <template #content
        ><MoleculesTechnologie
          v-for="(technologie, i) in technologies"
          :key="i"
          :title="technologie.title"
          :technologies="technologie.technologies"
      /></template>
    </OrganismsSectionCard>
  </div>
</template>

<script lang="ts" setup>
import type { MoleculeTechnologie } from '../molecules/Technologie.vue';

defineProps<{
  technologies: MoleculeTechnologie[];
}>();
</script>
