import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const owner = process.env.GITHUB_REPOSITORY_OWNER;
const isGithubPages = process.env.GITHUB_ACTIONS === 'true' && repository && owner;

export default defineConfig({
  site: isGithubPages ? `https://${owner}.github.io` : 'http://localhost:4321',
  base: isGithubPages ? `/${repository}` : '/',
  integrations: [react(), tailwind({ applyBaseStyles: false })],
  build: {
    format: 'directory'
  }
});
