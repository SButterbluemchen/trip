<script setup>
import { ref } from 'vue'
import SectionPage from './SectionPage.vue'
import TimelineComponent from './TimelineComponent.vue'

import {
  firstDayEvents,
  secondDayEvents,
  thirdDayEvents,
  fourthDayEvents
} from './constants/planning.const'

const sectionTitle = 'Zeitplan'

const eventList = ref([
  { events: firstDayEvents, heading: 'Donnerstag, 13.07.2023' },
  { events: secondDayEvents, heading: 'Freitag, 14.07.2023' },
  { events: thirdDayEvents, heading: 'Samstag, 15.07.2023' },
  { events: fourthDayEvents, heading: 'Sonntag, 16.07.2023' }
])
</script>

<template>
  <SectionPage>
    <template #heading>{{ sectionTitle }}</template>
    <article>
      <TimelineComponent
        v-for="event in eventList"
        :event="event"
        :key="event.heading"
        :events="event.events"
        :heading="event.heading"
      >
        <template #dayHeading>{{ event.heading }}</template>
      </TimelineComponent>
    </article>
  </SectionPage>
</template>

<style lang="scss"></style>
