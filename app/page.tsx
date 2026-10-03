const PHONE_DISPLAY = "(905) 703-6329";
const PHONE_TEL = "tel:+19057036329";
const SMS = "sms:+19057036329";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=JP%20Stone%20%26%20Landscapes&query_place_id=ChIJIyEErqiMV4AR--wPfHC5PR4";
const INSTAGRAM = "https://www.instagram.com/jp_stoneland";

type IconProps = { className?: string };
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

function PhoneIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}
function MessageIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
function StarIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z" />
    </svg>
  );
}
function Stars({ className = "h-5 w-5" }: IconProps) {
  return (
    <span className="flex text-star" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <StarIcon key={i} className={className} />
      ))}
    </span>
  );
}
function ArrowIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg {...base} strokeWidth={2} className={className}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}
function MapPinIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function ClockIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}
function AwardIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="8" r="6" />
      <path d="M15.5 13 17 22l-5-3-5 3 1.5-9" />
    </svg>
  );
}
function ListIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01" />
    </svg>
  );
}
function PaletteIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 22a10 10 0 1 1 10-10c0 2.8-2.2 4-4 4h-2a2 2 0 0 0-1.5 3.3A1.6 1.6 0 0 1 12 22z" />
      <circle cx="7.5" cy="10.5" r="1" />
      <circle cx="12" cy="7" r="1" />
      <circle cx="16.5" cy="10.5" r="1" />
    </svg>
  );
}
function WrenchIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z" />
    </svg>
  );
}
function PaversIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="3" width="8" height="5" rx="1" />
      <rect x="13" y="3" width="8" height="5" rx="1" />
      <rect x="3" y="10" width="5" height="5" rx="1" />
      <rect x="10" y="10" width="11" height="5" rx="1" />
      <rect x="3" y="17" width="11" height="4" rx="1" />
      <rect x="16" y="17" width="5" height="4" rx="1" />
    </svg>
  );
}
function StepsIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 21h18V15h-6V9H9V3H3z" />
    </svg>
  );
}
function WallIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 21h18M4 21V9l16-4v16" />
      <path d="M4 13h16M4 17h16M9 9v4M14 7.5V13M11 13v4M16 13v4" />
    </svg>
  );
}
function PatioIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3v11M5 9l7-6 7 6z" />
      <path d="M3 21l3-7h12l3 7M9 14v7M15 14v7" />
    </svg>
  );
}
function FlagIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6 21V3l10 4-10 4" />
      <ellipse cx="12" cy="20" rx="8" ry="1.5" />
    </svg>
  );
}
function RulerIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.4 2.4 0 0 1 0-3.4l2.6-2.6a2.4 2.4 0 0 1 3.4 0z" />
      <path d="m14.5 12.5 2-2M11.5 9.5l2-2M8.5 6.5l2-2M17.5 15.5l2-2" />
    </svg>
  );
}
function InstagramIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

const services = [
  {
    icon: PaversIcon,
    title: "Interlock Driveways, Walkways & Patios",
    text: "Design and installation of interlocking stone for driveways, front walkways and patios. Interlock is one of our two specialties, done with a proper base so it stays flat for years.",
    featured: true,
  },
  {
    icon: StepsIcon,
    title: "Stone Steps & Entryways",
    text: "Natural stone front entrances, steps and staircases built to last. Customers notice the attention to detail the moment they walk up to the door.",
    featured: true,
  },
  {
    icon: WallIcon,
    title: "Retaining Walls",
    text: "Retaining walls for grade changes, raised beds and garden terraces, built to hold the soil and look good doing it.",
  },
  {
    icon: WrenchIcon,
    title: "Repairs, Re-levelling & Parging",
    text: "Not every job is a rebuild. We repair mortar joints, patch crumbling steps, fix parging and re-level sunken interlock, often saving you the cost of replacement.",
  },
  {
    icon: FlagIcon,
    title: "Backyard Patios & Putting Greens",
    text: "Turn a forgotten corner of the yard into a space the family uses. We have built patios with gardens and even a backyard putting green.",
  },
  {
    icon: RulerIcon,
    title: "Landscape Design, Gardens & Fences",
    text: "Jay works through the design with you, with renderings and real stone samples, then handles garden installation and fence work to finish the project.",
  },
];

const reviews = [
  {
    name: "Liz B.",
    job: "Landscape & hardscape renovation",
    text: "One of the best contractor experiences of our whole home renovation. The workmanship, attention to detail, work ethic and staying within budget were all excellent.",
  },
  {
    name: "Judith",
    job: "Front-of-home stone design",
    text: "I was not sure what I wanted and found it hard to picture the stone colour and the finished look. Jay went back and forth with me until the design was right.",
  },
  {
    name: "Chris C.",
    job: "Crumbling front steps",
    text: "Jay patched our failing steps until they were sturdy and looked new before we sold the house, and saved us a lot of money. Professional but friendly and easy to talk to.",
  },
  {
    name: "Paul",
    job: "Stair & interlock repair",
    text: "He repaired the mortar joints on our front staircase, re-levelled the front interlock, fixed the parging and cleverly cemented loose stones in the backyard for safety.",
  },
  {
    name: "Dave S.",
    job: "New patio",
    text: "Jay turned a forgotten area of our home into a space the family loves. Fast communication, and a very clear picture of how the patio would look before it was built.",
  },
  {
    name: "Tom H.",
    job: "Putting green, patio & garden",
    text: "Jay built a backyard putting green with a patio and garden. It came together better than we imagined.",
  },
  {
    name: "Lori W.",
    job: "Stone entryway",
    text: "Thrilled with our new stone entryway. Jay was professional, knowledgeable and dedicated to bringing my vision to life.",
  },
  {
    name: "Shelley G.",
    job: "Front walkway",
    text: "A wonderful transformation of our front walkway. Extremely professional, trustworthy and a great work ethic.",
  },
  {
    name: "marcolv (Google reviewer)",
    job: "Full landscape project",
    text: "Extremely professional. He broke the quote into several line items, explained the process in detail and showed us a rendering and physical samples before starting.",
  },
  {
    name: "James V.",
    job: "General stonework",
    text: "Great little company. Great work, fair prices, good guy.",
  },
];

const steps = [
  { title: "Call or text Jay", text: "Tell Jay about the project or the repair. You deal with the owner from the first call." },
  { title: "Site visit", text: "Jay looks at the space, takes measurements and talks through what you want and what will last." },
  { title: "Rendering & stone samples", text: "See a rendering and hold real stone samples, so you can picture colours and the finished look before you commit." },
  { title: "Line-item quote", text: "Your quote is broken down line by line, so you know exactly what you are paying for." },
  { title: "We build it", text: "Careful, detail-focused work with quick updates along the way, finished within the budget you agreed to." },
];

const projects = [
  { icon: FlagIcon, title: "Backyard putting green, patio & garden", where: "Georgetown backyard", text: "A full backyard makeover with a putting green, a stone patio and new garden beds. The homeowner says it came together better than imagined." },
  { icon: StepsIcon, title: "Entrance stair repair & interlock re-level", where: "Front entrance", text: "Repointed mortar joints, re-levelled the front interlock, repaired the parging and secured loose stones in the backyard for safety." },
  { icon: WrenchIcon, title: "Crumbling steps, fixed before a sale", where: "Halton Hills home", text: "Failing front steps patched until sturdy and like new, saving the sellers the cost of a full replacement." },
];

const faqs = [
  {
    q: "What areas do you serve?",
    a: "We are based in Georgetown and work throughout Halton Hills and the surrounding area. If you are nearby and not sure, call or text and ask.",
  },
  {
    q: "Do you take on small repair jobs?",
    a: "Yes. Repairs are a big part of what we do: mortar joints, crumbling steps, parging and sunken interlock. A good repair often saves you the cost of a full rebuild.",
  },
  {
    q: "How will I know what the finished job will look like?",
    a: "Jay works through the design with you and shows you a rendering plus physical stone samples, so you can see the colours and the finished look before any work starts.",
  },
  {
    q: "How do your quotes work?",
    a: "Your quote is broken down into line items with the process explained, so there are no surprises. Customers regularly mention that our prices are fair and that we stay within budget.",
  },
  {
    q: "How much experience do you have?",
    a: "Jay has more than 15 years of experience in landscaping and stone work, specializing in interlock, stone masonry and retaining walls.",
  },
  {
    q: "Can you build something unusual, like a putting green?",
    a: "Yes. We have built a backyard putting green with a patio and garden. If you have an idea for your yard, we are happy to talk it through.",
  },
  {
    q: "What are your hours?",
    a: "We are open during the day and close at 5 p.m. Call or text (905) 703-6329 and Jay will get back to you quickly.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "JP Stone & Landscapes",
  telephone: "+1-905-703-6329",
  url: "https://jp-stone-landscapes.growlocalvisibility.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Georgetown",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  areaServed: [
    { "@type": "City", name: "Georgetown" },
    { "@type": "City", name: "Halton Hills" },
  ],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "12" },
  hasMap: MAPS_URL,
  sameAs: [INSTAGRAM],
  makesOffer: services.map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s.title },
  })),
};

function CallButton({ label, className = "" }: { label: string; className?: string }) {
  return (
    <a
      href={PHONE_TEL}
      className={`group inline-flex min-h-13 items-center justify-between gap-3 rounded-full bg-cta py-2 pl-6 pr-2 font-bold text-cta-ink shadow-[0_14px_30px_-14px_oklch(0.44_0.1_155/0.8)] transition duration-300 ease-spring hover:bg-cta-hover active:scale-[0.98] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand ${className}`}
    >
      {label}
      <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15 transition duration-300 ease-spring group-hover:translate-x-0.5 group-hover:scale-105">
        <PhoneIcon className="h-4.5 w-4.5" />
      </span>
    </a>
  );
}

const btnGhost =
  "inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-brand-deep/25 bg-surface px-6 py-3 font-bold text-brand-deep transition duration-300 ease-spring hover:border-brand-deep hover:bg-brand-deep hover:text-white active:scale-[0.98] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand";

function Head({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="max-w-[46rem]">
      <p className="inline-flex rounded-full bg-brand-soft px-3.5 py-1 text-sm font-semibold text-brand-deep">{eyebrow}</p>
      <h2 className="mt-4 text-[clamp(2rem,3.6vw,2.85rem)] font-bold text-brand-deep">{title}</h2>
      {intro && <p className="mt-4 max-w-[60ch] text-lg text-muted">{intro}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-white focus:px-4 focus:py-2"
      >
        Skip to content
      </a>

      <div className="hidden bg-brand-deep text-sm text-white/90 md:block">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-2">
          <span className="flex items-center gap-2">
            <MapPinIcon className="h-4 w-4" /> Georgetown &amp; Halton Hills, Ontario
          </span>
          <span className="flex items-center gap-5">
            <span>15+ years of stone work</span>
            <span className="flex items-center gap-2">
              <ClockIcon className="h-4 w-4" /> Closes 5 p.m.
            </span>
          </span>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-line bg-surface/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-3 md:px-6">
          <a href="#top" className="flex items-center gap-3" aria-label="JP Stone & Landscapes home">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand text-white">
              <PaversIcon className="h-6 w-6" />
            </span>
            <span className="font-heading text-xl font-bold leading-none text-brand-deep md:text-2xl">
              JP Stone <span className="text-brand">&amp;</span> Landscapes
            </span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-7 font-semibold lg:flex">
            <a href="#services" className="hover:text-brand">Services</a>
            <a href="#reviews" className="hover:text-brand">Reviews</a>
            <a href="#about" className="hover:text-brand">About</a>
            <a href="#area" className="hover:text-brand">Area</a>
            <a href="#faq" className="hover:text-brand">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={PHONE_TEL} className="hidden font-bold text-brand-deep xl:inline">
              {PHONE_DISPLAY}
            </a>
            <CallButton label="Free Estimate" className="hidden sm:inline-flex" />
            <a
              href={PHONE_TEL}
              aria-label={`Call ${PHONE_DISPLAY}`}
              className="grid h-12 w-12 place-items-center rounded-full bg-cta text-cta-ink sm:hidden"
            >
              <PhoneIcon />
            </a>
          </div>
        </div>
      </header>

      <main id="main" className="pb-20 md:pb-0">
        {/* Hero */}
        <section id="top" className="bg-bg">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 py-14 md:px-6 md:py-24 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rise">
              <h1 className="text-[clamp(2.3rem,5vw,3.8rem)] font-bold text-brand-deep">
                Interlock, Stone Steps &amp; Retaining Walls in Georgetown, Ontario
              </h1>
              <p className="mt-6 max-w-[56ch] text-lg text-muted md:text-xl">
                Jay brings 15+ years of stone masonry and landscape construction to every job, from
                a crumbling front step to a full backyard. You see a rendering and real stone samples
                first, and you get a quote broken down line by line.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CallButton label={`Call ${PHONE_DISPLAY}`} className="text-lg" />
                <a href={SMS} className={btnGhost}>
                  <MessageIcon /> Text Jay a photo
                </a>
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-1"
              >
                <Stars />
                <span className="font-bold">5.0</span>
                <span className="text-muted">·</span>
                <span className="underline decoration-line underline-offset-4 hover:decoration-brand">
                  12 Google reviews
                </span>
                <span className="text-muted">·</span>
                <span>15+ years experience</span>
                <span className="text-muted">·</span>
                <span>Owner-run</span>
              </a>
            </div>

            <div className="rise rise-2 rounded-[2rem] bg-brand-deep/5 p-2 ring-1 ring-brand-deep/10">
              <figure className="rounded-[calc(2rem-0.5rem)] bg-surface p-7 shadow-[0_30px_60px_-40px_oklch(0.34_0.07_40/0.55)] md:p-9">
                <Stars className="h-5 w-5" />
                <blockquote className="mt-4 font-heading text-2xl font-semibold leading-snug text-brand-deep md:text-[1.75rem]">
                  &ldquo;One of the best contractor experiences of our whole home renovation.&rdquo;
                </blockquote>
                <p className="mt-4 text-muted">
                  Workmanship, attention to detail, work ethic, and it came in within budget.
                </p>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-brand text-white font-bold">L</span>
                  <span className="leading-tight">
                    <span className="block font-bold">Liz B.</span>
                    <span className="text-sm text-muted">Landscape &amp; hardscape renovation</span>
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section aria-label="Why homeowners choose JP Stone" className="bg-brand text-white">
          <ul className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-5 py-9 md:grid-cols-4 md:px-6">
            {[
              { icon: StarIcon, t: "5.0 on Google", s: "12 reviews" },
              { icon: AwardIcon, t: "15+ years", s: "Stone & landscape work" },
              { icon: PaletteIcon, t: "See it first", s: "Renderings + real samples" },
              { icon: ListIcon, t: "Line-item quotes", s: "No guesswork on price" },
            ].map(({ icon: Icon, t, s }) => (
              <li key={t} className="flex items-center gap-3">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white/12">
                  <Icon className="h-6 w-6" />
                </span>
                <span>
                  <span className="block font-heading text-xl font-bold leading-tight">{t}</span>
                  <span className="text-sm text-white/80">{s}</span>
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Services */}
        <section id="services" className="bg-surface py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <Head
              eyebrow="Services"
              title="Stone work, done properly, big or small"
              intro="We specialize in interlock and stone masonry, and we are just as happy to fix a set of failing steps as to build a whole new backyard."
            />
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
              {services.map(({ icon: Icon, title, text, featured }) => (
                <article
                  key={title}
                  className={`group flex flex-col rounded-[1.5rem] p-7 transition duration-500 ease-spring hover:-translate-y-1 ${
                    featured
                      ? "bg-brand-deep text-white lg:col-span-3 md:p-9"
                      : "border border-line bg-bg hover:shadow-[0_24px_50px_-36px_oklch(0.34_0.07_40/0.6)] lg:col-span-2"
                  }`}
                >
                  <span
                    className={`grid h-14 w-14 place-items-center rounded-2xl ${
                      featured ? "bg-white/12 text-white" : "bg-brand-soft text-brand-deep"
                    }`}
                  >
                    <Icon />
                  </span>
                  {featured && (
                    <span className="mt-5 w-fit rounded-full bg-star px-3 py-0.5 text-sm font-bold text-ink">Specialty</span>
                  )}
                  <h3 className={`mt-4 text-2xl font-bold ${featured ? "text-white" : "text-brand-deep"}`}>{title}</h3>
                  <p className={`mt-3 flex-1 ${featured ? "text-white/85" : "text-muted"}`}>{text}</p>
                  <a
                    href={PHONE_TEL}
                    className={`mt-6 inline-flex items-center gap-2 font-bold ${featured ? "text-white" : "text-brand"}`}
                  >
                    Call about this
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-current/10 transition duration-300 ease-spring group-hover:translate-x-0.5 group-hover:-translate-y-px">
                      <ArrowIcon className="h-3.5 w-3.5" />
                    </span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Head
                eyebrow="Reviews"
                title="Rated 5.0 from 12 Google reviews"
                intro="Every review names Jay. Customers come back to the same things: design help, clear quotes, fair prices and fast replies."
              />
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={`${btnGhost} shrink-0`}>
                Read all reviews on Google <ArrowIcon />
              </a>
            </div>
            <div className="mt-12 columns-1 gap-5 md:columns-2 lg:columns-3">
              {reviews.map((r) => (
                <figure key={r.name} className="mb-5 break-inside-avoid rounded-[1.5rem] bg-surface p-6 shadow-[0_18px_40px_-34px_oklch(0.34_0.07_40/0.6)]">
                  <Stars className="h-4.5 w-4.5" />
                  <blockquote className="mt-3">&ldquo;{r.text}&rdquo;</blockquote>
                  <figcaption className="mt-5 border-t border-line pt-4 text-sm">
                    <span className="font-bold text-ink">{r.name}</span>
                    <span className="text-muted"> · {r.job}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-surface py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-5 md:px-6 lg:grid-cols-2">
            <div>
              <Head eyebrow="About Jay" title="A Georgetown stone mason who designs it with you" />
              <div className="mt-6 max-w-[62ch] space-y-4 text-lg">
                <p>
                  JP Stone &amp; Landscapes is a Georgetown landscape construction and stone masonry
                  company run by Jay, who has more than 15 years of experience in high-end
                  landscaping. Our specialties are interlock, stone masonry and retaining walls.
                </p>
                <p>
                  Jay handles every project personally, from the first design conversation to the
                  last stone. If you cannot picture how a colour will look against your brick, he
                  will go back and forth with you, show you a rendering and put real samples in your
                  hand until it is right.
                </p>
                <p>
                  We take on full front-entry and backyard transformations, but we also do the
                  repairs that keep a home safe and sellable: mortar joints, crumbling steps, parging
                  and sunken interlock. As one customer put it, a great little company with great
                  work and fair prices.
                </p>
              </div>
            </div>
            <ul className="grid content-start gap-4 sm:grid-cols-2">
              {[
                { icon: PaletteIcon, t: "Renderings & samples", d: "See the design and hold the stone before you commit." },
                { icon: ListIcon, t: "Clear, itemized quotes", d: "Every part of the job listed and explained." },
                { icon: MessageIcon, t: "Fast communication", d: "Customers mention how quickly Jay gets back to them." },
                { icon: WrenchIcon, t: "Repairs too", d: "Small fixes get the same care as big builds." },
              ].map(({ icon: Icon, t, d }) => (
                <li key={t} className="rounded-[1.5rem] bg-bg p-1.5 ring-1 ring-line">
                  <div className="h-full rounded-[calc(1.5rem-0.375rem)] bg-surface p-6">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand text-white">
                      <Icon />
                    </span>
                    <h3 className="mt-4 text-xl font-bold text-brand-deep">{t}</h3>
                    <p className="mt-2 text-muted">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <Head eyebrow="How it works" title="From first call to finished stone" />
            <ol className="mt-12 grid gap-5 md:grid-cols-5">
              {steps.map((s, i) => (
                <li key={s.title} className="rounded-[1.5rem] bg-surface p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-brand font-heading text-xl font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-brand-deep">{s.title}</h3>
                  <p className="mt-2 text-muted">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Recent projects */}
        <section className="bg-surface py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <Head
              eyebrow="Recent jobs"
              title="A few projects our customers wrote about"
              intro="Want to see photos? Our latest work is on Instagram, or text Jay and he will send pictures of similar jobs."
            />
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {projects.map(({ icon: Icon, title, where, text }) => (
                <article key={title} className="rounded-[1.5rem] border border-line bg-bg p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand-deep">
                    <Icon />
                  </span>
                  <p className="mt-4 text-sm font-semibold text-brand">{where}</p>
                  <h3 className="mt-1 text-xl font-bold text-brand-deep">{title}</h3>
                  <p className="mt-2 text-muted">{text}</p>
                </article>
              ))}
            </div>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className={`${btnGhost} mt-8`}>
              <InstagramIcon /> See our work on Instagram
            </a>
          </div>
        </section>

        {/* Service area */}
        <section id="area" className="bg-tint py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 md:px-6 lg:grid-cols-2">
            <div>
              <Head
                eyebrow="Service area"
                title="Serving Georgetown and Halton Hills"
                intro="We are based in Georgetown and work on homes across Halton Hills and the surrounding area."
              />
              <ul className="mt-6 flex flex-wrap gap-3">
                {["Georgetown", "Halton Hills", "Surrounding areas"].map((a) => (
                  <li key={a} className="flex items-center gap-2 rounded-full bg-surface px-5 py-2.5 font-semibold text-brand-deep ring-1 ring-line">
                    <MapPinIcon className="h-4 w-4 text-brand" /> {a}
                  </li>
                ))}
              </ul>
              <CallButton label="Ask if we cover your street" className="mt-8" />
            </div>
            <div className="rounded-[2rem] bg-brand-deep/5 p-2 ring-1 ring-brand-deep/10">
              <iframe
                title="Map of Georgetown, Ontario, the JP Stone & Landscapes service area"
                src="https://maps.google.com/maps?q=Georgetown%2C%20Ontario&z=12&output=embed"
                className="h-[380px] w-full rounded-[calc(2rem-0.5rem)]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-surface py-16 md:py-24">
          <div className="mx-auto max-w-[860px] px-5 md:px-6">
            <Head eyebrow="FAQ" title="Questions before you call" />
            <div className="mt-10 space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="rounded-2xl border border-line bg-bg">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-heading text-xl font-bold text-brand-deep">
                    {f.q}
                    <span className="faq-icon grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-soft text-brand transition-transform duration-300 ease-spring">
                      <svg {...base} strokeWidth={2} className="h-4 w-4">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <p className="max-w-[62ch] px-6 pb-6 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="contact" className="bg-brand-deep text-white">
          <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-8 px-5 py-16 md:flex-row md:items-center md:px-6 md:py-20">
            <div>
              <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold">Ready to fix it or build it? Call Jay.</h2>
              <p className="mt-3 max-w-[52ch] text-lg text-white/85">
                {PHONE_DISPLAY} · Closes 5 p.m. Text a photo of the job for a faster answer.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CallButton label={`Call ${PHONE_DISPLAY}`} className="text-lg" />
              <a
                href={SMS}
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 font-bold text-white transition duration-300 ease-spring hover:bg-white hover:text-brand-deep active:scale-[0.98]"
              >
                <MessageIcon /> Send a text
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-bg pb-24 md:pb-0">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-14 md:grid-cols-4 md:px-6">
          <div className="md:col-span-2">
            <p className="font-heading text-2xl font-bold text-brand-deep">JP Stone &amp; Landscapes</p>
            <p className="mt-3 max-w-[44ch] text-muted">
              Interlock, stone masonry, retaining walls and landscape construction in Georgetown,
              Ontario. Run by Jay, 15+ years experience.
            </p>
            <p className="mt-4 font-bold">
              <a href={PHONE_TEL} className="hover:text-brand">{PHONE_DISPLAY}</a>
            </p>
            <p className="text-muted">Georgetown, ON · Closes 5 p.m.</p>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="JP Stone & Landscapes on Instagram"
              className="mt-4 inline-grid h-11 w-11 place-items-center rounded-full bg-brand-soft text-brand-deep hover:bg-brand hover:text-white"
            >
              <InstagramIcon />
            </a>
          </div>
          <div>
            <p className="font-bold">Services</p>
            <ul className="mt-3 space-y-1.5 text-muted">
              {services.map((s) => (
                <li key={s.title}>{s.title}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-bold">Service area</p>
            <ul className="mt-3 space-y-1.5 text-muted">
              <li>Georgetown, ON</li>
              <li>Halton Hills, ON</li>
            </ul>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 font-semibold text-brand">
              Find us on Google <ArrowIcon />
            </a>
          </div>
        </div>
        <div className="border-t border-line py-5 text-center text-sm text-muted">
          © {new Date().getFullYear()} JP Stone &amp; Landscapes
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-line bg-surface p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] md:hidden">
        <a href={PHONE_TEL} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cta font-bold text-cta-ink active:scale-[0.98]">
          <PhoneIcon /> Call
        </a>
        <a href={SMS} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-brand-deep/30 font-bold text-brand-deep active:scale-[0.98]">
          <MessageIcon /> Text
        </a>
      </div>
    </>
  );
}
