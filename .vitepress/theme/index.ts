import DefaultTheme from 'vitepress/theme'
import './style.css'

import KiBadge from './components/KiBadge.vue'
import KiRaceCard from './components/KiRaceCard.vue'
import KiSetEffect from './components/KiSetEffect.vue'

import type { EnhanceAppContext } from 'vitepress'

function initTableHighlight() {
  requestAnimationFrame(() => {
    document.querySelectorAll<HTMLTableElement>('.vp-doc table').forEach((table) => {
      const headers = table.querySelectorAll('thead th')
      if (!headers.length) return

      const rows = table.querySelectorAll('tbody tr')
      if (!rows.length) return

      // 1. Highlight stat / attribute columns by reading header text
      headers.forEach((th, colIdx) => {
        const text = th.textContent!.trim()
        let hl: string | null = null

        if (/^力量/.test(text)) hl = 'str'
        else if (/^灵巧/.test(text)) hl = 'dex'
        else if (/^意志/.test(text)) hl = 'wil'
        else if (/^血量(?!回复|上限)/.test(text)) hl = 'hp'
        else if (/^耐力(?!回复|上限)/.test(text)) hl = 'end'
        else if (/^气(?!回复|上限|功伤害)/.test(text) || text === '气') hl = 'ki'

        if (!hl) return

        rows.forEach((row) => {
          const cell = row.children[colIdx] as HTMLElement | undefined
          if (cell) cell.dataset.hl = hl
        })
      })

      // 2. Quality column detection (史诗/传说/神话)
      const qualityHeaderIdx = Array.from(headers).findIndex(
        (th) => th.textContent!.trim() === '品质'
      )
      if (qualityHeaderIdx !== -1) {
        rows.forEach((row) => {
          const cell = row.children[qualityHeaderIdx] as HTMLElement | undefined
          if (!cell) return
          const text = cell.textContent!.trim()
          if (text === '史诗') cell.dataset.hl = 'epic'
          else if (text === '传说') cell.dataset.hl = 'legendary'
          else if (text === '神话') cell.dataset.hl = 'mythic'
        })
      }

      // 3. Grade letters (S/A/B/C/D) in any cell
      rows.forEach((row) => {
        row.querySelectorAll('td').forEach((td) => {
          if (td.dataset.hl) return
          const text = td.textContent!.trim()
          if (/^[SABCD]$/.test(text)) {
            td.dataset.grade = text.toLowerCase()
          }
        })
      })

      // 4. Pure numbers and percentages in uncolored cells
      rows.forEach((row) => {
        row.querySelectorAll('td').forEach((td) => {
          if (td.dataset.hl || td.dataset.grade) return
          const t = td.textContent!.trim()
          if (/^\d+$/.test(t)) {
            td.dataset.hl = 'num'
          } else if (/^\d+[%％]$/.test(t)) {
            td.dataset.hl = 'pct'
          }
        })
      })
    })
  })
}

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
