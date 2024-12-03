<template>
  <div>
    <h1 class="text-surface-200">
      Mes Services : Vue.js, Laravel, et Plus Encore
    </h1>
    <OrganismsSectionCard
      title="Mes services"
      subtitle="Développeur web PHP Fullstack"
      class="border-t-0"
    >
      <template #content>
        <div class="flex flex-col justify-center gap-6 sm:flex-row">
          <AtomsListService
            v-for="(service, i) in services"
            :key="i"
            :title="service.title"
            :services="service.technologies"
          />
        </div>
        <MoleculesTechnologie
          v-for="(technologie, i) in technologies"
          :key="i"
          :title="technologie.title"
          :technologies="technologie.technologies"
        />
      </template>
    </OrganismsSectionCard>
  </div>
</template>

<script lang="ts" setup>
import type { MoleculeTechnologie } from '../molecules/Technologie.vue';

defineProps<{
  technologies: MoleculeTechnologie[];
  services: MoleculeTechnologie[];
}>();
</script>
