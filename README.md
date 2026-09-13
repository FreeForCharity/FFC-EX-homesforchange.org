# FFC-EX-homesforchange.org

Static GitHub Pages site for **Homes for Change** (homesforchange.org), migrated from a live
self-hosted WordPress site as part of the Free For Charity WordPress-to-Pages migration (Wave 1,
epic
[FFC-Cloudflare-Automation#702](https://github.com/FreeForCharity/FFC-Cloudflare-Automation/issues/702)).

Built on the [FFC Footer-Only Template](https://github.com/FreeForCharity/FFC-IN-Footer_Only_Template)
(Next.js App Router, static export) rather than a raw HTML capture — the captured WordPress
content was converted into real `src/app` routes instead of being dropped into `public/`.

## What this is

The live source is a Divi + Elementor WordPress site with a small, real content set:

- **Home** (`/`) — the site's actual mission copy and calls to action.
- **About** (`/about`) — the full "Overview / Our Purpose / How We Do It / How We Enhance
  Success / Mission / Vision" copy from the live About page.
- **Donate** (`/donate`) — the live site's real, working donation destination: a PayPal Giving
  link (`hosted_button_id=EDGPK4WY95N5E`), not the GiveWP plugin's own form (GiveWP is installed
  but this button is what is actually wired up on the live site).
- **Volunteer** (`/volunteer`) — the live page's real copy, with the Forminator contact form
  replaced by a pre-filled `mailto:` link (no backend exists for it once static).
- **Contact** (`/contact`) — the live page's real crisis-line notice and response-time
  disclosure, with the Forminator contact form replaced by a `mailto:` link.
- **Image Gallery** (`/image-gallery`) — the three real stock photos the live site curated for
  this page.
- **Blog** (`/blog`) — the site's one real published post, rendered inline (there is only one).
- The FFC policy-page suite (privacy, cookies, terms, donation policy, vulnerability disclosure,
  security acknowledgements), each pointing at this site's own identity via
  `src/lib/site.config.ts`.

### Scope decision: plugin scaffolding and unedited demo content were dropped, not faked

The live REST/sitemap inventory (union: 30 URLs) included a WP Event Manager-style events plugin
installed on the site, whose pages are entirely non-functional once static — empty listings
("There are no venues.", "There are no organizers."), sign-in gates ("You need to be signed in to
manage your venue listings."), and three demo/placeholder events (`Demo Event 1`, `New event`, and
a stale 2022 `Dogepalooza` festival listing). These were **dropped, with their nav/footer links
removed**:

`/events/`, `/event/*` (3 demo events), `/event-venues/`, `/event-organizers/`,
`/venue-dashboard/`, `/organizer-dashboard/`, `/submit-venue-form/`, `/submit-organizer-form/`,
`/event-type/*`, `/event_listing_category/*`.

Three more pages carried a similar GiveWP donation-plugin gate rather than real content
(`/donor-dashboard/` and `/donation-confirmation/` render empty widget areas; `/donation-failed/`
is a system message page) and were dropped for the same reason.

Two pages were unedited WordPress/theme placeholder content rather than the charity's own copy:
the default WordPress "Sample Page" ("This is an example page..."), and the FAQ page (every
question read "Demo question goes here" with matching Divi placeholder body text). The Sponsors
page was also dropped — its only images were generic Divi/pngtree stock logos (a wolf
illustration, a "creative company" placeholder mark) with no actual sponsor names, so there was no
real sponsor list to migrate.

Full source-inspection notes and this scope decision are recorded on the tracking issue,
[FFC-EX-homesforchange.org#14](https://github.com/FreeForCharity/FFC-EX-homesforchange.org/issues/14).

### Footer standard: Level 1

The live site's own copy describes Homes for Change as a "501(c)3 nonprofit organization," but no
validated EIN or 501(c)(3) determination exists in Free For Charity's own records for this
charity, and none is fabricated here. The footer ships at **Level 1**
(footer-standard-adoption-checklist): the GuideStar/Candid endorsement block and the "US
501(c)(3) Non Profit" status line are omitted entirely — see `siteConfig.ein` /
`siteConfig.guidestar` in `src/lib/site.config.ts`, and the conditional rendering in
`src/components/footer/index.tsx`. This flips to Level 2 automatically once a validated EIN is
added. The Donation Policy page states this plainly rather than repeating the live site's
unverified determination as fact. The footer's contact email/phone are the charity's own, real,
published contact details (`info@homesforchange.org`, `(818) 634-2704`); no physical address or
social-media links are shown, since none exist anywhere on the live site.

### Fully localized assets

Every same-domain asset from the live WordPress capture that is actually used (images, the site
logo) is served from this repository under `public/Images/homesforchange/`. **No Google Fonts CSS
reference ships either** — fonts are self-hosted via `next/font/google` at build time, so there is
no runtime request to `fonts.googleapis.com` for the app itself. Zero third-party asset hosts
remain in the built output; the only external requests are the outbound PayPal donation link and
standard outbound links to other organizations' own policy pages.

**Analytics**: no GTM container is wired up yet — GA4/GTM provisioning is a separate, explicitly
gated step (see `src/components/google-tag-manager/index.tsx`). Shipping Free For Charity's own
template-default container here would have sent this site's traffic into FFC's own analytics
property.

## Deployment

Deployed to the **default GitHub Pages URL**
(https://freeforcharity.github.io/FFC-EX-homesforchange.org/) — no custom domain, no DNS changes.
Cutover (adding `public/CNAME`) is a separately gated step per the migration runbook.

- `CI - Build and Test` validates formatting, lint, unit tests, the static build, and Playwright
  E2E tests on every PR/push.
- `Deploy to GitHub Pages` runs after CI succeeds on `main`.
- `Lighthouse CI` and `FFC Drift Check` audit the deployed structure and FFC best-practice
  conventions respectively.

## Development

```bash
pnpm install
pnpm run dev        # http://localhost:3000
```

| Command                | Purpose                                   |
| ---------------------- | ----------------------------------------- |
| `pnpm run format`      | Format with Prettier                      |
| `pnpm run lint`        | ESLint                                    |
| `pnpm test`            | Jest unit tests                           |
| `pnpm run build`       | Static export (`out/`)                    |
| `pnpm run test:e2e`    | Playwright E2E tests                      |
| `pnpm run check:drift` | FFC footer-only best-practice conventions |

Run them in that order before committing (`TEMPLATE_CUSTOMIZATION.md` and the other
`TEMPLATE_*`/`*.md` docs in this repo are inherited from the upstream
[FFC Footer-Only Template](https://github.com/FreeForCharity/FFC-IN-Footer_Only_Template) and
describe the template's general customization surface, not this migration specifically).
