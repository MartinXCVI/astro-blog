import { defineConfig } from 'astro/config';
import icon from "astro-icon"

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-blog-rd.vercel.app/',
  integrations: [icon({
    include: {
      ic: ['*'],
      tabler: ['*'],
      pajamas: ['*']
    }
  }), sitemap()],
});