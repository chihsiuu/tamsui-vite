import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv } from "vite";
import { svgBuilder } from "./src/plugins/svgBuilder";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgBuilder("./src/assets/icons/")],
  base: process.env.NODE_ENV === "production" ? "/tamsui-vite/" : "./",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: loadEnv('', process.cwd()).VITE_APP_URL,
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, '')
  //     }
  //   }
  // }
});
