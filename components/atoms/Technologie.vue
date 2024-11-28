<template>
  <span
    class="rounded-md border border-surface-400 p-2 text-sm font-medium text-surface-400"
  >
    {{ name }}
  </span>
</template>
<script setup lang="ts">
defineProps<{
  name: string;
}>();
</script>
