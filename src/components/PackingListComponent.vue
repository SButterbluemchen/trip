<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  list: Array
})
</script>

<template>
  <div class="packingList-component">
    <h3>
      <slot name="paragraphHeading"></slot>
    </h3>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <p>{{ item }}</p>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.packingList-component {
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 900px) {
    max-width: 33%;
  }
  h3 {
    font-size: 1.25rem;
  }
  ul {
    padding: 0 1rem;
  }
}
</style>
