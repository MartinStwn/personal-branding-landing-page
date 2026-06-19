import {
  KeyRound,
  ShieldCheck,
  FileSearch,
  Eye,
  Lock,
  Database,
  Code2,
  AlertTriangle,
  Activity,
  CheckCircle2,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

const securityItems = [
  { icon: KeyRound, label: 'Argon2id Password Hashing', desc: 'Industry-standard password hashing that resists GPU and ASIC attacks.' },
  { icon: ShieldCheck, label: 'Role-Based Access Control', desc: 'Granular permissions for Admin, Manager, and Cashier roles.' },
  { icon: FileSearch, label: 'Audit Logging', desc: 'Complete trail of who did what and when across the system.' },
  { icon: Eye, label: 'Secure Session Management', desc: 'Session regeneration and HTTP-only cookies prevent hijacking.' },
  { icon: Lock, label: 'CSRF Protection', desc: 'Token-based verification ensures every action is intentional.' },
  { icon: Database, label: 'SQL Injection Prevention', desc: 'Parameterized queries and prepared statements block data theft.' },
  { icon: Code2, label: 'XSS Protection', desc: 'Content Security Policy and output encoding prevent script injection.' },
  { icon: AlertTriangle, label: 'OWASP Top 10 Compliance', desc: 'All projects aligned with OWASP Top 10 web security risks.' },
  { icon: Activity, label: 'Security Monitoring', desc: 'Real-time alerts for unauthorized access attempts and anomalies.' },
]

export function SecuritySection() {
  return (
    <section id="security" className="relative overflow-hidden py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[180px]"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Security
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Security by Design
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            I don&apos;t add security as an afterthought — every application is
            built with protection at its core. Here&apos;s what that means for
            your business.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {securityItems.map((item, i) => (
            <Reveal key={item.label} delay={i * 60}>
              <div className="glass group flex items-start gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon className="size-5" />
                </span>
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold">
                    <CheckCircle2 className="size-4 text-primary" />
                    {item.label}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Trust badges */}
        <Reveal delay={200} className="mt-10">
          <div className="glass flex flex-wrap items-center justify-center gap-6 rounded-2xl px-6 py-6">
            {[
              { label: 'OWASP Top 10', icon: ShieldCheck },
              { label: 'GDPR Aware', icon: Lock },
              { label: 'SOC2 Principles', icon: FileSearch },
              { label: 'Zero Trust Model', icon: KeyRound },
            ].map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <badge.icon className="size-4 text-primary" />
                <span className="font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
