<template>
  <PrimeButton :severity="severity" :variant="variant" :size="size">
    {{ label }}
  </PrimeButton>
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
  svgIcon?: string;
}
withDefaults(defineProps<Props>(), {
  severity: undefined,
  variant: undefined,
  size: undefined,
  svgIcon: undefined,
});
</script>
