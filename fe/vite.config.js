import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.VITE_BASE_URL_API': JSON.stringify(process.env.VITE_BASE_URL_API),
  },
});
