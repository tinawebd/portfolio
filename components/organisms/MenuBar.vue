<template>
  <PrimeMenubar :model="items" class="mx-auto max-w-screen-xl px-14">
    <template #start>
      <AtomsLogo to="/" />
    </template>
    <template #item="{ item }">
      <AtomsMenuBarItem :to="item.route" :label="item.label" />
    </template>
    <template #end>
      <MoleculesSocialMediaIcons :icons="icons" />
    </template>
  </PrimeMenubar>
</template>

<script setup>
import { mdiLinkedin, mdiEmailOutline, mdiGithub } from '@mdi/js';
const items = ref([
  {
    label: 'Services',
    route: '/services',
  },
  {
    label: 'à propos',
    route: '/about',
  },
]);
const icons = ref([
  {
    to: 'https://www.linkedin.com/in/tina-fetraniaina-685068185/',
    icon: mdiLinkedin,
    label: 'Linkedin',
  },
  {
    to: 'mailto:tinafetraniaina@gmail.com',
    icon: mdiEmailOutline,
    label: 'Email',
  },
  {
    to: 'https://github.com/TinaFetraniaina',
    icon: mdiGithub,
    label: 'Github',
  },
]);
</script>
