<template>
  <div>
    <OrganismsHeader v-if="showHeader" />
    <div class="mx-auto max-w-screen-xl py-8">
      <NuxtPage />
    </div>
    <OrganismsSectionBottom :icons="icons" />
    <OrganismsFooter />
  </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';
import { mdiEmailOutline, mdiGithub, mdiLinkedin } from '@mdi/js';

// Récupère les informations de la route actuelle
const route = useRoute();
const showHeader = route.meta.showHeader !== false; // Exclure si spécifié à false
const icons = ref([
  {
    icon: mdiLinkedin,
    to: 'https://www.linkedin.com/in/tina-fetraniaina-685068185/',
    label: 'Linkedin',
  },
  {
    icon: mdiEmailOutline,
    to: 'mailto:tinafetraniaina@gmail.com',
    label: 'Email',
  },
  {
    icon: mdiGithub,
    to: 'https://github.com/TinaFetraniaina',
    label: 'Github',
  },
]);
</script>
