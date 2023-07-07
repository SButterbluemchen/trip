<script setup>
import { ref } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

import { TRANSLATIONS } from './constants/translations.const'

import SectionPage from './SectionPage.vue'

const sectionTitle = 'Wörterbuch'

const basicTranslations = ref(TRANSLATIONS.BASICS)
const otherTranslations = ref(TRANSLATIONS.OTHER)
const numberTranslations = ref(TRANSLATIONS.NUMBERS)
const columns = [
  { field: 'german', header: 'Deutsch' },
  { field: 'czech', header: 'Tschechisch' }
]
</script>

<template>
  <section class="dictionary">
    <SectionPage>
      <template #heading>{{ sectionTitle }}</template>
      <article>
        <DataTable :value="basicTranslations" showGridlines class="datatable">
          <Column
            v-for="col of columns"
            :key="col.field"
            :field="col.field"
            :header="col.header"
            class="column"
          >
          </Column>
        </DataTable>
        <DataTable :value="otherTranslations" showGridlines class="datatable">
          <Column
            v-for="col of columns"
            :key="col.field"
            :field="col.field"
            :header="col.header"
            class="column"
          >
          </Column>
        </DataTable>
        <DataTable :value="numberTranslations" showGridlines class="datatable">
          <Column
            v-for="col of columns"
            :key="col.field"
            :field="col.field"
            :header="col.header"
            class="column"
          >
          </Column>
        </DataTable>
      </article>
    </SectionPage>
  </section>
</template>

<style lang="scss" scoped>
@import '../assets/stylesheets/variables';
.dictionary {
  article {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 1rem;
    padding: 1rem;
    @media only screen and (min-width: 900px) {
      gap: 2rem;
      justify-content: space-evenly;
      width: 90%;
      margin: auto;
    }
    .datatable {
      flex: 100%;
      @media only screen and (min-width: 900px) {
        flex: 1;
      }
    }
  }
}
</style>
