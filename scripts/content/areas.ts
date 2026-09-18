/**
 * Area page copy. Matched to existing Coverage Area docs by `name`; new areas
 * (Dorset, Hampshire) are created. Editable in /admin → Coverage Areas.
 *
 * Venue lists deliberately only include places Adam has actually played; he can
 * add more in the CMS.
 */
export type AreaContent = {
  name: string;
  detail: string;
  slug: string;
  schemaType: "City" | "AdministrativeArea";
  heading: string;
  intro: string;
  body: string;
  nearbyVenues?: { name: string; type: "wedding" | "club" | "hotel" | "festival" | "other"; url?: string }[];
  faqs: { question: string; answer: string }[];
  seo: { metaTitle: string; metaDescription: string };
  order?: number;
};

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const TRAVEL_FAQ = (place: string, mins: string) => ({
  question: `Do you charge travel to ${place}?`,
  answer: `${cap(place)} is around ${mins} from my base in Bournemouth. Travel within Dorset and Hampshire is normally included in the quote; I will always confirm the full price up front with no hidden extras.`,
});

const INSURED_FAQ = {
  question: "Are you insured and PAT tested for venues in this area?",
  answer:
    "Yes. I hold public liability insurance and all equipment is PAT tested. Certificates can be sent to your venue in advance — most hotels, country houses and barns ask for them.",
};

export const AREA_CONTENT: AreaContent[] = [
  {
    name: "Bournemouth",
    detail: "Home base",
    slug: "bournemouth",
    schemaType: "City",
    heading: "DJ in Bournemouth — Weddings, Parties, Clubs & Events",
    intro:
      "Bournemouth is home. I have held residencies at Post, Aruba, Bar So, V Nightclub and Cameo, and DJ weddings, birthdays and corporate events across the town, the seafront and the surrounding BH postcodes almost every weekend.",
    seo: {
      metaTitle: "Bournemouth DJ — Weddings, Parties, Corporate & Clubs",
      metaDescription:
        "Professional DJ in Bournemouth for weddings, birthdays, corporate events and club nights. Former Hed Kandi resident, resident at Post, Aruba, Bar So & V. 5-star rated.",
    },
    body: `
## A Bournemouth DJ you have probably already heard

If you have been out in Bournemouth in the last few years there is a good chance you have danced to one of my sets. I am a resident at Post, Aruba, Bar So and V Nightclub, and hold the summer residency at Cameo's international student nights. Before that: Hed Kandi, Creation in Brighton, Destiny in Plymouth, and a couple of years DJing around the world. Twenty-five years on the decks, all told.

## Weddings and private events in Bournemouth

Being local matters for a wedding or party. I know the town's hotels, seafront venues, function rooms and the clifftop and Westbourne addresses that host garden parties — and I know the access, parking and noise-limit quirks that come with them. No travel time to worry about, and I can meet you for a coffee to plan the music if you would like.

I DJ [weddings](/services/wedding-dj-bournemouth), [milestone birthdays and private parties](/services/private-party-dj), [corporate events](/services/corporate-event-dj) and [charity galas](/services/charity-gala-dj) all over Bournemouth, from Boscombe and Southbourne through the town centre to Westbourne, Talbot Woods and Branksome.

## Bars, clubs and venues

Venue managers and promoters: I take residencies, guest slots, opening nights and seasonal programming across the town. See the [club and bar DJ page](/services/club-and-bar-dj), [current residencies](/residencies) or [upcoming dates](/availability).

## Beyond the town

Ten minutes gets me to [Poole and Sandbanks](/areas/poole) or [Christchurch](/areas/christchurch); half an hour to the [New Forest](/areas/new-forest), [Wimborne](/areas/wimborne) or [Ringwood](/areas/ringwood). The whole of [Dorset](/areas/dorset) and [Hampshire](/areas/hampshire) is regular ground.

[Get in touch](/contact) with your date and venue — I reply within 24 hours.
`,
    nearbyVenues: [
      { name: "Post", type: "club" },
      { name: "Aruba", type: "club" },
      { name: "Bar So", type: "club" },
      { name: "V Nightclub", type: "club" },
      { name: "Cameo", type: "club" },
    ],
    faqs: [
      {
        question: "Which Bournemouth venues have you DJed at?",
        answer:
          "I am a resident at Post, Aruba, Bar So and V Nightclub and hold the summer residency at Cameo, alongside weddings and private events at hotels and function venues across the town.",
      },
      {
        question: "Do you DJ weddings in Bournemouth as well as clubs?",
        answer:
          "Yes — weddings are a big part of what I do. The same live-mixing skills that fill a club floor keep a wedding floor full, but the planning is completely bespoke to the couple.",
      },
      {
        question: "How quickly can you confirm a date in Bournemouth?",
        answer:
          "Usually within 24 hours. Send the date and venue through the contact form and I will come back with availability and a quote.",
      },
      INSURED_FAQ,
    ],
  },
  {
    name: "Poole",
    detail: "Harbour & Sandbanks",
    slug: "poole",
    schemaType: "City",
    heading: "Wedding & Party DJ in Poole & Sandbanks",
    intro:
      "Ten minutes from my Bournemouth base. Waterside weddings, Sandbanks birthdays, harbour boat parties and corporate events across Poole, Canford Cliffs, Lilliput and Hamworthy.",
    seo: {
      metaTitle: "Wedding & Party DJ Poole & Sandbanks",
      metaDescription:
        "DJ for weddings, birthdays, boat parties and corporate events in Poole, Sandbanks, Canford Cliffs and Lilliput. Bournemouth-based, 25+ years' experience, insured.",
    },
    body: `
## Poole, Sandbanks and the harbour

Poole is on my doorstep and some of my favourite bookings happen here — private parties on Sandbanks, weddings overlooking the harbour, and summer events on the quay. Recent dates include a private 40th birthday in Sandbanks, and I am regularly across in Canford Cliffs, Lilliput, Branksome Park and Hamworthy.

## Weddings in Poole

Poole's wedding venues range from waterside hotels and harbour-view function rooms to marquees on private lawns and the beach. Each needs a slightly different approach to sound and setup, and I will liaise with your venue directly on access, power and timings. Read more about how I plan [wedding music](/services/wedding-dj-bournemouth), then send me your date.

## Parties and boat events

Sandbanks and the harbour host some of the best private parties on the South Coast. I DJ milestone birthdays, anniversaries and summer garden parties, and I am experienced with boat and harbour events where power, space and timings are tighter. See [private party DJ](/services/private-party-dj) for what is included.

## Corporate events and venues

Businesses across Poole book me for Christmas parties, awards dinners and client events, and local bars and restaurants for guest slots and seasonal programming. See [corporate event DJ](/services/corporate-event-dj) and [club and bar DJ](/services/club-and-bar-dj).

[Get in touch](/contact) with the date and venue — I reply within 24 hours.
`,
    nearbyVenues: [{ name: "Sandbanks (private events)", type: "other" }],
    faqs: [
      TRAVEL_FAQ("Poole", "10–15 minutes"),
      {
        question: "Do you DJ on boats and at harbour venues in Poole?",
        answer:
          "Yes. Boat and harbour events need compact equipment and careful power planning; I have done them before and will check the practicalities with the operator ahead of the day.",
      },
      {
        question: "Can you DJ a wedding at a Sandbanks beach venue?",
        answer:
          "Yes. Beach and waterside venues are a regular booking. I bring sound suited to open or semi-open spaces and liaise with the venue on noise limits and finish times.",
      },
      INSURED_FAQ,
    ],
  },
  {
    name: "Christchurch",
    detail: "Dorset",
    slug: "christchurch",
    schemaType: "City",
    heading: "Wedding & Event DJ in Christchurch, Dorset",
    intro:
      "Booked for Christchurch Music Festival and a regular at weddings and parties across Christchurch, Highcliffe, Mudeford and Burton — fifteen minutes from my Bournemouth base.",
    seo: {
      metaTitle: "Wedding & Event DJ Christchurch, Dorset",
      metaDescription:
        "DJ for weddings, parties and events in Christchurch, Highcliffe, Mudeford and Burton. Christchurch Music Festival booking, 25+ years' experience, fully insured.",
    },
    body: `
## Christchurch and the coast

Christchurch is a fifteen-minute drive from home and somewhere I play often — most notably a festival booking at Christchurch Music Festival, alongside weddings, birthdays and corporate events across the town, Highcliffe, Mudeford, Burton and Bransgore.

## Weddings and parties

From riverside and harbour-view venues to village halls and garden marquees, I bring sound and lighting sized to the space and plan the music around you. See [wedding DJ](/services/wedding-dj-bournemouth) and [private party DJ](/services/private-party-dj) for how it works, or the [wedding DJ cost guide](/wedding-dj-cost-dorset) for a sense of budget.

## Festivals and outdoor events

Christchurch has a strong summer events calendar and I am set up for it: festival stages, seafront and quay events, and outdoor parties. See [festival and outdoor DJ](/services/festival-dj).

[Send your date](/contact) and I will confirm availability within 24 hours.
`,
    nearbyVenues: [{ name: "Christchurch Music Festival", type: "festival" }],
    faqs: [
      TRAVEL_FAQ("Christchurch", "15 minutes"),
      {
        question: "Have you played events in Christchurch before?",
        answer:
          "Yes — including a festival booking at Christchurch Music Festival, plus weddings and private parties in and around the town.",
      },
      INSURED_FAQ,
    ],
  },
  {
    name: "New Forest",
    detail: "Hampshire",
    slug: "new-forest",
    schemaType: "AdministrativeArea",
    heading: "Wedding DJ in the New Forest",
    intro:
      "Country-house, barn and marquee weddings across the New Forest — Brockenhurst, Lyndhurst, Beaulieu, Burley and Sway — from a DJ based twenty-five minutes away in Bournemouth.",
    seo: {
      metaTitle: "New Forest Wedding DJ — Brockenhurst, Lyndhurst & Beaulieu",
      metaDescription:
        "Wedding DJ for New Forest country houses, barns, hotels and marquees in Brockenhurst, Lyndhurst, Beaulieu, Burley and Sway. 25+ years' experience, fully insured.",
    },
    body: `
## Weddings in the New Forest

The New Forest is one of the most popular wedding areas on the South Coast, and I DJ there regularly — a recent summer wedding in the Forest is a good example. Country-house hotels, converted barns, village halls and marquees on private land all have their own character, and their own practicalities around access, power, noise limits and finish times. I liaise with your venue directly so none of that lands on you.

## How I plan your wedding

We start with a conversation about the day you want, then I build a running order for the evening around your must-plays, your first dance and the moments that matter. Ceremony and drinks-reception music, a wireless microphone for speeches and the evening party can all come from one supplier. Full details on the [wedding DJ page](/services/wedding-dj-bournemouth), and a realistic sense of budget in the [wedding DJ cost guide](/wedding-dj-cost-dorset).

## Parties and events in the Forest

Birthdays, anniversaries and summer garden parties in Brockenhurst, Lyndhurst, Beaulieu, Burley, Sway, New Milton and Fordingbridge are all regular ground, as are corporate away-days and Christmas parties at Forest hotels. See [private party DJ](/services/private-party-dj) and [corporate event DJ](/services/corporate-event-dj).

## Getting here

Bournemouth to Brockenhurst or Lyndhurst is around twenty-five minutes; Beaulieu and the eastern Forest around forty. Travel is included in the quote for New Forest bookings.

[Send your date and venue](/contact) and I will reply within 24 hours.
`,
    faqs: [
      TRAVEL_FAQ("the New Forest", "25–40 minutes"),
      {
        question: "Do you DJ at barn and marquee weddings in the New Forest?",
        answer:
          "Yes. Barns and marquees are some of my most common New Forest bookings. I bring sound and lighting sized to the space and will check power and access with the venue or marquee company beforehand.",
      },
      {
        question: "Can you provide ceremony and drinks-reception music as well as the evening?",
        answer:
          "Yes. One supplier for the whole day — background music for the ceremony and drinks, a microphone for speeches, and the evening party.",
      },
      {
        question: "What time do New Forest venues usually require music to finish?",
        answer:
          "Many Forest venues have a midnight finish, some earlier because of licensing or neighbours. I will confirm with your venue and plan the set so the last hour builds to the finish rather than being cut short.",
      },
      INSURED_FAQ,
    ],
  },
  {
    name: "Southampton",
    detail: "Hampshire",
    slug: "southampton",
    schemaType: "City",
    heading: "Wedding & Event DJ in Southampton",
    intro:
      "Weddings, corporate events, private parties and bar slots across Southampton, Eastleigh, Romsey, Totton and the Waterside — forty-five minutes along the M27 from my Bournemouth base.",
    seo: {
      metaTitle: "DJ Southampton — Weddings, Corporate & Party DJ",
      metaDescription:
        "DJ for weddings, corporate events, birthday parties and bar nights in Southampton, Eastleigh, Romsey and Hedge End. Former Hed Kandi resident, 25+ years' experience.",
    },
    body: `
## A South Coast DJ for Southampton

Southampton is a straightforward run along the M27 and a regular part of my diary. I DJ weddings at the city's hotels and the country venues around Romsey and the Test Valley, corporate events for businesses across the city and Eastleigh, and private parties from Ocean Village to Hedge End and Totton.

## Weddings

Southampton and its surroundings have everything from city-centre hotels and cruise-terminal views to converted barns and country houses in Romsey, Botley and the Meon Valley. I plan the music around you, liaise with the venue on the practical side, and can cover ceremony, drinks and the evening as one supplier. See [wedding DJ](/services/wedding-dj-bournemouth) and the [wedding DJ cost guide](/wedding-dj-cost-dorset).

## Corporate and business events

Awards nights, conference parties, product launches and Christmas parties for Southampton businesses and event agencies. Microphones and speech audio are included, and I can invoice the company directly. See [corporate event DJ](/services/corporate-event-dj).

## Private parties, bars and clubs

Milestone birthdays and anniversaries across the city, plus guest slots and residencies for bars and venues. See [private party DJ](/services/private-party-dj) and [club and bar DJ](/services/club-and-bar-dj).

[Get in touch](/contact) with the date and venue for a quote within 24 hours.
`,
    faqs: [
      TRAVEL_FAQ("Southampton", "45 minutes"),
      {
        question: "Do you cover Eastleigh, Romsey, Hedge End and the Waterside?",
        answer:
          "Yes. Everything in and around Southampton — Eastleigh, Romsey, Totton, Hythe, Hedge End, Botley and the Meon Valley — is regular ground.",
      },
      {
        question: "Can you DJ a corporate Christmas party in Southampton?",
        answer:
          "Yes. Corporate Christmas parties are one of my busiest bookings. December Fridays and Saturdays go early, so it is worth enquiring in the autumn.",
      },
      INSURED_FAQ,
    ],
  },
  {
    name: "Dorchester",
    detail: "West Dorset",
    slug: "dorchester",
    schemaType: "City",
    heading: "Wedding & Event DJ in Dorchester & West Dorset",
    intro:
      "Weddings, parties and events across Dorchester, Weymouth, Bridport and the West Dorset countryside, from a Bournemouth-based DJ with 25 years on the decks.",
    seo: {
      metaTitle: "Wedding & Event DJ Dorchester & West Dorset",
      metaDescription:
        "DJ for weddings, birthdays and events in Dorchester, Weymouth, Bridport and West Dorset. 25+ years' experience, bespoke playlists, fully insured. Quote within 24 hours.",
    },
    body: `
## West Dorset weddings and events

Dorchester and the West Dorset countryside are home to some of the county's most characterful venues — manor houses, farm barns, marquees on private land and the coast around Weymouth and Bridport. I DJ [weddings](/services/wedding-dj-bournemouth), [private parties](/services/private-party-dj), [corporate events](/services/corporate-event-dj) and [charity galas](/services/charity-gala-dj) across the area, and liaise directly with the venue on access, power and timings.

## Travel

Dorchester is around fifty minutes from Bournemouth; Weymouth and Bridport a little further. Travel within Dorset is normally included in the quote, and I arrive early so setup is never rushed.

[Send your date and venue](/contact) and I will confirm availability within 24 hours.
`,
    faqs: [
      TRAVEL_FAQ("Dorchester", "50 minutes"),
      {
        question: "Do you cover Weymouth and Bridport too?",
        answer: "Yes. Weymouth, Portland, Bridport and the West Dorset coast are all within my regular area.",
      },
      INSURED_FAQ,
    ],
  },
  {
    name: "Salisbury",
    detail: "Wiltshire",
    slug: "salisbury-wiltshire",
    schemaType: "City",
    heading: "Wedding & Event DJ in Salisbury & Wiltshire",
    intro:
      "Country-house and barn weddings, parties and corporate events across Salisbury, the Chalke Valley, Amesbury and south Wiltshire — an hour from Bournemouth.",
    seo: {
      metaTitle: "Wedding DJ Salisbury & Wiltshire",
      metaDescription:
        "Wedding and event DJ for Salisbury, Amesbury, Fordingbridge and south Wiltshire venues. Former Hed Kandi resident, 25+ years' experience, fully insured.",
    },
    body: `
## Salisbury and south Wiltshire

Salisbury is an easy hour north of Bournemouth through the New Forest, and the countryside around it — the Chalke and Nadder valleys, the Woodford Valley, Amesbury and the villages towards Fordingbridge — hosts a lot of country-house, barn and marquee weddings. I DJ [weddings](/services/wedding-dj-bournemouth), [private parties](/services/private-party-dj) and [corporate events](/services/corporate-event-dj) across the area.

## What to expect

A conversation about the music you want, a bespoke running order for the evening, professional sound and lighting sized to the venue, a microphone for speeches, and a DJ who arrives early and reads the room all night. Budget guidance is in the [wedding DJ cost guide](/wedding-dj-cost-dorset).

[Get in touch](/contact) with the date and venue for a quote within 24 hours.
`,
    faqs: [
      TRAVEL_FAQ("Salisbury", "an hour"),
      {
        question: "Do you DJ weddings elsewhere in Wiltshire?",
        answer:
          "Yes. South Wiltshire — Salisbury, Amesbury, Tisbury, Wilton and the surrounding valleys — is regular ground, and I travel further into the county for the right booking.",
      },
      INSURED_FAQ,
    ],
  },
  {
    name: "Winchester",
    detail: "Hampshire",
    slug: "winchester",
    schemaType: "City",
    heading: "Wedding & Event DJ in Winchester",
    intro:
      "Weddings, parties and corporate events across Winchester, Alresford, Stockbridge and the Hampshire countryside, from a DJ based an hour away in Bournemouth.",
    seo: {
      metaTitle: "Wedding & Event DJ Winchester, Hampshire",
      metaDescription:
        "Wedding, party and corporate DJ for Winchester, Alresford, Stockbridge and the Test Valley. 25+ years' experience, former Hed Kandi resident, fully insured.",
    },
    body: `
## Winchester weddings and events

Winchester's hotels, historic venues and the country houses and barns around Alresford, Stockbridge and the Test Valley make it one of Hampshire's busiest wedding areas. I DJ [weddings](/services/wedding-dj-bournemouth), [milestone birthdays](/services/private-party-dj), [corporate events](/services/corporate-event-dj) and [charity balls](/services/charity-gala-dj) across the area, with sound and lighting sized to the venue and a set planned around you.

## Travel

Winchester is roughly an hour from Bournemouth via the M27 and M3. Travel within Hampshire is normally included in the quote.

[Send your date](/contact) and I will confirm availability within 24 hours.
`,
    faqs: [
      TRAVEL_FAQ("Winchester", "an hour"),
      {
        question: "Do you cover Alresford, Stockbridge and the Test Valley?",
        answer: "Yes — the whole area around Winchester, including Alresford, Stockbridge, Andover and the Meon Valley.",
      },
      INSURED_FAQ,
    ],
  },
  {
    name: "Wareham & Purbeck",
    detail: "Dorset",
    slug: "wareham-purbeck",
    schemaType: "AdministrativeArea",
    heading: "Wedding & Event DJ in Wareham, Swanage & the Isle of Purbeck",
    intro:
      "Coastal and countryside weddings and parties across Wareham, Swanage, Corfe Castle, Studland and the Purbecks — thirty minutes from Bournemouth.",
    seo: {
      metaTitle: "Wedding & Event DJ Wareham, Swanage & Purbeck",
      metaDescription:
        "DJ for weddings, parties and events in Wareham, Swanage, Corfe Castle, Studland and the Isle of Purbeck. 25+ years' experience, fully insured. Quote within 24 hours.",
    },
    body: `
## Purbeck weddings and parties

The Isle of Purbeck is a special place for a wedding — coastal venues around Swanage and Studland, farm barns and marquees near Corfe Castle and Wareham, and village halls with a view. I DJ [weddings](/services/wedding-dj-bournemouth), [private parties](/services/private-party-dj) and [outdoor and summer events](/services/festival-dj) across the area and will plan the practicalities of rural venues with you in advance.

## Travel

Wareham is about thirty minutes from Bournemouth; Swanage and Studland a little more (or a short hop on the Sandbanks ferry). Travel within Dorset is normally included in the quote.

[Get in touch](/contact) with the date and venue for a quote within 24 hours.
`,
    faqs: [
      TRAVEL_FAQ("Wareham and Purbeck", "30–45 minutes"),
      {
        question: "Can you DJ at a marquee or farm wedding in the Purbecks?",
        answer:
          "Yes. Rural and marquee weddings are common bookings. I will check power, access and noise arrangements with you or the marquee company beforehand and bring equipment suited to the space.",
      },
      INSURED_FAQ,
    ],
  },
  {
    name: "Ringwood",
    detail: "Hampshire",
    slug: "ringwood",
    schemaType: "City",
    heading: "Wedding & Party DJ in Ringwood & Fordingbridge",
    intro:
      "Weddings, birthdays and events across Ringwood, Fordingbridge, Verwood and the western edge of the New Forest — twenty minutes from Bournemouth.",
    seo: {
      metaTitle: "Wedding & Party DJ Ringwood & Fordingbridge",
      metaDescription:
        "DJ for weddings, parties and events in Ringwood, Fordingbridge, Verwood and the western New Forest. 25+ years' experience, fully insured. Quote within 24 hours.",
    },
    body: `
## Ringwood and the western Forest

Ringwood is twenty minutes up the A338 and the venues around it — hotels, barns, village halls and Forest-edge marquees towards Burley, Fordingbridge and Verwood — are regular bookings for [weddings](/services/wedding-dj-bournemouth), [milestone birthdays](/services/private-party-dj) and [corporate events](/services/corporate-event-dj).

## What is included

Professional sound and lighting sized to the venue, a wireless microphone for speeches, early arrival and venue liaison, public liability insurance and PAT-tested equipment — and a DJ who plans the music with you and reads the room on the night.

[Send your date](/contact) and I will reply within 24 hours.
`,
    faqs: [TRAVEL_FAQ("Ringwood", "20 minutes"), INSURED_FAQ],
  },
  {
    name: "Lymington",
    detail: "Hampshire",
    slug: "lymington",
    schemaType: "City",
    heading: "Wedding & Event DJ in Lymington & New Milton",
    intro:
      "Coastal weddings, yacht-club events and parties across Lymington, New Milton, Milford on Sea and Barton on Sea — half an hour from Bournemouth.",
    seo: {
      metaTitle: "Wedding & Event DJ Lymington & New Milton",
      metaDescription:
        "DJ for weddings, sailing-club events and parties in Lymington, New Milton, Milford on Sea and Barton on Sea. 25+ years' experience, fully insured.",
    },
    body: `
## Lymington and the coast

Lymington's harbour, sailing clubs and the coastal venues along to Milford on Sea and Barton on Sea host some lovely weddings and summer parties. I DJ [weddings](/services/wedding-dj-bournemouth), [private parties](/services/private-party-dj), [corporate events](/services/corporate-event-dj) and [outdoor and boat events](/services/festival-dj) across the area, and am used to the tighter power and space that waterside and club venues sometimes involve.

## Travel

Lymington is around thirty to thirty-five minutes from Bournemouth through the Forest; New Milton and Barton on Sea a little less. Travel is included in the quote.

[Get in touch](/contact) with the date and venue for a quote within 24 hours.
`,
    faqs: [
      TRAVEL_FAQ("Lymington", "30–35 minutes"),
      {
        question: "Do you DJ at sailing-club and waterside venues?",
        answer:
          "Yes. Waterside and club venues often have tighter power and space; I bring a compact, professional setup and check the practicalities with the venue beforehand.",
      },
      INSURED_FAQ,
    ],
  },
  {
    name: "Wimborne",
    detail: "Dorset",
    slug: "wimborne",
    schemaType: "City",
    heading: "Wedding & Party DJ in Wimborne & East Dorset",
    intro:
      "Country-house, barn and village weddings and parties across Wimborne, Ferndown, West Moors, Cranborne and East Dorset — twenty minutes from Bournemouth.",
    seo: {
      metaTitle: "Wedding & Party DJ Wimborne & East Dorset",
      metaDescription:
        "DJ for weddings, parties and events in Wimborne, Ferndown, West Moors, Cranborne and East Dorset. 25+ years' experience, fully insured. Quote within 24 hours.",
    },
    body: `
## Wimborne and East Dorset

Wimborne is twenty minutes from home and the East Dorset countryside around it — Ferndown, West Moors, Cranborne, Witchampton and the Tarrant Valley — is full of barns, country houses and village halls that host weddings and parties all year. I DJ [weddings](/services/wedding-dj-bournemouth), [milestone birthdays and anniversaries](/services/private-party-dj), [corporate events](/services/corporate-event-dj) and [charity galas](/services/charity-gala-dj) across the area.

## What is included

Professional sound and lighting sized to the venue, a wireless microphone for speeches, early arrival and venue liaison, public liability insurance and PAT-tested equipment. Budget guidance is in the [wedding DJ cost guide](/wedding-dj-cost-dorset).

[Send your date](/contact) and I will reply within 24 hours.
`,
    faqs: [TRAVEL_FAQ("Wimborne", "20 minutes"), INSURED_FAQ],
  },
  {
    name: "Dorset",
    detail: "County-wide",
    slug: "dorset",
    schemaType: "AdministrativeArea",
    heading: "Wedding & Event DJ in Dorset",
    intro:
      "A Dorset DJ with 25 years on the decks. Weddings, parties, corporate events, club nights and festivals across the whole county — from Bournemouth and Poole to Dorchester, Weymouth and the Purbecks.",
    order: 12,
    seo: {
      metaTitle: "Dorset DJ — Wedding, Party & Event DJ Across Dorset",
      metaDescription:
        "Wedding and event DJ covering all of Dorset — Bournemouth, Poole, Christchurch, Wimborne, Dorchester, Weymouth and Purbeck. Former Hed Kandi resident, 5-star rated.",
    },
    body: `
## Based in Bournemouth, booked across Dorset

I have lived and DJed in Dorset for most of my career. Residencies at Post, Aruba, Bar So, V Nightclub and Cameo in Bournemouth, a festival booking at Christchurch Music Festival, and weddings and private events from Sandbanks to the West Dorset coast. If it is happening in Dorset, there is a good chance I have played somewhere nearby.

## Weddings in Dorset

Dorset is one of the most popular wedding counties in the country — coast, countryside, barns, manor houses and marquees. I plan the music around each couple, provide sound and lighting sized to the venue, cover ceremony and drinks reception if you want one supplier, and liaise with the venue directly. Start with the [wedding DJ page](/services/wedding-dj-bournemouth) and the [wedding DJ cost guide](/wedding-dj-cost-dorset).

## Parties, corporate events and galas

[Milestone birthdays and private parties](/services/private-party-dj), [corporate events](/services/corporate-event-dj) and [charity balls](/services/charity-gala-dj) across the county, plus [festival and outdoor](/services/festival-dj) bookings in the summer. Venue managers and promoters: see [club and bar DJ](/services/club-and-bar-dj).

## Areas within Dorset

[Bournemouth](/areas/bournemouth), [Poole and Sandbanks](/areas/poole), [Christchurch](/areas/christchurch), [Wimborne and East Dorset](/areas/wimborne), [Wareham, Swanage and Purbeck](/areas/wareham-purbeck) and [Dorchester and West Dorset](/areas/dorchester). Travel within the county is normally included in the quote.

[Get in touch](/contact) with the date and venue — I reply within 24 hours.
`,
    faqs: [
      {
        question: "Which parts of Dorset do you cover?",
        answer:
          "All of it. I am based in Bournemouth and regularly play Poole, Christchurch, Wimborne, Wareham, Swanage, Blandford, Dorchester, Weymouth and Bridport. Travel within Dorset is normally included in the quote.",
      },
      {
        question: "How much does a wedding DJ cost in Dorset?",
        answer:
          "Most professional wedding DJs in Dorset and the South Coast quote somewhere between £500 and £1,200 for an evening, with full-day packages higher. I quote each wedding individually — see the cost guide on this site and send your date for an exact figure.",
      },
      {
        question: "Do you DJ festivals and outdoor events in Dorset?",
        answer:
          "Yes. I have a festival booking at Christchurch Music Festival and play beach parties, summer events and outdoor parties along the Dorset coast.",
      },
      INSURED_FAQ,
    ],
  },
  {
    name: "Hampshire",
    detail: "County-wide",
    slug: "hampshire",
    schemaType: "AdministrativeArea",
    heading: "Wedding DJ in Hampshire",
    intro:
      "A Hampshire wedding and event DJ from just over the border in Bournemouth. The New Forest, Southampton, Winchester, Lymington, Ringwood and the Test and Meon valleys are all regular ground.",
    order: 13,
    seo: {
      metaTitle: "Hampshire Wedding DJ — New Forest, Southampton & Winchester",
      metaDescription:
        "Wedding and event DJ for Hampshire — New Forest, Southampton, Winchester, Lymington, Romsey and Ringwood. Former Hed Kandi resident, 25+ years' experience, insured.",
    },
    body: `
## Hampshire weddings, parties and events

Hampshire is a huge part of my diary. The New Forest is twenty-five minutes from my Bournemouth base and hosts many of my weddings; Southampton, Winchester and the country venues around Romsey, Alresford and the Meon Valley are all regular bookings for weddings, corporate events and private parties.

## Weddings

Country-house hotels, barns, marquees and village venues across the county. Every wedding starts with a conversation about the music you want; from there I build a running order for the evening, provide sound and lighting sized to the venue, and can cover the ceremony and drinks reception as one supplier. See the [wedding DJ page](/services/wedding-dj-bournemouth) and the [wedding DJ cost guide](/wedding-dj-cost-dorset).

## Corporate, private and charity events

[Corporate events](/services/corporate-event-dj) for Southampton and Winchester businesses, [milestone birthdays and private parties](/services/private-party-dj) across the county, and [charity balls and galas](/services/charity-gala-dj) at Hampshire hotels and country houses.

## Areas within Hampshire

[New Forest](/areas/new-forest), [Southampton](/areas/southampton), [Winchester](/areas/winchester), [Lymington and New Milton](/areas/lymington) and [Ringwood and Fordingbridge](/areas/ringwood). Travel within Hampshire is normally included in the quote.

[Get in touch](/contact) with the date and venue — I reply within 24 hours.
`,
    faqs: [
      {
        question: "Which parts of Hampshire do you cover?",
        answer:
          "The New Forest, Southampton, Eastleigh, Romsey, Winchester, Lymington, New Milton, Ringwood and Fordingbridge are all regular bookings. I travel further into the county — Basingstoke, Portsmouth, Petersfield — for the right event.",
      },
      {
        question: "How much does a wedding DJ cost in Hampshire?",
        answer:
          "Professional wedding DJs in Hampshire typically quote between £500 and £1,200 for an evening, more for full-day packages or premium production. I quote each wedding individually — send your date and venue for an exact figure.",
      },
      {
        question: "Do you charge travel for Hampshire weddings?",
        answer:
          "Travel within Hampshire is normally included in the quote. The New Forest is twenty-five minutes from me, Southampton forty-five and Winchester about an hour.",
      },
      INSURED_FAQ,
    ],
  },
];
