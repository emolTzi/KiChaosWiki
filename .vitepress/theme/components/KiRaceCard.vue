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
  border-radius: 14px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  color: inherit;
  margin: 16px 0;
  position: relative;
  overflow: hidden;
}

.ki-race-card::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(180deg, var(--vp-c-brand-3), var(--vp-c-gold-4));
  border-radius: 0 2px 2px 0;
}

.ki-race-card:hover {
  transform: translateX(4px);
  border-color: var(--vp-c-brand-soft);
  box-shadow: 0 8px 24px -6px rgba(0, 0, 0, 0.1);
}

.dark .ki-race-card:hover {
  box-shadow: 0 8px 24px -6px rgba(249, 115, 22, 0.12);
}

.card-emoji {
  font-size: 2rem;
  width: 48px;
  height: 48px;
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
  font-size: 1.15rem;
  font-weight: 700;
  margin: 0 0 6px 0 !important;
  color: var(--vp-c-brand-1);
}

.card-desc {
  margin: 0 0 8px 0 !important;
  font-size: 0.9em;
  line-height: 1.6;
  opacity: 0.8;
}

.card-forms {
  display: inline-block;
  font-size: 0.82em;
  color: var(--vp-c-gold-3);
  font-weight: 500;
}

.dark .card-forms {
  color: var(--vp-c-gold-4);
}
</style>
