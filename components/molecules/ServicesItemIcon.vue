<template>
  <div
    class="relative flex h-[70px] w-[70px] items-center justify-center after:absolute after:left-0 after:top-0 after:h-full after:w-full after:border-2 after:border-primary after:transition-all after:duration-300 after:ease-in-out after:content-[''] after:group-hover:rotate-45"
  >
    <AtomsSvgIcon :path="icon" class="h-9 w-9" />
  </div>
</template>
<script setup lang="ts">
defineProps({
  icon: {
    type: String,
    required: true,
  },
});
</script>
