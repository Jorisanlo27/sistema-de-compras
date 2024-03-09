import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import react from "@astrojs/react";

const DEV_PORT = 2121;

export default defineConfig({
  site: process.env.CI ? 'https://themesberg.github.io' : `http://localhost:${DEV_PORT}`,
  base: process.env.CI ? '/flowbite-astro-admin-dashboard' : undefined,
  output: 'hybrid',

  server: {
    port: DEV_PORT
  },
  integrations: [
  //
  sitemap(), tailwind(), react()]
});