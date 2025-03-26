import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: './', 
  build: {
    outDir: 'dist', // Diretório de saída
    emptyOutDir: true, // Garante que o `dist` seja limpo antes do build
    copyPublicDir: true, // Copia a pasta `public`
    rollupOptions: {
      input: {
        main: 'index.html', // Arquivo principal
      },
    },
  },
  plugins: [
    tailwindcss(),
    react()
  ],
});
 
