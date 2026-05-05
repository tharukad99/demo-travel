import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/demo-travel/', // IMPORTANT: If your GitHub repo name is NOT demo-travel, change this!
})
