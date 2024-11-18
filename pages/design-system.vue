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
                  <h1>H1</h1>
                  <h2>H2</h2>
                  <h3>H3</h3>
                  <h4>H4</h4>
                  <h5>H5</h5>
                  <h6>H6</h6>
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
                <div class="flex gap-2">
                  <AtomsSvgIcon :path="mdiLinkedin" />
                  <AtomsSvgIcon :path="mdiLaravel" />
                </div>
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
                <div class="group flex flex-col gap-2">
                  <MoleculesServicesItemIcon :icon="mdiLaravel" />
                </div>
              </div>
            </div>
          </PrimeTabPanel>
          <PrimeTabPanel value="2">
            <div class="flex flex-col gap-2 border border-gray-500 p-2">
              <h2
                class="border-2 border-slate-400 bg-slate-200 p-2 text-slate-600"
              >
                Technologies
              </h2>
              <OrganismsTechnologie
                :title="'Laravel'"
                :description="'Laravel description'"
                :icon="mdiLaravel"
              />
            </div>
          </PrimeTabPanel>
        </PrimeTabPanels>
      </PrimeTabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { mdiLinkedin, mdiLaravel } from '@mdi/js';
definePageMeta({
  showHeader: false,
});
</script>
