/**
 * Service page copy. Matched to existing Services docs by `title`.
 * Everything here is editable in /admin → Services after seeding.
 */
export type ServiceContent = {
  title: string;
  slug: string;
  heroHeading: string;
  intro: string;
  body: string;
  faqs: { question: string; answer: string }[];
  seo: { metaTitle: string; metaDescription: string };
};

export const SERVICE_CONTENT: ServiceContent[] = [
  {
    title: "Weddings",
    slug: "wedding-dj-bournemouth",
    heroHeading: "Wedding DJ in Bournemouth & Dorset",
    intro:
      "A wedding DJ who has spent 25 years reading rooms — from Hed Kandi to the Henley Royal Regatta main stage — and builds your evening around the two of you, not a stock playlist.",
    seo: {
      metaTitle: "Wedding DJ Bournemouth & Dorset",
      metaDescription:
        "Professional wedding DJ for Bournemouth, Poole, Dorset & Hampshire. Former Hed Kandi resident, 25+ years' experience, bespoke playlists, fully insured. Quote in 24 hours.",
    },
    body: `
## A wedding DJ, not a mobile disco

There is a difference between someone who presses play and a DJ who mixes live. I have been a working DJ since 1994 — former Hed Kandi resident, two years on the Henley Royal Regatta main stage, and regular slots at Post, Aruba, Bar So and V Nightclub in Bournemouth. That is the experience I bring to your wedding: proper mixing, a feel for the room, and the confidence to change direction when the floor tells me to.

## How I plan your wedding music

Every wedding starts with a conversation. We talk through the kind of day you want, the must-plays, the absolutely-nots, and the songs that mean something to you both. From that I build a running order for the evening — first dance, the moment the floor opens, the peak, and the last song — while leaving room to react to your guests on the night.

You can send me a playlist, a handful of tracks, or nothing at all. All three work. Some couples want a tight, curated set; others want me to take the room from soul and Motown into house and club classics as the night goes on. I play open-format across every era and genre, so a mixed crowd of grandparents, school friends and colleagues all get their moment.

## What is included

- **Professional sound** sized to your venue and guest count, with a clean, discreet setup.
- **Lighting** to suit the room — from subtle mood lighting to a full dance floor.
- **Ceremony and drinks-reception music** if you want one supplier for the whole day.
- **Wireless microphone** for speeches and announcements.
- **Early arrival and venue liaison** so everything is set before your guests walk in.
- **Public liability insurance and PAT-tested equipment**, which most Dorset and Hampshire venues now require.

## Where I play weddings

I am based in Bournemouth and regularly DJ weddings across [Poole and Sandbanks](/areas/poole), [Christchurch](/areas/christchurch), the [New Forest](/areas/new-forest), [Wimborne](/areas/wimborne), [Dorchester](/areas/dorchester) and the Purbecks, as well as [Southampton](/areas/southampton), [Winchester](/areas/winchester), [Salisbury](/areas/salisbury-wiltshire) and the wider South Coast. Country houses, barns, hotels, marquees, beach venues — I have worked in all of them and will liaise with your venue directly on access, power and timings.

## Getting a quote

Wondering what a wedding DJ costs in Dorset? Read the [wedding DJ cost guide](/wedding-dj-cost-dorset), then [send me your date and venue](/contact). I reply within 24 hours with availability and a clear, no-obligation quote.
`,
    faqs: [
      {
        question: "How far in advance should we book a wedding DJ in Bournemouth?",
        answer:
          "Popular summer Saturdays in Dorset and Hampshire go 9–12 months ahead, so book as soon as your venue is confirmed. Off-peak dates and weekdays are often available with a few weeks' notice — it is always worth asking.",
      },
      {
        question: "Can we choose the music for our wedding?",
        answer:
          "Yes. Send a playlist, a list of must-plays and do-not-plays, or just describe the vibe. I build the evening around your choices and mix in what I know works for a wedding crowd, so the floor stays full without the set sounding generic.",
      },
      {
        question: "Do you take requests from guests on the night?",
        answer:
          "That is up to you. Most couples are happy for me to take sensible requests that fit the evening; others prefer a set they have signed off. Tell me your preference beforehand and I will manage it on the night.",
      },
      {
        question: "Are you insured and is your equipment PAT tested?",
        answer:
          "Yes. I carry public liability insurance and all equipment is PAT tested. Most wedding venues in Dorset and Hampshire ask for both, and I can send certificates to your venue coordinator ahead of the day.",
      },
      {
        question: "Can you provide music for the ceremony and drinks reception too?",
        answer:
          "Yes. I can cover the ceremony, drinks reception and wedding breakfast with background music and a wireless microphone for speeches, then move into the evening party — one supplier for the whole day.",
      },
      {
        question: "What time do you arrive and how long do you play?",
        answer:
          "I arrive well before guests so the setup is finished and sound-checked quietly. A typical evening set runs from around 7.30pm until midnight, but timings are flexible and agreed with you and the venue in advance.",
      },
    ],
  },
  {
    title: "Corporate",
    slug: "corporate-event-dj",
    heroHeading: "Corporate Event DJ — Bournemouth, Dorset & Hampshire",
    intro:
      "Polished, reliable entertainment for awards dinners, conferences, product launches, Christmas parties and team celebrations — with the experience to read a room full of colleagues and clients.",
    seo: {
      metaTitle: "Corporate Event DJ Bournemouth & Hampshire",
      metaDescription:
        "Corporate DJ for awards nights, conferences, launches and Christmas parties across Bournemouth, Poole, Southampton and the South Coast. Insured, 25+ years' experience.",
    },
    body: `
## Entertainment that matches the occasion

Corporate events need a different touch. The tone has to be right from the moment guests arrive — background music during the drinks reception, something to lift the room between courses, and then a dance floor that actually fills once the formalities are done. I have played awards dinners, conference closing parties, product launches and company Christmas parties, and I know how to move a mixed crowd of colleagues, clients and partners without ever pulling focus from the event itself.

## What you can expect

- **A single point of contact** from booking to the last track, with a quick reply to every email.
- **Professional-grade sound and lighting** scaled to the venue, from a boardroom drinks reception to a 500-guest ballroom.
- **Microphones and audio support** for speeches, presentations and awards.
- **A clean, discreet setup** that fits the look of the room and any branding.
- **Public liability insurance and PAT certificates** available for your venue or events team.
- **Punctual, professional presence** throughout — I arrive early and liaise with the venue directly.

## Types of corporate event I cover

Awards evenings and gala dinners, conference parties, product and store launches, summer socials, Christmas parties, charity fundraisers, client hospitality and long-service celebrations. I work with event agencies and in-house teams across [Bournemouth](/areas/bournemouth), [Poole](/areas/poole), [Southampton](/areas/southampton), [Winchester](/areas/winchester) and the wider South Coast, and am happy to travel further for the right event.

## Music for a professional crowd

Twenty-five years of residencies — including Hed Kandi and the Henley Royal Regatta main stage — mean I can play elegant, unobtrusive sets early in the evening and then move seamlessly into party music when it is time. Open-format, every era, and always read from the room rather than a fixed list. If your event has a theme or a brand playlist, send it over and I will build around it.

## Book a corporate DJ

[Send the date, venue and outline of the event](/contact) and I will come back within 24 hours with availability and a straightforward quote.
`,
    faqs: [
      {
        question: "Do you provide microphones and sound for speeches and presentations?",
        answer:
          "Yes. Wireless microphones and a PA suitable for speeches, awards and presentations are included, and I can supply audio for slideshows or walk-on music if you need it.",
      },
      {
        question: "Can you play background music during dinner and then a party afterwards?",
        answer:
          "That is the usual format. I play tasteful background music through arrival and dinner, handle any announcements, then open the dance floor once the formalities finish.",
      },
      {
        question: "Are you insured for corporate venues and hotels?",
        answer:
          "Yes. I hold public liability insurance and all equipment is PAT tested. Certificates can be sent to your venue or events team in advance.",
      },
      {
        question: "Can you invoice the company and work with our events agency?",
        answer:
          "Yes. I regularly work alongside event agencies and in-house teams, and can invoice the business directly with agreed terms.",
      },
      {
        question: "Which areas do you cover for corporate events?",
        answer:
          "I am based in Bournemouth and cover Poole, Christchurch, Southampton, Winchester, Salisbury and the wider Dorset and Hampshire area, with travel further afield by arrangement.",
      },
    ],
  },
  {
    title: "Private Events",
    slug: "private-party-dj",
    heroHeading: "Birthday & Private Party DJ — Bournemouth, Poole & Dorset",
    intro:
      "Milestone birthdays, anniversaries, engagement parties and house parties — personalised sets built around your guests, from intimate garden gatherings to full-on celebrations.",
    seo: {
      metaTitle: "Party DJ Bournemouth & Poole — Birthdays & Private Events",
      metaDescription:
        "DJ for 30th, 40th, 50th birthdays, anniversaries and house parties across Bournemouth, Poole, Sandbanks and Dorset. Personalised sets, own sound & lighting, insured.",
    },
    body: `
## A party that sounds like you

A private party is personal. The music should reflect the person it is for, the people in the room and the mood you want — not a generic party playlist. Before every private event we talk through the guest of honour's favourites, the eras your guests will respond to, and any specific moments you want built in. Then I put together a set that starts where it needs to and builds through the night.

## Events I regularly play

- **Milestone birthdays** — 18th, 21st, 30th, 40th, 50th, 60th and beyond
- **Anniversaries and engagement parties**
- **House parties and garden parties**, including marquee events
- **Family celebrations and reunions**
- **Summer parties, beach parties and boat parties** along the Dorset coast

Recent bookings include a private 40th in Sandbanks and summer garden parties across the New Forest and Dorset.

## Sound and lighting for any space

Every event gets professional-grade sound sized to the space — a living room and garden need something very different from a hired hall or marquee — and lighting to match, whether that is a subtle wash for an anniversary dinner or a proper dance floor for a big birthday. I bring everything, set up early and discreetly, and pack down quietly at the end.

## Music across every era

Twenty-five years behind the decks — Hed Kandi, Henley Royal Regatta, and residencies at Post, Aruba, Bar So and V Nightclub in Bournemouth — mean I can play anything from 70s soul and disco through 80s and 90s classics, R&B, house and current chart, and mix between them properly. Mixed-age crowds are a speciality: everyone gets their moment on the floor.

## Where I cover

Based in Bournemouth, regularly booked for private parties in [Poole and Sandbanks](/areas/poole), [Christchurch](/areas/christchurch), [Wimborne](/areas/wimborne), [Ringwood](/areas/ringwood), the [New Forest](/areas/new-forest), [Lymington](/areas/lymington) and across Dorset and Hampshire.

[Tell me about your party](/contact) and I will come back within 24 hours with a no-obligation quote.
`,
    faqs: [
      {
        question: "How much space do you need for a house or garden party?",
        answer:
          "Surprisingly little. A compact setup needs roughly a two-metre-square space and a standard plug socket. For gardens and marquees I will check access and power with you beforehand and bring what is needed.",
      },
      {
        question: "Can you play music from a specific era or genre for a themed party?",
        answer:
          "Yes. 70s disco, 80s, 90s, house classics, R&B, indie — whatever the theme, I build the set around it while keeping the floor moving.",
      },
      {
        question: "Can the birthday person or guests send song requests in advance?",
        answer:
          "Absolutely. Many clients collect requests from guests before the night and send them over; I weave them into the set so people hear their picks without it turning into a jukebox.",
      },
      {
        question: "How long do you play for at a private party?",
        answer:
          "A typical private party runs four to five hours of music, but timings are flexible. Tell me your start and finish times and I will quote accordingly.",
      },
      {
        question: "Do you DJ for parties in Sandbanks and Poole?",
        answer:
          "Yes — Poole and Sandbanks are ten minutes from my Bournemouth base and I play private events there regularly, including waterside and beach venues.",
      },
    ],
  },
  {
    title: "Bars & Venues",
    slug: "club-and-bar-dj",
    heroHeading: "Club & Bar DJ — Resident at Post, Aruba, Bar So & V Nightclub",
    intro:
      "Regular and guest slots for bars, restaurants and nightlife venues across Bournemouth and Poole. Former Hed Kandi resident, current summer residency at Cameo, and a working DJ almost every weekend.",
    seo: {
      metaTitle: "Club & Bar DJ Bournemouth — Residencies & Guest Slots",
      metaDescription:
        "Club and bar DJ for residencies, guest slots and opening nights in Bournemouth and Poole. Former Hed Kandi resident; current slots at Post, Aruba, Bar So, V and Cameo.",
    },
    body: `
## A resident, not a one-off

Bars and clubs need a DJ who understands the venue's brand, the crowd it draws and how a night actually builds — from early-evening background to peak-time. I have held regular residencies across Bournemouth's nightlife for years: Post, Aruba, Bar So and V Nightclub, plus the summer international student nights at Cameo. Before that, Hed Kandi, Creation in Brighton and Destiny in Plymouth.

## What venues get

- **Consistency** — the same standard every week, with sets shaped to your venue rather than a personal showcase.
- **Adaptability** — house, commercial, R&B, disco, indie or open-format; I play to your brand and your customers.
- **Reliability** — I turn up early, work with your management and bar team, and read the room all night.
- **Professional presence** — insured, PAT-tested equipment where needed, and comfortable on any house system.

## Bookings I take

- Weekly and monthly residencies
- Guest slots and cover for your existing residents
- Opening nights, relaunches and brand events
- Bank holiday and seasonal programming — summer terraces, Christmas and New Year
- Restaurant and hotel bar sets where the music needs to sit under conversation early and lift later

## Bournemouth, Poole and the South Coast

Most of my venue work is in [Bournemouth](/areas/bournemouth) town centre and the beachfront, with regular bookings in [Poole](/areas/poole), [Christchurch](/areas/christchurch) and [Southampton](/areas/southampton). Promoters and venue managers can check [current residencies](/residencies) and [upcoming dates](/availability), or [get in touch](/contact) directly to talk about a slot.
`,
    faqs: [
      {
        question: "Do you play on the venue's own system or bring your own?",
        answer:
          "Either. I am comfortable on any house setup and bring my own controller or media; for venues without a system I can supply full sound and lighting.",
      },
      {
        question: "What genres do you play in clubs and bars?",
        answer:
          "Open-format. House and club classics are the backbone, but I play commercial, R&B, disco and indie depending on the venue and the night, and will match your brand rather than impose a sound.",
      },
      {
        question: "Are you available for regular weekly residencies?",
        answer:
          "Yes. I currently hold regular slots at several Bournemouth venues and take on new weekly or monthly residencies where the diary allows. Get in touch to discuss availability.",
      },
      {
        question: "Can you cover a last-minute guest slot?",
        answer:
          "Often, yes. Bournemouth and Poole venues can usually reach me the same week — send the date and I will confirm quickly.",
      },
    ],
  },
  {
    title: "Festivals & Outdoor",
    slug: "festival-dj",
    heroHeading: "Festival & Outdoor Event DJ — Dorset, Hampshire & the South Coast",
    intro:
      "Festival stages, beach parties, summer events and outdoor parties along the South Coast. Two years on the Henley Royal Regatta main stage and booked for Christchurch Music Festival.",
    seo: {
      metaTitle: "Festival & Outdoor Event DJ — Dorset & South Coast",
      metaDescription:
        "Festival DJ for outdoor stages, beach parties and summer events in Dorset, Hampshire and the South Coast. Henley Royal Regatta main stage, Christchurch Music Festival.",
    },
    body: `
## Built for big crowds and open air

Festival and outdoor sets are a different discipline: bigger PA systems, longer sets, crowds that arrive in waves and weather that changes the plan. I have been doing it since the farm raves I put on in 1994, through two consecutive years on the Henley Royal Regatta main stage, to festival bookings including Christchurch Music Festival. It is the part of the job I enjoy most.

## Events I play

- **Festival stages** — main stage, dance tents and after-hours slots
- **Beach parties and seafront events** along the Bournemouth, Poole and Dorset coast
- **Summer parties, fetes and community events**
- **Marquee and garden parties** at private homes and estates
- **Boat parties and harbour events**
- **Regatta and sporting-event hospitality**

## Working with organisers and production teams

I am used to working alongside stage managers, sound engineers and production crews, hitting changeover times and playing to a brief. I can bring my own DJ setup to plug into a house system or supply sound and lighting for smaller outdoor events, and I hold public liability insurance with PAT-tested equipment for event licensing.

## Music that moves a festival crowd

Open-format with a house and club-classics core — the sound that came from Hed Kandi and Bournemouth residencies at Post, Aruba, Bar So and V Nightclub. Daytime sets sit warm and melodic; evening slots build to full-on party. I read the crowd rather than run a fixed list.

Organisers and promoters across [Dorset](/areas/dorset), [Hampshire](/areas/hampshire) and the South Coast can [check upcoming dates](/availability) or [get in touch](/contact) to talk about a booking.
`,
    faqs: [
      {
        question: "Can you supply sound for an outdoor event or do you need a stage system?",
        answer:
          "Both. For festival stages I plug into the production system; for smaller outdoor events, beach parties and gardens I can bring a full PA and lighting. Tell me the site and expected numbers and I will advise.",
      },
      {
        question: "Do you have insurance for festival and licensed events?",
        answer:
          "Yes. Public liability insurance and PAT certificates are available for organisers and licensing authorities.",
      },
      {
        question: "How long can you play at a festival or outdoor party?",
        answer:
          "Anything from a one-hour guest slot to a full day. Long sets are normal for me — regattas and festival stages have had me on for many hours at a time.",
      },
      {
        question: "What happens if the weather turns?",
        answer:
          "Outdoor equipment needs cover and a stable power supply; I will discuss contingency with you beforehand. If the event moves indoors or under a marquee, I adapt the setup on the day.",
      },
    ],
  },
  {
    title: "Charity & Galas",
    slug: "charity-gala-dj",
    heroHeading: "Charity Ball & Gala DJ — Dorset & Hampshire",
    intro:
      "Elegant entertainment for fundraisers, black-tie galas and charity balls — the right tone from arrival to close, with a professional presence throughout.",
    seo: {
      metaTitle: "Charity Ball & Gala DJ — Dorset & Hampshire",
      metaDescription:
        "Professional DJ for charity balls, black-tie galas, fundraising dinners and auctions across Bournemouth, Dorset and Hampshire. Speech and auction audio included.",
    },
    body: `
## Elegant from the first guest to the last dance

Charity balls and galas have a running order to respect: arrival drinks, dinner, speeches, an auction or raffle, and then a party that rewards guests for their generosity. I have DJed events like these for years and know how to hold a sophisticated tone early, support the organisers through the formal part of the evening, and then fill the floor when the room is ready.

## What I bring to a fundraiser

- **Background music** through drinks and dinner that sits under conversation
- **Wireless microphones and audio support** for speeches, auctioneers and presentations
- **Walk-up and sting music** for awards, prize draws and pledge moments
- **A dance floor set** that suits a black-tie crowd — classy, familiar, and building through the night
- **Professional appearance and conduct** appropriate to formal venues
- **Public liability insurance and PAT-tested equipment**

## Working with committees and organisers

Most charity events are run by volunteers or a small committee juggling a lot. I make the entertainment side simple: one contact, a clear quote, early arrival, liaison with the venue and no surprises on the night. If a compere or auctioneer is involved I will coordinate cues and timings with them directly.

## Venues and areas

I play galas and fundraisers at hotels, country houses and function venues across [Bournemouth](/areas/bournemouth), [Poole](/areas/poole), the [New Forest](/areas/new-forest), [Southampton](/areas/southampton), [Winchester](/areas/winchester) and the wider Dorset and Hampshire area.

[Get in touch](/contact) with your date and venue and I will reply within 24 hours.
`,
    faqs: [
      {
        question: "Can you provide the microphone and sound for the charity auction and speeches?",
        answer:
          "Yes. Wireless microphones and PA for speeches, auctioneers and presentations are included, and I will coordinate cues with your compere or auctioneer.",
      },
      {
        question: "Do you offer a reduced rate for charity events?",
        answer:
          "Every event is quoted individually. Tell me about the charity, the venue and the format, and I will always try to help where the diary allows.",
      },
      {
        question: "What kind of music works for a black-tie gala?",
        answer:
          "Early in the evening, soul, jazz-influenced and mellow house that sits under conversation; later, familiar floor-fillers across the decades. I read the room and adjust the energy to the crowd.",
      },
      {
        question: "Are you insured for hotel and country-house venues?",
        answer:
          "Yes. Public liability insurance and PAT certificates are available in advance for your venue or committee.",
      },
    ],
  },
];
