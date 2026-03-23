import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  build: {
    minify: true,
    cssMinify: true,
    sourcemap: true
  },

  resolve: {
    dedupe: [
      "@mui/material",
      "@mui/system",
      "@emotion/react",
      "@emotion/styled",
    ],
  },
});