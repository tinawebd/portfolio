<template>
  <div
    class="my-6 flex flex-col gap-2 border border-primary-contrast p-6 text-surface-400"
  >
    <h2 class="text-2xl font-bold">{{ title }}</h2>
    <ul class="list-inside list-disc">
      <li v-for="(service, index) in services" :key="index">{{ service }}</li>
    </ul>
  </div>
</template>
<script setup lang="ts">
interface Props {
  title: string;
  services: string[];
}
defineProps<Props>();
</script>
