<script setup>
import { ref } from 'vue'
import SectionPage from './SectionPage.vue'

const sectionTitle = 'Allgemeine Informationen'

// fetch API https://restcountries.com/v3.1/alpha/cz
const generalInformation = ref([
  { title: 'Land', text: 'Tschechien' },
  { title: 'Amtssprache', text: 'Tschechisch' },
  { title: 'Hauptstadt', text: 'Prag' }
])
</script>

<template>
  <SectionPage>
    <template #heading>{{ sectionTitle }}</template>
    <article>
      <ul>
        <li v-for="information in generalInformation" :key="information.title">
          <h3>{{ information.title }}:</h3>
          <p>{{ information.text }}</p>
        </li>
      </ul>
      <figure>
        <img alt="Map" src="@/assets/images/map.png" />
      </figure>
    </article>
  </SectionPage>
</template>

<style lang="scss">
article {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  @media only screen and (min-width: 900px) {
    flex-direction: row;
    justify-content: space-evenly;
    gap: 2rem;
  }
  li {
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    h3 {
      font-weight: 500;
    }
  }
}
figure {
  width: 20rem;
  @media only screen and (min-width: 900px) {
    width: 30rem;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
