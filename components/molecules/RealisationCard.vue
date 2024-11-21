<template>
  <AtomsCard
    class="group hover:bg-cover hover:bg-center hover:bg-no-repeat"
    :style="{ backgroundImage: isHovered ? `url(${coverImage})` : 'none' }"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <template #title>
      <h4 class="group-hover:text-primary">{{ title }}</h4>
    </template>
    <template #subtitle>
      <span class="group-hover:text-primary-contrast">{{ subtitle }}</span>
    </template>
    <template #content>
      <p class="group-hover:text-primary-contrast">{{ description }}</p>
    </template>
    <template #footer>
      <AtomsLinkButton :label="label" :href="href" />
    </template>
  </AtomsCard>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  label?: string;
  coverImage?: string;
}
withDefaults(defineProps<Props>(), {
  label: 'voir plus',
  coverImage: 'https://themewagon.github.io/videograph/img/blog/blog-2.jpg',
});

const isHovered = ref(false);
</script>
