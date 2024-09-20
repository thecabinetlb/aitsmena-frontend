import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import generateSitemap from 'vite-ssg-sitemap';

export default defineConfig({
  plugins: [
    vue(),
    Pages({
      // Options for vite-plugin-pages
      extensions: ['vue'],
      dirs: 'src/pages', // Ensure your pages are in the correct directory
    }),
  ],
  ssgOptions: {
    onFinished() { generateSitemap() },
    script: 'async',
    formatting: 'minify',
  },  
  server: {
    historyApiFallback: true,  // This ensures the server falls back to index.html for dynamic routes
  },
});
