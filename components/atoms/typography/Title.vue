<template>
  <component :is="tag">
    <slot />
  </component>
</template>

<script setup lang="ts">
export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface Props {
  tag?: HeadingTag;
}

withDefaults(defineProps<Props>(), {
  tag: 'h1',
});
</script>
