import { createApp } from './main';

export async function render(url, manifest) {
  const { app, router } = createApp();

  router.push(url);
  await router.isReady();

  const html = await renderToString(app);

  return { html };
}