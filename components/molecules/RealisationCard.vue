<template>
  <AtomsCard
    class="group hover:bg-cover hover:bg-center hover:bg-no-repeat"
    :style="{
      backgroundImage: isHovered
        ? `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${coverImage})`
        : 'none',
    }"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <template #title>
      <h4 class="group-hover:text-primary">{{ title }}</h4>
    </template>
    <template #subtitle>
      <span>{{ subtitle }}</span>
    </template>
    <template #content>
      <p class="line-clamp-2">
        {{ description }}
      </p>
    </template>
    <template #footer>
      <AtomsLinkButton v-show="href !== ''" :label="label" :href="href" />
    </template>
  </AtomsCard>
</template>

<script setup lang="ts">
import type { CardProps } from '@/components/atoms/Card.vue';

export interface RealisationCardProps extends CardProps {
  href: string;
  label?: string;
  coverImage?: string;
}
withDefaults(defineProps<RealisationCardProps>(), {
  label: 'voir plus',
  coverImage: 'https://themewagon.github.io/videograph/img/blog/blog-2.jpg',
});

const isHovered = ref(false);
</script>
