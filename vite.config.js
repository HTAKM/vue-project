import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import dsv from '@rollup/plugin-dsv'

// https://vite.dev/config/
export default defineConfig({
  base: '/vue-project',
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
