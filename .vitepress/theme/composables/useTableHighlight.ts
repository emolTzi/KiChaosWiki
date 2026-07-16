/**
 * useTableHighlight.ts
 * Table highlighting composable for KiChaosWiki.
 * Colors stat columns, quality badges, grade letters, and numeric values.
 *
 * Optimized: precompiled regexes + a single-pass cell traversal using a
 * prebuilt column-type map (replaces the original four separate row passes).
 */

const RE_STRENGTH = /^力量/
const RE_DEXTERITY = /^灵巧/
const RE_WILLPOWER = /^意志/
const RE_HP = /^血量(?!回复|上限)/
const RE_STAMINA = /^耐力(?!回复|上限)/
const RE_KI = /^气(?!回复|上限|功伤害)/
const RE_GRADE = /^[SABCD]$/
const RE_NUMBER = /^\d+$/
const RE_PERCENT = /^\d+[%％]$/

type StatKind = 'str' | 'dex' | 'wil' | 'hp' | 'end' | 'ki'

function detectStatKind(text: string): StatKind | null {
  if (RE_STRENGTH.test(text)) return 'str'
  if (RE_DEXTERITY.test(text)) return 'dex'
  if (RE_WILLPOWER.test(text)) return 'wil'
  if (RE_HP.test(text)) return 'hp'
  if (RE_STAMINA.test(text)) return 'end'
  if (RE_KI.test(text) || text === '气') return 'ki'
  return null
}

export function useTableHighlight() {
  function highlightTable(table: HTMLTableElement): void {
    const headers = table.querySelectorAll<HTMLTableHeaderCellElement>('thead th')
    if (headers.length === 0) return
    const rows = table.querySelectorAll<HTMLTableRowElement>('tbody tr')
    if (rows.length === 0) return

    const statKinds = new Map<number, StatKind>()
    let qualityCol = -1

    headers.forEach((th, colIdx) => {
      const text = th.textContent?.trim() ?? ''
      const kind = detectStatKind(text)
      if (kind) {
        statKinds.set(colIdx, kind)
      } else if (text === '品质') {
        qualityCol = colIdx
      }
    })

    rows.forEach((row) => {
      const cells = row.querySelectorAll<HTMLTableCellElement>('td')
      cells.forEach((cell, colIdx) => {
        const kind = statKinds.get(colIdx)
        if (kind) {
          cell.dataset.hl = kind
          return
        }

        const t = cell.textContent?.trim() ?? ''

        if (colIdx === qualityCol) {
          if (t === '史诗') { cell.dataset.hl = 'epic'; return }
          if (t === '传说') { cell.dataset.hl = 'legendary'; return }
          if (t === '神话') { cell.dataset.hl = 'mythic'; return }
        }

        if (RE_GRADE.test(t)) {
          cell.dataset.grade = t.toLowerCase()
          return
        }

        if (RE_NUMBER.test(t)) {
          cell.dataset.hl = 'num'
        } else if (RE_PERCENT.test(t)) {
          cell.dataset.hl = 'pct'
        }
      })
    })
  }

  function init(): void {
    requestAnimationFrame(() => {
      document
        .querySelectorAll<HTMLTableElement>('.vp-doc table')
        .forEach(highlightTable)
    })
  }

  return { init }
}
