import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const chunkUrls = (name) =>
  [...readFileSync(`dist/sitemap-${name}-0.xml`, 'utf8').matchAll(/<loc>(.*?)<\/loc>/g)]
    .map((match) => match[1]);

const articles = chunkUrls('articles');
const pages = chunkUrls('pages');
console.log({ articles, pages });
assert.deepEqual(articles, ['https://example.com/articles/current/']);
assert.deepEqual(pages, ['https://example.com/']);
