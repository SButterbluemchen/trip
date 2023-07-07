<script setup>
import { ref } from 'vue'

const showComponent = ref(false)
const emit = defineEmits(['state'])

const toggleComponent = () => {
  showComponent.value = !showComponent.value
  emit('state', showComponent.value)
}
</script>

<template>
  <button class="weather-button" @click="toggleComponent">
    <img v-if="!showComponent" alt="weather" src="@/assets/images/weather-icon.png" width="100" />
    <p v-if="showComponent" class="weather-close">X</p>
  </button>
</template>

<style lange="scss" scoped>
.weather-button {
  position: absolute;
  top: -1.5rem;
  right: 1rem;
  background: transparent;
  color: white;
  border: none;
  @media only screen and (max-width: 600px) {
    display: none;
  }
}
.weather-close {
  position: absolute;
  right: 7.5rem;
  font-size: 1rem;
  font-weight: 700;
}
</style>
