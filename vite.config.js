import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  // server: {
  //   fs: {
  //     allow: ["public"]
  //   }
  // },
  plugins: [react()],
});
