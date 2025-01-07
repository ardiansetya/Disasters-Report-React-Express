import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
 
  server: {
    proxy: {
      '/api': {
        target: 'https://api-disasters-reports.vercel.app/api/',
        changeOrigin: true,
      },
    },
  }
});
