/* ============================================================
   LUMIVOLT catalog — 10 curated AI & smart gadgets
   Product types, price bands and source-cost ranges grounded in
   2026 market research (TLinky / Accio / Alidropship trend data).
   All artwork: original inline SVG, no third-party assets.
   ============================================================ */

const INK = "#17140F";
const LIME = "#C8F135";
const PAPER = "#FAF8F2";

/* ---- one SVG per product, consistent 200x160 viewBox, 2px ink strokes ---- */
const ART = {
  earbuds: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Wireless translation earbuds with charging case">
    <rect x="58" y="54" width="84" height="58" rx="16" fill="${PAPER}" stroke="${INK}" stroke-width="2.5"/>
    <rect x="70" y="66" width="60" height="34" rx="10" fill="${LIME}" opacity=".85"/>
    <circle cx="86" cy="42" r="13" fill="${PAPER}" stroke="${INK}" stroke-width="2.5"/>
    <circle cx="86" cy="42" r="4.5" fill="${INK}"/>
    <circle cx="114" cy="38" r="13" fill="${PAPER}" stroke="${INK}" stroke-width="2.5"/>
    <circle cx="114" cy="38" r="4.5" fill="${INK}"/>
    <path d="M96 118 c0 10 8 18 18 18" stroke="${INK}" stroke-width="2" stroke-linecap="round"/>
    <path d="M108 130 c8 0 14 -6 14 -14" stroke="${INK}" stroke-width="2" stroke-linecap="round"/>
    <rect x="96" y="24" width="8" height="18" rx="4" fill="${LIME}" stroke="${INK}" stroke-width="2"/>
    <circle cx="158" cy="118" r="5" fill="${LIME}" stroke="${INK}" stroke-width="2"/>
  </svg>`,

  charger: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Foldable 3-in-1 magnetic charging station">
    <rect x="46" y="52" width="108" height="56" rx="12" fill="${PAPER}" stroke="${INK}" stroke-width="2.5" transform="rotate(-6 100 80)"/>
    <rect x="60" y="64" width="44" height="34" rx="8" fill="${LIME}" stroke="${INK}" stroke-width="2" transform="rotate(-6 100 80)"/>
    <circle cx="128" cy="82" r="16" fill="${PAPER}" stroke="${INK}" stroke-width="2.5" transform="rotate(-6 100 80)"/>
    <circle cx="128" cy="82" r="5" fill="${INK}" transform="rotate(-6 100 80)"/>
    <rect x="70" y="30" width="52" height="12" rx="6" fill="${INK}"/>
    <path d="M150 26 l14 14 M164 26 l-14 14" stroke="${LIME}" stroke-width="4" stroke-linecap="round"/>
    <path d="M40 128 h120" stroke="${INK}" stroke-width="2" stroke-dasharray="5 7" stroke-linecap="round"/>
  </svg>`,

  ring: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Smart ring for sleep and health tracking">
    <circle cx="100" cy="84" r="34" fill="${PAPER}" stroke="${INK}" stroke-width="2.5"/>
    <circle cx="100" cy="84" r="22" fill="none" stroke="${INK}" stroke-width="2" opacity=".35"/>
    <rect x="88" y="42" width="24" height="14" rx="7" fill="${LIME}" stroke="${INK}" stroke-width="2" transform="rotate(18 100 49)"/>
    <path d="M100 118 v14" stroke="${INK}" stroke-width="2" stroke-linecap="round"/>
    <path d="M92 136 h16" stroke="${LIME}" stroke-width="4" stroke-linecap="round"/>
    <path d="M56 60 a52 52 0 0 1 24 -20" stroke="${INK}" stroke-width="2" stroke-linecap="round" stroke-dasharray="2 6"/>
    <circle cx="146" cy="46" r="4" fill="${LIME}" stroke="${INK}" stroke-width="2"/>
  </svg>`,

  sleepmask: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Smart sleep mask with sunrise wake light">
    <path d="M42 78 q58 -34 116 0 q6 34 -58 34 q-64 0 -58 -34 z" fill="${PAPER}" stroke="${INK}" stroke-width="2.5"/>
    <path d="M80 82 a20 14 0 0 1 40 0" fill="none" stroke="${INK}" stroke-width="2.5"/>
    <path d="M92 82 a8 8 0 0 1 16 0" fill="${LIME}" stroke="${INK}" stroke-width="2"/>
    <path d="M30 74 q-8 4 -6 12" stroke="${INK}" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    <path d="M170 74 q8 4 6 12" stroke="${INK}" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    <path d="M100 120 v10" stroke="${INK}" stroke-width="2" stroke-linecap="round"/>
    <path d="M88 136 l6 -6 6 6 6 -6 6 6" stroke="${LIME}" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  moonlamp: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Levitating moon lamp floating above its base">
    <circle cx="100" cy="64" r="36" fill="${PAPER}" stroke="${INK}" stroke-width="2.5"/>
    <circle cx="88" cy="54" r="6" fill="none" stroke="${INK}" stroke-width="2" opacity=".4"/>
    <circle cx="110" cy="70" r="9" fill="none" stroke="${INK}" stroke-width="2" opacity=".4"/>
    <circle cx="100" cy="48" r="4" fill="none" stroke="${INK}" stroke-width="2" opacity=".4"/>
    <path d="M64 96 q36 12 72 0" stroke="${LIME}" stroke-width="3" fill="none" stroke-linecap="round" stroke-dasharray="1 9"/>
    <rect x="66" y="110" width="68" height="16" rx="8" fill="${INK}"/>
    <rect x="84" y="128" width="32" height="8" rx="4" fill="${INK}" opacity=".45"/>
    <path d="M152 40 l0 24 M144 48 l16 8 M160 48 l-16 8" stroke="${INK}" stroke-width="2" stroke-linecap="round" opacity=".6"/>
  </svg>`,

  smartplug: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Compact smart plug with app control">
    <rect x="70" y="30" width="60" height="100" rx="14" fill="${PAPER}" stroke="${INK}" stroke-width="2.5"/>
    <rect x="84" y="44" width="32" height="22" rx="6" fill="${LIME}" stroke="${INK}" stroke-width="2"/>
    <circle cx="92" cy="55" r="2.8" fill="${INK}"/>
    <circle cx="108" cy="55" r="2.8" fill="${INK}"/>
    <path d="M88 86 h24" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>
    <path d="M82 98 h36" stroke="${INK}" stroke-width="3" stroke-linecap="round" opacity=".5"/>
    <path d="M36 60 a64 64 0 0 1 0 40" stroke="${INK}" stroke-width="2" fill="none" stroke-dasharray="2 6" opacity=".6"/>
    <path d="M164 60 a64 64 0 0 0 0 40" stroke="${INK}" stroke-width="2" fill="none" stroke-dasharray="2 6" opacity=".6"/>
    <circle cx="100" cy="140" r="3.5" fill="${LIME}" stroke="${INK}" stroke-width="2"/>
  </svg>`,

  airscout: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Desktop air quality monitor with e-ink display">
    <rect x="58" y="34" width="84" height="88" rx="16" fill="${PAPER}" stroke="${INK}" stroke-width="2.5"/>
    <rect x="70" y="48" width="60" height="38" rx="8" fill="${INK}"/>
    <text x="100" y="74" text-anchor="middle" font-family="monospace" font-size="20" fill="${LIME}">72</text>
    <path d="M74 100 h52" stroke="${INK}" stroke-width="2" stroke-linecap="round"/>
    <path d="M74 108 h34" stroke="${INK}" stroke-width="2" stroke-linecap="round" opacity=".4"/>
    <circle cx="88" cy="120" r="3" fill="${LIME}" stroke="${INK}" stroke-width="1.5"/>
    <path d="M40 60 q-10 20 0 40" stroke="${INK}" stroke-width="2" fill="none" opacity=".5"/>
    <path d="M160 60 q10 20 0 40" stroke="${INK}" stroke-width="2" fill="none" opacity=".5"/>
    <rect x="76" y="126" width="48" height="8" rx="4" fill="${INK}" opacity=".45"/>
  </svg>`,

  recorder: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pocket AI voice recorder with transcription">
    <rect x="72" y="26" width="56" height="108" rx="14" fill="${PAPER}" stroke="${INK}" stroke-width="2.5"/>
    <circle cx="100" cy="48" r="10" fill="${INK}"/>
    <circle cx="100" cy="48" r="3.5" fill="${LIME}"/>
    <rect x="84" y="66" width="32" height="34" rx="6" fill="${LIME}" stroke="${INK}" stroke-width="2"/>
    <path d="M90 76 h20 M90 84 h20 M90 92 h12" stroke="${INK}" stroke-width="2" stroke-linecap="round"/>
    <circle cx="100" cy="114" r="7" fill="none" stroke="${INK}" stroke-width="2.5"/>
    <path d="M100 110 v4 l3 3" stroke="${INK}" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    <path d="M42 52 l12 12 M54 52 l-12 12" stroke="${LIME}" stroke-width="3" stroke-linecap="round"/>
    <path d="M158 96 l10 10 M168 96 l-10 10" stroke="${LIME}" stroke-width="3" stroke-linecap="round"/>
    <path d="M36 128 h44" stroke="${INK}" stroke-width="2" stroke-dasharray="4 6" stroke-linecap="round" opacity=".5"/>
    <path d="M120 128 h44" stroke="${INK}" stroke-width="2" stroke-dasharray="4 6" stroke-linecap="round" opacity=".5"/>
  </svg>`,

  projector: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Portable mini projector casting a movie">
    <rect x="40" y="66" width="70" height="48" rx="12" fill="${PAPER}" stroke="${INK}" stroke-width="2.5"/>
    <circle cx="62" cy="90" r="15" fill="${LIME}" stroke="${INK}" stroke-width="2.5"/>
    <circle cx="62" cy="90" r="6" fill="${PAPER}" stroke="${INK}" stroke-width="2"/>
    <rect x="88" y="80" width="10" height="20" rx="4" fill="${INK}"/>
    <path d="M120 78 l56 -22 v68 l-56 -22 z" fill="${PAPER}" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/>
    <path d="M132 84 l34 -13 v38 l-34 -13 z" fill="${LIME}" opacity=".7"/>
    <path d="M126 62 l6 -10 M140 60 l3 -11" stroke="${INK}" stroke-width="2" stroke-linecap="round" opacity=".5"/>
    <rect x="48" y="118" width="54" height="8" rx="4" fill="${INK}" opacity=".45"/>
  </svg>`,

  tracktag: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bluetooth item finder tag on a keyring">
    <circle cx="96" cy="86" r="30" fill="${PAPER}" stroke="${INK}" stroke-width="2.5"/>
    <circle cx="96" cy="86" r="19" fill="none" stroke="${INK}" stroke-width="2" opacity=".3"/>
    <path d="M90 74 l14 8 -14 8 v-16 z" fill="${LIME}" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/>
    <path d="M104 74 l-14 8 14 8" stroke="${INK}" stroke-width="2" fill="none"/>
    <path d="M96 42 a14 14 0 0 1 12 7" stroke="${INK}" stroke-width="2.5" fill="none"/>
    <circle cx="116" cy="52" r="9" fill="none" stroke="${INK}" stroke-width="2.5"/>
    <path d="M146 66 q14 20 0 40" stroke="${INK}" stroke-width="2" fill="none" stroke-dasharray="3 6" opacity=".6"/>
    <path d="M52 66 q-14 20 0 40" stroke="${INK}" stroke-width="2" fill="none" stroke-dasharray="3 6" opacity=".6"/>
    <circle cx="146" cy="120" r="4" fill="${LIME}" stroke="${INK}" stroke-width="2"/>
  </svg>`,
};

/* ---- catalog ---- */
const PRODUCTS = [
  {
    id: "echopods", name: "EchoPods Pro", cat: "audio", tint: "audio",
    price: 39.99, was: 59.99, badge: "Best seller",
    line: "AI translation earbuds — 100+ languages, live in-ear.",
    art: ART.earbuds,
  },
  {
    id: "chargedeck", name: "Voltra Charge Deck", cat: "everyday", tint: "everyday",
    price: 34.99, was: 49.99, badge: "",
    line: "Foldable 3-in-1 magnetic charger. Phone, watch, buds.",
    art: ART.charger,
  },
  {
    id: "lumaring", name: "LumaRing Track", cat: "wearables", tint: "wearables",
    price: 89.99, was: 119.99, badge: "New",
    line: "Titanium smart ring — sleep, HR & recovery, 7-day battery.",
    art: ART.ring,
  },
  {
    id: "noxrest", name: "NoxRest Wake Mask", cat: "home", tint: "home",
    price: 29.99, was: 44.99, badge: "",
    line: "100% blackout + sunrise light wake. Sleep tracked, not guessed.",
    art: ART.sleepmask,
  },
  {
    id: "lunaone", name: "LunaOne Float Lamp", cat: "home", tint: "home",
    price: 49.99, was: 69.99, badge: "Trending",
    line: "Levitating moon lamp. Wireless float, 3 light modes.",
    art: ART.moonlamp,
  },
  {
    id: "sentrydot", name: "SentryDot Plug", cat: "home", tint: "home",
    price: 19.99, was: 29.99, badge: "",
    line: "App + voice control, energy metering, compact fit.",
    art: ART.smartplug,
  },
  {
    id: "airscout", name: "AirScout Mini", cat: "home", tint: "home",
    price: 44.99, was: 64.99, badge: "",
    line: "Pocket air-quality monitor. CO₂, PM2.5, VOC — live e-ink.",
    art: ART.airscout,
  },
  {
    id: "memokey", name: "MemoKey AI Recorder", cat: "audio", tint: "audio",
    price: 79.99, was: 99.99, badge: "",
    line: "Magnetic AI recorder — records, transcribes, summarizes.",
    art: ART.recorder,
  },
  {
    id: "pixobeam", name: "PixoBeam Mini", cat: "home", tint: "home",
    price: 79.99, was: 109.99, badge: "",
    line: "Pocket 1080p projector, 120\" cast, built-in speaker.",
    art: ART.projector,
  },
  {
    id: "tracktag", name: "TrackTag 4-Pack", cat: "everyday", tint: "everyday",
    price: 22.99, was: 34.99, badge: "Bundle",
    line: "Find keys, bags, wallets. 90dB ring, 1-year battery.",
    art: ART.tracktag,
  },
];

const FREE_SHIP = 60;          // free shipping threshold (USD)
const SHIP_FLAT = 4.90;        // flat shipping under threshold
