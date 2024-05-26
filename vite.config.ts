import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

const PROD_URL = 'https://tuychin.github.io/currency-rate/';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? PROD_URL : '/',
  plugins: [react(), tsconfigPaths()],
}));
