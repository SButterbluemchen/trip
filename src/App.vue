<script setup>
import { ref } from 'vue'
import GeneralInformation from './components/GeneralInformation.vue'
import PageTitle from './components/PageTitle.vue'
import PlanningOverview from './components/Planning/PlanningOverview.vue'
import DictionaryList from './components/DictionaryList.vue'
import PackingList from './components/packingList/PackingList.vue'
import WeatherApp from './components/WeatherApp.vue'
import WeatherButton from './components/WeatherButton.vue'

const showWeatherComponent = ref()
</script>

<template>
  <div v-if="showWeatherComponent">
    <WeatherApp />
  </div>
  <header>
    <PageTitle />
    <WeatherButton
      @state="(showComponentFromChild) => (showWeatherComponent = showComponentFromChild)"
    />
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
  position: relative;
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
