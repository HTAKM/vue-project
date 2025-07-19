import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import dsv from '@rollup/plugin-dsv'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  base: '/vue-project',
  build: { // Added to stop compacting
    minify: false,
    target: 'modules',
    rollupOptions: {
      output: {
        dir: 'dist/',
        entryFileNames: 'assets/js/[name]-entry.js',
        assetFileNames: 'assets/css/[name]-asset.css',
        chunkFileNames: 'assets/js/[name]-chunk.js',
        manualChunks: undefined,
      },
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    dsv(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
