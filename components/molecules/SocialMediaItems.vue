<template>
  <div class="flex flex-col items-center gap-8 md:flex-row">
    <AtomsLinkIcon
      v-for="(item, i) in icons"
      :key="i"
      :to="item.to"
      :icon="item.icon"
      :label="item.label"
      v-bind="$attrs"
    >
      <template #label>{{ item.label }}</template>
    </AtomsLinkIcon>
  </div>
</template>

<script setup lang="ts">
import type { LinkIconProps } from '@/components/atoms/LinkIcon.vue';

defineProps<{
  icons: LinkIconProps[];
}>();

defineOptions({
  inheritAttrs: false,
});
</script>
