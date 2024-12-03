<template>
  <PrimeCarousel
    container-class="flex items-center"
    :value="value"
    :num-visible="numVisible"
    :num-scroll="numScroll"
    :orientation="orientation"
    :show-navigators="false"
    :responsive-options="responsiveOptions"
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

const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1,
  },
]);
</script>
