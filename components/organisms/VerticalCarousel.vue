<template>
  <OrganismsCarousel
    :value="value"
    orientation="vertical"
    container-class="flex items-center"
    :num-visible="1"
    :is-responsive="false"
    class="border border-surface-200 dark:border-surface-700"
  >
    <template #item-template="{ item }">
      <slot name="item-vertical-template" :item="item"></slot>
    </template>
  </OrganismsCarousel>
</template>
<script setup lang="ts">
import type { CarouselProps } from '../organisms/Carousel.vue';
defineProps<CarouselProps>();
</script>
