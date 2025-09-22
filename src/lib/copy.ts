export const partnerLogos = [
  {
    name: "AvePoint",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/AvePoint_logo.svg/2560px-AvePoint_logo.svg.png",
    width: 200,
    height: 60,
  },
  {
    name: "Proofpoint",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/37/Proofpoint_R_Logo.png",
    width: 200,
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
] as const;

export const copy = {
  en: {
    header: {
      announcement: "Now onboarding bilingual managed services across NL & UK.",
      announcementCta: { label: "Schedule a strategy call", href: "#contact" },
      tagline: "Dutch · UK · Microsoft 365 Specialists",
      nav: [
        { label: "Services", href: "#services" },
        { label: "Outcomes", href: "#outcomes" },
        { label: "Industries", href: "#industries" },
        { label: "Approach", href: "#process" },
        { label: "Plans", href: "#pricing" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "#contact" },
      ],
      primaryAction: { label: "Start a project", href: "#contact" },
      secondaryAction: { label: "Client portal", href: "#contact" },
      languageToggle: { label: "NL", href: "/nl" },
    },
    footer: {
      tagline:
        "Managed security, modern workplace, and cloud operations for teams who outgrow break/fix.",
      columns: [
        {
          title: "Company",
          links: [
            { label: "Services", href: "#services" },
            { label: "Plans", href: "#pricing" },
            { label: "About", href: "/about" },
            { label: "Careers", href: "#contact" },
          ],
        },
        {
          title: "Expertise",
          links: [
            { label: "Modern workplace", href: "#services" },
            { label: "Security operations", href: "#services" },
            { label: "Cloud governance", href: "#services" },
            { label: "Automation", href: "#process" },
          ],
        },
        {
          title: "Offices",
          links: [
            { label: "Amsterdam", href: "#contact" },
            { label: "Rotterdam", href: "#contact" },
            { label: "London", href: "#contact" },
            { label: "Manchester", href: "#contact" },
          ],
        },
        {
          title: "Contact",
          links: [
            { label: "hello@mockmsp.eu", href: "mailto:hello@mockmsp.eu" },
            { label: "+31 20 241 9980", href: "tel:+31202419980" },
            { label: "+44 20 4526 8920", href: "tel:+442045268920" },
            { label: "www.mockmsp.eu", href: "https://www.mockmsp.eu" },
          ],
        },
      ],
      legal: [
        { label: "Privacy", href: "#" },
        { label: "Terms", href: "#" },
      ],
      localeNote: "Amsterdam · London",
    },
    home: {
      hero: {
        eyebrow: "Dutch · UK · Microsoft 365",
        title: "The modern MSP blueprint for resilient, people-first workplaces.",
        subtitle: "We align automation, security, and adoption so your teams deliver without interruption.",
        paragraphs: [
          "MockMSP combines Dutch precision and UK pragmatism to run Microsoft 365, Azure, and security estates with zero guesswork.",
          "Identity, compliance, and employee experience flow through the same bilingual pod so every change lands smoothly.",
        ],
        primaryCta: { label: "Design my managed plan", href: "#contact" },
        secondaryCta: { label: "View service catalogue", href: "#services" },
        highlights: [
          { icon: "shieldCheck", text: "Security frameworks mapped to ISO 27001 & NIS2" },
          { icon: "sparkles", text: "Automation-first onboarding completed in 30 days" },
          { icon: "users", text: "Pod of 15 bilingual specialists across NL & UK" },
        ],
        stats: [
          { value: "40", label: "Active managed clients" },
          { value: "12m", label: "Avg. incident response" },
          { value: "94%", label: "Client satisfaction" },
        ],
        card: {
          title: "Operations pulse",
          subtitle: "Live telemetry from our managed tenants",
          metrics: [
            { label: "First-contact resolution", value: "78%" },
            { label: "Automated workflows", value: "65% of tickets" },
            { label: "Change success rate", value: "99.2%" },
          ],
          footer: "Backed by AvePoint, Proofpoint, Sophos, Kaseya & 1Password integrations.",
        },
      },
      partners: {
        title: "Trusted automation & security stack",
        description:
          "We integrate best-in-class tooling so Microsoft 365 governance, backup, and security stay effortless.",
      },
      outcomes: {
        title: "Outcomes we deliver",
        description: "Measured impact across operations, security, and employee experience.",
        items: [
          { value: "40", label: "Managed SMB & SME clients" },
          { value: "15", label: "Microsoft 365 specialists" },
          { value: "30 days", label: "To land your new operating rhythm" },
        ],
      },
      services: {
        title: "Managed services crafted for modern teams",
        description:
          "Choose the blend of workplace, security, and cloud operations you need. Every package includes proactive automation and bilingual support.",
        items: [
          {
            title: "Modern Workplace",
            icon: "monitorSmartphone",
            accent: "from-emerald-500/20 via-teal-500/10 to-transparent",
            description:
              "Device, identity, and collaboration management tuned for hybrid workforces.",
            features: [
              "Endpoint compliance across Windows, macOS & mobile",
              "Lifecycle automation for joiners, movers & leavers",
              "SharePoint and Teams governance templates",
            ],
          },
          {
            title: "Security & Compliance",
            icon: "shield",
            accent: "from-sky-500/20 via-blue-500/10 to-transparent",
            description:
              "Continuous protection mapped to ISO 27001, NIS2, and sector standards.",
            features: [
              "Threat detection & response across Microsoft Defender & Proofpoint",
              "Identity hardening with conditional access baselines",
              "Audit-ready evidence packs & policy automation",
            ],
          },
          {
            title: "Cloud & Automation",
            icon: "cloud",
            accent: "from-emerald-400/20 via-lime-400/10 to-transparent",
            description:
              "Azure governance, cost control, and integrations that keep data flowing safely.",
            features: [
              "Azure landing zones & cost optimisation",
              "Backup, retention & AvePoint resiliency",
              "Power Platform & Logic Apps workflow engineering",
            ],
          },
        ],
      },
      accelerators: {
        title: "Acceleration frameworks included",
        description:
          "Plug in playbooks, dashboards, and automation that compress delivery cycles from day one.",
        items: [
          {
            title: "Adoption Playbook",
            description:
              "Persona-based enablement programmes and change campaigns ready to launch in Microsoft Viva.",
            metric: { label: "Enablement sessions", value: "25+" },
          },
          {
            title: "Security Control Library",
            description:
              "Mapped policies for ISO 27001, SOC 2, and NIS2 with live compliance scoring dashboards.",
            metric: { label: "Controls tracked", value: "180" },
          },
          {
            title: "Automation Catalog",
            description:
              "Reusable Power Automate & Logic Apps workflows covering onboarding, ticket triage, and incident response.",
            metric: { label: "Reusable flows", value: "60" },
          },
        ],
      },
      industries: {
        title: "Industries we support",
        description:
          "Regulated and high-growth sectors rely on our bilingual pod for pace and compliance.",
        items: [
          "Financial services",
          "Professional services",
          "Scale-up SaaS",
          "Retail & hospitality",
          "Nonprofit",
          "Light manufacturing",
        ],
      },
      process: {
        title: "30-day bilingual onboarding",
        description:
          "Our orchestrated runbook brings order, visibility, and quick wins while your teams keep working.",
        steps: [
          {
            step: "Week 1",
            title: "Discover & stabilise",
            description: "Environment review, risk remediation, and service desk handover.",
          },
          {
            step: "Week 2",
            title: "Secure & document",
            description: "Baseline policies, MFA uplift, and knowledge capture.",
          },
          {
            step: "Week 3",
            title: "Automate & optimise",
            description: "Deploy workflows, reporting dashboards, and cost controls.",
          },
          {
            step: "Week 4",
            title: "Adopt & hand off",
            description: "Leadership playbook, success metrics, and roadmap presentation.",
          },
        ],
      },
      differentiators: {
        title: "Why teams stay with MockMSP",
        description:
          "We blend human expertise with automation so every engagement compounds in value.",
        items: [
          {
            title: "Security-first DNA",
            description:
              "Dedicated SOC analysts collaborate with workplace engineers so controls are designed, not bolted on.",
          },
          {
            title: "Insights you can share",
            description:
              "Executive dashboards translate noise into KPIs your board understands in both English and Dutch.",
          },
          {
            title: "Human escalation paths",
            description:
              "Named pod members join major incidents and projects—no anonymous ticket roulette.",
          },
          {
            title: "Automation obsessed",
            description:
              "Continuous improvement sprints keep increasing workflow coverage and reducing toil.",
          },
        ],
      },
      testimonials: {
        title: "What leaders say",
        items: [
          {
            quote:
              "Ticket noise dropped 42% after onboarding and our teams finally have one place for updates.",
            name: "Eva, COO at fintech scale-up",
          },
          {
            quote:
              "MockMSP guided our NIS2 preparations with proof points we could hand straight to auditors.",
            name: "Michael, Head of IT at retail group",
          },
          {
            quote:
              "The bilingual pod means our Dutch and UK offices feel equally supported—no more overnight gaps.",
            name: "Sarah, Operations Director at consultancy",
          },
        ],
      },
      plans: {
        title: "Service plans",
        description:
          "Transparent tiers with automation, security, and guidance built in. Pricing tailored to your tenant size.",
        highlight: "Most popular",
        items: [
          {
            name: "Essential",
            tagline: "Foundational coverage for modern workplaces",
            features: [
              "8×5 bilingual service desk",
              "Managed Microsoft 365 & Intune",
              "AvePoint backup & recovery",
            ],
            cta: "Request pricing",
            featured: false,
          },
          {
            name: "Secure",
            tagline: "Security operations with compliance oversight",
            features: [
              "24/7 monitoring & response",
              "Proofpoint & Defender integration",
              "Policy management & evidence packs",
            ],
            cta: "Request pricing",
            featured: true,
          },
          {
            name: "Scale",
            tagline: "Automation & adoption for growth",
            features: [
              "Automation roadmap & sprints",
              "Employee experience programmes",
              "Quarterly executive reviews",
            ],
            cta: "Request pricing",
            featured: false,
          },
        ],
      },
      faq: {
        title: "FAQ",
        items: [
          {
            question: "How quickly can you start?",
            answer:
              "Discovery happens this week, then we move into the 30-day onboarding programme with critical fixes in week one.",
          },
          {
            question: "Do you support hybrid environments?",
            answer:
              "Yes. We manage cloud-first estates plus servers, network appliances, and legacy apps that still matter.",
          },
          {
            question: "Can you work with our internal IT team?",
            answer:
              "Absolutely. We slot in as an extension of your team with clear RACI models and shared tooling.",
          },
          {
            question: "Do you help with compliance audits?",
            answer:
              "We maintain evidence packs, run readiness assessments, and join auditor calls for ISO 27001, SOC 2, and NIS2.",
          },
        ],
      },
      contact: {
        title: "Let's design your managed services blueprint",
        description:
          "Tell us about your Microsoft 365 estate and growth goals. We'll return a tailored plan within two business days.",
        fields: [
          { name: "name", placeholder: "Full name", type: "text" },
          { name: "email", placeholder: "Work email", type: "email" },
          { name: "company", placeholder: "Company", type: "text" },
          {
            name: "challenge",
            placeholder: "What's your biggest challenge right now?",
            type: "text",
          },
        ],
        consent:
          "By submitting this form you agree to receive updates about MockMSP services. You can opt out anytime.",
        cta: "Send request",
        info: [
          { label: "Email", value: "hello@mockmsp.eu" },
          { label: "NL", value: "+31 20 241 9980" },
          { label: "UK", value: "+44 20 4526 8920" },
          { label: "Website", value: "www.mockmsp.eu" },
        ],
      },
    },
    about: {
      hero: {
        eyebrow: "About MockMSP",
        title: "Cross-border specialists building the blueprint for modern managed services.",
        paragraphs: [
          "Founded by Martijn van Dijk in Amsterdam and James Whitfield in London, MockMSP unites Dutch precision with UK pragmatism.",
          "Our bilingual pod of 15 keeps 40 clients secure, productive, and audit ready across Microsoft 365, Azure, and security operations.",
        ],
        primaryCta: { label: "Talk to our team", href: "#contact" },
        secondaryCta: { label: "View services", href: "/#services" },
        stats: [
          { value: "2015", label: "Founding vision", description: "Born from enterprise lessons applied to SMB & SME realities." },
          { value: "15", label: "Specialists", description: "Engineers, architects, SOC analysts, and adoption leads." },
          { value: "40", label: "Managed clients", description: "Finance, retail, SaaS, and professional services teams." },
        ],
      },
      mission: {
        title: "Our mission",
        description:
          "Deliver measurable outcomes with calm, structured managed services that let leaders plan beyond the next incident.",
        pillars: [
          {
            title: "Security embedded",
            description:
              "Security analysts, automation engineers, and consultants work as one pod so controls are designed in, not bolted on later.",
          },
          {
            title: "Data you can trust",
            description:
              "Dashboards and runbooks turn complex estates into a single source of truth for your leadership team.",
          },
          {
            title: "People first",
            description:
              "We make technology adoption effortless with human-led change programmes and bilingual support.",
          },
        ],
      },
      timeline: {
        title: "Milestones",
        items: [
          {
            year: "2025 Jan",
            title: "Founded across NL & UK",
            description:
              "Martijn van Dijk and James Whitfield launch MockMSP to deliver Microsoft 365 managed services without enterprise friction.",
          },
          {
            year: "2025 Jun",
            title: "First 10 clients onboarded",
            description:
              "Rapid onboarding playbooks prove themselves with finance, retail, and professional services teams.",
          },
          {
            year: "2025 Oct",
            title: "Strategic partner ecosystem",
            description:
              "Formalised partnerships with AvePoint, Proofpoint, 1Password, Sophos, and Kaseya to strengthen governance and security outcomes.",
          },
          {
            year: "2026",
            title: "15-person cross-border pod",
            description:
              "Expanded delivery to a 15-person team supporting 40 managed clients with follow-the-sun coverage and audited runbooks.",
          },
        ],
      },
      partners: {
        title: "Partnerships powering our delivery",
        description:
          "We weave leading platforms into every engagement so resilience, compliance, and automation are ready on day one.",
      },
      values: {
        title: "Values that guide us",
        items: [
          {
            title: "Integrity",
            description: "Operate with transparency and document every decision for clients and colleagues alike.",
          },
          {
            title: "Clarity",
            description: "Translate complex technology into language leadership teams understand.",
          },
          {
            title: "Momentum",
            description: "Deliver measurable progress every sprint, from security posture to employee experience.",
          },
          {
            title: "Care",
            description: "Invest in people-first change so tools empower teams across cultures and time zones.",
          },
        ],
      },
      team: {
        title: "Leadership team",
        description:
          "Meet the cross-border specialists orchestrating Microsoft 365 managed services for our clients.",
        members: [
          {
            name: "Martijn van Dijk",
            role: "Co-founder & CEO",
            focus: "Strategy & Modern Workplace",
            location: "Amsterdam, NL",
            bio: "Keeps our delivery model focused on clear governance, transparent communication, and measurable client outcomes.",
          },
          {
            name: "James Whitfield",
            role: "Co-founder & CTO",
            focus: "Security & Automation",
            location: "London, UK",
            bio: "Translates Microsoft 365 best practices into automation and rapid response runbooks for clients.",
          },
          {
            name: "Sofia Martens",
            role: "Head of Client Success",
            focus: "Client Success",
            location: "Utrecht, NL",
            bio: "Ensures every engagement stays aligned to adoption goals across quarterly reviews.",
          },
          {
            name: "Oliver Patel",
            role: "Service Delivery Lead",
            focus: "Service Delivery",
            location: "Manchester, UK",
            bio: "Coordinates pod schedules so co-managed teams receive consistent coverage and proactive maintenance.",
          },
          {
            name: "Lara Visser",
            role: "Microsoft 365 Architect",
            focus: "M365 Architecture",
            location: "Rotterdam, NL",
            bio: "Designs secure tenant baselines, SharePoint architecture, and compliance policies for high-growth teams.",
          },
          {
            name: "Daniel Hughes",
            role: "Security Operations Lead",
            focus: "Security Operations",
            location: "Bristol, UK",
            bio: "Builds detection engineering and manages Sophos & Microsoft Defender integrations for our 24/7 SOC.",
          },
          {
            name: "Priya Shah",
            role: "Modern Workplace Consultant",
            focus: "Adoption",
            location: "Amsterdam, NL",
            bio: "Guides change management and user adoption programmes so employees embrace new tooling.",
          },
          {
            name: "Ben Koster",
            role: "Automation Engineer",
            focus: "Automation",
            location: "Eindhoven, NL",
            bio: "Automates onboarding, compliance, and ticket triage workflows using Power Automate and Azure Logic Apps.",
          },
          {
            name: "Hannah McLeod",
            role: "Governance Analyst",
            focus: "Governance",
            location: "Edinburgh, UK",
            bio: "Maintains policy baselines, risk registers, and evidence packs for audits in regulated sectors.",
          },
          {
            name: "Ruben de Boer",
            role: "Service Desk Manager",
            focus: "Support Leadership",
            location: "Groningen, NL",
            bio: "Leads our follow-the-sun service desk so every ticket is triaged with clarity and escalations stay on track.",
          },
          {
            name: "Lewis Hart",
            role: "Senior Service Desk Engineer",
            focus: "Advanced Support",
            location: "Leeds, UK",
            bio: "Handles complex escalations across Intune, Exchange, and collaboration workloads for UK clients.",
          },
          {
            name: "Marcel Jans",
            role: "Cloud Infrastructure Engineer",
            focus: "Cloud Platforms",
            location: "The Hague, NL",
            bio: "Owns Azure resource governance, cost optimisation, and hybrid connectivity for SME clients.",
          },
          {
            name: "Aisha Karim",
            role: "Service Desk Engineer",
            focus: "Frontline Support",
            location: "Birmingham, UK",
            bio: "Provides first-line support, onboarding, and Microsoft 365 coaching for hybrid teams.",
          },
          {
            name: "Tom Fowler",
            role: "Project Manager",
            focus: "Delivery",
            location: "London, UK",
            bio: "Runs onboarding projects, vendor integrations, and quarterly roadmap initiatives with clear milestones.",
          },
          {
            name: "Nia Vermeer",
            role: "Support Coordinator",
            focus: "Operations",
            location: "Amsterdam, NL",
            bio: "Keeps documentation, runbooks, and communications organised across our Dutch and UK pods.",
          },
        ],
      },
      closing: {
        title: "Ready when you are",
        description:
          "Whether you're running an SMB or scaling into SME territory, we plug into your Microsoft 365 estate with clarity and momentum from day one.",
        highlights: [
          "Structured onboarding in 30 days",
          "Named pod of Microsoft 365 specialists",
          "SLA-backed response and escalation paths",
        ],
        cta: { label: "Start a conversation", href: "#contact" },
      },
    },
  },
  nl: {
    header: {
      announcement: "Nu tweetalige managed services in NL en VK.",
      announcementCta: { label: "Plan een strategische sessie", href: "#contact" },
      tagline: "Nederland · Verenigd Koninkrijk · Microsoft 365 Specialisten",
      nav: [
        { label: "Diensten", href: "#services" },
        { label: "Resultaten", href: "#outcomes" },
        { label: "Sectoren", href: "#industries" },
        { label: "Aanpak", href: "#process" },
        { label: "Pakketten", href: "#pricing" },
        { label: "Over ons", href: "/nl/over" },
        { label: "Contact", href: "#contact" },
      ],
      primaryAction: { label: "Start een traject", href: "#contact" },
      secondaryAction: { label: "Klantenportaal", href: "#contact" },
      languageToggle: { label: "EN", href: "/" },
    },
    footer: {
      tagline:
        "Managed security, modern workplace en cloudoperaties voor teams die verder willen dan break/fix.",
      columns: [
        {
          title: "Organisatie",
          links: [
            { label: "Diensten", href: "#services" },
            { label: "Pakketten", href: "#pricing" },
            { label: "Over ons", href: "/nl/over" },
            { label: "Werken bij", href: "#contact" },
          ],
        },
        {
          title: "Expertises",
          links: [
            { label: "Modern workplace", href: "#services" },
            { label: "Security operations", href: "#services" },
            { label: "Cloud governance", href: "#services" },
            { label: "Automatisering", href: "#process" },
          ],
        },
        {
          title: "Vestigingen",
          links: [
            { label: "Amsterdam", href: "#contact" },
            { label: "Rotterdam", href: "#contact" },
            { label: "Londen", href: "#contact" },
            { label: "Manchester", href: "#contact" },
          ],
        },
        {
          title: "Contact",
          links: [
            { label: "hello@mockmsp.eu", href: "mailto:hello@mockmsp.eu" },
            { label: "+31 20 241 9980", href: "tel:+31202419980" },
            { label: "+44 20 4526 8920", href: "tel:+442045268920" },
            { label: "www.mockmsp.eu", href: "https://www.mockmsp.eu" },
          ],
        },
      ],
      legal: [
        { label: "Privacy", href: "#" },
        { label: "Voorwaarden", href: "#" },
      ],
      localeNote: "Amsterdam · Londen",
    },
    home: {
      hero: {
        eyebrow: "Nederland · VK · Microsoft 365",
        title: "De moderne MSP-blueprint voor veerkrachtige, mensgerichte organisaties.",
        subtitle: "Wij stemmen automatisering, security en adoptie op elkaar af zodat teams zonder onderbreking presteren.",
        paragraphs: [
          "MockMSP combineert Nederlandse precisie en Britse pragmatiek om Microsoft 365-, Azure- en securityomgevingen zonder giswerk te beheren.",
          "Identiteit, compliance en employee experience komen samen in dezelfde tweetalige pod zodat elke wijziging soepel landt.",
        ],
        primaryCta: { label: "Ontwerp mijn managed plan", href: "#contact" },
        secondaryCta: { label: "Bekijk dienstencatalogus", href: "#services" },
        highlights: [
          { icon: "shieldCheck", text: "Securityframeworks afgestemd op ISO 27001 en NIS2" },
          { icon: "sparkles", text: "Automatisering-first onboarding afgerond in 30 dagen" },
          { icon: "users", text: "Pod van 15 tweetalige specialisten in NL en VK" },
        ],
        stats: [
          { value: "40", label: "Actieve managed klanten" },
          { value: "12m", label: "Gem. incidentrespons" },
          { value: "94%", label: "Klanttevredenheid" },
        ],
        card: {
          title: "Operations pulse",
          subtitle: "Live telemetrie uit onze managed tenants",
          metrics: [
            { label: "First-time fix", value: "78%" },
            { label: "Geautomatiseerde workflows", value: "65% van tickets" },
            { label: "Succesratio changes", value: "99,2%" },
          ],
          footer: "Ondersteund door AvePoint, Proofpoint, Sophos, Kaseya & 1Password integraties.",
        },
      },
      partners: {
        title: "Vertrouwde automatiserings- en securitystack",
        description:
          "We koppelen best-of-breed tooling zodat Microsoft 365 governance, back-up en security moeiteloos blijven.",
      },
      outcomes: {
        title: "Resultaten die we realiseren",
        description: "Meetbare impact op operatie, security en employee experience.",
        items: [
          { value: "40", label: "Managed SMB- en SME-klanten" },
          { value: "15", label: "Microsoft 365 specialisten" },
          { value: "30 dagen", label: "Tot uw nieuwe operating rhythm" },
        ],
      },
      services: {
        title: "Managed services voor moderne teams",
        description:
          "Kies de mix van workplace, security en cloudoperaties die past. Elk pakket bevat proactieve automatisering en tweetalige support.",
        items: [
          {
            title: "Modern Workplace",
            icon: "monitorSmartphone",
            accent: "from-emerald-500/20 via-teal-500/10 to-transparent",
            description:
              "Device-, identiteits- en samenwerkingsbeheer afgestemd op hybride organisaties.",
            features: [
              "Endpoint compliance voor Windows, macOS en mobiel",
              "Levenscyclusautomatisering voor onboarding en mutaties",
              "SharePoint- en Teams-governancetemplates",
            ],
          },
          {
            title: "Security & Compliance",
            icon: "shield",
            accent: "from-sky-500/20 via-blue-500/10 to-transparent",
            description:
              "Continue bescherming afgestemd op ISO 27001, NIS2 en sectorspecifieke normen.",
            features: [
              "Threat detection & response via Microsoft Defender en Proofpoint",
              "Identity hardening met conditional access baselines",
              "Auditklare bewijspakketten en beleidsautomatisering",
            ],
          },
          {
            title: "Cloud & Automatisering",
            icon: "cloud",
            accent: "from-emerald-400/20 via-lime-400/10 to-transparent",
            description:
              "Azure-governance, kostenbeheersing en integraties die data veilig laten stromen.",
            features: [
              "Azure landing zones en kostenoptimalisatie",
              "Back-up, retentie en AvePoint-resilience",
              "Power Platform- en Logic Apps-workflows",
            ],
          },
        ],
      },
      accelerators: {
        title: "Versnellers inbegrepen",
        description:
          "Gebruik playbooks, dashboards en automatisering die vanaf dag één doorlooptijden verkorten.",
        items: [
          {
            title: "Adoptieplaybook",
            description:
              "Persona-based enablementprogramma's en verandercommunicatie klaar voor uitrol in Microsoft Viva.",
            metric: { label: "Sessies", value: "25+" },
          },
          {
            title: "Security Control Library",
            description:
              "Gekoppelde policies voor ISO 27001, SOC 2 en NIS2 met realtime compliance-scores.",
            metric: { label: "Controls", value: "180" },
          },
          {
            title: "Automatiseringscatalogus",
            description:
              "Herbruikbare Power Automate- en Logic Apps-workflows voor onboarding, tickettriage en incidentrespons.",
            metric: { label: "Workflows", value: "60" },
          },
        ],
      },
      industries: {
        title: "Sectoren die we bedienen",
        description:
          "Gereguleerde en snelgroeiende sectoren vertrouwen op onze tweetalige pod voor tempo en compliance.",
        items: [
          "Financiële dienstverlening",
          "Professional services",
          "Scale-up SaaS",
          "Retail & hospitality",
          "Non-profit",
          "Lichte productie",
        ],
      },
      process: {
        title: "Tweetalige onboarding in 30 dagen",
        description:
          "Ons gestructureerde runbook brengt orde, zichtbaarheid en quick wins terwijl uw teams doorwerken.",
        steps: [
          {
            step: "Week 1",
            title: "Discover & stabilise",
            description: "Omgevingsscan, risico-oplossing en overdracht servicedesk.",
          },
          {
            step: "Week 2",
            title: "Secure & document",
            description: "Baselinebeleid, MFA-upgrade en kennisborging.",
          },
          {
            step: "Week 3",
            title: "Automate & optimise",
            description: "Implementatie workflows, rapportages en kostenbeheersing.",
          },
          {
            step: "Week 4",
            title: "Adopt & hand off",
            description: "Leiderschapssessie met succesmetrics en roadmap.",
          },
        ],
      },
      differentiators: {
        title: "Daarom blijven klanten bij MockMSP",
        description:
          "We combineren menselijk vakmanschap met automatisering zodat elke samenwerking meer waarde levert.",
        items: [
          {
            title: "Security-first DNA",
            description:
              "SOC-analisten werken samen met workplace-engineers zodat controls worden ontworpen, niet achteraf geplakt.",
          },
          {
            title: "Deelbare inzichten",
            description:
              "Executive dashboards vertalen ruis naar KPI's die uw bestuur in het Nederlands en Engels begrijpt.",
          },
          {
            title: "Menselijke escalaties",
            description:
              "Een vaste pod sluit aan bij grote incidenten en projecten – geen anonieme ticketcarrousel.",
          },
          {
            title: "Automatisering als sport",
            description:
              "Continue verbeter-sprints vergroten de workflowdekking en verminderen handmatig werk.",
          },
        ],
      },
      testimonials: {
        title: "Wat leiders zeggen",
        items: [
          {
            quote:
              "Het ticketvolume daalde 42% na onboarding en teams hebben eindelijk één plek voor updates.",
            name: "Eva, COO bij fintech scale-up",
          },
          {
            quote:
              "MockMSP begeleidde onze NIS2-voorbereiding met bewijslast die we direct met auditors deelden.",
            name: "Michael, Head of IT bij retailgroep",
          },
          {
            quote:
              "Door de tweetalige pod voelen onze NL- en UK-kantoren zich gelijk ondersteund – geen nachtelijke gaten meer.",
            name: "Sarah, Operations Director bij consultancy",
          },
        ],
      },
      plans: {
        title: "Servicepakketten",
        description:
          "Transparante niveaus met automatisering, security en begeleiding standaard inbegrepen. Prijs op basis van tenantomvang.",
        highlight: "Populairst",
        items: [
          {
            name: "Essential",
            tagline: "Basiskader voor moderne workplaces",
            features: [
              "8×5 tweetalig serviceteam",
              "Beheer Microsoft 365 en Intune",
              "AvePoint back-up en herstel",
            ],
            cta: "Vraag prijzen op",
            featured: false,
          },
          {
            name: "Secure",
            tagline: "Security operations met compliance-overzicht",
            features: [
              "24/7 monitoring en response",
              "Proofpoint- en Defender-integratie",
              "Beheer van beleid en bewijspakketten",
            ],
            cta: "Vraag prijzen op",
            featured: true,
          },
          {
            name: "Scale",
            tagline: "Automatisering en adoptie voor groei",
            features: [
              "Automatiseringsroadmap en sprints",
              "Employee experience-programma's",
              "Kwartaalreviews voor leiderschap",
            ],
            cta: "Vraag prijzen op",
            featured: false,
          },
        ],
      },
      faq: {
        title: "Veelgestelde vragen",
        items: [
          {
            question: "Hoe snel kunnen jullie starten?",
            answer:
              "Deze week plannen we de discovery; daarna starten we het 30-daagse onboardingprogramma met kritieke acties in week één.",
          },
          {
            question: "Ondersteunen jullie hybride omgevingen?",
            answer:
              "Ja. We beheren cloud-first tenants plus servers, netwerkapparatuur en legacy-applicaties die nog belangrijk zijn.",
          },
          {
            question: "Werken jullie samen met interne IT?",
            answer:
              "Zeker. We sluiten aan als uitbreiding van uw team met duidelijke RACI-modellen en gedeelde tooling.",
          },
          {
            question: "Helpen jullie bij compliance-audits?",
            answer:
              "We onderhouden bewijspakketten, voeren readiness-assessments uit en sluiten aan bij auditorcalls voor ISO 27001, SOC 2 en NIS2.",
          },
        ],
      },
      contact: {
        title: "Ontwerp uw managed services blauwdruk",
        description:
          "Vertel ons over uw Microsoft 365-omgeving en groeidoelen. U ontvangt binnen twee werkdagen een voorstel.",
        fields: [
          { name: "name", placeholder: "Volledige naam", type: "text" },
          { name: "email", placeholder: "Zakelijk e-mailadres", type: "email" },
          { name: "company", placeholder: "Organisatie", type: "text" },
          {
            name: "challenge",
            placeholder: "Wat is momenteel uw grootste uitdaging?",
            type: "text",
          },
        ],
        consent:
          "Door dit formulier te versturen ontvangt u updates over de diensten van MockMSP. Afmelden kan op elk moment.",
        cta: "Verstuur aanvraag",
        info: [
          { label: "E-mail", value: "hello@mockmsp.eu" },
          { label: "NL", value: "+31 20 241 9980" },
          { label: "UK", value: "+44 20 4526 8920" },
          { label: "Website", value: "www.mockmsp.eu" },
        ],
      },
    },
    about: {
      hero: {
        eyebrow: "Over MockMSP",
        title: "Grensoverschrijdende specialisten bouwen aan het moderne MSP-model.",
        paragraphs: [
          "Opgericht door Martijn van Dijk in Amsterdam en James Whitfield in Londen verenigt MockMSP Nederlandse precisie met Britse pragmatiek.",
          "Onze tweetalige pod van 15 houdt 40 klanten veilig, productief en auditklaar binnen Microsoft 365, Azure en security operations.",
        ],
        primaryCta: { label: "Plan een gesprek", href: "#contact" },
        secondaryCta: { label: "Bekijk diensten", href: "/nl#services" },
        stats: [
          {
            value: "2015",
            label: "Visie",
            description: "Geboren uit enterprise-lessen toegepast op SMB- en SME-realiteit.",
          },
          {
            value: "15",
            label: "Specialisten",
            description: "Engineers, architecten, SOC-analisten en adoptieleads.",
          },
          {
            value: "40",
            label: "Managed klanten",
            description: "Financiële dienstverleners, retail, SaaS en zakelijke dienstverlening.",
          },
        ],
      },
      mission: {
        title: "Onze missie",
        description:
          "Lever meetbare resultaten met rust en structuur zodat leiders verder kunnen plannen dan het volgende incident.",
        pillars: [
          {
            title: "Security ingebed",
            description:
              "Security-analisten, automation engineers en consultants werken als één pod zodat controls direct goed worden ontworpen.",
          },
          {
            title: "Betrouwbare data",
            description:
              "Dashboards en runbooks maken van complexe omgevingen één bron van waarheid voor het leiderschapsteam.",
          },
          {
            title: "Mens centraal",
            description:
              "Technologieadoptie wordt moeiteloos met mensgerichte verandertrajecten en tweetalige support.",
          },
        ],
      },
      timeline: {
        title: "Mijlpalen",
        items: [
          {
            year: "2025 jan",
            title: "Start in NL en VK",
            description:
              "Martijn van Dijk en James Whitfield lanceren MockMSP om Microsoft 365 managed services zonder enterprise-frictie te leveren.",
          },
          {
            year: "2025 jun",
            title: "Eerste 10 klanten",
            description:
              "Onboarding-playbooks bewijzen zich bij finance-, retail- en professional services-teams.",
          },
          {
            year: "2025 okt",
            title: "Strategische partners",
            description:
              "Partnerschappen met AvePoint, Proofpoint, 1Password, Sophos en Kaseya versterken governance en security.",
          },
          {
            year: "2026",
            title: "15-koppige pod",
            description:
              "Uitgebreid naar 15 specialisten met follow-the-sun dekking en geaudit runbook.",
          },
        ],
      },
      partners: {
        title: "Partners die onze dienstverlening versterken",
        description:
          "We verweven toonaangevende platforms zodat veerkracht, compliance en automatisering vanaf dag één beschikbaar zijn.",
      },
      values: {
        title: "Waarden",
        items: [
          {
            title: "Integriteit",
            description: "Transparant handelen en elke beslissing vastleggen voor klanten en collega's.",
          },
          {
            title: "Helderheid",
            description: "Complexe technologie vertalen naar taal die het bestuur begrijpt.",
          },
          {
            title: "Momentum",
            description: "In elke sprint meetbare vooruitgang leveren, van security posture tot employee experience.",
          },
          {
            title: "Aandacht",
            description: "Mensgerichte verandering zorgt dat tools teams ondersteunen over grenzen en tijdzones heen.",
          },
        ],
      },
      team: {
        title: "Leiderschapsteam",
        description:
          "Maak kennis met de grensoverschrijdende specialisten die onze Microsoft 365-diensten aansturen.",
        members: [
          {
            name: "Martijn van Dijk",
            role: "Co-founder & CEO",
            focus: "Strategie & Modern Workplace",
            location: "Amsterdam, NL",
            bio: "Stuurt ons deliverymodel op duidelijke governance, transparante communicatie en meetbare resultaten.",
          },
          {
            name: "James Whitfield",
            role: "Co-founder & CTO",
            focus: "Security & Automatisering",
            location: "Londen, VK",
            bio: "Zet Microsoft 365 best practices om in automatisering en snelle response-runbooks voor klanten.",
          },
          {
            name: "Sofia Martens",
            role: "Head of Client Success",
            focus: "Client Success",
            location: "Utrecht, NL",
            bio: "Bewaakt dat elk traject aansluit op adoptiedoelen tijdens kwartaalreviews.",
          },
          {
            name: "Oliver Patel",
            role: "Service Delivery Lead",
            focus: "Service Delivery",
            location: "Manchester, VK",
            bio: "Stemmt pods af zodat co-managed teams consistente dekking en proactief onderhoud krijgen.",
          },
          {
            name: "Lara Visser",
            role: "Microsoft 365 Architect",
            focus: "M365 Architectuur",
            location: "Rotterdam, NL",
            bio: "Ontwerpt veilige tenant-baselines, SharePoint-architectuur en compliancebeleid voor groeiteams.",
          },
          {
            name: "Daniel Hughes",
            role: "Security Operations Lead",
            focus: "Security Operations",
            location: "Bristol, VK",
            bio: "Bouwt detectie-engineering en beheert Sophos- en Microsoft Defender-integraties voor onze 24/7 SOC.",
          },
          {
            name: "Priya Shah",
            role: "Modern Workplace Consultant",
            focus: "Adoptie",
            location: "Amsterdam, NL",
            bio: "Begeleidt changemanagement en adoptieprogramma's zodat medewerkers nieuwe tooling omarmen.",
          },
          {
            name: "Ben Koster",
            role: "Automation Engineer",
            focus: "Automatisering",
            location: "Eindhoven, NL",
            bio: "Automatiseert onboarding, compliance en tickettriage met Power Automate en Azure Logic Apps.",
          },
          {
            name: "Hannah McLeod",
            role: "Governance Analyst",
            focus: "Governance",
            location: "Edinburgh, VK",
            bio: "Beheert beleidsbaselines, risicoregisters en bewijspakketten voor audits in gereguleerde sectoren.",
          },
          {
            name: "Ruben de Boer",
            role: "Service Desk Manager",
            focus: "Support Leadership",
            location: "Groningen, NL",
            bio: "Stuurt onze follow-the-sun servicedesk aan zodat elk ticket helder wordt opgepakt en escalaties op schema blijven.",
          },
          {
            name: "Lewis Hart",
            role: "Senior Service Desk Engineer",
            focus: "Advanced Support",
            location: "Leeds, VK",
            bio: "Handelt complexe escalaties af binnen Intune, Exchange en collaboration-workloads voor UK-klanten.",
          },
          {
            name: "Marcel Jans",
            role: "Cloud Infrastructure Engineer",
            focus: "Cloud Platforms",
            location: "Den Haag, NL",
            bio: "Verantwoordelijk voor Azure-governance, kostenoptimalisatie en hybride connectiviteit voor SME-klanten.",
          },
          {
            name: "Aisha Karim",
            role: "Service Desk Engineer",
            focus: "Frontline Support",
            location: "Birmingham, VK",
            bio: "Levert eerstelijnssupport, onboarding en Microsoft 365-coaching voor hybride teams.",
          },
          {
            name: "Tom Fowler",
            role: "Project Manager",
            focus: "Delivery",
            location: "Londen, VK",
            bio: "Stuurt onboardingprojecten, vendorintegraties en kwartaalroadmaps met heldere mijlpalen.",
          },
          {
            name: "Nia Vermeer",
            role: "Support Coordinator",
            focus: "Operaties",
            location: "Amsterdam, NL",
            bio: "Houdt documentatie, runbooks en communicatie georganiseerd over onze Nederlandse en Britse pods.",
          },
        ],
      },
      closing: {
        title: "Klaar wanneer u dat bent",
        description:
          "Of u nu een mkb runt of naar SME-niveau groeit, wij pluggen in op uw Microsoft 365-tenant met duidelijkheid en momentum vanaf dag één.",
        highlights: [
          "Gestructureerde onboarding in 30 dagen",
          "Vaste pod van Microsoft 365 specialisten",
          "SLA-onderbouwde response en escalaties",
        ],
        cta: { label: "Start een gesprek", href: "#contact" },
      },
    },
  },
} as const;

export type Locale = keyof typeof copy;
export type SiteCopy = (typeof copy)[Locale];
export type HeaderCopy = (typeof copy)[Locale]["header"];
export type FooterCopy = (typeof copy)[Locale]["footer"];
export type HomeCopy = (typeof copy)[Locale]["home"];
export type AboutCopy = (typeof copy)[Locale]["about"];
