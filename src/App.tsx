import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  BarChart3,
  FileText,
  MessageSquare,
  MousePointer2,
  Sparkles,
  Wand2,
  Workflow as WorkflowIcon,
} from 'lucide-react'
import { SectionHeader } from './components/section-header'
import { Badge } from './components/ui/badge'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'

const features = [
  {
    title: 'AI-Powered Document Processing',
    description:
      'Ingest contracts, PDFs, emails, and system exports with precision extraction tuned to your compliance needs.',
    icon: FileText,
    accent: 'from-indigo-500/80 to-sky-400/70',
  },
  {
    title: 'Interactive Data Tools',
    description: 'Empower teams with secure data workspaces, semantic search, and natural language querying.',
    icon: MousePointer2,
    accent: 'from-sky-400/80 to-cyan-300/70',
  },
  {
    title: 'Advanced Analytics & Visualization',
    description: 'Real-time dashboards, anomaly detection, and board-ready visuals powered by adaptive AI.',
    icon: BarChart3,
    accent: 'from-purple-500/70 to-indigo-500/80',
  },
  {
    title: 'Automated Report Generation',
    description: 'Generate branded reports with AI-written commentary, tailored insights, and dynamic narratives.',
    icon: Wand2,
    accent: 'from-emerald-400/80 to-teal-400/70',
  },
]

const testimonials = [
  {
    quote:
      'Vibe transformed our reporting workflow—weeks of manual assembly are now automated, auditable, and AI-reviewed.',
    name: 'Priya Singh',
    role: 'VP of Data, Northwind Manufacturing',
  },
  {
    quote: 'The semantic workbench lets our analysts explore governed data without waiting on engineering tickets.',
    name: 'Jordan Miles',
    role: 'Head of Analytics, Fairview Health',
  },
  {
    quote: 'We connected ERP, CRM, and email archives in days. The AI extractions are spot-on for compliance.',
    name: 'Samira Khan',
    role: 'Director of Operations, Altura Logistics',
  },
]

const logos = ['Dataplex', 'Nova Systems', 'Helix Labs', 'QuantaWorks', 'StratusIQ', 'BluePeak']

function GradientOrb() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-10 top-0 h-72 w-72 rounded-full bg-purple-500/30 blur-[120px]" />
      <div className="absolute right-0 top-10 h-64 w-64 rounded-full bg-sky-400/25 blur-[110px]" />
      <div className="absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-indigo-500/20 blur-[120px]" />
    </div>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient pb-20 pt-10 sm:pt-16">
      <GradientOrb />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
              <Sparkles className="h-5 w-5 text-brand-100" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.14em] text-brand-100">Vibe Data Automation</p>
              <p className="text-xs text-slate-200/80">Trusted AI for enterprise-scale data intelligence</p>
            </div>
          </div>
          <div className="hidden items-center gap-3 sm:flex">
            <Button variant="ghost" className="text-sm">
              Platform
            </Button>
            <Button variant="ghost" className="text-sm">
              Solutions
            </Button>
            <Button size="sm" className="shadow-glass">Request demo</Button>
          </div>
        </header>

        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-8"
          >
            <Badge className="max-w-fit rounded-full border-brand-300/60 bg-brand-400/15 px-4 py-1 text-brand-50">
              Enterprise-ready AI automation
            </Badge>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Connect every data signal with AI-driven automation.
            </h1>
            <p className="max-w-2xl text-lg text-slate-200/80">
              Deploy a trusted automation layer that reads documents, orchestrates workflows, and delivers analytics—without
              waiting on custom engineering. Designed for regulated industries that demand accuracy, lineage, and speed.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" className="gap-2">
                Request a live demo <ArrowUpRight className="h-4 w-4" />
              </Button>
              <Button variant="secondary" size="lg" className="backdrop-blur">
                Explore platform
              </Button>
            </div>
            <div className="grid w-full gap-4 sm:grid-cols-3">
              {[
                ['<12 days', 'to connect enterprise systems'],
                ['98.4%', 'extraction precision in audits'],
                ['15x', 'faster executive reporting'],
              ].map(([stat, label]) => (
                <Card key={label} className="border-white/10 bg-white/5">
                  <CardContent className="space-y-1 p-4">
                    <p className="text-2xl font-semibold text-white">{stat}</p>
                    <p className="text-sm text-slate-200/70">{label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <div className="absolute -left-10 -top-10 h-24 w-24 rounded-full bg-brand-500/30 blur-[100px]" />
            <div className="absolute -right-10 bottom-0 h-28 w-28 rounded-full bg-sky-400/20 blur-[90px]" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glass backdrop-blur-xl">
              <div className="flex items-center justify-between text-sm text-slate-200/80">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/90">
                  <WorkflowIcon className="h-4 w-4 text-sky-300" /> Flow intelligence
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-brand-100">Live</span>
              </div>
              <div className="mt-5 space-y-4">
                {[
                  { label: 'Document intake → Smart parsing', value: 'Completed', color: 'text-emerald-300' },
                  { label: 'PII detection → Masked export', value: 'Running', color: 'text-amber-300' },
                  { label: 'Insight narrative → Exec report', value: 'Queued', color: 'text-sky-200' },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-white">{item.label}</p>
                      <span className={`text-xs ${item.color}`}>{item.value}</span>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                      <div className={`h-full w-[76%] rounded-full bg-gradient-to-r from-brand-400 to-sky-400`} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-white/5 bg-white/5 p-4">
                <div className="flex items-center justify-between text-sm text-slate-200/80">
                  <span className="inline-flex items-center gap-2 text-white">
                    <MessageSquare className="h-4 w-4 text-sky-300" />
                    Natural language query
                  </span>
                  <span className="text-xs text-slate-200/70">AI copilot</span>
                </div>
                <p className="mt-3 text-base text-white/90">
                  "Summarize Q4 anomalies by business unit and produce CFO-ready slides with confidence intervals."
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/5 bg-white/5 px-6 py-4 backdrop-blur-xl">
          <p className="text-sm text-slate-200/80">Trusted by data-forward teams</p>
          <div className="grid grid-cols-2 gap-3 text-sm text-white/80 sm:grid-cols-3 lg:grid-cols-6">
            {logos.map((logo) => (
              <div key={logo} className="flex items-center justify-center rounded-full bg-white/5 px-4 py-2 text-xs uppercase tracking-wide">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-slate-950 py-20">
      <GradientOrb />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <SectionHeader
          label="Platform"
          title="One AI layer for ingestion, orchestration, and insight."
          description="Connect every file, system, and stakeholder with a secure automation fabric designed for enterprise data teams."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
            >
              <Card className="relative h-full overflow-hidden border-white/10 bg-glass-gradient text-white">
                <div className={`absolute inset-0 opacity-60 bg-gradient-to-br ${feature.accent}`} />
                <div className="absolute inset-0 bg-slate-950/50" />
                <CardHeader className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <div className="flex flex-wrap gap-2 text-xs text-slate-100/80">
                    {['Secure', 'SOC2-ready', 'Human-in-the-loop', 'API-first'].map((pill) => (
                      <span key={pill} className="rounded-full bg-white/10 px-3 py-1">
                        {pill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Workflow() {
  const steps = [
    {
      title: 'Connect & govern',
      text: 'Link ERPs, CRMs, data lakes, and inboxes with governed access, lineage, and PII safeguards.',
    },
    {
      title: 'Automate with AI',
      text: 'Set up automations that classify, enrich, and validate data—keeping humans in the loop where it matters.',
    },
    {
      title: 'Deliver insights',
      text: 'Ship executive-ready dashboards and auto-generated narratives that decision makers trust.',
    },
  ]

  return (
    <section className="relative overflow-hidden bg-slate-950 pb-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <SectionHeader
          label="Go live fast"
          title="Data automation that meets you where you are."
          description="A guided path from ingestion to insight. Vibe deploys with enterprise security, auditable AI, and an intuitive copilot."
        />
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="relative overflow-hidden border-white/10 bg-white/5">
            <CardHeader>
              <div className="flex items-center gap-3 text-sm text-slate-100/80">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-500/20">
                  <ArrowUpRight className="h-5 w-5 text-brand-100" />
                </div>
                <div>
                  <p className="font-semibold text-white">Adaptive AI copilot</p>
                  <p className="text-xs text-slate-200/80">Guides your team through every workflow</p>
                </div>
              </div>
              <CardTitle className="text-2xl text-white">Built for enterprise rigor and analyst speed</CardTitle>
              <CardDescription>
                Define automations with natural language, route exceptions to reviewers, and monitor quality with transparent scores.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              {steps.map((step, idx) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-brand-50">
                    {idx + 1}
                  </div>
                  <div className="space-y-1">
                    <p className="text-base font-semibold text-white">{step.title}</p>
                    <p className="text-sm text-slate-200/80">{step.text}</p>
                  </div>
                </motion.div>
              ))}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between text-sm text-slate-200/80">
                  <span className="inline-flex items-center gap-2 text-white">
                    <Sparkles className="h-4 w-4 text-sky-200" />
                    Suggested action
                  </span>
                  <span className="text-xs text-brand-100">High confidence</span>
                </div>
                <p className="mt-3 text-white/90">
                  "Map vendor invoices to GL accounts, flag anomalies above 2.5σ, and prepare a CFO deck with narrative highlights."
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="h-full border-white/10 bg-white/5">
            <CardHeader>
              <Badge className="max-w-fit" variant="outline">
                Security-first
              </Badge>
              <CardTitle className="text-white">Enterprise controls without the drag</CardTitle>
              <CardDescription>
                SSO, RBAC, audit trails, and data residency baked in. Deploy on your cloud or ours.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { label: 'SSO & SCIM', detail: 'SAML, Okta, Azure AD provisioning', icon: '🔐' },
                { label: 'Observability', detail: 'Full lineage, quality scores, drift alerts', icon: '🛰️' },
                { label: 'Compliance', detail: 'SOC2, GDPR, HIPAA-ready workflows', icon: '✅' },
                { label: 'API-first', detail: 'SDKs and webhooks for custom automations', icon: '⚡️' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span className="text-xl">{item.icon}</span>
                  <div className="space-y-1">
                    <p className="font-semibold text-white">{item.label}</p>
                    <p className="text-sm text-slate-200/80">{item.detail}</p>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">Download security brief</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20">
      <GradientOrb />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <SectionHeader
          label="Proof"
          title="Teams trust Vibe when accuracy, speed, and compliance matter."
          description="Hear how fast-growing enterprises ship insights and automate reporting with AI that is transparent by design."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
            >
              <Card className="h-full border-white/10 bg-white/5">
                <CardContent className="flex h-full flex-col gap-4 p-6">
                  <p className="text-lg text-white/90">“{testimonial.quote}”</p>
                  <div className="mt-auto text-sm text-slate-200/80">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p>{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section className="relative overflow-hidden bg-slate-950 pb-24">
      <GradientOrb />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <div className="flex flex-col gap-4 text-center">
          <Badge className="mx-auto" variant="outline">
            Pricing that scales with your volume
          </Badge>
          <h3 className="text-3xl font-semibold text-white sm:text-4xl">Launch fast with a guided pilot</h3>
          <p className="text-lg text-slate-200/80">
            Start with a white-glove deployment, then scale to production with usage-based pricing and enterprise support.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="border-white/10 bg-white/5">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white">Pilot program</CardTitle>
                <Badge>Fastest path to value</Badge>
              </div>
              <CardDescription>
                6-week rollout with hands-on solution architects, security review, and success metrics you define.
              </CardDescription>
              <p className="text-4xl font-bold text-white">
                Custom
                <span className="text-base font-normal text-slate-200/80"> / enterprise use case</span>
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                'Dedicated onboarding squad with AI + data experts',
                'Document processing, chat workbench, and analytics included',
                'Private cloud or on-prem deployment options',
                'Security and compliance alignment from day one',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-slate-100/90">
                  <span className="text-brand-100">•</span>
                  <span>{item}</span>
                </div>
              ))}
              <div className="mt-6 flex flex-wrap gap-3">
                <Button size="lg" className="flex-1 min-w-[180px]">Book a strategy call</Button>
                <Button variant="secondary" size="lg" className="flex-1 min-w-[180px]">Download pricing guide</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="relative border-white/10 bg-white/5">
            <CardHeader>
              <CardTitle className="text-white">What you get</CardTitle>
              <CardDescription>
                Every engagement pairs automation with human oversight—ensuring you can trust every prediction.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-100/90">
              {[
                'AI copilots for finance, operations, and compliance teams',
                'Unlimited data sources with governed access controls',
                'Executive-ready visualizations and narratives',
                '24/7 support with dedicated technical success manager',
                'Optional expert services for data modeling and change management',
              ].map((line) => (
                <div key={line} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                  <span className="mt-0.5 text-brand-100">✦</span>
                  <span>{line}</span>
                </div>
              ))}
              <div className="rounded-2xl border border-brand-400/40 bg-brand-400/10 p-4">
                <p className="text-sm text-brand-50">
                  “We shipped our first automated board pack in two weeks with full auditability. The ROI was immediate.”
                </p>
                <p className="mt-2 text-xs text-brand-50/80">Director of FP&A, Fortune 500 customer</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950/80 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-brand-100" />
            <p className="font-semibold text-white">Vibe Data Automation</p>
          </div>
          <p className="text-sm text-slate-200/80">AI that understands your data and your standards.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="secondary" size="sm">
            Request demo
          </Button>
          <Button variant="outline" size="sm" className="border-white/20 text-white">
            View security brief
          </Button>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Hero />
      <Features />
      <Workflow />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App
