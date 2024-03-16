import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Include the assetsInclude property
  assetsInclude: ['**/*.bmp'],

  define: {
    global: 'window',
  },
  build: {
    rollupOptions: {
      external: ['graphql'],
    },
  },
});
