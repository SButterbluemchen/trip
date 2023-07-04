<script setup>
import GeneralInformation from './components/GeneralInformation.vue'
import PageTitle from './components/PageTitle.vue'
import PlanningOverview from './components/PlanningOverview.vue'
import PackingList from './components/PackingList.vue'
</script>

<template>
  <header>
    <PageTitle />
  </header>
  <main>
    <GeneralInformation />
    <PlanningOverview />
    <PackingList />
  </main>
</template>

<style lang="scss" scoped>
header {
  line-height: 1.5;
  display: flex;
  justify-content: center;
}
</style>
