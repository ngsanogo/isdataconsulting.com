import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) {
            return
          }
          if (id.includes("react-router")) {
            return "router-vendor"
          }
          if (id.includes("lucide-react")) {
            return "icons-vendor"
          }
          return "vendor"
        },
      },
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
});
