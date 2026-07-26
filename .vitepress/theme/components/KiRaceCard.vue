<script setup lang="ts">
defineProps<{
  name: string
  emoji?: string
  description: string
  forms: string
  link?: string
}>()
</script>

<template>
  <a v-if="link" :href="link" class="ki-race-card">
    <div class="card-emoji">{{ emoji || '❓' }}</div>
    <div class="card-content">
      <h3 class="card-title">{{ name }}</h3>
      <p class="card-desc">{{ description }}</p>
      <span class="card-forms">{{ forms }}</span>
    </div>
  </a>
  <div v-else class="ki-race-card">
    <div class="card-emoji">{{ emoji || '❓' }}</div>
    <div class="card-content">
      <h3 class="card-title">{{ name }}</h3>
      <p class="card-desc">{{ description }}</p>
      <span class="card-forms">{{ forms }}</span>
    </div>
  </div>
</template>

<style scoped>
.ki-race-card {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  text-decoration: none;
  color: inherit;
  margin: 16px 0;
  position: relative;
  border-left: 3px solid var(--vp-c-brand-1);
  transition: box-shadow 200ms ease, border-color 200ms ease;
}

.ki-race-card:hover {
  border-color: var(--vp-c-brand-soft);
  box-shadow: var(--vp-shadow-md);
}

.card-emoji {
  font-size: 1.6rem;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.card-content {
  flex: 1;
  min-width: 0;
}

.card-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 6px 0 !important;
  color: var(--vp-c-text-1);
}

.card-desc {
  margin: 0 0 8px 0 !important;
  font-size: 0.9em;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.card-forms {
  display: inline-block;
  font-size: 0.82em;
  color: var(--vp-c-brand-1);
  font-weight: 500;
}
</style>
