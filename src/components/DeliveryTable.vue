<script setup lang="ts">
import type { DeliveryProject } from '@/data/delivery'

defineProps<{
  projects: DeliveryProject[]
}>()

const statusClass = (status: DeliveryProject['status']) =>
  status.toLowerCase().replaceAll(' ', '-')
</script>

<template>
  <div class="table-wrapper">
    <table>
      <thead>
        <tr>
          <th>Project</th>
          <th>Domain</th>
          <th>Technology</th>
          <th>Status</th>
          <th>Progress</th>
          <th>Next milestone</th>
          <th>Team</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects" :key="project.id">
          <td data-label="Project">
            <strong>{{ project.name }}</strong>
          </td>
          <td data-label="Domain">{{ project.domain }}</td>
          <td data-label="Technology">{{ project.technology }}</td>
          <td data-label="Status">
            <span class="status-badge" :class="statusClass(project.status)">
              {{ project.status }}
            </span>
          </td>
          <td data-label="Progress">
            <div class="progress-cell">
              <span>{{ project.progress }}%</span>
              <div class="progress-track" role="progressbar" :aria-valuenow="project.progress" aria-valuemin="0" aria-valuemax="100">
                <span :style="{ width: `${project.progress}%` }"></span>
              </div>
            </div>
          </td>
          <td data-label="Next milestone">{{ project.nextMilestone }}</td>
          <td data-label="Team">{{ project.teamSize }}</td>
        </tr>
      </tbody>
    </table>

    <div v-if="projects.length === 0" class="empty-state">
      No projects match the selected filters.
    </div>
  </div>
</template>
