import { readFileSync } from 'fs'
let c = readFileSync('C:/Work/Github/KiChaosWiki/.vitepress/dist/Wiki/装备/VIP礼包.html', 'utf8')
let readable = c.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
let re = /<span class="(kn-[a-z]+)">([^<]+)<\/span>/g
let m, matches=[]
while ((m = re.exec(readable)) !== null) matches.push(m)
console.log('Highlights:', matches.length)
for (const match of matches) console.log('  [' + match[1] + '] ' + match[2])
console.log()
// Also check if 1.5倍 and 2.5倍 appear anywhere
let cReadable = c.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
if (cReadable.includes('1.5倍')) console.log('FOUND 1.5倍 in output')
if (cReadable.includes('2.5倍')) console.log('FOUND 2.5倍 in output')
