import DefaultTheme from 'vitepress/theme'
import './style.css'

// Custom components
import KiBadge from './components/KiBadge.vue'
import KiRaceCard from './components/KiRaceCard.vue'
import KiSetEffect from './components/KiSetEffect.vue'

import type { EnhanceAppContext } from 'vitepress'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: EnhanceAppContext) {
    app.component('KiBadge', KiBadge)
    app.component('KiRaceCard', KiRaceCard)
    app.component('KiSetEffect', KiSetEffect)
  },
}
