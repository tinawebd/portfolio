<script setup></script>
<template>
  <TemplatesAbout :items="about.widgets" />
</template>
<script setup lang="ts">
const about = useAboutStore();
</script>
