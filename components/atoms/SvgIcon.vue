<template>
  <svg-icon type="mdi" :path="path" />
</template>

<script setup lang="ts">
// @ts-expect-error: SvgIcon is not a module
import SvgIcon from '@jamescoyle/vue-icon';
export interface SvgIconProps {
  path: string;
}
defineProps<SvgIconProps>();
</script>
