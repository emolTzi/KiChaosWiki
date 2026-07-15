import DefaultTheme from 'vitepress/theme'
import './style.css'

// Custom components
import KiBadge from './components/KiBadge.vue'
import KiRaceCard from './components/KiRaceCard.vue'
import KiSetEffect from './components/KiSetEffect.vue'

import type { EnhanceAppContext } from 'vitepress'

function initTableHighlight() {
  const highlight = () => {
    requestAnimationFrame(() => {
      document.querySelectorAll<HTMLTableElement>('.vp-doc table').forEach((table) => {
        const rows = table.querySelectorAll('tbody tr')
        if (!rows.length) return

        // 1. Highlight stat columns by header text
        const headers = table.querySelectorAll('thead th')
        headers.forEach((th, colIdx) => {
          const text = th.textContent!.trim()
          let hl: string | null = null

          if (/^力量/.test(text)) hl = 'str'
          else if (/^灵巧/.test(text)) hl = 'dex'
          else if (/^意志/.test(text)) hl = 'wil'
          else if (/血量(?!回复|上限)/.test(text)) hl = 'hp'
          else if (/耐力(?!回复|上限)/.test(text)) hl = 'end'
          else if (/气(?!回复|上限|功)/.test(text) || text === '气') hl = 'ki'

          if (!hl) return

          rows.forEach((row) => {
            const cell = row.children[colIdx] as HTMLElement | undefined
            if (cell) cell.dataset.hl = hl
          })
        })

        // 2. Grade letters (S/A/B/C) in any cell
        rows.forEach((row) => {
          row.querySelectorAll('td').forEach((td) => {
            const text = td.textContent!.trim()
            if (/^[SABCD]$/.test(text)) {
              td.dataset.grade = text.toLowerCase()
            }
          })
        })

        // 3. Pure numbers in uncolored cells (enhancement levels, material counts, etc.)
        rows.forEach((row) => {
          row.querySelectorAll('td').forEach((td) => {
            if (td.dataset.hl || td.dataset.grade) return
            const t = td.textContent!.trim()
            if (/^\d+$/.test(t)) {
              td.dataset.hl = 'num'
            }
          })
        })
      })
    })
  }

  if (typeof window !== 'undefined') {
    highlight()
    // Re-run when route changes (SPA navigation)
    const observer = new MutationObserver(() => highlight())
    observer.observe(document.body, { childList: true, subtree: true })
    setTimeout(() => observer.disconnect(), 5000)
  }
}

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: EnhanceAppContext) {
    app.component('KiBadge', KiBadge)
    app.component('KiRaceCard', KiRaceCard)
    app.component('KiSetEffect', KiSetEffect)

    if (typeof window !== 'undefined') {
      setTimeout(initTableHighlight, 100)
    }
  },
}
