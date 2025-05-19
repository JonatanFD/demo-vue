<script setup>
import AppHeaderContent from './public/components/header.component.vue'
</script>

<template>
  <main class="app">
    <app-header-content></app-header-content>
      <router-view/>
  </main>
</template>

<style scoped>
.app {
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
}
</style>
