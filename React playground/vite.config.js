import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()]
  base: 'react-playground',
  server: {
    port: 3000,
    open: true,
    strictPort: true,
    cors: true,
    hmr: {
      overlay: false
    }
  },
})
