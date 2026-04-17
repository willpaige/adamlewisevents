import "dotenv/config";
import { getPayload } from "payload";
import config from "../src/payload.config";

const RESIDENCIES = {
  current: [
    { venue: "Christchurch Music Festival", role: "Festival booking — 2026", location: "Dorset" },
    { venue: "Cameo", role: "Summer residency — international student nights", location: "Bournemouth" },
    { venue: "Post", role: "Regular resident", location: "Bournemouth" },
    { venue: "Aruba", role: "Regular resident", location: "Bournemouth" },
    { venue: "Bar So", role: "Regular resident", location: "Bournemouth" },
    { venue: "V Nightclub", role: "Regular resident", location: "Bournemouth" },
  ],
  previous: [
    { venue: "Hed Kandi", role: "Former resident DJ", location: "UK" },
    { venue: "Henley Royal Regatta", role: "Main stage — two consecutive years", location: "Oxfordshire" },
    { venue: "Creation", role: "Resident DJ", location: "Brighton" },
    { venue: "Destiny", role: "First warm-up residency, age 18", location: "Plymouth" },
    { venue: "International Tour", role: "Guest slots worldwide — 2002-2004", location: "Worldwide" },
    { venue: "Farm Raves", role: "Legendary local raves, where it all started", location: "Est. 1994" },
  ],
};

const SERVICES = [
  {
    number: "01",
    title: "Bars & Venues",
    description:
      "Regular and guest DJ slots for bars, restaurants, and nightlife venues across Bournemouth, Poole, and the surrounding area. Adaptable to your brand, your crowd, and your vibe.",
    tags: ["Residencies", "Guest Slots", "Opening Nights"],
  },
  {
    number: "02",
    title: "Weddings",
    description:
      "Full wedding DJ packages from ceremony to last dance. Bespoke playlists, seamless transitions, and a dance floor that stays packed. Available at venues across Dorset, Hampshire, and beyond.",
    tags: ["Ceremony", "Reception", "Evening Party"],
  },
  {
    number: "03",
    title: "Corporate",
    description:
      "Professional entertainment for conferences, awards dinners, product launches, and team celebrations. Polished, reliable, and perfectly suited to the occasion.",
    tags: ["Awards", "Conferences", "Launches"],
  },
  {
    number: "04",
    title: "Private Events",
    description:
      "Birthdays, anniversaries, house parties, and celebrations. Personalised sets tailored to you, from intimate garden parties to milestone birthday bashes.",
    tags: ["Birthdays", "Anniversaries", "Parties"],
  },
  {
    number: "05",
    title: "Festivals & Outdoor",
    description:
      "Festival stages, outdoor events, and summer parties along the South Coast. Experienced with large-scale PA systems, beach parties, and festival crowds.",
    tags: ["Festivals", "Garden Parties", "Beach Events"],
  },
  {
    number: "06",
    title: "Charity & Galas",
    description:
      "Elegant entertainment for fundraisers, black-tie galas, and charity events. The right tone from arrival to close, with a professional presence throughout.",
    tags: ["Fundraisers", "Black Tie", "Auctions"],
  },
];

const AREAS = [
  { name: "Bournemouth", detail: "Home base" },
  { name: "Poole", detail: "Harbour & Sandbanks" },
  { name: "Christchurch", detail: "Dorset" },
  { name: "New Forest", detail: "Hampshire" },
  { name: "Southampton", detail: "Hampshire" },
  { name: "Dorchester", detail: "West Dorset" },
  { name: "Salisbury", detail: "Wiltshire" },
  { name: "Winchester", detail: "Hampshire" },
  { name: "Wareham & Purbeck", detail: "Dorset" },
  { name: "Ringwood", detail: "Hampshire" },
  { name: "Lymington", detail: "Hampshire" },
  { name: "Wimborne", detail: "Dorset" },
];

const TESTIMONIALS = [
  {
    quote:
      "Thanks for getting everyone up dancing for two years straight — the energy you bring behind the decks has been a huge part of what Post is.",
    rating: 5,
    authorName: "Matt",
    eventType: "Post, Bournemouth",
    avatarInitials: "M",
  },
  {
    quote:
      "Adam truly made my wedding day unforgettable. What a fantastic way to wrap up such a special day — the dance floor didn't stop.",
    rating: 5,
    authorName: "Hannah Lee",
    eventType: "Wedding",
    avatarInitials: "HL",
  },
  {
    quote:
      "The music was top-notch all night long, and I really appreciate you mixing my playlist throughout the evening. Best DJ ever!",
    rating: 5,
    authorName: "Alison Haim",
    eventType: "Private Event",
    avatarInitials: "AH",
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Get in Touch",
    description:
      "Drop me a message with your date, venue, and what you're looking for. I'll get back to you quickly with availability and a no-obligation quote.",
  },
  {
    number: "02",
    title: "Plan the Set",
    description:
      "We'll discuss the vibe, the crowd, and any must-play or must-avoid tracks. For weddings and private events, I build a full bespoke running order tailored to your day.",
  },
  {
    number: "03",
    title: "Setup & Sound",
    description:
      "I arrive early and handle everything — professional-grade sound, lighting if needed, and a clean, discreet setup. I'll liaise with your venue to ensure everything runs smoothly.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "I read the room, manage the energy, and make sure your event sounds exactly how it should. Seamless, professional, and always in the moment.",
  },
];

const GALLERY = [
  { label: "Henley Royal Regatta", type: "Main Stage · 2 Years" },
  { label: "Hed Kandi", type: "Former Resident" },
  { label: "Post, Bournemouth", type: "Resident · Est. 2022" },
  { label: "V Nightclub", type: "V Rocks Residency" },
  { label: "Aruba", type: "Beachfront Residency" },
  { label: "Bar So & Cameo", type: "Bournemouth Nightlife" },
];

const BOOKINGS: Array<{
  date: string;
  eventName: string;
  venue: string;
  type: "festival" | "residency" | "wedding" | "private" | "corporate";
}> = [
  { date: "2026-08-08", eventName: "Christchurch Music Festival", venue: "Christchurch, Dorset", type: "festival" },
  { date: "2026-07-18", eventName: "Summer Residency — Cameo", venue: "International Students Night · Bournemouth", type: "residency" },
  { date: "2026-06-27", eventName: "Summer Wedding", venue: "New Forest, Hampshire", type: "wedding" },
  { date: "2026-09-12", eventName: "Private 40th Birthday", venue: "Sandbanks, Poole", type: "private" },
];

const MARQUEE = [
  "Hed Kandi",
  "Henley Regatta",
  "Christchurch Music Festival",
  "V Nightclub",
  "Post",
  "Aruba",
  "Bar So",
  "Cameo",
  "Creation Brighton",
  "Destiny Plymouth",
];

async function seed() {
  const payload = await getPayload({ config });

  console.log("→ Clearing seeded collections...");
  const collectionsToReset = [
    "residencies",
    "services",
    "coverage-areas",
    "testimonials",
    "bookings",
    "process-steps",
    "gallery-events",
  ] as const;
  for (const slug of collectionsToReset) {
    const existing = await payload.find({ collection: slug, limit: 500, overrideAccess: true });
    for (const doc of existing.docs) {
      await payload.delete({ collection: slug, id: doc.id, overrideAccess: true });
    }
  }

  console.log("→ Seeding residencies...");
  let order = 0;
  for (const r of RESIDENCIES.current) {
    await payload.create({
      collection: "residencies",
      overrideAccess: true,
      data: { ...r, status: "current", order: order++ },
    });
  }
  order = 0;
  for (const r of RESIDENCIES.previous) {
    await payload.create({
      collection: "residencies",
      overrideAccess: true,
      data: { ...r, status: "previous", order: order++ },
    });
  }

  console.log("→ Seeding services...");
  order = 0;
  for (const s of SERVICES) {
    await payload.create({
      collection: "services",
      overrideAccess: true,
      data: {
        number: s.number,
        title: s.title,
        description: s.description,
        tags: s.tags.map((label) => ({ label })),
        order: order++,
      },
    });
  }

  console.log("→ Seeding coverage areas...");
  order = 0;
  for (const a of AREAS) {
    await payload.create({
      collection: "coverage-areas",
      overrideAccess: true,
      data: { ...a, order: order++ },
    });
  }

  console.log("→ Seeding testimonials...");
  order = 0;
  for (const t of TESTIMONIALS) {
    await payload.create({
      collection: "testimonials",
      overrideAccess: true,
      data: { ...t, order: order++ },
    });
  }

  console.log("→ Seeding process steps...");
  order = 0;
  for (const p of PROCESS_STEPS) {
    await payload.create({
      collection: "process-steps",
      overrideAccess: true,
      data: { ...p, order: order++ },
    });
  }

  console.log("→ Seeding gallery events...");
  order = 0;
  for (const g of GALLERY) {
    await payload.create({
      collection: "gallery-events",
      overrideAccess: true,
      data: { ...g, order: order++ },
    });
  }

  console.log("→ Seeding bookings...");
  for (const b of BOOKINGS) {
    await payload.create({
      collection: "bookings",
      overrideAccess: true,
      data: {
        date: new Date(b.date).toISOString(),
        eventName: b.eventName,
        venue: b.venue,
        type: b.type,
      },
    });
  }

  console.log("→ Updating globals...");
  await payload.updateGlobal({
    slug: "site-settings",
    overrideAccess: true,
    data: {
      phone: "07341 950521",
      email: "adamlewis27@gmail.com",
      mixcloudUrl: "https://www.mixcloud.com/adam-david-lewis/",
      locationTagline: "Based in Bournemouth — available South Coast & beyond",
      footerTagline:
        "Former Hed Kandi resident. Festivals, club nights, weddings and private events across Bournemouth, Dorset & the South Coast.",
      socialLinks: [
        { platform: "instagram", label: "Instagram", url: "https://instagram.com/" },
        { platform: "facebook", label: "Facebook", url: "https://facebook.com/" },
        { platform: "mixcloud", label: "Mixcloud", url: "https://www.mixcloud.com/adam-david-lewis/" },
      ],
    },
  });

  await payload.updateGlobal({
    slug: "home-hero",
    overrideAccess: true,
    data: {
      locationBadge: "Bournemouth & Dorset",
      heroLabel: "Former Hed Kandi Resident · 25+ Years",
      heroTitle: "Festivals, clubs,\nweddings — one\nsafe pair of hands.",
      heroDescription:
        "I'm Adam Lewis. Christchurch Music Festival 2026, two years on the Henley Regatta main stage, summer residency at Cameo, and regular slots at Post, Aruba, Bar So and V Nightclub — based in Bournemouth, booked across the South Coast.",
      primaryCta: { label: "Check Availability", href: "/availability" },
      secondaryCta: { label: "Listen on Mixcloud", href: "https://www.mixcloud.com/adam-david-lewis/" },
      badgeYears: "25+",
      badgeLabel: "Years on the decks — and still going",
      trustItems: [
        { label: "Former Hed Kandi resident" },
        { label: "25+ years experience" },
        { label: "Festivals, clubs & weddings" },
        { label: "Fully insured & PAT tested" },
      ],
      marqueeItems: MARQUEE.map((label) => ({ label })),
    },
  });

  await payload.updateGlobal({
    slug: "about-page",
    overrideAccess: true,
    data: {
      label: "About",
      heading: "From farm raves\nto festival stages.",
      paragraphs: [
        {
          body:
            "I got my first belt driving 70 disco decks at 13 — learning the craft on vinyl, the hard way. By 1994 I was putting on legendary raves at my family farm, and at 18 I landed my first warm-up residency at Destiny, Plymouth's biggest nightclub. I've been on the decks ever since.",
        },
        {
          body:
            "After two years as a resident at Creation in Brighton and a couple of years DJing my way around the world, I came home to Bournemouth and joined the Hed Kandi residency. Since then I've held regular slots at Post, Aruba, Bar So, V Nightclub and more — working almost every weekend across the South Coast.",
        },
        {
          body:
            "These days it's a mix of it all: Christchurch Music Festival, Henley Regatta main stage (two years running), the summer residency at Cameo's international student nights, weddings across Dorset and Hampshire, and the club nights that started it all. High-energy, all genres, no set-list — I read the room and play what works.",
        },
      ],
      byline: "Adam Lewis",
      role: "DJ · Festivals, Clubs & Events",
      stats: [
        { value: "25+", description: "Years" },
        { value: "10+", description: "Residencies" },
        { value: "5.0", description: "Rating" },
      ],
    },
  });

  await payload.updateGlobal({
    slug: "page-intros",
    overrideAccess: true,
    data: {
      residencies: {
        label: "Residencies & Career",
        heading: "25 years of regular slots,\nfrom farm raves to festivals.",
        subheading:
          "A working DJ every weekend — not a weekend warrior. Here's where you can (or could) catch me on the decks.",
      },
      services: {
        label: "Services",
        heading: "Whatever the event",
        subheading: "",
      },
      availability: {
        label: "Availability",
        heading: "Upcoming dates\n& confirmed bookings",
        subheading:
          "Dates I'm already booked for the coming months. Don't see your date? I'm probably free — get in touch and I'll confirm within 24 hours.",
      },
      reviews: {
        label: "Reviews",
        heading: "What people say",
        subheading: "",
      },
      contact: {
        label: "Get in Touch",
        heading: "Got an event?\nLet's make it happen.",
        subheading:
          "Festival, club night, wedding or private booking — drop me a line with the date, venue and what you're after. I'll come back to you within 24 hours.",
      },
    },
  });

  console.log("→ Ensuring admin user exists...");
  const users = await payload.find({ collection: "users", limit: 1, overrideAccess: true });
  if (users.totalDocs === 0) {
    const email = process.env.SEED_ADMIN_EMAIL;
    const password = process.env.SEED_ADMIN_PASSWORD;
    if (email && password) {
      await payload.create({
        collection: "users",
        overrideAccess: true,
        data: { email, password },
      });
      console.log(`   ✓ Created admin ${email}`);
    } else {
      console.log("   (skipped — set SEED_ADMIN_EMAIL + SEED_ADMIN_PASSWORD to auto-create)");
    }
  }

  console.log("✓ Seed complete");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
