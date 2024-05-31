// entry-server.js
import { renderToString } from 'vue/server-renderer';
import { createApp } from './main';

export const render = async (url) => {
  const { app, head } = createApp();
  
  const ctx = {}
  const html = renderToString(app, ctx)
  // Generate head tags HTML
  const headTags = head.headTags;
  return { html, headTags };
};
