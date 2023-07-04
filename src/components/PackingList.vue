<script setup>
import { ref } from 'vue'
import SectionPage from './SectionPage.vue'
import PackingListComponent from './PackingListComponent.vue'

import { clothes, valuables, hygiene } from './constants/packingList.const'

const sectionTitle = 'Packliste'

const packingLists = ref([
  { list: clothes, heading: 'Kleidung' },
  { list: valuables, heading: 'Unterlagen' },
  { list: hygiene, heading: 'Hygiene' }
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

<style lang="scss">
article {
  display: flex;
}
</style>
