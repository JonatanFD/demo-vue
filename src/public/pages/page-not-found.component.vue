<template>
  <div class="not-found-container">
    <h1>Page Not Found</h1>
    <p>We couldn't find the page you were looking for.</p>
    <div class="attempted-url">
      <p>The URL you tried to access was:</p>
      <code>{{ attemptedUrl }}</code>
    </div>
    <div class="back-link">
      <router-link to="/home">Return to Home</router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const attemptedUrl = computed(() => {
  // Get the full path that was attempted
  return window.location.href;
});

</script>

<style scoped>
.not-found-container {
  text-align: center;
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
}

.attempted-url {
  margin: 2rem 0;
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 4px;
}

code {
  word-break: break-all;
  font-size: 0.9rem;
  background-color: #eee;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
}

.back-link {
  margin-top: 2rem;
}

.back-link a {
  text-decoration: none;
  color: #0066cc;
  font-weight: bold;
}
</style>
