import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // 👈 importante para funcionar no Vercel
  build: {
    outDir: "dist", // 👈 cria a pasta dist na raiz
    emptyOutDir: true
  }
});
