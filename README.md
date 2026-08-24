# Michael FPV

Drone cinematography site for Michael FPV, Charlotte NC. Built with
[Astro](https://astro.build) and deployed automatically to GitHub Pages.

**Live:** https://michaelsfpv-ctrl.github.io/Michael-FPV/

---

## First-time setup (do this once)

You need Node.js installed. Get it from [nodejs.org](https://nodejs.org) —
take the LTS version.

```bash
npm install
```

## Working on the site

```bash
npm run dev
```

Open the address it prints (usually `http://localhost:4321/Michael-FPV/`).
The page reloads as you save changes.

```bash
npm run build     # produce the final files in dist/
npm run preview   # check the built version before pushing
```

## Deploying

**You never need to build manually.** Push to `main` and GitHub Actions
builds and publishes the site for you. Check progress in the **Actions** tab
of the repo.

One-time GitHub setting: go to **Settings → Pages** and set *Source* to
**GitHub Actions** (not "Deploy from a branch").

---

## How to make common changes

Almost everything lives in **`src/data/site.ts`**. Edit that one file and the
change flows through every page, the footer, and the search-engine data.

### Change your phone number, email, or Instagram

`src/data/site.ts` → the `site` object at the top.

### Add a video to a portfolio category

`src/data/site.ts` → find the category in `categories`, add to its `videos` array:

```ts
{ stream: 'your-cloudflare-stream-id', label: 'Short description' }
```

### Add a whole new portfolio category

Add an entry to `categories` in `src/data/site.ts`:

```ts
{
  slug: 'events',                       // becomes /portfolio/events/
  num: '05',
  title: 'Events',
  cover: 'cloudflare-stream-id',        // video shown on the tile
  metaDescription: 'One sentence for Google. Aim for 150-160 characters.',
  videos: [
    { stream: 'cloudflare-stream-id', label: 'Gala Coverage' },
  ],
}
```

A new page is generated automatically at `/portfolio/events/`, added to the
sitemap, and given its own search-engine data. No other files to touch.

### Change a service or package

`src/data/site.ts` → the `services` array.

### Change the FAQ

`src/data/site.ts` → the `faqs` array. These also feed the FAQ data that
Google uses for rich results, so keep answers factual and specific.

---

## Project structure

```
src/
  data/site.ts          All content and business data. Start here.
  data/terms.ts         Terms of service text.
  layouts/Base.astro    Page shell: meta tags, structured data, nav, footer.
  components/           Nav, Footer, VideoModal.
  pages/                One file per URL.
    index.astro                → /
    portfolio/index.astro      → /portfolio/
    portfolio/[slug].astro     → /portfolio/weddings/ etc (one per category)
    services.astro             → /services/
    bts.astro                  → /bts/
    book.astro                 → /book/
    terms.astro                → /terms/
  styles/global.css     All styling.
public/                 Files copied as-is: favicon, robots.txt, og-image.
```

---

## Moving to a custom domain later

When you buy a domain (roughly $12/year):

1. In `astro.config.mjs`, change:
   ```js
   site: 'https://michaelfpv.com',
   base: '/',
   ```
2. Add a file `public/CNAME` containing just your domain: `michaelfpv.com`
3. At your registrar, point DNS at GitHub:

   | Type  | Name | Value             |
   |-------|------|-------------------|
   | A     | `@`  | 185.199.108.153   |
   | A     | `@`  | 185.199.109.153   |
   | A     | `@`  | 185.199.110.153   |
   | A     | `@`  | 185.199.111.153   |
   | CNAME | `www`| michaelsfpv-ctrl.github.io |

4. GitHub → **Settings → Pages → Custom domain**, enter it, save, then tick
   **Enforce HTTPS**.

Because every internal link uses the `url()` helper, that config change is all
that's needed — no link rewriting.

---

## Still to do

**Add a social preview image.** Export a 1200×630 frame from your best footage,
save it as `public/og-image.jpg`, and push. Until it exists, links shared to
iMessage, Instagram, or Facebook show no thumbnail. The HTML already points at
it, so no code change is needed.

**Submit to Google.** After deploying, go to
[Search Console](https://search.google.com/search-console), add the site, and
submit `sitemap-index.xml`.

**Create a Google Business Profile** at [google.com/business](https://www.google.com/business/).
For a local service business this usually matters more for "drone videographer
near me" searches than anything on the site itself.

---

## Notes

- **Videos** are hosted on Cloudflare Stream and play only while that account
  is active.
- **The contact form** posts to Formspree (`mrenjojd`) and delivers to
  michaelfpv06@gmail.com. Free tier covers 50 submissions/month.
- **Accessibility**: keyboard navigation, focus states, skip link, and 44px
  touch targets are all in place. Please keep them if you edit the CSS.

## Contact

Michael Yushchenko · (980) 397-9127 · michaelfpv06@gmail.com
