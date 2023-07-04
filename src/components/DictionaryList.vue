<script setup>
import SectionPage from './SectionPage.vue'
import dictionary1 from '@/assets/images/dictionary-1.png'
import dictionary2 from '@/assets/images/dictionary-2.png'
import dictionary3 from '@/assets/images/dictionary-3.png'
import dictionary4 from '@/assets/images/dictionary-4.png'

const sectionTitle = 'Wörterbuch'

const images = [dictionary1, dictionary2, dictionary3, dictionary4]
</script>

<template>
  <SectionPage>
    <template #heading>{{ sectionTitle }}</template>
    <article>
      <img alt="dictionary-image" v-for="image in images" :key="image" :src="image" />
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
  img {
    width: 100%;
    @media only screen and (min-width: 900px) {
      width: 35%;
    }
  }
}
</style>
