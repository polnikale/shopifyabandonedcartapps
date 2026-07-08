// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  site: 'https://www.shopifyabandonedcartapps.com',
  integrations: [tailwind()],
  trailingSlash: 'never',
});
