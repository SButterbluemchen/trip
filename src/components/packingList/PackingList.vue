<script setup>
import { ref } from 'vue'
import { clothes, valuables, hygiene } from '../constants/packingList.const'

import SectionPage from '../SectionPage.vue'
import PackingListComponent from '../packingList/PackingListComponent.vue'

const sectionTitle = 'Packliste'

const packingLists = ref([
  { list: clothes, heading: 'Kleidung' },
  { list: hygiene, heading: 'Hygiene' },
  { list: valuables, heading: 'Unterlagen' }
])
</script>

<template>
  <SectionPage>
    <template #heading>{{ sectionTitle }}</template>
    <article>
      <PackingListComponent
        v-for="packingList in packingLists"
        :packingList="packingList"
        :key="packingList.heading"
        :list="packingList.list"
        :heading="packingList.heading"
      >
        <template #paragraphHeading>{{ packingList.heading }}</template>
      </PackingListComponent>
    </article>
  </SectionPage>
</template>

<style lang="scss" scoped>
article {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 1rem;
  padding: 1rem;
  @media only screen and (min-width: 900px) {
    gap: 2rem;
    justify-content: space-evenly;
  }
}
</style>
