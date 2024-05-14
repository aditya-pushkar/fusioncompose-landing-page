import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://fusioncompose.com",
  integrations: [tailwind(), robotsTxt()]
});