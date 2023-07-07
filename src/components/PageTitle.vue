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
  align-items: center;
  flex-direction: column;
  @media only screen and (min-width: 600px) {
    flex-direction: row;
    align-items: flex-start;
  }
  h1 {
    margin-top: -1.5rem;
    background: linear-gradient(
      90deg,
      rgba(42, 42, 42, 0) 0%,
      rgba(21, 21, 21, 1) 31%,
      rgba(6, 6, 6, 1) 50%,
      rgba(26, 26, 26, 1) 69%,
      rgba(42, 42, 42, 0) 100%
    );
    padding: 0.5rem 1rem;
    border-top: 2px solid $yellow-color;
    border-bottom: 2px solid $yellow-color;
    @media only screen and (min-width: 600px) {
      padding: 0.5rem 5rem;
      margin-top: 1rem;
      background: transparent;
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
      width: 8.5rem;
      height: 9rem;
      padding-bottom: 1rem;
    }
  }
}
</style>
