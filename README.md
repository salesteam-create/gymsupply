# Gym Supply

Marketing site for Gym Supply AS, Stavanger. Next.js App Router, TypeScript,
Tailwind v4, exported as static files and hosted on GitHub Pages.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export into out/
npm run lint
npm run typecheck
```

## Pages

| Route | File |
|---|---|
| `/` | `app/page.tsx` |
| `/tjenester` | `app/tjenester/page.tsx` |
| `/prosjekter` | `app/prosjekter/page.tsx` |
| `/om-oss` | `app/om-oss/page.tsx` |
| `/kontakt` | `app/kontakt/page.tsx` |

Header and footer are shared from `app/layout.tsx`. Navigation lives in
`lib/nav.ts`; the Løsninger and Tjenester dropdowns deep-link to anchors that
exist today, so when the segment landing pages are built only those hrefs
change.

## Brand

Colours in `app/globals.css` were sampled from the supplied logo, not matched
by eye. Lime is the weighted mean of 1054 saturated pixels.

| Token | Value |
|---|---|
| `lime` | `#D4DB4A` |
| `charcoal` | `#20211F` |
| `paper` | `#F5F3EE` |
| `stone` | `#656661` |
| `grey` (wordmark) | `#5C5C5E` |

Measured contrast:

```
lime on charcoal   10.80:1  ok
lime on warm white  1.35:1  FAILS
charcoal on paper  14.58:1  ok
stone on paper      5.22:1  ok
```

**Lime can never carry text or a hairline on a light surface.** On the warm
white sections it only works as a filled block with charcoal text on top,
which is what `Button variant="primary"` does. Everything else on light
surfaces uses charcoal or stone.

Type is one ramp: `text-display`, `text-h2`, `text-h3`, `text-lead`,
`text-eyebrow`. Rhythm is `py-section` and `px-gutter`. Use those rather than
per-section `clamp()` values.

## Images

Every image is a slot. `components/ui/media.tsx` renders the photo when `src`
is set and a charcoal panel with the brand mark when it is not, reserving the
same space either way so adding a photo shifts nothing. `docs/images.md` lists
each slot and where to set it.

## Motion

`components/motion/reveal.tsx` is a small IntersectionObserver wrapper.
Nothing is hidden in the markup, elements already on screen are skipped so the
hero never flashes, and under `prefers-reduced-motion` nothing is touched.
With `stagger`, `Reveal` must be the element holding the items — use `as="ol"`
rather than nesting a list inside it.

## The enquiry form

Posts JSON to `NEXT_PUBLIC_FORM_ENDPOINT`. Until that is set it does not claim
to have sent anything: it says the form is not connected.

The planner on the home page passes its selection to the form through the URL
(`/kontakt?segment=hjem&storrelse=l`), since the two are now separate pages.
Fields adapt: a private buyer never sees the organisation field.

## Verified business facts

Scraped from gymsupply.no on 23 October 2026 and from the public company
register. `lib/site.ts`, `lib/content.ts` and `lib/testimonials.ts` hold only
facts from those sources.

| Fact | Source |
|---|---|
| Established 2012, Stavanger | gymsupply.no homepage |
| Phone 911 04 030, post@gymsupply.no | gymsupply.no/contact |
| Services: rådgivning, utstyr, installasjon, serviceavtale | gymsupply.no/services |
| "lokal tilstedeværelse i Stavanger og nærområdene" | gymsupply.no homepage |
| Three customer testimonials | gymsupply.no homepage |
| Forusparken 32, org.nr. 912 979 113 | company register |

Two things the site does **not** publish, so nothing here claims them:

- **No product catalogue, prices or stock.** The equipment section explains
  what we help select and routes to advice, never to a basket.
- **No manufacturer or supplier relationships.** There is no brand strip;
  `components/sections/selection-approach.tsx` explains how equipment is
  chosen instead. Replace it with a brand strip only once the relationships
  are confirmed in writing.

Coverage is "Stavanger og nærområdene" everywhere. Do not widen it to
nationwide without confirmation.

## Still to do

- **Photographs.** Hero, four solution cards, process, team, service steps and
  projects. Use real installations; the copy says these are rooms Gym Supply
  delivered.
- **Real projects** in `lib/projects.ts`, with permission to name the
  customer, photographs and the detail that makes one useful to a reader with
  a similar space. While it is empty the spotlight and the projects page offer
  references on request instead of showing placeholder cards.
- **A form endpoint.**
- **Confirm the founding year**: the company states 2012, the register records
  registration in 2013.
- Segment landing pages for Bedriftsgym, Treningssentre, Offentlig sektor and
  Hjemmegym, replacing the anchor links in `lib/nav.ts`.
