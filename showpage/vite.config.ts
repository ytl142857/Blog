import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3008",
        changeOrigin: true,
      },
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src/"),
      "@components": resolve(__dirname, "./src/components"),
      "@constants": resolve(__dirname, "./src/constants"),
      "@layouts": resolve(__dirname, "./src/layouts"),
      "@pages": resolve(__dirname, "./src/pages"),
      "@utils": resolve(__dirname, "./src/utils"),
    },
  },
});
