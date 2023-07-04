<script setup>
import { ref } from 'vue'
import SectionPage from './SectionPage.vue'

const sectionTitle = 'Allgemeine Informationen'

const generalInformation = ref([
  { title: 'Land', text: 'Tschechien' },
  { title: 'Amtssprache', text: 'Tschechisch' },
  { title: 'Hauptstadt', text: 'Prag' },
  { title: 'Währung', text: 'Tschechische Kronen (CZK)' },
  { title: 'Wechselkurs', text: '1 € - 23,70 CZK' },
  { title: 'Einwohnerzahl', text: '10,5 Millionen' },
  { title: 'Nationalfeiertag', text: '28. Oktober' },
  { title: 'Telefonvorwahl', text: '+420' }
])
</script>

<template>
  <SectionPage>
    <template #heading>{{ sectionTitle }}</template>
    <article>
      <ul class="general-information__list">
        <img alt="flag" src="@/assets/images/czech-republic-flag.png" />
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

<style lang="scss" scoped>
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
  .general-information__list li {
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
}
figure {
  width: 19rem;
  @media only screen and (min-width: 900px) {
    width: 35rem;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
