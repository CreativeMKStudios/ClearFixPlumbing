export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  number: string;
  title: string;
  nav: string;
  summary: string;
  metaTitle: string;
  description: string;
  intro: string[];
  jobs: string[];
  before: string[];
  note?: string;
  faqs: Faq[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: 'emergency-plumbing',
    number: '01',
    title: 'Emergency plumbing',
    nav: 'Emergencies',
    summary: 'Burst pipes, water you cannot stop, and a toilet that will not clear. Call any time.',
    metaTitle: 'Emergency plumber in Bedford | ClearFix',
    description:
      'Emergency plumber in Bedford, open 24 hours. Burst pipes, leaks, and blocked toilets. Call ClearFix on 07345 678795.',
    intro: [
      'Some plumbing problems can wait until morning. A burst pipe cannot. If water is running and you cannot stop it, call 07345 678795.',
      'ClearFix is open 24 hours, as shown on our Google listing. Tell us what you can see and which town you are in.',
    ],
    jobs: [
      'A burst or split pipe',
      'Water coming through a ceiling',
      'A leak you cannot isolate',
      'No water in the house',
      'A blocked toilet when it is the only one',
      'A radiator or valve dumping water onto the floor',
    ],
    before: [
      'Find the stopcock. It is often under the kitchen sink. Turn it clockwise to shut the water off.',
      'Open a cold tap downstairs so the pipes can empty.',
      'Move rugs and small furniture away from the water if you can do it safely.',
      'If water is near sockets or the fuse board, do not touch them. Switch the power off at the main switch only if you can do it without standing in water.',
      'If you smell gas, open windows, do not use switches, leave the house, and call the gas emergency line on 0800 111 999.',
    ],
    note: 'We will tell you if we can get to you, and we will talk through the cost before work starts.',
    faqs: [
      {
        q: 'Will you come out at night?',
        a: 'Yes. The listing says open 24 hours. Call 07345 678795 and tell us the problem.',
      },
      {
        q: 'What if I cannot find the stopcock?',
        a: 'Call us and say so. We will talk you through the usual places while we are on the way, if that is safe.',
      },
    ],
    related: ['leak-repairs', 'blocked-drains'],
  },
  {
    slug: 'leak-repairs',
    number: '02',
    title: 'Leak repairs',
    nav: 'Leaks',
    summary: 'Drips under the sink, wet ceilings, and pipes that will not stay dry.',
    metaTitle: 'Leak repairs in Bedford | ClearFix',
    description:
      'Leak repairs in Bedford and nearby towns. Drips, wet ceilings, and burst pipes. Call ClearFix on 07345 678795.',
    intro: [
      'A small drip can rot a cupboard or stain a ceiling. A split pipe can flood a room. Both are worth a call.',
      'Tell us where the water shows up. Under a sink, behind a toilet, on a ceiling, or at a radiator. That helps us bring the right parts.',
    ],
    jobs: [
      'Dripping pipes and weeping joints',
      'Leaks under a kitchen sink or basin',
      'A toilet that leaks at the base or at the fill valve',
      'Wet patches on a ceiling',
      'A water meter that moves when every tap is off',
      'Outside taps that drip or will not shut',
    ],
    before: [
      'Put a bowl under a drip so you can see how fast it is.',
      'If the drip is getting worse, turn the stopcock off.',
      'Do not keep tightening a fitting that is already leaking. You can crack it.',
      'Take a photo if it is safe. It helps us see the pipe before we arrive.',
    ],
    faqs: [
      {
        q: 'How do I know if I have a leak I cannot see?',
        a: 'Check the water meter. If the dial or digits move while every tap is off, water is escaping somewhere. A new stain on a ceiling is another sign.',
      },
      {
        q: 'Do you replace the whole pipe?',
        a: 'Only if that is the sound repair. Often a joint or a short piece of pipe is enough. We explain the choice before we start.',
      },
    ],
    related: ['emergency-plumbing', 'taps-toilets-and-showers'],
  },
  {
    slug: 'blocked-drains',
    number: '03',
    title: 'Blocked drains',
    nav: 'Drains',
    summary: 'Sinks that will not empty, toilets that rise, and gullies that smell.',
    metaTitle: 'Blocked drains in Bedford | ClearFix',
    description:
      'Blocked sinks, toilets, and gullies in Bedford. ClearFix clears everyday blockages. Call 07345 678795.',
    intro: [
      'A sink that fills and sits there is usually a blockage in the trap or the waste pipe. A toilet that rises when you flush needs attention before it overflows.',
      'We clear everyday blockages in sinks, basins, baths, toilets, and outside gullies. If the job needs a larger machine than we carry, we will say so.',
    ],
    jobs: [
      'Kitchen sinks that drain slowly or not at all',
      'Basin and bath wastes',
      'Toilets that will not clear',
      'Smelly gullies outside the kitchen',
      'A shower tray that holds water',
    ],
    before: [
      'Stop flushing a blocked toilet. More water can spill onto the floor.',
      'Do not pour a second chemical unblocker down if the first one is still sitting there. The mix can burn skin and damage the pipe.',
      'Do not put fat, oil, coffee grounds, rice, or wipes down the sink. They are a common cause of the next blockage.',
      'Take the standing water out with a jug if you can, so it does not spill when the trap is opened.',
    ],
    faqs: [
      {
        q: 'Can a plunger make it worse?',
        a: 'A plunger is fine on a simple toilet or basin block. If water is already at the rim, stop and call. Forcing it can push the spill onto the floor.',
      },
      {
        q: 'Do you camera-survey drains?',
        a: 'We do not advertise drain cameras or jetting vans. We clear common household blockages. If you need a survey, we will tell you.',
      },
    ],
    related: ['emergency-plumbing', 'bathrooms-and-kitchens'],
  },
  {
    slug: 'taps-toilets-and-showers',
    number: '04',
    title: 'Taps, toilets, and showers',
    nav: 'Taps',
    summary: 'Dripping taps, toilets that run, and showers that leak or run weak.',
    metaTitle: 'Tap, toilet, and shower repairs in Bedford | ClearFix',
    description:
      'Dripping taps, running toilets, and shower leaks in Bedford. Repair or replace. Call ClearFix on 07345 678795.',
    intro: [
      'A tap that drips all night wastes water and stains the basin. A toilet that runs can add a lot to the bill and keep you awake.',
      'Many of these jobs are a worn washer, a cartridge, a fill valve, or a split hose. We will say if a repair is sensible or if a new fitting is the better spend.',
    ],
    jobs: [
      'Dripping or stiff kitchen and basin taps',
      'Monobloc taps with a tired cartridge',
      'Toilets that keep filling',
      'Loose toilet seats and leaking cisterns',
      'Shower hoses and heads that leak',
      'Weak flow from a shower or tap',
    ],
    before: [
      'Turn the isolator off under the basin or sink if the drip is bad. The small screw slot usually turns a quarter turn.',
      'For a running toilet, try the shut-off valve on the pipe to the cistern.',
      'Note the brand if you can see it. It helps us match the part.',
    ],
    faqs: [
      {
        q: 'Is it worth repairing an old tap?',
        a: 'Sometimes yes. If parts are still made and the tap body is sound, a new cartridge or washer is enough. If the body is cracked or the finish is gone, a new tap is cleaner.',
      },
      {
        q: 'Why is my shower suddenly weak?',
        a: 'It can be a blocked hose, a scaled head, a stuck valve, or a problem further back in the pipe. We check the simple causes first.',
      },
    ],
    related: ['leak-repairs', 'bathrooms-and-kitchens'],
  },
  {
    slug: 'bathrooms-and-kitchens',
    number: '05',
    title: 'Bathrooms and kitchens',
    nav: 'Bathrooms',
    summary: 'Plumbing for taps, traps, wastes, basins, sinks, toilets, and showers.',
    metaTitle: 'Bathroom and kitchen plumbing in Bedford | ClearFix',
    description:
      'Bathroom and kitchen plumbing in Bedford. Taps, traps, wastes, basins, sinks, toilets, and showers. Call 07345 678795.',
    intro: [
      'We plumb the water and the waste. That covers taps, traps, wastes, basins, sinks, toilets, and the pipework for a shower.',
      'If the job also needs tiling, plastering, or electrical work, we say so before we start. We do not pretend to be every trade.',
    ],
    jobs: [
      'Swap a tap, basin, or kitchen sink',
      'Fit or renew a trap and waste',
      'Replace a toilet and connect it to the soil pipe',
      'Plumb a shower, including the wastes',
      'Move a small run of pipe when a fitting has to shift',
      'First fix and second fix on a straightforward bathroom or kitchen',
    ],
    before: [
      'Decide the fitting before the day if you can. A changed basin size can change the pipe positions.',
      'Clear the cupboard under the sink so we can reach the pipes.',
      'Tell us if the water is from a tank in the loft or straight from the mains. It changes the tap we can fit.',
    ],
    faqs: [
      {
        q: 'Do you supply the basin or the tap?',
        a: 'You can supply them, or ask us what we can get. We agree that before the day so the job is not waiting on a part.',
      },
      {
        q: 'Can you retile the room?',
        a: 'No. We do the plumbing. If tiles have to come off to reach a pipe, we tell you before we lift them.',
      },
    ],
    related: ['taps-toilets-and-showers', 'leak-repairs'],
  },
  {
    slug: 'heating',
    number: '06',
    title: 'Heating',
    nav: 'Heating',
    summary: 'Cold radiators, leaking valves, and heating pipes. Gas boiler work is a separate question.',
    metaTitle: 'Heating plumber in Bedford | ClearFix',
    description:
      'Radiators, valves, and heating leaks in Bedford. ClearFix will say if a gas job needs a Gas Safe engineer. Call 07345 678795.',
    intro: [
      'ClearFix does plumbing and heating. A lot of heating calls are plumbing: a cold radiator, a leaking valve, or a pipe joint that weeps when the system is hot.',
      'Work on gas boilers, gas pipes, and gas flues must be done by a Gas Safe registered engineer. We will not dress up a gas job as a simple plumbing visit. Tell us the symptom and we will tell you if we can take it.',
    ],
    jobs: [
      'A radiator that stays cold at the top or the bottom',
      'A radiator valve that drips',
      'A bleed that will not stop the cold spot',
      'Heating pipes that leak at a joint',
      'A towel rail that will not warm, when the fault is in the valve or the pipe',
    ],
    before: [
      'If water is coming from a radiator, turn the valves off at both ends if you can, and catch the drip.',
      'Note whether the boiler is showing a code, but do not keep resetting it.',
      'If you smell gas, leave the house and call 0800 111 999. Do not treat that as a plumbing call.',
    ],
    note: 'We do not publish a Gas Safe number because one is not shown on our Google listing. Ask, and we will be straight with you.',
    faqs: [
      {
        q: 'Can I bleed a radiator myself?',
        a: 'Yes, if you are happy to. Use a radiator key, hold a cloth to the valve, and close it as soon as water appears. If it still stays cold, or the valve leaks, call us.',
      },
      {
        q: 'My boiler has died. Can you fit a new one?',
        a: 'Only a Gas Safe registered engineer can do that work. Tell us what has happened. If we are not the right person, we will say so rather than book a wasted visit.',
      },
    ],
    related: ['leak-repairs', 'emergency-plumbing'],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
