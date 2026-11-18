import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://example.com',
  integrations: [
    sitemap({
      chunks: {
        articles(item) {
          if (new URL(item.url).pathname === '/article/') {
            return { ...item, url: 'https://example.com/articles/current/' };
          }
        },
      },
    }),
  ],
});
