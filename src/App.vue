<script setup>
import GeneralInformation from './components/GeneralInformation.vue'
import PageTitle from './components/PageTitle.vue'
import PlanningOverview from './components/Planning/PlanningOverview.vue'
import DictionaryList from './components/DictionaryList.vue'
import PackingList from '@/components/packingList/PackingList.vue'
</script>

<template>
  <header>
    <PageTitle />
  </header>
  <main>
    <GeneralInformation />
    <PlanningOverview />
    <PackingList />
    <DictionaryList />
  </main>
</template>

<style lang="scss" scoped>
header {
  line-height: 1.5;
  display: flex;
  justify-content: center;
}
</style>
