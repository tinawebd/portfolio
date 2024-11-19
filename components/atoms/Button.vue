<template>
  <PrimeButton :label="label" :severity="severity" :variant="variant" />
</template>
<script setup lang="ts">
export type Severity =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warn'
  | 'help'
  | 'danger'
  | 'contrast';
export type Variant = 'text' | 'outlined' | 'link';
interface Props {
  label: string;
  severity?: Severity;
  variant?: Variant;
}
withDefaults(defineProps<Props>(), {
  severity: 'primary',
  variant: undefined,
});
</script>
