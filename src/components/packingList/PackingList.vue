<script setup>
import { ref } from 'vue'
import { clothes, valuables, hygiene } from '../constants/packingList.const'

import SectionPage from '../SectionPage.vue'
import PackingListComponent from '../packingList/PackingListComponent.vue'

const sectionTitle = 'Packliste'

const packingLists = ref([
  { list: clothes, heading: 'Kleidung' },
  { list: valuables, heading: 'Hygiene' },
  { list: hygiene, heading: 'Unterlagen' }
])
</script>

<template>
  <section class="packing-list">
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
  </section>
</template>

<style lang="scss" scoped>
.packing-list {
  background-image: url('/brown-grunge-texture.jpg');
  padding: 2rem 0;
  margin: 0 -1rem;
  article {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 1rem;
    padding: 1rem;
    margin: auto;
    max-width: 90%;
    @media only screen and (min-width: 900px) {
      justify-content: space-evenly;
      gap: 2rem;
    }
  }
}
</style>
