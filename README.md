# Michael FPV

Drone cinematography site for Michael FPV, Charlotte NC. Built with
[Astro](https://astro.build) and deployed automatically by **Cloudflare Pages**.

**Live:** https://michael-fpv.pages.dev

---

## How deploying works

You never build anything yourself.

1. Change a file
2. Upload it to GitHub and commit
3. Cloudflare notices within seconds, rebuilds, and publishes

Watch progress at **Cloudflare dashboard -> Workers & Pages -> michael-fpv ->
Deployments**.

There is no GitHub Actions workflow in this project on purpose. Cloudflare does
the building, so a second build system would only get in the way.

---

## Editing without installing anything

For text changes you don't need Node or a code editor. Open the file directly on
GitHub, click the pencil icon, edit, and commit. Cloudflare rebuilds automatically.

Almost everything lives in **`src/data/site.ts`**.

### Phone, email, Instagram
`src/data/site.ts` -> the `site` object at the top.

### Add a video to a portfolio category
`src/data/site.ts` -> find the category in `categories`, add to its `videos` array:

```ts
{ stream: 'your-cloudflare-stream-id', label: 'Short description' }
```

### Add a whole new portfolio category

```ts
{
  slug: 'events',                  // becomes /portfolio/events/
  num: '05',
  title: 'Events',
  cover: 'cloudflare-stream-id',   // video shown on the tile
  metaDescription: 'One sentence for Google. Aim for 150-160 characters.',
  videos: [
    { stream: 'cloudflare-stream-id', label: 'Gala Coverage' },
  ],
}
```

A new page appears at `/portfolio/events/`, gets added to the sitemap, and gets
its own search-engine data. No other files to touch.

### Services, FAQ
`src/data/site.ts` -> the `services` and `faqs` arrays. The FAQ also feeds the
data Google uses for rich results, so keep answers factual.

### Terms of service
`src/data/terms.ts`

---

## Running it locally (optional)

Only needed if you want to preview big changes before pushing. Install Node.js
(LTS) from nodejs.org, then:

```bash
npm install      # once
npm run dev      # opens http://localhost:4321/
npm run build    # optional: build to dist/
npm run preview  # view the built version
```

---

## Project structure

```
src/
  data/site.ts        All content and business data. Start here.
  data/services.ts    Services page sections.
  data/bts.ts         Behind-the-scenes page content.
  data/terms.ts       Terms of service text.
  layouts/Base.astro  Page shell: meta tags, structured data, nav, footer.
  components/         Nav, Footer, VideoModal.
  pages/              One file per URL.
    index.astro              -> /
    portfolio/index.astro    -> /portfolio/
    portfolio/[slug].astro   -> /portfolio/weddings/ etc, one per category
    services.astro           -> /services/
    bts.astro                -> /bts/
    book.astro               -> /book/
    terms.astro              -> /terms/
  styles/global.css   All styling.
public/               Copied as-is: favicon, robots.txt, og-image.
```

---

## Adding your own domain

Because the domain and the hosting are both Cloudflare, there are no DNS records
to type by hand.

1. Buy it: Cloudflare dashboard -> **Domain Registration** -> **Register Domain**
2. **Workers & Pages** -> `michael-fpv` -> **Custom domains** ->
   **Set up a custom domain** -> enter it -> **Activate domain**

Then two small edits so links and search data use the real address.

In `astro.config.mjs`:
```js
site: 'https://michaelfpv.com',
```
Leave `base: '/'` as it is.

In `public/robots.txt`, change the last line:
```
Sitemap: https://michaelfpv.com/sitemap-index.xml
```

Commit both. Cloudflare rebuilds automatically.

---

## Still to do

**Add a social preview image.** Export a 1200x630 frame from your best footage,
save it as `public/og-image.jpg`, and commit. Until it exists, links shared to
iMessage, Instagram, or Facebook show no thumbnail. The HTML already points at
it, so no code change is needed.

**Confirm Formspree.** Log in at formspree.io and check form `mrenjojd` is
verified and sending to michaelfpv06@gmail.com. If the confirmation email was
never clicked, submissions silently go nowhere.

**Submit to Google.** search.google.com/search-console -> add the site ->
submit `sitemap-index.xml`.

**Google Business Profile.** google.com/business. For a local service business
this usually matters more for "drone videographer near me" than anything on the
site itself.

---

## Notes

- **Videos** are hosted on Cloudflare Stream and play only while that account is
  active.
- **The contact form** posts to Formspree (`mrenjojd`) and delivers to
  michaelfpv06@gmail.com. Free tier covers 50 submissions per month.
- **Accessibility**: keyboard navigation, focus states, a skip link, and 44px
  touch targets are all in place. Please keep them if you edit the CSS.
- **Safari**: videos carry `playsinline` and there is a fallback that restarts
  them on first touch if iOS blocks autoplay. If videos still don't start, check
  Low Power Mode - it blocks autoplay on every site.
