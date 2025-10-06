import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ultika.mk',
  integrations: [
    tailwind({
      // Configure the Tailwind integration
      config: { path: './tailwind.config.js' },
    }),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          mk: 'mk',
        },
      },
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'mk'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    optimizeDeps: {
      exclude: [],
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'landing': ['./src/pages/index.astro'],
          },
        },
      },
    },
    ssr: {
      noExternal: ['@fontsource/*'],
    },
  },
  devToolbar: {
    enabled: true
  }
});