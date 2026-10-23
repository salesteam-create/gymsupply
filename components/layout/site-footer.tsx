import Link from "next/link";

import { Logo } from "@/components/ui/logo";
import { mainNav } from "@/lib/nav";
import { business, telHref } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-paper">
      <div className="mx-auto grid max-w-shell gap-12 px-gutter py-section sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="m-0 mt-5 max-w-[38ch] text-sm leading-[1.75] text-mist">
            Treningsutstyr, planlegging og montering for bedrifter, offentlig sektor,
            treningssentre og private i Stavanger-regionen.
          </p>
        </div>

        <nav aria-label="Bunnmeny">
          <h2 className="m-0 text-eyebrow font-semibold uppercase tracking-[0.18em] text-mist">
            Innhold
          </h2>
          <ul className="m-0 mt-3 flex list-none flex-col p-0">
            {mainNav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="flex min-h-11 items-center text-sm text-paper no-underline transition-colors hover:text-lime"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="m-0 text-eyebrow font-semibold uppercase tracking-[0.18em] text-mist">
            {business.name}
          </h2>
          <address className="mt-3 text-sm not-italic leading-[1.75] text-mist">
            {business.street}
            <br />
            {business.postalCode} {business.city}
          </address>
          <div className="mt-2 flex flex-col">
            {business.phone ? (
              <a
                href={telHref(business.phone)}
                className="flex min-h-11 items-center text-sm text-paper no-underline hover:text-lime"
              >
                {business.phone}
              </a>
            ) : null}
            {business.email ? (
              <a
                href={`mailto:${business.email}`}
                className="flex min-h-11 items-center text-sm text-paper no-underline hover:text-lime"
              >
                {business.email}
              </a>
            ) : null}
          </div>
          <p className="m-0 mt-2 text-sm text-mist">
            Org.nr. 912 979 113
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-shell px-gutter">
        <p className="m-0 border-t border-charcoal-line py-6 text-xs text-mist">
          © {new Date().getFullYear()} {business.name}
        </p>
      </div>
    </footer>
  );
}
