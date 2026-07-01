import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Project pages are served from https://<user>.github.io/RGAA-react-app/
// so the production base must match the repository name. Dev keeps '/'.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/RGAA-react-app/' : '/',
  plugins: [react()],
  server: {
    port: 5173,
    open: false,
  },
}));
