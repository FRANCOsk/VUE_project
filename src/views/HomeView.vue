<script setup lang="ts">
import { computed, ref } from 'vue'
import DeliveryTable from '@/components/DeliveryTable.vue'
import MetricCard from '@/components/MetricCard.vue'
import { deliveryProjects, type DeliveryStatus } from '@/data/delivery'

const domain = ref('All domains')
const status = ref<'All statuses' | DeliveryStatus>('All statuses')
const search = ref('')

const domains = computed(() => [
  'All domains',
  ...new Set(deliveryProjects.map((project) => project.domain))
])

const filteredProjects = computed(() => {
  const query = search.value.trim().toLowerCase()

  return deliveryProjects.filter((project) => {
    const matchesDomain = domain.value === 'All domains' || project.domain === domain.value
    const matchesStatus = status.value === 'All statuses' || project.status === status.value
    const matchesQuery =
      query.length === 0 ||
      project.name.toLowerCase().includes(query) ||
      project.technology.toLowerCase().includes(query)

    return matchesDomain && matchesStatus && matchesQuery
  })
})

const activeProjects = computed(
  () => deliveryProjects.filter((project) => project.status !== 'Completed').length
)

const averageProgress = computed(() => {
  const total = deliveryProjects.reduce((sum, project) => sum + project.progress, 0)
  return Math.round(total / deliveryProjects.length)
})

const technologyCount = computed(() => {
  const technologies = deliveryProjects.flatMap((project) =>
    project.technology.split(' · ').map((technology) => technology.trim())
  )
  return new Set(technologies).size
})

const resetFilters = () => {
  domain.value = 'All domains'
  status.value = 'All statuses'
  search.value = ''
}
</script>

<template>
  <section class="dashboard">
    <div class="hero">
      <div>
        <span class="eyebrow">Enterprise engineering portfolio</span>
        <h1>Delivery health at a glance</h1>
        <p>
          A responsive Vue dashboard demonstrating typed data models, computed filtering,
          reusable components, and modern frontend delivery practices.
        </p>
      </div>
      <div class="hero-badge">
        <span>27+</span>
        <small>years in enterprise software</small>
      </div>
    </div>

    <div class="metrics-grid">
      <MetricCard
        label="Active projects"
        :value="String(activeProjects)"
        detail="across multiple enterprise domains"
        tone="blue"
      />
      <MetricCard
        label="Average progress"
        :value="`${averageProgress}%`"
        detail="portfolio delivery completion"
        tone="green"
      />
      <MetricCard
        label="Technology coverage"
        :value="String(technologyCount)"
        detail="frameworks and platform technologies"
        tone="violet"
      />
      <MetricCard
        label="Projects at risk"
        :value="String(deliveryProjects.filter((project) => project.status === 'At risk').length)"
        detail="requiring delivery attention"
        tone="amber"
      />
    </div>

    <section class="panel filter-panel" aria-labelledby="filters-title">
      <div class="panel-heading">
        <div>
          <span class="eyebrow">Portfolio filters</span>
          <h2 id="filters-title">Find the relevant delivery stream</h2>
        </div>
        <button type="button" class="secondary-button" @click="resetFilters">Reset filters</button>
      </div>

      <div class="filter-grid">
        <label>
          <span>Search</span>
          <input v-model="search" type="search" placeholder="Project or technology" />
        </label>
        <label>
          <span>Domain</span>
          <select v-model="domain">
            <option v-for="item in domains" :key="item" :value="item">{{ item }}</option>
          </select>
        </label>
        <label>
          <span>Status</span>
          <select v-model="status">
            <option>All statuses</option>
            <option>On track</option>
            <option>At risk</option>
            <option>Completed</option>
          </select>
        </label>
      </div>
    </section>

    <section class="panel" aria-labelledby="portfolio-title">
      <div class="panel-heading">
        <div>
          <span class="eyebrow">Sample delivery data</span>
          <h2 id="portfolio-title">Enterprise project portfolio</h2>
          <p>{{ filteredProjects.length }} of {{ deliveryProjects.length }} projects displayed</p>
        </div>
      </div>
      <DeliveryTable :projects="filteredProjects" />
    </section>

    <section class="capabilities">
      <div>
        <span class="eyebrow">Engineering focus</span>
        <h2>Designed for maintainable enterprise delivery</h2>
      </div>
      <ul>
        <li>Typed Vue 3 Composition API components</li>
        <li>Responsive and accessible interface patterns</li>
        <li>Automated type checking, testing, build, and dependency audit</li>
        <li>Portfolio-oriented documentation and CI configuration</li>
      </ul>
    </section>
  </section>
</template>
