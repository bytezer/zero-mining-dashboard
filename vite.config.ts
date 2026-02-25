import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@zero/hooks": path.resolve(__dirname, "src/hooks"),
      "@zero/assets": path.resolve(__dirname, "src/assets"),
      "@zero/components": path.resolve(__dirname, "src/components"),
      "@zero/types": path.resolve(__dirname, "src/types"),
    },
  },
});
