<script setup>
;(function (d, s, id) {
  if (d.getElementById(id)) {
    if (window.__TOMORROW__) {
      window.__TOMORROW__.renderWidget()
    }
    return
  }
  const fjs = d.getElementsByTagName(s)[0]
  const js = d.createElement(s)
  js.id = id
  js.src = 'https://www.tomorrow.io/v1/widget/sdk/sdk.bundle.min.js'

  fjs.parentNode.insertBefore(js, fjs)
})(document, 'script', 'tomorrow-sdk')
</script>

<template>
  <div class="weather-app">
    <div
      class="tomorrow"
      data-location-id="022970"
      data-language="DE"
      data-unit-system="METRIC"
      data-skin="dark"
      data-widget-type="upcoming"
      style="padding-bottom: 22px; position: relative"
    >
      <a
        href="https://www.tomorrow.io/weather-api/"
        rel="nofollow noopener noreferrer"
        target="_blank"
        style="position: absolute; bottom: 0; transform: translateX(-50%); left: 50%"
      >
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.weather-app {
  width: 9rem;
  position: fixed;
  top: 0;
  right: 0;
}
</style>
