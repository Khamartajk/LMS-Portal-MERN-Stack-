import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()], // Removed tailwindcss() (use PostCSS instead)
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false, // For HTTP backend
        rewrite: (path) => path.replace(/^\/api/, ''), // Adjust based on backend routes
      },
    },
  },
});