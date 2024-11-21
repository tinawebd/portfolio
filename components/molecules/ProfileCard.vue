<template>
  <div
    class="bg-profile group relative h-[390px] w-80 overflow-hidden bg-cover bg-center bg-no-repeat"
  >
    <AtomsCard
      class="before:bg-team-hover absolute -bottom-96 left-0 z-[1] w-full bg-transparent pb-6 pt-12 text-center text-primary-contrast transition-all duration-500 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:content-[''] group-hover:bottom-0"
    >
      <template #title>
        <h4>{{ name }}</h4>
      </template>
      <template #content>
        <p>{{ content }}</p>
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
