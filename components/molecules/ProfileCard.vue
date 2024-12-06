<template>
  <div
    class="group relative h-[340px] w-40 overflow-hidden border border-r-0 bg-profile bg-center bg-no-repeat dark:border-surface-700"
  >
    <AtomsCard
      class="absolute -bottom-96 left-0 z-[1] w-full bg-transparent text-center text-primary-contrast transition-all duration-500 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-team-hover before:content-[''] group-hover:bottom-0"
    >
      <template #title>
        <h5 class="text-surface-950">{{ name }}</h5>
      </template>
      <template #content>
        <p class="text-surface-900">{{ content }}</p>
      </template>
    </AtomsCard>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  name: string;
  content: string;
}
defineProps<Props>();
</script>
