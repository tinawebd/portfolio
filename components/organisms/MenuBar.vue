<template>
  <PrimeMenubar :model="items" class="mx-auto max-w-screen-xl px-14">
    <template #start>
      <AtomsLogo to="/" />
    </template>
    <template #item="{ item }">
      <AtomsMenuBarItem :to="item.route" :label="item.label" />
    </template>
    <template #end>
      <MoleculesSocialNetworks />
    </template>
  </PrimeMenubar>
</template>

<script setup>
const items = ref([
  {
    label: 'Services',
    route: '/services',
  },
  {
    label: 'à propos',
    route: '/about',
  },
]);
</script>
