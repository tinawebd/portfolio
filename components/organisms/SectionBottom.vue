<template>
  <OrganismsSectionCard
    title="Réseaux et Contacts"
    subtitle="Contactez-moi & Explorez Mon Travail"
  >
    <template #content
      ><MoleculesSocialMediaItems
        :icons="icons"
        class="border border-surface-900 p-2 text-surface-400"
    /></template>
  </OrganismsSectionCard>
</template>

<script lang="ts" setup>
import type { LinkIconProps } from '../atoms/LinkIcon.vue';
defineProps<{
  icons: LinkIconProps[];
}>();
</script>
