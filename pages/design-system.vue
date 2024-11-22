<template>
  <div class="p-4">
    <h4 class="my-2 flex justify-center text-primary">Design System</h4>
    <div class="card">
      <PrimeTabs value="0">
        <PrimeTabList>
          <PrimeTab value="0">Atoms</PrimeTab>
          <PrimeTab value="1">Molecules</PrimeTab>
          <PrimeTab value="2">Organisms</PrimeTab>
        </PrimeTabList>
        <PrimeTabPanels>
          <!-- Atoms -->
          <PrimeTabPanel value="0">
            <div class="flex gap-2">
              <!-- Typography -->
              <AtomsFieldset legend="Typography">
                <div class="flex flex-col gap-2">
                  <h1>H1</h1>
                  <h2>H2</h2>
                  <h3>H3</h3>
                  <h4>H4</h4>
                  <h5>H5</h5>
                  <h6>H6</h6>
                </div>
                <p>Paragraphe</p>
              </AtomsFieldset>

              <!-- Buttons -->
              <AtomsFieldset legend="Buttons">
                <div class="flex flex-col gap-2">
                  <h6>Large</h6>
                  <div class="flex gap-2">
                    <AtomsButton label="Primary" size="large" />
                    <AtomsButton
                      label="Secondary"
                      severity="secondary"
                      size="large"
                    />
                    <AtomsButton
                      label="Success"
                      severity="success"
                      size="large"
                    />
                    <AtomsButton label="Info" severity="info" size="large" />
                    <AtomsButton label="Warn" severity="warn" size="large" />
                    <AtomsButton label="Help" severity="help" size="large" />
                    <AtomsButton
                      label="Danger"
                      severity="danger"
                      size="large"
                    />
                  </div>
                  <PrimeDivider />

                  <h6>Normal</h6>
                  <div class="flex gap-2">
                    <AtomsButton label="Primary" />
                    <AtomsButton label="Secondary" severity="secondary" />
                    <AtomsButton label="Success" severity="success" />
                    <AtomsButton label="Info" severity="info" />
                    <AtomsButton label="Warn" severity="warn" />
                    <AtomsButton label="Help" severity="help" />
                    <AtomsButton label="Danger" severity="danger" />
                  </div>
                  <PrimeDivider />

                  <h6>Small</h6>
                  <div class="flex gap-2">
                    <AtomsButton label="Primary" size="small" />
                    <AtomsButton
                      label="Secondary"
                      severity="secondary"
                      size="small"
                    />
                    <AtomsButton
                      label="Success"
                      severity="success"
                      size="small"
                    />
                    <AtomsButton label="Info" severity="info" size="small" />
                    <AtomsButton label="Warn" severity="warn" size="small" />
                    <AtomsButton label="Help" severity="help" size="small" />
                    <AtomsButton
                      label="Danger"
                      severity="danger"
                      size="small"
                    />
                  </div>
                  <PrimeDivider />

                  <!-- outlined buttons -->
                  <h6>Outlined</h6>
                  <div class="flex gap-2">
                    <AtomsButton
                      label="Primary"
                      variant="outlined"
                      size="small"
                    />
                    <AtomsButton
                      label="Secondary"
                      severity="secondary"
                      variant="outlined"
                      size="small"
                    />
                    <AtomsButton
                      label="Success"
                      severity="success"
                      variant="outlined"
                    />
                    <AtomsButton
                      label="Info"
                      severity="info"
                      variant="outlined"
                    />
                    <AtomsButton
                      label="Warn"
                      severity="warn"
                      variant="outlined"
                    />
                    <AtomsButton
                      label="Help"
                      severity="help"
                      variant="outlined"
                    />
                    <AtomsButton
                      label="Danger"
                      severity="danger"
                      variant="outlined"
                    />
                  </div>
                  <PrimeDivider />

                  <!-- link buttons -->
                  <h6>Link</h6>
                  <div class="flex gap-2">
                    <AtomsButton label="Primary" variant="link" />
                    <AtomsLinkButton
                      label="External"
                      href="https://vuejs.org/"
                    />
                    <AtomsRouterButton label="Router" to="/" />
                  </div>
                </div>
              </AtomsFieldset>

              <!-- Icons -->
              <AtomsFieldset legend="Icons">
                <div class="flex gap-2">
                  <AtomsSvgIcon :path="mdiLinkedin" />
                  <AtomsSvgIcon :path="mdiLaravel" />
                </div>
              </AtomsFieldset>
            </div>
          </PrimeTabPanel>

          <!-- Molecules -->
          <PrimeTabPanel value="1">
            <div class="flex gap-2">
              <AtomsFieldset legend="ItemIcon">
                <div class="flex flex-col gap-2">
                  <MoleculesServicesItemIcon :icon="mdiLaravel" />
                </div>
              </AtomsFieldset>
              <AtomsFieldset legend="RealisationCard">
                <div class="flex flex-col gap-2">
                  <MoleculesRealisationCard
                    title="Laravel"
                    subtitle="Laravel subtitle"
                    description="Laravel description"
                    href="#"
                  />
                </div>
              </AtomsFieldset>
              <AtomsFieldset legend="ProfileCard">
                <div class="flex flex-col gap-2">
                  <MoleculesProfileCard
                    name="Tina Fetraniaina"
                    content="Développeur Web PHP FullStack"
                  />
                </div>
              </AtomsFieldset>
            </div>
          </PrimeTabPanel>

          <!-- Organisms -->
          <PrimeTabPanel value="2">
            <AtomsFieldset legend="Technologies">
              <OrganismsTechnologie
                :title="'Laravel'"
                :description="'Laravel description'"
                :icon="mdiLaravel"
              />
            </AtomsFieldset>
            <AtomsFieldset legend="Carousel">
              <OrganismsCarousel />
            </AtomsFieldset>
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
