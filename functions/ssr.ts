import { Handler } from "@netlify/functions";
import { renderPage } from "vite-plugin-ssr";

export const handler: Handler = async event => {
  const pageContext = await renderPage({
    url: event.path,        // event.rawUrl might include query params, using event.path for URL path
    urlOriginal: event.rawUrl // full URL with query params if necessary
  });

  if (!pageContext.httpResponse) return { statusCode: 200 };

  console.log(pageContext.httpResponse.statusCode, event.rawUrl);

  return {
    statusCode: pageContext.httpResponse.statusCode,
    headers: { "Content-Type": pageContext.httpResponse.contentType },
    body: pageContext.httpResponse.body
  };
};
