import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://gaurangkumar-patel.github.io",
  base: "/portfolio",
  trailingSlash: "always",
  integrations: [react(), sitemap()],
});
