<template>
  <OrganismsSectionCard
    title="Réseaux et Contacts"
    subtitle="Contactez-moi & Explorez Mon Travail"
  >
    <template #content><OrganismsContact :icons="icons" /></template>
  </OrganismsSectionCard>
</template>

<script lang="ts" setup>
import type { LinkIconProps } from '../atoms/LinkIcon.vue';
defineProps<{
  icons: LinkIconProps[];
}>();
</script>
