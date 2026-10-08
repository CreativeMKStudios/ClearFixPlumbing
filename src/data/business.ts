/**
 * Public facts only.
 * Source: Google listing "Clear fix plumbing and heating"
 * https://maps.app.goo.gl/oruzhUnnNiJWp1yC7
 * Checked 8 October 2026.
 * Phone, hours, place, and email also appear on the Google profile photo.
 * No street address is published on the listing, so none is shown here.
 * No written Google reviews were available, so none are stored here.
 */

export const business = {
  name: 'ClearFix Plumbing & Heating',
  googleName: 'Clear fix plumbing and heating',
  slogan: 'Clear solutions. Fixed properly.',
  phoneDisplay: '07345 678795',
  phoneTel: '+447345678795',
  phoneIntl: '+44 7345 678795',
  email: 'clearfixplumber@gmail.com',
  hoursLabel: 'Open 24 hours',
  city: 'Bedford',
  region: 'Bedfordshire',
  country: 'United Kingdom',
  countryCode: 'GB',
  geo: {
    latitude: 52.1390923,
    longitude: -0.4514982,
  },
  mapUrl: 'https://maps.app.goo.gl/oruzhUnnNiJWp1yC7',
  placeId: 'ChIJWTBfg2L292wRUD3eXCs4dD0',
  googleRating: '5.0',
  checkedOn: '8 October 2026',
  standards: [
    {
      title: 'Reliable',
      text: 'You get the phone number that is printed on the van. We say what we can do, and we say when a job is not ours.',
    },
    {
      title: 'On time',
      text: 'We tell you when we can be there. If the time has to change, we call you.',
    },
    {
      title: 'Quality workmanship',
      text: 'The repair should last. We fit the part properly and we tell you what we did before we leave.',
    },
    {
      title: 'Clear communication',
      text: 'We use plain words. You should know the fault, the fix, and the cost before work starts.',
    },
  ],
} as const;

export const nav = [
  { n: '1', label: 'Services', href: '/services' },
  { n: '2', label: 'About', href: '/about' },
  { n: '3', label: 'Projects', href: '/projects' },
  { n: '4', label: 'Areas', href: '/areas' },
  { n: '5', label: 'Reviews', href: '/reviews' },
  { n: '6', label: 'Contact', href: '/contact' },
] as const;

export const homeFaqs = [
  {
    q: 'Are you open at night?',
    a: 'Yes. The Google listing says open 24 hours, every day. Call 07345 678795.',
  },
  {
    q: 'Where are you based?',
    a: 'Bedford. We also work in nearby towns. If your town is not listed, call and ask.',
  },
  {
    q: 'Do you tell me the cost before you start?',
    a: 'Yes. We talk through the job and the cost first. If we find something else, we stop and tell you before we do more.',
  },
  {
    q: 'Can you work on a gas boiler?',
    a: 'Gas work in the UK must be done by a Gas Safe registered engineer. Tell us the fault. We will say straight away if it is a job we can do.',
  },
] as const;
