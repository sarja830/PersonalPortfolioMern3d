import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // No base path
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
