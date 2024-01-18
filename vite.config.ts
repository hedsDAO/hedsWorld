import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: "src",
  publicDir: "../dist/assets",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/components"),
      "@components": path.resolve(__dirname, "./src/pages"),
    },
  },
  build: {
    outDir: "../dist",
    copyPublicDir: true,
  },
});