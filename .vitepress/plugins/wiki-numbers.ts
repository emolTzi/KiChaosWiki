/**
 * wiki-numbers.ts — VitePress markdown-it plugin
 * Color-codes numbers in wiki content using renderer override to
 * output raw HTML spans.
 */

import type MarkdownIt from 'markdown-it'

/** Apply color spans via regex replacements. */
function highlightNumbers(text: string): string {
  // ── ✗ Red: negative/decline ──
  let r = text.replace(
    /(下降|扣除|减少|降低|损失|过载|虚弱)(-?\d+(?:\.\d+)?[%]?(?:w|万)?)/g,
    '<span class="kn-neg">$1$2</span>',
  )

  // ── 🟢 Green: percentage values (must go before time patterns) ──
  r = r.replace(
    /(提高|增加|提升|增强)(\d+(?:\.\d+)?%)/g,
    '<span class="kn-pct">$1$2</span>',
  )
  r = r.replace(
    /(\d+(?:\.\d+)?%)/g,
    '<span class="kn-pct">$1</span>',
  )

  // ── 🔵 Blue: health/energy resource values (w/万 suffix) ──
  r = r.replace(
    /([+＋]?)(\d+(?:\.\d+)?w)/g,
    (_, plus, num) => plus + '<span class="kn-resource">' + num + '</span>',
  )

  // ── 🟡 Gold: time values ──
  r = r.replace(
    /(\d+)分钟/g,
    '<span class="kn-time">$1分钟</span>',
  )
  r = r.replace(
    /(\d+)s/g,
    '<span class="kn-time">$1s</span>',
  )

  // ── 🟣 Purple: multiplier (倍) — supports decimals like 1.5倍 ──
  r = r.replace(
    /(\d+(?:\.\d+)?)倍/g,
    '<span class="kn-damage">$1倍</span>',
  )

  return r
}

export default function wikiNumberPlugin(md: MarkdownIt) {
  md.renderer.rules.text = (tokens, idx) => {
    return highlightNumbers(tokens[idx].content)
  }
}
