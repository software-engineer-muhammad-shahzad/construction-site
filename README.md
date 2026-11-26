# WCSS Construction website

Next.js (App Router) + Tailwind CSS 4, organised by **feature**.

```bash
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Architecture

```
app/                      Routing only: layout.tsx, page.tsx, globals.css (base styles)
features/<name>/          One folder per feature (self-contained)
  components/             React components for the feature
  data/                   Content and constants (text, links, images)
  styles/                 The feature's own CSS
  index.ts                Public API — the only thing other code may import
shared/
  components/             Reusable UI used by several features (Reveal, icons)
  config/site.ts          Business details: name, phone, email, address, social links
public/                   Static assets
```

### Features

| Feature    | What it owns                                                                 |
| ---------- | ---------------------------------------------------------------------------- |
| `navbar`   | Header, top bar, desktop menu + dropdowns, mobile drawer, scroll progress    |
| `search`   | In-page search box with text highlighting                                    |
| `hero`     | Home banner slider (Swiper), static fallback, service-area strip             |
| `audience` | Residential / Commercial tabs                                                |
| `services` | "Our Services" section, service cards, photo gallery modal                   |
| `about`    | Contracting message, specialties, team, promise sections, stats strip        |
| `footer`   | Footer, back-to-top button, mobile call / estimate bar                       |
| `remodeling` / `construction` | Overview page + one page per remodeling / construction type |
| `faq`      | /faq accordion                                                               |
| `gallery`  | /gallery filterable photo grid with lightbox                                 |
| `contact`  | /contact details and quote request form                                      |
| `service-areas` | /service-areas page                                                     |

Service, remodeling and construction lists live in `shared/config/*-catalog.ts` and feed both the navbar and the pages.

### Rules

- Import another feature only through its `index.ts` (e.g. `@/features/search`), never its internal files.
- Features must not import from each other's `data/` or `styles/`.
- Anything used by two or more features goes in `shared/`.
- Edit business details (phone, email, address, areas) in `shared/config/site.ts`; edit page copy in each feature's `data/`.
- Pages in `app/` only compose feature components.

### Adding a feature

1. Create `features/<name>/{components,data,styles}` and an `index.ts` exporting its public components.
2. Import the CSS from the feature's main component (`import "../styles/<name>.css"`).
3. Use it from a page in `app/`.

### Notes

- Cache Components is enabled in `next.config.ts`; the home banner is wrapped in `<Suspense>` with a static fallback because Swiper reads the current time.
- Placeholder content: photos (picsum.photos), stats figures and some copy still need real values.
