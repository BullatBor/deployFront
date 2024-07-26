import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import vitePluginSvgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    react(),
    vitePluginSvgr({
      include: './src/**/*.svg',
      svgrOptions: {
        svgProps: { className: 'svg-icon' },
        dimensions: true,
        exportType: 'default',
        plugins: ['@svgr/plugin-jsx'],
      },
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "src/shared/styles/index.scss";',
      },
    },
  },
});
