<script setup lang="ts">
import { RouterView } from 'vue-router'
import TravelInfo from './components/TravelInfo.vue'
</script>

<template>
  <header>

    <div class="wrapper">
      <TravelInfo />
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
