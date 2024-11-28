/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import createSvgSpritePlugin from 'vite-plugin-svg-spriter';

const SRC_PATH = path.resolve(__dirname, 'src');
const SVG_FOLDER_PATH = path.resolve(SRC_PATH, 'assets', 'icons', 'svg');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createSvgSpritePlugin({
      svgFolder: SVG_FOLDER_PATH,
      svgSpriteConfig: {
        shape: {
          transform: ['svgo'],
        },
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['src/test-setup.ts'],
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
});
