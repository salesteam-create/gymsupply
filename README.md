# Gym Supply

Landing page for Gym Supply, built from the design prototype in
[this canvas](https://claude.ai/code/artifact/3250856a-edb7-4cf8-b0b3-ca8d7a83ccd1).

Norwegian (`nb`) content, dark ground with a purple accent, heavy italic Poppins
headings and the skewed buttons and tiles that carry the brand.

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
```

```bash
npm run build      # static export into out/
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```

## Deployment

The site is a static export hosted on GitHub Pages at
<https://salesteam-create.github.io/gymsupply/>.

`.github/workflows/deploy-pages.yml` lints, typechecks, builds and publishes on
every push to the default branch, and can also be run by hand from the Actions
tab.

Pages serves a project site from `/<repo>`, so the build needs that prefix.
`next.config.ts` reads it from `GITHUB_REPOSITORY` when `GITHUB_PAGES=true`,
which only the workflow sets. Local builds and `npm run dev` stay at the root.
To reproduce the deployed build:

```bash
GITHUB_PAGES=true GITHUB_REPOSITORY=salesteam-create/gymsupply npm run build
```

Because `output: "export"` is set, this project cannot use server-side
rendering, route handlers or middleware. Adding a backend for the contact form
means either moving off Pages or calling a third-party endpoint from the
browser.

## Layout

```
app/
  layout.tsx            Poppins, metadata, html lang="nb"
  page.tsx              section order for the home page
  globals.css           design tokens (@theme) + the skew/ghost idioms
components/
  layout/               site header and footer
  sections/             one file per band of the page
  ui/                   SkewCta, SkewRule, GhostWord, icons
  planner-provider.tsx  shared segment + room size state
lib/
  planner.ts            segments, room sizes, zones and the plan matrix
```

## Conventions

Colours, fonts and the container width live as Tailwind v4 tokens in
`app/globals.css`, so use `bg-ink`, `text-brand-light`, `max-w-shell` rather
than raw hex values.

Three idioms repeat across the page and have their own classes in `globals.css`:

- `.skew-cta` / `.skew-cta__label` — the slanted button. The outer element
  leans left, the label leans back so the text reads upright. Change both
  angles together.
- `.skew-tile` / `.skew-tile__label` — the same trick at a shallower angle for
  the audience tiles and planner chips.
- `.ghost` — the oversized outlined wordmark behind a section. Add
  `.ghost--on-paper` on the white sections.

Sections are server components by default. Only the three that hold state are
client components: `hero.tsx`, `planner.tsx` and `contact.tsx`.

## State

The hero audience tiles and the planner chips set the same value, so segment
and room size live in `PlannerProvider` above both. The segment drives the hero
intro line, the hero CTA label and the planner; segment plus room size resolve
to the example zones through `getPlanZones` in `lib/planner.ts`.

## Still to do

- Replace the content placeholders: `[TELEFON]`, `[E-POST]`, `[ADRESSE]`,
  `[ORG.NR]`, `[Kunde, sted]`, `[KUNDEBILDE]` and `[PROSJEKTBILDE 1-3]`.
- The contact form has no backend. `handleSubmit` in
  `components/sections/contact.tsx` only switches to the confirmation state.
- The header shows every nav link at once and is sticky, so on a narrow phone
  it wraps to three rows and takes up a lot of the screen. It needs a proper
  mobile menu.
