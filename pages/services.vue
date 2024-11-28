<template>
  <TemplatesServices :technologies="technologies" />
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
</script>
