<template>
  <div class="mx-auto max-w-screen-xl py-8">
    <section class="flex items-center justify-around">
      <MoleculesProfileCard
        :name="profile.name"
        :content="profile.profession"
      />
      <OrganismsVerticalCarousel
        :value="intros"
        circular
        :autoplay-interval="5000"
        :show-navigators="false"
      >
        <template #item-vertical-template="{ item }">
          <AtomsCard
            class="m-2 w-96 border border-surface-200 dark:border-surface-700"
          >
            <template #title
              ><h4>{{ item.title }}</h4></template
            >
            <template #subtitle
              ><h6>{{ item.subtitle }}</h6></template
            >
          </AtomsCard>
        </template>
      </OrganismsVerticalCarousel>
    </section>
    <section class="my-8 border-t-2 border-surface-200 dark:border-surface-900">
      <h6 class="my-4 text-primary">Compétences</h6>
      <h4 class="my-4 text-surface-50">Technologies</h4>
      <div class="flex justify-center gap-4">
        <OrganismsTechnologie
          v-for="(technologie, i) in technologies"
          :key="i"
          :title="technologie.title"
          :description="technologie.description"
          :icon="technologie.icon"
          class="border-dashed dark:border-surface-700 dark:bg-surface-950"
        />
      </div>
    </section>
    <section class="my-8 border-t-2 border-surface-200 dark:border-surface-900">
      <h6 class="my-4 text-primary">Réalisations</h6>
      <h4 class="my-4 text-surface-50">Projets</h4>
      <OrganismsRealisationsCarousel :realisations="realisations" />
    </section>
    <OrganismsSectionCard
      title="Réseaux et Contacts"
      subtitle="Contactez-moi & Explorez Mon Travail"
    >
      <template #content><OrganismsContact /></template>
    </OrganismsSectionCard>
  </div>
</template>
<script setup lang="ts">
import type { RealisationCardProps } from '../molecules/RealisationCard.vue';

interface Technologie {
  title: string;
  description: string;
  icon: string;
}
defineProps<{
  profile: {
    name: string;
    profession: string;
  };
  intros: Array<object>;
  technologies: Technologie[];
  realisations: RealisationCardProps[];
}>();
</script>
