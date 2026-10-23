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
  ui/                   SkewCta, SkewRule, GhostWord, icons, illustrations
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

## Artwork

The project cards and the customer portrait use SVG illustrations from
`components/ui/illustrations.tsx`, drawn in the same flat geometric style as
the hero rack. They are stand-ins, and deliberately not photographs: the
projects section claims these are rooms we delivered, so a stock photo there
would misrepresent the work. The portrait is a monogram for the same reason,
rather than a stranger's face under a named testimonial.

To use a real delivery photo, put the file in `public/projects/` and swap the
`Illustration` entry in `components/sections/projects.tsx` for an `<img>`
pointing at it. Keep the 420px frame so the row stays aligned. The static
export runs without the image optimiser, so a plain `<img>` is fine.

## Responsive behaviour

The full nav shows from `lg` (1024px) up. Below that the header collapses to a
wordmark and a menu button, which keeps the sticky bar at 76px on a phone
instead of wrapping to three rows. The panel closes on link tap and on Escape.

Section padding steps down at `sm`, and the project cards shrink from 420px to
260px tall, so the page is about a third shorter on a phone.

`scroll-padding-top` in `globals.css` keeps anchor jumps clear of the sticky
header. If the header height changes, change that value too.

Checked at 320, 360, 390, 414, 768, 1024, 1280 and 1440px: no horizontal
overflow, and every tap target is at least 44px at phone and tablet widths.

## Design system

`app/globals.css` holds one type ramp (`text-display`, `text-h2`, `text-h3`,
`text-lead`, `text-eyebrow`) and one rhythm pair (`py-section`, `px-gutter`).
Use those rather than per-section `clamp()` values, so headings stay on the
same steps across the page.

Each section opens the same way: a `section-seam` rule, an eyebrow, the H2,
then a lead paragraph capped around 46-52 characters per line.

Watermarks (`.ghost`) sit at `z-index: 0` and content carries `.above-ghost`,
so a watermark can never land on top of text.

## Motion

`components/motion/reveal.tsx` wraps GSAP + ScrollTrigger. Content renders
visible and `gsap.from` only hides it once the tween is built, so the page
still reads if the script never runs. Everything is created inside a
`gsap.context` and reverted on unmount, which also covers React Strict Mode's
double mount. `gsap.matchMedia` means nothing moves and nothing is hidden
under `prefers-reduced-motion: reduce`.

## Business facts

`lib/site.ts` holds the details used in metadata and structured data. The
address and organisation number come from the public company register. The
company states it was established in 2012; the register records registration
in 2013, so confirm which to publish.

Structured data is `LocalBusiness` only. It carries no ratings, reviews or
prices, because none are verified.

## The enquiry form

The form posts JSON to `NEXT_PUBLIC_FORM_ENDPOINT`. Until that is set it does
not claim to have sent anything: it tells the visitor the form is not
connected and points them at phone and email. Set the variable to a form
service or CRM endpoint to make it live, then test a real submission.

Selections made in the planner are carried into the form, so a visitor does
not answer the same question twice.

## Still to do

- Supply the phone number and email address. `[TELEFON]` and `[E-POST]` appear
  in the contact section and the footer.
- Supply a real customer quote with permission to publish it, plus the name,
  role and organisation. The testimonial is a labelled placeholder and must not
  go live as it is.
- Supply project names and locations for `[Kunde, sted]`.
- Connect the enquiry form by setting `NEXT_PUBLIC_FORM_ENDPOINT`.
- Confirm whether the founding year to publish is 2012 or 2013.
- Swap the illustrations for real delivery photos and a real portrait once
  they are available, and confirm the testimonial is one you have permission
  to publish.
- The contact form has no backend. `handleSubmit` in
  `components/sections/contact.tsx` only switches to the confirmation state.
