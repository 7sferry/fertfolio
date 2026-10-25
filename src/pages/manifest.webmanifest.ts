/************************
 * Made by [MR Ferry™]  *
 * on October 2026      *
 ************************/

import type { APIRoute } from "astro";
import { data } from "../Data";

export const GET: APIRoute = () =>
  Response.json({
    name: data.siteConfig.realName,
    short_name: data.siteConfig.realName,
    description: data.siteConfig.description,
    lang: data.lang,
    start_url: "/",
    background_color: "#0093b1",
    theme_color: "#34495E",
    display: "standalone",
    icons: [
      { purpose: "any maskable", src: "/favicons/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { purpose: "any maskable", src: "/favicons/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  });
