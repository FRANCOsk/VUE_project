<script setup lang="ts">
defineProps<{
  label: string
  value: string
  detail: string
  tone?: 'blue' | 'green' | 'amber' | 'violet'
}>()
</script>

<template>
  <article class="metric-card" :data-tone="tone ?? 'blue'">
    <span class="metric-accent" aria-hidden="true"></span>
    <p>{{ label }}</p>
    <strong>{{ value }}</strong>
    <small>{{ detail }}</small>
  </article>
</template>
