<script setup>
// import { ref } from 'vue'
import SectionPage from './SectionPage.vue'
import TimelineComponent from './TimelineComponent.vue'

const sectionTitle = 'Zeitplan'

// const generalInformation = ref([
//   { title: 'Land', text: 'Tschechien' },
//   { title: 'Amtssprache', text: 'Tschechisch' },
//   { title: 'Hauptstadt', text: 'Prag' }
// ])
</script>

<template>
  <SectionPage>
    <template #heading>{{ sectionTitle }}</template>
    <TimelineComponent />
  </SectionPage>
</template>

<style lang="scss"></style>
