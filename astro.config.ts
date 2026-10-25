/************************
 * Made by [MR Ferry™]  *
 * on October 2026      *
 ************************/

import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import purgecss from "astro-purgecss";
import icon from "astro-icon";
import { data } from "./src/Data";

export default defineConfig({
  site: data.siteConfig.metaUrl,
  trailingSlash: "never",
  build: { format: "file" },
  integrations: [
    icon({
      include: {
        "fa-solid": ["blog", "envelope", "moon", "sun"],
        "fa-brands": ["github", "linkedin", "stack-overflow", "whatsapp"],
      },
    }),
    sitemap({ filter: (page) => !page.endsWith("/404"), changefreq: "daily", priority: 0.7 }),
    purgecss({
      safelist: { standard: ["show"], greedy: [/data-theme/] },
    }),
  ],
});
