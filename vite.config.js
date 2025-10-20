import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname  = path.dirname(__filename)
const r = (p) => path.resolve(__dirname, p)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': r('./src'),

      // Decap/Node-only fixes // 
      'clean-stack': r('./src/shims/clean-stack-browser.js'),
      '#home-directory': r('./src/shims/empty.js'),
      'node:url': r('./src/shims/empty.js'),
      'node:path': r('./src/shims/empty.js'),
      'node:fs': r('./src/shims/empty.js'),
      'node:os': r('./src/shims/empty.js'),
      'node:crypto': r('./src/shims/empty.js'),
    },
  },
  optimizeDeps: {
    exclude: ['decap-cms-app'],
  },
})