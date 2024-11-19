<template>
  <Primecard>
    <template v-if="$slots.header" #header>
      <slot name="header"></slot>
    </template>
    <template v-if="$slots.title" #title>
      <slot name="title"></slot>
    </template>
    <template v-if="$slots.subtitle" #subtitle>
      <slot name="subtitle"></slot>
    </template>
    <template v-if="$slots.content" #content>
      <slot name="content"></slot>
    </template>
    <template v-if="$slots.footer" #footer>
      <slot name="footer"></slot>
    </template>
  </Primecard>
</template>

<script setup></script>
