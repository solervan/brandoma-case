import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { tanstackRouter } from '@tanstack/router-plugin/vite'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
      generatedRouteTree: 'src/shared/lib/router/routeTree.gen.ts',
      routesDirectory: 'src/app/routes'
    }),
    react(),
  ],
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, 'src/shared/styles'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 3000, 
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
        '/uploads': { 
      target: 'http://localhost:5000',
      changeOrigin: true,
      secure: false,
    }
    }
  },
});