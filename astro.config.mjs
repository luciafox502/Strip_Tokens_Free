import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://luciafox502.github.io',
  base: '/Strip_Tokens_Free',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
