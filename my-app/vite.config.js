import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/web-clothe-shop/", // ← Змінити на назву свого репозиторію
  resolve: {
    dedupe: ["react", "react-dom"],
  },
});
