<template>
  <NuxtLink :to="to" class="flex items-center gap-2">
    <AtomsSvgIcon :path="icon" /><slot name="label"></slot
  ></NuxtLink>
</template>
<script setup lang="ts">
export interface LinkIconProps {
  to: string;
  icon: string;
  label: string;
}
defineProps<LinkIconProps>();
</script>
