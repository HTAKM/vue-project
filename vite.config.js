import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import dsv from '@rollup/plugin-dsv'

// https://vite.dev/config/
export default defineConfig({
  base: '/vue-project',
  build: { 
    minify: false,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        dir: 'dist/',
        entryFileNames: 'assets/js/[name]-entry.js',
        assetFileNames: ({names = []}) => {
          const [name = ''] = names;
          if (/\.(gif|jpe?g|png|svg)$/.test(name)) {
            return 'assets/images/[name][extname]';
          }
          if (/\.css$/.test(name)) {
            return 'assets/css/[name]-asset[extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
        chunkFileNames: 'assets/js/[name]-chunk.js',
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            // Group node_modules into a 'vendor' chunk
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
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
