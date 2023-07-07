<script setup>
import GeneralInformation from './components/GeneralInformation.vue'
import PageTitle from './components/PageTitle.vue'
import PlanningOverview from './components/Planning/PlanningOverview.vue'
import DictionaryList from './components/DictionaryList.vue'
import PackingList from './components/packingList/PackingList.vue'
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
  <footer>
    <p>@Copyright 2023 - Made with ❤️ by Sina Brauch</p>
  </footer>
</template>

<style lang="scss" scoped>
header {
  line-height: 1.5;
  display: flex;
  justify-content: center;
}
footer {
  text-align: center;
  background-image: url('/backgroundImage.jpeg');
  background-repeat: no-repeat;
  padding: 1.5rem;
  margin: -1rem;
  p {
    font-size: 0.75rem;
  }
}
</style>
