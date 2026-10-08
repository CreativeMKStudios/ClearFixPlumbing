import type { Faq } from './services';

export type Area = {
  slug: string;
  name: string;
  metaTitle: string;
  description: string;
  intro: string[];
  homes: string[];
  faqs: Faq[];
};

export const areas: Area[] = [
  {
    slug: 'bedford',
    name: 'Bedford',
    metaTitle: 'Plumber in Bedford | ClearFix',
    description:
      'ClearFix is a plumber in Bedford for leaks, drains, taps, toilets, and heating. Open 24 hours. Call 07345 678795.',
    intro: [
      'ClearFix is based in Bedford. The town sits on the River Great Ouse, and the housing runs from older streets near the centre to newer estates further out.',
      'If you are in Bedford town, call 07345 678795. We are open 24 hours. Tell us the street area, such as Castle, Queens Park, Goldington, Putnoe, or Brickhill, so we know where to come.',
    ],
    homes: [
      'Older terraces often have a stopcock that is stiff, a basin waste that has been altered, or a radiator valve that weeps.',
      'Newer houses still get leaks at traps, shower wastes, and heating joints. Age is not the only cause.',
      'Flats need extra care because a leak can reach the home below. If water is dropping through a ceiling, shut the stopcock and call.',
    ],
    faqs: [
      {
        q: 'Do you cover the town centre?',
        a: 'Yes. Bedford town, including the streets around the centre, is our home patch.',
      },
      {
        q: 'How do I book?',
        a: 'Call 07345 678795 or email clearfixplumber@gmail.com. A call is quicker if water is running.',
      },
    ],
  },
  {
    slug: 'kempston',
    name: 'Kempston',
    metaTitle: 'Plumber in Kempston | ClearFix',
    description:
      'Plumber for Kempston, next to Bedford. Leaks, blocked drains, taps, and heating. Call ClearFix on 07345 678795.',
    intro: [
      'Kempston sits on the Bedford side of the Great Ouse, joined to the town. It is a normal local call-out for us, not a long trip.',
      'The streets mix older houses with later estates. Both keep a plumber busy: slow wastes, dripping taps, and heating valves that start to weep.',
    ],
    homes: [
      'In older Kempston houses, the stopcock is often under the sink and may not have been turned for years. If it will not move, do not force it. Call us.',
      'On newer estates, a common call is a shower waste that holds water, or a kitchen trap that has clogged with fat.',
      'Tell us the road when you call so we can find you without a search.',
    ],
    faqs: [
      {
        q: 'Is Kempston in your area?',
        a: 'Yes. Kempston is next to Bedford and we treat it as a local job.',
      },
      {
        q: 'Can you come the same day?',
        a: 'If the diary allows, yes. For running water, call and we will tell you the soonest we can be there.',
      },
    ],
  },
  {
    slug: 'wixams',
    name: 'Wixams',
    metaTitle: 'Plumber in Wixams | ClearFix',
    description:
      'Plumber for Wixams, south of Bedford. Leaks, showers, toilets, and heating valves. Call ClearFix on 07345 678795.',
    intro: [
      'Wixams is the newer village south of Bedford. Most of the homes were built in the last twenty years, so the pipework is modern. Modern does not mean leak-free.',
      'We come down from Bedford for taps, traps, toilets, shower wastes, and heating valves. Call 07345 678795 and say you are in Wixams.',
    ],
    homes: [
      'New homes often hide pipes in furniture voids and behind bath panels. A small weep can travel before you see it.',
      'A slow basin or a shower that puddles is usually a trap or a waste, not a mystery.',
      'If the house is still new and you have a builder’s warranty, you can use that. If you want a plumber now, call us and we will say what we can do.',
    ],
    faqs: [
      {
        q: 'Do you only work on old houses?',
        a: 'No. Wixams is mostly newer housing, and we work on those systems too.',
      },
      {
        q: 'The heating is cold in one room. Is that a boiler job?',
        a: 'Not always. A closed valve or air in one radiator is a plumbing check. If the fault is in a gas boiler, we will say so.',
      },
    ],
  },
  {
    slug: 'bromham',
    name: 'Bromham',
    metaTitle: 'Plumber in Bromham | ClearFix',
    description:
      'Plumber for Bromham, north-west of Bedford. Leaks, taps, drains, and radiators. Call ClearFix on 07345 678795.',
    intro: [
      'Bromham is the village north-west of Bedford, on the River Great Ouse. The drive from town is short, so we take calls there as part of the local round.',
      'You will find older cottages and later houses on the same lanes. The plumbing problems are not the same, and it helps if you tell us the age of the house.',
    ],
    homes: [
      'Older village houses may have a stopcock in an odd place, lead or odd-sized pipe on a short run, or a tank in the loft.',
      'Later houses are more likely to be on mains water, with a combi or a sealed heating system. We still need you to describe the fault. We do not guess the system from the village name.',
      'Outside gullies block with leaves and kitchen fat. If the gully by the back door smells or floods in rain, tell us.',
    ],
    faqs: [
      {
        q: 'Do you come out to the village?',
        a: 'Yes. Bromham is close to Bedford and we cover it.',
      },
      {
        q: 'What should I say when I call?',
        a: 'Your road, what is leaking or blocked, and whether you have turned the water off. That is enough to start.',
      },
    ],
  },
  {
    slug: 'great-denham',
    name: 'Great Denham',
    metaTitle: 'Plumber in Great Denham | ClearFix',
    description:
      'Plumber for Great Denham, west of Bedford. Showers, leaks, toilets, and heating. Call ClearFix on 07345 678795.',
    intro: [
      'Great Denham is the newer housing west of Bedford, by the country park and the river. It is close enough that we treat it as a Bedford job.',
      'The homes are recent, with modern taps, showers, and heating valves. Those parts still fail. A cartridge, a hose, or a valve is a common call.',
    ],
    homes: [
      'Shower trays that hold water are often a hair and soap blockage in the waste, not a failed tray.',
      'Kitchen sinks on newer estates block when oil goes down the drain. Let fat cool in a tub and bin it.',
      'If one radiator is cold and the others are hot, start with that radiator. Call us if a bleed does not fix it or the valve drips.',
    ],
    faqs: [
      {
        q: 'Are you local to Great Denham?',
        a: 'We are based in Bedford. Great Denham is on the west side of town, so yes, it is a local call.',
      },
      {
        q: 'Can you look at a leak under a bath?',
        a: 'Yes, if we can reach the pipes. Tell us if there is a bath panel. We will not rip a panel out without saying so first.',
      },
    ],
  },
  {
    slug: 'clapham',
    name: 'Clapham',
    metaTitle: 'Plumber in Clapham, Bedfordshire | ClearFix',
    description:
      'Plumber for Clapham in Bedfordshire, north of Bedford. Not Clapham in London. Call ClearFix on 07345 678795.',
    intro: [
      'This page is for Clapham in Bedfordshire, the village just north of Bedford on the road towards Northampton. It is not Clapham in London.',
      'We are a Bedford plumber, and Clapham is a short run north. Call 07345 678795 for leaks, blocked wastes, taps, toilets, and heating pipes.',
    ],
    homes: [
      'The village has older houses and newer ones side by side. Tell us which you have. A loft tank and a mains combi are different jobs.',
      'A stiff outside tap before winter is an easy call. A split pipe in a freeze is not. If a pipe has burst, turn the stopcock off and call.',
      'If you are between Clapham and Oakley, say so. We would rather know the lane than guess from the post town.',
    ],
    faqs: [
      {
        q: 'Do you cover Clapham in London?',
        a: 'No. We work in and around Bedford. Clapham, Bedfordshire is in our area. Clapham, London is not.',
      },
      {
        q: 'Are you open on Sunday?',
        a: 'Yes. The Google listing says open 24 hours, seven days.',
      },
    ],
  },
];

export const otherTowns: { name: string; note: string }[] = [
  { name: 'Goldington', note: 'East Bedford neighbourhood. Same-day calls when the diary allows.' },
  { name: 'Putnoe', note: 'North-east Bedford. Houses and bungalows, usual plumbing faults.' },
  { name: 'Brickhill', note: 'North Bedford. Call with the road name.' },
  { name: 'Queens Park', note: 'Close to the centre, with a lot of older houses.' },
  { name: 'Castle', note: 'Town-centre streets near the river and the castle mound.' },
  { name: 'Biddenham', note: 'Village on the west side, now close to the town.' },
  { name: 'Elstow', note: 'South of the centre, older village streets and later homes.' },
  { name: 'Shortstown', note: 'Towards Cardington. Tell us the street when you call.' },
  { name: 'Cardington', note: 'South-east of Bedford, including the older village.' },
  { name: 'Cotton End', note: 'Small village south of Bedford. Call and we will confirm we can reach you.' },
  { name: 'Wilstead', note: 'South of Bedford on the road towards Luton.' },
  { name: 'Wootton', note: 'South of Bedford. A normal ask if you are near the town.' },
  { name: 'Oakley', note: 'North-west, past Clapham. Ask when you call.' },
  { name: 'Renhold', note: 'North-east of Bedford. Village houses and later closes.' },
  { name: 'Great Barford', note: 'East of Bedford. Call so we can say if we can fit you in.' },
  { name: 'Stewartby', note: 'South of Bedford. We confirm each call rather than promise every lane.' },
];

export function getArea(slug: string) {
  return areas.find((area) => area.slug === slug);
}
