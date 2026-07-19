import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://gaurangkumar-patel.github.io",
  base: "/portfolio",
  integrations: [react()],
});
