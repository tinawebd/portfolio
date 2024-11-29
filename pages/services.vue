<template>
  <TemplatesServices :technologies="technologies" :services="services" />
</template>
<script setup lang="ts">
const technologies = [
  {
    title: 'Compétences clés',
    technologies: ['PHP', 'Laravel', 'Nuxt', 'VueJS', 'TailwindCSS'],
  },
  {
    title: 'Autres compétences',
    technologies: ['Symfony', 'Angular', 'JQuery', 'Wordpress', 'Bootstrap'],
  },
  {
    title: 'Outils',
    technologies: ['Git', 'Docker', 'Linux', 'VSCode', 'Postman'],
  },
];
const services = [
  {
    title: 'Développeur Front-End et Intégrateur Web',
    technologies: [
      'Création de composants réutilisables et maintenables.',
      'Intégration responsive et accessible, adaptée à tous les appareils.',
      'Intégration de maquettes issues de Figma ou Adobe XD.',
      'Optimisation des performances front-end.',
      'Expérience avec PrimeVue et Tailwind CSS pour des designs élégants.',
    ],
  },
  {
    title: 'Développement Back-End PHP',
    technologies: [
      'Conception et gestion de bases de données relationnelles.',
      "Développement d'API RESTful",
      'Gestion des authentifications et autorisations.',
      "Mise en place d'architectures logiques et sécurisées.",
      'Intégration avec des systèmes tiers (API externes, services cloud).',
    ],
  },
];
</script>
