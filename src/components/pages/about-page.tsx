"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FooterCopy, HeaderCopy, AboutCopy, Locale, partnerLogos } from "@/lib/copy";

import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  BarChart3,
  Users,
  Globe,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const stagger = { animate: { transition: { staggerChildren: 0.08 } } };

const missionIcons = [ShieldCheck, BarChart3, Users] as const;
const valueIcons = [ShieldCheck, BarChart3, Users, Sparkles] as const;

const containerClass =
  "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 xl:max-w-7xl";
const sectionsWrapperClass = "space-y-24 sm:space-y-32";
const surfaceClass =
  "rounded-3xl border border-slate-200/70 bg-white shadow-xl shadow-slate-950/5";


const initialsFor = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("");

type AboutPageProps = {
  locale: Locale;
  header: HeaderCopy;
  footer: FooterCopy;
  content: AboutCopy;
};

export function AboutPage({ locale, header, footer, content }: AboutPageProps) {
  const pathname = usePathname();
  const homePath = locale === "nl" ? "/nl" : "/";
  const resolveHref = (href: string) => {
    if (href.startsWith("#")) {
      return pathname === homePath ? href : `${homePath}${href}`;
    }
    return href;
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900" lang={locale}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
      >
        Skip to content
      </a>
      <SiteHeader locale={locale} copy={header} />

      <main id="main" className="flex-1 bg-slate-50 pb-24 sm:pb-32">
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-sky-950 to-emerald-950 py-24 sm:py-32 text-white">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/4 top-10 h-72 w-72 rounded-full bg-teal-400/20 blur-3xl" />
            <div className="absolute -bottom-20 right-10 h-80 w-80 rounded-full bg-sky-400/20 blur-3xl" />
          </div>
          <div className={containerClass}>
            <motion.div initial="initial" animate="animate" variants={stagger} className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
              <motion.div variants={fadeUp} className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-200">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                  {content.hero.eyebrow}
                </div>
                <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{content.hero.title}</h1>
                <div className="space-y-4 text-base text-slate-200">
                  {content.hero.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <Button className="rounded-full bg-white/90 px-6 py-2 text-slate-900 hover:bg-white" asChild>
                    <Link href={resolveHref(content.hero.primaryCta.href)}>
                      {content.hero.primaryCta.label}
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                  <Button variant="secondary" className="rounded-full border-white/60 bg-white/10 text-white hover:bg-white/20" asChild>
                    <Link href={resolveHref(content.hero.secondaryCta.href)}>{content.hero.secondaryCta.label}</Link>
                  </Button>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="grid gap-4 sm:grid-cols-3">
                {content.hero.stats.map((stat) => (
                  <Card key={stat.label} className="rounded-2xl border border-white/10 bg-white/10 text-left shadow-lg">
                    <CardContent className="space-y-2 p-5">
                      <div className="text-2xl font-semibold text-white">{stat.value}</div>
                      <div className="text-xs font-semibold uppercase tracking-wide text-emerald-200">{stat.label}</div>
                      <p className="text-xs text-slate-200/80">{stat.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        <div className={sectionsWrapperClass}>
          <section className="-mt-20 lg:-mt-32">
            <div className={containerClass}>
              <Card className={`${surfaceClass} bg-white/90 p-0 backdrop-blur`}> 
                <CardContent className="grid gap-12 p-8 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:p-12">
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold text-slate-900">{content.mission.title}</h2>
                    <p className="text-sm leading-relaxed text-slate-600">{content.mission.description}</p>
                    <div className="grid gap-4 md:grid-cols-3">
                      {content.mission.pillars.map((pillar, index) => {
                        const Icon = missionIcons[index] ?? Sparkles;
                        return (
                          <div
                            key={pillar.title}
                            className="flex h-full flex-col rounded-2xl border border-slate-200/70 bg-white/90 p-5 text-sm text-slate-600 shadow-sm"
                          >
                            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/10 to-emerald-500/10">
                              <Icon className="h-4 w-4 text-teal-600" aria-hidden="true" />
                            </div>
                            <div className="text-base font-semibold text-slate-900">{pillar.title}</div>
                            <p className="mt-1 text-sm leading-relaxed text-slate-600">{pillar.description}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="space-y-5">
                    <h3 className="text-lg font-semibold text-slate-900">{content.partners.title}</h3>
                    <p className="text-sm text-slate-600">{content.partners.description}</p>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                      {partnerLogos.map((partner) => (
                        <Image
                          key={partner.name}
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          width={partner.width}
                          height={partner.height}
                          unoptimized
                          className="mx-auto h-10 w-auto object-contain"
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <div className={containerClass}>
              <Card className={`${surfaceClass} p-0`}>
                <CardContent className="space-y-8 p-8 sm:p-10 lg:p-12">
                  <div className="space-y-3 text-center sm:text-left">
                    <h2 className="text-2xl font-semibold text-slate-900">{content.timeline.title}</h2>
                  </div>
                  <div className="relative border-l border-slate-200/80 pl-8 sm:pl-10">
                    {content.timeline.items.map((item) => (
                      <div key={item.year} className="relative mb-10 space-y-2 last:mb-0">
                        <div className="absolute -left-[26px] top-1 h-4 w-4 rounded-full border-2 border-slate-200 bg-white" />
                        <p className="text-xs font-semibold uppercase tracking-wide text-teal-600">{item.year}</p>
                        <div className="text-base font-semibold text-slate-900">{item.title}</div>
                        <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <div className={containerClass}>
              <div className="space-y-3 text-center">
                <h2 className="text-2xl font-semibold text-slate-900">{content.values.title}</h2>
              </div>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {content.values.items.map((value, index) => {
                  const Icon = valueIcons[index] ?? Sparkles;
                  return (
                    <Card key={value.title} className={`${surfaceClass} h-full p-0`}>
                      <CardContent className="flex h-full flex-col space-y-4 p-6">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/10 to-emerald-500/10">
                          <Icon className="h-5 w-5 text-teal-600" aria-hidden="true" />
                        </div>
                        <h3 className="text-base font-semibold text-slate-900">{value.title}</h3>
                        <p className="text-sm leading-relaxed text-slate-600">{value.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>


          <section>
            <div className={containerClass}>
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div className="space-y-3">
                  <h2 className="text-2xl font-semibold text-slate-900">{content.team.title}</h2>
                  <p className="text-sm leading-relaxed text-slate-600">{content.team.description}</p>
                </div>
                <Button variant="outline" className="rounded-full border-slate-200" asChild>
                  <Link href={resolveHref(content.hero.primaryCta.href)}>{content.hero.primaryCta.label}</Link>
                </Button>
              </div>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {content.team.members.map((member) => (
                  <Card key={member.name} className={`${surfaceClass} h-full p-0`}>
                    <CardHeader className="space-y-4 px-8 pt-8">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-500/20 to-emerald-500/20 text-sm font-semibold text-teal-700">
                        {initialsFor(member.name)}
                      </div>
                      <CardTitle className="text-lg text-slate-900">{member.name}</CardTitle>
                      <CardDescription className="text-sm text-slate-600">
                        {member.role} · {member.location}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 px-8 pb-8 text-sm text-slate-600">
                      <p>{member.bio}</p>
                      <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                        <Globe className="h-3.5 w-3.5" aria-hidden="true" />
                        {member.focus}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="scroll-mt-32">
            <div className={containerClass}>
              <Card className="rounded-3xl border border-slate-200/70 bg-gradient-to-br from-slate-900 via-sky-950 to-emerald-900 text-white shadow-2xl shadow-slate-950/20">
                <CardContent className="flex flex-col gap-8 p-8 sm:p-10 md:flex-row md:items-center md:justify-between">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">{content.closing.title}</h2>
                    <p className="text-sm leading-relaxed text-slate-200">{content.closing.description}</p>
                    <ul className="space-y-2 text-sm text-slate-200">
                      {content.closing.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-2">
                          <ShieldCheck className="h-4 w-4 text-emerald-300" aria-hidden="true" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="rounded-full bg-white/90 px-6 py-2 text-slate-900 hover:bg-white" asChild>
                    <Link href={resolveHref(content.closing.cta.href)}>{content.closing.cta.label}</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter locale={locale} copy={footer} />
    </div>
  );
}
