import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import vitePluginSvgr from 'vite-plugin-svgr';

export default defineConfig({
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['jest', 'testing-library'],
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
