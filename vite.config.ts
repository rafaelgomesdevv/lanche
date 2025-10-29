import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "./", // necessário para servir assets corretamente
  root: path.resolve(__dirname, "client"), // onde está o index.html
  build: {
    outDir: path.resolve(__dirname, "dist"), // pasta que o Vercel publica
    emptyOutDir: true,
  },
});
