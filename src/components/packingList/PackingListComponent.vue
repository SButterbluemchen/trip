<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  list: Array,
  heading: String
})

const currentList = ref([])

onMounted(() => {
  const storedList = localStorage.getItem(props.heading)

  if (storedList) {
    currentList.value = JSON.parse(storedList)
  } else {
    localStorage.setItem(props.heading, JSON.stringify(props.list))
    currentList.value = props.list
  }
})

const updateStorage = () => {
  localStorage.setItem(props.heading, JSON.stringify(currentList.value))
}
</script>

<template>
  <div class="packingList-component">
    <h3>
      <slot name="paragraphHeading"></slot>
    </h3>
    <ul>
      <li v-for="item in currentList" :key="item.id">
        <input type="checkbox" v-model="item.done" @change="updateStorage" />
        <span>{{ item.text }}</span>
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
    padding: 0 0.25rem;
    li {
      list-style-type: none;
      span {
        padding-left: 0.5rem;
      }
    }
  }
}
</style>
