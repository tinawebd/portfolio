<template>
  <TemplatesHome
    :profile="profile"
    :intros="intros"
    :technologies="technologies"
    :realisations="realisations"
  />
</template>
<script setup>
import { mdiLaravel, mdiVuejs, mdiWordpress } from '@mdi/js';
const profile = ref({
  name: 'John Doe',
  profession: 'Full Stack Developer',
});
const intros = ref([
  {
    subtitle:
      'Laravel et Vue.js forment un duo puissant pour créer des applications web modernes et réactives.',
    title: 'Laravel et VueJS',
  },
  {
    subtitle: "Pour la modularité, la maintenabilité et l'évolutivité du code.",
    title: 'Principes SOLID',
  },
  {
    subtitle:
      'Pour la réutilisabilité, la cohérence et la maintenabilité des interfaces.',
    title: 'Atomic Design',
  },
]);
const technologies = ref([
  {
    title: 'Laravel',
    description:
      "Pour le backend, je travaille avec Laravel. J'aime beaucoup ce framework avec son ORM Eloquent et ses syntaxes simples et élégantes.",
    icon: mdiLaravel,
  },
  {
    title: 'VueJS',
    description:
      "Pour le frontend, j' utilise VueJS. Le framework Nuxt me permet de créer des applications web modernes, organisés et performantes.",
    icon: mdiVuejs,
  },
  {
    title: 'Wordpress',
    description:
      'Wordpress est un CMS puissant qui me permet de créer des sites web dynamiques et personnalisables.',
    icon: mdiWordpress,
  },
]);
const realisations = ref([
  {
    subtitle: 'Symfony, Bootstrap, Jquery',
    title: 'Prixpromoteur',
    description:
      "L'agence immobilière spécialiste de l'immobilier neuf à prix direct promoteur.",
    coverImage: '/img/prixpromo.webp',
    href: 'https://www.prixpromoteur.com/',
  },
  {
    subtitle: 'Wordpress, Bootstrap',
    title: 'Toulouse Web',
    description:
      'Site web pour les annonces et les programmes pour les cinema à Toulouse',
    coverImage: '/img/toulouse.jpg',
    href: 'https://www.toulouseweb.com/',
  },
  {
    subtitle: 'Wordpress',
    title: 'Canibest',
    description:
      "L'École des Chiens, éducateurs canins comportementalistes, éducation de chiot en douceur, à domicile, cours collectifs",
    coverImage: '/img/canibest.jpg',
    href: 'https://www.canibest.com/',
  },
  {
    subtitle: 'Laravel, Vuejs, Bootstrap',
    title: 'Formaric',
    description:
      'Application web pour accompagner les patients pour le traitement de son rhumatisme',
    coverImage: '/img/formaric.png',
    href: 'https://formaric.observia.fr/',
  },
  {
    subtitle: 'Laravel, Vuejs, Tailwind',
    title: 'Noa',
    description:
      'Application web pour mieux connaitre les patients en repondant les questionnaires via des formulaires',
    coverImage: '/img/noa.webp',
    href: 'https://recette-noa.observia.fr/',
  },
  {
    subtitle: 'Laravel, AngularJS, Ionic',
    title: 'Abeeclic',
    description:
      "Abeeclic est une application mobile permettant d'acheter et de vendre des vêtements.",
    coverImage: '/img/abeeclic.jpg',
    href: '',
  },
]);
</script>
