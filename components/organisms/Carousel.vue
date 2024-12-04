<template>
  <PrimeCarousel
    :show-navigators="false"
    :responsive-options="isResponsive ? responsiveOptions : undefined"
    v-bind="$props"
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
  isResponsive?: boolean;
  numVisible?: number;
  orientation?: Orientation;
}
withDefaults(defineProps<CarouselProps>(), {
  orientation: 'horizontal',
  numVisible: 1,
  isResponsive: true,
});

const responsiveOptions = ref([
  {
    breakpoint: '9000px',
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: '1199px',
    numVisible: 2,
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
