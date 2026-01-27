import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  // Build statique optimisé pour GitHub Pages
  base: "/",
  build: {
    outDir: "dist",
    minify: "esbuild",
    sourcemap: false,
    // Optimisations performance
    rollupOptions: {
      output: {
        manualChunks: undefined, // Single bundle for small sites
      },
    },
  },
  server: {
    host: "::",
    port: 3000,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
