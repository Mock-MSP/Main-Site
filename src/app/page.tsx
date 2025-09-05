'use client';
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import {
  Check,
  Shield,
  Users,
  ArrowRight,
  Sparkles,
  Mail,
  Phone,
  Globe,
  Menu,
  X,
  Building2,
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

export default function MockMSP() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-800">
      {/* Skip Link */}
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-slate-900 text-white px-3 py-2 rounded">Skip to content</a>

      {/* Top Bar */}
      <div className="sticky top-0 z-[60] bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white text-xs md:text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <p className="font-medium">Managed IT & Security for modern businesses</p>
          <Button variant="secondary" size="sm" className="h-7 rounded-full">Book discovery</Button>
        </div>
      </div>

      {/* Nav */}
      <header className="sticky top-8 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-slate-200/60 rounded-t-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-2xl bg-slate-900 text-white grid place-items-center shadow-sm">
                <Sparkles className="h-4 w-4" />
              </div>
              <span className="font-semibold text-lg tracking-tight">MockMSP</span>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm">
              <a href="#services" className="hover:text-slate-900 text-slate-600">Services</a>
              <a href="#outcomes" className="hover:text-slate-900 text-slate-600">Outcomes</a>
              <a href="#industries" className="hover:text-slate-900 text-slate-600">Industries</a>
              <a href="#process" className="hover:text-slate-900 text-slate-600">Onboarding</a>
              <a href="#pricing" className="hover:text-slate-900 text-slate-600">Plans</a>
              <a href="#contact" className="hover:text-slate-900 text-slate-600">Contact</a>
            </nav>
            <div className="hidden md:flex items-center gap-2">
              <Button variant="ghost" className="rounded-2xl">Client Portal</Button>
              <Button className="rounded-2xl">Get a quote</Button>
            </div>
            <button aria-label="Toggle menu" className="md:hidden rounded-xl p-2 hover:bg-slate-100" onClick={() => setOpen((v) => !v)}>
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="px-4 py-3 space-y-3">
              {["Services","Outcomes","Industries","Onboarding","Plans","Contact"].map((label) => (
                <a key={label} href={`#${label.toLowerCase()}`} className="block text-slate-700" onClick={() => setOpen(false)}>
                  {label}
                </a>
              ))}
              <div className="flex gap-2 pt-2">
                <Button variant="ghost" className="rounded-2xl w-full">Client Portal</Button>
                <Button className="rounded-2xl w-full">Get a quote</Button>
              </div>
            </div>
          </div>
        )}
      </header>

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
                <Shield className="h-3.5 w-3.5" /> Your business, secured & supported
              </div>
              <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
                Managed IT that <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500">just works</span>
              </h1>
              <p className="mt-4 text-slate-600 text-lg">
                We manage, secure, and modernize your Microsoft 365 and cloud environment so your team can focus on customers—not tickets.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button className="rounded-2xl">Get a quote <ArrowRight className="ml-2 h-4 w-4" /></Button>
                <Button variant="secondary" className="rounded-2xl">Book discovery</Button>
              </div>
              <div className="mt-6 flex items-center gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2"><Headphones className="h-4 w-4" /> 24/7 support</div>
                <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> SLA-backed response</div>
              </div>
            </motion.div>

            {/* Hero proof card */}
            <motion.div variants={fadeUp}>
              <Card className="rounded-3xl shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">What we manage for you</CardTitle>
                </CardHeader>
                <CardContent className="grid sm:grid-cols-2 gap-4">
                  {[{icon:<MonitorSmartphone className="h-4 w-4"/>,label:"Modern Workplace"},{icon:<Lock className="h-4 w-4"/>,label:"Security & Compliance"},{icon:<Cloud className="h-4 w-4"/>,label:"Cloud & Data"},{icon:<Users className="h-4 w-4"/>,label:"Identity & Access"},{icon:<Cpu className="h-4 w-4"/>,label:"Automation"},{icon:<FileCheck2 className="h-4 w-4"/>,label:"Governance"}].map((i,idx)=> (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-xl bg-slate-100 grid place-items-center">{i.icon}</div>
                      <span className="text-sm font-medium">{i.label}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Trust strip */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-xs text-slate-500">
            {["Microsoft 365","Entra ID","Intune","Azure"].map((v)=>(
              <div key={v} className="border rounded-xl py-3 bg-white/60 backdrop-blur shadow-sm">{v}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section id="outcomes" className="py-12 border-y border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { kpi: "98%", label: "first-contact resolution" },
              { kpi: "< 15 min", label: "average response time" },
              { kpi: "99.9%", label: "patch & update success" },
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
            {["Healthcare","Education","Professional Services","Manufacturing","Nonprofit","Public Sector"].map((v)=> (
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
                  <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@mockmsp.com</div>
                  <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> +00 000 0000</div>
                  <div className="flex items-center gap-2"><Globe className="h-4 w-4" /> www.mockmsp.com</div>
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

      {/* Footer */}
      <footer className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-sm">
            <div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-2xl bg-slate-900 text-white grid place-items-center"><Sparkles className="h-4 w-4" /></div>
                <span className="font-semibold">MockMSP</span>
              </div>
              <p className="mt-3 text-slate-600">Managed IT & Security for modern businesses.</p>
            </div>
            <div>
              <div className="font-semibold">Company</div>
              <ul className="mt-3 space-y-2 text-slate-600">
                <li><a href="#services" className="hover:text-slate-900">Services</a></li>
                <li><a href="#pricing" className="hover:text-slate-900">Plans</a></li>
                <li><a href="#faq" className="hover:text-slate-900">FAQ</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">Resources</div>
              <ul className="mt-3 space-y-2 text-slate-600">
                <li><a href="#" className="hover:text-slate-900">Service Catalog</a></li>
                <li><a href="#" className="hover:text-slate-900">Incident Runbook</a></li>
                <li><a href="#" className="hover:text-slate-900">Security Baseline</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">Compliance</div>
              <ul className="mt-3 space-y-2 text-slate-600">
                <li>ISO-aligned controls</li>
                <li>DPA on request</li>
                <li>EU data residency options</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-6 text-xs text-slate-500 flex flex-wrap items-center justify-between gap-2">
            <span>© {new Date().getFullYear()} MockMSP. All rights reserved.</span>
            <span>Deurne · Netherlands</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
