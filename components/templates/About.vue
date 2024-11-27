<template>
  <div class="mx-auto max-w-screen-xl py-8">
    <OrganismsSectionCard
      title="à propos de moi"
      subtitle="qui suis-je ?"
      class="border-t-0"
    >
      <template #content
        ><AtomsTextDescription :description="description"
      /></template>
    </OrganismsSectionCard>
    <OrganismsSectionCard title="Mode de travail" subtitle="Indépendant">
      <template #content
        ><AtomsTextDescription :description="description"
      /></template>
    </OrganismsSectionCard>
    <OrganismsSectionCard
      title="Réseaux et Contacts"
      subtitle="Contactez-moi & Explorez Mon Travail"
    >
      <template #content><OrganismsContact /></template>
    </OrganismsSectionCard>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string;
  description: string;
}>();
</script>
