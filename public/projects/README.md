# Project photos

Drop delivery photos here, then point at them from
`components/sections/projects.tsx` by setting `photo` and `photoAlt` on the
matching entry:

```ts
{
  title: "Bedriftsgym",
  client: "Nordvik AS, Stavanger",
  Illustration: CorporateGymIllustration,
  photo: "/projects/bedriftsgym.jpg",
  photoAlt: "Treningsrom med tredemøller og frivekter hos Nordvik AS",
}
```

The card crops to fill, so use landscape images about 1200px wide or more.
JPEG or WebP both work. An entry without `photo` keeps its illustration, so
you can swap them in one at a time.

Use photos of rooms you actually delivered. The section above them says these
are your installations, so stock photography here would misrepresent the work.
