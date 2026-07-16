import DefaultTheme from 'vitepress/theme'
import './style.css'

import KiBadge from './components/KiBadge.vue'
import KiRaceCard from './components/KiRaceCard.vue'
import KiSetEffect from './components/KiSetEffect.vue'

import { useTableHighlight } from './composables/useTableHighlight'

import type { EnhanceAppContext } from 'vitepress'

const { init: initTableHighlight } = useTableHighlight()

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router }: EnhanceAppContext) {
    app.component('KiBadge', KiBadge)
    app.component('KiRaceCard', KiRaceCard)
    app.component('KiSetEffect', KiSetEffect)

    if (typeof window !== 'undefined') {
      // Run once on first paint
      initTableHighlight()

      // Re-run on every SPA navigation
      router.onAfterRouteChanged = () => {
        initTableHighlight()
      }
    }
  },
}
