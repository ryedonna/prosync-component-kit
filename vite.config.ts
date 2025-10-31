import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    copyPublicDir: false,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'ProsyncComponentsKit',
      fileName: (format) => {
        if (format === 'es') return 'prosync-components.es.js'
        if (format === 'cjs') return 'prosync-components.cjs.js'
        return 'prosync-components.umd.js'
      },
    },
    rollupOptions: {
      external: ['vue'],
      output: [
        {
          format: 'es',
          entryFileNames: 'prosync-components.es.js',
          globals: {
            vue: 'Vue',
          },
        },
        {
          format: 'cjs',
          entryFileNames: 'prosync-components.cjs.js',
          globals: {
            vue: 'Vue',
          },
        },
        {
          format: 'umd',
          name: 'ProsyncComponentsKit',
          entryFileNames: 'prosync-components.umd.js',
          globals: {
            vue: 'Vue',
          },
        },
      ],
    },
  },
})