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
  position: relative;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 20px 24px;
  margin: 20px 0;
  background: var(--vp-c-bg-soft);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.ki-set-effect::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--vp-c-brand-3), var(--vp-c-gold-4), var(--vp-c-blue-3));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.ki-set-effect:hover {
  transform: translateY(-2px);
  border-color: var(--vp-c-brand-soft);
  box-shadow: 0 8px 24px -8px rgba(234, 88, 12, 0.18);
}

.ki-set-effect:hover::before {
  transform: scaleX(1);
}

.dark .ki-set-effect:hover {
  box-shadow: 0 8px 24px -8px rgba(249, 115, 22, 0.2);
}

.set-title {
  font-size: 1.2rem !important;
  font-weight: 700 !important;
  margin: 0 0 16px 0 !important;
  padding-bottom: 10px !important;
  border-bottom: 2px solid;
  border-image: linear-gradient(90deg, var(--vp-c-brand-3), var(--vp-c-gold-4), transparent) 1;
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
  padding: 1px 8px 0;
  border-radius: 6px;
  background: var(--vp-c-gold-bg);
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
  padding: 16px 16px 16px 20px;
  background: var(--vp-c-brand-bg);
  border: 1px solid var(--vp-c-brand-soft);
  border-left: 4px solid var(--vp-c-brand-3);
  border-radius: 0 10px 10px 0;
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
