<template>
  <div>
    <section
      class="-mx-4 -mt-[90px] flex min-h-screen items-center justify-end bg-home-header bg-cover bg-fixed bg-center bg-no-repeat"
    >
      <OrganismsVerticalCarousel
        :value="intros"
        circular
        :autoplay-interval="5000"
        :show-navigators="false"
        class="hidden md:block"
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
      <div class="z-20 flex w-1/2 flex-col gap-4">
        <p class="text-2xl text-primary">Bonjour, je suis</p>
        <p class="text-6xl text-primary-50">Tina Fetraniaina</p>
        <h1 class="text-center text-base text-surface-400">
          Développeur Web PHP Laravel et VueJS
        </h1>
      </div>
      <MoleculesProfileCard
        :name="profile.name"
        :content="profile.profession"
        class="z-10"
      />
    </section>
    <section
      class="my-8 mt-0 border-t-2 border-surface-200 dark:border-surface-900"
    >
      <h6 class="my-4 text-primary">Compétences</h6>
      <h4 class="my-4 text-surface-50">Technologies</h4>
      <div class="flex flex-col justify-center gap-4 md:flex-row">
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
    <!-- <section
      class="my-8 border-t-2 border-surface-200 bg-home-bottom bg-cover bg-fixed px-2 dark:border-surface-900"
    >
      <h6 class="my-4 text-primary">Réalisations</h6>
      <h4 class="my-4 text-surface-50">Projets</h4>
      <OrganismsRealisationsCarousel :realisations="realisations" />
    </section> -->
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
