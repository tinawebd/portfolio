<template>
  <MoleculesSocialMediaItems
    :icons="icons"
    class="border border-surface-900 p-2"
  />
</template>

<script lang="ts" setup>
import type { LinkIconProps } from '../atoms/LinkIcon.vue';
defineProps<{
  icons: LinkIconProps[];
}>();
</script>
