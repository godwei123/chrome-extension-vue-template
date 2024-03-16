import { createRequire } from 'module'
import * as fs from 'fs'
const require = createRequire(import.meta.url)
const manifest = require('../build/manifest.json')
const ChromeExtension = require('crx')

const crx = new ChromeExtension({
  privateKey: fs.readFileSync('script/key.pem'),
})
crx
  .load('./build')
  .then((crx) => crx.pack())
  .then((buffer) => {
    fs.writeFileSync(`dist/${manifest.name.replaceAll(' ', '-')}-${manifest.version}.crx`, buffer)
  })
  .catch((err) => {
    console.error(err)
  })
