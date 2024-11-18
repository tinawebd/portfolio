<template>
  <div class="p-4">
    <h1 class="my-2 text-primary">Design System</h1>
    <div class="card">
      <PrimeTabs value="0">
        <PrimeTabList>
          <PrimeTab value="0">Atoms</PrimeTab>
          <PrimeTab value="1">Molecules</PrimeTab>
          <PrimeTab value="2">Organisms</PrimeTab>
        </PrimeTabList>
        <PrimeTabPanels>
          <PrimeTabPanel value="0">
            <div class="flex gap-2">
              <div class="flex flex-col gap-2 border border-gray-500 p-2">
                <h2
                  class="border-2 border-slate-400 bg-slate-200 p-2 text-slate-600"
                >
                  Typography
                </h2>
                <div class="flex flex-col gap-2">
                  <AtomsTypographyTitle>H1</AtomsTypographyTitle>
                  <AtomsTypographyTitle tag="h2">H2</AtomsTypographyTitle>
                  <AtomsTypographyTitle tag="h3">H3</AtomsTypographyTitle>
                  <AtomsTypographyTitle tag="h4">H4</AtomsTypographyTitle>
                  <AtomsTypographyTitle tag="h5">H5</AtomsTypographyTitle>
                  <AtomsTypographyTitle tag="h6">H6</AtomsTypographyTitle>
                </div>
                <p>Paragraphe</p>
              </div>

              <!-- Buttons -->
              <div class="flex flex-col gap-2 border border-gray-500 p-2">
                <h2
                  class="border-2 border-slate-400 bg-slate-200 p-2 text-slate-600"
                >
                  Buttons
                </h2>
                <AtomsButton label="Primary" severity="primary" />
              </div>

              <div class="flex flex-col gap-2 border border-gray-500 p-2">
                <h2
                  class="border-2 border-slate-400 bg-slate-200 p-2 text-slate-600"
                >
                  SvgIcon
                </h2>
                <AtomsSvgIcon :path="mdiLinkedin" />
              </div>
              <div class="flex flex-col gap-2 border border-gray-500 p-2">
                <h2
                  class="border-2 border-slate-400 bg-slate-200 p-2 text-slate-600"
                >
                  Technologies
                </h2>
                <MoleculesTechnologie />
              </div>
            </div>
          </PrimeTabPanel>
          <PrimeTabPanel value="1">
            <div class="flex gap-2">
              <div class="flex flex-col gap-2 border border-gray-500 p-2">
                <h2
                  class="border-2 border-slate-400 bg-slate-200 p-2 text-slate-600"
                >
                  ServicesItemIcon
                </h2>
                <div class="flex flex-col gap-2">
                  <MoleculesServicesItemIcon />
                </div>
              </div>
            </div>
          </PrimeTabPanel>
          <PrimeTabPanel value="2">
            <p class="m-0">Organisms</p>
          </PrimeTabPanel>
        </PrimeTabPanels>
      </PrimeTabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { mdiLinkedin } from '@mdi/js';
definePageMeta({
  showHeader: false,
});
</script>
