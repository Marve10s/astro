# Astro sitemap chunk URL reproduction

A sitemap chunk rewrites `/article/` to `/articles/current/`. The chunk contains the rewritten URL, but the default sitemap still contains the original URL.

Use Node.js 22.23.4 or later and pnpm 11.

```sh
pnpm install --frozen-lockfile
pnpm run build
pnpm run verify
```

The last command prints the URLs from `dist/sitemap-articles-0.xml` and `dist/sitemap-pages-0.xml`. It expects the articles sitemap to contain the rewritten URL and the default sitemap to contain only the homepage.
