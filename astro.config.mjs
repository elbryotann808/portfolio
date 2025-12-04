// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://elbryotann808.github.io',
  base: '/portfolio', 
  integrations: [icon()],
  devToolbar: {
    enabled: false
  }
});