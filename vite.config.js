import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/web-clothe-shop/",
  resolve: {
    dedupe: ["react", "react-dom"],
  },
});
