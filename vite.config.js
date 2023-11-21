import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Configuración del servidor de desarrollo
    hmr: {
      // Habilitar el Hot Module Replacement (HMR)
      overlay: true, // Muestra mensajes de error en la pantalla
    },
  },
});
