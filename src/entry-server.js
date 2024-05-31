// entry-server.js
import { renderToString } from 'vue/server-renderer';
import { createApp } from './main';
import { createHead } from '@unhead/vue'

export const render = async (url) => {
  const { app, head } = createApp();
  
  const ctx = {}
  const html = renderToString(app, ctx)
  // Generate head tags HTML
  const headTags = head?.tags?.headTags?.map(tag => tag.toString()).join('\n') ?? '';
  return { html, headTags };
};
