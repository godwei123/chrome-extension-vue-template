import { defineManifest } from '@crxjs/vite-plugin'
import packageData from '../package.json'

const isDev = process.env.NODE_ENV == 'development'

export default defineManifest({
  name: `${packageData.displayName || packageData.name}${isDev ? ` ➡️ Dev` : ''}`,
  description: packageData.description,
  version: packageData.version,
  manifest_version: 3,
  icons: {
    16: 'img/google-extension-16.png',
    32: 'img/google-extension-34.png',
    48: 'img/google-extension-48.png',
    128: 'img/google-extension-128.png',
  },
  action: {
    default_popup: 'pages/popup.html',
    default_icon: 'img/google-extension-48.png',
  },
  options_page: 'pages/options.html',
  devtools_page: 'pages/devtools.html',
  background: {
    service_worker: 'src/background/index.ts',
    type: 'module',
  },
  content_scripts: [
    {
      matches: ['http://*/*', 'https://*/*'],
      include_globs: ['<all_urls>'],
      js: ['src/contentScript/index.ts'],
    },
  ],
  side_panel: {
    default_path: 'pages/sidepanel.html',
  },
  web_accessible_resources: [
    {
      resources: ['img/google-extension-16.png', 'img/google-extension-34.png', 'img/google-extension-48.png', 'img/google-extension-128.png'],
      matches: [],
    },
  ],
  permissions: ['sidePanel', 'storage'],
  chrome_url_overrides: {
    newtab: 'pages/newtab.html',
  },
})
