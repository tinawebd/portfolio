<template>
  <div class="flex items-center gap-2 border-2 border-surface-200 p-2">
    <AtomsSvgIcon :path="path" />
    <AtomsRating :value="value" class="text-primary" />
  </div>
</template>
<script setup lang="ts">
import type { SvgIconProps } from '../atoms/SvgIcon.vue';
defineProps<{
  path: SvgIconProps['path'];
  value: number;
}>();
</script>
