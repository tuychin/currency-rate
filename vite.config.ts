import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://github.com/tuychin/currency-rate',
  plugins: [react(), tsconfigPaths()],
});
