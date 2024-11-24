<template>
  <div>
    <OrganismsHeader v-if="showHeader" />
    <NuxtPage />
    <OrganismsFooter />
  </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';

// Récupère les informations de la route actuelle
const route = useRoute();
const showHeader = route.meta.showHeader !== false; // Exclure si spécifié à false
</script>
