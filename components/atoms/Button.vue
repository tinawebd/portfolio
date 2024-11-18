<template>
  <PrimeButton :label="label" :severity="severity" />
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
interface Props {
  label: string;
  severity?: Severity;
}
withDefaults(defineProps<Props>(), {
  severity: 'primary',
});
</script>
