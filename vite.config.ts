import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "./", // garante que funciona no Vercel
  root: path.resolve(__dirname, "client"), // 👈 diz onde está o index.html
  build: {
    outDir: path.resolve(__dirname, "dist"), // saída na raiz
    emptyOutDir: true,
  },
});
