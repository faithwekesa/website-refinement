import { readdir, stat, rename } from 'node:fs/promises'
import { join, extname } from 'node:path'

let sharp
try {
  sharp = (await import('sharp')).default
} catch {
  console.log('The sharp package was not found. Run: npm install --save-dev sharp')
  process.exit(1)
}

const root = new URL('../public/images/', import.meta.url).pathname
const MAX_WIDTH = 1400
let saved = 0

async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      await walk(full)
      continue
    }
    if (!/^\.(jpe?g)$/i.test(extname(entry.name))) continue

    const before = (await stat(full)).size
    const tmp = `${full}.tmp`
    await sharp(full)
      .rotate()
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .jpeg({ quality: 78, mozjpeg: true })
      .toFile(tmp)
    const after = (await stat(tmp)).size

    if (after < before) {
      await rename(tmp, full)
      saved += before - after
      console.log(`${full.replace(root, '')}: ${Math.round(before / 1024)} KB -> ${Math.round(after / 1024)} KB`)
    } else {
      await (await import('node:fs/promises')).unlink(tmp)
      console.log(`${full.replace(root, '')}: already small, left as is`)
    }
  }
}

await walk(root)
console.log(`Done. Saved ${(saved / 1024 / 1024).toFixed(1)} MB in total.`)
