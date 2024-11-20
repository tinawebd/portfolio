<template>
  <AtomsButton as="router-link" :label="label" :to="to" />
</template>

<script lang="ts" setup>
defineProps<{
  label: string;
  to: string;
}>();
</script>
