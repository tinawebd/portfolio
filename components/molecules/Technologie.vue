<template>
  <div class="my-6 flex flex-col gap-2">
    <h6 class="text-surface-50">{{ title }}</h6>
    <div class="flex flex-wrap gap-2">
      <AtomsTechnologie
        v-for="(technologie, i) in technologies"
        :key="i"
        :name="technologie"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
export interface MoleculeTechnologie {
  title: string;
  technologies: string[];
}
defineProps<MoleculeTechnologie>();
</script>
