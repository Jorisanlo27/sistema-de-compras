import react from "@astrojs/react";
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
const DEV_PORT = 2121;

// https://astro.build/config
export default defineConfig({
  site: process.env.CI ? 'https://sistema-de-compras.vercel.app' : `http://localhost:${DEV_PORT}`,
  output: 'server',
  server: {
    port: DEV_PORT
  },
  integrations: [sitemap(), tailwind(), react()],
  adapter: vercel()
});