import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  base: '/nfe-osl',
  plugins: [react()],
  publicDir: path.resolve(__dirname, 'public'),
  server: {
    open: true,
    port: 3000,
  },
  build: {
    emptyOutDir: true,
    outDir: path.resolve(__dirname, 'dist'),
    sourcemap: true,
    minify: 'esbuild',
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
  },
})
