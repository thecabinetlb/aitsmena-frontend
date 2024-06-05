import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VitePluginSSR from "vite-plugin-ssr/plugin";

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 3000
  },
  plugins: [
    vue(),
    VitePluginSSR({
      prerender: true,
      includeAssetsImportedByServer: true
    })
  ]
});
