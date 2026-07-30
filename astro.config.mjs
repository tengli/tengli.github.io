import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tengliworks.com',
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
