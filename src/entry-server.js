// entry-server.js
import { renderToString } from 'vue/server-renderer';
import { createApp } from './main';

export const render = async (url) => {
  const { app } = createApp();
  const html = renderToString(app)
  // Generate head tags HTML
  // const headTags = head?.tags?.headTags?.map(tag => tag.toString()).join('\n') ?? '';
  return { html };
};