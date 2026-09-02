// ─────────────────────────────────────────────────────────────
// Base-path helper. GitHub project pages serve from a subfolder
// (/Michael-FPV/), so every internal link must be prefixed.
// Using this everywhere means switching to a custom domain later
// is a one-line change in astro.config.mjs.
// ─────────────────────────────────────────────────────────────
export const url = (path: string): string => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
};

// ─────────────────────────────────────────────────────────────
// Single source of truth for the whole site.
// Change a phone number or add a video here and it updates
// everywhere — pages, schema, footer, sitemap.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Michael FPV',
  owner: 'Michael',
  tagline: 'Charlotte Drone Cinematography',
  description:
    'FPV drone flythroughs, aerial video, and HDR photography for real estate, weddings, and brands. FAA Part 107 certified. Charlotte NC, available nationwide.',
  phone: '(980) 397-9127',
  phoneHref: 'tel:+19803979127',
  email: 'michaelfpv06@gmail.com',
  instagram: 'https://www.instagram.com/michael__fpv/',
  instagramHandle: '@michael__fpv',
  city: 'Charlotte',
  region: 'NC',
  regionFull: 'North Carolina',
  formspree: 'https://formspree.io/f/mrenjojd',
} as const;

// Cloudflare Stream helper — keeps the long query strings in one place.
//
// For a background loop, three things must all be true or the browser blocks
// autoplay and the video sits paused until the visitor interacts with the page:
//   muted=true      browsers only permit autoplay when there is no sound
//   preload=auto    start buffering immediately rather than waiting
//   allow=…         the iframe needs explicit autoplay permission (see PLAYER_ALLOW)
export const streamUrl = (id: string, opts: { sound?: boolean } = {}) =>
  opts.sound
    ? `https://iframe.videodelivery.net/${id}?autoplay=true&muted=false&controls=true&loop=false&preload=auto&playsinline=true`
    : `https://iframe.videodelivery.net/${id}?autoplay=true&muted=true&loop=true&controls=false&preload=auto&playsinline=true`;

// Permission list Cloudflare recommends for embedded Stream players.
// A bare allow="autoplay" is not always enough for the player to start.
export const PLAYER_ALLOW =
  'accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;';

/** Clip used as the visual alongside the About text on the home page. */
export const aboutStream = 'd8c7830ed52114d590b8e58b7ea454dc';

export const heroStreams = {
  home: '988cd6d1efa131464be779721f4cd16c',
  services: 'f8ff6cc6574816da1a95bd8cd9a8ca2e',
};

export type Video = {
  stream: string;
  label: string;
  portrait?: boolean;
  /** Opens muted in the fullscreen player too, not just as a preview. */
  silent?: boolean;
};
export type Tab = { key: string; label: string; videos: Video[] };

export type Category = {
  slug: string;
  num: string;
  title: string;
  /** Optional shorter title used in the <title> tag to avoid Google truncation */
  shortTitle?: string;
  /** Video shown as the tile background on /portfolio */
  cover?: string;
  /** One line shown on the portfolio page, written for a reader */
  blurb?: string;
  /** Meta description for this category's own page */
  metaDescription: string;
  videos?: Video[];
  tabs?: Tab[];
};

export const categories: Category[] = [
  {
    slug: 'weddings',
    blurb: 'Ceremony and reception coverage, flown quiet and kept out of the way.',
    num: '01',
    title: 'Weddings',
    cover: 'f95bab7559567c9703e0a6ffab7be5cf',
    metaDescription:
      'Wedding drone videography in Charlotte NC. Whisper-quiet ceremony and reception aerial coverage that works alongside your main video team.',
    tabs: [
      {
        key: 'main',
        label: 'Weddings',
        videos: [{ stream: 'f95bab7559567c9703e0a6ffab7be5cf', label: 'Ceremony & Reception' }],
      },
      {
        key: 'bts',
        label: 'Wedding BTS',
        videos: [
          { stream: '580409878c4579b2c7d65eed3b8fc889', label: 'Behind the Scenes' },
        ],
      },
    ],
  },
  {
    slug: 'moto-auto',
    blurb: 'Chase and tracking work. Cars, bikes, and anything moving fast.',
    num: '02',
    title: 'Moto Auto',
    cover: '799eeefcb246891cde55f81bde9edd21',
    metaDescription:
      'Automotive and motorcycle FPV drone videography. High-speed chase and tracking footage for cars, bikes, and motorsport. Charlotte NC, available nationwide.',
    videos: [
      { stream: 'fe4e9b86ce14a9c71427e4136c6bef31', label: 'FPV Chase' },
      { stream: '799eeefcb246891cde55f81bde9edd21', label: 'FPV Tracking' },
    ],
  },
  {
    slug: 'real-estate',
    blurb: 'One unbroken flight through the property, entry to exterior.',
    num: '03',
    title: 'Real Estate & Fly Thru',
    shortTitle: 'Real Estate',
    cover: '7577e83ae3176e09db3e9754da65144a',
    metaDescription:
      'Real estate drone videography in Charlotte NC. One continuous FPV flythrough of the whole property, delivered in 4K within 24 hours. MLS-ready exports included.',
    videos: [{ stream: '7577e83ae3176e09db3e9754da65144a', label: 'Fly Thru' }],
  },
  {
    slug: 'production',
    blurb: 'Venues, brands, and commercial shoots.',
    num: '04',
    title: 'Production',
    cover: 'c9469edb28bf6f463bba232523496082',
    metaDescription:
      'Commercial drone video production for venues, hotels, restaurants, and brands. FPV interior flythroughs and exterior aerials. Charlotte NC.',
    videos: [{ stream: 'c9469edb28bf6f463bba232523496082', label: 'Production' }],
  },
];


/** How many films a category actually holds — used as the tile label.
 *  Replaces decorative 01/02/03 numbering, which encoded nothing. */
export const filmCount = (cat: Category): number =>
  cat.tabs
    ? cat.tabs.reduce((n, t) => n + t.videos.length, 0)
    : (cat.videos?.length ?? 0);

export const services = [
  {
    tag: '01',
    title: 'Real Estate — Drone Tour',
    preview: 'One continuous FPV flythrough. In the door, through every room, done.',
    body: 'A single immersive FPV flythrough shot in one take. The footage that stops buyers mid-scroll.',
    points: [
      'Custom FPV flythrough (1 continuous take)',
      '4K delivery, color graded',
      'MLS-ready 16:9 and vertical 9:16',
      'Delivered within 24 hours',
    ],
  },
  {
    tag: '02',
    title: 'Real Estate — Standard Kit',
    preview: 'FPV tour + HDR photos + aerials + floor plan in one booking.',
    body: 'The most-booked package. Everything an agent needs to launch a listing, delivered in 24 hours.',
    points: [
      'FPV flythrough',
      'HDR interior photography (25+ photos)',
      'Exterior + aerial photography',
      '2D floor plan',
      'All files in 24 hours',
    ],
  },
  {
    tag: '03',
    title: 'Real Estate — Elite',
    preview: 'Standard Kit plus a cinematic highlight reel and creative direction.',
    body: 'For premium listings. Full Standard Kit plus a polished cinematic highlight video and on-site creative direction.',
    points: [
      'Everything in Standard Kit',
      'Cinematic highlight video (60–90s)',
      'Extended aerial footage',
      'On-site creative direction',
      'Social media cut included',
    ],
  },
  {
    tag: '04',
    title: 'Weddings',
    preview: 'Whisper-quiet aerials that work alongside your main video team.',
    body: 'We stay out of the way, shoot from above, and hand you polished aerial coverage that makes your highlight reel worth watching.',
    points: [
      'Ceremony aerial coverage',
      'Reception + venue aerials',
      'Edited highlight reel',
      'Raw footage included',
      'Delivered within 5–7 business days',
    ],
  },
  {
    tag: '05',
    title: 'Commercial & Venues',
    preview: 'Hotels, restaurants, offices, event spaces — inside and out.',
    body: 'FPV interior flythroughs plus exterior aerials for venue tours, hotel promos, restaurant launches, and office walkthroughs.',
    points: [
      'FPV interior flythrough',
      'Exterior aerial footage',
      'Edited promo video (60–120s)',
      'Photography add-on available',
      'Custom scope available',
    ],
  },
  {
    tag: '06',
    title: 'Production FPV',
    preview: 'Cinema-grade FPV for ads, music videos, and branded productions.',
    body: 'Full production FPV for commercial shoots, music videos, film sets, and campaigns.',
    points: [
      'Full-day and half-day rates',
      'Cinema-grade FPV and drone rigs',
      'Works alongside your production crew',
      'Pre-production scouting included',
      'Custom quote — contact us to scope',
    ],
  },
];

export const faqs = [
  {
    q: 'What is FPV?',
    a: 'FPV stands for First Person View. The pilot wears goggles and flies in a single unbroken take — through doors, down hallways, and around corners. Like walking the space yourself.',
  },
  {
    q: 'What is Part 107?',
    a: "FAA Part 107 is the required federal license to fly drones commercially. Every shoot is fully legal, insured, and authorized — including near airports and at events.",
  },
  {
    q: 'How fast is delivery?',
    a: 'Real estate shoots deliver in 24 hours. Cinematic edits in 3–5 days. Weddings and events in 5–7 days. Rush delivery available on request.',
  },
  {
    q: 'Where are you located?',
    a: 'Based in Charlotte, NC — serving the full area with no travel fee. Available nationwide across all 50 states for the right project.',
  },
  {
    q: 'What services do you offer?',
    a: 'Real estate tours, weddings, events, commercial venues, and production FPV. Every package includes 4K footage, color grading, and footage you own outright.',
  },
  {
    q: 'What is the pricing?',
    a: "Pricing is custom for every project — based on location, scope, and what your shoot needs. Contact us and we'll put together a number specific to your project.",
  },
];


export const aboutPoints = [
  {
    title: 'You deal with the pilot',
    body:
      'No account manager, no handoff. The person you message is the person flying the drone and cutting the edit.',
  },
  {
    title: 'One shoot at a time',
    body:
      'Small operation on purpose. Fewer bookings means the footage gets the attention it needs, not whatever fits the schedule.',
  },
  {
    title: 'Certified and insured',
    body:
      'FAA Part 107 certified with insurance on every shoot. Airspace gets checked before the booking is confirmed, not on the day.',
  },
  {
    title: 'Delivered fast',
    body:
      'Real estate inside 24 hours. Cinematic edits in three to five days. Weddings and events in five to seven.',
  },
  {
    title: 'Charlotte based',
    body:
      'Local to the Charlotte area with no travel fee, and available across all 50 states when a project calls for it.',
  },
];

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/portfolio/', label: 'Portfolio' },
  { href: '/services/', label: 'Services' },
  { href: '/bts/', label: 'BTS' },
];
