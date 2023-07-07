<script setup>
import Timeline from 'primevue/timeline'

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  events: Array
})
</script>

<template>
  <div class="timeline-component">
    <h3>
      <slot name="dayHeading"></slot>
    </h3>
    <Timeline :value="events" class="customized-timeline">
      <template #opposite="slotProps">
        <p class="p-text-secondary">{{ slotProps.item.time }}</p>
      </template>
      <template #marker="slotProps">
        <span class="icon" :style="{ backgroundColor: slotProps.item.color }">
          <i v-if="slotProps.item.icon" :class="slotProps.item.icon"></i>
          <font-awesome-icon v-else :icon="slotProps.item.secondaryIcon" />
        </span>
      </template>
      <template #content="slotProps">
        <p class="p-text-description">{{ slotProps.item.status }}</p>
      </template>
    </Timeline>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/stylesheets/_variables.scss';

.timeline-component {
  @media only screen and (min-width: 900px) {
    width: 45%;
  }
  padding: 1rem 0;
}
.customized-timeline {
  padding: 1rem;
}
h3 {
  text-align: center;
  background: rgb(35, 35, 35);
  padding: 0.25rem;
}
.icon {
  padding: 0.5rem;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  text-align: center;
}
.p-text-secondary {
  color: #1f1f1f;
}

.p-text-description {
  display: flex;
  flex-wrap: wrap;
  color: #1f1f1f;
  @media only screen and (min-width: 900px) {
    max-width: 10rem;
  }
  @media only screen and (min-width: 1200px) {
    max-width: 15rem;
  }
  max-width: 5rem;
}
</style>
