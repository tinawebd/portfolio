<template>
  <NuxtLink :to="to"><AtomsSvgIcon :path="icon" /></NuxtLink>
</template>
<script setup lang="ts">
interface LinkIconProps {
  to: string;
  icon: string;
}
defineProps<LinkIconProps>();
</script>
