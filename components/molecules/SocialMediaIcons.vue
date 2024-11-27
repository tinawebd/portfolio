<template>
  <div class="flex items-center gap-2">
    <AtomsLinkIcon
      v-for="(item, i) in icons"
      :key="i"
      :to="item.to"
      :icon="item.icon"
      :label="item.label"
    />
  </div>
</template>

<script setup lang="ts">
import type { LinkIconProps } from '@/components/atoms/LinkIcon.vue';

defineProps<{
  icons: LinkIconProps[];
}>();
</script>
