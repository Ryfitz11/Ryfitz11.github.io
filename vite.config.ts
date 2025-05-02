import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'docs', // This is the default, you can keep it or change it
  },
  base: './', // Important for correct asset paths on GitHub Pages
});