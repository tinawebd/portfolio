<template>
  <AtomsCard
    class="flex items-center justify-center border-t-2 border-surface-200 bg-surface-950 py-16 text-center dark:border-surface-700"
  >
    <template #title><h6 class="text-primary">Réseaux sociaux</h6></template>
    <template #subtitle><p>Contactez-moi et explorez mon travail</p></template>
    <template #content>
      <MoleculesSocialMediaItems
        :icons="icons"
        class="w-52 justify-center border border-surface-900 p-4"
      />
    </template>
  </AtomsCard>
</template>

<script lang="ts" setup>
import type { LinkIconProps } from '../atoms/LinkIcon.vue';
defineProps<{
  icons: LinkIconProps[];
}>();
</script>
