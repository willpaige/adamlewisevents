/**
 * Guide pages rendered at /<slug>. Matched by slug; editable in /admin → Pages.
 */
export type PageContent = {
  title: string;
  slug: string;
  label: string;
  heroHeading: string;
  intro: string;
  body: string;
  faqs: { question: string; answer: string }[];
  showFaqsFirst?: boolean;
  seo: { metaTitle: string; metaDescription: string };
};

export const PAGE_CONTENT: PageContent[] = [
  {
    title: "Wedding DJ Cost Guide",
    slug: "wedding-dj-cost-dorset",
    label: "Pricing guide",
    heroHeading: "How Much Does a Wedding DJ Cost in Dorset & the South Coast?",
    intro:
      "A straight answer from a working wedding DJ: what couples in Dorset, Hampshire and the South Coast typically pay, what changes the price, and the questions worth asking before you book.",
    seo: {
      metaTitle: "Wedding DJ Cost in Dorset & the South Coast (2026 Guide)",
      metaDescription:
        "How much does a wedding DJ cost in Dorset, Bournemouth and Hampshire? Typical UK price ranges by package, what drives the price, hidden extras and when to book.",
    },
    body: `
## The short answer

Most couples in the UK pay **between £500 and £1,250** for a professional wedding DJ, and the national average sits at roughly **£1,100** once full-day packages are included. The South Coast — Dorset, Hampshire and Wiltshire — generally sits close to the national average: noticeably cheaper than London and the South East, a little above the Midlands and the North.

The wide range is not random. It reflects how long the DJ is working, the level of equipment and lighting, how much planning goes into your music, and whether you are booking a full-time professional or someone doing it at weekends.

## Typical wedding DJ prices in the UK

- **Budget or part-time DJ — around £350 to £650.** A four-to-five-hour evening set, basic sound and simple lighting. Usually a set list rather than live mixing, and often no insurance or PAT certificates.
- **Professional evening DJ — around £500 to £900.** A five-hour evening, quality PA sound scaled to the room, professional lighting, a wireless microphone, public liability insurance and PAT-tested equipment. This is the most common booking for a Dorset or Hampshire wedding.
- **Full-day package — around £800 to £1,250.** Ceremony music, background music through drinks and the wedding breakfast, microphone for speeches, then the full evening party. One supplier from start to finish.
- **Premium production — £1,400 to £2,200 and up.** Club-standard sound, custom lighting design, mood uplighting, early setup and extra crew.
- **DJ plus live musicians — £1,200 to £3,500 and up.** A DJ working with a saxophonist, percussionist or vocalist for a club or festival feel.

These are UK-wide ranges drawn from industry guides and what couples report paying. Every DJ quotes differently, so treat them as a sanity check rather than a price list.

## What actually changes the price

- **Hours on site.** A DJ playing from 7.30pm to midnight is a five-hour job; add the ceremony and drinks reception and it becomes nine or ten hours, plus setup and pack-down.
- **The date.** Saturdays from May to September are the most in-demand dates on the South Coast and are priced accordingly. A Friday, Sunday or midweek date, or an autumn or winter wedding, can save a meaningful amount.
- **Sound and lighting.** A hotel function room with 80 guests needs very different equipment from a 200-guest marquee or a barn with a high ceiling. The quote should reflect what your venue actually needs, not a generic package.
- **Planning and personalisation.** A DJ who talks through your music, builds a running order and mixes live is doing more work than one who plays a playlist — and it shows on the dance floor.
- **Experience.** A full-time professional with decades of weddings and residencies behind them will usually cost more than a part-timer, and will usually handle the unexpected far better.
- **Travel.** Most South Coast DJs include travel within their local area. For venues an hour or more away, expect a travel charge or accommodation for late finishes.

## Extras and hidden fees to ask about

A quote that looks cheap can grow. Before you book, ask whether the price includes:

- Travel to your venue, and any accommodation for a late finish
- Setup and pack-down time, and early setup if the room has to be ready before guests arrive
- Overtime if the party runs past the agreed finish — typically £50 to £150 an hour
- A wireless microphone for speeches
- Ceremony and drinks-reception music, if you want them
- Lighting — dance-floor lighting, uplighting and any extras
- Public liability insurance and PAT certificates, which most Dorset and Hampshire venues now require from suppliers
- A deposit and a clear cancellation policy

## Is a wedding DJ worth it?

For most couples, the evening party is where the wedding is remembered, and the dance floor is the difference between guests leaving at ten and guests still dancing at midnight. A good DJ reads the room, manages the energy, handles the announcements and solves the problems you never hear about. That is what you are paying for — not just the speakers.

## When to book

Popular summer Saturdays in Dorset and Hampshire are often booked nine to twelve months ahead. Booking early locks in the date and, usually, the price. Off-peak dates are more flexible and can often be confirmed with a few weeks' notice.

## What I include

I quote every wedding individually because every wedding is different, but the essentials are always in: professional sound sized to your venue, lighting to suit the room, a wireless microphone, early arrival and venue liaison, public liability insurance and PAT-tested equipment, and a planning conversation before the day. Ceremony and drinks-reception music can be added so you have one supplier for the whole day.

For a quote for your date and venue, [send me the details](/contact) — I reply within 24 hours with a clear, no-obligation figure. You can also read about how I approach [wedding DJing](/services/wedding-dj-bournemouth) or see what previous couples have said on the [reviews page](/reviews).
`,
    faqs: [
      {
        question: "How much does a wedding DJ cost in Dorset?",
        answer:
          "Most professional wedding DJs in Dorset and the South Coast quote between £500 and £1,200 for an evening, with full-day packages that include the ceremony and drinks reception typically £800 to £1,250. Premium production and DJ-plus-musician packages cost more. Prices sit close to the UK average and below London.",
      },
      {
        question: "How much should a DJ charge for 4 hours in the UK?",
        answer:
          "For a four-hour evening set a professional UK DJ typically charges £400 to £800, depending on equipment, experience and the date. Part-time DJs can be cheaper; premium production is more. Most wedding evenings run five hours, so ask for a quote based on your actual timings.",
      },
      {
        question: "How much does a 5-hour wedding DJ cost?",
        answer:
          "A five-hour evening — usually 7.30pm to midnight — is the standard wedding booking and typically costs £500 to £900 from a professional DJ in Dorset or Hampshire, including sound, lighting, a microphone and insurance.",
      },
      {
        question: "Why do wedding DJ prices vary so much?",
        answer:
          "Hours on site, the date, the equipment your venue needs, how much planning is involved and the DJ's experience all move the price. A part-time DJ with basic kit and a set list costs a fraction of a full-time professional with quality sound, lighting and live mixing — and the results are very different too.",
      },
      {
        question: "Do wedding DJs charge more on Saturdays and in summer?",
        answer:
          "Often, yes. Peak Saturdays from May to September are the most in-demand dates on the South Coast. Fridays, Sundays, weekdays and autumn or winter dates are frequently cheaper and easier to secure.",
      },
      {
        question: "Should a wedding DJ have insurance?",
        answer:
          "Yes. Most Dorset and Hampshire venues require suppliers to hold public liability insurance and have PAT-tested electrical equipment. Ask any DJ for their certificates before you book — a professional will have them ready.",
      },
      {
        question: "Is it cheaper to book a DJ through a wedding band?",
        answer:
          "Some bands offer a basic DJ service between sets for a small add-on fee. It can be good value for background music, but it is rarely the same as a dedicated DJ mixing live for the whole evening. Decide how important the dance floor is to you.",
      },
    ],
  },
  {
    title: "FAQs",
    slug: "faq",
    label: "Frequently asked questions",
    heroHeading: "DJ Hire FAQs — Bournemouth, Dorset & Hampshire",
    intro:
      "Straight answers to the questions couples, party hosts, venues and event organisers ask most often before booking a DJ on the South Coast.",
    showFaqsFirst: true,
    seo: {
      metaTitle: "DJ Hire FAQs — Bournemouth, Dorset & Hampshire",
      metaDescription:
        "Common questions about hiring a DJ in Bournemouth, Dorset and Hampshire: booking lead times, what's included, insurance, requests, set lengths, deposits and travel.",
    },
    body: `
## Still have a question?

If it is not covered above, [send me a message](/contact) with your date, venue and what you have in mind. I reply within 24 hours. You can also read more about [weddings](/services/wedding-dj-bournemouth), [private parties](/services/private-party-dj), [corporate events](/services/corporate-event-dj) and the [areas I cover](/areas), or check the [wedding DJ cost guide](/wedding-dj-cost-dorset) for a sense of budget.
`,
    faqs: [
      {
        question: "How far in advance should I book a DJ?",
        answer:
          "For a summer Saturday wedding in Dorset or Hampshire, nine to twelve months ahead is sensible. Corporate Christmas parties go early too — enquire in the autumn. Private parties and off-peak dates can often be confirmed with a few weeks' notice, so it is always worth asking.",
      },
      {
        question: "What areas do you cover?",
        answer:
          "I am based in Bournemouth and regularly DJ across Poole, Christchurch, Wimborne, Dorchester and the Purbecks in Dorset; the New Forest, Southampton, Winchester, Lymington and Ringwood in Hampshire; and Salisbury and south Wiltshire. Travel within these areas is normally included in the quote, and I go further for the right event.",
      },
      {
        question: "What is included in a booking?",
        answer:
          "Professional sound sized to the venue, lighting to suit the room, a wireless microphone for speeches or announcements, early arrival and setup, liaison with your venue, public liability insurance and PAT-tested equipment, and a planning conversation about the music beforehand.",
      },
      {
        question: "Are you insured and PAT tested?",
        answer:
          "Yes. I hold public liability insurance and all equipment is PAT tested. Most venues in Dorset and Hampshire require both from suppliers, and I can send certificates to your venue coordinator ahead of the event.",
      },
      {
        question: "How long do you play for?",
        answer:
          "A typical evening set runs around five hours — for example 7.30pm to midnight — but timings are flexible. Full-day wedding packages cover the ceremony, drinks reception and wedding breakfast as well. Tell me your start and finish times and I will quote accordingly.",
      },
      {
        question: "Can we choose the music?",
        answer:
          "Yes. Send a playlist, a list of must-plays and do-not-plays, or just describe the mood you want. I build the set around your choices and mix in what I know works for the crowd, so the floor stays full without the set sounding generic.",
      },
      {
        question: "Do you take requests on the night?",
        answer:
          "That is your call. Most clients are happy for me to take sensible requests that fit the evening; some prefer a set they have signed off. Let me know your preference and I will manage it on the night.",
      },
      {
        question: "What kind of music do you play?",
        answer:
          "Open-format across every era and genre — soul, disco, 80s and 90s, R&B, indie, house and club classics, current chart. My background is house and club nights (Hed Kandi, Post, Aruba, Bar So, V Nightclub), but weddings and parties get whatever the room needs.",
      },
      {
        question: "How much does a DJ cost?",
        answer:
          "It depends on hours, date, equipment and the type of event. As a guide, professional wedding DJs on the South Coast typically quote £500 to £1,200 for an evening. Every event is quoted individually — send the details and I will reply within 24 hours with a clear figure. See the wedding DJ cost guide for more.",
      },
      {
        question: "Do you need a deposit?",
        answer:
          "Yes — a deposit secures the date and the balance is due before the event. The exact terms are set out clearly in the booking confirmation so there are no surprises.",
      },
      {
        question: "Do you provide microphones for speeches?",
        answer:
          "Yes. A wireless microphone is included for speeches, toasts and announcements, and I can supply additional audio support for presentations or awards at corporate events.",
      },
      {
        question: "What do you need from the venue?",
        answer:
          "A standard plug socket near the performance area, roughly a two-metre-square space for a compact setup (more for larger rooms), and access to load in before guests arrive. I liaise with the venue directly on all of this.",
      },
      {
        question: "What happens if you are ill or cannot make it?",
        answer:
          "In 25 years it has not happened, but I have a network of trusted professional DJs on the South Coast and would arrange a suitable replacement and brief them fully on your event.",
      },
      {
        question: "Do you DJ for venues and bars as well as private events?",
        answer:
          "Yes. I hold residencies at several Bournemouth venues and take on guest slots, opening nights and seasonal programming. Venue managers and promoters can get in touch directly.",
      },
    ],
  },
];
