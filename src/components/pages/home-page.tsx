"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { FooterCopy, HeaderCopy, HomeCopy, Locale, partnerLogos } from "@/lib/copy";

import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Users,
  MonitorSmartphone,
  Shield,
  Cloud,
  Workflow,
  BarChart3,
  Repeat2,
  Quote,
  Mail,
  Phone,
  Globe,
  MapPin,
  MessageSquare,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const stagger = { animate: { transition: { staggerChildren: 0.08 } } };

const highlightIconMap = {
  shieldCheck: ShieldCheck,
  sparkles: Sparkles,
  users: Users,
} as const;

const serviceIconMap = {
  monitorSmartphone: MonitorSmartphone,
  shield: Shield,
  cloud: Cloud,
} as const;

const acceleratorIcons = [Sparkles, ShieldCheck, Workflow] as const;
const differentiatorIcons = [ShieldCheck, BarChart3, Users, Repeat2] as const;

const contactIconFor = (label: string) => {
  const lower = label.toLowerCase();
  if (lower.includes("mail")) return Mail;
  if (lower.includes("website")) return Globe;
  if (lower.includes("nl") || lower.includes("uk") || lower.includes("+")) return Phone;
  if (lower.includes("vestiging") || lower.includes("office") || lower.includes("amsterdam")) return MapPin;
  return MessageSquare;
};

type HomePageProps = {
  locale: Locale;
  header: HeaderCopy;
  footer: FooterCopy;
  content: HomeCopy;
};

export function HomePage({ locale, header, footer, content }: HomePageProps) {
  return (
    <div className="min-h-screen bg-white text-slate-900" lang={locale}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
      >
        Skip to content
      </a>
      <SiteHeader locale={locale} copy={header} />

      <main id="main">
        <section className="relative overflow-hidden pb-20 pt-14 sm:pt-20">
          <div className="absolute inset-0 -z-10">
            <div className="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-teal-200/50 blur-3xl" />
            <div className="absolute top-20 -right-28 h-80 w-80 rounded-full bg-sky-200/50 blur-3xl" />
            <div className="absolute bottom-[-120px] left-1/3 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="initial" animate="animate" variants={stagger} className="grid gap-16 lg:grid-cols-[1.45fr_1fr]">
              <motion.div variants={fadeUp} className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-600/10 via-sky-600/10 to-emerald-500/10 px-4 py-1 text-xs font-semibold text-slate-700 shadow-sm">
                  <Sparkles className="h-3.5 w-3.5 text-teal-600" aria-hidden="true" />
                  {content.hero.eyebrow}
                </div>
                <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                  {content.hero.title}
                </h1>
                <p className="text-lg text-slate-600">{content.hero.subtitle}</p>
                <div className="space-y-4 text-base text-slate-600">
                  {content.hero.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <Button className="rounded-full px-6 py-2" asChild>
                    <Link href={content.hero.primaryCta.href}>
                      {content.hero.primaryCta.label}
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="rounded-full border-slate-200" asChild>
                    <Link href={content.hero.secondaryCta.href}>{content.hero.secondaryCta.label}</Link>
                  </Button>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {content.hero.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 shadow-sm"
                    >
                      <div className="text-2xl font-semibold text-slate-900">{stat.value}</div>
                      <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {content.hero.highlights.map((item) => {
                    const Icon = highlightIconMap[item.icon as keyof typeof highlightIconMap] ?? Sparkles;
                    return (
                      <div
                        key={item.text}
                        className="flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-white/80 p-4 text-sm text-slate-600 shadow-sm"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500/20 via-sky-500/20 to-emerald-500/20">
                          <Icon className="h-4 w-4 text-teal-600" aria-hidden="true" />
                        </div>
                        <span>{item.text}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Card className="h-full overflow-hidden rounded-3xl border-none bg-gradient-to-br from-slate-900 via-sky-950 to-emerald-900 text-white shadow-xl">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-xl font-semibold">{content.hero.card.title}</CardTitle>
                    <CardDescription className="text-sm text-slate-200">
                      {content.hero.card.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4">
                      {content.hero.card.metrics.map((metric) => (
                        <div key={metric.label} className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3">
                          <span className="text-sm text-slate-200">{metric.label}</span>
                          <span className="text-lg font-semibold text-white">{metric.value}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-slate-200/80">{content.hero.card.footer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-lg">
              <div className="text-center">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  {content.partners.title}
                </h2>
                <p className="mt-2 text-base text-slate-600">{content.partners.description}</p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5 items-center justify-items-center">
                {partnerLogos.map((partner) => (
                  <Image
                    key={partner.name}
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={partner.width}
                    height={partner.height}
                    className="h-12 w-auto object-contain"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="outcomes" className="bg-gradient-to-r from-teal-50 via-white to-emerald-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto grid gap-6 text-center sm:max-w-3xl">
              <h2 className="text-2xl font-semibold text-slate-900">{content.outcomes.title}</h2>
              <p className="text-slate-600">{content.outcomes.description}</p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {content.outcomes.items.map((item) => (
                <Card key={item.label} className="rounded-2xl border border-slate-200/70 bg-white/70 shadow-sm">
                  <CardContent className="p-6">
                    <div className="text-3xl font-semibold text-slate-900">{item.value}</div>
                    <p className="mt-2 text-sm text-slate-600">{item.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex md:items-end md:justify-between">
              <div className="max-w-3xl space-y-3">
                <h2 className="text-3xl font-semibold text-slate-900">{content.services.title}</h2>
                <p className="text-slate-600">{content.services.description}</p>
              </div>
              <Button variant="outline" className="mt-6 rounded-full border-slate-200 md:mt-0" asChild>
                <Link href="#contact">{content.hero.secondaryCta.label}</Link>
              </Button>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {content.services.items.map((item) => {
                const Icon = serviceIconMap[item.icon as keyof typeof serviceIconMap] ?? Sparkles;
                return (
                  <Card
                    key={item.title}
                    className={`group h-full rounded-3xl border border-slate-200/70 bg-white/80 shadow-lg transition hover:-translate-y-1 hover:shadow-xl`}
                  >
                    <div className={`h-32 w-full rounded-t-3xl bg-gradient-to-br ${item.accent}`} />
                    <CardHeader className="-mt-16 space-y-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                        <Icon className="h-6 w-6 text-teal-600" aria-hidden="true" />
                      </div>
                      <CardTitle className="text-xl text-slate-900">{item.title}</CardTitle>
                      <CardDescription className="text-sm text-slate-600">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-sm text-slate-600">
                        {item.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <ShieldCheck className="mt-0.5 h-4 w-4 text-teal-600" aria-hidden="true" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-700">
                        {content.hero.secondaryCta.label}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-slate-900">{content.accelerators.title}</h2>
                <p className="text-slate-600">{content.accelerators.description}</p>
                <div className="grid gap-4 md:grid-cols-2">
                  {content.accelerators.items.map((item, index) => {
                    const Icon = acceleratorIcons[index] ?? Workflow;
                    return (
                      <Card key={item.title} className="rounded-3xl border border-slate-200/70 bg-white/80 shadow-sm">
                        <CardContent className="space-y-3 p-6">
                          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/10 to-emerald-500/10">
                            <Icon className="h-5 w-5 text-sky-600" aria-hidden="true" />
                          </div>
                          <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                          <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                            {item.metric.value} {item.metric.label}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
              <Card className="rounded-3xl border border-slate-200/70 bg-gradient-to-br from-slate-900 via-sky-950 to-emerald-900 text-white shadow-xl">
                <CardContent className="space-y-4 p-8">
                  <h3 className="text-lg font-semibold text-white">{content.differentiators.title}</h3>
                  <p className="text-sm text-slate-200">{content.differentiators.description}</p>
                  <div className="space-y-4">
                    {content.differentiators.items.map((item, index) => {
                      const Icon = differentiatorIcons[index] ?? ShieldCheck;
                      return (
                        <div key={item.title} className="flex items-start gap-3 rounded-2xl bg-white/10 p-4 text-sm text-slate-200">
                          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
                            <Icon className="h-4 w-4 text-emerald-300" aria-hidden="true" />
                          </div>
                          <div>
                            <div className="font-semibold text-white">{item.title}</div>
                            <p className="mt-1 text-xs text-slate-200/80">{item.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="industries" className="border-y border-slate-200/70 bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4 text-center">
              <h2 className="text-2xl font-semibold text-slate-900">{content.industries.title}</h2>
              <p className="text-slate-600">{content.industries.description}</p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {content.industries.items.map((item) => (
                <Card key={item} className="rounded-2xl border border-slate-200/70 bg-white/80 text-center shadow-sm">
                  <CardContent className="flex min-h-24 items-center justify-center p-4 text-sm font-medium text-slate-700">
                    {item}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-slate-900">{content.process.title}</h2>
                <p className="text-slate-600">{content.process.description}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {content.process.steps.map((step) => (
                  <Card key={step.step} className="rounded-3xl border border-slate-200/70 bg-white/80 shadow-sm">
                    <CardContent className="space-y-3 p-6">
                      <div className="text-xs font-semibold uppercase tracking-wide text-teal-600">{step.step}</div>
                      <div className="text-lg font-semibold text-slate-900">{step.title}</div>
                      <p className="text-sm text-slate-600">{step.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-slate-900 via-sky-950 to-emerald-950 py-20 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex md:items-center md:justify-between">
              <div className="max-w-3xl space-y-3">
                <h2 className="text-2xl font-semibold text-white">{content.testimonials.title}</h2>
                <p className="text-sm text-slate-200">{content.differentiators.description}</p>
              </div>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {content.testimonials.items.map((testimonial) => (
                <Card key={testimonial.quote} className="h-full rounded-3xl border border-white/10 bg-white/10 text-left">
                  <CardContent className="space-y-4 p-6">
                    <Quote className="h-6 w-6 text-emerald-300" aria-hidden="true" />
                    <p className="text-sm leading-relaxed text-slate-100">{testimonial.quote}</p>
                    <p className="text-xs font-semibold uppercase tracking-wide text-emerald-200">
                      {testimonial.name}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl space-y-3 text-center">
              <h2 className="text-2xl font-semibold text-slate-900">{content.plans.title}</h2>
              <p className="text-slate-600">{content.plans.description}</p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {content.plans.items.map((plan) => (
                <Card
                  key={plan.name}
                  className={`relative h-full rounded-3xl border border-slate-200/70 bg-white/80 shadow-lg transition hover:-translate-y-1 hover:shadow-xl ${
                    plan.featured ? "ring-2 ring-sky-300" : ""
                  }`}
                >
                  {plan.featured && (
                    <span className="absolute right-6 top-6 rounded-full bg-gradient-to-r from-sky-500 to-emerald-500 px-3 py-1 text-xs font-semibold text-white">
                      {content.plans.highlight}
                    </span>
                  )}
                  <CardHeader className="space-y-2">
                    <CardTitle className="text-xl text-slate-900">{plan.name}</CardTitle>
                    <CardDescription className="text-sm text-slate-600">
                      {plan.tagline}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm text-slate-600">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <ShieldCheck className="mt-0.5 h-4 w-4 text-teal-600" aria-hidden="true" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="mt-8 w-full rounded-full" asChild>
                      <Link href="#contact">{plan.cta}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-slate-900">{content.faq.title}</h2>
            <Accordion type="single" collapsible className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200/70 bg-white/80 shadow-sm">
              {content.faq.items.map((item, index) => (
                <AccordionItem key={item.question} value={`item-${index}`} className="px-4">
                  <AccordionTrigger className="text-left text-sm font-semibold text-slate-900">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-slate-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section id="contact" className="pb-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="rounded-3xl border border-slate-200/70 bg-white/80 shadow-xl">
              <CardContent className="grid gap-12 p-8 lg:grid-cols-[1fr_1.3fr]">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-slate-900">{content.contact.title}</h2>
                  <p className="text-sm text-slate-600 leading-relaxed">{content.contact.description}</p>
                  <div className="space-y-3">
                    {content.contact.info.map((info) => {
                      const Icon = contactIconFor(info.label);
                      return (
                        <div key={`${info.label}-${info.value}`} className="flex items-center gap-3 text-sm text-slate-700">
                          <Icon className="h-4 w-4 text-teal-600" aria-hidden="true" />
                          <span>
                            <span className="font-semibold text-slate-900">{info.label}:</span> {info.value}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <form
                  className="grid gap-4 sm:grid-cols-2"
                  onSubmit={(event) => {
                    event.preventDefault();
                  }}
                >
                  {content.contact.fields.map((field) => {
                    const isMessageField = field.name === "challenge";
                    if (isMessageField) {
                      return (
                        <div key={field.name} className="sm:col-span-2">
                          <textarea
                            required
                            placeholder={field.placeholder}
                            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-inner focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-100"
                            rows={4}
                          />
                        </div>
                      );
                    }
                    return (
                      <Input
                        key={field.name}
                        type={field.type}
                        required
                        placeholder={field.placeholder}
                        className="rounded-2xl border-slate-200 bg-white text-sm text-slate-700 shadow-inner focus:border-teal-400 focus-visible:ring-teal-100"
                      />
                    );
                  })}
                  <div className="sm:col-span-2 space-y-3">
                    <p className="text-xs text-slate-500">{content.contact.consent}</p>
                    <div className="flex justify-end">
                      <Button type="submit" className="rounded-full px-6">
                        {content.contact.cta}
                      </Button>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <SiteFooter copy={footer} />
    </div>
  );
}
