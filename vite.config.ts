import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const vite_env = loadEnv(mode, process.cwd());
  return {
    base: vite_env.VITE_APP_LINK_TO_PATH || './',
    plugins: [react()],
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler' // Use modern Sass API instead of legacy
        }
      }
    },
    build: {
      outDir: path.resolve(__dirname, `dist/${vite_env.VITE_APP_BUILD_DIR}`),
    },
  };
});