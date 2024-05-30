import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const app = express();

  // Create Vite server in middleware mode and configure as 'custom'
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  // Use Vite's middlewares
  app.use(vite.middlewares);

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      // Read index.html
      let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');


      // Apply Vite HTML transforms and load server entry
      template = await vite.transformIndexHtml(url, template);
      const { render } = await vite.ssrLoadModule('/src/entry-server.js');

      // Render app HTML and inject into template
      const appHtml = await render(url);
      const html = template.replace(``, appHtml);

      // Send rendered HTML after processing
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });

  app.listen(5173);
}

createServer();
