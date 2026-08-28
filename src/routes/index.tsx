import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef, useState } from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Menu,
  X,
} from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import portraitAsset from "@/assets/portrait.jpg.asset.json";
import {
  certifications,
  education,
  experience,
  marqueeWords,
  profile,
  projects,
  skillGroups,
  stats,
} from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Syed Noor Ul Hassnain — AI/ML Engineer & Flutter Developer" },
      {
        name: "description",
        content:
          "Portfolio of Syed Noor Ul Hassnain: AI and machine learning engineer and Flutter developer in Lahore, building ML models, AI agents and cross-platform mobile apps.",
      },
      {
        property: "og:title",
        content: "Syed Noor Ul Hassnain — AI/ML Engineer & Flutter Developer",
      },
      {
        property: "og:description",
        content:
          "ML models, RAG-powered AI agents and production Flutter apps. Projects, experience and certifications.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-hairline bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-display text-sm font-bold tracking-[0.2em] uppercase">
          S.N.U. Hassnain
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="link-underline text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden border-t border-hairline md:hidden"
      >
        <div className="flex flex-col px-5 py-3">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="border-b border-hairline py-3 font-display text-lg last:border-0"
            >
              {n.label}
            </a>
          ))}
        </div>
      </motion.div>
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const title = "AI ENGINEER";
  const title2 = "FLUTTER DEV";

  return (
    <section id="top" ref={ref} className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
      <div className="grid-paper pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <motion.div style={{ y, opacity: fade }} className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-end gap-12 lg:grid-cols-[1.35fr_1fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs tracking-[0.35em] text-muted-foreground uppercase"
            >
              {profile.location} — Available for work
            </motion.p>

            <h1 className="mt-6 font-display text-[11vw] leading-[0.88] font-bold tracking-tighter sm:text-[7vw] lg:text-[4.6rem]">
              {[title, title2].map((line, li) => (
                <span key={line} className="block overflow-hidden whitespace-nowrap">
                  {line.split("").map((ch, i) => (
                    <motion.span
                      key={`${line}-${i}`}
                      className="inline-block"
                      initial={{ y: "110%" }}
                      animate={{ y: 0 }}
                      transition={{
                        duration: 0.9,
                        delay: 0.1 + li * 0.12 + i * 0.028,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      {ch === " " ? "\u00A0" : ch}
                    </motion.span>
                  ))}
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {profile.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.7 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                href="#work"
                className="group inline-flex items-center gap-2 bg-ink px-6 py-3.5 text-sm font-medium tracking-wide text-ink-foreground uppercase transition-transform hover:-translate-y-0.5"
              >
                View work
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 border border-foreground px-6 py-3.5 text-sm font-medium tracking-wide uppercase transition-colors hover:bg-foreground hover:text-background"
              >
                Get in touch
              </a>
            </motion.div>
          </div>

          <Portrait />
        </div>
      </motion.div>
    </section>
  );
}

function Portrait() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto w-full max-w-xs lg:max-w-none"
    >
      <div className="relative aspect-[4/5] overflow-hidden border border-foreground bg-ink">
        <img
          src={portraitAsset.url}
          alt="Portrait of Syed Noor Ul Hassnain"
          className="h-full w-full object-cover"
          loading="eager"
        />
      </div>
      {/* orbiting comet star — circles the frame twice, then fades away */}
      {[
        { size: 14, opacity: 1, delay: 1.2, glow: true },
        { size: 9, opacity: 0.55, delay: 1.32, glow: false },
        { size: 6, opacity: 0.3, delay: 1.44, glow: false },
      ].map((t, i) => (
        <motion.div
          key={i}
          aria-hidden
          className="pointer-events-none absolute z-10"
          style={{ x: "-50%", y: "-50%" }}
          initial={{ top: "0%", left: "0%", opacity: 0 }}
          animate={{
            top: ["0%", "0%", "100%", "100%", "0%"],
            left: ["0%", "100%", "100%", "0%", "0%"],
            opacity: [0, 1, 1, 1, 0],
          }}
          transition={{
            duration: 4.5,
            times: [0, 0.25, 0.5, 0.75, 1],
            ease: "linear",
            repeat: 1,
            delay: t.delay,
          }}
        >
          <svg
            width={t.size}
            height={t.size}
            viewBox="0 0 24 24"
            fill="white"
            style={{
              opacity: t.opacity,
              filter: t.glow
                ? "drop-shadow(0 0 6px rgba(255,255,255,0.95)) drop-shadow(0 0 18px rgba(255,255,255,0.55))"
                : "drop-shadow(0 0 4px rgba(255,255,255,0.6))",
            }}
          >
            <path d="M12 0c.8 6.5 5.5 11.2 12 12-6.5.8-11.2 5.5-12 12-.8-6.5-5.5-11.2-12-12C6.5 11.2 11.2 6.5 12 0z" />
          </svg>
        </motion.div>
      ))}
      <div className="absolute -right-3 -bottom-3 -z-10 h-full w-full border border-hairline" />
    </motion.div>
  );
}

function Marquee() {
  return (
    <div className="overflow-hidden border-y border-hairline bg-ink py-4 text-ink-foreground">
      <div className="marquee-track">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center">
            {marqueeWords.map((w) => (
              <span
                key={`${k}-${w}`}
                className="flex items-center font-display text-sm tracking-[0.25em] uppercase"
              >
                <span className="px-6">{w}</span>
                <span className="opacity-40">/</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Stats() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <div className="grid grid-cols-2 gap-px border border-hairline bg-hairline md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="bg-background">
            <div className="p-6 sm:p-8">
              <div className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
                {s.value}
              </div>
              <p className="mt-2 text-xs tracking-[0.15em] text-muted-foreground uppercase">
                {s.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading index="01" title="About" kicker="Two disciplines, one engineer." />
      <div className="grid gap-10 md:grid-cols-2">
        <Reveal>
          <p className="text-lg leading-relaxed">
            I split my time between machine learning and mobile engineering. On the AI side I train
            neural networks for prediction tasks, build NLP and RAG pipelines, and wire up
            autonomous agents that handle real customer conversations.
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="text-lg leading-relaxed text-muted-foreground">
            On the mobile side I ship cross-platform Flutter apps end to end — clean MVVM and BLoC
            architecture, Firebase backends, REST integrations and third-party services like Stripe,
            Google Maps and Spotify. I have completed nine months of professional Flutter internship
            experience alongside my degree.
          </p>
        </Reveal>
      </div>
      <Reveal delay={0.2}>
        <div className="mt-14 grid gap-px border border-hairline bg-hairline sm:grid-cols-3">
          {[
            ["Degree", `${education.degree}`],
            ["University", education.school],
            ["Duration", education.period],
          ].map(([k, v]) => (
            <div key={k} className="bg-background p-6">
              <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
                {k}
              </p>
              <p className="mt-2 font-display text-lg font-semibold">{v}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {education.coursework.map((c) => (
            <span
              key={c}
              className="border border-hairline px-3 py-1.5 text-xs text-muted-foreground"
            >
              {c}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="border-t border-hairline bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <SectionHeading index="02" title="Skills" kicker="The stack I work in daily." />
        <div className="grid gap-px border border-hairline bg-hairline md:grid-cols-2">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.06} className="bg-background">
              <div className="h-full p-6 sm:p-8">
                <h3 className="font-display text-xl font-bold">{g.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span
                      key={it}
                      className="border border-foreground/15 px-3 py-1.5 text-xs transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading index="03" title="Experience" kicker="Professional Flutter internships." />
      <div className="space-y-px bg-hairline">
        {experience.map((e, i) => (
          <Reveal key={e.company} delay={i * 0.1} className="bg-background">
            <div className="group grid gap-6 py-8 md:grid-cols-[1fr_2fr]">
              <div>
                <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
                  {e.period}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-tight">{e.company}</h3>
                <p className="text-sm text-muted-foreground">
                  {e.role} · {e.length}
                </p>
              </div>
              <ul className="space-y-3">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-3 text-muted-foreground">
                    <span className="mt-2.5 h-px w-5 shrink-0 bg-foreground" />
                    <span className="leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="border-t border-hairline bg-ink text-ink-foreground">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <Reveal className="mb-12 border-b border-white/15 pb-5">
          <span className="font-mono text-xs tracking-[0.3em] opacity-60">04</span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-5xl">
            Selected Work
          </h2>
        </Reveal>
        <div className="grid gap-px bg-white/15 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.08} className="bg-ink">
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="h-full p-7 sm:p-9"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-60">
                    {p.tag}
                  </span>
                  <ArrowUpRight className="size-4 opacity-40" />
                </div>
                <h3 className="mt-4 font-display text-2xl leading-tight font-bold">{p.title}</h3>
                <ul className="mt-5 space-y-2.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="text-sm leading-relaxed opacity-70">
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="border border-white/25 px-2.5 py-1 text-[11px]">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading index="05" title="Certifications" kicker="DataCamp & community." />
      <div className="border-t border-hairline">
        {certifications.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.05}>
            <div className="group grid gap-3 border-b border-hairline py-7 transition-colors hover:bg-secondary/60 md:grid-cols-[1fr_1.4fr_auto] md:items-baseline md:gap-8 md:px-4">
              <h3 className="font-display text-xl font-semibold tracking-tight">{c.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{c.detail}</p>
              <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
                {c.issuer} · {c.year}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-hairline">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase">
            06 — Contact
          </p>
          <h2 className="mt-5 font-display text-[10vw] leading-[0.9] font-bold tracking-tighter sm:text-6xl lg:text-7xl">
            Let's build
            <br />
            something.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-px border border-hairline bg-hairline sm:grid-cols-2">
          {[
            { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
            {
              icon: Phone,
              label: "Phone",
              value: profile.phone,
              href: `tel:${profile.phone.replace(/[^+\d]/g, "")}`,
            },
            { icon: Linkedin, label: "LinkedIn", value: "syed-noor-ul-hassnain", href: profile.linkedin },
            { icon: Github, label: "GitHub", value: "Hassnain5", href: profile.github },
          ].map(({ icon: Icon, label, value, href }, i) => (
            <Reveal key={label} delay={i * 0.06} className="bg-background">
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 p-7 transition-colors hover:bg-foreground hover:text-background"
              >
                <span className="flex items-center gap-4">
                  <Icon className="size-5 shrink-0" />
                  <span>
                    <span className="block font-mono text-[10px] tracking-[0.3em] uppercase opacity-60">
                      {label}
                    </span>
                    <span className="font-display text-base font-medium break-all">{value}</span>
                  </span>
                </span>
                <ArrowUpRight className="size-4 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4" /> {profile.location}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 z-60 h-0.5 w-full origin-left bg-foreground"
    />
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <ProgressBar />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Certifications />
        <Contact />
      </main>
      <footer className="border-t border-hairline">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-xs tracking-[0.2em] text-muted-foreground uppercase sm:flex-row sm:px-8">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>{profile.role}</span>
        </div>
      </footer>
    </div>
  );
}
