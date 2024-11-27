<template>
  <AtomsButton
    as="a"
    target="_blank"
    rel="noopener"
    variant="link"
    v-bind="$props"
  />
</template>
<script setup lang="ts">
defineProps<{
  label: string;
  href: string;
}>();
</script>
