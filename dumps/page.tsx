import Link from "next/link";

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
  { value: <>55<span className="text-base align-baseline">min</span></>, label: "Per session" },
  { value: "6am", label: "First class" },
];

const CLASSES = [
  { name: "Reformer", note: "Full body · 55 min", tone: "from-[#b8a98c] to-[#8c7f62]" },
  { name: "Mat", note: "Foundations · 50 min", tone: "from-[#a8b095] to-[#7a8466]" },
  { name: "Tower", note: "Spring work · 55 min", tone: "from-[#c9b8a0] to-[#9d8e73]" },
  { name: "Private", note: "1:1 · 55 min", tone: "from-[#b0a28a] to-[#847660]" },
];

const SCHEDULE = [
  { time: "6:30", meridiem: "am", title: "Reformer Flow", level: "All levels", coach: "Mara K.", spots: 3, status: "open" as const },
  { time: "9:00", meridiem: "am", title: "Tower & Springs", level: "Intermediate", coach: "Julien R.", spots: 1, status: "limited" as const },
  { time: "12:15", meridiem: "pm", title: "Mat Foundations", level: "Beginner welcome", coach: "Anya P.", spots: 6, status: "open" as const },
  { time: "5:45", meridiem: "pm", title: "Reformer Strong", level: "Advanced", coach: "Mara K.", spots: 0, status: "waitlist" as const },
];

const PRICING = [
  { tier: "Drop-in", price: "$38", unit: "per class", note: "Try us out · no commitment", featured: false },
  { tier: "Eight pack", price: "$260", unit: "$32.50 per class", note: "Valid 60 days · share with one friend", featured: true },
  { tier: "Unlimited", price: "$295", unit: "all classes", priceSuffix: "/mo", note: "Members-only events · guest passes", featured: false },
];

// ────────────────────────────────────────────────────────────────────────────
//  Sections
// ────────────────────────────────────────────────────────────────────────────

function Nav() {
  return (
    <nav className="flex items-center justify-between px-6 md:px-10 py-5 border-b border-espresso/10">
      <Link href="/" className="font-display text-lg tracking-[0.18em] text-espresso">
        REFORM
      </Link>
      <ul className="hidden md:flex gap-7 text-xs uppercase tracking-[0.08em] text-ink">
        {NAV_LINKS.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="hover:text-espresso transition-colors">
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
    <section className="px-6 md:px-10 py-14 md:py-20 grid md:grid-cols-[1.3fr_1fr] gap-8 md:gap-10 items-center">
      <div>
        <p className="eyebrow mb-4">— Boutique pilates · est. 2021</p>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-espresso">
          Strength,
          <br />
          <em className="italic text-sage">slowly.</em>
        </h1>
        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink">
          A small studio in Silver Lake teaching reformer, mat, and tower pilates. Classes capped at eight. No mirrors, no music push, no rush.
        </p>
        <div className="mt-7 flex flex-wrap gap-2.5">
          <Link
            href="/book"
            className="text-xs uppercase tracking-[0.08em] px-5 py-3 rounded-full bg-espresso text-cream hover:bg-ink transition-colors"
          >
            Try a class · $25
          </Link>
          <Link
            href="/schedule"
            className="text-xs uppercase tracking-[0.08em] px-5 py-3 rounded-full border border-espresso text-espresso hover:bg-espresso hover:text-cream transition-colors"
          >
            View schedule
          </Link>
        </div>
      </div>

      <div className="aspect-[4/5] rounded-sm overflow-hidden relative bg-gradient-to-br from-[#c4b89e] via-[#a89d82] to-[#8b8169]">
        {/* Replace with <Image /> when studio photography is shot */}
        <span className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.18em] text-cream/90">
          Frame 01 · Studio
        </span>
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
            <div className="font-display text-3xl md:text-[28px] text-espresso">{s.value}</div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.15em] text-stone">{s.label}</div>
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
          <h2 className="font-display text-3xl md:text-4xl tracking-tight text-espresso">Four ways to move.</h2>
        </div>
        <Link href="/classes" className="hidden sm:inline-block text-xs text-sage border-b border-sage pb-0.5 hover:text-espresso hover:border-espresso transition-colors">
          All classes →
        </Link>
      </header>

      <ul className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {CLASSES.map((c) => (
          <li key={c.name} className="bg-cream-3 rounded-sm overflow-hidden group cursor-pointer">
            <div className={`aspect-[3/4] bg-gradient-to-b ${c.tone} transition-transform duration-500 group-hover:scale-105`} />
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
          &ldquo;Pilates isn&rsquo;t a workout you get through. It&rsquo;s an hour of paying attention. The body answers when you finally listen.&rdquo;
        </blockquote>
        <cite className="not-italic block mt-6 text-[11px] uppercase tracking-[0.15em] text-stone">
          Mara K. · Founder &amp; lead instructor
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
          <h2 className="font-display text-3xl md:text-4xl tracking-tight text-espresso">Schedule</h2>
        </div>
        <div className="flex gap-1.5 text-[11px] text-ink">
          <button className="px-3 py-1.5 border border-espresso rounded-full">Today</button>
          <button className="px-3 py-1.5 border border-espresso/20 rounded-full text-stone hover:border-espresso/40 transition-colors">Week</button>
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
            <div className={`hidden md:block text-[11px] ${s.status === "limited" ? "text-terra" : s.status === "waitlist" ? "text-stone" : "text-sage"}`}>
              {s.status === "waitlist" ? "Waitlist" : `${s.spots} spot${s.spots === 1 ? "" : "s"}`}
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
        <h2 className="font-display text-3xl md:text-4xl tracking-tight text-espresso">Find your rhythm.</h2>
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
            <div className={`text-[11px] uppercase tracking-[0.15em] mb-3.5 ${p.featured ? "text-stone-soft" : "text-stone"}`}>
              {p.tier}
            </div>
            <div className="font-display text-4xl leading-none">
              {p.price}
              {p.priceSuffix && (
                <span className={`text-sm ${p.featured ? "text-stone-soft" : "text-stone"}`}>{p.priceSuffix}</span>
              )}
            </div>
            <div className={`text-[11px] mt-1.5 ${p.featured ? "text-stone-soft" : "text-stone"}`}>
              {p.unit}
            </div>
            <p
              className={`mt-4 pt-3.5 border-t text-xs leading-relaxed ${
                p.featured ? "border-cream/15 text-cream/80" : "border-espresso/10 text-ink"
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
          <div className="font-display text-lg tracking-[0.18em] text-cream mb-2.5">REFORM</div>
          <address className="not-italic text-xs leading-relaxed">
            2847 Sunset Blvd
            <br />
            Silver Lake, Los Angeles
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
              <Link key={l} href="#" className="block hover:text-cream transition-colors">
                {l}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="pt-4 border-t border-cream/10 flex flex-col sm:flex-row sm:justify-between gap-1.5 text-[10px] uppercase tracking-[0.1em] text-stone">
        <span>© 2026 Reform Studio</span>
        <span>Designed in Los Angeles</span>
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
      <Pricing />
      <Footer />
    </main>
  );
}
