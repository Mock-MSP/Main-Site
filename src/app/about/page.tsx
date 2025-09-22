import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  ShieldCheck,
  Users,
  Award,
  Clock,
  Globe,
  Sparkles,
  Compass,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About MockMSP",
  description:
    "Discover the Dutch-UK founders behind MockMSP and how our 15-person Microsoft 365 team supports 40 SMB and SME clients with security-first managed services.",
};

const team = [
  {
    name: "Martijn van Dijk",
    role: "Co-founder & CEO",
    bio: "Amsterdam-based strategist who keeps our delivery model focused on clear governance, transparent communication, and measurable client outcomes.",
    focus: "Strategy & Modern Workplace",
    location: "Amsterdam, NL",
  },
  {
    name: "James Whitfield",
    role: "Co-founder & CTO",
    bio: "London security architect translating Microsoft 365 best practices into automation and rapid response runbooks for our clients.",
    focus: "Security & Automation",
    location: "London, UK",
  },
  {
    name: "Sofia Martens",
    role: "Head of Client Success",
    bio: "Ensures every SMB and SME engagement stays aligned to adoption and satisfaction goals across quarterly reviews.",
    focus: "Client Success",
    location: "Utrecht, NL",
  },
  {
    name: "Oliver Patel",
    role: "Service Delivery Lead",
    bio: "Coordinates pod schedules and resources so co-managed teams receive consistent coverage and proactive maintenance.",
    focus: "Service Delivery",
    location: "Manchester, UK",
  },
  {
    name: "Lara Visser",
    role: "Microsoft 365 Architect",
    bio: "Designs secure tenant baselines, SharePoint architecture, and compliance policies tailored to high-growth SMB teams.",
    focus: "M365 Architecture",
    location: "Rotterdam, NL",
  },
  {
    name: "Daniel Hughes",
    role: "Security Operations Lead",
    bio: "Builds detection engineering and manages Sophos &amp; Microsoft Defender integrations for our 24/7 SOC.",
    focus: "Security Operations",
    location: "Bristol, UK",
  },
  {
    name: "Priya Shah",
    role: "Modern Workplace Consultant",
    bio: "Guides change management and user adoption programmes so employees embrace new tooling without disruption.",
    focus: "Adoption",
    location: "Amsterdam, NL",
  },
  {
    name: "Ben Koster",
    role: "Automation Engineer",
    bio: "Automates onboarding, compliance, and ticket triage workflows using Power Automate and Azure Logic Apps.",
    focus: "Automation",
    location: "Eindhoven, NL",
  },
  {
    name: "Hannah McLeod",
    role: "Governance Analyst",
    bio: "Maintains policy baselines, risk registers, and evidence packs for audits in regulated sectors.",
    focus: "Governance",
    location: "Edinburgh, UK",
  },
  {
    name: "Ruben de Boer",
    role: "Service Desk Manager",
    bio: "Leads our follow-the-sun service desk so every ticket is triaged with clarity and escalations stay on track.",
    focus: "Support Leadership",
    location: "Groningen, NL",
  },
  {
    name: "Lewis Hart",
    role: "Senior Service Desk Engineer",
    bio: "Handles complex escalations across Intune, Exchange, and collaboration workloads for our UK clients.",
    focus: "Advanced Support",
    location: "Leeds, UK",
  },
  {
    name: "Marcel Jans",
    role: "Cloud Infrastructure Engineer",
    bio: "Owns Azure resource governance, cost optimisation, and hybrid connectivity for our SME clients.",
    focus: "Cloud Platforms",
    location: "The Hague, NL",
  },
  {
    name: "Aisha Karim",
    role: "Service Desk Engineer",
    bio: "Provides first-line support, onboarding, and Microsoft 365 coaching for hybrid teams across the UK.",
    focus: "Frontline Support",
    location: "Birmingham, UK",
  },
  {
    name: "Tom Fowler",
    role: "Project Manager",
    bio: "Runs onboarding projects, vendor integrations, and quarterly roadmap initiatives with clear milestones.",
    focus: "Delivery",
    location: "London, UK",
  },
  {
    name: "Nia Vermeer",
    role: "Support Coordinator",
    bio: "Keeps documentation, runbooks, and client communications organised across our Dutch and UK pods.",
    focus: "Operations",
    location: "Amsterdam, NL",
  },
];

const milestones = [
  {
    year: "2025 Jan",
    title: "Founded across NL & UK",
    description: "Martijn van Dijk and James Whitfield launch MockMSP to deliver Microsoft 365-first managed services without enterprise friction.",
  },
  {
    year: "2025 Jun",
    title: "First 10 clients onboarded",
    description: "Rapid onboarding playbook proves itself with SMB finance, retail, and professional services teams across the Netherlands and UK.",
  },
  {
    year: "2025 Oct",
    title: "Strategic partner ecosystem",
    description: "Formalised partnerships with AvePoint, 1Password, Sophos, and Kaseya to strengthen governance and security outcomes.",
  },
  {
    year: "2026",
    title: "15-person cross-border pod",
    description: "Expanded delivery to a 15-person team supporting 40 managed clients with follow-the-sun coverage and audited runbooks.",
  },
];

const partners = [
  {
    name: "AvePoint",
    logo:
      "https://w7.pngwing.com/pngs/993/687/png-transparent-avepoint-microsoft-office-365-business-sharepoint-organization-isaac-text-public-relations-logo.png",
    width: 160,
    height: 60,
  },
  {
    name: "1Password",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/02/1Password_wordmark_blue_2023.svg",
    width: 200,
    height: 60,
  },
  {
    name: "Sophos",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Sophos_logo.svg/2560px-Sophos_logo.svg.png",
    width: 200,
    height: 60,
  },
  {
    name: "Kaseya",
    logo:
      "https://eu-images.contentstack.com/v3/assets/blt10e444bce2d36aa8/blta6ce79125064ffd1/65266c426cbba71a1628b0b0/kaseyalogocymk_0.gif?disable=upscale&width=1200&height=630&fit=crop",
    width: 200,
    height: 60,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-800">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-slate-900 text-white px-3 py-2 rounded"
      >
        Skip to content
      </a>
      <SiteHeader />

      <main id="main" className="pb-20">
        <section className="relative overflow-hidden bg-slate-900 text-white">
          <div className="absolute inset-0 -z-10">
            <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-indigo-400/40 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/30 blur-3xl" />
          </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid gap-12 md:grid-cols-[2fr_1fr] items-start">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs uppercase tracking-wide">
                  <Sparkles className="h-3.5 w-3.5" /> Dutch-UK founders · MSP done the right way
                </div>
                <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                  Microsoft 365 managed services for ambitious SMB &amp; SME teams
                </h1>
                <p className="mt-6 text-lg text-slate-200">
                  MockMSP launched in 2025 when Martijn van Dijk in Amsterdam and James Whitfield in London set out to pair startup agility with enterprise-grade controls.
                </p>
                <p className="mt-4 text-slate-200">
                  Today our 15-person team supports 40 clients with Microsoft 365 modern workplace, security operations, and adoption programmes that scale with every stage of growth.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button className="rounded-2xl" asChild>
                    <Link href="/#contact">Talk to our team</Link>
                  </Button>
                  <Button variant="secondary" className="rounded-2xl" asChild>
                    <Link href="/#services">See services</Link>
                  </Button>
                </div>
              </div>
              <Card className="rounded-3xl border-white/10 bg-white/10 text-left">
                <CardHeader className="pb-4">
                  <CardTitle className="text-white">Quick facts</CardTitle>
                  <CardDescription className="text-slate-200">
                    Snapshot of the disciplines that keep our cross-border clients secure and productive.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 text-sm text-slate-100">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-5 w-5" /> Founded in 2025 to deliver Microsoft 365 done right
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5" /> 15 specialists across Amsterdam, Rotterdam &amp; the UK
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5" /> 40 managed SMB and SME clients across Europe
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold tracking-tight">Who we work with</h2>
              <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
                Our Microsoft 365 specialism is strengthened through partnerships with governance, security, and automation vendors that SMB and SME teams rely on every day.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-items-center">
              {partners.map((partner) => (
                <Image
                  key={partner.name}
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={partner.width}
                  height={partner.height}
                  className="h-10 w-auto object-contain"
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="rounded-2xl h-full">
                <CardHeader>
                  <CardTitle>Security embedded in every sprint</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-slate-600">
                  <p>
                    Our pod structure pairs security engineers with modern workplace specialists so every change has governance built in.
                  </p>
                  <div className="flex items-center gap-2 text-slate-700">
                    <ShieldCheck className="h-4 w-4" /> Weekly drift reviews and threat briefings
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-2xl h-full">
                <CardHeader>
                  <CardTitle>Measured client outcomes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-slate-600">
                  <p>
                    Every engagement is mapped to a living success plan with KPIs such as response times, adoption metrics, and cost
                    optimisation wins.
                  </p>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Users className="h-4 w-4" /> 94% satisfaction across quarterly reviews
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-2xl h-full">
                <CardHeader>
                  <CardTitle>Always-on partnership</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-slate-600">
                  <p>
                    We operate as an extension of your team with follow-the-sun coverage, transparent reporting, and rapid escalation paths.
                  </p>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Clock className="h-4 w-4" /> 15-minute response on priority incidents
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-[1fr_1.25fr] items-start">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Our story</h2>
                <p className="mt-3 text-slate-600">
                  MockMSP was founded in 2025 as a Dutch-UK start-up so SMB leaders could tap Microsoft 365 expertise without enterprise red tape. Within our first year we onboarded 40 clients while keeping the boutique attention to governance, documentation, and dependable support.
                </p>
                <div className="mt-6 grid gap-4 text-sm">
                  <div className="flex items-center gap-3 text-slate-700">
                    <Compass className="h-4 w-4" /> Headquartered between Amsterdam and London with pods across NL &amp; UK
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <Award className="h-4 w-4" /> Microsoft 365 &amp; security specialists focused on SMB and scaling SME teams
                  </div>
                </div>
              </div>
              <ol className="relative border-l border-slate-200 pl-6 space-y-8">
                {milestones.map((milestone) => (
                  <li key={milestone.year} className="relative space-y-1 pl-4">
                    <div className="absolute -left-[31px] top-1 h-3.5 w-3.5 rounded-full border-2 border-slate-300 bg-white" />
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{milestone.year}</p>
                    <p className="text-base font-semibold text-slate-800">{milestone.title}</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{milestone.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Leadership team</h2>
                <p className="mt-3 max-w-2xl text-slate-600">
                  Meet the 15-person cross-border team orchestrating Microsoft 365 managed services for SMB and SME clients.
                </p>
              </div>
              <Button variant="outline" className="rounded-2xl" asChild>
                <Link href="/#contact">Book an intro call</Link>
              </Button>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member) => (
                <Card key={member.name} className="h-full rounded-2xl">
                  <CardHeader className="pb-4">
                    <div className="h-12 w-12 rounded-full bg-slate-100 text-slate-700 grid place-items-center text-lg font-semibold">
                      {member.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </div>
                    <CardTitle className="mt-4 text-lg font-semibold">{member.name}</CardTitle>
                    <CardDescription className="text-slate-600">{member.role} · {member.location}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-slate-600">
                    <p>{member.bio}</p>
                    <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                      <Globe className="h-3.5 w-3.5" /> Focus: {member.focus}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-900 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] items-center">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Ready when you are</h2>
                <p className="mt-3 text-slate-200">
                  Whether you run an SMB or are scaling into the SME space, we plug into your Microsoft 365 estate with clarity, documentation,
                  and measurable progress from day one.
                </p>
              </div>
              <Card className="rounded-2xl border-white/10 bg-white/10 text-left">
                <CardContent className="p-6 space-y-3 text-sm text-slate-100">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-4 w-4" /> Structured onboarding in 30 days
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-4 w-4" /> Named pod of Microsoft 365 specialists for every client
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4" /> SLA-backed response and escalation paths
                  </div>
                  <Button className="w-full rounded-2xl" variant="secondary" asChild>
                    <Link href="/#contact">Start a conversation</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
