import Image from "next/image";
import Link from "next/link";
import Faq from "../components/Faq";

// ────────────────────────────────────────────────────────────────────────────
//  Data
// ────────────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { href: "/classes", label: "Classes" },
  { href: "/schedule", label: "Schedule" },
  { href: "/pricing", label: "Pricing" },
  { href: "/studio", label: "Studio" },
];

const STATS = [
  { value: "8", label: "Max per class" },
  { value: "12", label: "Reformers" },
  {
    value: (
      <>
        55<span className="text-base align-baseline">min</span>
      </>
    ),
    label: "Per session",
  },
  { value: "6am", label: "First class" },
];

const CLASSES = [
  {
    name: "Reformer",
    note: "Full body · 55 min",
    tone: "from-[#b8a98c] to-[#8c7f62]",
    image:
      "https://images.unsplash.com/photo-1606902965551-dce093cda6e7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Mat",
    note: "Foundations · 50 min",
    tone: "from-[#a8b095] to-[#7a8466]",
    image:
      "https://images.unsplash.com/photo-1598556071907-a07e191d0798?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Tower",
    note: "Spring work · 55 min",
    tone: "from-[#c9b8a0] to-[#9d8e73]",
    image:
      "https://images.unsplash.com/photo-1730833545355-8a22cd5762e2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Private",
    note: "1:1 · 55 min",
    tone: "from-[#b0a28a] to-[#847660]",
    image:
      "https://images.unsplash.com/photo-1717500252711-fe8cf2ff1085?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const SCHEDULE = [
  {
    time: "6:30",
    meridiem: "am",
    title: "Reformer Flow",
    level: "All levels",
    coach: "yuk K.",
    spots: 3,
    status: "open" as const,
  },
  {
    time: "9:00",
    meridiem: "am",
    title: "Tower & Springs",
    level: "Intermediate",
    coach: "Julien R.",
    spots: 1,
    status: "limited" as const,
  },
  {
    time: "12:15",
    meridiem: "pm",
    title: "Mat Foundations",
    level: "Beginner welcome",
    coach: "Anya P.",
    spots: 6,
    status: "open" as const,
  },
  {
    time: "5:45",
    meridiem: "pm",
    title: "Reformer Strong",
    level: "Advanced",
    coach: "Yuk K.",
    spots: 0,
    status: "waitlist" as const,
  },
];

const PRICING = [
  {
    tier: "Drop-in",
    price: "$38",
    unit: "per class",
    note: "Try us out · no commitment",
    featured: false,
  },
  {
    tier: "Eight pack",
    price: "$260",
    unit: "$32.50 per class",
    note: "Valid 60 days · share with one friend",
    featured: true,
  },
  {
    tier: "Unlimited",
    price: "$295",
    unit: "all classes",
    priceSuffix: "/mo",
    note: "Members-only events · guest passes",
    featured: false,
  },
];

// ────────────────────────────────────────────────────────────────────────────
//  Sections
// ────────────────────────────────────────────────────────────────────────────

function Nav() {
  return (
    <nav className="flex items-center justify-between px-6 md:px-10 py-3 border-b border-espresso/10">
      <Link
        href="/"
        className="font-display text-lg tracking-[0.18em] text-espresso"
      >
        <Image
          src="/pace-logo-final-v2-favicon.png"
          width={40}
          height={40}
          alt="Pace Studio"
        />
      </Link>
      <ul className="hidden md:flex gap-7 text-xs uppercase tracking-[0.08em] text-ink">
        {NAV_LINKS.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="hover:text-espresso transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="/book"
        className="text-xs uppercase tracking-[0.08em] px-4 py-2 border border-espresso rounded-full hover:bg-espresso hover:text-cream transition-colors"
      >
        Book
      </Link>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative isolate h-[55vh] flex items-end overflow-hidden bg-espresso">
      <Image
        src="/ps_main_hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover -z-10 opacity-70"
      />

      {/* Scrim — keeps text legible without flattening the photo */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-espresso/75 via-espresso/30 to-transparent"
      />

      {/* Corner credit */}
      <span className="absolute top-6 right-6 md:top-10 md:right-10 text-[10px] uppercase tracking-[0.18em] text-cream/70">
        Pace · Studio
      </span>

      {/* Content sits bottom-left, magazine style */}
      <div className="px-6 md:px-10 py-14 md:py-20 max-w-2xl text-cream">
        <p className="eyebrow mb-4 !text-cream/70">— Pace Studio · est. 2026</p>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
          Strength,
          <br />
          <em className="italic text-pink-soft">Flow.</em>
        </h1>
        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-cream/85">
          Some studio in fullterton. Some studio in fullterton. Some studio in
          fullterton. Some studio in fullterton.
        </p>
        <div className="mt-7 flex flex-wrap gap-2.5">
          <Link
            href="/book"
            className="text-xs uppercase tracking-[0.08em] px-5 py-3 rounded-full bg-cream text-espresso hover:bg-cream/90 transition-colors"
          >
            Try a class · $25
          </Link>
          <Link
            href="/schedule"
            className="text-xs uppercase tracking-[0.08em] px-5 py-3 rounded-full border border-cream/80 text-cream hover:bg-cream hover:text-espresso transition-colors"
          >
            View schedule
          </Link>
        </div>
      </div>
    </section>
  );
}
function StatsBar() {
  return (
    <section className="bg-cream-2 border-y border-espresso/10 px-6 md:px-10 py-8 md:py-10">
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-6 md:gap-y-0 md:divide-x divide-espresso/10 text-center">
        {STATS.map((s, i) => (
          <li key={i} className="md:px-4">
            <div className="font-display text-3xl md:text-[28px] text-espresso">
              {s.value}
            </div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.15em] text-stone">
              {s.label}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Classes() {
  return (
    <section className="px-6 md:px-10 pt-14 md:pt-20 pb-8">
      <header className="flex items-end justify-between mb-7">
        <div>
          <p className="eyebrow mb-2.5">— Classes</p>
          <h2 className="font-display text-3xl md:text-4xl tracking-tight text-espresso">
            Four ways to move.
          </h2>
        </div>
        <Link
          href="/classes"
          className="hidden sm:inline-block text-xs text-sage border-b border-sage pb-0.5 hover:text-espresso hover:border-espresso transition-colors"
        >
          All classes →
        </Link>
      </header>

      <ul className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {CLASSES.map((c) => (
          <li
            key={c.name}
            className="bg-cream-3 rounded-sm overflow-hidden group cursor-pointer"
          >
            <div
              className={`relative aspect-[3/4] overflow-hidden bg-gradient-to-b ${c.tone}`}
            >
              <Image
                src={c.image}
                fill
                alt={c.name}
                className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="px-3 py-3.5">
              <div className="font-display text-lg text-espresso">{c.name}</div>
              <div className="text-[11px] text-stone mt-0.5">{c.note}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="bg-espresso text-cream px-6 md:px-10 py-14 md:py-16">
      <div className="max-w-xl mx-auto text-center">
        <p className="eyebrow mb-4 !text-stone">— Philosophy</p>
        <blockquote className="font-display italic text-xl md:text-2xl leading-[1.5] text-cream">
          &ldquo;Pilates isn&rsquo;t a workout you get through. It&rsquo;s an
          hour of paying attention. The body answers when you finally
          listen.&rdquo;
        </blockquote>
        <cite className="not-italic block mt-6 text-[11px] uppercase tracking-[0.15em] text-stone">
          Yuk K. - Founder &amp; lead instructor
        </cite>
      </div>
    </section>
  );
}

function Schedule() {
  return (
    <section className="px-6 md:px-10 pt-14 md:pt-20 pb-8">
      <header className="flex items-end justify-between mb-6">
        <div>
          <p className="eyebrow mb-2.5">— This week</p>
          <h2 className="font-display text-3xl md:text-4xl tracking-tight text-espresso">
            Schedule
          </h2>
        </div>
        <div className="flex gap-1.5 text-[11px] text-ink">
          <button className="px-3 py-1.5 border border-espresso rounded-full">
            Today
          </button>
          <button className="px-3 py-1.5 border border-espresso/20 rounded-full text-stone hover:border-espresso/40 transition-colors">
            Week
          </button>
        </div>
      </header>

      <ul className="border-t border-espresso/10">
        {SCHEDULE.map((s, i) => (
          <li
            key={i}
            className="grid grid-cols-[64px_1fr_auto] md:grid-cols-[80px_1fr_110px_80px_90px] gap-3 py-4 border-b border-espresso/5 items-center"
          >
            <div className="font-display text-base md:text-lg text-espresso">
              {s.time}
              <span className="text-[11px] text-stone"> {s.meridiem}</span>
            </div>
            <div>
              <div className="text-[13px] text-espresso">{s.title}</div>
              <div className="text-[11px] text-stone mt-0.5">{s.level}</div>
            </div>
            <div className="hidden md:block text-xs text-ink">{s.coach}</div>
            <div
              className={`hidden md:block text-[11px] ${s.status === "limited" ? "text-terra" : s.status === "waitlist" ? "text-stone" : "text-sage"}`}
            >
              {s.status === "waitlist"
                ? "Waitlist"
                : `${s.spots} spot${s.spots === 1 ? "" : "s"}`}
            </div>
            <button
              className={`text-[11px] uppercase tracking-[0.08em] px-3 py-1.5 rounded-full text-center transition-colors ${
                s.status === "waitlist"
                  ? "border border-espresso text-espresso hover:bg-espresso hover:text-cream"
                  : "bg-espresso text-cream hover:bg-ink"
              }`}
            >
              {s.status === "waitlist" ? "Join" : "Book"}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Pricing() {
  return (
    <section className="bg-cream-2 px-6 md:px-10 py-14 md:py-20">
      <header className="text-center mb-8">
        <p className="eyebrow mb-2.5">— Membership</p>
        <h2 className="font-display text-3xl md:text-4xl tracking-tight text-espresso">
          Find your rhythm.
        </h2>
      </header>

      <ul className="grid md:grid-cols-3 gap-3 max-w-4xl mx-auto">
        {PRICING.map((p) => (
          <li
            key={p.tier}
            className={`relative rounded-sm p-6 ${
              p.featured ? "bg-espresso text-cream" : "bg-cream-3 text-espresso"
            }`}
          >
            {p.featured && (
              <span className="absolute -top-2.5 left-5 bg-sage text-cream text-[10px] uppercase tracking-[0.15em] px-2.5 py-1 rounded-full">
                Most loved
              </span>
            )}
            <div
              className={`text-[11px] uppercase tracking-[0.15em] mb-3.5 ${p.featured ? "text-stone-soft" : "text-stone"}`}
            >
              {p.tier}
            </div>
            <div className="font-display text-4xl leading-none">
              {p.price}
              {p.priceSuffix && (
                <span
                  className={`text-sm ${p.featured ? "text-stone-soft" : "text-stone"}`}
                >
                  {p.priceSuffix}
                </span>
              )}
            </div>
            <div
              className={`text-[11px] mt-1.5 ${p.featured ? "text-stone-soft" : "text-stone"}`}
            >
              {p.unit}
            </div>
            <p
              className={`mt-4 pt-3.5 border-t text-xs leading-relaxed ${
                p.featured
                  ? "border-cream/15 text-cream/80"
                  : "border-espresso/10 text-ink"
              }`}
            >
              {p.note}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function FAQ() {
  return (
    <section className="bg-cream-2 px-6 md:px-10 py-14 md:py-20">
      <header className="text-center mb-8">
        <p className="eyebrow mb-2.5">— FAQ</p>
        <h2 className="font-display text-3xl md:text-4xl tracking-tight text-espresso">
          Requently asked questions
        </h2>
      </header>

      <ul className="grid md:grid-cols-3 gap-3 max-w-4xl mx-auto">
        {PRICING.map((p) => (
          <li
            key={p.tier}
            className={`relative rounded-sm p-6 ${
              p.featured ? "bg-espresso text-cream" : "bg-cream-3 text-espresso"
            }`}
          >
            {p.featured && (
              <span className="absolute -top-2.5 left-5 bg-sage text-cream text-[10px] uppercase tracking-[0.15em] px-2.5 py-1 rounded-full">
                Most loved
              </span>
            )}
            <div
              className={`text-[11px] uppercase tracking-[0.15em] mb-3.5 ${p.featured ? "text-stone-soft" : "text-stone"}`}
            >
              {p.tier}
            </div>
            <div className="font-display text-4xl leading-none">
              {p.price}
              {p.priceSuffix && (
                <span
                  className={`text-sm ${p.featured ? "text-stone-soft" : "text-stone"}`}
                >
                  {p.priceSuffix}
                </span>
              )}
            </div>
            <div
              className={`text-[11px] mt-1.5 ${p.featured ? "text-stone-soft" : "text-stone"}`}
            >
              {p.unit}
            </div>
            <p
              className={`mt-4 pt-3.5 border-t text-xs leading-relaxed ${
                p.featured
                  ? "border-cream/15 text-cream/80"
                  : "border-espresso/10 text-ink"
              }`}
            >
              {p.note}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-espresso text-stone-soft px-6 md:px-10 pt-10 pb-7">
      <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-6 mb-7">
        <div>
          <Image
            src="/pace-logo-final-v1-alt.png"
            width={100}
            height={100}
            alt="Pace Studio"
          />
          <address className="not-italic text-xs leading-relaxed">
            444 N Harbor Blvd #140
            <br />
            Fullerton CA 92832
          </address>
        </div>
        {[
          { heading: "Studio", links: ["Classes", "Schedule", "Pricing"] },
          { heading: "About", links: ["Story", "Team", "Press"] },
          { heading: "Follow", links: ["Instagram", "Newsletter"] },
        ].map((col) => (
          <div key={col.heading} className="text-[11px] leading-[2]">
            <div className="text-cream mb-1">{col.heading}</div>
            {col.links.map((l) => (
              <Link
                key={l}
                href="#"
                className="block hover:text-cream transition-colors"
              >
                {l}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="pt-4 border-t border-cream/10 flex flex-col sm:flex-row sm:justify-between gap-1.5 text-[10px] uppercase tracking-[0.1em] text-stone">
        <span className="m-auto">© 2026 Pace Studio</span>
      </div>
    </footer>
  );
}

// ────────────────────────────────────────────────────────────────────────────
//  Page
// ────────────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <main>
      <Nav />
      <Hero />
      <StatsBar />
      <Classes />
      <Philosophy />
      <Schedule />
      <Faq />
      <Pricing />
      <Footer />
    </main>
  );
}
