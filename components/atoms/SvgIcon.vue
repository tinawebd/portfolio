<template>
  <svg-icon type="mdi" :path="path" />
</template>

<script setup lang="ts">
// @ts-ignore
import SvgIcon from '@jamescoyle/vue-icon'

defineProps<{
  path: string
}>()
</script>
