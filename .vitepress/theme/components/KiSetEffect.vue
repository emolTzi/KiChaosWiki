<script setup lang="ts">
defineProps<{
  name: string
  effects: {
    pieces?: string
    description: string
  }[]
  skill?: {
    name?: string
    description: string
  }
  solo?: string
}>()
</script>

<template>
  <div class="ki-set-effect">
    <h3 class="set-title">{{ name }}</h3>

    <div v-if="solo" class="set-piece solo">
      <span class="piece-label">单件效果</span>
      <span class="piece-desc">{{ solo }}</span>
    </div>

    <div v-for="(effect, idx) in effects" :key="idx" class="set-piece">
      <span class="piece-label">{{ effect.pieces || '效果' }}</span>
      <span class="piece-desc">{{ effect.description }}</span>
    </div>

    <div v-if="skill" class="set-skill">
      <div class="skill-header">{{ skill.name || '技能' }}</div>
      <div class="skill-desc">{{ skill.description }}</div>
    </div>
  </div>
</template>

<style scoped>
.ki-set-effect {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 20px 24px;
  margin: 20px 0;
  background: var(--vp-c-bg-soft);
  transition: all 0.3s ease;
}

.ki-set-effect:hover {
  border-color: var(--vp-c-brand-soft);
  box-shadow: 0 4px 16px -4px rgba(0, 0, 0, 0.06);
}

.set-title {
  font-size: 1.2rem !important;
  font-weight: 700 !important;
  margin: 0 0 16px 0 !important;
  padding-bottom: 10px !important;
  border-bottom: 2px solid var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1) !important;
  -webkit-text-fill-color: var(--vp-c-brand-1) !important;
  background: none !important;
}

.set-piece {
  display: flex;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px dashed var(--vp-c-divider);
}

.set-piece:last-of-type {
  border-bottom: none;
}

.piece-label {
  font-weight: 650;
  font-size: 0.85em;
  color: var(--vp-c-gold-3);
  white-space: nowrap;
  min-width: 72px;
  padding-top: 1px;
}

.dark .piece-label {
  color: var(--vp-c-gold-4);
}

.piece-desc {
  flex: 1;
  font-size: 0.92em;
  line-height: 1.65;
}

.set-skill {
  margin-top: 16px;
  padding: 16px;
  background: var(--vp-c-brand-bg);
  border-radius: 10px;
  border: 1px solid var(--vp-c-brand-soft);
}

.skill-header {
  font-weight: 700;
  font-size: 0.92em;
  margin-bottom: 8px;
  color: var(--vp-c-brand-2);
}

.skill-desc {
  font-size: 0.88em;
  line-height: 1.7;
  white-space: pre-wrap;
}

.solo {
  padding: 10px 0;
  border-bottom: 1px dashed var(--vp-c-divider);
}
</style>
