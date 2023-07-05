<script setup>
const titleMessage = 'Beer Trip 2023'
</script>

<template>
  <article>
    <img alt="Beer glass" src="@/assets/images/beerGlassLogo.png" width="160" height="150" />
    <div>
      <h1>{{ titleMessage }}</h1>
      <p>13. - 16. Juli 2023</p>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/stylesheets/_variables.scss';
article {
  display: flex;
  align-items: flex-start;
  @media only screen and (min-width: 900px) {
    align-items: flex-end;
  }
  h1 {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border-top: 2px solid $yellow-color;
    border-bottom: 2px solid $yellow-color;
    @media only screen and (min-width: 900px) {
      padding: 0.5rem 5rem;
    }
  }
  p {
    color: $yellow-color;
    text-align: center;
    font-size: 1rem;
    padding: 0.25rem;
  }
  img {
    width: 5rem;
    height: 5.5rem;
    @media only screen and (min-width: 900px) {
      width: 9rem;
      height: 9rem;
    }
  }
}
</style>
