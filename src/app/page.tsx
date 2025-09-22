'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  Check,
  Shield,
  Users,
  ArrowRight,
  Mail,
  Phone,
  Globe,
  Clock,
  Headphones,
  MonitorSmartphone,
  Cloud,
  Lock,
  Cpu,
  FileCheck2,
  Quote,
} from "lucide-react";

// Animations
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};
const stagger = { animate: { transition: { staggerChildren: 0.08 } } };

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

export default function MockMSP() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-800">
      {/* Skip Link */}
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-slate-900 text-white px-3 py-2 rounded">Skip to content</a>
      <SiteHeader />

      <main id="main">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute -top-24 -right-24 h-72 w-72 bg-indigo-200/50 rounded-full blur-3xl" />
            <div className="absolute top-40 -left-24 h-72 w-72 bg-cyan-200/50 rounded-full blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
            <motion.div initial="initial" animate="animate" variants={stagger} className="grid md:grid-cols-2 gap-10 items-center">
              <motion.div variants={fadeUp}>
                <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs bg-slate-900 text-white shadow-sm">
                  <Shield className="h-3.5 w-3.5" /> MSP done the right way
                </div>
                <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
                  Dutch &amp; UK Microsoft 365 managed services for growing teams
                </h1>
                <p className="mt-4 text-slate-600 text-lg">
                  Founded in 2025 by Amsterdam-based Martijn van Dijk and London-based James Whitfield, MockMSP specialises in Microsoft 365 for SMBs ready to stretch into the SME space.
                </p>
                <p className="mt-4 text-slate-600">
                  Our 15-person pod keeps 40 clients secure, compliant, and productive with automation, identity governance, and user adoption coaching that scales with every new hire.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button className="rounded-2xl">
                    Get a quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="secondary" className="rounded-2xl">
                    Book discovery
                  </Button>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <Headphones className="h-4 w-4" /> Follow-the-sun service desk
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" /> 15 specialists across NL &amp; UK
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" /> 30-day onboarding playbook
                  </div>
                </div>
              </motion.div>

              {/* Hero proof card */}
              <motion.div variants={fadeUp}>
                <Card className="rounded-3xl shadow-lg">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg">Snapshot of our pod</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-5 text-sm text-slate-600">
                    <div className="space-y-3 text-slate-700">
                      <div className="flex items-center gap-3">
                        <Users className="h-4 w-4" /> 15 Microsoft 365 specialists across Amsterdam, Rotterdam &amp; London
                      </div>
                      <div className="flex items-center gap-3">
                        <Globe className="h-4 w-4" /> 40 managed SMB and SME clients in finance, retail &amp; professional services
                      </div>
                      <div className="flex items-center gap-3">
                        <Shield className="h-4 w-4" /> Co-founded by Martijn van Dijk (NL) &amp; James Whitfield (UK)
                      </div>
                    </div>
                    <div className="pt-5 border-t border-slate-200">
                      <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-3">
                        What we manage for you
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {[
                          { icon: <MonitorSmartphone className="h-4 w-4" />, label: "Modern Workplace" },
                          { icon: <Lock className="h-4 w-4" />, label: "Security & Compliance" },
                          { icon: <Cloud className="h-4 w-4" />, label: "Cloud & Data" },
                          { icon: <Users className="h-4 w-4" />, label: "Identity & Access" },
                          { icon: <Cpu className="h-4 w-4" />, label: "Automation" },
                          { icon: <FileCheck2 className="h-4 w-4" />, label: "Governance" },
                        ].map((i, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-xl bg-slate-100 grid place-items-center">{i.icon}</div>
                            <span className="text-sm font-medium">{i.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Trust strip */}
            <div className="mt-12 space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-xs text-slate-500">
                {["Microsoft 365", "Entra ID", "Intune", "Azure"].map((v) => (
                  <div key={v} className="border rounded-xl py-3 bg-white/60 backdrop-blur shadow-sm">
                    {v}
                  </div>
                ))}
              </div>
              <div className="bg-white/70 border border-slate-200/70 rounded-3xl p-6">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500 text-center">
                  Who we work with
                </h3>
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-items-center">
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
            </div>
          </div>
        </section>

      {/* Outcomes */}
      <section id="outcomes" className="py-12 border-y border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { kpi: "40", label: "managed SMB & SME clients" },
              { kpi: "15", label: "Microsoft 365 specialists on staff" },
              { kpi: "30 days", label: "to full onboarding & governance" },
            ].map((i, idx) => (
              <Card key={idx} className="rounded-2xl">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold">{i.kpi}</div>
                  <div className="text-sm text-slate-600">{i.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-2xl font-semibold tracking-tight">Managed services</motion.h2>
            <motion.p variants={fadeUp} className="mt-2 text-slate-600 max-w-2xl">Flexible packages that cover the essentials and scale with your business.</motion.p>

            <div className="mt-8 grid lg:grid-cols-3 gap-6">
              {[{
                title:"Modern Workplace",
                icon:<MonitorSmartphone className="h-5 w-5"/>,
                bullets:["Endpoint management (Windows, macOS, mobile)","Microsoft 365 administration","Backup & recovery"],
              },{
                title:"Security & Compliance",
                icon:<Lock className="h-5 w-5"/>,
                bullets:["Identity protection & MFA","Email & data protection","Policy baselines & audits"],
              },{
                title:"Cloud & Data",
                icon:<Cloud className="h-5 w-5"/>,
                bullets:["Azure cost control","File/server to SharePoint migration","Automation & integrations"],
              }].map((s,i)=> (
                <motion.div variants={fadeUp} key={i}>
                  <Card className="rounded-2xl h-full">
                    <CardHeader className="pb-2">
                      <div className="h-10 w-10 rounded-xl bg-slate-100 grid place-items-center">{s.icon}</div>
                      <CardTitle className="mt-4 text-xl">{s.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-6">
                      <ul className="space-y-2 text-sm text-slate-600">
                        {s.bullets.map((b,j)=>(
                          <li key={j} className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5"/> {b}</li>
                        ))}
                      </ul>
                      <div className="mt-5 flex gap-3">
                        <Button variant="outline" className="rounded-xl">Service overview</Button>
                        <Button className="rounded-xl">Get a quote</Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">Industries we support</h2>
          <p className="mt-2 text-slate-600 max-w-2xl">Tailored controls and templates for regulated and high-growth sectors.</p>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Finance & Accounting", "Professional Services", "Scale-up SaaS", "Retail & Hospitality", "Nonprofit", "Light Manufacturing"].map((v) => (
              <Card key={v} className="rounded-xl">
                <CardContent className="p-5 text-center font-medium flex items-center justify-center min-h-16">{v}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding Process */}
      <section id="process" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">Onboarding in 30 days</h2>
          <p className="mt-2 text-slate-600 max-w-2xl">Clear steps, zero surprises. We handle the heavy lifting and keep you informed.</p>

          <div className="mt-8 grid md:grid-cols-4 gap-6">
            {[
              {step:"Week 1", title:"Assess", desc:"Environment review, risks, and quick wins."},
              {step:"Week 2", title:"Stabilize", desc:"Patching, identity hardening, backups."},
              {step:"Week 3", title:"Improve", desc:"Policies, automation, documentation."},
              {step:"Week 4", title:"Adopt", desc:"Training, handover, success metrics."},
            ].map((p,i)=> (
              <Card key={i} className="rounded-2xl">
                <CardContent className="p-6">
                  <div className="text-xs font-medium text-slate-500">{p.step}</div>
                  <div className="text-lg font-semibold mt-1">{p.title}</div>
                  <p className="text-sm text-slate-600 mt-2">{p.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section id="differentiators" className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex items-start gap-12">
            <div className="md:w-5/12">
              <h2 className="text-2xl font-semibold tracking-tight">Why teams choose MockMSP</h2>
              <p className="mt-3 text-slate-300">
                Enterprise-grade controls with startup pace. We blend automation, Microsoft 365 governance, and a human support desk so leaders can
                plan instead of putting out fires.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-left text-sm text-slate-200">
                <div className="rounded-2xl bg-white/10 px-4 py-3">
                  <div className="text-2xl font-semibold">24/7</div>
                  <p className="mt-1 text-slate-300">Security operations coverage</p>
                </div>
                <div className="rounded-2xl bg-white/10 px-4 py-3">
                  <div className="text-2xl font-semibold">30+</div>
                  <p className="mt-1 text-slate-300">Documented playbooks</p>
                </div>
              </div>
            </div>
            <div className="mt-10 md:mt-0 md:w-7/12 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Security-first delivery",
                  description:
                    "Continuous configuration drift monitoring, MFA hardening, and compliance dashboards mapped to ISO 27001.",
                },
                {
                  title: "Measurable success",
                  description:
                    "Monthly executive reviews with ticket analytics, roadmap recommendations, and budget clarity you can present upstream.",
                },
                {
                  title: "Human escalation paths",
                  description:
                    "Named pod with senior engineers who join war rooms, not just send knowledge base links.",
                },
                {
                  title: "Built for modern work",
                  description:
                    "Microsoft 365, Azure, and hybrid infrastructure expertise so distributed teams stay productive anywhere.",
                },
              ].map((item, index) => (
                <Card key={item.title} className="rounded-2xl h-full bg-slate-800/60 border-slate-700/70 text-left">
                  <CardContent className="p-6">
                    <div className="text-sm uppercase tracking-wide text-slate-400">{String(index + 1).padStart(2, "0")}</div>
                    <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-300 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">What clients say</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {["Ticket volume dropped 40% in two months.","Our audit passed with zero findings.","Best onboarding we’ve experienced—clear and fast."].map((q,i)=> (
              <Card key={i} className="rounded-2xl h-full">
                <CardContent className="p-6 flex gap-3">
                  <Quote className="h-5 w-5 mt-1 text-slate-400"/>
                  <p className="text-slate-700 text-sm">{q}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="pricing" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">Service plans</h2>
          <p className="mt-2 text-slate-600 max-w-2xl">Straightforward tiers. All plans include 24/7 monitoring, patching, and backup oversight.</p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[{
              name:"Essential",
              tag:"SMBs starting modern workplace",
              features:["Help desk 8×5","Managed M365","Device patching"],
              cta:"Request pricing",
            },{
              name:"Secure",
              tag:"Security-first operations",
              features:["24/7 monitoring","MFA & identity hardening","Email & data protection"],
              cta:"Request pricing",
            },{
              name:"Scale",
              tag:"For growing teams",
              features:["Advanced automation","Adoption & training","Quarterly roadmap"],
              cta:"Request pricing",
            }].map((p,i)=> (
              <Card key={i} className={`rounded-2xl h-full ${i===1? "ring-2 ring-indigo-400 shadow-md":""}`}>
                <CardHeader>
                  <CardTitle className="flex items-baseline justify-between gap-2">
                    <span>{p.name}</span>
                    <span className="text-sm font-normal text-slate-500">{p.tag}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {p.features.map((f,j)=> (
                      <li key={j} className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5"/> {f}</li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 rounded-2xl">{p.cta}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">FAQ</h2>
          <Accordion type="single" collapsible className="mt-6">
            <AccordionItem value="item-1">
              <AccordionTrigger>How fast can we start?</AccordionTrigger>
              <AccordionContent>Discovery call this week, onboarding within 30 days. Critical risks are addressed in week one.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Do you support hybrid or on‑prem?</AccordionTrigger>
              <AccordionContent>Yes. We manage cloud-first environments and the realities of hybrid—identity, files, line-of-business apps.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can you work with our internal IT?</AccordionTrigger>
              <AccordionContent>Absolutely. We augment in-house teams with monitoring, standards, and escalation support.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="rounded-2xl">
            <CardContent className="p-8 grid md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Contact</h3>
                <p className="text-sm text-slate-600">Tell us about your environment. We’ll come back with clear next steps.</p>
                <div className="mt-4 space-y-2 text-sm text-slate-700">
                  <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@mockmsp.eu</div>
                  <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> +31 20 241 9980 (NL)</div>
                  <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> +44 20 4526 8920 (UK)</div>
                  <div className="flex items-center gap-2"><Globe className="h-4 w-4" /> www.mockmsp.eu</div>
                </div>
              </div>
              <div className="md:col-span-2">
                <form className="grid sm:grid-cols-2 gap-4" onSubmit={(e)=> e.preventDefault()}>
                  <Input placeholder="Full name" className="rounded-xl" required />
                  <Input placeholder="Work email" className="rounded-xl" type="email" required />
                  <Input placeholder="Company" className="rounded-xl sm:col-span-2" />
                  <Input placeholder="What’s your biggest challenge right now?" className="rounded-xl sm:col-span-2" />
                  <div className="sm:col-span-2 flex justify-end">
                    <Button className="rounded-2xl" type="submit">Send</Button>
                  </div>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
