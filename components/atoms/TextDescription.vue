<template>
  <p class="mx-auto max-w-screen-md p-4 text-surface-400">
    {{ description }}
  </p>
</template>
<script setup lang="ts">
defineProps<{
  description: string;
}>();
</script>
