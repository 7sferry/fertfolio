# fertfolio

Source of [ferry.netlify.app](https://ferry.netlify.app), the online CV of Ferry Suhandri, a Java backend engineer.

## Stack

- [Gatsby 5](https://www.gatsbyjs.com/) with React 18 and TypeScript
- `gatsby-plugin-image` / `sharp` for images, `gatsby-plugin-sitemap`, `gatsby-plugin-manifest`, `gatsby-plugin-purgecss`
- Deployed on Netlify (`gatsby-adapter-netlify`)

## Structure

```
src/
  Data.ts              all page content: header, about, impacts, experiences, skills, contacts, footer
  pages/index.tsx      section order
  pages/index.css      styles
  component/           one component per section, each renders its slice of Data.ts
  component/Seo.tsx    meta tags, Open Graph and schema.org Person data
gatsby-config.ts       site metadata and plugins, also read from Data.ts
static/                files served as-is (social card images, site verification)
```

Content changes only touch `src/Data.ts`. Components never hard-code CV text.

## Development

```shell
bun install          # or npm install
bun run develop      # http://localhost:8001
bun run typecheck
bun run build
```

## Deployment

Netlify builds `main` with `gatsby build`. `netlify.toml` redirects `/resume` to `/`.

## License

See [LICENSE](LICENSE).
