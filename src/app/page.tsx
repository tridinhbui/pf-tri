"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
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
} from "lucide-react";

const FadeIn = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

const PORTRAIT_SRC = "/pic/avatar.jpg";

function HeroPortrait() {
  const [failed, setFailed] = useState(false);

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

  return (
    <figure className="relative w-full max-w-[280px] mx-auto md:mr-0 md:ml-auto">
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
    </figure>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <nav className="fixed top-0 w-full z-50 bg-white/85 backdrop-blur-md border-b border-zinc-200/80">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-serif text-lg tracking-wide text-charcoal">TRI BUI</div>
          <div className="flex gap-6 text-sm font-medium tracking-wide text-zinc-600">
            <a href="#experience" className="hover:text-navy transition-colors">
              Experience
            </a>
            <a href="#projects" className="hover:text-navy transition-colors">
              Projects
            </a>
            <a href="mailto:tbui@macalester.edu" className="hover:text-charcoal transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        <section className="min-h-[70vh] flex flex-col justify-center pb-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 lg:gap-16 items-center">
            <div className="md:col-span-7">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-terminal-green bg-terminal-green-dim border border-terminal-green/25 rounded-full mb-6">
                  <span className="w-2 h-2 rounded-full bg-terminal-green/90" />
                  Corporate Finance · Investor Relations · Strategic Finance
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-charcoal leading-tight mb-6 tracking-tight">
                  Strategic Finance{" "}
                  <br className="hidden sm:block" />
                  <span className="text-zinc-500 italic font-light">&</span> Investor
                  Relations.
                </h1>
              </FadeIn>

              <FadeIn delay={0.2} className="max-w-2xl mb-10">
                <p className="text-lg md:text-xl text-zinc-600 font-light leading-relaxed">
                  Bridging corporate finance, data-driven strategy, and capital markets.
                  Specializing in FP&A, financial modeling, and AI-enabled workflows to
                  drive institutional-quality decision making.
                </p>
              </FadeIn>
            </div>

            <div className="md:col-span-5 flex justify-center md:justify-end">
              <FadeIn delay={0.15}>
                <HeroPortrait />
              </FadeIn>
            </div>
          </div>

          <FadeIn delay={0.35}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-zinc-200">
              <div>
                <div className="text-xs font-mono text-zinc-500 mb-1 uppercase tracking-widest">
                  Focus
                </div>
                <div className="text-sm font-medium text-charcoal">Corporate Finance & IR</div>
              </div>
              <div>
                <div className="text-xs font-mono text-zinc-500 mb-1 uppercase tracking-widest">
                  Location
                </div>
                <div className="text-sm font-medium text-charcoal">US</div>
              </div>
              <div>
                <div className="text-xs font-mono text-zinc-500 mb-1 uppercase tracking-widest">
                  Education
                </div>
                <div className="text-sm font-medium text-charcoal">Macalester College</div>
              </div>
              <div>
                <div className="text-xs font-mono text-zinc-500 mb-1 uppercase tracking-widest">
                  Connect
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com/in/tribuidinh/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-charcoal hover:text-navy flex items-center gap-1 transition-colors"
                  >
                    LinkedIn <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        <section id="experience" className="py-20">
          <FadeIn>
            <h2 className="text-3xl font-serif text-charcoal mb-12 flex items-center gap-4">
              <Briefcase className="w-6 h-6 text-navy" />
              Professional Experience
            </h2>
          </FadeIn>

          <div className="space-y-16">
            <FadeIn delay={0.1} className="group">
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

            <FadeIn delay={0.1} className="group pt-8 border-t border-zinc-200">
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

            <FadeIn delay={0.1} className="group pt-8 border-t border-zinc-200">
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

            <FadeIn delay={0.1} className="group pt-8 border-t border-zinc-200">
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
          <FadeIn>
            <h2 className="text-3xl font-serif text-charcoal mb-12 flex items-center gap-4">
              <LineChart className="w-6 h-6 text-navy" />
              Strategic Analysis & Projects
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
              <div className="bg-zinc-50/80 border border-zinc-200 p-8 h-full hover:border-zinc-300 transition-colors duration-300 group">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white rounded-lg border border-zinc-200 group-hover:border-zinc-300 transition-colors">
                    <Globe className="w-5 h-5 text-navy" />
                  </div>
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
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-zinc-50/80 border border-zinc-200 p-8 h-full hover:border-zinc-300 transition-colors duration-300 group">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white rounded-lg border border-zinc-200 group-hover:border-zinc-300 transition-colors">
                    <FileText className="w-5 h-5 text-navy" />
                  </div>
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
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-zinc-50/80 border border-zinc-200 p-8 h-full hover:border-zinc-300 transition-colors duration-300 group">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white rounded-lg border border-zinc-200 group-hover:border-zinc-300 transition-colors">
                    <BarChart3 className="w-5 h-5 text-navy" />
                  </div>
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
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="py-20 border-t border-zinc-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <FadeIn>
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

            <FadeIn delay={0.2}>
              <h2 className="text-xl font-serif text-charcoal mb-8 border-b border-zinc-200 pb-4">
                Core Competencies
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-3">
                    Finance & FP&A
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Budgeting",
                      "Forecasting",
                      "Variance Analysis",
                      "Financial Modeling",
                      "Scenario Analysis",
                      "Cash Flow Planning",
                      "Management Reporting",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-white border border-zinc-200 text-sm text-charcoal rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-3">
                    Investor Relations
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Investor Reporting",
                      "Earnings Analysis",
                      "Competitor Benchmarking",
                      "Executive Presentations",
                      "Credit Rating Support",
                      "Market Research",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-white border border-zinc-200 text-sm text-charcoal rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-3">
                    AI & Technical Data
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Python",
                      "SQL",
                      "ExcelScript",
                      "Power Automate",
                      "AI Agents",
                      "Prompt Engineering",
                      "TypeScript",
                      "Next.js",
                      "Tableau",
                      "Power BI",
                      "AWS",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-white border border-zinc-200 text-sm text-charcoal rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="py-24 text-center">
          <FadeIn>
            <div className="inline-block p-px bg-gradient-to-b from-zinc-200 to-transparent rounded-2xl mb-8">
              <div className="bg-zinc-50 px-8 py-12 rounded-2xl border border-zinc-200">
                <h2 className="text-3xl font-serif text-charcoal mb-4">Let&apos;s Connect</h2>
                <p className="text-zinc-600 mb-8 max-w-md mx-auto">
                  Open for opportunities in strategic finance, corporate development, and
                  investor relations.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="mailto:tbui@macalester.edu"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-charcoal text-white font-medium rounded-lg hover:bg-charcoal-light transition-colors"
                  >
                    <Mail className="w-4 h-4" /> Reach Out
                  </a>
                  <a
                    href="https://linkedin.com/in/tribuidinh/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-zinc-200 text-charcoal font-medium rounded-lg hover:border-zinc-400 transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>
      </main>

      <footer className="border-t border-zinc-200 py-8 text-center text-sm font-mono text-zinc-500">
        <p>© {new Date().getFullYear()} Tri Bui. All rights reserved.</p>
        <p className="mt-1">Built with Next.js, Tailwind, and institutional-grade rigor.</p>
      </footer>
    </div>
  );
}