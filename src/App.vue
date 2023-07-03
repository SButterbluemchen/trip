<script setup>
import GeneralInformation from './components/GeneralInformation.vue'
import PageTitle from './components/PageTitle.vue'
import PlanningOverview from './components/PlanningOverview.vue'
</script>

<template>
  <header>
    <PageTitle />
  </header>
  <main>
    <GeneralInformation />
    <PlanningOverview />
  </main>
</template>

<style lang="scss">
header {
  line-height: 1.5;
  display: flex;
  justify-content: center;
}
</style>
