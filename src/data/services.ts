// Every item here is drawn from facts already stated elsewhere on the site
// (the FAQ, the terms of service, and the existing service descriptions).
// Nothing is invented. If any of it is wrong, correct it here and it updates
// on the page automatically.

/** Included with every booking, regardless of package. */
export const alwaysIncluded = [
  {
    title: '4K delivery',
    body: 'Every shoot is captured and delivered in 4K, whatever the package.',
  },
  {
    title: 'Colour grading',
    body: 'All footage is graded before delivery. Nothing is handed over straight off the card.',
  },
  {
    title: 'The footage is yours',
    body:
      'Once the project is paid, use it however you like — listings, social, ads, your website. No watermarks, no restrictions.',
  },
  {
    title: 'FAA Part 107 pilot',
    body:
      'Every flight is operated by a certified and insured commercial drone pilot, in compliance with federal regulations.',
  },
];

/** Turnaround by project type. */
export const timelines = [
  { type: 'Real estate', time: '24 hours', note: 'Most listings are edited and delivered the same day.' },
  { type: 'Commercial', time: '24–48 hours', note: 'Venue and brand work, depending on scope.' },
  { type: 'Cinematic edits', time: '3–5 days', note: 'Highlight reels and graded narrative cuts.' },
  { type: 'Weddings & events', time: '5–7 days', note: 'Full coverage with an edited highlight reel.' },
];

/** What actually happens from first message to final files. */
export const bookingSteps = [
  {
    n: '01',
    title: 'Send your details',
    body:
      'Share the address or venue, the type of shoot, and your timing. Most quotes come back within the hour during business hours.',
  },
  {
    n: '02',
    title: 'Get a custom quote',
    body:
      'Pricing is built per project around location, scope, and what the shoot actually needs. No packages you do not want, no hidden fees.',
  },
  {
    n: '03',
    title: 'Lock the date',
    body:
      'Some projects take a deposit to secure the date and block the calendar. The amount is confirmed at booking, and the balance is due on delivery.',
  },
  {
    n: '04',
    title: 'Shoot day',
    body:
      'Exterior aerials come first while the light is right, then interior FPV passes. Most shoots wrap in under two hours.',
  },
  {
    n: '05',
    title: 'Edit and deliver',
    body:
      'Footage is reviewed, graded, and cut to scope, then delivered by download link in the formats you need.',
  },
];

/** Where we fly, and what travel costs. */
export const coverage = [
  {
    title: 'Charlotte area',
    body: 'No travel fee. Uptown, Ballantyne, Lake Norman, Concord, and the surrounding area.',
  },
  {
    title: 'Nationwide',
    body: 'Available for projects across all 50 states. Travel costs are quoted upfront before you commit.',
  },
  {
    title: 'Airspace and permits',
    body:
      'Airspace is checked before every booking. Venue permits are the client’s responsibility; we will tell you if one is needed.',
  },
];

/** Practical answers people ask before booking. */
export const servicesFaq = [
  {
    q: 'How is pricing worked out?',
    a: 'Every project is priced individually around location, scope, and what the shoot needs. Send your details and you will get a real number, not a range.',
  },
  {
    q: 'Can I book more than one service at once?',
    a: 'Yes. Packages can be combined, and custom scopes are quoted the same way as standard ones.',
  },
  {
    q: 'What if the weather is bad?',
    a: 'We reserve the right to move a shoot for weather, airspace, or safety reasons. In that case a reschedule is offered at no charge.',
  },
  {
    q: 'Can I move my booking?',
    a: 'Rescheduling requests made at least 48 hours before the shoot are fine — one reschedule per booking at no charge, subject to availability.',
  },
  {
    q: 'Do you shoot indoors as well as aerials?',
    a: 'Yes. A ducted cinewhoop handles interiors and tight spaces, and a standard DJI drone covers exterior aerials.',
  },
  {
    q: 'Do I need to be there on shoot day?',
    a: 'Not always, but someone needs to provide access at the agreed time. Confirming the address and access ahead of the shoot avoids a wasted trip.',
  },
];
