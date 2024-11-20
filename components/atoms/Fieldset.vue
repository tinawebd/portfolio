<template>
  <PrimeFieldset :legend="legend">
    <slot></slot>
  </PrimeFieldset>
</template>

<script setup lang="ts">
defineProps<{
  legend: string;
}>();
</script>
