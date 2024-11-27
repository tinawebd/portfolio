<template>
  <div class="card flex justify-center">
    <PrimeRating v-model="localValue" readonly />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  value: number;
}>();
const localValue = ref(props.value);
</script>
