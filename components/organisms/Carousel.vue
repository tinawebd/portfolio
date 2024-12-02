<template>
  <PrimeCarousel
    container-class="flex items-center"
    :value="value"
    :num-visible="numVisible"
    :num-scroll="numScroll"
    :orientation="orientation"
    :show-navigators="false"
  >
    <template #item="slotProps">
      <slot name="item-template" :item="slotProps.data"></slot>
    </template>
  </PrimeCarousel>
</template>

<script setup lang="ts">
export type Orientation = 'horizontal' | 'vertical';
export interface CarouselProps {
  value: Array<object>;
  numVisible?: number;
  numScroll?: number;
  orientation?: Orientation;
}
withDefaults(defineProps<CarouselProps>(), {
  orientation: 'horizontal',
  numScroll: 1,
  numVisible: 3,
});
</script>
