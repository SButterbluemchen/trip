<script setup>
import HopDivider from './helpers/HopDivider.vue'
</script>

<template>
  <section class="section">
    <h2>
      <slot name="heading"></slot>
    </h2>
    <slot></slot>
    <HopDivider />
  </section>
</template>

<style lang="scss" scoped></style>
