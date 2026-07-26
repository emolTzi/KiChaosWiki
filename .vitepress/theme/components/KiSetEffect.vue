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

/**
 * Colorize numbers in text with the same scheme as the wiki-wide plugin.
 * Uses CSS classes defined in styles/tables.css for consistent theming.
 */
function colorize(text: string): string {
  return text
    .replace(/(\d+(?:\.\d+)?%)/g, '<span class="kn-pct">$1</span>')
    .replace(/(\d+(?:\.\d+)?)(分钟|秒|s)/g, '<span class="kn-time">$1$2</span>')
    .replace(/([+＋]?)(\d+(?:\.\d+)?w)/g, '$1<span class="kn-resource">$2</span>')
    .replace(/(\d+(?:\.\d+)?)倍/g, '<span class="kn-damage">$1倍</span>')
}
</script>

<template>
  <div class="ki-set-effect">
    <h3 class="set-title">{{ name }}</h3>

    <div v-if="solo" class="set-piece solo">
      <span class="piece-label">单件效果</span>
      <span class="piece-desc" v-html="colorize(solo)"></span>
    </div>

    <div v-for="(effect, idx) in effects" :key="idx" class="set-piece">
      <span class="piece-label">{{ effect.pieces || '效果' }}</span>
      <span class="piece-desc" v-html="colorize(effect.description)"></span>
    </div>

    <div v-if="skill" class="set-skill">
      <div class="skill-header">{{ skill.name || '技能' }}</div>
      <div class="skill-desc" v-html="colorize(skill.description)"></div>
    </div>
  </div>
</template>

<style scoped>
.ki-set-effect {
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 20px 24px;
  margin: 20px 0;
  background: var(--vp-c-bg-soft);
  transition: box-shadow 200ms ease, border-color 200ms ease;
}

.ki-set-effect:hover {
  border-color: var(--vp-c-brand-soft);
  box-shadow: var(--vp-shadow-md);
}

.set-title {
  font-size: 1.15rem !important;
  font-weight: 600 !important;
  margin: 0 0 16px 0 !important;
  padding-bottom: 10px !important;
  border-bottom: 2px solid var(--vp-c-divider);
  color: var(--vp-c-text-1) !important;
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
  font-weight: 600;
  font-size: 0.82em;
  color: var(--vp-c-brand-1);
  white-space: nowrap;
  min-width: 72px;
  padding: 1px 8px 0;
  border-radius: 4px;
  background: var(--vp-c-brand-bg);
}

.piece-desc {
  flex: 1;
  font-size: 0.92em;
  line-height: 1.65;
}

.set-skill {
  margin-top: 16px;
  padding: 16px;
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-divider);
  border-left: 3px solid var(--vp-c-brand-1);
  border-radius: 0 8px 8px 0;
}

.skill-header {
  font-weight: 600;
  font-size: 0.9em;
  margin-bottom: 8px;
  color: var(--vp-c-text-1);
}

.skill-desc {
  font-size: 0.88em;
  line-height: 1.7;
  white-space: pre-wrap;
  color: var(--vp-c-text-2);
}

.solo {
  padding: 10px 0;
  border-bottom: 1px dashed var(--vp-c-divider);
}
</style>
