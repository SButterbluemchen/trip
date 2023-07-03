<script setup>
import GeneralInformation from './components/GeneralInformation.vue'
import PageTitle from './components/PageTitle.vue'
import Planning from './components/Planning.vue'
</script>

<template>
  <header>
    <PageTitle />
  </header>
  <main>
    <GeneralInformation />
    <Planning />
  </main>
</template>

<style lang="scss">
header {
  line-height: 1.5;
  display: flex;
  justify-content: center;
}
</style>
