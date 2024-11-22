<template>
  <PrimeCarousel
    container-class="flex items-center"
    :value="value"
    :num-visible="numVisible"
    :num-scroll="numScroll"
    :autoplay-interval="autoplayInterval"
    :circular="circular"
    :orientation="orientation"
  >
    <template #item="slotProps">
      <slot name="item-template" :item="slotProps.data">
        <MoleculesRealisationCard
          :title="slotProps.data.name"
          :subtitle="slotProps.data.code"
          :description="slotProps.data.description"
          :cover-image="slotProps.data.image"
          :href="slotProps.data.href"
          class="m-2 w-auto border border-surface-200 dark:border-surface-700"
        />
      </slot>
    </template>
  </PrimeCarousel>
</template>

<script setup lang="ts">
export type Orientation = 'horizontal' | 'vertical';
interface Props {
  value: Array<object>;
  numVisible: number;
  numScroll: number;
  autoplayInterval?: number;
  circular?: boolean;
  orientation?: Orientation;
}
withDefaults(defineProps<Props>(), {
  autoplayInterval: 0,
  circular: false,
  orientation: 'horizontal',
});
</script>
