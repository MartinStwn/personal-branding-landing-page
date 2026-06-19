import {
  ShoppingCart,
  Package,
  BarChart3,
  Users,
  Settings,
  ShieldCheck,
  Lock,
  FileSearch,
  KeyRound,
  Eye,
  Database,
  AlertTriangle,
  CheckCircle2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'

const businessFeatures = [
  { icon: ShoppingCart, label: 'POS Transactions' },
  { icon: Package, label: 'Inventory Management' },
  { icon: BarChart3, label: 'Sales Analytics' },
  { icon: Settings, label: 'Product Management' },
  { icon: Users, label: 'User Management' },
]

const securityFeatures = [
  { icon: KeyRound, label: 'Argon2id Password Hashing' },
  { icon: Users, label: 'Role-Based Access Control' },
  { icon: FileSearch, label: 'Audit Logging' },
  { icon: Lock, label: 'CSRF Protection' },
  { icon: Eye, label: 'Session Regeneration' },
  { icon: Database, label: 'SQL Injection Prevention' },
  { icon: ShieldCheck, label: 'XSS Protection' },
  { icon: AlertTriangle, label: 'Unauthorized Access Monitoring' },
  { icon: CheckCircle2, label: 'OWASP Top 10 Practices' },
]

const visualSections = [
  {
    title: 'Analytics Dashboard',
    desc: 'Real-time sales data with revenue charts, top products, and daily transaction summaries.',
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'Security Center',
    desc: 'Centralized security dashboard showing active sessions, recent threats, and system health.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Audit Logs',
    desc: 'Complete trail of all system actions with timestamps, user IDs, and IP tracking.',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    title: 'Role Management',
    desc: 'Granular permission controls for Admin, Manager, and Cashier roles.',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Inventory Alerts',
    desc: 'Automated low-stock notifications and inventory discrepancy reports.',
    gradient: 'from-red-500 to-rose-500',
  },
]

export function CaseStudy() {
  return (
    <section id="case-study" className="relative overflow-hidden py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[160px]"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Case Study
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            SecurePOS — Restaurant Management System
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            A deep dive into how I built a secure, production-ready POS system
            for restaurants handling 200+ daily transactions.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Business Features */}
          <Reveal>
            <div className="glass rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-blue-500/15 text-blue-500">
                  <ShoppingCart className="size-5" />
                </span>
                <h3 className="text-lg font-semibold">Business Features</h3>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {businessFeatures.map((f) => (
                  <div
                    key={f.label}
                    className="flex items-center gap-3 rounded-xl border border-border bg-card/50 p-3"
                  >
                    <f.icon className="size-5 shrink-0 text-primary" />
                    <span className="text-sm">{f.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Security Features */}
          <Reveal delay={100}>
            <div className="glass rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-500">
                  <ShieldCheck className="size-5" />
                </span>
                <h3 className="text-lg font-semibold">Security Features</h3>
              </div>
              <div className="mt-6 grid gap-2">
                {securityFeatures.map((f) => (
                  <div
                    key={f.label}
                    className="flex items-center gap-3 rounded-xl border border-border bg-card/50 px-3 py-2"
                  >
                    <f.icon className="size-4 shrink-0 text-primary" />
                    <span className="text-sm">{f.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Visual Sections */}
        <Reveal delay={150} className="mt-8">
          <div className="glass rounded-2xl p-6 sm:p-8">
            <h3 className="text-center text-lg font-semibold">
              System Screens
            </h3>
            <p className="mt-1 text-center text-sm text-muted-foreground">
              Key interfaces designed for restaurant operations and security
              management.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {visualSections.map((v) => (
                <div
                  key={v.title}
                  className="group relative overflow-hidden rounded-xl border border-border bg-card/50 transition-all hover:-translate-y-0.5"
                >
                  <div
                    className={`flex h-24 items-center justify-center bg-gradient-to-br ${v.gradient} opacity-20`}
                  />
                  <div className="p-4">
                    <h4 className="text-sm font-semibold">{v.title}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal delay={200} className="mt-8 text-center">
          <Button asChild size="lg">
            <a href="#contact">
              Build Your Secure Business System
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
