<template>
  <NuxtLink
    :to="to"
    class="flex h-10 w-10 items-center justify-center border-4 border-double border-primary"
  >
    <span
      class="h-5 border-2 border-surface-700 px-1 pt-[1px] leading-5 text-primary"
      >T</span
    >
  </NuxtLink>
</template>
<script setup lang="ts">
defineProps<{
  to: string;
}>();
</script>
