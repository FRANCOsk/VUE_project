<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app-shell">
    <header class="topbar">
      <div class="brand">
        <span class="brand-mark" aria-hidden="true">FD</span>
        <div>
          <strong>Franco Delivery</strong>
          <span>Enterprise portfolio dashboard</span>
        </div>
      </div>

      <nav aria-label="Primary navigation">
        <RouterLink to="/">Dashboard</RouterLink>
      </nav>

      <div class="availability">
        <span class="availability-dot" aria-hidden="true"></span>
        Available for remote B2B projects
      </div>
    </header>

    <main>
      <RouterView />
    </main>

    <footer>
      <span>Vue 3 · TypeScript · Vite</span>
      <span>Portfolio demonstration with sample data</span>
    </footer>
  </div>
</template>
