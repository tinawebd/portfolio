<template>
  <PrimeButton
    :label="label"
    :severity="severity"
    :variant="variant"
    :size="size"
  />
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
export type Size = 'small' | 'large';
interface Props {
  label: string;
  severity?: Severity;
  variant?: Variant;
  size?: Size;
}
withDefaults(defineProps<Props>(), {
  severity: undefined,
  variant: undefined,
  size: undefined,
});
</script>
