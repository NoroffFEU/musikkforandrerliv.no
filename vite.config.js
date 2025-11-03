import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname  = path.dirname(__filename)
const r = (p) => path.resolve(__dirname, p)

export default defineConfig(({ command }) => {
  const isBuild = command === 'build'

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': r('./src'),

        // Build-only shims to avoid Rollup bundling Node-only modules
        ...(isBuild
          ? {
              'clean-stack': r('./src/shims/clean-stack-browser.js'),
              '#home-directory': r('./src/shims/empty.js'),
              'node:url': r('./src/shims/empty.js'),
              'node:path': r('./src/shims/empty.js'),
              'node:fs': r('./src/shims/empty.js'),
              'node:os': r('./src/shims/empty.js'),
              'node:crypto': r('./src/shims/empty.js'),
            }
          : {}
        ),
      },
    },
  }
})