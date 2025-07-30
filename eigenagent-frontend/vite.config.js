import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "./",  // Important for relative asset paths in production
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  server: {
    historyApiFallback: true  // Optional: ensures routing works during dev
  }
})