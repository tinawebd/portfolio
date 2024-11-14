<template>
  <NuxtLink :to="to" class="p-menubar-item-link" data-pc-section="itemLink">
    {{ label }}
  </NuxtLink>
</template>
<script setup lang="ts">
defineProps<{
  to: string
  label: string
}>()
</script>
