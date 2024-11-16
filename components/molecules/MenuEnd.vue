<template>
  <div class="flex items-center gap-2">
    <NuxtLink to="https://www.linkedin.com/in/tina-fetraniaina-685068185/"
      ><AtomsSvgIcon :path="mdiLinkedin"
    /></NuxtLink>
    <NuxtLink to="mailto:someone@example.com"
      ><AtomsSvgIcon :path="mdiEmailOutline"
    /></NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { mdiLinkedin, mdiEmailOutline } from '@mdi/js'
</script>
