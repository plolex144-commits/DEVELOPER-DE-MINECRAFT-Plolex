import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Si en el futuro usas un dominio personalizado, cambia base a '/'
export default defineConfig({
  plugins: [react()],
  base: '/DEVELOPER-DE-MINECRAFT-Plolex/',
})
