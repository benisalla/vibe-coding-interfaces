import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BarChart3,
  Database,
  FileSearch,
  FileText,
  LineChart,
  Menu,
  ShieldCheck,
  Sparkles,
  Workflow as WorkflowIcon,
  X,
} from 'lucide-react'
import { Badge } from './components/ui/badge'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './components/ui/dialog'
import { Skeleton } from './components/ui/skeleton'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Resources', href: '#resources' },
  { label: 'Contact', href: '#contact' },
]

const features = [
  {
    title: 'Document AI Processing',
    description: 'AI-powered OCR and language understanding to extract and structure data from any document format.',
    icon: FileSearch,
    accent: 'from-[#0353b5]/70 via-[#023e8a]/70 to-[#012d66]/70',
    bullets: ['Emails, PDFs, images, scans', 'PII-aware extraction and validation'],
  },
  {
    title: 'Interactive Data Tools',
    description: 'Query governed data with natural language, build reusable functions, and expose secure APIs.',
    icon: Database,
    accent: 'from-[#0466d1]/70 via-[#0353b5]/60 to-[#023e8a]/70',
    bullets: ['Plain-language querying', 'Custom tools and API integrations'],
  },
  {
    title: 'Visual Analytics',
    description: 'Track KPIs, explore trends, and forecast outcomes with live, AI-assisted dashboards.',
    icon: BarChart3,
    accent: 'from-[#023e8a]/70 via-[#0466d1]/60 to-[#0353b5]/70',
    bullets: ['Real-time dashboards', 'Predictive analytics and alerts'],
  },
  {
    title: 'Report Generation',
    description: 'Deliver polished, AI-written reports with narratives, highlights, and scheduled delivery.',
    icon: FileText,
    accent: 'from-[#0353b5]/60 via-[#0466d1]/55 to-[#e9ecef]/35',
    bullets: ['Executive-ready narratives', 'Automated scheduling and distribution'],
  },
]

const steps = [
  {
    title: 'Connect your data sources',
    description: 'Plug in email, storage, databases, and business apps with governed access.',
    icon: WorkflowIcon,
  },
  {
    title: 'AI processes and structures data',
    description: 'OCR, classification, enrichment, and validation with lineage and audit trails.',
    icon: ShieldCheck,
  },
  {
    title: 'Interact, analyze, and report',
    description: 'Ask questions, visualize KPIs, and auto-generate reports your leaders trust.',
    icon: LineChart,
  },
]

const testimonials = [
  {
    quote: 'We cut reporting time by 70% and improved accuracy for finance and compliance teams.',
    name: 'Priya Singh',
    role: 'VP of Data, Northwind',
    color: 'bg-[#0353b5]',
  },
  {
    quote: 'Natural language queries over governed data changed how fast our analysts deliver insights.',
    name: 'Jordan Miles',
    role: 'Head of Analytics, Fairview Health',
    color: 'bg-[#0466d1]',
  },
]

const stats = [
  { label: 'Documents processed', value: '1.2M+', helper: 'per month' },
  { label: 'Accuracy rate', value: '98.7%', helper: 'audit verified' },
  { label: 'Time saved', value: '62%', helper: 'reporting efficiency' },
]

const logos = ['StratusIQ', 'Helix Labs', 'Nova Systems', 'QuantaWorks', 'Dataplex', 'BluePeak']

function useCounter(target: number, duration = 1200) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let frame = 0
    let start: number | null = null

    const step = (timestamp: number) => {
      if (start === null) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      setValue(Math.round(progress * target))
      if (progress < 1) {
        frame = requestAnimationFrame(step)
      }
    }

    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [duration, target])

  return value
}

function LiveDemo() {
  const [tab, setTab] = useState('upload')
  const [progress, setProgress] = useState(18)
  const [loading, setLoading] = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    if (!loading) return
    setProgress(0)
    const id = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(id)
          setLoading(false)
          return 100
        }
        return p + 6
      })
    }, 120)
    return () => clearInterval(id)
  }, [loading])

  const handleUpload = () => {
    setLoading(true)
  }

  return (
    <section className="bg-slate-950 pb-16 pt-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-2">
            <Badge className="border-[#0466d1]/50 bg-white/5 text-[#e9ecef]">Live demo</Badge>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">See the platform in action</h2>
            <p className="max-w-2xl text-slate-200/80">
              Upload a sample, watch AI extract data, explore the dashboard, and preview an autogenerated report—no setup required.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button className="bg-[#0466d1] text-white hover:bg-[#0353b5]" onClick={handleUpload}>
              Upload sample document
            </Button>
            <Button
              variant="secondary"
              className="border-white/20 bg-white/5 text-white hover:bg-white/10"
              onClick={() => setExpanded(true)}
            >
              Open full view
            </Button>
          </div>
        </div>

        <Tabs value={tab} onValueChange={setTab} defaultValue="upload">
          <TabsList>
            <TabsTrigger value="upload">Upload</TabsTrigger>
            <TabsTrigger value="extract">AI extraction</TabsTrigger>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="report">Report</TabsTrigger>
          </TabsList>

          <TabsContent value="upload">
            <Card className="border-white/10 bg-white/5 text-white">
              <CardContent className="space-y-4 p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-slate-200/80">
                    <FileSearch className="h-4 w-4 text-[#7bc5ff]" />
                    <span>Sample invoice.pdf</span>
                  </div>
                  <Button size="sm" className="bg-[#0466d1] text-white hover:bg-[#0353b5]" onClick={handleUpload}>
                    Re-upload
                  </Button>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-200/70">
                    <span>{loading ? 'Uploading...' : 'Ready'}</span>
                    <span>{loading ? `${progress}%` : '100%'}</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#0466d1] to-[#7bc5ff] transition-[width]"
                      style={{ width: `${loading ? progress : 100}%` }}
                    />
                  </div>
                </div>
                {loading ? (
                  <div className="space-y-2">
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-10 w-5/6" />
                    <Skeleton className="h-10 w-2/3" />
                  </div>
                ) : (
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200/90">
                    <p className="font-semibold text-white">Parsed fields</p>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      {[
                        ['Vendor', 'Northwind Logistics'],
                        ['Amount', '$48,230.00'],
                        ['Invoice #', 'INV-2047'],
                        ['Due date', '2025-01-15'],
                      ].map(([k, v]) => (
                        <div key={k} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                          <p className="text-xs uppercase tracking-[0.12em] text-slate-300/70">{k}</p>
                          <p className="text-sm text-white/90">{v}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="extract">
            <Card className="border-white/10 bg-white/5 text-white">
              <CardContent className="space-y-4 p-5">
                <div className="flex items-center justify-between text-sm text-white/90">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-[#7bc5ff]" />
                    <p className="font-semibold">AI extraction stream</p>
                  </div>
                  <span className="text-xs text-emerald-200">Live</span>
                </div>
                <div className="space-y-2 text-sm text-slate-100/80">
                  {['Detecting entities...', 'Applying OCR...', 'Validating totals...', 'Structuring line items...'].map(
                    (line, idx) => (
                      <div key={line} className="flex items-center gap-2">
                        <Skeleton className={`h-2 w-2 rounded-full ${idx * 120}ms`} />
                        <span className="flex-1 rounded-lg bg-white/5 px-3 py-2">{line}</span>
                      </div>
                    ),
                  )}
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.14em] text-slate-300/70">Confidence</p>
                  <div className="mt-2 flex items-center gap-3 text-sm text-white">
                    <div className="h-2 flex-1 rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-gradient-to-r from-emerald-300 to-emerald-500" style={{ width: '92%' }} />
                    </div>
                    <span className="text-emerald-200">92%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="dashboard">
            <Card className="border-white/10 bg-white/5 text-white">
              <CardContent className="space-y-4 p-5">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold">Sample dashboard</h4>
                  <Dialog open={expanded} onOpenChange={setExpanded}>
                    <DialogTrigger>
                      <Button size="sm" variant="secondary" className="border-white/20 bg-white/5 text-white hover:bg-white/10">
                        Expand
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Interactive dashboard</DialogTitle>
                        <DialogDescription>Explore processed documents, KPIs, and trends.</DialogDescription>
                      </DialogHeader>
                      <div className="mt-4 grid gap-4 md:grid-cols-2">
                        <Skeleton className="h-48" />
                        <Skeleton className="h-48" />
                        <Skeleton className="h-24 md:col-span-2" />
                      </div>
                      <DialogFooter>
                        <Button variant="secondary" className="border-white/20 bg-white/5 text-white hover:bg-white/10" onClick={() => setExpanded(false)}>
                          Close
                        </Button>
                        <Button className="bg-[#0466d1] text-white hover:bg-[#0353b5]">View in app</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  {[78, 64, 52].map((height, idx) => (
                    <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.14em] text-slate-300/70">KPI {idx + 1}</p>
                      <p className="text-2xl font-semibold text-white">{idx === 0 ? '$182k' : idx === 1 ? '98.7%' : '2.3d'}</p>
                      <div className="mt-3 h-28">
                        <div className="flex h-full items-end gap-2">
                          {[height - 12, height, height - 18, height - 6].map((h, i) => (
                            <div key={i} className="flex-1 rounded-full bg-gradient-to-t from-slate-900 to-[#0466d1]/80" style={{ height: `${Math.max(h, 12)}px` }} />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="report">
            <Card className="border-white/10 bg-white/5 text-white">
              <CardContent className="space-y-4 p-5">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-[#7bc5ff]" />
                  <div>
                    <p className="text-lg font-semibold">Generated report</p>
                    <p className="text-sm text-slate-200/80">AI-written executive summary with visuals and callouts.</p>
                  </div>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.14em] text-slate-300/70">Highlights</p>
                    <ul className="space-y-2 text-sm text-slate-100/85">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
                        <span>Payments under $50k processed in <b>2.3 days</b> on average.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-[#7bc5ff]" />
                        <span>Detected <b>zero PII leakage</b> across 4k documents.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" />
                        <span><b>Invoice anomalies down 38%</b> after AI validation.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-900/40 p-4">
                    <p className="text-xs uppercase tracking-[0.14em] text-slate-300/70">Download</p>
                    <div className="mt-3 flex items-center gap-3">
                      <Skeleton className="h-14 w-14 rounded-2xl bg-white/10" />
                      <div className="space-y-1">
                        <p className="text-sm font-semibold">Quarterly Insights.pdf</p>
                        <p className="text-xs text-slate-200/70">Generated 2 mins ago • 1.8MB</p>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <Button size="sm" className="bg-[#0466d1] text-white hover:bg-[#0353b5]">
                        Download
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="border-white/20 bg-white/5 text-white hover:bg-white/10"
                      >
                        Share link
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function MobileSheet({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-[78%] max-w-sm bg-slate-900 shadow-2xl">
        <div className="flex items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-[#0466d1]" />
            <p className="text-lg font-semibold text-white">Vibe Data</p>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        <div className="space-y-2 px-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={onClose}
              className="block rounded-lg px-3 py-3 text-sm font-semibold text-white hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
          <Button className="mt-2 w-full bg-[#0466d1] text-white hover:bg-[#0353b5]">Get Started</Button>
        </div>
      </div>
    </div>
  )
}

function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0466d1] via-[#0353b5] to-[#012d66] text-white shadow-lg shadow-blue-900/40">
            <Sparkles className="h-5 w-5" />
          </span>
          <div>
            <p className="text-lg font-semibold text-white">Vibe Data</p>
            <p className="text-xs text-slate-300/80">AI automation platform</p>
          </div>
        </div>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-200 lg:flex">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="secondary" className="border-white/20 bg-white/5 text-white hover:bg-white/10">
            Talk to sales
          </Button>
          <Button className="bg-[#0466d1] text-white hover:bg-[#0353b5]">Get Started</Button>
        </div>
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(true)}>
          <Menu className="h-5 w-5 text-white" />
        </Button>
      </div>
      <MobileSheet open={open} onClose={() => setOpen(false)} />
    </header>
  )
}

function Hero() {
  const documents = useCounter(1200000, 1500)
  const accuracy = useCounter(987, 1300)

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-[#010f2a] pb-16 pt-14 sm:pt-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-10 top-0 h-80 w-80 rounded-full bg-[#0466d1]/30 blur-[120px]" />
        <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-[#012d66]/30 blur-[140px]" />
      </div>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 lg:flex-row lg:items-start">
        <div className="space-y-7 lg:max-w-xl">
          <Badge className="border-[#0466d1]/50 bg-white/5 text-[#e9ecef] backdrop-blur">
            AI-Powered Data Intelligence Platform
          </Badge>
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Automate. Understand. <span className="text-[#7bc5ff]">Deliver.</span>
            </h1>
            <p className="text-lg text-slate-200/85">
              Automate document processing, interact with data, visualize insights, and generate reports—all with AI
              that’s built for governance, accuracy, and speed.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="lg" className="gap-2 bg-[#0466d1] text-white hover:bg-[#0353b5]">
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="border-white/20 bg-white/5 text-white backdrop-blur hover:bg-white/10"
            >
              Book a demo
            </Button>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[['Docs processed', `${documents.toLocaleString()}+`], ['Accuracy', `${accuracy / 10}%`], ['Deploy time', '< 2 weeks']].map(
              ([label, value]) => (
                <Card key={label} className="border-white/10 bg-white/5">
                  <CardContent className="space-y-1 p-4">
                    <p className="text-xs uppercase tracking-[0.14em] text-slate-300/80">{label}</p>
                    <p className="text-2xl font-semibold text-white">{value}</p>
                  </CardContent>
                </Card>
              ),
            )}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative w-full max-w-xl"
        >
          <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-[#0466d1]/25 blur-[110px]" />
          <div className="absolute -right-6 bottom-10 h-24 w-24 rounded-full bg-[#012d66]/25 blur-[110px]" />
          <div className="relative space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-slate-100">
                <ShieldCheck className="h-4 w-4 text-[#7bc5ff]" /> Live data ops
              </span>
              <Badge variant="outline" className="border-white/20 text-white">
                Audited
              </Badge>
            </div>
            <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between text-sm text-white/90">
                  <div className="flex items-center gap-2">
                    <FileSearch className="h-4 w-4 text-[#7bc5ff]" />
                    <p className="font-semibold">Document intake</p>
                  </div>
                  <span className="text-xs text-emerald-200">AI verified</span>
                </div>
                {[
                  { label: 'Contracts', value: 86 },
                  { label: 'Invoices', value: 72 },
                  { label: 'Emails', value: 64 },
                ].map((doc) => (
                  <div key={doc.label} className="space-y-1">
                    <div className="flex items-center justify-between text-xs text-slate-200/80">
                      <p>{doc.label}</p>
                      <p className="text-white/90">{doc.value}%</p>
                    </div>
                    <div className="h-2 rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#0466d1] to-[#7bc5ff]"
                        style={{ width: `${doc.value}%` }}
                      />
                    </div>
                  </div>
                ))}
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-slate-200/90">
                  <Sparkles className="h-4 w-4 text-[#7bc5ff]" />
                  Copilot: Draft executive summary for Q4 risk review.
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/70 to-slate-900/40 p-4 shadow-inner">
                  <div className="flex items-center justify-between text-sm text-white/90">
                    <div className="flex items-center gap-2">
                      <WorkflowIcon className="h-4 w-4 text-emerald-200" />
                      <p className="font-semibold">Flows</p>
                    </div>
                    <span className="text-xs text-amber-200">Routing</span>
                  </div>
                  <div className="mt-4 space-y-3">
                    {['PII detection', 'Enrichment', 'Narratives'].map((label, i) => (
                      <div key={label} className="flex items-center gap-3">
                        <div
                          className={`h-1.5 w-full rounded-full bg-gradient-to-r ${
                            i === 0
                              ? 'from-emerald-300 to-emerald-500'
                              : i === 1
                              ? 'from-[#7bc5ff] to-[#0466d1]'
                              : 'from-amber-300 to-orange-400'
                          } animate-pulse`}
                        />
                        <span className="text-[11px] text-slate-200/70">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between text-sm text-white/90">
                    <div className="flex items-center gap-2">
                      <LineChart className="h-4 w-4 text-[#7bc5ff]" />
                      <p className="font-semibold">Insights</p>
                    </div>
                    <span className="text-xs text-slate-200/70">Realtime</span>
                  </div>
                  <div className="mt-4 grid grid-cols-5 items-end gap-2">
                    {[28, 42, 64, 52, 76].map((height, idx) => (
                      <div
                        key={idx}
                        className="rounded-full bg-gradient-to-t from-slate-900 to-[#0466d1]/80"
                        style={{ height: `${height}px` }}
                      />
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between text-xs text-slate-200/80">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-emerald-200" />
                      <p>Lineage tracked</p>
                    </div>
                    <p className="text-white/90">Pass</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Features() {
  return (
    <section id="features" className="bg-slate-950 py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="space-y-2">
          <Badge className="border-[#0466d1]/50 bg-white/5 text-[#e9ecef]">Capabilities</Badge>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Built for modern data teams</h2>
          <p className="text-slate-200/80">
            Four core services that convert unstructured inputs into governed, analytics-ready intelligence.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: 'easeOut' }}
            >
              <Card className="relative h-full overflow-hidden border-white/10 bg-gradient-to-br from-white/5 via-slate-900/30 to-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#0466d1]/50 hover:shadow-[0_25px_120px_-60px_rgba(4,102,209,0.75)]">
                <div className={`absolute inset-0 opacity-60 bg-gradient-to-br ${feature.accent}`} />
                <div className="absolute inset-0 bg-slate-950/60" />
                <CardHeader className="relative space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white shadow-inner shadow-slate-900/50">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription className="text-slate-100/80">{feature.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="relative space-y-4">
                  <ul className="space-y-2 text-sm text-slate-100/80">
                    {feature.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#7bc5ff]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="inline-flex items-center gap-2 text-sm font-semibold text-[#7bc5ff] transition-colors hover:text-white">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section id="about" className="bg-slate-950 pb-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <div className="space-y-2">
          <Badge className="border-[#0466d1]/50 bg-white/5 text-[#e9ecef]">How it works</Badge>
          <h3 className="text-3xl font-bold text-white sm:text-4xl">From inputs to impact</h3>
          <p className="text-slate-200/80">A guided three-step flow to connect, process, and activate your data.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step, idx) => (
            <Card key={step.title} className="border-white/10 bg-white/5 text-white">
              <CardContent className="space-y-3 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0466d1]/15 text-[#7bc5ff]">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold text-slate-200/80">Step {idx + 1}</span>
                </div>
                <h4 className="text-lg font-semibold">{step.title}</h4>
                <p className="text-sm text-slate-200/80">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function SocialProof() {
  return (
    <section id="resources" className="bg-slate-950 pb-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <div className="flex flex-col gap-4">
          <p className="text-sm uppercase tracking-[0.18em] text-slate-300/70">Trusted by data-forward teams</p>
          <div className="grid grid-cols-2 gap-3 text-sm text-white/80 sm:grid-cols-3 lg:grid-cols-6">
            {logos.map((logo) => (
              <div
                key={logo}
                className="flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-wide"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4 md:grid-cols-2">
            {stats.map((stat) => (
              <Card key={stat.label} className="border-white/10 bg-white/5 text-white">
                <CardContent className="space-y-1 p-5">
                  <p className="text-xs uppercase tracking-[0.14em] text-slate-300/70">{stat.label}</p>
                  <p className="text-2xl font-semibold">{stat.value}</p>
                  <p className="text-xs text-slate-200/70">{stat.helper}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="space-y-4">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="border-white/10 bg-white/5 text-white">
                <CardContent className="flex gap-4 p-5">
                  <div className={`mt-1 flex h-10 w-10 items-center justify-center rounded-full ${testimonial.color}`}>
                    <span className="text-sm font-semibold text-white">{testimonial.name.slice(0, 2)}</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-base text-white/90">“{testimonial.quote}”</p>
                    <p className="text-sm text-slate-200/80">
                      {testimonial.name} • {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section id="contact" className="bg-gradient-to-br from-[#012d66] via-[#023e8a] to-[#0353b5] py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-white">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.18em] text-white/80">Ready to Transform Your Data?</p>
          <h3 className="text-3xl font-bold sm:text-4xl">See how Vibe accelerates your data automation.</h3>
          <p className="max-w-2xl text-white/80">
            Request a tailored demo or start a free trial. Our team will align on data sources, compliance needs, and success
            metrics in minutes.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="flex flex-wrap gap-3">
            <Button size="lg" className="bg-white text-[#012d66] hover:bg-white/90">
              Get Started
            </Button>
            <Button size="lg" variant="secondary" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
              Talk to sales
            </Button>
          </div>
          <div className="rounded-2xl border border-white/25 bg-white/10 p-4 backdrop-blur">
            <form className="grid gap-3 sm:grid-cols-[2fr_1fr]">
              <input
                type="email"
                placeholder="Work email"
                className="h-11 rounded-xl border border-white/20 bg-white/10 px-3 text-sm text-white placeholder:text-white/70 focus:border-white/60 focus:outline-none"
              />
              <Button className="h-11 bg-[#012d66] text-white hover:bg-[#023e8a] sm:justify-self-end">Request demo</Button>
            </form>
            <p className="mt-2 text-xs text-white/70">We respond within one business day.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const links = ['Features', 'Pricing', 'Security', 'Docs', 'Status']
  const socials = ['LinkedIn', 'Twitter', 'YouTube']

  return (
    <footer className="border-t border-white/10 bg-slate-950 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0466d1] via-[#0353b5] to-[#012d66] text-white shadow-lg shadow-blue-900/40">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <p className="font-semibold text-white">Vibe Data</p>
            <p className="text-xs text-slate-200/80">AI-powered data automation platform</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-200/80">
          {links.map((link) => (
            <a key={link} href="#" className="hover:text-white">
              {link}
            </a>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 text-sm text-slate-200/80">
          {socials.map((social) => (
            <a key={social} href="#" className="hover:text-white">
              {social}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-6 text-center text-xs text-slate-400">© {new Date().getFullYear()} Vibe Data. All rights reserved.</div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Navigation />
      <Hero />
      <LiveDemo />
      <Features />
      <HowItWorks />
      <SocialProof />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
