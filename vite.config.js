import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: { "my-optimized-dep": path.resolve(__dirname, "optimized-dep.js") },
  },
  optimizeDeps: {
    // Toggle this to make it work, or revert to Vite 2.5.x
    include: ["my-optimized-dep"],
  },
});
