<template>
  <div class="flex items-center gap-2">
    <NuxtLink :to="linkedin"><AtomsSvgIcon :path="mdiLinkedin" /></NuxtLink>
    <NuxtLink :to="email"><AtomsSvgIcon :path="mdiEmailOutline" /></NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { mdiLinkedin, mdiEmailOutline } from '@mdi/js';
const linkedin = ref('https://www.linkedin.com/in/tina-fetraniaina-685068185/');
const email = ref('mailto:someone@example.com');
</script>
