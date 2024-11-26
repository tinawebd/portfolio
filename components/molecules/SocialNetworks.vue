<template>
  <div class="flex items-center gap-2">
    <AtomsLinkIcon :to="linkedin" :icon="mdiLinkedin" />
    <AtomsLinkIcon :to="email" :icon="mdiEmailOutline" />
    <AtomsLinkIcon :to="github" :icon="mdiGithub" />
  </div>
</template>

<script setup lang="ts">
import { mdiLinkedin, mdiEmailOutline, mdiGithub } from '@mdi/js';
const linkedin = ref('https://www.linkedin.com/in/tina-fetraniaina-685068185/');
const email = ref('mailto:someone@example.com');
const github = ref('https://github.com/TinaFetraniaina');
</script>
