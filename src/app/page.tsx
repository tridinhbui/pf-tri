"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BarChart3,
  Briefcase,
  ChevronRight,
  FileText,
  Globe,
  LineChart,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const LINKEDIN_URL = "https://www.linkedin.com/in/tribuidinh/";
const EMAIL = "tridinhbui0901@gmail.com";
const PHONE_DISPLAY = "+1 (783) 353-8782";
const PHONE_TEL = "+17833538782";
const LOCATION = "Smithfield, VA";

const easeLux = [0.22, 1, 0.36, 1] as const;
const easeSoft = [0.21, 0.47, 0.32, 0.98] as const;

const FadeIn = ({
  children,
  delay = 0,
  className = "",
  blur = false,
  y = 22,
  duration = 0.72,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  blur?: boolean;
  y?: number;
  duration?: number;
}) => {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: blur ? "blur(10px)" : "blur(0px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2, margin: "-0px 0px -8% 0px" }}
      transition={{ duration, delay, ease: easeLux }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const heroContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.11, delayChildren: 0.06 },
  },
};

const heroItem = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.88, ease: easeLux },
  },
};

const portraitVariants = {
  hidden: { opacity: 0, scale: 0.94, y: 20, filter: "blur(6px)" },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.95, ease: easeLux, delay: 0.12 },
  },
};

const metaStagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
};

const metaItem = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeSoft } },
};

const skillContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.035, delayChildren: 0.05 },
  },
};

const skillItem = {
  hidden: { opacity: 0, scale: 0.92, y: 6 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 380, damping: 22 },
  },
};

function SplashScreen() {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return null;

  return (
    <motion.div
      key="splash"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        filter: "blur(12px)",
        transition: { duration: 0.75, ease: easeLux },
      }}
      aria-hidden
    >
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(10,25,47,0.045),transparent_65%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
      <motion.div
        className="h-px w-[min(12rem,50vw)] origin-center bg-gradient-to-r from-transparent via-charcoal/35 to-transparent mb-10"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.15, ease: easeLux }}
      />
      <motion.p
        className="font-serif text-[clamp(1.25rem,4vw,1.75rem)] tracking-[0.35em] text-charcoal"
        initial={{ opacity: 0, y: 12, letterSpacing: "0.5em" }}
        animate={{ opacity: 1, y: 0, letterSpacing: "0.35em" }}
        transition={{ duration: 0.9, ease: easeLux, delay: 0.12 }}
      >
        TRI BUI
      </motion.p>
      <motion.p
        className="mt-5 text-[10px] font-mono uppercase tracking-[0.32em] text-zinc-400"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.45, ease: easeSoft }}
      >
        Strategic Finance · IR
      </motion.p>
      <motion.div
        className="mt-14 flex gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.85 }}
        transition={{ delay: 0.55, duration: 0.5 }}
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="h-1 w-1 rounded-full bg-charcoal/25"
            animate={{ opacity: [0.25, 1, 0.25] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: i * 0.18,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

const PORTRAIT_SRC = "/pic/avatar.jpg";

function HeroPortrait({ animate }: { animate: "hidden" | "show" }) {
  const [failed, setFailed] = useState(false);
  const reduceMotion = useReducedMotion();

  if (failed) {
    return (
      <div
        className="w-full max-w-[280px] aspect-[4/5] mx-auto md:mr-0 md:ml-auto bg-zinc-100 border border-zinc-200 flex flex-col items-center justify-center text-center p-6"
        aria-hidden
      >
        <span className="font-serif text-4xl text-charcoal tracking-tight">TB</span>
        <span className="text-xs font-mono text-zinc-500 mt-3 uppercase tracking-widest leading-relaxed">
          Thêm ảnh vào
          <br />
          public/pic/avatar.jpg
        </span>
      </div>
    );
  }

  const inner = (
    <>
      <div className="absolute -inset-3 border border-zinc-200 pointer-events-none" aria-hidden />
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-100 border border-zinc-200 shadow-sm">
        <Image
          src={PORTRAIT_SRC}
          alt="Tri Bui — professional portrait"
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) min(280px, 100vw), 280px"
          priority
          onError={() => setFailed(true)}
        />
      </div>
      <figcaption className="sr-only">Tri Bui</figcaption>
    </>
  );

  if (reduceMotion) {
    return (
      <figure className="relative w-full max-w-[280px] mx-auto md:mr-0 md:ml-auto">
        {inner}
      </figure>
    );
  }

  return (
    <motion.figure
      className="relative w-full max-w-[280px] mx-auto md:mr-0 md:ml-auto"
      variants={portraitVariants}
      initial="hidden"
      animate={animate}
    >
      {inner}
    </motion.figure>
  );
}

export default function Home() {
  const reduceMotion = useReducedMotion();
  const [splashVisible, setSplashVisible] = useState(true);
  const [contentRevealed, setContentRevealed] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      setSplashVisible(false);
      setContentRevealed(true);
      return;
    }
    const start = Date.now();
    const minMs = 1050;
    const maxMs = 2900;
    let finished = false;
    const dismiss = () => {
      if (finished) return;
      finished = true;
      const wait = Math.max(0, minMs - (Date.now() - start));
      window.setTimeout(() => setSplashVisible(false), wait);
    };
    const hardStop = window.setTimeout(() => setSplashVisible(false), maxMs);
    if (document.readyState === "complete") dismiss();
    else window.addEventListener("load", dismiss, { once: true });
    return () => {
      window.clearTimeout(hardStop);
      window.removeEventListener("load", dismiss);
    };
  }, [reduceMotion]);

  const heroAnimate = contentRevealed ? "show" : "hidden";

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatePresence
        mode="wait"
        onExitComplete={() => setContentRevealed(true)}
      >
        {splashVisible && <SplashScreen />}
      </AnimatePresence>

      <motion.nav
        className="fixed top-0 w-full z-50 bg-white/85 backdrop-blur-md border-b border-zinc-200/80"
        initial={reduceMotion ? false : { y: -24, opacity: 0 }}
        animate={
          contentRevealed
            ? { y: 0, opacity: 1, transition: { duration: 0.55, ease: easeLux } }
            : { y: -24, opacity: 0 }
        }
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.div
            className="font-serif text-lg tracking-wide text-charcoal"
            whileHover={{ opacity: 0.75 }}
            transition={{ duration: 0.2 }}
          >
            TRI BUI
          </motion.div>
          <div className="flex gap-6 text-sm font-medium tracking-wide text-zinc-600">
            {[
              ["#experience", "Experience"],
              ["#projects", "Projects"],
              ["#contact", "Contact"],
            ].map(([href, label]) => (
              <motion.a
                key={href}
                href={href}
                className="relative group hover:text-navy transition-colors"
                whileHover={{ y: -1 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {label}
                <span className="pointer-events-none absolute -bottom-0.5 left-0 right-0 h-px origin-left scale-x-0 bg-navy/40 transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      <motion.main
        className="max-w-6xl mx-auto px-6 pt-32 pb-24"
        initial={false}
        animate={
          contentRevealed
            ? { opacity: 1, filter: "blur(0px)" }
            : { opacity: reduceMotion ? 1 : 0.94, filter: reduceMotion ? "blur(0px)" : "blur(2px)" }
        }
        transition={{ duration: 0.6, ease: easeLux }}
      >
        <section className="min-h-[70vh] flex flex-col justify-center pb-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 lg:gap-16 items-center">
            <motion.div
              className="md:col-span-7"
              variants={heroContainer}
              initial="hidden"
              animate={heroAnimate}
            >
              <motion.div variants={heroItem}>
                <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-terminal-green bg-terminal-green-dim border border-terminal-green/25 rounded-full mb-6">
                  <span className="w-2 h-2 rounded-full bg-terminal-green/90" />
                  Corporate Finance · Investor Relations · Strategic Finance
                </div>
              </motion.div>
              <motion.h1
                variants={heroItem}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-charcoal leading-tight mb-6 tracking-tight"
              >
                Strategic Finance{" "}
                <br className="hidden sm:block" />
                <span className="text-zinc-500 italic font-light">&</span> Investor
                Relations.
              </motion.h1>
              <motion.p
                variants={heroItem}
                className="max-w-2xl mb-10 text-lg md:text-xl text-zinc-600 font-light leading-relaxed"
              >
                Bridging corporate finance, data-driven strategy, and capital markets.
                Specializing in FP&A, financial modeling, and AI-enabled workflows to
                drive institutional-quality decision making.
              </motion.p>
            </motion.div>

            <div className="md:col-span-5 flex justify-center md:justify-end">
              <HeroPortrait animate={heroAnimate} />
            </div>
          </div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-zinc-200"
            variants={metaStagger}
            initial="hidden"
            animate={heroAnimate}
          >
            <motion.div variants={metaItem}>
              <div className="text-xs font-mono text-zinc-500 mb-1 uppercase tracking-widest">
                Focus
              </div>
              <div className="text-sm font-medium text-charcoal">Corporate Finance & IR</div>
            </motion.div>
            <motion.div variants={metaItem}>
              <div className="text-xs font-mono text-zinc-500 mb-1 uppercase tracking-widest">
                Location
              </div>
              <div className="text-sm font-medium text-charcoal">{LOCATION}</div>
            </motion.div>
            <motion.div variants={metaItem}>
              <div className="text-xs font-mono text-zinc-500 mb-1 uppercase tracking-widest">
                Education
              </div>
              <div className="text-sm font-medium text-charcoal">Macalester College</div>
            </motion.div>
            <motion.div variants={metaItem}>
              <div className="text-xs font-mono text-zinc-500 mb-1 uppercase tracking-widest">
                Connect
              </div>
              <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:gap-y-2">
                <motion.a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-charcoal hover:text-navy flex items-center gap-1 transition-colors w-fit"
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                >
                  LinkedIn <ArrowUpRight className="w-3 h-3" />
                </motion.a>
                <motion.a
                  href={`mailto:${EMAIL}`}
                  className="text-sm font-medium text-charcoal hover:text-navy flex items-center gap-1 transition-colors w-fit"
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                >
                  <Mail className="w-3 h-3" /> Email
                </motion.a>
                <motion.a
                  href={`tel:${PHONE_TEL}`}
                  className="text-sm font-medium text-charcoal hover:text-navy flex items-center gap-1 transition-colors w-fit"
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                >
                  <Phone className="w-3 h-3 shrink-0" /> {PHONE_DISPLAY}
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section id="experience" className="py-20">
          <FadeIn blur={false}>
            <h2 className="text-3xl font-serif text-charcoal mb-12 flex items-center gap-4">
              <Briefcase className="w-6 h-6 text-navy" />
              Professional Experience
            </h2>
          </FadeIn>

          <div className="space-y-16">
            <FadeIn delay={0.05} className="group">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-3">
                  <div className="text-sm font-mono text-zinc-500 uppercase tracking-widest">
                    Jun 2025 – Present
                  </div>
                  <div className="text-xs font-mono text-zinc-500 mt-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> Smithfield, VA
                  </div>
                </div>
                <div className="md:col-span-9">
                  <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-4">
                    <h3 className="text-xl font-medium text-charcoal">Smithfield Foods Inc.</h3>
                    <span className="text-zinc-500 text-sm md:ml-2">Fortune 500</span>
                  </div>
                  <div className="text-navy font-medium mb-6">
                    Corporate Finance Associate – Finance Leadership Rotation (IR - FP&A -
                    Treasury)
                  </div>

                  <ul className="space-y-4 text-sm text-zinc-600 leading-relaxed">
                    <li className="flex gap-3">
                      <ChevronRight className="w-4 h-4 text-zinc-300 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-charcoal font-medium">
                          Investor Relations & Treasury:
                        </strong>{" "}
                        Supported investor reporting, IR decks, earnings preparation, and
                        credit rating agency materials across functions.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <ChevronRight className="w-4 h-4 text-zinc-300 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-charcoal font-medium">
                          Forecasting & Financial Modeling:
                        </strong>{" "}
                        Built a working capital forecast model ($2.5B base), improving
                        forecast accuracy to ~$10M variance and reducing cycle time by ~90%
                        through driver-based modeling.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <ChevronRight className="w-4 h-4 text-zinc-300 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-charcoal font-medium">Market Analysis:</strong>{" "}
                        Performed public company earnings, investor presentation, and
                        competitor analysis across the food industry, supporting executive
                        narratives and benchmarking.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <ChevronRight className="w-4 h-4 text-zinc-300 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-charcoal font-medium">
                          AI Agents for Executive Finance:
                        </strong>{" "}
                        Built 10+ AI agents and workflow automations (ChatGPT, Power
                        Automate, Python) to support CFO-level forecasting and reporting.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.05} className="group pt-8 border-t border-zinc-200">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-3">
                  <div className="text-sm font-mono text-zinc-500 uppercase tracking-widest">
                    Jan 2025 – Apr 2025
                  </div>
                  <div className="text-xs font-mono text-zinc-500 mt-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> Los Angeles, CA
                  </div>
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-xl font-medium text-charcoal mb-2">
                    Caprae Capital Partners
                  </h3>
                  <div className="text-navy font-medium mb-6">Private Equity Spring Analyst</div>

                  <ul className="space-y-4 text-sm text-zinc-600 leading-relaxed">
                    <li className="flex gap-3">
                      <ChevronRight className="w-4 h-4 text-zinc-300 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-charcoal font-medium">
                          Market & Performance Analysis:
                        </strong>{" "}
                        Analyzed 180+ companies to identify growth, revenue, and margin
                        drivers; advanced 12 opportunities aligned with investment criteria.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <ChevronRight className="w-4 h-4 text-zinc-300 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-charcoal font-medium">
                          Financial Modeling & Due Diligence:
                        </strong>{" "}
                        Built and stress-tested financial models to evaluate revenue, margin,
                        and cash flow sustainability, supporting valuation and investment
                        decisions.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.05} className="group pt-8 border-t border-zinc-200">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-3">
                  <div className="text-sm font-mono text-zinc-500 uppercase tracking-widest">
                    May 2024 – Aug 2024
                  </div>
                  <div className="text-xs font-mono text-zinc-500 mt-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> Chicago, IL
                  </div>
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-xl font-medium text-charcoal mb-2">
                    Blackstone Group – Revantage
                  </h3>
                  <div className="text-navy font-medium mb-6">Financial Risk Summer Analyst</div>

                  <ul className="space-y-4 text-sm text-zinc-600 leading-relaxed">
                    <li className="flex gap-3">
                      <ChevronRight className="w-4 h-4 text-zinc-300 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-charcoal font-medium">
                          Financial Modeling & Forecasting:
                        </strong>{" "}
                        Built valuation and cash flow models for a $75M+ real estate
                        portfolio (15+ assets), improving visibility into NOI drivers and
                        asset performance.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <ChevronRight className="w-4 h-4 text-zinc-300 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-charcoal font-medium">
                          Scenario Analysis & Risk Management:
                        </strong>{" "}
                        Conducted scenario and sensitivity analyses, identifying risks and
                        mitigating ~$1.5M potential losses across a $350M portfolio.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.05} className="group pt-8 border-t border-zinc-200">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-3">
                  <div className="text-sm font-mono text-zinc-500 uppercase tracking-widest">
                    May 2023 – Aug 2023
                  </div>
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-xl font-medium text-charcoal mb-2">Deloitte</h3>
                  <div className="text-navy font-medium mb-6">Financial Risk Summer Analyst</div>

                  <ul className="space-y-4 text-sm text-zinc-600 leading-relaxed">
                    <li className="flex gap-3">
                      <ChevronRight className="w-4 h-4 text-zinc-300 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-charcoal font-medium">
                          Risk Analysis & Controls:
                        </strong>{" "}
                        Performed risk assessments using COSO/Basel frameworks, strengthening
                        controls and ensuring compliance across client portfolios.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <ChevronRight className="w-4 h-4 text-zinc-300 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-charcoal font-medium">
                          Data Analysis & Insights:
                        </strong>{" "}
                        Used SQL, Oracle, and Tableau to analyze financial data and deliver
                        insights supporting business and investment decisions.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="projects" className="py-20">
          <FadeIn blur={false}>
            <h2 className="text-3xl font-serif text-charcoal mb-12 flex items-center gap-4">
              <LineChart className="w-6 h-6 text-navy" />
              Strategic Analysis & Projects
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeIn delay={0.06} y={28}>
              <motion.div
                className="bg-zinc-50/80 border border-zinc-200 p-8 h-full transition-shadow duration-300 group cursor-default"
                whileHover={
                  reduceMotion
                    ? {}
                    : {
                        y: -8,
                        boxShadow: "0 20px 40px -24px rgba(17,19,21,0.18)",
                        borderColor: "rgba(161,161,170,0.55)",
                      }
                }
                transition={{ type: "spring", stiffness: 420, damping: 28 }}
              >
                <div className="flex justify-between items-start mb-6">
                  <motion.div
                    className="p-3 bg-white rounded-lg border border-zinc-200 transition-colors"
                    whileHover={reduceMotion ? {} : { scale: 1.05, rotate: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <Globe className="w-5 h-5 text-navy" />
                  </motion.div>
                  <span className="text-xs font-mono text-zinc-600 bg-white border border-zinc-200 px-2 py-1 rounded">
                    Live Demo
                  </span>
                </div>
                <h3 className="text-lg font-medium text-charcoal mb-3">
                  AI Financial Competitor Analysis
                </h3>
                <p className="text-sm text-zinc-600 mb-6 leading-relaxed">
                  Built AI agents to read earnings reports, extract financial metrics, analyze
                  margins and segment performance, and generate automated competitor
                  benchmarking dashboards for enterprise finance workflows.
                </p>
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.1} y={28}>
              <motion.div
                className="bg-zinc-50/80 border border-zinc-200 p-8 h-full transition-shadow duration-300 group cursor-default"
                whileHover={
                  reduceMotion
                    ? {}
                    : {
                        y: -8,
                        boxShadow: "0 20px 40px -24px rgba(17,19,21,0.18)",
                        borderColor: "rgba(161,161,170,0.55)",
                      }
                }
                transition={{ type: "spring", stiffness: 420, damping: 28 }}
              >
                <div className="flex justify-between items-start mb-6">
                  <motion.div
                    className="p-3 bg-white rounded-lg border border-zinc-200 transition-colors"
                    whileHover={reduceMotion ? {} : { scale: 1.05, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <FileText className="w-5 h-5 text-navy" />
                  </motion.div>
                  <span className="text-xs font-mono text-zinc-600 bg-white border border-zinc-200 px-2 py-1 rounded">
                    Proposal Deck
                  </span>
                </div>
                <h3 className="text-lg font-medium text-charcoal mb-3">
                  General Mills x Anderson Inc.
                </h3>
                <div className="text-xs text-navy mb-3">Agriculture Acquisition</div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Valuation: $1.1B DCF/comps acquisition case with 75% debt financing and
                  $400M synergies. Structured financial modeling to support M&A strategy.
                </p>
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.14} y={28}>
              <motion.div
                className="bg-zinc-50/80 border border-zinc-200 p-8 h-full transition-shadow duration-300 group cursor-default"
                whileHover={
                  reduceMotion
                    ? {}
                    : {
                        y: -8,
                        boxShadow: "0 20px 40px -24px rgba(17,19,21,0.18)",
                        borderColor: "rgba(161,161,170,0.55)",
                      }
                }
                transition={{ type: "spring", stiffness: 420, damping: 28 }}
              >
                <div className="flex justify-between items-start mb-6">
                  <motion.div
                    className="p-3 bg-white rounded-lg border border-zinc-200 transition-colors"
                    whileHover={reduceMotion ? {} : { scale: 1.05, rotate: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <BarChart3 className="w-5 h-5 text-navy" />
                  </motion.div>
                  <span className="text-xs font-mono text-zinc-600 bg-white border border-zinc-200 px-2 py-1 rounded">
                    Proposal Deck
                  </span>
                </div>
                <h3 className="text-lg font-medium text-charcoal mb-3">Darden Investment Strategy</h3>
                <div className="text-xs text-navy mb-3">Restaurant Industry Equity Research</div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Equity Research: Recommended Darden based on scalability, leverage, and
                  revenue recovery post-macroeconomic shifts.
                </p>
              </motion.div>
            </FadeIn>
          </div>
        </section>

        <section className="py-20 border-t border-zinc-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <FadeIn blur={false}>
              <h2 className="text-xl font-serif text-charcoal mb-8 border-b border-zinc-200 pb-4">
                Academic Background
              </h2>
              <div className="mb-8">
                <div className="flex justify-between items-baseline mb-2 gap-4">
                  <h3 className="text-lg font-medium text-charcoal">Macalester College</h3>
                  <span className="text-sm font-mono text-zinc-500 shrink-0">
                    Aug 2021 - Spring 2025
                  </span>
                </div>
                <p className="text-navy text-sm mb-3">
                  B.A., Quant Econometrics & Computer Science
                </p>
                <p className="text-sm text-zinc-600 mb-2">Macalester Dean List, GPA: 3.85</p>
                <p className="text-sm text-zinc-600">
                  <strong className="text-charcoal">Coursework:</strong> Corporate Finance,
                  Financial Statement Analysis, Financial Modeling, Investments, Portfolio
                  Management, Econometrics, Derivatives & Risk Management.
                </p>
              </div>
              <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-lg">
                <p className="text-sm font-medium text-charcoal mb-1">
                  CFA Level I Candidate (May 2026)
                </p>
                <p className="text-xs text-zinc-600">
                  Champion – Quantitative Modeling (2023); Financial Analytics (2022)
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium text-charcoal mb-2">Leadership</h3>
                <p className="text-navy text-sm mb-2">Macalester Investment Group — President</p>
                <p className="text-sm text-zinc-600">
                  $250K student-managed fund; -14% volatility, +25% cumulative return. (Oct
                  2022 – Present)
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.12} blur={false}>
              <h2 className="text-xl font-serif text-charcoal mb-8 border-b border-zinc-200 pb-4">
                Core Competencies
              </h2>
              <div className="space-y-6">
                {(
                  [
                    ["Finance & FP&A", ["Budgeting", "Forecasting", "Variance Analysis", "Financial Modeling", "Scenario Analysis", "Cash Flow Planning", "Management Reporting"]],
                    ["Investor Relations", ["Investor Reporting", "Earnings Analysis", "Competitor Benchmarking", "Executive Presentations", "Credit Rating Support", "Market Research"]],
                    ["AI & Technical Data", ["Python", "SQL", "ExcelScript", "Power Automate", "AI Agents", "Prompt Engineering", "TypeScript", "Next.js", "Tableau", "Power BI", "AWS"]],
                  ] as const
                ).map(([title, skills]) => (
                  <div key={title}>
                    <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-3">
                      {title}
                    </h3>
                    <motion.div
                      className="flex flex-wrap gap-2"
                      variants={skillContainer}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, margin: "-40px" }}
                    >
                      {skills.map((skill) => (
                        <motion.span
                          key={skill}
                          variants={skillItem}
                          className="px-3 py-1 bg-white border border-zinc-200 text-sm text-charcoal rounded-full"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="contact" className="py-24 text-center">
          <FadeIn y={24} duration={0.8}>
            <motion.div
              className="inline-block p-px bg-gradient-to-b from-zinc-200 to-transparent rounded-2xl mb-8"
              whileHover={
                reduceMotion
                  ? {}
                  : { scale: 1.01, transition: { type: "spring", stiffness: 260, damping: 22 } }
              }
            >
              <div className="bg-zinc-50 px-8 py-12 rounded-2xl border border-zinc-200">
                <h2 className="text-3xl font-serif text-charcoal mb-4">Let&apos;s Connect</h2>
                <p className="text-zinc-600 mb-2 max-w-md mx-auto">
                  Open for opportunities in strategic finance, corporate development, and
                  investor relations.
                </p>
                <p className="text-sm text-zinc-500 mb-8 font-mono">
                  {LOCATION}
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
                  <motion.a
                    href={`mailto:${EMAIL}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-charcoal text-white font-medium rounded-lg"
                    whileHover={reduceMotion ? {} : { scale: 1.03, y: -2 }}
                    whileTap={reduceMotion ? {} : { scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 22 }}
                  >
                    <Mail className="w-4 h-4" /> Email
                  </motion.a>
                  <motion.a
                    href={`tel:${PHONE_TEL}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-zinc-200 text-charcoal font-medium rounded-lg"
                    whileHover={reduceMotion ? {} : { scale: 1.02, y: -2 }}
                    whileTap={reduceMotion ? {} : { scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 22 }}
                  >
                    <Phone className="w-4 h-4" /> {PHONE_DISPLAY}
                  </motion.a>
                  <motion.a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-zinc-200 text-charcoal font-medium rounded-lg"
                    whileHover={reduceMotion ? {} : { scale: 1.02, y: -2 }}
                    whileTap={reduceMotion ? {} : { scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 22 }}
                  >
                    LinkedIn <ArrowUpRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </FadeIn>
        </section>
      </motion.main>

      <motion.footer
        className="border-t border-zinc-200 py-8 text-center text-sm font-mono text-zinc-500"
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: easeLux }}
      >
        <p>© {new Date().getFullYear()} Tri Bui. All rights reserved.</p>
        <p className="mt-1">Built with Next.js, Tailwind, and institutional-grade rigor.</p>
      </motion.footer>
    </div>
  );
}
