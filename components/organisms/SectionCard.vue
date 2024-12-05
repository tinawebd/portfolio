<template>
  <section class="my-8 border-t-2 border-surface-200 dark:border-surface-900">
    <h6 class="my-4 capitalize text-primary">{{ title }}</h6>
    <h4 v-show="subtitle" class="my-4 normal-case text-surface-50">
      {{ subtitle }}
    </h4>
    <slot name="content"></slot>
  </section>
</template>

<script lang="ts" setup>
import type { CardProps } from '../atoms/Card.vue';
defineProps<CardProps>();
</script>
