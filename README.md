# fertfolio

Source of [ferry.netlify.app](https://ferry.netlify.app), the online CV of Ferry Suhandri, a Java backend engineer.

## Stack

- [Astro 7](https://astro.build/), static output, TypeScript, no client framework (two small inline scripts for the theme toggle and burger menu)
- `astro:assets` (`sharp`) for images, `@astrojs/sitemap`, `astro-purgecss`, `astro-icon` (Font Awesome via `@iconify-json/fa-solid` / `fa-brands`)
- Deployed on Netlify as a static site (`dist/`)

## Structure

```
src/
  Data.ts                 all page content: header, about, impacts, experiences, skills, contacts, footer
  pages/index.astro       section order
  pages/404.astro         renders the home page
  pages/manifest.webmanifest.ts, pages/robots.txt.ts   generated from Data.ts
  layouts/Base.astro      <html>, <head>, theme init script, icons, font preload
  styles/index.css        styles
  component/              one component per section, each renders its slice of Data.ts
  component/Seo.astro     meta tags, Open Graph and schema.org Person data
  icons/                  local SVG icons for astro-icon (logo)
  images/                 headshot and app icon sources
  theme.ts                localStorage key for the theme
astro.config.ts           site URL and integrations, also read from Data.ts
scripts/generate-icons.ts regenerates favicons in public/ from src/images/icon.png
public/                   files served as-is (favicons, social card images, site verification, sw.js)
```

Content changes only touch `src/Data.ts`. Components never hard-code CV text. Contact icons are Iconify names (`fa-brands:github`). Add new ones to the `include` list in `astro.config.ts`.

## Development

```shell
bun install          # or npm install
bun run develop      # http://localhost:8001
bun run typecheck    # astro check
bun run build        # dist/
bun run serve        # preview dist/ on http://localhost:9000
bun run icons        # after changing src/images/icon.png
```

PurgeCSS runs on `build` only, so check for missing styles with `build` + `serve`, not `develop`. Classes that only JS adds (like `show` on the mobile menu) must be safelisted in `astro.config.ts`.

## Deployment

Netlify builds `main` with `bun run build` and publishes `dist/` (`netlify.toml`). `netlify.toml` also redirects `/resume` to `/`, caches `/_astro/*` as immutable, and serves `sw.js` uncached.

`public/sw.js` unregisters the service worker left by the old Gatsby offline plugin and clears its caches. Remove it once old visitors have had time to pick it up.

## License

See [LICENSE](LICENSE).
