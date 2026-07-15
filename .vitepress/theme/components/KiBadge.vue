<script setup lang="ts">
defineProps<{
  type?: 'epic' | 'legendary' | 'mythic' | 'info' | 'warning' | 'danger'
  size?: 'sm' | 'md'
}>()
</script>

<template>
  <span class="ki-badge" :class="[type ?? 'info', size ?? 'sm']">
    <slot />
  </span>
</template>

<style scoped>
.ki-badge {
  display: inline-flex;
  align-items: center;
  padding: 2px 10px;
  border-radius: 20px;
  font-weight: 600;
  letter-spacing: 0.03em;
  vertical-align: middle;
  white-space: nowrap;
}

.ki-badge.sm {
  font-size: 0.76em;
  padding: 1px 8px;
}

.ki-badge.md {
  font-size: 0.82em;
  padding: 3px 12px;
}

.ki-badge.epic {
  background: rgba(168, 85, 247, 0.14);
  color: #a855f7;
  border: 1px solid rgba(168, 85, 247, 0.25);
}

.ki-badge.legendary {
  background: rgba(249, 115, 22, 0.14);
  color: #f97316;
  border: 1px solid rgba(249, 115, 22, 0.25);
}

.ki-badge.mythic {
  background: rgba(234, 179, 8, 0.14);
  color: #eab308;
  border: 1px solid rgba(234, 179, 8, 0.25);
}

.ki-badge.info {
  background: rgba(37, 99, 235, 0.12);
  color: #3b82f6;
  border: 1px solid rgba(37, 99, 235, 0.2);
}

.ki-badge.warning {
  background: rgba(234, 88, 12, 0.12);
  color: #ea580c;
  border: 1px solid rgba(234, 88, 12, 0.2);
}

.ki-badge.danger {
  background: rgba(168, 85, 247, 0.12);
  color: #a855f7;
  border: 1px solid rgba(168, 85, 247, 0.2);
}
</style>
