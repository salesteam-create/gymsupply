# Images

Every image on the site is a slot. Set `src` and the photo appears; leave it
unset and a charcoal panel with the brand mark renders instead, so the layout
is complete and deliberate before the photography arrives. The box reserves
its space either way, so adding a photo shifts nothing on the page.

## Where each one lives

| Slot | Set it in | Suggested crop |
|---|---|---|
| Hero | `components/sections/hero.tsx` | wide landscape, 2400px+ |
| Solution cards (4) | `photo` on each entry in `lib/content.ts` | portrait 3:4, 1200px+ |
| Process column | `components/sections/process.tsx` | tall portrait |
| Team | `components/sections/about-teaser.tsx` | landscape |
| Service steps (4) | `app/tjenester/page.tsx` | landscape 16:10 |
| Projects | `projects` array in `app/prosjekter/page.tsx` | landscape 16:10 |

Always set `alt` alongside `src`, describing the room rather than repeating the
heading.

## Please use real photographs of your own installations

The solution cards and the projects page describe rooms Gym Supply delivered.
Stock photography there would present someone else's gym as your work.
