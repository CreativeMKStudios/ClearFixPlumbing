import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('dist');
const files = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith('.html')) files.push(full);
  }
}

walk(root);

const banned = [
  'lorem ipsum',
  'look no further',
  'passionate',
  'seamless',
  'cutting-edge',
  'state-of-the-art',
  'nestled',
  'gas safe registered engineer on our team',
  'years of experience',
  'award-winning',
];

const problems = [];

for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  const rel = path.relative(root, file);
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '';
  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '';
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1] ?? '';
  const h1s = [...html.matchAll(/<h1\b[^>]*>/g)].length;
  const jsonBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  const alts = [...html.matchAll(/<img\b[^>]*>/g)].map((match) => match[0]);

  if (!title) problems.push(`${rel}: missing title`);
  if (title.length > 70) problems.push(`${rel}: title is ${title.length} chars`);
  if (!desc) problems.push(`${rel}: missing description`);
  if (desc.length > 170) problems.push(`${rel}: description is ${desc.length} chars`);
  if (!canonical.startsWith('https://')) problems.push(`${rel}: bad canonical`);
  if (h1s !== 1) problems.push(`${rel}: ${h1s} h1 tags`);
  if (!html.includes('07345 678795') && !rel.includes('404')) problems.push(`${rel}: missing phone`);
  if (jsonBlocks.length === 0 && !rel.startsWith('404')) problems.push(`${rel}: missing json-ld`);
  for (const block of jsonBlocks) {
    try {
      JSON.parse(block[1]);
    } catch {
      problems.push(`${rel}: invalid json-ld`);
    }
  }
  for (const img of alts) {
    if (!/alt="[^"]+"/.test(img)) problems.push(`${rel}: image missing alt`);
  }
  const lower = html.toLowerCase();
  for (const phrase of banned) {
    if (lower.includes(phrase)) problems.push(`${rel}: banned phrase “${phrase}”`);
  }
}

const robots = fs.readFileSync(path.join(root, 'robots.txt'), 'utf8');
if (!robots.includes('Sitemap:')) problems.push('robots.txt missing sitemap');
if (!fs.existsSync(path.join(root, 'sitemap-index.xml'))) problems.push('missing sitemap-index.xml');

if (problems.length) {
  console.error(problems.join('\n'));
  process.exit(1);
}

console.log(`Audited ${files.length} HTML files. Titles, descriptions, canonicals, H1s, JSON-LD, alts, and robots.txt look sound.`);
