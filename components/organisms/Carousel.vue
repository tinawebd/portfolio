<template>
  <div class="card">
    <PrimeCarousel
      :value="products"
      :num-visible="3"
      :num-scroll="3"
      :responsive-options="responsiveOptions"
    >
      <template #item="slotProps">
        <slot name="item-template">
          <MoleculesRealisationCard
            :title="slotProps.data.name"
            :subtitle="slotProps.data.code"
            :description="slotProps.data.description"
            :cover-image="slotProps.data.image"
            :href="slotProps.data.href"
            class="m-2 w-auto border border-surface-200 dark:border-surface-700"
          />
        </slot>
      </template>
    </PrimeCarousel>
  </div>
</template>

<script setup lang="ts">
const products = ref([
  {
    code: 'Symfony, Bootstrap, Jquery',
    name: 'Prixpromoteur',
    description:
      "L'agence immobilière spécialiste de l'immobilier neuf à prix direct promoteur.",
    image: '/img/prixpromo.webp',
    href: 'https://www.prixpromoteur.com/',
  },
  {
    code: 'Wordpress, Bootstrap',
    name: 'Toulouse Web',
    description:
      'Site web pour les annonces et les programmes pour les cinema à Toulouse',
    image: '/img/toulouse.webp',
    href: 'https://www.toulouseweb.com/',
  },
  {
    code: 'Wordpress',
    name: 'Canibest',
    description:
      "L'École des Chiens, éducateurs canins comportementalistes, éducation de chiot en douceur, à domicile, cours collectifs",
    image: '/img/canibest.webp',
    href: 'https://www.canibest.com/',
  },
  {
    code: 'Laravel, Vuejs, Bootstrap',
    name: 'Formaric',
    description:
      'Application web pour accompagner les patients pour le traitement de son rhumatisme',
    image: '/img/formaric.webp',
    href: 'https://formaric.observia.fr/',
  },
  {
    code: 'Laravel, Vuejs, Tailwind',
    name: 'Noa',
    description:
      'Application web pour mieux connaitre les patients en repondant les questionnaires via des formulaires',
    image: '/img/noa.webp',
    href: '#',
  },
  {
    code: 'Laravel, Vuejs, Tailwind',
    name: 'Portfolio',
    description:
      'Site web illustrant mes parcours professionnelles et mes compétences.',
    image: '/img/abeeclic.webp',
    href: '#',
  },
]);
const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1,
  },
]);
</script>
