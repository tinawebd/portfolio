<template>
  <AtomsButton
    as="a"
    :label="label"
    :href="href"
    target="_blank"
    rel="noopener"
    variant="link"
    size="large"
  />
</template>

<script lang="ts" setup>
defineProps<{
  label: string;
  href: string;
}>();
</script>
