<template>
  <OrganismsCarousel
    :value="value"
    orientation="vertical"
    container-class="flex items-center"
    :num-visible="1"
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
